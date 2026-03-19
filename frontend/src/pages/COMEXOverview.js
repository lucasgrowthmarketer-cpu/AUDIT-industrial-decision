import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Download, 
  TrendingUp, 
  Shield, 
  Target, 
  Layers,
  CheckCircle,
  ArrowRight,
  FileText
} from 'lucide-react';
import { calculateSCI, sampleMetrics, getScoreColor, calculateAverageDRS } from '../lib/indices';
import { oemAuditData } from '../data/oem_audit';
import { nationalTrendData } from '../data/industrial_pressure';

export default function COMEXOverview() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const sci = calculateSCI(sampleMetrics);
  const avgDRS = calculateAverageDRS(oemAuditData);
  const latestData = nationalTrendData[nationalTrendData.length - 1];
  
  return (
    <div className="page-container animate-fade-in" data-testid="comex-overview-page">
      <section className="page-header flex items-start justify-between">
        <div>
          <h1 className="page-title">{t('comexOverview.title')}</h1>
          <p className="page-subtitle">{t('comexOverview.subtitle')}</p>
        </div>
        <a 
          href="/comex-summary.pdf" 
          download
          className="btn btn-secondary hidden md:flex"
          data-testid="download-pdf"
        >
          <Download size={16} />
          {currentLang === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
        </a>
      </section>
      
      {/* Executive Summary */}
      <section className="data-panel mb-6">
        <div className="data-panel-header border-l-4 border-[#e89565] pl-4">
          <h2 className="data-panel-title">{t('comexOverview.executiveSummary')}</h2>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            {currentLang === 'fr' 
              ? `Industrial Decision est une plateforme de stratégie digitale et d'architecture web conçue pour aider les dirigeants industriels à prendre de meilleures décisions. Dans un contexte de ${latestData.total.toLocaleString()} défaillances d'entreprises en France (2025), notre système fournit la clarté stratégique nécessaire.`
              : `Industrial Decision is a digital strategy and web architecture platform designed to help industrial leaders make better decisions. In a context of ${latestData.total.toLocaleString()} business failures in France (2025), our system provides the necessary strategic clarity.`
            }
          </p>
        </div>
      </section>
      
      {/* Key Indices */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-4">{t('comexOverview.keyIndices')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-4 text-center">
            <div className="text-xs text-muted-foreground uppercase mb-1">SCI</div>
            <div className="text-3xl font-bold font-mono" style={{ color: getScoreColor(sci) }}>
              {sci}
            </div>
            <div className="text-xs text-muted-foreground mt-1">System Coherence</div>
          </div>
          
          <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-4 text-center">
            <div className="text-xs text-muted-foreground uppercase mb-1">DRS Avg</div>
            <div className="text-3xl font-bold font-mono" style={{ color: getScoreColor(avgDRS) }}>
              {avgDRS}
            </div>
            <div className="text-xs text-muted-foreground mt-1">Decision Readiness</div>
          </div>
          
          <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-4 text-center">
            <div className="text-xs text-muted-foreground uppercase mb-1">Companies</div>
            <div className="text-3xl font-bold font-mono text-[#e89565]">
              {oemAuditData.length}
            </div>
            <div className="text-xs text-muted-foreground mt-1">Benchmarked</div>
          </div>
          
          <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-4 text-center">
            <div className="text-xs text-muted-foreground uppercase mb-1">Modules</div>
            <div className="text-3xl font-bold font-mono text-[#e89565]">
              9
            </div>
            <div className="text-xs text-muted-foreground mt-1">Delivered</div>
          </div>
        </div>
      </section>
      
      {/* What the System Proves */}
      <section className="data-panel mb-6">
        <div className="data-panel-header">
          <h2 className="data-panel-title">{t('comexOverview.whatSystemProves')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-[#10b981] flex-shrink-0 mt-1" size={18} />
            <div>
              <h4 className="font-semibold text-foreground">{t('comexOverview.proof1Title')}</h4>
              <p className="text-sm text-muted-foreground">{t('comexOverview.proof1Text')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="text-[#10b981] flex-shrink-0 mt-1" size={18} />
            <div>
              <h4 className="font-semibold text-foreground">{t('comexOverview.proof2Title')}</h4>
              <p className="text-sm text-muted-foreground">{t('comexOverview.proof2Text')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="text-[#10b981] flex-shrink-0 mt-1" size={18} />
            <div>
              <h4 className="font-semibold text-foreground">{t('comexOverview.proof3Title')}</h4>
              <p className="text-sm text-muted-foreground">{t('comexOverview.proof3Text')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="text-[#10b981] flex-shrink-0 mt-1" size={18} />
            <div>
              <h4 className="font-semibold text-foreground">{t('comexOverview.proof4Title')}</h4>
              <p className="text-sm text-muted-foreground">{t('comexOverview.proof4Text')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modules Delivered */}
      <section className="data-panel mb-6">
        <div className="data-panel-header">
          <h2 className="data-panel-title">{t('comexOverview.modulesDelivered')}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { icon: TrendingUp, name: 'Market Pressure', path: '/market-pressure' },
            { icon: Target, name: 'Decision Readiness', path: '/decision-readiness' },
            { icon: Layers, name: 'Decision Scenarios', path: '/decision-scenarios' },
            { icon: FileText, name: 'Process Visibility', path: '/process-visibility' },
            { icon: Shield, name: 'Proof Blocks', path: '/proof-blocks' },
            { icon: Target, name: 'Decision Gates', path: '/decision-gates' },
            { icon: Layers, name: 'Decision Amplifiers', path: '/decision-amplifiers' },
            { icon: FileText, name: 'Sources & Method', path: '/sources-method' },
            { icon: FileText, name: 'COMEX Overview', path: '/comex-overview' },
          ].map((module, i) => (
            <Link
              key={i}
              to={module.path}
              className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded hover:bg-[#2a2a2a] transition-colors"
            >
              <module.icon size={16} className="text-[#e89565]" />
              <span className="text-sm font-medium text-foreground">{module.name}</span>
              <ArrowRight size={14} className="text-muted-foreground ml-auto" />
            </Link>
          ))}
        </div>
      </section>
      
      {/* Governance */}
      <section className="info-block">
        <h3 className="info-block-title">{t('comexOverview.governance')}</h3>
        <p className="info-block-text">{t('comexOverview.governanceText')}</p>
        <ul className="mt-3 space-y-1">
          <li className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-[#e89565]">•</span>
            {currentLang === 'fr' ? 'Données sources vérifiées (Banque de France, Altares)' : 'Verified source data (Banque de France, Altares)'}
          </li>
          <li className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-[#e89565]">•</span>
            {currentLang === 'fr' ? 'Cas anonymisés avec KPIs validés' : 'Anonymized cases with validated KPIs'}
          </li>
          <li className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-[#e89565]">•</span>
            {currentLang === 'fr' ? 'Méthodologie transparente documentée' : 'Transparent documented methodology'}
          </li>
          <li className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-[#e89565]">•</span>
            {currentLang === 'fr' ? 'Conformité RGPD' : 'GDPR compliance'}
          </li>
        </ul>
      </section>
      
      {/* Mobile Download */}
      <div className="md:hidden mt-6">
        <a 
          href="/comex-summary.pdf" 
          download
          className="btn btn-primary w-full justify-center"
        >
          <Download size={16} />
          {currentLang === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
        </a>
      </div>
    </div>
  );
}
