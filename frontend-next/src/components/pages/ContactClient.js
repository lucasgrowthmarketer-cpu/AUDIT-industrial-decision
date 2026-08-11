'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import {
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Search,
  Target,
  Zap
} from 'lucide-react';

const API_URL = 'https://audit-industrial-decision-production-cb0c.up.railway.app';

const gateTypes = [
  { id: 'discreet', labelEn: 'Discreet', labelFr: 'Discret', descEn: 'Confidential, no obligation', descFr: 'Échange confidentiel, sans engagement', time: '48-72h', color: '#e89565' },
  { id: 'exploratory', labelEn: 'Exploratory', labelFr: 'Exploratoire', descEn: 'Understand options & feasibility', descFr: 'Comprendre les options et la faisabilité', time: '3-5j', color: '#207bff' },
  { id: 'urgent', labelEn: 'Urgent', labelFr: 'Urgent', descEn: 'Fast-track, time-critical', descFr: 'Parcours accéléré, situation urgente', time: '12-24h', color: '#ef4444' },
  { id: 'general', labelEn: 'General', labelFr: 'Général', descEn: 'Inquiry or partnership', descFr: 'Question générale ou partenariat', time: '24-48h', color: '#10b981' },
];

export default function Contact() {
  const { i18n } = useTranslation();
  const L = i18n.language;

  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', gate_type: 'general' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = L === 'fr' ? 'Nom requis' : 'Name required';
    if (!formData.email.trim()) e.email = L === 'fr' ? 'Email requis' : 'Email required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = L === 'fr' ? 'Email invalide' : 'Invalid email';
    if (!formData.message.trim()) e.message = L === 'fr' ? 'Message requis' : 'Message required';
    else if (formData.message.trim().length < 10) e.message = L === 'fr' ? 'Min. 10 caractères' : 'Min. 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language: L, source_page: '/contact', preferred_contact: 'email' }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        toast.success(L === 'fr' ? 'Message envoyé !' : 'Message sent!');
      } else throw new Error();
    } catch {
      toast.error(L === 'fr' ? 'Erreur lors de l\'envoi' : 'Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedGate = gateTypes.find(g => g.id === formData.gate_type);

  return (
    <div data-testid="contact-page" className="animate-fade-in">

      {/* ── HERO ── */}
      <section className="pt-12 pb-8 bg-gradient-to-b from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">{L === 'fr' ? 'Contact' : 'Contact'}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? (<>Parlons de <span className="text-[#207bff]">votre projet</span></>) : (<>Let's discuss <span className="text-[#207bff]">your project</span></>)}
            </h1>
            <p className="text-lg text-[#4a5568] leading-relaxed">
              {L === 'fr'
                ? 'Vous avez un projet ? Une question ? Demandez un audit ou explorons ensemble comment transformer votre présence digitale.'
                : 'Request an audit, discuss a project, or explore how we can transform your industrial digital presence.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, value: '< 48h', label: L === 'fr' ? 'Réponse sous' : 'Response time' },
              { icon: Search, value: '30+', label: L === 'fr' ? 'OEM analysés' : 'OEMs audited' },
              { icon: Globe, value: '13', label: L === 'fr' ? 'régions couvertes' : 'Regions covered' },
              { icon: Shield, value: '100%', label: L === 'fr' ? 'Confidentiel' : 'Confidential' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-5 bg-[#f5f7fa] rounded-2xl border border-[#e2e8f0] hover:border-[#207bff]/20 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] border border-[#e2e8f0] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#207bff]" />
                  </div>
                  <div className="text-xl font-bold text-[#1a1a1a] mb-1">{stat.value}</div>
                  <div className="text-[#718096] text-xs">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* ─── LEFT — Form (8 cols) ─── */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}</h2>
                <p className="text-[#4a5568]">{L === 'fr' ? 'Choisissez le type d\'échange qui vous convient et décrivez votre besoin.' : 'Choose your exchange type and describe your need.'}</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" onChange={(e) => handleChange('website', e.target.value)} />

                  {/* Decision Gate Selector */}
                  <div>
                    <label className="text-xs font-semibold text-[#718096] uppercase tracking-wider mb-3 block">{L === 'fr' ? 'Type d\'échange' : 'Exchange type'}</label>
                    <div className="grid grid-cols-2 gap-3">
                      {gateTypes.map(g => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => handleChange('gate_type', g.id)}
                          className={`text-left p-4 rounded-xl border-2 transition-all ${formData.gate_type === g.id ? 'border-[#207bff] bg-[#f0f7ff] shadow-sm' : 'border-[#e2e8f0] bg-white hover:border-[#207bff]/30 hover:bg-[#fafbfc]'}`}
                        >
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: g.color }} />
                            <span className="text-sm font-semibold text-[#1a1a1a]">{L === 'fr' ? g.labelFr : g.labelEn}</span>
                            <span className="text-[10px] text-[#718096] font-mono ml-auto">{g.time}</span>
                          </div>
                          <p className="text-xs text-[#718096] pl-5">{L === 'fr' ? g.descFr : g.descEn}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#718096]" />
                      <input type="text" placeholder={L === 'fr' ? 'Nom *' : 'Name *'} value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className={`w-full pl-11 pr-4 py-3.5 bg-[#f5f7fa] border rounded-xl text-[#1a1a1a] text-sm placeholder-[#a0aec0] focus:outline-none focus:border-[#207bff] focus:bg-white focus:ring-2 focus:ring-[#207bff]/10 transition-all ${errors.name ? 'border-[#ef4444]' : 'border-[#e2e8f0]'}`} />
                      {errors.name && <p className="text-[#ef4444] text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#718096]" />
                      <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`w-full pl-11 pr-4 py-3.5 bg-[#f5f7fa] border rounded-xl text-[#1a1a1a] text-sm placeholder-[#a0aec0] focus:outline-none focus:border-[#207bff] focus:bg-white focus:ring-2 focus:ring-[#207bff]/10 transition-all ${errors.email ? 'border-[#ef4444]' : 'border-[#e2e8f0]'}`} />
                      {errors.email && <p className="text-[#ef4444] text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#718096]" />
                    <input type="text" placeholder={L === 'fr' ? 'Entreprise (optionnel)' : 'Company (optional)'} value={formData.company} onChange={(e) => handleChange('company', e.target.value)} className="w-full pl-11 pr-4 py-3.5 bg-[#f5f7fa] border border-[#e2e8f0] rounded-xl text-[#1a1a1a] text-sm placeholder-[#a0aec0] focus:outline-none focus:border-[#207bff] focus:bg-white focus:ring-2 focus:ring-[#207bff]/10 transition-all" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-[#718096]" />
                    <textarea placeholder={L === 'fr' ? 'Décrivez votre projet, votre contexte ou votre question...' : 'Describe your project or need...'} rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className={`w-full pl-11 pr-4 py-3.5 bg-[#f5f7fa] border rounded-xl text-[#1a1a1a] text-sm placeholder-[#a0aec0] focus:outline-none focus:border-[#207bff] focus:bg-white focus:ring-2 focus:ring-[#207bff]/10 transition-all resize-none ${errors.message ? 'border-[#ef4444]' : 'border-[#e2e8f0]'}`} />
                    {errors.message && <p className="text-[#ef4444] text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  {/* GDPR */}
                  <div className="flex items-start gap-2.5">
                    <input type="checkbox" required className="mt-1 accent-[#207bff] w-4 h-4" />
                    <span className="text-xs text-[#718096] leading-relaxed">{L === 'fr' ? 'J\'accepte le traitement de mes données (RGPD). Elles ne sont jamais partagées sans mon accord.' : 'I accept that my data will be processed in accordance with GDPR. It will never be shared without my consent.'}</span>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={isSubmitting} className="w-full group bg-[#207bff] hover:bg-[#1a62cc] text-white font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-50 shadow-sm hover:shadow-md hover:shadow-[#207bff]/20">
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {L === 'fr' ? 'Envoyer' : 'Send message'}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                /* Success state */
                <div className="text-center py-16 bg-[#f0fdf4] rounded-2xl border border-[#10b981]/20">
                  <div className="w-20 h-20 rounded-full bg-[#10b981]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{L === 'fr' ? 'Message envoyé !' : 'Message sent!'}</h3>
                  <p className="text-[#4a5568] mb-6">{L === 'fr' ? 'Nous vous répondons sous 48h.' : 'We\'ll get back to you within 48h.'}</p>
                  <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', company: '', message: '', gate_type: 'general' }); }} className="px-6 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[#1a1a1a] hover:border-[#207bff] transition-all text-sm font-medium">
                    {L === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                  </button>
                </div>
              )}
            </div>

            {/* ─── RIGHT — Contact info (5 cols) ─── */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'Nous joindre autrement' : 'Other ways'}</h2>
                <p className="text-[#4a5568]">{L === 'fr' ? 'Le canal qui vous convient.' : 'Choose what works for you.'}</p>
              </div>

              {/* Contact cards */}
              {[
                { icon: Mail, title: 'Email', desc: 'direction@industrialdecision.com', link: 'mailto:direction@industrialdecision.com', accent: '#207bff' },
                { icon: Mail, title: 'LinkedIn', desc: 'Industrial Decision', link: 'https://www.linkedin.com/company/industrial-decision', accent: '#207bff' },
                { icon: MapPin, title: L === 'fr' ? 'Localisation' : 'Location', desc: 'Paris, France', link: '#', accent: '#10b981' },
              ].map((m, i) => {
                const Icon = m.icon;
                return (
                  <a key={i} href={m.link} target={m.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#207bff]/30 hover:shadow-sm transition-all group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${m.accent}10` }}>
                      <Icon className="w-5 h-5" style={{ color: m.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#1a1a1a]">{m.title}</h4>
                      <p className="text-sm text-[#4a5568] truncate">{m.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#e2e8f0] group-hover:text-[#207bff] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </a>
                );
              })}

              {/* Response guarantee */}
              <div className="p-6 bg-[#f0f7ff] rounded-2xl border border-[#207bff]/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#207bff]/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#207bff]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1a1a1a]">{L === 'fr' ? 'Notre engagement' : 'Response guarantee'}</h4>
                </div>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Toutes les demandes reçoivent une réponse sous 48h. Urgences : 12-24h. Chaque échange est strictement confidentiel.'
                    : 'All inquiries answered within 48h. Urgent requests: 12-24h. Every exchange is confidential.'}
                </p>
              </div>

              {/* Services quick list */}
              <div className="p-6 bg-[#f5f7fa] rounded-2xl border border-[#e2e8f0]">
                <h4 className="text-xs font-semibold text-[#718096] uppercase tracking-wider mb-4">{L === 'fr' ? 'Nos services' : 'Our services'}</h4>
                <div className="space-y-3">
                  {[
                    { icon: Search, label: L === 'fr' ? 'Audit DRS' : 'DRS Audit', time: '2-3 sem.' },
                    { icon: Target, label: L === 'fr' ? 'Site Décisionnel' : 'Decision Website', time: '8-12 sem.' },
                    { icon: Zap, label: L === 'fr' ? 'Stratégie Acquisition' : 'Acquisition Strategy', time: '4-6 sem.' },
                    { icon: Shield, label: L === 'fr' ? 'Accompagnement' : 'Advisory', time: L === 'fr' ? 'Continu' : 'Ongoing' },
                  ].map((svc, i) => {
                    const Icon = svc.icon;
                    return (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-[#e2e8f0] last:border-0">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-[#207bff]" />
                          <span className="text-sm text-[#1a1a1a] font-medium">{svc.label}</span>
                        </div>
                        <span className="text-xs text-[#718096] font-mono">{svc.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* GDPR notice */}
              <p className="text-[11px] text-[#a0aec0] leading-relaxed px-1">
                {L === 'fr'
                  ? 'Vos données sont traitées conformément au RGPD. Elles ne sont jamais partagées avec des tiers sans votre consentement. Responsable : Industrial Decision, Paris.'
                  : 'Your data is processed in accordance with GDPR. Never shared without consent. Controller: Industrial Decision, Paris.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">{L === 'fr' ? 'Plutôt une démo en direct ?' : 'Prefer a live demo?'}</h2>
          <p className="text-[#4a5568] mb-8 max-w-xl mx-auto">{L === 'fr' ? 'Nous vous montrons notre plateforme avec vos propres données de marché.' : 'We\'ll show you our decision intelligence platform with your market data.'}</p>
          <a href="mailto:direction@industrialdecision.com?subject=Demo%20Request" className="btn-primary text-lg px-10 py-4">
            {L === 'fr' ? 'Réserver une démo gratuite' : 'Book a demo'}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
