'use client';
import React from 'react';
import { NavLink, useNavigate } from 'next/link';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  TrendingUp, 
  ClipboardCheck, 
  Layers, 
  GitBranch, 
  Shield, 
  DoorOpen, 
  Zap, 
  FileText, 
  BookOpen,
  Globe,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useNavigationMode } from '../App';

const navItems = [
  { path: '/', icon: LayoutDashboard, labelKey: 'sidebar.systemStatus' },
  { path: '/comex-overview', icon: FileText, labelKey: 'sidebar.comexOverview' },
  { path: '/market-pressure', icon: TrendingUp, labelKey: 'sidebar.marketPressure' },
  { path: '/decision-readiness', icon: ClipboardCheck, labelKey: 'sidebar.decisionReadiness' },
  { path: '/decision-scenarios', icon: Layers, labelKey: 'sidebar.decisionScenarios' },
  { path: '/process-visibility', icon: GitBranch, labelKey: 'sidebar.processVisibility' },
  { path: '/proof-blocks', icon: Shield, labelKey: 'sidebar.proofBlocks' },
  { path: '/decision-gates', icon: DoorOpen, labelKey: 'sidebar.decisionGates' },
  { path: '/decision-amplifiers', icon: Zap, labelKey: 'sidebar.decisionAmplifiers' },
  { path: '/sources-method', icon: BookOpen, labelKey: 'sidebar.sourcesMethod' },
];

export function Sidebar() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { toggleMode } = useNavigationMode();
  
  const currentLang = i18n.language;
  
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  return (
    <aside className="sidebar" data-testid="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#e89565] rounded flex items-center justify-center">
            <span className="text-[#262626] font-bold text-lg">ID</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">
              Industrial Decision
            </h1>
            <span className="text-xs text-muted-foreground tracking-wide">
              {t('sidebar.version')}
            </span>
          </div>
        </div>
        
        {/* Switch to Corporate View */}
        <button
          onClick={() => router.push('/about')}
          className="w-full flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded transition-colors"
          data-testid="corporate-view-btn"
        >
          <span>View Corporate Site</span>
          <ExternalLink size={14} />
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="sidebar-nav flex-1 overflow-y-auto scrollbar-thin">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
                data-testid={`nav-${item.path.replace('/', '') || 'home'}`}
              >
                <item.icon size={18} className="sidebar-icon" />
                <span className="sidebar-label">{t(item.labelKey)}</span>
                <ChevronRight size={14} className="sidebar-chevron" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Footer */}
      <div className="sidebar-footer">
        <button
          onClick={toggleLanguage}
          className="language-toggle"
          data-testid="language-toggle"
          aria-label={`Switch to ${currentLang === 'en' ? 'French' : 'English'}`}
        >
          <Globe size={16} className="text-[#e89565]" />
          <span className={currentLang === 'en' ? 'text-[#e89565] font-semibold' : 'text-muted-foreground'}>
            EN
          </span>
          <span className="text-muted-foreground">/</span>
          <span className={currentLang === 'fr' ? 'text-[#e89565] font-semibold' : 'text-muted-foreground'}>
            FR
          </span>
        </button>
        <p className="text-xs text-muted-foreground text-center mt-2 italic">
          {t('sidebar.translationReady')}
        </p>
      </div>
    </aside>
  );
}

export function OperatorPanel() {
  const { t } = useTranslation();
  
  return (
    <aside className="operator-panel" data-testid="operator-panel">
      <div className="operator-header">
        <div className="status-indicator pulse-success" />
        <span className="operator-label">{t('operator.label')}</span>
      </div>
      
      <div className="operator-content">
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground">{t('operator.name')}</h3>
          <p className="text-sm text-muted-foreground mt-1">{t('operator.title')}</p>
        </div>
        
        <div className="mt-4 space-y-2">
          <a 
            href={`mailto:${t('operator.email')}`}
            className="flex items-center gap-2 px-3 py-2 text-sm text-[#e89565] hover:bg-white/5 rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs break-all">{t('operator.email')}</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/lucas-ansel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm text-[#e89565] hover:bg-white/5 rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>{t('operator.linkedin')}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
