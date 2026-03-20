import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Globe, Users, Award, ArrowRight, Search, BarChart3, Shield, TrendingUp, Eye, Route, Zap, Database } from 'lucide-react';

const achievements = [
  { valueEn: '51,772', valueFr: '51 772', labelEn: 'Failures Analyzed', labelFr: 'Défaillances Analysées' },
  { valueEn: '30+', valueFr: '30+', labelEn: 'OEMs Benchmarked', labelFr: 'OEM Benchmarkés' },
  { valueEn: '13', valueFr: '13', labelEn: 'Regions Covered', labelFr: 'Régions Couvertes' },
  { valueEn: '4', valueFr: '4', labelEn: 'Proprietary Indices', labelFr: 'Indices Propriétaires' },
];

export default function About() {
  const { i18n } = useTranslation();
  const L = i18n.language;

  return (
    <div className="animate-fade-in" data-testid="about-page">

      {/* ════════════════════════════════════════════
          HERO — Full-width image + two-column intro
          ════════════════════════════════════════════ */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=1400"
              alt={L === 'fr' ? 'Usinage industriel' : 'Industrial machining'}
              className="w-full h-[240px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#207bff]">
                <span className="w-2 h-2 bg-[#207bff] rounded-full" />
                {L === 'fr' ? 'Depuis 2024' : 'Since 2024'}
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? (
                <>L'écosystème <span className="text-[#207bff]">Industrial Decision</span>{' '}<span className="text-[#718096]">transforme la présence digitale de l'industrie française.</span></>
              ) : (
                <>The <span className="text-[#207bff]">Industrial Decision</span>{' '}<span className="text-[#718096]">ecosystem transforms French industry's digital presence.</span></>
              )}
            </h1>
            <div className="space-y-5">
              <p className="text-[#4a5568] leading-relaxed text-lg">
                {L === 'fr'
                  ? 'Né d\'un constat simple — les sites web industriels ne sont pas conçus pour aider les décideurs à décider — Industrial Decision combine audit, conception et accompagnement pour créer des sites web de grade décisionnel.'
                  : 'Born from a simple observation — industrial websites aren\'t designed to help decision-makers decide — Industrial Decision combines audit, design, and advisory to create decision-grade websites.'}
              </p>
              <Link to="/expertise" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#f5f7fa] border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#1a1a1a] hover:border-[#207bff]/30 hover:bg-[#f0f7ff] transition-all group">
                {L === 'fr' ? 'Découvrir nos services' : 'Discover our services'}
                <ChevronRight className="w-4 h-4 text-[#207bff] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ACHIEVEMENTS BAR
          ════════════════════════════════════════════ */}
      <section className="py-10 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#207bff] mb-1">{L === 'fr' ? a.valueFr : a.valueEn}</div>
                <div className="text-sm text-[#718096] font-medium">{L === 'fr' ? a.labelFr : a.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BENTO GRID — "What we do" + Services + Principles + Indices
          All content in one rich, varied bento layout
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? 'Ce que nous faisons' : 'What we do'}
            </h2>
            <p className="text-[#4a5568] text-lg leading-relaxed self-end">
              {L === 'fr'
                ? 'Nous auditons et transformons les sites d\'acteurs industriels. Notre objectif : que chaque visite d\'un décideur rapproche d\'une décision, pas d\'une hésitation.'
                : 'We audit and transform industrial websites. Our goal: every visit from a decision-maker brings them closer to a decision, not to hesitation.'}
            </p>
          </div>

          {/* ── BENTO ROW 1 — Services (3 cols: 1 tall left + 2 stacked right) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

            {/* Card 1: DRS Audit — tall, spans 1 col 2 rows on desktop */}
            <div className="md:row-span-2 bg-[#1a1a1a] rounded-2xl overflow-hidden text-white flex flex-col">
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Audit" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#207bff]/20 rounded-full text-xs font-semibold text-[#4ea5ff] mb-4 self-start">
                  <Search className="w-3 h-3" /> {L === 'fr' ? 'Méthodologie DRS' : 'DRS Methodology'}
                </div>
                <h3 className="text-xl font-bold mb-3">{L === 'fr' ? 'Audit de Maturité Décisionnelle' : 'Decision Readiness Audit'}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {L === 'fr'
                    ? 'Nous évaluons votre site sur 4 axes — scénarios, processus, preuves, points d\'entrée — face à 30 OEM de référence. Vous recevez un rapport chiffré avec des recommandations concrètes.'
                    : 'We evaluate your site across 4 axes — scenarios, process, proof, entry points — against 30 benchmark OEMs. You receive a scored report with concrete recommendations.'}
                </p>
                <Link to="/expertise/audit-drs" className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-[#1a1a1a] transition-all self-start">
                  {L === 'fr' ? 'En savoir plus' : 'Learn more'} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Decision-Grade Websites */}
            <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] flex flex-col justify-between hover:border-[#207bff]/20 hover:shadow-lg hover:shadow-[#207bff]/5 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#207bff]/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-[#207bff]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'Sites Web Décisionnels' : 'Decision-Grade Websites'}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Nous construisons des sites qui réduisent l\'incertitude : scénarios adaptés, processus visibles, preuves vérifiables, portes d\'entrée contextuelles.'
                    : 'We build sites that reduce uncertainty: adapted scenarios, visible processes, verifiable proof, contextual entry gates.'}
                </p>
              </div>
              <Link to="/expertise/site-decisionnel" className="mt-5 text-sm font-medium text-[#207bff] flex items-center gap-1 hover:gap-2 transition-all">
                {L === 'fr' ? 'En savoir plus' : 'Learn more'} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Big stat — 51,772 */}
            <div className="relative bg-[#f5f7fa] rounded-2xl border border-[#e2e8f0] overflow-hidden flex items-center justify-center min-h-[180px]">
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              <div className="relative z-10 text-center px-6">
                <div className="text-6xl md:text-7xl font-bold text-[#1a1a1a]/90 mb-1">{L === 'fr' ? '51 772' : '51,772'}</div>
                <div className="text-sm text-[#718096] font-medium">{L === 'fr' ? 'Défaillances analysées' : 'Failures analyzed'}</div>
              </div>
            </div>

            {/* Card 4: Market Intelligence */}
            <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] flex flex-col justify-between hover:border-[#207bff]/20 transition-all">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a]">{L === 'fr' ? 'Intelligence de Marché' : 'Market Intelligence'}</h3>
                    <p className="text-xs text-[#718096]">Banque de France · Altares</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#e89565]/30 text-xs font-semibold text-[#e89565]">
                    {L === 'fr' ? '13 Régions' : '13 Regions'}
                  </span>
                </div>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Données de pression industrielle sur 13 régions françaises pour guider vos décisions stratégiques.'
                    : 'Industrial pressure data across 13 French regions to guide your strategic decisions.'}
                </p>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#207bff]">+9.5%</span>
                <span className="text-xs text-[#718096]">{L === 'fr' ? 'hausse annuelle' : 'annual increase'}</span>
              </div>
            </div>

            {/* Card 5: Acquisition Strategy — wide, spans 2 cols */}
            <div className="md:col-span-2 bg-[#f0f7ff] rounded-2xl p-7 border border-[#207bff]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#207bff]/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#207bff]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{L === 'fr' ? 'Stratégie d\'Acquisition' : 'Acquisition Strategy'}</h3>
                </div>
                <p className="text-sm text-[#4a5568] leading-relaxed max-w-lg">
                  {L === 'fr'
                    ? 'SEO, clusters de contenu et couche de visibilité pour capter les décideurs industriels qui cherchent des solutions dans votre secteur.'
                    : 'SEO, content clusters, and visibility layer to capture industrial decision-makers searching for solutions in your sector.'}
                </p>
              </div>
              <Link to="/expertise/strategie-acquisition" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#207bff] text-white text-sm font-semibold rounded-lg hover:bg-[#1a62cc] transition-all flex-shrink-0">
                {L === 'fr' ? 'Découvrir' : 'Explore'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── BENTO ROW 2 — Principles (4 cards) ── */}
          <div className="mt-16 mb-14">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {L === 'fr' ? 'Nos principes' : 'Our principles'}
              </h2>
              <p className="text-[#4a5568] text-lg self-end">
                {L === 'fr'
                  ? 'Quatre convictions qui guident chaque mission, chaque recommandation, chaque livrable.'
                  : 'Four convictions that guide every engagement, every recommendation, every deliverable.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Target, titleEn: 'Rigor', titleFr: 'Rigueur', descEn: 'Data-verified analyses. Transparent methodologies. Measurable results. No vanity metrics.', descFr: 'Analyses vérifiées par les données. Méthodologies transparentes. Résultats mesurables. Pas de vanity metrics.', accent: '#207bff' },
                { icon: Globe, titleEn: 'Clarity', titleFr: 'Clarté', descEn: 'Direct communication, jargon-free, action-oriented. We say what we do and do what we say.', descFr: 'Communication directe, sans jargon, orientée action. On dit ce qu\'on fait et on fait ce qu\'on dit.', accent: '#4ea5ff' },
                { icon: Users, titleEn: 'Specialization', titleFr: 'Spécialisation', descEn: 'We don\'t do everything for everyone. We do digital strategy for industrial actors in France. Period.', descFr: 'Nous ne faisons pas tout pour tout le monde. Nous faisons la stratégie digitale pour l\'industrie en France. Point.', accent: '#10b981' },
                { icon: Award, titleEn: 'Proof', titleFr: 'Preuve', descEn: 'Every recommendation is backed by our benchmark of 30 OEMs and 51,000+ failure analyses.', descFr: 'Chaque recommandation s\'appuie sur notre benchmark de 30 OEM et 51 000+ analyses de défaillances.', accent: '#e89565' },
              ].map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#207bff]/20 hover:shadow-lg hover:shadow-[#207bff]/5 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-11 h-11 mb-5 rounded-xl flex items-center justify-center" style={{ background: `${v.accent}12` }}>
                      <Icon size={20} style={{ color: v.accent }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? v.titleFr : v.titleEn}</h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed">{L === 'fr' ? v.descFr : v.descEn}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── BENTO ROW 3 — Proprietary Indices (3 cols: 1 wide accent + 2 stacked) ── */}
          <div className="mt-16">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {L === 'fr' ? 'Indices propriétaires' : 'Proprietary indices'}
              </h2>
              <p className="text-[#4a5568] text-lg self-end">
                {L === 'fr'
                  ? 'Trois indices développés en interne pour mesurer, comparer et améliorer la performance décisionnelle.'
                  : 'Three internally-developed indices to measure, compare, and improve decision performance.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* DRS — featured card */}
              <div className="md:row-span-2 bg-[#207bff] rounded-2xl p-8 text-white flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-2 tracking-tight">DRS</div>
                  <div className="text-white/70 text-sm font-medium mb-4">{L === 'fr' ? 'Score de Maturité Décisionnelle' : 'Decision Readiness Score'}</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {L === 'fr'
                      ? 'Mesure la capacité d\'un site web à soutenir la prise de décision industrielle. Noté de 1 à 4 sur quatre axes : scénarios de décision, visibilité processus, blocs de preuve et points d\'entrée.'
                      : 'Measures how well a website supports industrial decision-making. Scored 1-4 across four axes: decision scenarios, process visibility, proof blocks, and entry points.'}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/20">
                  <div>
                    <div className="text-3xl font-bold">1–4</div>
                    <div className="text-xs text-white/60">{L === 'fr' ? 'Échelle de notation' : 'Scoring scale'}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4</div>
                    <div className="text-xs text-white/60">{L === 'fr' ? 'Axes mesurés' : 'Axes measured'}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">30</div>
                    <div className="text-xs text-white/60">{L === 'fr' ? 'OEM dans le benchmark' : 'OEMs in benchmark'}</div>
                  </div>
                </div>
              </div>

              {/* URI */}
              <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#4ea5ff]/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4ea5ff]/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-[#4ea5ff]" />
                    </div>
                    <div className="text-2xl font-bold text-[#4ea5ff]">URI</div>
                  </div>
                  <div className="text-sm text-[#718096] mb-3 font-medium">{L === 'fr' ? 'Indice de Réduction d\'Incertitude' : 'Uncertainty Reduction Index'}</div>
                  <p className="text-sm text-[#4a5568] leading-relaxed">
                    {L === 'fr'
                      ? 'Quantifie la réduction d\'incertitude pour l\'acheteur à chaque étape du parcours de décision. Plus le score est élevé, plus le site réduit efficacement les doutes.'
                      : 'Quantifies how much a website reduces buyer uncertainty at each stage of the decision journey. Higher score means more effective doubt reduction.'}
                  </p>
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#4ea5ff]">68</span>
                  <span className="text-xs text-[#718096]">{L === 'fr' ? 'score moyen actuel' : 'current avg score'}</span>
                </div>
              </div>

              {/* IPI */}
              <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#e89565]/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#e89565]/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#e89565]" />
                    </div>
                    <div className="text-2xl font-bold text-[#e89565]">IPI</div>
                  </div>
                  <div className="text-sm text-[#718096] mb-3 font-medium">{L === 'fr' ? 'Indice de Pression Industrielle' : 'Industrial Pressure Index'}</div>
                  <p className="text-sm text-[#4a5568] leading-relaxed">
                    {L === 'fr'
                      ? 'Indice composite suivant la pression de défaillance industrielle sur 13 régions françaises, construit sur les données Banque de France et Altares.'
                      : 'Composite index tracking industrial failure pressure across 13 French regions, built on Banque de France and Altares data.'}
                  </p>
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#e89565]">13</span>
                  <span className="text-xs text-[#718096]">{L === 'fr' ? 'régions cartographiées' : 'regions mapped'}</span>
                </div>
              </div>

              {/* Wide bottom card — Ongoing Advisory */}
              <div className="md:col-span-2 bg-[#f0f7ff] rounded-2xl p-7 border border-[#207bff]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#207bff]/10 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#207bff]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a1a]">{L === 'fr' ? 'Accompagnement Continu' : 'Ongoing Advisory'}</h3>
                  </div>
                  <p className="text-sm text-[#4a5568] leading-relaxed max-w-lg">
                    {L === 'fr'
                      ? 'Suivi mensuel de votre performance digitale : tracking KPI, mises à jour contenu, ajustements stratégiques basés sur les données de marché. Rapport mensuel + session de pilotage.'
                      : 'Monthly monitoring of your digital performance: KPI tracking, content updates, strategic adjustments based on market data. Monthly report + steering session.'}
                  </p>
                </div>
                <Link to="/expertise/accompagnement" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#207bff] text-white text-sm font-semibold rounded-lg hover:bg-[#1a62cc] transition-all flex-shrink-0">
                  {L === 'fr' ? 'Découvrir' : 'Explore'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {L === 'fr' ? 'Envie d\'en savoir plus ?' : 'Want to know more?'}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            {L === 'fr' ? 'Rencontrez l\'équipe ou discutons de votre projet.' : 'Meet the team or let\'s discuss your project.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors">
              {L === 'fr' ? 'Rencontrer l\'équipe' : 'Meet the team'} <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              {L === 'fr' ? 'Nous contacter' : 'Contact us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
