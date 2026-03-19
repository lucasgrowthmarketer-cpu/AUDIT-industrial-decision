import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe,
  ArrowRight,
  Linkedin,
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
  { path: '/case-studies', labelEn: 'Case Studies', labelFr: 'Études de Cas' },
  { path: '/insights', labelEn: 'Insights', labelFr: 'Ressources' },
];

function Header() {
  const { i18n } = useTranslation();
  const location = useLocation();
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
          <Link to="/home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#207bff] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">ID</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-[#1a1a1a]">Industrial</span>
              <span className="text-lg font-bold text-[#207bff]">Decision</span>
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
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link flex items-center gap-1 ${isActive ? 'active' : ''}`
                  }
                >
                  {currentLang === 'fr' ? item.labelFr : item.labelEn}
                  {item.dropdown && <ChevronDown size={14} />}
                </NavLink>
                
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.path && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-lg shadow-lg border border-slate-100 py-2 min-w-[200px]">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
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
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 text-sm text-[#4a5568] hover:text-[#207bff] transition-colors"
              data-testid="language-toggle"
            >
              <Globe size={16} />
              <span className="font-medium">{currentLang.toUpperCase()}</span>
            </button>
            
            {/* Contact CTA */}
            <Link
              to="/contact"
              className="hidden sm:flex btn-primary"
              data-testid="contact-cta"
            >
              {currentLang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            </Link>
            
            {/* Mobile Menu Button */}
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
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-[#207bff] bg-[#f0f7ff]' 
                      : 'text-[#4a5568] hover:text-[#207bff] hover:bg-[#f0f7ff]'
                  }`
                }
              >
                {currentLang === 'fr' ? item.labelFr : item.labelEn}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="block w-full mt-4 btn-primary text-center"
            >
              {currentLang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            </Link>
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
              <div className="w-10 h-10 bg-[#207bff] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ID</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Industrial</span>
                <span className="text-lg font-bold text-[#207bff]">Decision</span>
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
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:contact@industrialdecision.com"
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
                { path: '/case-studies', en: 'Case Studies', fr: 'Études de Cas' },
                { path: '/insights', en: 'Resources', fr: 'Ressources' },
                { path: '/contact', en: 'Contact', fr: 'Contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
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
                  href="mailto:contact@industrialdecision.com"
                  className="text-[#a0aec0] hover:text-[#207bff] transition-colors"
                >
                  contact@industrialdecision.com
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
            <Link to="/contact" className="hover:text-white transition-colors">
              {currentLang === 'fr' ? 'Confidentialité' : 'Privacy'}
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              {currentLang === 'fr' ? 'Mentions légales' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa]">
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
