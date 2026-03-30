'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { TrendingUp, AlertTriangle, Target, ArrowRight } from 'lucide-react';
import { nationalTrendData } from '@/data/industrial_pressure';

export default function SystemStatus() {
  const { t } = useTranslation();
  
  // Get latest data
  const latestData = nationalTrendData[nationalTrendData.length - 1];
  const previousData = nationalTrendData[nationalTrendData.length - 2];
  const yoyChange = ((latestData.total - previousData.total) / previousData.total * 100).toFixed(1);
  
  return (
    <div className="page-container animate-fade-in" data-testid="system-status-page">
      {/* Hero */}
      <section className="hero-section">
        <h1 className="hero-title">
          {t('systemStatus.title')}
          <span className="hero-emphasis">Engineering Better Decisions.</span>
        </h1>
        <p className="hero-subtitle">
          {t('systemStatus.heroSubtitle1')}
          <br />
          {t('systemStatus.heroSubtitle2')}
        </p>
      </section>
      
      {/* System Overview */}
      <section className="data-panel mb-6">
        <div className="data-panel-header">
          <h2 className="data-panel-title">{t('systemStatus.systemOverview')}</h2>
          <p className="data-panel-subtitle">{t('systemStatus.subtitle')}</p>
        </div>
        
        <div className="system-tags">
          <div className="system-tag">
            <span className="tag-label">{t('systemStatus.marketReality')}</span>
            <span className="tag-value">{t('systemStatus.marketRealityValue')}</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">{t('systemStatus.userState')}</span>
            <span className="tag-value">{t('systemStatus.userStateValue')}</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">{t('systemStatus.websiteRole')}</span>
            <span className="tag-value">{t('systemStatus.websiteRoleValue')}</span>
          </div>
        </div>
      </section>
      
      {/* KPI Grid */}
      <section className="mb-6">
        <div className="kpi-grid">
          <div className="kpi-widget" data-testid="kpi-total-failures">
            <div className="kpi-header">
              <span className="kpi-title">{t('systemStatus.totalFailures')}</span>
              <span className="kpi-trend positive">+{yoyChange}%</span>
            </div>
            <div className="kpi-value">{latestData.total.toLocaleString()}</div>
            <div className="kpi-source">{t('common.source')}: {t('common.banqueDeFrance')} 2025</div>
          </div>
          
          <div className="kpi-widget" data-testid="kpi-liquidations">
            <div className="kpi-header">
              <span className="kpi-title">{t('systemStatus.directLiquidations')}</span>
              <TrendingUp size={18} className="text-[#ef4444]" />
            </div>
            <div className="kpi-value">{latestData.ljDirectes.toLocaleString()}</div>
            <div className="kpi-source">LJ Directes</div>
          </div>
          
          <div className="kpi-widget" data-testid="kpi-restructuring">
            <div className="kpi-header">
              <span className="kpi-title">{t('systemStatus.judicialRestructuring')}</span>
              <AlertTriangle size={18} className="text-[#f59e0b]" />
            </div>
            <div className="kpi-value">{latestData.rjDirectes.toLocaleString()}</div>
            <div className="kpi-source">RJ Directes</div>
          </div>
        </div>
      </section>
      
      {/* Contextual Indicator */}
      <section className="info-block mb-6">
        <h3 className="info-block-title">{t('systemStatus.contextualIndicator')}</h3>
        <p className="info-block-text">{t('systemStatus.indicatorText')}</p>
      </section>
      
      {/* Decision Framework */}
      <section className="data-panel">
        <div className="data-panel-header">
          <h2 className="data-panel-title">{t('systemStatus.decisionFramework')}</h2>
        </div>
        
        <div className="framework-grid">
          <div className="framework-item">
            <h3 className="framework-title">{t('systemStatus.clarify')}</h3>
            <p className="framework-desc">{t('systemStatus.clarifyDesc')}</p>
          </div>
          <div className="framework-item">
            <h3 className="framework-title">{t('systemStatus.reassure')}</h3>
            <p className="framework-desc">{t('systemStatus.reassureDesc')}</p>
          </div>
          <div className="framework-item">
            <h3 className="framework-title">{t('systemStatus.triggerAction')}</h3>
            <p className="framework-desc">{t('systemStatus.triggerActionDesc')}</p>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link 
            to="/market-pressure" 
            className="flex items-center justify-between p-4 bg-[#2a2a2a] border border-white/5 rounded hover:border-[#e89565]/30 transition-colors"
            data-testid="quick-link-market"
          >
            <span className="font-medium">Market Pressure Analysis</span>
            <ArrowRight size={18} className="text-[#e89565]" />
          </Link>
          <Link 
            to="/decision-readiness" 
            className="flex items-center justify-between p-4 bg-[#2a2a2a] border border-white/5 rounded hover:border-[#e89565]/30 transition-colors"
            data-testid="quick-link-readiness"
          >
            <span className="font-medium">Decision Readiness</span>
            <ArrowRight size={18} className="text-[#e89565]" />
          </Link>
          <Link 
            to="/decision-gates" 
            className="flex items-center justify-between p-4 bg-[#2a2a2a] border border-white/5 rounded hover:border-[#e89565]/30 transition-colors"
            data-testid="quick-link-gates"
          >
            <span className="font-medium">Decision Gates</span>
            <ArrowRight size={18} className="text-[#e89565]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
