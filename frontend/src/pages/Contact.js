import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import {
  Mail,
  Phone,
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
  Linkedin,
  Search,
  Target,
  Zap
} from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL || '';

const gateTypes = [
  { id: 'discreet', labelEn: 'Discreet', labelFr: 'Discret', descEn: 'Confidential assessment, no obligation', descFr: 'Évaluation confidentielle, sans obligation', time: '48-72h', color: '#e89565' },
  { id: 'exploratory', labelEn: 'Exploratory', labelFr: 'Exploratoire', descEn: 'Understand options and feasibility', descFr: 'Comprendre les options et la faisabilité', time: '3-5 days', color: '#207bff' },
  { id: 'urgent', labelEn: 'Urgent', labelFr: 'Urgent', descEn: 'Fast-track for time-critical situations', descFr: 'Parcours accéléré pour situations critiques', time: '12-24h', color: '#ef4444' },
  { id: 'general', labelEn: 'General', labelFr: 'Général', descEn: 'General inquiry or partnership', descFr: 'Question générale ou partenariat', time: '24-48h', color: '#10b981' },
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

  return (
    <div data-testid="contact-page">
      {/* ── HERO + FORM — Dark glassmorphism ── */}
      <section className="relative py-24 md:py-32 bg-zinc-950 text-white overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=1400')] bg-cover bg-center opacity-10" style={{ maskImage: 'linear-gradient(180deg, transparent 0%, black 10%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 10%, black 60%, transparent)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950/90" />
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-[#207bff]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[#4ea5ff]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                {L === 'fr' ? 'Échangeons' : 'Let\'s connect'}
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <span className="text-white">{L === 'fr' ? 'Prenons' : 'Get in'}</span><br />
              <span className="text-[#207bff]">{L === 'fr' ? 'contact' : 'touch'}</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {L === 'fr'
                ? 'Demandez un audit, discutez d\'un projet, ou explorez comment nous pouvons transformer votre présence digitale industrielle.'
                : 'Request an audit, discuss a project, or explore how we can transform your industrial digital presence.'}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Clock, value: '< 48h', label: L === 'fr' ? 'Délai de réponse' : 'Response time' },
              { icon: Search, value: '30+', label: L === 'fr' ? 'OEM audités' : 'OEMs audited' },
              { icon: Globe, value: '13', label: L === 'fr' ? 'Régions couvertes' : 'Regions covered' },
              { icon: Shield, value: '100%', label: L === 'fr' ? 'Confidentiel' : 'Confidential' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-5 bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.08] hover:bg-white/[0.06] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#207bff]/10 border border-white/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#207bff]" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-zinc-500 text-xs">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Main Grid — Form + Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT — Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{L === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}</h2>
                <p className="text-zinc-400">{L === 'fr' ? 'Choisissez votre type d\'échange et décrivez votre projet.' : 'Choose your exchange type and describe your project.'}</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" onChange={(e) => handleChange('website', e.target.value)} />

                  {/* Decision Gate Selector */}
                  <div>
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 block">{L === 'fr' ? 'Type d\'échange' : 'Exchange type'}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {gateTypes.map(g => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => handleChange('gate_type', g.id)}
                          className={`text-left p-3 rounded-xl border transition-all ${formData.gate_type === g.id ? 'bg-white/[0.08] border-[#207bff]/50' : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05]'}`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full" style={{ background: g.color }} />
                            <span className="text-sm font-medium text-white">{L === 'fr' ? g.labelFr : g.labelEn}</span>
                          </div>
                          <p className="text-[10px] text-zinc-500">{L === 'fr' ? g.descFr : g.descEn}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                      <input type="text" placeholder={L === 'fr' ? 'Nom *' : 'Name *'} value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className={`w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#207bff]/50 transition-all ${errors.name ? 'border-red-400/50' : 'border-white/[0.1]'}`} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                      <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#207bff]/50 transition-all ${errors.email ? 'border-red-400/50' : 'border-white/[0.1]'}`} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input type="text" placeholder={L === 'fr' ? 'Entreprise (optionnel)' : 'Company (optional)'} value={formData.company} onChange={(e) => handleChange('company', e.target.value)} className="w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#207bff]/50 transition-all" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-white/30" />
                    <textarea placeholder={L === 'fr' ? 'Décrivez votre projet ou votre besoin...' : 'Describe your project or need...'} rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className={`w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#207bff]/50 transition-all resize-none ${errors.message ? 'border-red-400/50' : 'border-white/[0.1]'}`} />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* GDPR */}
                  <div className="flex items-start gap-2 text-xs text-zinc-500">
                    <input type="checkbox" required className="mt-0.5 accent-[#207bff]" />
                    <span>{L === 'fr' ? 'J\'accepte que mes données soient traitées conformément au RGPD.' : 'I accept that my data will be processed in accordance with GDPR.'}</span>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={isSubmitting} className="w-full group relative overflow-hidden bg-[#207bff] hover:bg-[#1a62cc] text-white font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-50">
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {L === 'fr' ? 'Envoyer' : 'Send Message'}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-400/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{L === 'fr' ? 'Message envoyé !' : 'Message Sent!'}</h3>
                  <p className="text-zinc-400 mb-6">{L === 'fr' ? 'Nous vous répondrons sous 48h.' : 'We\'ll get back to you within 48h.'}</p>
                  <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', company: '', message: '', gate_type: 'general' }); }} className="px-6 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white hover:bg-white/[0.08] transition-all text-sm">
                    {L === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT — Contact methods + info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{L === 'fr' ? 'Autres moyens de contact' : 'Other ways to reach us'}</h2>
                <p className="text-zinc-400">{L === 'fr' ? 'Choisissez ce qui vous convient.' : 'Choose what works best for you.'}</p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {[
                  { icon: Mail, title: 'Email', desc: 'direction@industrialdecision.com', link: 'mailto:direction@industrialdecision.com', gradient: 'from-[#207bff]/15 to-[#4ea5ff]/15' },
                  { icon: Linkedin, title: 'LinkedIn', desc: 'Industrial Decision', link: 'https://www.linkedin.com/company/industrial-decision', gradient: 'from-[#207bff]/15 to-[#207bff]/5' },
                  { icon: MapPin, title: L === 'fr' ? 'Localisation' : 'Location', desc: 'Paris, France', link: '#', gradient: 'from-[#10b981]/15 to-[#10b981]/5' },
                ].map((method, i) => {
                  const Icon = method.icon;
                  return (
                    <a key={i} href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block p-5 bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.08] hover:bg-white/[0.06] transition-all group">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/10 flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-white">{method.title}</h4>
                          <p className="text-sm text-zinc-400">{method.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Quick response guarantee */}
              <div className="p-6 bg-gradient-to-br from-[#207bff]/[0.06] to-[#4ea5ff]/[0.04] backdrop-blur-xl rounded-2xl border border-[#207bff]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#207bff]" />
                  <h4 className="text-base font-semibold text-white">{L === 'fr' ? 'Engagement de réponse' : 'Response guarantee'}</h4>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {L === 'fr'
                    ? 'Toutes les demandes reçoivent une réponse sous 48h. Pour les demandes urgentes, nous vous recontactons sous 12-24h. Chaque échange est confidentiel.'
                    : 'All inquiries receive a response within 48h. For urgent requests, we get back to you within 12-24h. Every exchange is confidential.'}
                </p>
              </div>

              {/* Services quick links */}
              <div className="p-6 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.08]">
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">{L === 'fr' ? 'Nos services' : 'Our services'}</h4>
                <div className="space-y-3">
                  {[
                    { icon: Search, label: L === 'fr' ? 'Audit DRS' : 'DRS Audit', time: '2-3 sem.' },
                    { icon: Target, label: L === 'fr' ? 'Site Décisionnel' : 'Decision Website', time: '8-12 sem.' },
                    { icon: Zap, label: L === 'fr' ? 'Stratégie Acquisition' : 'Acquisition Strategy', time: '4-6 sem.' },
                    { icon: Shield, label: L === 'fr' ? 'Accompagnement' : 'Advisory', time: L === 'fr' ? 'Continu' : 'Ongoing' },
                  ].map((svc, i) => {
                    const Icon = svc.icon;
                    return (
                      <div key={i} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-[#207bff]" />
                          <span className="text-sm text-white">{svc.label}</span>
                        </div>
                        <span className="text-xs text-zinc-500 font-mono">{svc.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* GDPR notice */}
              <p className="text-[11px] text-zinc-600 leading-relaxed">
                {L === 'fr'
                  ? 'Vos données sont traitées conformément au RGPD. Elles ne sont jamais partagées avec des tiers sans votre consentement. Responsable : Industrial Decision, Paris, France.'
                  : 'Your data is processed in accordance with GDPR. It is never shared with third parties without your consent. Controller: Industrial Decision, Paris, France.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
