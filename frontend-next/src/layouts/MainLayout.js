'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const navItems = [
  { path: '/about', labelEn: 'About', labelFr: 'À propos' },
  { path: '/team', labelEn: 'Team', labelFr: 'Équipe' },
  { 
    path: '/expertise', 
    labelEn: 'Services', 
    labelFr: 'Services',
    dropdown: [
      { path: '/expertise/audit-drs', labelEn: 'Decision Readiness Audit', labelFr: 'Audit DRS' },
      { path: '/expertise/site-decisionnel', labelEn: 'Decision-Grade Website', labelFr: 'Site Décisionnel' },
      { path: '/expertise/strategie-acquisition', labelEn: 'Acquisition Strategy', labelFr: 'Stratégie d\'Acquisition' },
      { path: '/expertise/accompagnement', labelEn: 'Ongoing Advisory', labelFr: 'Accompagnement' },
    ]
  },
  { path: '/sectors', labelEn: 'Sectors', labelFr: 'Secteurs' },
  {
    path: '/case-studies',
    labelEn: 'Case Studies',
    labelFr: 'Études de Cas',
    dropdown: [
      { path: '/etudes-de-cas/alma-machines-outils', labelEn: 'ALMA Machines-Outils', labelFr: 'ALMA Machines-Outils' },
    ],
  },
  {
    path: '/insights',
    labelEn: 'Insights',
    labelFr: 'Ressources',
    dropdown: [
      {
        path: '/barometre-digital-machine-outil',
        labelEn: 'Machine Tool Digital Barometer 2026',
        labelFr: 'Baromètre digital machine-outil 2026',
      },
      { path: '/faq', labelEn: 'FAQ', labelFr: 'FAQ' },
    ],
  },
];

function Header() {
  const { i18n } = useTranslation();
  const location = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const currentLang = i18n.language;
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2.5 group">
            <img src="/logo-id.png" alt="ID" className="w-12 h-12 rounded-lg bg-white p-0.5 transition-transform group-hover:scale-105" />
            <div className="hidden sm:block">
              <span className="text-base font-bold text-[#1a1a1a]">Industrial</span>
              <span className="text-base font-bold text-[#207bff]">Decision</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className="nav-link flex items-center gap-1"
                >
                  {currentLang === 'fr' ? item.labelFr : item.labelEn}
                  {item.dropdown && <ChevronDown size={14} />}
                </Link>
                
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.path && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-lg shadow-lg border border-slate-100 py-2 min-w-[200px]">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-[#4a5568] hover:text-[#207bff] hover:bg-[#f0f7ff] transition-colors"
                        >
                          {currentLang === 'fr' ? subItem.labelFr : subItem.labelEn}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Actions — all on one line */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-2 text-sm text-[#4a5568] hover:text-[#207bff] transition-colors"
              data-testid="language-toggle"
            >
              <Globe size={14} />
              <span className="font-medium text-xs">{currentLang.toUpperCase()}</span>
            </button>
            
            <Link
              href="/demo"
              className="hidden lg:flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#207bff] border border-[#207bff]/20 rounded-md hover:bg-[#f0f7ff] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              {currentLang === 'fr' ? 'Démo' : 'Demo'}
            </Link>
            
            <Link
              href="/contact"
              className="hidden lg:flex btn-primary text-xs px-4 py-1.5"
              data-testid="contact-cta"
            >
              {currentLang === 'fr' ? 'Contact' : 'Contact'}
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4a5568] hover:text-[#207bff]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-colors text-[#4a5568] hover:text-[#207bff] hover:bg-[#f0f7ff]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {currentLang === 'fr' ? item.labelFr : item.labelEn}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 border-l border-slate-100 pl-3 space-y-1 mb-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        href={subItem.path}
                        className="block px-4 py-2 rounded-lg text-sm text-[#718096] hover:text-[#207bff] hover:bg-[#f0f7ff] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {currentLang === 'fr' ? subItem.labelFr : subItem.labelEn}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 mt-4">
              <Link
                href="/demo"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-[#207bff] border border-[#207bff]/20 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                {currentLang === 'fr' ? 'Démo' : 'Demo'}
              </Link>
              <Link
                href="/contact"
                className="flex-1 btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {currentLang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-id.png" alt="ID" className="w-12 h-12 rounded-lg bg-white p-0.5" />
              <div>
                <span className="text-base font-bold text-white">Industrial</span>
                <span className="text-base font-bold text-[#207bff]">Decision</span>
              </div>
            </div>
            <p className="text-[#a0aec0] leading-relaxed max-w-md mb-6">
              {currentLang === 'fr' 
                ? 'Cabinet spécialisé dans l\'audit et la transformation digitale des acteurs industriels en France. Machine-outil, restructuration, services industriels.'
                : 'Specialized firm in digital audit and transformation for industrial actors in France. Machine tools, restructuring, industrial services.'
              }
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/industrial-decision"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#207bff] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a 
                href="mailto:lucas@industrialdecision.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#207bff] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {currentLang === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {[
                { path: '/about', en: 'About', fr: 'À propos' },
                { path: '/expertise', en: 'Services', fr: 'Services' },
                { path: '/sectors', en: 'Sectors', fr: 'Secteurs' },
                { path: '/agence-web-industrie', en: 'Coverage Areas', fr: 'Zones d\'intervention' },
                { path: '/case-studies', en: 'Case Studies', fr: 'Études de Cas' },
                { path: '/insights', en: 'Resources', fr: 'Ressources' },
                { path: '/faq', en: 'FAQ', fr: 'FAQ' },
                { path: '/contact', en: 'Contact', fr: 'Contact' },
                { path: '/demo', en: 'Platform Demo', fr: 'Démo Plateforme' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className="text-[#a0aec0] hover:text-[#207bff] transition-colors"
                  >
                    {currentLang === 'fr' ? item.fr : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#207bff] flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:lucas@industrialdecision.com"
                  className="text-[#a0aec0] hover:text-[#207bff] transition-colors"
                >
                  lucas@industrialdecision.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#207bff] flex-shrink-0 mt-0.5" />
                <span className="text-[#a0aec0]">
                  Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#718096]">
            © {new Date().getFullYear()} Industrial Decision. {currentLang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-6 text-sm text-[#718096]">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              {currentLang === 'fr' ? 'Confidentialité' : 'Privacy'}
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              {currentLang === 'fr' ? 'Mentions légales' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa]">
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
