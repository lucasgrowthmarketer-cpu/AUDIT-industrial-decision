'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe,
  ExternalLink,
  Linkedin,
  Mail
} from 'lucide-react';

const corporateNavItems = [
  { path: '/about', label: 'About', labelFr: 'À propos' },
  { path: '/sectors', label: 'Sectors', labelFr: 'Secteurs' },
  { path: '/expertise', label: 'Expertise', labelFr: 'Expertise' },
  { path: '/insights', label: 'Insights', labelFr: 'Perspectives' },
  { path: '/careers', label: 'Careers', labelFr: 'Carrières' },
  { path: '/contact', label: 'Contact', labelFr: 'Contact' },
];

function CorporateHeader() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const currentLang = i18n.language;
  
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  return (
    <header className="corporate-header glass-strong sticky top-0 z-50" data-testid="corporate-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/about" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#e89565] rounded flex items-center justify-center">
              <span className="text-[#262626] font-bold text-lg">ID</span>
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">
              Industrial Decision
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {corporateNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-[#e89565]' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`
                }
              >
                {currentLang === 'fr' ? item.labelFr : item.label}
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Decision Interface CTA */}
            <button
              onClick={() => router.push('/')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#262626] bg-[#e89565] rounded hover:bg-[#f0a67d] transition-colors"
              data-testid="decision-interface-btn"
            >
              Decision Interface
              <ExternalLink size={14} />
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="header-language-toggle"
            >
              <Globe size={16} />
              <span className="font-medium">{currentLang.toUpperCase()}</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#1a1a1a]">
          <nav className="px-4 py-4 space-y-2">
            {corporateNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium rounded transition-colors ${
                    isActive 
                      ? 'text-[#e89565] bg-white/5' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`
                }
              >
                {currentLang === 'fr' ? item.labelFr : item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                router.push('/');
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-[#262626] bg-[#e89565] rounded hover:bg-[#f0a67d] transition-colors"
            >
              Decision Interface
              <ExternalLink size={16} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function CorporateFooter() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <footer className="corporate-footer bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#e89565] rounded flex items-center justify-center">
                <span className="text-[#262626] font-bold text-lg">ID</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Industrial Decision
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {currentLang === 'fr' 
                ? 'Stratégie digitale et architecture web industrielle. Nous aidons les dirigeants à prendre de meilleures décisions.'
                : 'Digital strategy and industrial web architecture. We help leaders make better decisions.'
              }
            </p>
            <p className="mt-4 text-lg font-medium text-muted-foreground italic">
              {t('footer.note')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {currentLang === 'fr' ? 'Liens rapides' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {corporateNavItems.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-muted-foreground hover:text-[#e89565] transition-colors"
                  >
                    {currentLang === 'fr' ? item.labelFr : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:direction@industrialdecision.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#e89565] transition-colors"
                >
                  <Mail size={16} />
                  <span>direction@industrialdecision.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/industrial-decision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#e89565] transition-colors"
                >
                  
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Industrial Decision. {currentLang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:text-foreground transition-colors">
              {currentLang === 'fr' ? 'Confidentialité' : 'Privacy'}
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              {currentLang === 'fr' ? 'Mentions légales' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CorporateLayout({ children }) {
  return (
    <div className="corporate-layout min-h-screen flex flex-col" data-testid="corporate-layout">
      <CorporateHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <CorporateFooter />
    </div>
  );
}
