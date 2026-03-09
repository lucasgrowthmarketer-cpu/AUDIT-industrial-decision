import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Clock, AlertCircle, CheckCircle2, Circle } from 'lucide-react';
import { processFlowsData } from '../data/process_flows';

export default function ProcessVisibility() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedFlow, setSelectedFlow] = useState(processFlowsData[0]);
  
  const getCommitmentColor = (commitment) => {
    switch (commitment) {
      case 'high': return 'text-[#ef4444]';
      case 'medium': return 'text-[#f59e0b]';
      case 'low': return 'text-[#10b981]';
      default: return 'text-muted-foreground';
    }
  };
  
  const getCommitmentLabel = (commitment) => {
    const labels = {
      high: currentLang === 'fr' ? 'Élevé' : 'High',
      medium: currentLang === 'fr' ? 'Moyen' : 'Medium',
      low: currentLang === 'fr' ? 'Faible' : 'Low'
    };
    return labels[commitment] || commitment;
  };
  
  return (
    <div className="page-container animate-fade-in" data-testid="process-visibility-page">
      <section className="page-header">
        <h1 className="page-title">{t('processVisibility.title')}</h1>
        <p className="page-subtitle">{t('processVisibility.subtitle')}</p>
      </section>
      
      {/* Flow Selector */}
      <section className="mb-6">
        <div className="flex flex-wrap gap-2">
          {processFlowsData.map((flow) => (
            <button
              key={flow.id}
              onClick={() => setSelectedFlow(flow)}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                selectedFlow.id === flow.id 
                  ? 'bg-[#e89565] text-[#262626]' 
                  : 'bg-[#2a2a2a] text-muted-foreground hover:text-foreground hover:bg-[#333]'
              }`}
              data-testid={`flow-${flow.id}`}
            >
              {currentLang === 'fr' ? flow.titleFr : flow.titleEn}
            </button>
          ))}
        </div>
      </section>
      
      {/* Process Flow */}
      <section className="data-panel">
        <div className="data-panel-header">
          <h2 className="data-panel-title">
            {currentLang === 'fr' ? selectedFlow.titleFr : selectedFlow.titleEn}
          </h2>
          <p className="data-panel-subtitle">
            {currentLang === 'fr' ? selectedFlow.descriptionFr : selectedFlow.descriptionEn}
          </p>
        </div>
        
        {/* Steps */}
        <div className="space-y-4">
          {selectedFlow.steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative flex gap-4"
              data-testid={`step-${step.id}`}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-[#e89565]' : 'bg-[#333] border border-[#e89565]/30'
                }`}>
                  <span className={`text-sm font-bold ${index === 0 ? 'text-[#262626]' : 'text-[#e89565]'}`}>
                    {index + 1}
                  </span>
                </div>
                {index < selectedFlow.steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#e89565]/50 to-[#e89565]/10 my-2" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-4 hover:border-[#e89565]/30 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground">
                      {currentLang === 'fr' ? step.labelFr : step.labelEn}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={14} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{step.timeframe}</span>
                    </div>
                  </div>
                  
                  {/* Commitment Level */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">
                      {t('processVisibility.commitment')}:
                    </span>
                    <span className={`ml-2 text-sm font-semibold ${getCommitmentColor(step.commitment)}`}>
                      {getCommitmentLabel(step.commitment)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Inputs */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-[#e89565] mb-2">
                        {t('processVisibility.inputs')}
                      </h4>
                      <ul className="space-y-1">
                        {step.inputs.map((input, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Circle size={6} className="text-[#e89565] mt-1.5 flex-shrink-0" />
                            {input}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Outputs */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-[#10b981] mb-2">
                        {t('processVisibility.outputs')}
                      </h4>
                      <ul className="space-y-1">
                        {step.outputs.map((output, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-[#10b981] mt-1 flex-shrink-0" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Risks */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-[#ef4444] mb-2">
                        {t('processVisibility.risks')}
                      </h4>
                      <ul className="space-y-1">
                        {step.risks.map((risk, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <AlertCircle size={12} className="text-[#ef4444] mt-1 flex-shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Info */}
      <section className="info-block mt-6">
        <h3 className="info-block-title">{t('processVisibility.transparency')}</h3>
        <p className="info-block-text">{t('processVisibility.transparencyText')}</p>
      </section>
    </div>
  );
}
