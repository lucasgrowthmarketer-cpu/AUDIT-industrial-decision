import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { DoorOpen, Send, Clock, Shield, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { decisionGatesData } from '../data/decision_gates';

const API_URL = process.env.REACT_APP_BACKEND_URL || '';

export default function DecisionGates() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedGate, setSelectedGate] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const gateIcons = {
    discreet: Shield,
    exploratory: Zap,
    urgent: AlertTriangle,
    postcrisis: CheckCircle
  };
  
  const gateColors = {
    discreet: '#10b981',
    exploratory: '#3b82f6',
    urgent: '#f59e0b',
    postcrisis: '#ef4444'
  };
  
  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedGate) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gate_type: selectedGate.id,
          ...formData,
          language: currentLang,
          source_page: '/decision-gates'
        })
      });
      
      if (response.ok) {
        toast.success(t('decisionGates.submitSuccess'));
        setFormData({});
        setSelectedGate(null);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error(t('decisionGates.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="page-container animate-fade-in" data-testid="decision-gates-page">
      <section className="page-header">
        <h1 className="page-title">{t('decisionGates.title')}</h1>
        <p className="page-subtitle">{t('decisionGates.subtitle')}</p>
      </section>
      
      {/* Info Block */}
      <section className="info-block mb-6">
        <div className="flex items-start gap-3">
          <DoorOpen size={20} className="text-[#e89565] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="info-block-title">{t('decisionGates.chooseEntry')}</h3>
            <p className="info-block-text">{t('decisionGates.entryDescription')}</p>
          </div>
        </div>
      </section>
      
      {/* Gates Grid */}
      <section className="gates-grid mb-8">
        {decisionGatesData.map((gate) => {
          const Icon = gateIcons[gate.id] || DoorOpen;
          const color = gateColors[gate.id];
          const isSelected = selectedGate?.id === gate.id;
          
          return (
            <div 
              key={gate.id}
              className={`gate-card cursor-pointer ${isSelected ? 'border-[#e89565] bg-[#e89565]/5' : ''}`}
              onClick={() => setSelectedGate(isSelected ? null : gate)}
              data-testid={`gate-${gate.id}`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {currentLang === 'fr' ? gate.titleFr : gate.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {currentLang === 'fr' ? gate.subtitleFr : gate.subtitleEn}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {currentLang === 'fr' ? gate.descriptionFr : gate.descriptionEn}
              </p>
              
              {/* What You Get */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase text-[#e89565] mb-2">
                  {t('decisionGates.whatYouGet')}
                </h4>
                <ul className="space-y-1">
                  {gate.whatYouGet.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle size={12} className="text-[#10b981] mt-1 flex-shrink-0" />
                      {currentLang === 'fr' ? item.fr : item.en}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Response Time */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} />
                <span>{gate.responseTime}</span>
              </div>
            </div>
          );
        })}
      </section>
      
      {/* Contact Form */}
      {selectedGate && (
        <section className="data-panel animate-fade-in" data-testid="gate-form">
          <div className="data-panel-header">
            <h2 className="data-panel-title">
              {currentLang === 'fr' ? selectedGate.titleFr : selectedGate.titleEn}
            </h2>
            <p className="data-panel-subtitle">
              {t('decisionGates.fillForm')}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field */}
            <input 
              type="text" 
              name="website" 
              className="hidden" 
              tabIndex="-1" 
              autoComplete="off"
              value={formData.website || ''}
              onChange={(e) => handleInputChange('website', e.target.value)}
            />
            
            {selectedGate.fields.map((field) => (
              <div key={field.name} className="form-group">
                <label className="form-label">
                  {currentLang === 'fr' ? field.labelFr : field.labelEn}
                  {field.required && <span className="text-[#ef4444] ml-1">*</span>}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    className="form-textarea"
                    placeholder={currentLang === 'fr' ? field.placeholderFr : field.placeholderEn}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    rows={4}
                  />
                ) : field.type === 'select' ? (
                  <select
                    className="form-select"
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                  >
                    <option value="">
                      {currentLang === 'fr' ? 'Sélectionner...' : 'Select...'}
                    </option>
                    {field.options?.map((opt, i) => (
                      <option key={i} value={opt.value}>
                        {currentLang === 'fr' ? opt.labelFr : opt.labelEn}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || 'text'}
                    className="form-input"
                    placeholder={currentLang === 'fr' ? field.placeholderFr : field.placeholderEn}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                  />
                )}
              </div>
            ))}
            
            {/* GDPR Notice */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <input 
                type="checkbox" 
                required 
                className="mt-0.5"
                data-testid="gdpr-checkbox"
              />
              <span>{t('decisionGates.gdprNotice')}</span>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full md:w-auto"
              data-testid="submit-gate-form"
            >
              {isSubmitting ? (
                <span className="animate-pulse">{t('common.sending')}</span>
              ) : (
                <>
                  <Send size={16} />
                  {t('decisionGates.submit')}
                </>
              )}
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
