import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Globe, Users, Award, ArrowRight, Search, BarChart3, Shield } from 'lucide-react';

const values = [
  { icon: Target, titleEn: 'Rigor', titleFr: 'Rigueur', descEn: 'Data-verified analyses. Transparent methodologies. Measurable results. No vanity metrics.', descFr: 'Analyses vérifiées par les données. Méthodologies transparentes. Résultats mesurables. Pas de vanity metrics.' },
  { icon: Globe, titleEn: 'Clarity', titleFr: 'Clarté', descEn: 'Direct communication, jargon-free, action-oriented. We say what we do and do what we say.', descFr: 'Communication directe, sans jargon, orientée action. On dit ce qu\'on fait et on fait ce qu\'on dit.' },
  { icon: Users, titleEn: 'Specialization', titleFr: 'Spécialisation', descEn: 'We don\'t do everything for everyone. We do digital strategy for industrial actors in France. Period.', descFr: 'Nous ne faisons pas tout pour tout le monde. Nous faisons la stratégie digitale pour l\'industrie en France. Point.' },
  { icon: Award, titleEn: 'Proof', titleFr: 'Preuve', descEn: 'Every recommendation is backed by our benchmark of 30 OEMs and 51,000+ failure analyses.', descFr: 'Chaque recommandation s\'appuie sur notre benchmark de 30 OEM et 51 000+ analyses de défaillances.' },
];

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
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=1400"
              alt={L === 'fr' ? 'Usinage industriel de précision' : 'Precision industrial machining'}
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

          {/* Two-column intro */}
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
              <Link
                to="/expertise"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#f5f7fa] border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#1a1a1a] hover:border-[#207bff]/30 hover:bg-[#f0f7ff] transition-all group"
              >
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
      <section className="py-12 bg-[#f5f7fa]">
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
          ABOUT SECTION — Asymmetric card grid
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section header */}
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? 'Ce que nous faisons' : 'What we do'}
            </h2>
            <p className="text-[#4a5568] text-lg leading-relaxed">
              {L === 'fr'
                ? 'Nous auditons et transformons les sites web d\'acteurs de la machine-outil, de la restructuration industrielle et des services industriels. Notre objectif : que chaque visite d\'un décideur rapproche d\'une décision.'
                : 'We audit and transform websites of machine-tool actors, industrial restructuring firms, and service providers. Our goal: every visit from a decision-maker brings them closer to a decision.'}
            </p>
          </div>

          {/* Asymmetric grid — 1 big left + 2 stacked right */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* LEFT — Big card */}
            <div className="md:flex-1 relative overflow-hidden rounded-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt={L === 'fr' ? 'Fabrication industrielle' : 'Industrial manufacturing'}
                className="w-full h-[300px] sm:h-[360px] md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#207bff] rounded-full text-xs font-semibold text-white mb-3">
                  <Search className="w-3 h-3" />
                  {L === 'fr' ? 'Méthodologie DRS' : 'DRS Methodology'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {L === 'fr' ? 'Audit de Maturité Décisionnelle' : 'Decision Readiness Audit'}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                  {L === 'fr'
                    ? 'Nous évaluons votre site sur 4 axes — scénarios, processus, preuves, points d\'entrée — face à 30 OEM de référence.'
                    : 'We evaluate your site across 4 axes — scenarios, process, proof, entry points — against 30 benchmark OEMs.'}
                </p>
              </div>
            </div>

            {/* RIGHT — Two stacked cards */}
            <div className="flex flex-col gap-6 md:flex-1">
              {/* Card 1 — Dark */}
              <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] text-white group">
                <div className="relative h-48 md:h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&q=80&w=600"
                    alt={L === 'fr' ? 'Production industrielle' : 'Industrial production'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {L === 'fr' ? 'Sites Web Décisionnels' : 'Decision-Grade Websites'}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {L === 'fr'
                      ? 'Nous construisons des sites qui réduisent l\'incertitude : scénarios adaptés, processus visibles, preuves vérifiables, portes d\'entrée contextuelles.'
                      : 'We build sites that reduce uncertainty: adapted scenarios, visible processes, verifiable proof, contextual entry gates.'}
                  </p>
                  <Link
                    to="/expertise/site-decisionnel"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-[#1a1a1a] transition-all"
                  >
                    {L === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2 — Image overlay */}
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=600"
                  alt={L === 'fr' ? 'Chaîne automobile' : 'Automotive line'}
                  className="w-full h-[220px] md:h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {L === 'fr' ? 'Intelligence de Marché' : 'Market Intelligence'}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {L === 'fr'
                      ? '51 772 défaillances analysées sur 13 régions. Des données Banque de France et Altares pour guider vos décisions stratégiques.'
                      : '51,772 failures analyzed across 13 regions. Banque de France and Altares data to guide your strategic decisions.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          VALUES — 4 principle cards
          ════════════════════════════════════════════ */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? 'Nos principes' : 'Our principles'}
            </h2>
            <p className="text-[#4a5568] text-lg">
              {L === 'fr'
                ? 'Quatre convictions qui guident chaque mission, chaque recommandation, chaque livrable.'
                : 'Four convictions that guide every engagement, every recommendation, every deliverable.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#207bff]/20 hover:shadow-lg hover:shadow-[#207bff]/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 mb-5 bg-[#f0f7ff] rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-[#207bff]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? v.titleFr : v.titleEn}</h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed">{L === 'fr' ? v.descFr : v.descEn}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          METHODOLOGY — 3 proprietary indices
          ════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? 'Indices propriétaires' : 'Proprietary indices'}
            </h2>
            <p className="text-[#4a5568] text-lg">
              {L === 'fr'
                ? 'Trois indices développés en interne pour mesurer, comparer et améliorer la performance décisionnelle.'
                : 'Three internally-developed indices to measure, compare, and improve decision performance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'DRS', full: 'Decision Readiness Score', fullFr: 'Score de Maturité Décisionnelle', dEn: 'Measures how well a website supports industrial decision-making, scored 1-4 across scenarios, process, proof, and entry points.', dFr: 'Mesure la capacité d\'un site à soutenir la décision industrielle, noté 1-4 sur scénarios, processus, preuve et points d\'entrée.', icon: Search, color: '#207bff' },
              { name: 'URI', full: 'Uncertainty Reduction Index', fullFr: 'Indice de Réduction d\'Incertitude', dEn: 'Quantifies how much a website reduces buyer uncertainty at each stage of the decision journey.', dFr: 'Quantifie la réduction d\'incertitude pour l\'acheteur à chaque étape du parcours de décision.', icon: BarChart3, color: '#4ea5ff' },
              { name: 'IPI', full: 'Industrial Pressure Index', fullFr: 'Indice de Pression Industrielle', dEn: 'Composite index tracking industrial failure pressure across 13 French regions using Banque de France and Altares data.', dFr: 'Indice composite suivant la pression de défaillance industrielle sur 13 régions via Banque de France et Altares.', icon: Shield, color: '#e89565' },
            ].map((idx, i) => {
              const Icon = idx.icon;
              return (
                <div key={i} className="bg-[#f5f7fa] rounded-2xl p-8 border border-[#e2e8f0] hover:border-[#207bff]/20 transition-all group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${idx.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: idx.color }} />
                    </div>
                    <div className="text-2xl font-bold" style={{ color: idx.color }}>{idx.name}</div>
                  </div>
                  <div className="text-sm text-[#718096] mb-3 font-medium">{L === 'fr' ? idx.fullFr : idx.full}</div>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{L === 'fr' ? idx.dFr : idx.dEn}</p>
                </div>
              );
            })}
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
            {L === 'fr'
              ? 'Rencontrez l\'équipe ou discutons de votre projet.'
              : 'Meet the team or let\'s discuss your project.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors">
              {L === 'fr' ? 'Rencontrer l\'équipe' : 'Meet the team'}
              <ArrowRight size={16} />
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
