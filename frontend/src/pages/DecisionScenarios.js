import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, ChevronRight, Clock, HelpCircle, List } from 'lucide-react';
import { scenariosData } from '../data/scenarios';

export default function DecisionScenarios() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [urgencyFilter, setUrgencyFilter] = useState('all');
  
  const filteredScenarios = urgencyFilter === 'all' 
    ? scenariosData 
    : scenariosData.filter(s => s.urgency === parseInt(urgencyFilter));
  
  const getUrgencyColor = (urgency) => {
    if (urgency >= 4) return 'text-[#ef4444]';
    if (urgency >= 2) return 'text-[#f59e0b]';
    return 'text-[#10b981]';
  };
  
  const getUrgencyBg = (urgency) => {
    if (urgency >= 4) return 'bg-[#ef4444]/10 border-[#ef4444]/30';
    if (urgency >= 2) return 'bg-[#f59e0b]/10 border-[#f59e0b]/30';
    return 'bg-[#10b981]/10 border-[#10b981]/30';
  };
  
  return (
    <div className="page-container animate-fade-in" data-testid="decision-scenarios-page">
      <section className="page-header">
        <h1 className="page-title">{t('decisionScenarios.title')}</h1>
        <p className="page-subtitle">{t('decisionScenarios.subtitle')}</p>
      </section>
      
      {/* Urgency Filter */}
      <section className="mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {t('decisionScenarios.filterByUrgency')}
          </span>
          <div className="toggle-group">
            {['all', '1', '2', '3', '4', '5'].map(level => (
              <button
                key={level}
                onClick={() => setUrgencyFilter(level)}
                className={`toggle-button ${urgencyFilter === level ? 'active' : ''}`}
                data-testid={`urgency-${level}`}
              >
                {level === 'all' ? t('common.all') : level}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Scenarios Grid */}
      <section className="scenario-grid">
        {filteredScenarios.map((scenario) => (
          <div 
            key={scenario.id}
            className={`scenario-card cursor-pointer ${selectedScenario?.id === scenario.id ? 'border-[#e89565]' : ''}`}
            onClick={() => setSelectedScenario(selectedScenario?.id === scenario.id ? null : scenario)}
            data-testid={`scenario-${scenario.id}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle size={18} className={getUrgencyColor(scenario.urgency)} />
                <span className={`text-sm font-semibold ${getUrgencyColor(scenario.urgency)}`}>
                  {t('decisionScenarios.urgency')} {scenario.urgency}/5
                </span>
              </div>
              <ChevronRight 
                size={18} 
                className={`text-muted-foreground transition-transform ${selectedScenario?.id === scenario.id ? 'rotate-90' : ''}`}
              />
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-foreground mb-3">
              {currentLang === 'fr' ? scenario.titleFr : scenario.titleEn}
            </h3>
            
            {/* Summary */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {currentLang === 'fr' ? scenario.summaryFr : scenario.summaryEn}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {scenario.tags?.slice(0, 3).map((tag, i) => (
                <span key={i} className="badge badge-default text-xs">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Expanded Content */}
            {selectedScenario?.id === scenario.id && (
              <div className="mt-6 pt-6 border-t border-white/5 space-y-4 animate-fade-in">
                {/* What Leaders Need */}
                <div>
                  <h4 className="text-sm font-semibold text-[#e89565] mb-2 flex items-center gap-2">
                    <List size={14} />
                    {t('decisionScenarios.whatLeadersNeed')}
                  </h4>
                  <ul className="space-y-1">
                    {scenario.whatLeadersNeed?.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-[#e89565] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Missing Info */}
                <div>
                  <h4 className="text-sm font-semibold text-[#f59e0b] mb-2 flex items-center gap-2">
                    <HelpCircle size={14} />
                    {t('decisionScenarios.missingInfo')}
                  </h4>
                  <ul className="space-y-1">
                    {scenario.missingInfo?.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-[#f59e0b] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Uncertainty Blocks */}
                <div>
                  <h4 className="text-sm font-semibold text-[#ef4444] mb-2 flex items-center gap-2">
                    <AlertTriangle size={14} />
                    {t('decisionScenarios.uncertaintyBlocks')}
                  </h4>
                  <ul className="space-y-1">
                    {scenario.uncertaintyBlocks?.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-[#ef4444] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
      
      {filteredScenarios.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          {t('common.noResults')}
        </div>
      )}
    </div>
  );
}
