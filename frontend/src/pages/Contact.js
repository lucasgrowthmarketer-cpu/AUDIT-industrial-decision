import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle,
  MessageSquare,
  FileText,
  Bell
} from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL || '';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const [activeForm, setActiveForm] = useState('contact');
  const [contactForm, setContactForm] = useState({});
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contactForm,
          language: currentLang,
          source_page: '/contact',
          gate_type: 'general'
        })
      });
      
      if (response.ok) {
        toast.success(currentLang === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!');
        setContactForm({});
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      toast.error(currentLang === 'fr' ? 'Erreur lors de l\'envoi' : 'Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          language: currentLang,
          sector_interest: 'general'
        })
      });
      
      if (response.ok) {
        toast.success(currentLang === 'fr' ? 'Inscription réussie!' : 'Successfully subscribed!');
        setNewsletterEmail('');
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      toast.error(currentLang === 'fr' ? 'Erreur lors de l\'inscription' : 'Error subscribing');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="animate-fade-in" data-testid="contact-page">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#262626]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {currentLang === 'fr' ? 'Contact' : 'Contact'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {currentLang === 'fr' 
              ? 'Une question ? Un projet ? Contactez-nous pour un échange confidentiel.'
              : 'A question? A project? Contact us for a confidential discussion.'}
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-foreground mb-6">
                {currentLang === 'fr' ? 'Informations' : 'Information'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e89565]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#e89565]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:direction@industrialdecision.com"
                      className="text-sm text-muted-foreground hover:text-[#e89565] transition-colors"
                    >
                      direction@industrialdecision.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e89565]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin size={18} className="text-[#e89565]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/company/industrial-decision"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-[#e89565] transition-colors"
                    >
                      Industrial Decision
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e89565]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#e89565]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {currentLang === 'fr' ? 'Localisation' : 'Location'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>
              
              {/* GDPR Notice */}
              <div className="mt-8 p-4 bg-[#1a1a1a] rounded-lg">
                <p className="text-xs text-muted-foreground">
                  {currentLang === 'fr' 
                    ? 'Vos données sont traitées conformément au RGPD. Elles ne sont jamais partagées avec des tiers sans votre consentement.'
                    : 'Your data is processed in accordance with GDPR. It is never shared with third parties without your consent.'}
                </p>
              </div>
            </div>
            
            {/* Forms */}
            <div className="lg:col-span-2">
              {/* Form Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveForm('contact')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeForm === 'contact' 
                      ? 'bg-[#e89565] text-[#262626]' 
                      : 'bg-[#2a2a2a] text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid="tab-contact"
                >
                  <MessageSquare size={16} />
                  {currentLang === 'fr' ? 'Message' : 'Message'}
                </button>
                <button
                  onClick={() => setActiveForm('newsletter')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeForm === 'newsletter' 
                      ? 'bg-[#e89565] text-[#262626]' 
                      : 'bg-[#2a2a2a] text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid="tab-newsletter"
                >
                  <Bell size={16} />
                  {currentLang === 'fr' ? 'Newsletter' : 'Newsletter'}
                </button>
              </div>
              
              {/* Contact Form */}
              {activeForm === 'contact' && (
                <form onSubmit={handleContactSubmit} className="space-y-4" data-testid="contact-form">
                  {/* Honeypot */}
                  <input 
                    type="text" 
                    name="website" 
                    className="hidden" 
                    tabIndex="-1" 
                    autoComplete="off"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">
                        {currentLang === 'fr' ? 'Nom' : 'Name'} *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        required
                        value={contactForm.name || ''}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">
                        {currentLang === 'fr' ? 'Entreprise' : 'Company'}
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        value={contactForm.company || ''}
                        onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      value={contactForm.email || ''}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      {currentLang === 'fr' ? 'Sujet' : 'Subject'} *
                    </label>
                    <select
                      className="form-select"
                      required
                      value={contactForm.subject || ''}
                      onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                    >
                      <option value="">{currentLang === 'fr' ? 'Sélectionner...' : 'Select...'}</option>
                      <option value="general">{currentLang === 'fr' ? 'Question générale' : 'General inquiry'}</option>
                      <option value="project">{currentLang === 'fr' ? 'Projet' : 'Project'}</option>
                      <option value="partnership">{currentLang === 'fr' ? 'Partenariat' : 'Partnership'}</option>
                      <option value="careers">{currentLang === 'fr' ? 'Carrières' : 'Careers'}</option>
                      <option value="press">{currentLang === 'fr' ? 'Presse' : 'Press'}</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      {currentLang === 'fr' ? 'Message' : 'Message'} *
                    </label>
                    <textarea
                      className="form-textarea"
                      required
                      rows={5}
                      value={contactForm.message || ''}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    />
                  </div>
                  
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input 
                      type="checkbox" 
                      required 
                      className="mt-0.5"
                      data-testid="contact-gdpr"
                    />
                    <span>
                      {currentLang === 'fr' 
                        ? 'J\'accepte que mes données soient traitées conformément à la politique de confidentialité.'
                        : 'I accept that my data will be processed in accordance with the privacy policy.'}
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    data-testid="submit-contact"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">
                        {currentLang === 'fr' ? 'Envoi...' : 'Sending...'}
                      </span>
                    ) : (
                      <>
                        <Send size={16} />
                        {currentLang === 'fr' ? 'Envoyer' : 'Send'}
                      </>
                    )}
                  </button>
                </form>
              )}
              
              {/* Newsletter Form */}
              {activeForm === 'newsletter' && (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4" data-testid="newsletter-form">
                  <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {currentLang === 'fr' ? 'Restez informé' : 'Stay Informed'}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {currentLang === 'fr' 
                        ? 'Recevez nos dernières analyses et perspectives industrielles.'
                        : 'Receive our latest industrial analyses and insights.'}
                    </p>
                    
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex items-start gap-2 text-xs text-muted-foreground mb-4">
                      <input 
                        type="checkbox" 
                        required 
                        className="mt-0.5"
                        data-testid="newsletter-gdpr"
                      />
                      <span>
                        {currentLang === 'fr' 
                          ? 'J\'accepte de recevoir des communications par email. Je peux me désinscrire à tout moment.'
                          : 'I accept to receive email communications. I can unsubscribe at any time.'}
                      </span>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full"
                      data-testid="submit-newsletter"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">
                          {currentLang === 'fr' ? 'Inscription...' : 'Subscribing...'}
                        </span>
                      ) : (
                        <>
                          <CheckCircle size={16} />
                          {currentLang === 'fr' ? 'S\'inscrire' : 'Subscribe'}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
