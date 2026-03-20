import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, BarChart3, Database, Globe, Calendar, Clock, Linkedin, ExternalLink, BookOpen, TrendingUp, Users, MapPin, Search, Shield, Zap, Factory, ChevronRight, Eye, Target } from 'lucide-react';

export default function Insights() {
  const { i18n } = useTranslation();
  const L = i18n.language;

  return (
    <div className="animate-fade-in" data-testid="insights-page">

      {/* ── HERO ── */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400" alt="Data analytics" className="w-full h-[200px] md:h-[340px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#207bff]">
                <BookOpen className="w-3 h-3" /> {L === 'fr' ? 'Études, Données & Partenaires' : 'Studies, Data & Partners'}
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? (<>Nos <span className="text-[#207bff]">études</span>{' '}<span className="text-[#718096]">et données propriétaires.</span></>) : (<>Our <span className="text-[#207bff]">studies</span>{' '}<span className="text-[#718096]">and proprietary data.</span></>)}
            </h1>
            <p className="text-[#4a5568] leading-relaxed text-lg self-end">
              {L === 'fr'
                ? 'Analyses construites sur des données vérifiables — Banque de France, Altares, audits terrain. Enrichies par l\'expertise de nos partenaires industriels, dont ALMA Machines Outils.'
                : 'Analyses built on verifiable data — Banque de France, Altares, field audits. Enriched by the expertise of our industrial partners, including ALMA Machines Outils.'}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BENTO GRID 1 — Reports & Studies (3 cols, 3 rows)
          Layout: col1 top, CENTER TALL, col3 top
                  col1 mid,             col3 mid-bottom (tall)
                  col1 bottom,
          ════════════════════════════════════════════ */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>{L === 'fr' ? 'Rapports & Études' : 'Reports & Studies'}</h2>
            <p className="text-[#4a5568] text-lg self-end">{L === 'fr' ? '4 études propriétaires basées sur des données vérifiables et des méthodologies ouvertes.' : '4 proprietary studies based on verifiable data and open methodologies.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-5 auto-rows-[minmax(180px,auto)]">

            {/* ── Col 1, Row 1: Integrations / sources card ── */}
            <div className="md:col-span-1 md:row-span-1 bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-1">{L === 'fr' ? 'Nos sources' : 'Our sources'}</h3>
              <p className="text-xs text-[#718096] mb-4">{L === 'fr' ? 'Données publiques et vérifiables' : 'Public & verifiable data'}</p>
              <div className="flex items-center justify-center gap-3 mt-2">
                {[
                  { icon: Database, label: 'BdF' },
                  { icon: BarChart3, label: 'Altares' },
                  { icon: Globe, label: 'INSEE' },
                  { icon: Shield, label: 'TC' },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-[#f0f7ff] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#207bff]" />
                      </div>
                      <span className="text-[9px] text-[#718096]">{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Col 2, Rows 1-3: MAIN FEATURE — DRS Benchmark (tall center) ── */}
            <div className="md:col-span-1 md:row-span-3 rounded-2xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600" alt="CNC" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/40 to-transparent" />
              <div className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <p className="text-sm font-bold text-[#207bff] tracking-tight">DRS Benchmark 2025</p>
              </div>
              <div className="relative h-full flex flex-col justify-end p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold text-white bg-[#207bff]">REPORT</span>
                  <span className="text-white/50 text-[10px] flex items-center gap-1"><Calendar className="w-3 h-3" />Jan. 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{L === 'fr' ? 'Benchmark DRS : 30 Sites Web OEM Machines-Outils' : 'DRS Benchmark: 30 Machine-Tool OEM Websites'}</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-4">
                  {L === 'fr'
                    ? 'DMG MORI, Mazak, Hermle, AMADA, Makino, INDEX-TRAUB et 24 autres scorés sur maturité décisionnelle. Lacunes systématiques révélées sur scénarios, processus, preuves et points d\'entrée.'
                    : 'DMG MORI, Mazak, Hermle, AMADA, Makino, INDEX-TRAUB and 24 others scored on decision readiness. Systematic gaps revealed across scenarios, process, proof and entry points.'}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Altares', 'Banque de France', 'OEM Websites', 'ALMA MO'].map((s, i) => (<span key={i} className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-[9px]">{s}</span>))}
                </div>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-5xl font-bold text-white">30+</span>
                  <span className="text-xs text-white/50">OEM</span>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-xs font-medium text-white hover:bg-white hover:text-[#1a1a1a] transition-all self-start">
                  {L === 'fr' ? 'Demander l\'accès' : 'Request access'} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* ── Col 3, Row 1: Feature tags ── */}
            <div className="md:col-span-1 md:row-span-1 bg-white rounded-2xl p-6 border border-[#e2e8f0] flex flex-col justify-center gap-2.5">
              {[
                { label: L === 'fr' ? 'Données vérifiables' : 'Verifiable data', accent: '#207bff' },
                { label: L === 'fr' ? 'Méthodologie ouverte' : 'Open methodology', accent: '#4ea5ff' },
                { label: L === 'fr' ? 'Indices propriétaires' : 'Proprietary indices', accent: '#10b981' },
                { label: L === 'fr' ? 'Validation terrain' : 'Field validation', accent: '#e89565' },
                { label: 'ALMA Machines Outils', accent: '#207bff' },
              ].map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium" style={{ borderColor: `${tag.accent}40`, color: tag.accent }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: tag.accent }} /> {tag.label}
                </span>
              ))}
            </div>

            {/* ── Col 1, Row 2: Industrial Pressure Map (image card) ── */}
            <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Industrial" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
              <div className="relative flex flex-col justify-end h-full p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-[#ef4444]/80 text-white">DATA</span>
                  <span className="text-white/50 text-[9px]">Feb. 2025</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{L === 'fr' ? 'Carte Pression Industrielle France' : 'Industrial Pressure Map France'}</h4>
                <p className="text-white/60 text-[10px]">{L === 'fr' ? '51 772 défaillances · 13 régions · +9.5%' : '51,772 failures · 13 regions · +9.5%'}</p>
              </div>
            </div>

            {/* ── Col 3, Rows 2-3: Stat card (tall) — 95% / URI ── */}
            <div className="md:col-span-1 md:row-span-2 bg-[#207bff] rounded-2xl p-7 text-white flex flex-col justify-between">
              <div>
                <Search className="w-8 h-8 text-white/80 mb-4" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-white/20">WHITEPAPER</span>
                  <span className="text-white/50 text-[9px]">Nov. 2024</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{L === 'fr' ? 'URI : Mesurer la Réduction d\'Incertitude' : 'URI: Measuring Uncertainty Reduction'}</h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  {L === 'fr'
                    ? 'Comment nous avons construit l\'Indice de Réduction d\'Incertitude — méthodologie, grille de scoring et application à 30 sites OEM.'
                    : 'How we built the Uncertainty Reduction Index — methodology, scoring grid, and application to 30 OEM websites.'}
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mt-6 mb-3">
                  <span className="text-6xl font-bold">URI</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Proprietary', 'Gartner B2B', '30 OEM'].map((s, i) => (<span key={i} className="px-2 py-0.5 rounded-full bg-white/10 text-white/60 text-[9px]">{s}</span>))}
                </div>
              </div>
            </div>

            {/* ── Col 1, Row 3: Timeline / Journey card ── */}
            <div className="md:col-span-1 md:row-span-1 bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-1">{L === 'fr' ? 'Publications' : 'Publications'}</h3>
              <p className="text-xs text-[#718096] mb-3">{L === 'fr' ? 'Chronologie des études' : 'Study timeline'}</p>
              <div className="space-y-2.5">
                {[
                  { date: 'Jan. 25', label: 'DRS Benchmark', color: '#207bff' },
                  { date: 'Feb. 25', label: 'IPI Map France', color: '#ef4444' },
                  { date: 'Dec. 24', label: L === 'fr' ? '5 Scénarios Décision' : '5 Decision Scenarios', color: '#e89565' },
                  { date: 'Nov. 24', label: 'URI Methodology', color: '#4ea5ff' },
                  { date: 'Oct. 24', label: L === 'fr' ? 'Partenariat ALMA MO' : 'ALMA MO Partnership', color: '#10b981' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#718096] w-14 flex-shrink-0">{item.date}</span>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-xs text-[#1a1a1a] font-medium truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BENTO GRID 2 — Additional Studies (simpler grid)
          ════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">{L === 'fr' ? 'Études complémentaires' : 'Additional studies'}</h2>
            <p className="text-[#4a5568] self-end">{L === 'fr' ? 'Scénarios de décision et données de marché.' : 'Decision scenarios and market data.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Decision Scenarios */}
            <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#e89565]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-[#e89565]/10 text-[#e89565]">ARTICLE</span>
                  <span className="text-[10px] text-[#718096] flex items-center gap-1"><Calendar className="w-3 h-3" />Dec. 2024</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? '5 Scénarios de Décision des Dirigeants Industriels' : '5 Decision Scenarios Industrial Leaders Face'}</h3>
                <p className="text-xs text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Fermeture de site, liquidation, transfert d\'activité, arrêt d\'urgence, sortie discrète — cartographiés avec besoins, échecs web typiques et blocages.'
                    : 'Site closure, asset liquidation, activity transfer, emergency downtime, discreet exit — mapped with needs, typical web failures, and blockers.'}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#e89565]">5</span>
                  <span className="text-[10px] text-[#718096]">{L === 'fr' ? 'scénarios' : 'scenarios'}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {['Field interviews', 'TC data'].map((s, i) => (<span key={i} className="px-2 py-0.5 rounded-full bg-[#f5f7fa] text-[#718096] text-[8px] border border-[#e2e8f0]">{s}</span>))}
                </div>
              </div>
            </div>

            {/* IPI Methodology */}
            <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#ef4444]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-[#ef4444]/10 text-[#ef4444]">INDEX</span>
                  <span className="text-[10px] text-[#718096] flex items-center gap-1"><Calendar className="w-3 h-3" />Feb. 2025</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'IPI : Indice de Pression Industrielle' : 'IPI: Industrial Pressure Index'}</h3>
                <p className="text-xs text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Indice composite sur 13 régions françaises, croisant données Banque de France, Altares et INSEE. Suivi annuel depuis 2021.'
                    : 'Composite index across 13 French regions, crossing Banque de France, Altares and INSEE data. Annual tracking since 2021.'}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#ef4444]">+9.5%</span>
                  <span className="text-[10px] text-[#718096]">2025</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {['BdF', 'Altares', 'INSEE'].map((s, i) => (<span key={i} className="px-2 py-0.5 rounded-full bg-[#f5f7fa] text-[#718096] text-[8px] border border-[#e2e8f0]">{s}</span>))}
                </div>
              </div>
            </div>

            {/* DRS Scoring Grid */}
            <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#207bff]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-[#207bff]/10 text-[#207bff]">METHODOLOGY</span>
                  <span className="text-[10px] text-[#718096] flex items-center gap-1"><Calendar className="w-3 h-3" />Jan. 2025</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'Grille DRS : 4 Axes Décisionnels' : 'DRS Grid: 4 Decision Axes'}</h3>
                <p className="text-xs text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Scénarios, visibilité processus, blocs de preuve, points d\'entrée — la grille de scoring complète appliquée à chaque audit.'
                    : 'Scenarios, process visibility, proof blocks, entry points — the complete scoring grid applied to every audit.'}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#207bff]">1–4</span>
                  <span className="text-[10px] text-[#718096]">{L === 'fr' ? 'échelle' : 'scale'}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {['Proprietary', '30 OEM'].map((s, i) => (<span key={i} className="px-2 py-0.5 rounded-full bg-[#f5f7fa] text-[#718096] text-[8px] border border-[#e2e8f0]">{s}</span>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PARTNERS — ALMA Machines Outils & JBB
          ════════════════════════════════════════════ */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? 'Partenaires & contributeurs' : 'Partners & contributors'}
            </h2>
            <p className="text-[#4a5568] text-lg self-end">
              {L === 'fr'
                ? 'Notre méthodologie est enrichie et validée par des experts terrain de l\'industrie machine-outil française.'
                : 'Our methodology is enriched and validated by field experts from the French machine-tool industry.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ALMA Machines Outils */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:border-[#207bff]/20 transition-all group">
              <div className="relative h-52 overflow-hidden">
                <img src="https://images.unsplash.com//alma-logo.png" alt="ALMA Machines Outils" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-bold text-white">ALMA Machines Outils</h3>
                  <p className="text-xs text-white/70">{L === 'fr' ? 'Partenaire Industrie & Validation Terrain' : 'Industry Partner & Field Validation'}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#10b981] text-white text-[10px] font-semibold">{L === 'fr' ? 'Partenaire actif' : 'Active partner'}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
                  {L === 'fr'
                    ? 'Spécialiste machines-outils apportant expertise terrain et validation opérationnelle de notre méthodologie DRS. ALMA contribue à l\'ancrage de nos frameworks dans la réalité industrielle — benchmarks, scénarios acheteur et données terrain. Partenaire depuis octobre 2024.'
                    : 'Machine-tool specialist providing field expertise and operational validation of our DRS methodology. ALMA contributes to grounding our frameworks in industrial reality — benchmarks, buyer scenarios, and field data. Partner since October 2024.'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    L === 'fr' ? 'Validation DRS' : 'DRS Validation',
                    L === 'fr' ? 'Données terrain' : 'Field Data',
                    L === 'fr' ? 'Scénarios acheteur' : 'Buyer Scenarios',
                    L === 'fr' ? 'Depuis Oct. 2024' : 'Since Oct. 2024',
                  ].map((t, i) => (<span key={i} className="px-2.5 py-1 rounded-full bg-[#f0f7ff] text-[#207bff] text-[10px] font-medium">{t}</span>))}
                </div>
                <a href="https://alma-machines-outils.fr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f7fa] border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#1a1a1a] hover:border-[#207bff]/30 transition-all">
                  <ExternalLink className="w-3.5 h-3.5 text-[#207bff]" /> alma-machines-outils.fr
                </a>
              </div>
            </div>

            {/* Jean-Baptiste Borron */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:border-[#207bff]/20 transition-all group">
              <div className="relative h-52 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" alt="Jean-Baptiste Borron" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-bold text-white">Jean-Baptiste Borron</h3>
                  <p className="text-xs text-white/70">{L === 'fr' ? 'Conseiller Industrie — Machines-Outils' : 'Industry Advisor — Machine Tools'}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#207bff] text-white text-[10px] font-semibold">{L === 'fr' ? 'Conseiller' : 'Advisor'}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
                  {L === 'fr'
                    ? 'Expert opérations industrielles avec une connaissance approfondie de l\'écosystème machine-outil français. Fondateur d\'ALMA Machines Outils, Jean-Baptiste contribue directement à notre compréhension sectorielle, à la validation de nos indices (DRS, URI, IPI) et à notre réseau d\'acteurs industriels.'
                    : 'Industrial operations expert with deep knowledge of the French machine-tool ecosystem. Founder of ALMA Machines Outils, Jean-Baptiste directly contributes to our sector understanding, validation of our indices (DRS, URI, IPI), and our network of industrial actors.'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    L === 'fr' ? 'Fondateur ALMA MO' : 'Founder ALMA MO',
                    L === 'fr' ? 'Expert terrain' : 'Field Expert',
                    L === 'fr' ? 'Réseau industriel' : 'Industrial Network',
                    'DRS · URI · IPI',
                  ].map((t, i) => (<span key={i} className="px-2.5 py-1 rounded-full bg-[#f0f7ff] text-[#207bff] text-[10px] font-medium">{t}</span>))}
                </div>
                <div className="flex gap-2">
                  <a href="https://alma-machines-outils.fr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f7fa] border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#1a1a1a] hover:border-[#207bff]/30 transition-all">
                    <ExternalLink className="w-3.5 h-3.5 text-[#207bff]" /> {L === 'fr' ? 'Site web' : 'Website'}
                  </a>
                  <a href="https://www.linkedin.com/in/jean-baptiste-borron-087b6a116/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f7fa] border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#1a1a1a] hover:border-[#207bff]/30 transition-all">
                    <Linkedin className="w-3.5 h-3.5 text-[#207bff]" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA SOURCES ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">{L === 'fr' ? 'Sources de données' : 'Data sources'}</h2>
            <p className="text-[#4a5568] self-end">{L === 'fr' ? 'Toutes nos analyses s\'appuient sur des sources vérifiables.' : 'All our analyses rely on verifiable sources.'}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Banque de France', desc: { en: 'Failure statistics', fr: 'Statistiques défaillances' }, icon: Database },
              { name: 'Altares', desc: { en: 'Company risk data', fr: 'Données risques' }, icon: BarChart3 },
              { name: 'INSEE', desc: { en: 'Regional economics', fr: 'Économie régionale' }, icon: Globe },
              { name: 'Tribunal Commerce', desc: { en: 'Judicial data', fr: 'Données judiciaires' }, icon: Shield },
              { name: 'Gartner', desc: { en: 'B2B decision studies', fr: 'Études décision B2B' }, icon: TrendingUp },
              { name: 'ALMA MO', desc: { en: 'Field validation', fr: 'Validation terrain' }, icon: Factory },
            ].map((ds, i) => {
              const Icon = ds.icon;
              return (
                <div key={i} className="bg-[#f5f7fa] rounded-2xl p-5 border border-[#e2e8f0] text-center hover:border-[#207bff]/20 transition-all">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#f0f7ff] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#207bff]" />
                  </div>
                  <h4 className="text-xs font-bold text-[#1a1a1a] mb-1">{ds.name}</h4>
                  <p className="text-[10px] text-[#718096]">{L === 'fr' ? ds.desc.fr : ds.desc.en}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{L === 'fr' ? 'Voir nos données en direct ?' : 'See our data live?'}</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">{L === 'fr' ? 'Réservez une démo et nous vous montrons notre plateforme d\'intelligence décisionnelle avec vos données de marché.' : 'Book a demo and we\'ll show you our decision intelligence platform with your market data.'}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors text-lg">
            {L === 'fr' ? 'Réserver une démo' : 'Book a demo'} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
