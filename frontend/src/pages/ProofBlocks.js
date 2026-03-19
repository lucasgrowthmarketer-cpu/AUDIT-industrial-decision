import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, TrendingUp, ChevronRight, BarChart3 } from 'lucide-react';
import { proofBlocks as proofBlocksData } from '../data/proof_blocks';

export default function ProofBlocks() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedBlock, setSelectedBlock] = useState(null);
  
  return (
    <div className="page-container animate-fade-in" data-testid="proof-blocks-page">
      <section className="page-header">
        <h1 className="page-title">{t('proofBlocks.title')}</h1>
        <p className="page-subtitle">{t('proofBlocks.subtitle')}</p>
      </section>
      
      {/* Governance Info */}
      <section className="info-block mb-6">
        <div className="flex items-start gap-3">
          <Shield size={20} className="text-[#e89565] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="info-block-title">{t('proofBlocks.governanceRules')}</h3>
            <p className="info-block-text">{t('proofBlocks.governanceText')}</p>
          </div>
        </div>
      </section>
      
      {/* Proof Blocks Grid */}
      <section className="proof-blocks-grid">
        {proofBlocksData.map((block) => (
          <div 
            key={block.id}
            className={`proof-block cursor-pointer ${selectedBlock?.id === block.id ? 'border-[#e89565]' : ''}`}
            onClick={() => setSelectedBlock(selectedBlock?.id === block.id ? null : block)}
            data-testid={`proof-block-${block.id}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-[#e89565]/10 flex items-center justify-center">
                  <BarChart3 size={16} className="text-[#e89565]" />
                </div>
                <span className="badge badge-accent text-xs">
                  {block.sector}
                </span>
              </div>
              <ChevronRight 
                size={18} 
                className={`text-muted-foreground transition-transform ${selectedBlock?.id === block.id ? 'rotate-90' : ''}`}
              />
            </div>
            
            {/* Situation */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                {t('proofBlocks.situation')}
              </h4>
              <p className="text-sm text-foreground">
                {currentLang === 'fr' ? block.situationFr : block.situationEn}
              </p>
            </div>
            
            {/* Action */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                {t('proofBlocks.action')}
              </h4>
              <p className="text-sm text-muted-foreground">
                {currentLang === 'fr' ? block.actionFr : block.actionEn}
              </p>
            </div>
            
            {/* KPIs Preview */}
            <div className="flex flex-wrap gap-3">
              {block.kpis.slice(0, 2).map((kpi, i) => (
                <div key={i} className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-[#10b981]" />
                  <span className="text-sm font-semibold text-foreground">
                    {kpi.from && kpi.to 
                      ? `${kpi.from} → ${kpi.to}${kpi.unit}` 
                      : `${kpi.to || kpi.from}${kpi.unit}`}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Expanded Content */}
            {selectedBlock?.id === block.id && (
              <div className="mt-6 pt-6 border-t border-white/5 space-y-4 animate-fade-in">
                {/* All KPIs */}
                <div>
                  <h4 className="text-sm font-semibold text-[#e89565] mb-3">
                    {t('proofBlocks.keyResults')}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {block.kpis.map((kpi, i) => (
                      <div key={i} className="bg-[#1a1a1a] rounded p-3">
                        <div className="text-xs text-muted-foreground mb-1">{kpi.label}</div>
                        <div className="flex items-center gap-2">
                          {kpi.from && (
                            <>
                              <span className="text-muted-foreground">{kpi.from}{kpi.unit}</span>
                              <TrendingUp size={12} className="text-[#10b981]" />
                            </>
                          )}
                          <span className="text-lg font-bold text-foreground">
                            {kpi.to || kpi.from}{kpi.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Trends */}
                {block.trends && block.trends.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-[#f59e0b] mb-2">
                      {t('proofBlocks.trends')}
                    </h4>
                    <ul className="space-y-1">
                      {block.trends.map((trend, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-[#f59e0b] mt-1">•</span>
                          {trend}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Timeline */}
                {block.timeline && (
                  <div className="text-sm text-muted-foreground">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">
                      {t('proofBlocks.duration')}:
                    </span>
                    <span className="ml-2">{block.timeline}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
      
      {/* Anonymization Note */}
      <section className="mt-6 p-4 bg-[#1a1a1a] border border-white/5 rounded">
        <p className="text-xs text-muted-foreground italic text-center">
          {t('proofBlocks.anonymizationNote')}
        </p>
      </section>
    </div>
  );
}
