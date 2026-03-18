import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Shield,
  Search,
  Zap,
  FileText,
  CheckCircle,
  Database,
  Globe,
  LineChart,
  Play,
  BarChart3,
  TrendingUp,
  Factory,
  Cog,
  Wrench,
  Award
} from 'lucide-react';

/* ─── DATA ─── */
const services = [
  { id: 'audit-drs', icon: Search, titleEn: 'Decision Readiness Audit', titleFr: 'Audit de Maturité Décisionnelle', descEn: 'We audit your website against 30+ industrial OEMs using our DRS methodology. You receive a scored report with concrete recommendations.', descFr: 'Nous auditons votre site face à 30+ OEM industriels via notre méthodologie DRS. Vous recevez un rapport chiffré avec des recommandations concrètes.', deliverableEn: 'Scored report + action plan', deliverableFr: 'Rapport chiffré + plan d\'action', duration: '2-3 sem.' },
  { id: 'site-decisionnel', icon: Target, titleEn: 'Decision-Grade Website', titleFr: 'Site Web Décisionnel', descEn: 'We redesign your website as a decision support tool — with structured entry points, process visibility, and proof blocks.', descFr: 'Nous refondons votre site comme outil d\'aide à la décision — points d\'entrée structurés, visibilité processus et preuves.', deliverableEn: 'Full website delivery', deliverableFr: 'Livraison site complet', duration: '8-12 sem.' },
  { id: 'strategie-acquisition', icon: Zap, titleEn: 'Acquisition Strategy', titleFr: 'Stratégie d\'Acquisition', descEn: 'SEO, content strategy, and visibility layer design tailored to industrial decision-makers.', descFr: 'SEO, stratégie de contenu et couche de visibilité pour décideurs industriels.', deliverableEn: 'Strategy + 6-month roadmap', deliverableFr: 'Stratégie + roadmap 6 mois', duration: '4-6 sem.' },
  { id: 'accompagnement', icon: Shield, titleEn: 'Ongoing Advisory', titleFr: 'Accompagnement Continu', descEn: 'Monthly monitoring with KPI tracking, content updates, and strategic adjustments.', descFr: 'Suivi mensuel : tracking KPI, mises à jour contenu, ajustements stratégiques.', deliverableEn: 'Monthly report + steering', deliverableFr: 'Rapport mensuel + pilotage', duration: 'Continu' },
];

const differentiators = [
  { titleEn: 'We know your industry', titleFr: 'Nous connaissons votre industrie', descEn: 'Machine tools, industrial restructuring, asset management — we work exclusively with industrial actors in France.', descFr: 'Machines-outils, restructuration industrielle, gestion d\'actifs — nous travaillons exclusivement avec des acteurs industriels en France.' },
  { titleEn: 'Data, not opinions', titleFr: 'Des données, pas des opinions', descEn: 'Our recommendations rest on 51,000+ failure analyses, 30 OEM benchmarks, and regional market pressure indices.', descFr: 'Nos recommandations s\'appuient sur 51 000+ analyses de défaillances, 30 benchmarks OEM et des indices de pression régionaux.' },
  { titleEn: 'We prove it live', titleFr: 'On vous le prouve en direct', descEn: 'In every first meeting we open our decision intelligence platform and show you your market, your competitors, and your gaps — live.', descFr: 'À chaque premier RDV, nous ouvrons notre plateforme et vous montrons votre marché, vos concurrents et vos lacunes — en direct.' },
];

const CLIENTS = [
  { name: 'DMG MORI', icon: Cog },
  { name: 'Mazak', icon: Factory },
  { name: 'Hermle', icon: Wrench },
  { name: 'AMADA', icon: Factory },
  { name: 'Makino', icon: Cog },
  { name: 'INDEX-TRAUB', icon: Wrench },
];

/* ─── HERO SUB-COMPONENTS ─── */
const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

