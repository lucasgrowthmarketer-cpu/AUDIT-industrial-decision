'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Database, Calculator, Shield, ExternalLink } from 'lucide-react';

export default function SourcesMethod() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="page-container animate-fade-in" data-testid="sources-method-page">
      <section className="page-header">
        <h1 className="page-title">{t('sourcesMethod.title')}</h1>
        <p className="page-subtitle">{t('sourcesMethod.subtitle')}</p>
      </section>
      
      {/* Data Sources */}
      <section className="data-panel mb-6">
        <div className="data-panel-header">
          <h2 className="data-panel-title flex items-center gap-2">
            <Database size={20} className="text-[#e89565]" />
            {t('sourcesMethod.dataSources')}
          </h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-[#1a1a1a] rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Banque de France</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentLang === 'fr' 
                    ? 'Statistiques officielles des défaillances d\'entreprises en France (2021-2025)'
                    : 'Official French business failure statistics (2021-2025)'}
                </p>
              </div>
              <a 
                href="https://www.banque-france.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#e89565] hover:underline flex items-center gap-1 text-sm"
              >
                <ExternalLink size={14} />
                Source
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="badge badge-accent">Market Pressure</span>
              <span className="badge badge-accent">IPI</span>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Altares</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentLang === 'fr' 
                    ? 'Données régionales et sectorielles sur les défaillances'
                    : 'Regional and sector data on business failures'}
                </p>
              </div>
              <a 
                href="https://www.altares.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#e89565] hover:underline flex items-center gap-1 text-sm"
              >
                <ExternalLink size={14} />
                Source
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="badge badge-accent">Regional Data</span>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-lg p-4">
            <h3 className="font-semibold text-foreground">OEM Benchmark Data</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentLang === 'fr' 
                ? 'Analyse propriétaire de 30 entreprises OEM et intégrateurs (données anonymisées)'
                : 'Proprietary analysis of 30 OEM and integrator companies (anonymized data)'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="badge badge-accent">Decision Readiness</span>
              <span className="badge badge-accent">DRS</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Methodology */}
      <section className="data-panel mb-6">
        <div className="data-panel-header">
          <h2 className="data-panel-title flex items-center gap-2">
            <Calculator size={20} className="text-[#e89565]" />
            {t('sourcesMethod.methodology')}
          </h2>
        </div>
        
        <div className="space-y-6">
          {/* DRS */}
          <div className="border-l-2 border-[#e89565] pl-4">
            <h3 className="font-semibold text-foreground">DRS (Decision Readiness Score)</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentLang === 'fr' 
                ? 'Score de 0 à 100 mesurant la préparation à la décision sur 4 dimensions.'
                : 'Score from 0 to 100 measuring decision readiness across 4 dimensions.'}
            </p>
            <code className="block mt-2 text-sm text-[#e89565] bg-[#1a1a1a] p-2 rounded font-mono">
              DRS = (scenarios + process + proof + entry) / 4 × 100
            </code>
            <p className="text-xs text-muted-foreground mt-2">
              {currentLang === 'fr' ? 'Pondération: yes=1, partial=0.5, no=0' : 'Weighting: yes=1, partial=0.5, no=0'}
            </p>
          </div>
          
          {/* IPI */}
          <div className="border-l-2 border-[#e89565] pl-4">
            <h3 className="font-semibold text-foreground">IPI (Industrial Pressure Index)</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentLang === 'fr' 
                ? 'Indice composite de pression industrielle normalisé (0-100).'
                : 'Normalized composite industrial pressure index (0-100).'}
            </p>
            <code className="block mt-2 text-sm text-[#e89565] bg-[#1a1a1a] p-2 rounded font-mono">
              IPI = normalizedVolume + yoyScore + concentrationScore
            </code>
          </div>
          
          {/* SCI */}
          <div className="border-l-2 border-[#e89565] pl-4">
            <h3 className="font-semibold text-foreground">SCI (System Coherence Index)</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentLang === 'fr' 
                ? 'Indice global d\'efficacité du système combinant toutes les métriques.'
                : 'Overall system effectiveness index combining all metrics.'}
            </p>
            <code className="block mt-2 text-sm text-[#e89565] bg-[#1a1a1a] p-2 rounded font-mono">
              SCI = DRS×0.25 + URI×0.25 + ICR×0.20 + Trust×0.15 + AEI×0.15
            </code>
          </div>
        </div>
      </section>
      
      {/* Governance */}
      <section className="info-block">
        <div className="flex items-start gap-3">
          <Shield size={20} className="text-[#e89565] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="info-block-title">{t('sourcesMethod.governance')}</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-muted-foreground">
                • {currentLang === 'fr' ? 'Toutes les données sont vérifiées et sourcées' : 'All data is verified and sourced'}
              </li>
              <li className="text-sm text-muted-foreground">
                • {currentLang === 'fr' ? 'Les cas sont anonymisés pour protéger la confidentialité' : 'Cases are anonymized to protect confidentiality'}
              </li>
              <li className="text-sm text-muted-foreground">
                • {currentLang === 'fr' ? 'Les calculs d\'indices sont transparents et reproductibles' : 'Index calculations are transparent and reproducible'}
              </li>
              <li className="text-sm text-muted-foreground">
                • {currentLang === 'fr' ? 'Aucun appel API externe - toutes les données sont embarquées localement' : 'No external API calls - all data is embedded locally'}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
