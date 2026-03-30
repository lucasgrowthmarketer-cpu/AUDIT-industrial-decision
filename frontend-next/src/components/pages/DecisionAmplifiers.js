'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Layers, 
  Eye, 
  Shield, 
  Zap, 
  Activity,
  Target,
  Users,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { decisionAmplifiersData } from '@/data/decisionAmplifiersData';
import { calculateSCI, sampleMetrics, getScoreColor } from '@/lib/indices';

const layers = [
  { id: 'architecture', icon: Layers, color: '#e89565' },
  { id: 'visibility', icon: Eye, color: '#3b82f6' },
  { id: 'trust', icon: Shield, color: '#10b981' },
  { id: 'activation', icon: Zap, color: '#f59e0b' },
  { id: 'coherence', icon: Activity, color: '#8b5cf6' }
];

export default function DecisionAmplifiers() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeLayer, setActiveLayer] = useState('architecture');
  
  const sci = calculateSCI(sampleMetrics);
  
  const renderLayerContent = () => {
    switch (activeLayer) {
      case 'architecture':
        return <ArchitectureMap data={decisionAmplifiersData.architecture} lang={currentLang} />;
      case 'visibility':
        return <VisibilityLayer data={decisionAmplifiersData.visibility} lang={currentLang} />;
      case 'trust':
        return <TrustLayer data={decisionAmplifiersData.trust} lang={currentLang} />;
      case 'activation':
        return <ActivationLayer data={decisionAmplifiersData.activation} lang={currentLang} />;
      case 'coherence':
        return <SystemCoherenceIndex metrics={sampleMetrics} sci={sci} lang={currentLang} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="page-container animate-fade-in" data-testid="decision-amplifiers-page">
      <section className="page-header">
        <h1 className="page-title">{t('decisionAmplifiers.title')}</h1>
        <p className="page-subtitle">{t('decisionAmplifiers.subtitle')}</p>
      </section>
      
      {/* Layer Navigation */}
      <section className="mb-6">
        <div className="flex flex-wrap gap-2">
          {layers.map((layer) => {
            const Icon = layer.icon;
            const isActive = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-[#e89565] text-[#262626]' 
                    : 'bg-[#2a2a2a] text-muted-foreground hover:text-foreground hover:bg-[#333]'
                }`}
                style={isActive ? { backgroundColor: layer.color } : {}}
                data-testid={`layer-${layer.id}`}
              >
                <Icon size={18} />
                <span className="font-medium capitalize">
                  {t(`decisionAmplifiers.layers.${layer.id}`)}
                </span>
              </button>
            );
          })}
        </div>
      </section>
      
      {/* Layer Content */}
      <section className="data-panel min-h-[400px]">
        {renderLayerContent()}
      </section>
      
      {/* SCI Summary */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2 bg-[#2a2a2a] border border-white/5 rounded-lg p-6">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            System Coherence Index
          </div>
          <div 
            className="text-5xl font-bold font-mono"
            style={{ color: getScoreColor(sci) }}
          >
            {sci}
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            {t('decisionAmplifiers.sciDescription')}
          </div>
        </div>
        
        {Object.entries(sampleMetrics).map(([key, value]) => (
          <div 
            key={key}
            className="bg-[#1a1a1a] border border-white/5 rounded-lg p-4 hover:border-[#e89565]/30 transition-colors"
          >
            <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">{key}</div>
            <div 
              className="text-2xl font-bold font-mono"
              style={{ color: getScoreColor(value) }}
            >
              {value}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// Architecture Map Component
function ArchitectureMap({ data, lang }) {
  const { t } = useTranslation();
  
  return (
    <div className="animate-fade-in">
      <div className="data-panel-header">
        <h2 className="data-panel-title">{t('decisionAmplifiers.architectureMap')}</h2>
        <p className="data-panel-subtitle">{t('decisionAmplifiers.architectureDesc')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.intentClusters.map((cluster) => (
          <div 
            key={cluster.id}
            className="bg-[#1a1a1a] border border-white/5 rounded-lg p-4 hover:border-[#e89565]/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-[#e89565]">
                {lang === 'fr' ? cluster.labelFr : cluster.labelEn}
              </span>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                cluster.urgency >= 4 ? 'bg-[#ef4444]/20 text-[#ef4444]' :
                cluster.urgency >= 2 ? 'bg-[#f59e0b]/20 text-[#f59e0b]' :
                'bg-[#10b981]/20 text-[#10b981]'
              }`}>
                U{cluster.urgency}
              </span>
            </div>
            
            <div className="space-y-2">
              <div>
                <span className="text-xs text-muted-foreground">Signals:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {cluster.signals.map((signal, i) => (
                    <span key={i} className="text-xs bg-[#262626] px-2 py-0.5 rounded">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                <span className="text-[#ef4444]">Risk:</span> {cluster.decisionRisk}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Visibility Layer Component
function VisibilityLayer({ data, lang }) {
  const { t } = useTranslation();
  
  return (
    <div className="animate-fade-in">
      <div className="data-panel-header">
        <h2 className="data-panel-title">{t('decisionAmplifiers.visibilityLayer')}</h2>
        <p className="data-panel-subtitle">{t('decisionAmplifiers.visibilityDesc')}</p>
      </div>
      
      <div className="space-y-6">
        {data.channels.map((channel) => (
          <div key={channel.id} className="bg-[#1a1a1a] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Eye size={18} className="text-[#3b82f6]" />
              <h3 className="text-lg font-semibold text-foreground">
                {lang === 'fr' ? channel.nameFr : channel.nameEn}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {channel.metrics.map((metric, i) => (
                <div key={i} className="bg-[#262626] rounded p-3">
                  <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-xl font-bold text-foreground">{metric.value}{metric.unit}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Trust Layer Component
function TrustLayer({ data, lang }) {
  const { t } = useTranslation();
  
  return (
    <div className="animate-fade-in">
      <div className="data-panel-header">
        <h2 className="data-panel-title">{t('decisionAmplifiers.trustLayer')}</h2>
        <p className="data-panel-subtitle">{t('decisionAmplifiers.trustDesc')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trust Metrics */}
        <div>
          <h3 className="text-sm font-semibold text-[#10b981] uppercase tracking-wider mb-4">
            Trust Metrics
          </h3>
          <div className="space-y-3">
            {data.trustMetrics.map((metric) => (
              <div key={metric.id} className="bg-[#1a1a1a] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">{metric.label}</span>
                  <span className="text-lg font-bold text-[#10b981]">
                    {metric.value}{metric.unit}
                  </span>
                </div>
                <div className="w-full h-2 bg-[#262626] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#10b981] transition-all"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust Signals */}
        <div>
          <h3 className="text-sm font-semibold text-[#e89565] uppercase tracking-wider mb-4">
            Trust Signals
          </h3>
          <div className="space-y-2">
            {data.trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#1a1a1a] rounded-lg p-3">
                <Shield size={16} className="text-[#10b981]" />
                <span className="text-sm text-muted-foreground">
                  {lang === 'fr' ? signal.fr : signal.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Activation Layer Component
function ActivationLayer({ data, lang }) {
  const { t } = useTranslation();
  
  return (
    <div className="animate-fade-in">
      <div className="data-panel-header">
        <h2 className="data-panel-title">{t('decisionAmplifiers.activationLayer')}</h2>
        <p className="data-panel-subtitle">{t('decisionAmplifiers.activationDesc')}</p>
      </div>
      
      {/* Activation Steps */}
      <div className="space-y-4">
        {data.activationLogic.map((step, index) => (
          <div 
            key={step.step}
            className="flex gap-4 items-start"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              index === 0 ? 'bg-[#f59e0b]' : 'bg-[#333] border border-[#f59e0b]/30'
            }`}>
              <span className={`font-bold ${index === 0 ? 'text-[#262626]' : 'text-[#f59e0b]'}`}>
                {step.step}
              </span>
            </div>
            
            <div className="flex-1 bg-[#1a1a1a] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {lang === 'fr' ? step.labelFr : step.labelEn}
              </h4>
              <p className="text-sm text-muted-foreground">
                {lang === 'fr' ? step.descriptionFr : step.descriptionEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// System Coherence Index Component
function SystemCoherenceIndex({ metrics, sci, lang }) {
  const { t } = useTranslation();
  
  const weights = {
    DRS: 0.25,
    URI: 0.25,
    ICR: 0.20,
    Trust: 0.15,
    AEI: 0.15
  };
  
  return (
    <div className="animate-fade-in">
      <div className="data-panel-header">
        <h2 className="data-panel-title">{t('decisionAmplifiers.systemCoherence')}</h2>
        <p className="data-panel-subtitle">{t('decisionAmplifiers.coherenceDesc')}</p>
      </div>
      
      {/* Formula */}
      <div className="bg-[#1a1a1a] rounded-lg p-4 mb-6 font-mono text-sm">
        <span className="text-[#e89565]">SCI</span> = 
        <span className="text-muted-foreground"> DRS×0.25 + URI×0.25 + ICR×0.20 + Trust×0.15 + AEI×0.15</span>
      </div>
      
      {/* Calculation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Component Scores
          </h3>
          <div className="space-y-3">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <div className="w-16 text-sm font-semibold text-foreground">{key}</div>
                <div className="flex-1 h-3 bg-[#262626] rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all"
                    style={{ 
                      width: `${value}%`,
                      backgroundColor: getScoreColor(value)
                    }}
                  />
                </div>
                <div className="w-12 text-right font-mono text-sm">{value}</div>
                <div className="w-16 text-right text-xs text-muted-foreground">
                  ×{weights[key]}
                </div>
                <div className="w-12 text-right font-mono text-sm text-[#e89565]">
                  {(value * weights[key]).toFixed(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Total SCI</div>
            <div 
              className="text-7xl font-bold font-mono"
              style={{ color: getScoreColor(sci) }}
            >
              {sci}
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              {sci >= 75 ? 'Excellent' : sci >= 50 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