/* ─── MAIN COMPONENT ─── */
export default function Home() {
  const { i18n } = useTranslation();
  const L = i18n.language;

  return (
    <div data-testid="home-page">
      {/* ════════════════════════════════════════════
          HERO — Glassmorphism Trust Hero (dark)
          ════════════════════════════════════════════ */}
      <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
        <style>{`
          @keyframes heroFadeSlideIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroMarquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .hero-anim { animation: heroFadeSlideIn 0.8s ease-out forwards; opacity: 0; }
          .hero-marquee { animation: heroMarquee 40s linear infinite; }
          .hd-100 { animation-delay: 0.1s; }
          .hd-200 { animation-delay: 0.2s; }
          .hd-300 { animation-delay: 0.3s; }
          .hd-400 { animation-delay: 0.4s; }
          .hd-500 { animation-delay: 0.5s; }
        `}</style>

        {/* Background — industrial CNC imagery */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=1400)',
            maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)',
          }}
        />
        {/* Blue accent glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#207bff]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4ea5ff]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

            {/* ─── LEFT COLUMN ─── */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
              {/* Badge */}
              <div className="hero-anim hd-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                    {L === 'fr' ? 'Conseil Digital Industriel' : 'Industrial Digital Advisory'}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#207bff] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#207bff]" />
                    </span>
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h1
                className="hero-anim hd-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  maskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
                }}
              >
                {L === 'fr' ? (
                  <>
                    Votre site ne<br />
                    <span className="bg-gradient-to-br from-white via-white to-[#4ea5ff] bg-clip-text text-transparent">
                      convainc pas
                    </span><br />
                    vos décideurs
                  </>
                ) : (
                  <>
                    Your site doesn't<br />
                    <span className="bg-gradient-to-br from-white via-white to-[#4ea5ff] bg-clip-text text-transparent">
                      convince
                    </span><br />
                    your buyers
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="hero-anim hd-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
                {L === 'fr'
                  ? 'Nous auditons et transformons les sites web d\'acteurs de la machine-outil et de l\'industrie en outils d\'aide à la décision. Avec des données, pas des promesses.'
                  : 'We audit and transform machine-tool and industrial websites into decision support tools. With data, not promises.'}
              </p>

              {/* CTA Buttons */}
              <div className="hero-anim hd-400 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#207bff] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1a62cc] active:scale-[0.98]"
                >
                  {L === 'fr' ? 'Demander un Audit' : 'Request an Audit'}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/expertise"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {L === 'fr' ? 'Voir nos services' : 'See our services'}
                </Link>
              </div>
            </div>

            {/* ─── RIGHT COLUMN — Bento Cards ─── */}
            <div className="lg:col-span-5 space-y-6 lg:mt-12">
              {/* Stats Card */}
              <div className="hero-anim hd-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#207bff]/5 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <TrendingUp className="h-6 w-6 text-[#207bff]" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold tracking-tight text-white">51,772</div>
                      <div className="text-sm text-zinc-400">
                        {L === 'fr' ? 'Défaillances en France (2025)' : 'Business Failures in France (2025)'}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar — IPI */}
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">{L === 'fr' ? 'Pression industrielle' : 'Industrial Pressure'}</span>
                      <span className="text-[#ef4444] font-medium">+9.5%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#207bff] to-[#ef4444]" />
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/10 mb-6" />

                  {/* Mini Stats Grid */}
                  <div className="grid grid-cols-5 gap-2 text-center">
                    <StatItem value="30" label={L === 'fr' ? 'OEM audités' : 'OEMs audited'} />
                    <div className="w-px bg-white/10 mx-auto" />
                    <StatItem value="13" label={L === 'fr' ? 'Régions' : 'Regions'} />
                    <div className="w-px bg-white/10 mx-auto" />
                    <StatItem value="4" label={L === 'fr' ? 'Services' : 'Services'} />
                  </div>

                  {/* Tag Pills */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      {L === 'fr' ? 'DONNÉES À JOUR' : 'DATA UP TO DATE'}
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <Award className="w-3 h-3 text-[#e89565]" />
                      {L === 'fr' ? 'MÉTHODOLOGIE DRS' : 'DRS METHODOLOGY'}
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <Database className="w-3 h-3 text-[#4ea5ff]" />
                      Banque de France
                    </div>
                  </div>
                </div>
              </div>

              {/* Marquee Card — Benchmarked OEMs */}
              <div className="hero-anim hd-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-6 backdrop-blur-xl">
                <h3 className="mb-4 px-8 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {L === 'fr' ? 'OEM Benchmarkés dans notre audit' : 'OEMs Benchmarked in our audit'}
                </h3>
                <div
                  className="relative flex overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  }}
                >
                  <div className="hero-marquee flex gap-12 whitespace-nowrap px-4">
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => {
                      const Icon = client.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 opacity-40 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                        >
                          <Icon className="h-5 w-5 text-[#207bff]" />
                          <span className="text-sm font-bold text-white tracking-tight">{client.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SCROLLABLE CONTENT BELOW HERO
          ════════════════════════════════════════════ */}

      {/* ── PROBLEM ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">{L === 'fr' ? 'Le Constat' : 'The Problem'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">{L === 'fr' ? 'Les sites web industriels ne sont pas conçus pour la décision' : 'Industrial websites aren\'t built for decision-making'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#fef2f2] rounded-xl p-6 border-l-4 border-[#ef4444]">
                <h3 className="font-bold text-[#1a1a1a] mb-3">{L === 'fr' ? 'Ce qu\'on voit partout' : 'What we see everywhere'}</h3>
                <ul className="space-y-2 text-[#4a5568]">
                  {(L === 'fr' ? ['Catalogues produits sans contexte décisionnel', 'Formulaires de contact génériques', 'Aucune visibilité sur le processus d\'engagement', 'Pas de preuve opérationnelle vérifiable'] : ['Product catalogs with no decision context', 'Generic contact forms', 'No visibility into the engagement process', 'No verifiable operational proof']).map((t, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#ef4444] mt-1">✗</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f0fdf4] rounded-xl p-6 border-l-4 border-[#10b981]">
                <h3 className="font-bold text-[#1a1a1a] mb-3">{L === 'fr' ? 'Ce que nous construisons' : 'What we build'}</h3>
                <ul className="space-y-2 text-[#4a5568]">
                  {(L === 'fr' ? ['Scénarios adaptés au contexte du dirigeant', 'Points d\'entrée contextuels (discret, urgent, exploratoire)', 'Processus visibles avec délais et engagements', 'Études de cas anonymisées avec métriques'] : ['Decision scenarios adapted to leadership context', 'Contextual entry points (discreet, urgent, exploratory)', 'Visible processes with clear timelines', 'Anonymized case studies with metrics']).map((t, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-[#10b981] mt-1 flex-shrink-0" /><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">{L === 'fr' ? 'Nos Services' : 'Our Services'}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">{L === 'fr' ? 'Ce que nous livrons concrètement' : 'What we concretely deliver'}</h2>
            </div>
            <Link to="/expertise" className="btn-secondary">{L === 'fr' ? 'Tout voir' : 'See all'}<ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(s => { const I = s.icon; return (
              <Link key={s.id} to={`/expertise/${s.id}`} className="card-premium group hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="expertise-icon flex-shrink-0 group-hover:scale-110 transition-transform"><I size={24} className="text-[#207bff]" /></div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#207bff] transition-colors">{L === 'fr' ? s.titleFr : s.titleEn}</h3>
                </div>
                <p className="text-[#4a5568] leading-relaxed mb-4">{L === 'fr' ? s.descFr : s.descEn}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-[#718096]"><FileText size={14} /><span>{L === 'fr' ? s.deliverableFr : s.deliverableEn}</span></div>
                  <span className="text-sm font-medium text-[#207bff]">{s.duration}</span>
                </div>
              </Link>
            ); })}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">{L === 'fr' ? 'Pourquoi Nous' : 'Why Us'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12">{L === 'fr' ? 'Ce qui nous distingue' : 'What sets us apart'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div key={i}>
                <div className="text-6xl font-bold text-[#207bff]/10 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{L === 'fr' ? d.titleFr : d.titleEn}</h3>
                <p className="text-[#4a5568] leading-relaxed">{L === 'fr' ? d.descFr : d.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD TEASER ── */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4ea5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">{L === 'fr' ? 'Notre Outil Propriétaire' : 'Our Proprietary Tool'}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{L === 'fr' ? 'Plateforme d\'intelligence décisionnelle' : 'Decision intelligence platform'}</h2>
              <p className="text-[#a0aec0] text-lg leading-relaxed mb-6">{L === 'fr' ? 'En rendez-vous, nous vous montrons en direct : pression marché par région, benchmark concurrents, scénarios de décision, métriques de performance. Pas un PowerPoint — un outil interactif sur données réelles.' : 'In meetings, we show you live: market pressure by region, competitor benchmarks, decision scenarios, performance metrics. Not a PowerPoint — an interactive tool built on real data.'}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ v: '13', en: 'Regions mapped', fr: 'Régions cartographiées' }, { v: '30+', en: 'OEMs benchmarked', fr: 'OEM benchmarkés' }, { v: '5', en: 'Decision scenarios', fr: 'Scénarios de décision' }, { v: '4', en: 'Entry gates', fr: 'Portes d\'entrée' }].map((s, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#4ea5ff]">{s.v}</div>
                    <div className="text-sm text-[#718096]">{L === 'fr' ? s.fr : s.en}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#207bff] text-white font-semibold rounded-sm hover:bg-[#1a62cc] transition-colors">{L === 'fr' ? 'Réserver une démo' : 'Book a demo'}<ArrowRight size={18} /></Link>
            </div>
            <div className="bg-[#0f1320] rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-6"><div className="w-3 h-3 rounded-full bg-[#ef4444]" /><div className="w-3 h-3 rounded-full bg-[#f59e0b]" /><div className="w-3 h-3 rounded-full bg-[#10b981]" /><span className="text-xs text-[#718096] ml-2">Industrial Decision Platform</span></div>
              <div className="space-y-4">
                <div className="bg-[#1a1f2e] rounded-lg p-4"><div className="text-xs text-[#4ea5ff] mb-1">Industrial Pressure Index</div><div className="text-3xl font-bold text-white">51,772</div><div className="text-xs text-[#ef4444]">+9.5% vs 2024</div></div>
                <div className="grid grid-cols-3 gap-3">{[{ l: 'DRS Avg', v: '3.2' }, { l: 'URI Score', v: '68' }, { l: 'SCI', v: '62' }].map((m, i) => (<div key={i} className="bg-[#1a1f2e] rounded-lg p-3"><div className="text-xs text-[#718096]">{m.l}</div><div className="text-lg font-bold text-white">{m.v}</div></div>))}</div>
                <div className="bg-[#1a1f2e] rounded-lg p-4"><div className="text-xs text-[#718096] mb-2">{L === 'fr' ? 'Régions les plus touchées' : 'Most impacted regions'}</div><div className="space-y-2">{['Île-de-France', 'Auvergne-Rhône-Alpes', 'PACA'].map((r, i) => (<div key={i} className="flex items-center justify-between"><span className="text-sm text-[#a0aec0]">{r}</span><div className="flex-1 mx-3 h-1 bg-[#252b3d] rounded-full overflow-hidden"><div className="h-full bg-[#ef4444] rounded-full" style={{ width: `${85 - i * 15}%` }} /></div></div>))}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">{L === 'fr' ? 'L\'Équipe' : 'The Team'}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">{L === 'fr' ? 'Stratégie digitale + expertise industrielle' : 'Digital strategy + industrial expertise'}</h2>
              <p className="text-[#4a5568] text-lg leading-relaxed mb-8">{L === 'fr' ? 'Un architecte stratégie digitale, un CTO full-stack, et un expert opérations industrielles. Nous combinons la tech et le terrain.' : 'A digital strategy architect, a full-stack CTO, and an industrial operations expert. We combine tech and field expertise.'}</p>
              <Link to="/team" className="btn-primary">{L === 'fr' ? 'Rencontrer l\'équipe' : 'Meet the team'}<ArrowRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[{ photo: 'https://i.ibb.co/N6Td5161/Untitled-design-5.png', name: 'Lucas A.', role: L === 'fr' ? 'Fondateur' : 'Founder' }, { photo: 'https://i.ibb.co/gZS47BmH/Untitled-design-6.png', name: 'Ayoub B.', role: 'CTO' }, { photo: 'https://i.ibb.co/DDKhbt2R/Untitled-design-7.png', name: 'David A.', role: L === 'fr' ? 'Opérations' : 'Operations' }].map((m, i) => (
                <div key={i} className="relative group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden"><img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" /></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2"><p className="text-[#1a1a1a] text-sm font-medium">{m.name}</p><p className="text-[#718096] text-xs">{m.role}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{L === 'fr' ? 'Votre site web aide-t-il vos prospects à décider ?' : 'Does your website help prospects decide?'}</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">{L === 'fr' ? 'Demandez un audit gratuit de votre maturité décisionnelle. Nous analysons votre site avec notre méthodologie DRS et vous montrons où vous perdez des décideurs.' : 'Request a free decision readiness audit. We analyze your site with our DRS methodology and show you where you\'re losing decision-makers.'}</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors text-lg">{L === 'fr' ? 'Demander un Audit Gratuit' : 'Request Free Audit'}<ArrowRight size={20} /></Link>
        </div>
      </section>
    </div>
  );
}
