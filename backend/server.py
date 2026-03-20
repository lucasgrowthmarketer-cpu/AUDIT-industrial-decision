from fastapi import FastAPI, HTTPException, Request, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional, Dict, Any, List
from datetime import datetime, timezone
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Logging setup
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Industrial Decision API",
    description="Backend API for Industrial Decision - Big-4 Style Industrial Advisory Platform",
    version="2.1.0"
)

# CORS
origins = os.environ.get('CORS_ORIGINS', '*')
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins.split(',') if origins != '*' else ['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# MongoDB connection
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'industrial_decision')

client = None
db = None

@app.on_event("startup")
async def startup_db_client():
    global client, db
    try:
        client = AsyncIOMotorClient(MONGO_URL)
        db = client[DB_NAME]
        # Create indexes
        await db.leads.create_index("created_at")
        await db.leads.create_index("email")
        await db.leads.create_index("gate_type")
        await db.newsletter.create_index("email", unique=True)
        await db.downloads.create_index("asset_id")
        logger.info(f"Connected to MongoDB: {DB_NAME}")
    except Exception as e:
        logger.error(f"MongoDB connection error: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    global client
    if client:
        client.close()

# Pydantic models
class ContactForm(BaseModel):
    gate_type: str = "general"
    name: Optional[str] = None
    company: Optional[str] = None
    email: EmailStr
    subject: Optional[str] = None
    message: Optional[str] = None
    context: Optional[str] = None
    preferred_contact: Optional[str] = None
    language: str = "en"
    source_page: Optional[str] = None
    utm_json: Optional[Dict[str, Any]] = None
    # Honeypot field
    website: Optional[str] = None

class NewsletterSubscribe(BaseModel):
    email: EmailStr
    sector_interest: Optional[str] = "general"
    language: str = "en"

class DownloadTrack(BaseModel):
    asset_id: str
    email: Optional[str] = None
    company: Optional[str] = None
    source_page: Optional[str] = None
    utm_json: Optional[Dict[str, Any]] = None

class ContactResponse(BaseModel):
    success: bool
    message: str
    lead_id: Optional[str] = None

class NewsletterResponse(BaseModel):
    success: bool
    message: str

class DownloadResponse(BaseModel):
    success: bool
    message: str

# Rate limiting (simple in-memory)
rate_limit_store: Dict[str, List[datetime]] = {}
RATE_LIMIT_WINDOW_MS = int(os.environ.get('RATE_LIMIT_WINDOW_MS', 60000))
RATE_LIMIT_MAX = int(os.environ.get('RATE_LIMIT_MAX', 10))

def check_rate_limit(ip: str) -> bool:
    now = datetime.now(timezone.utc)
    window = RATE_LIMIT_WINDOW_MS / 1000  # Convert to seconds
    
    if ip not in rate_limit_store:
        rate_limit_store[ip] = []
    
    # Clean old entries
    rate_limit_store[ip] = [
        t for t in rate_limit_store[ip] 
        if (now - t).total_seconds() < window
    ]
    
    if len(rate_limit_store[ip]) >= RATE_LIMIT_MAX:
        return False
    
    rate_limit_store[ip].append(now)
    return True

# API Endpoints
@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "Industrial Decision API",
        "version": "2.1.0",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact(request: Request, form: ContactForm = Body(...)):
    """Submit contact form / decision gate request"""
    
    # Get client IP for rate limiting
    client_ip = request.client.host if request.client else "unknown"
    
    # Check rate limit
    if not check_rate_limit(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
    
    # Honeypot check
    if form.website:
        logger.warning(f"Honeypot triggered from IP: {client_ip}")
        # Return success to avoid tipping off bots
        return ContactResponse(success=True, message="Request received")
    
    try:
        # Create lead document
        lead_doc = {
            "created_at": datetime.now(timezone.utc),
            "gate_type": form.gate_type,
            "name": form.name,
            "company": form.company,
            "email": form.email,
            "subject": form.subject,
            "message": form.message,
            "context": form.context,
            "preferred_contact": form.preferred_contact,
            "language": form.language,
            "source_page": form.source_page,
            "utm_json": form.utm_json,
            "ip_address": client_ip,
            "status": "new"
        }
        
        result = await db.leads.insert_one(lead_doc)
        lead_id = str(result.inserted_id)
        
        logger.info(f"New lead created: {lead_id} from gate: {form.gate_type}")
        
        # Send email notification via Brevo SMTP
        try:
            await send_lead_notification(form, lead_id)
        except Exception as email_err:
            logger.error(f"Email notification failed: {email_err}")
        
        return ContactResponse(
            success=True,
            message="Your request has been received. We will contact you shortly.",
            lead_id=lead_id
        )
        
    except Exception as e:
        logger.error(f"Error saving lead: {e}")
        raise HTTPException(status_code=500, detail="Error processing request")

@app.post("/api/newsletter/subscribe", response_model=NewsletterResponse)
async def subscribe_newsletter(request: Request, form: NewsletterSubscribe = Body(...)):
    """Subscribe to newsletter"""
    
    client_ip = request.client.host if request.client else "unknown"
    
    if not check_rate_limit(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
    
    try:
        # Check if already subscribed
        existing = await db.newsletter.find_one({"email": form.email})
        if existing:
            return NewsletterResponse(
                success=True,
                message="You are already subscribed to our newsletter."
            )
        
        # Create subscription
        subscription_doc = {
            "created_at": datetime.now(timezone.utc),
            "email": form.email,
            "sector_interest": form.sector_interest,
            "language": form.language,
            "status": "active"
        }
        
        await db.newsletter.insert_one(subscription_doc)
        
        logger.info(f"New newsletter subscription: {form.email}")
        
        return NewsletterResponse(
            success=True,
            message="Successfully subscribed to the newsletter."
        )
        
    except Exception as e:
        logger.error(f"Error subscribing to newsletter: {e}")
        raise HTTPException(status_code=500, detail="Error processing subscription")

@app.post("/api/downloads/track", response_model=DownloadResponse)
async def track_download(request: Request, form: DownloadTrack = Body(...)):
    """Track asset downloads"""
    
    client_ip = request.client.host if request.client else "unknown"
    
    try:
        download_doc = {
            "created_at": datetime.now(timezone.utc),
            "asset_id": form.asset_id,
            "email": form.email,
            "company": form.company,
            "source_page": form.source_page,
            "utm_json": form.utm_json,
            "ip_address": client_ip
        }
        
        await db.downloads.insert_one(download_doc)
        
        logger.info(f"Download tracked: {form.asset_id}")
        
        return DownloadResponse(
            success=True,
            message="Download tracked successfully."
        )
        
    except Exception as e:
        logger.error(f"Error tracking download: {e}")
        raise HTTPException(status_code=500, detail="Error tracking download")

@app.get("/api/stats")
async def get_stats():
    """Get basic stats (for admin/debug)"""
    try:
        leads_count = await db.leads.count_documents({})
        newsletter_count = await db.newsletter.count_documents({})
        downloads_count = await db.downloads.count_documents({})
        
        return {
            "leads": leads_count,
            "newsletter_subscribers": newsletter_count,
            "downloads": downloads_count,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
    except Exception as e:
        logger.error(f"Error getting stats: {e}")
        return {"error": "Could not fetch stats"}

# Serve static placeholder for COMEX PDF
@app.get("/api/comex-summary")
async def get_comex_summary():
    """Placeholder for COMEX summary PDF generation"""
    return {
        "message": "COMEX summary PDF can be downloaded from /comex-summary.pdf",
        "status": "available"
    }

async def send_lead_notification(form, lead_id: str):
    """Send email notification to direction@industrialdecision.com via Brevo SMTP"""
    smtp_host = os.environ.get('SMTP_HOST', 'smtp-relay.brevo.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '2525'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_pass = os.environ.get('SMTP_PASS', '')
    to_email = os.environ.get('LEAD_TO_EMAIL', 'direction@industrialdecision.com')
    from_email = os.environ.get('LEAD_FROM_EMAIL', 'direction@industrialdecision.com')
    
    if not smtp_user or not smtp_pass:
        logger.warning("SMTP credentials not configured, skipping email")
        return
    
    gate_labels = {
        'discreet': '🔒 Discret',
        'exploratory': '🔍 Exploratoire', 
        'urgent': '🚨 Urgent',
        'general': '📩 Général'
    }
    gate_label = gate_labels.get(form.gate_type, form.gate_type)
    
    subject = f"[Industrial Decision] Nouveau lead {gate_label} — {form.name}"
    
    html_body = f"""
    <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #207bff; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">Nouveau lead — {gate_label}</h1>
            <p style="margin: 4px 0 0; opacity: 0.8; font-size: 14px;">ID: {lead_id}</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #718096; font-size: 13px; width: 120px;">Nom</td><td style="padding: 8px 0; font-weight: 600;">{form.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:{form.email}" style="color: #207bff;">{form.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Entreprise</td><td style="padding: 8px 0;">{form.company or '—'}</td></tr>
                <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Type</td><td style="padding: 8px 0;">{gate_label}</td></tr>
                <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Langue</td><td style="padding: 8px 0;">{form.language or 'fr'}</td></tr>
                <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Source</td><td style="padding: 8px 0;">{form.source_page or '—'}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0 0 4px; color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                <p style="margin: 0; line-height: 1.6;">{form.message}</p>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #a0aec0;">Ce lead a été envoyé depuis le formulaire de contact industrialdecision.com</p>
        </div>
    </div>
    """
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Reply-To'] = form.email
    msg.attach(MIMEText(html_body, 'html'))
    
    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(from_email, [to_email], msg.as_string())
        logger.info(f"Lead notification sent to {to_email} for lead {lead_id}")
    except Exception as e:
        logger.error(f"SMTP error: {e}")
        raise

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
