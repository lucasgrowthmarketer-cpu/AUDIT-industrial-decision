'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sidebar, OperatorPanel } from '@/components/Sidebar';

export default function DashboardLayout({ children }) {
  const { t } = useTranslation();
  
  return (
    <div className="dashboard-layout" data-testid="dashboard-layout">
      <Sidebar />
      
      <main id="main-content" className="dashboard-main scrollbar-thin">
        {children}
      </main>
      
      <OperatorPanel />
      
      <footer className="dashboard-footer">
        <div className="footer-content">
          <div className="footer-operator">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {t('footer.operatorTitle')}
            </span>
            <h4 className="text-lg font-bold text-foreground mt-1">
              {t('footer.operatorName')}
            </h4>
            <p className="text-sm text-muted-foreground">
              {t('footer.operatorSubtitle')}
            </p>
            <div className="flex gap-4 mt-2 text-sm">
              <a 
                href="mailto:lucas@industrialdecision.com" 
                className="text-[#e89565] hover:underline"
              >
                Contact Us
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.linkedin.com/company/industrial-decision" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#e89565] hover:underline"
              >
                LINKEDIN
              </a>
            </div>
          </div>
          
          <div className="footer-note">
            <p className="text-lg text-muted-foreground italic">
              {t('footer.note')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
