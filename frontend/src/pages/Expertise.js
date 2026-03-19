import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Search, Target, Zap, Shield, CheckCircle, ChevronRight, Eye, BarChart3, Route } from 'lucide-react';

const services = [
  {
    id: 'audit-drs',
    icon: Search,
    titleEn: 'Decision Readiness Audit',
    titleFr: 'Audit de Maturité Décisionnelle (DRS)',
    shortEn: 'Full DRS scoring against 30+ OEMs.',
    shortFr: 'Scoring DRS complet face à 30+ OEM.',
    descEn: 'We apply the same methodology we used to benchmark 30 OEMs in the machine-tool sector: DMG MORI, Mazak, Makino, Hermle, AMADA, and others. Your website is scored on a DRS scale from 1 to 4, with a detailed gap analysis and an actionable improvement plan prioritized by impact.',
    descFr: 'Nous appliquons la même méthodologie utilisée pour benchmarker 30 OEM du secteur machine-outil : DMG MORI, Mazak, Makino, Hermle, AMADA. Votre site est noté sur une échelle DRS de 1 à 4, avec une analyse détaillée des écarts et un plan d\'amélioration priorisé par impact.',
    features: [
      { en: 'DRS scoring on 4 decision axes', fr: 'Scoring DRS sur 4 axes décisionnels' },
      { en: 'Benchmark vs 30+ OEM competitors', fr: 'Benchmark vs 30+ OEM concurrents' },
      { en: 'Gap analysis with prioritized actions', fr: 'Analyse des écarts avec actions priorisées' },
      { en: 'Deliverable: written report + presentation', fr: 'Livrable : rapport écrit + présentation' },
    ],
    deliverableEn: 'Scored report + action plan + presentation',
    deliverableFr: 'Rapport chiffré + plan d\'action + présentation',
    durationEn: '2-3 weeks', durationFr: '2-3 semaines',
    stat: { value: '30+', labelEn: 'OEMs in benchmark', labelFr: 'OEM dans le benchmark' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'site-decisionnel',
    icon: Target,
    titleEn: 'Decision-Grade Website',
    titleFr: 'Site Web Décisionnel',
    shortEn: 'Full website as a decision support tool.',
    shortFr: 'Refonte complète comme outil d\'aide à la décision.',
    descEn: 'We rebuild your website from the ground up using our decision-grade framework: structured entry points, visible operational processes, anonymized proof blocks, and contextual contact gates.',
    descFr: 'Nous reconstruisons votre site avec notre framework décisionnel : points d\'entrée structurés, processus visibles, blocs de preuve anonymisés et portes de contact contextuelles.',
    features: [
      { en: 'Decision scenario pages for each buyer type', fr: 'Pages scénarios pour chaque profil d\'acheteur' },
      { en: 'Process visibility with SLAs and commitments', fr: 'Visibilité processus avec SLA et engagements' },
      { en: 'Proof blocks with anonymized metrics', fr: 'Blocs de preuve avec métriques anonymisées' },
      { en: 'Contextual entry gates (discreet, urgent, exploratory)', fr: 'Portes d\'entrée contextuelles' },
    ],
    deliverableEn: 'Full website + CMS + analytics setup',
    deliverableFr: 'Site complet + CMS + analytics',
    durationEn: '8-12 weeks', durationFr: '8-12 semaines',
    stat: { value: '4', labelEn: 'decision axes covered', labelFr: 'axes décisionnels couverts' },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'strategie-acquisition',
    icon: Zap,
    titleEn: 'Acquisition Strategy',
    titleFr: 'Stratégie d\'Acquisition Digitale',
    shortEn: 'SEO & content for industrial buyers.',
    shortFr: 'SEO et contenu pour décideurs industriels.',
    descEn: 'We design the visibility layer that brings qualified decision-makers to your website: intent-based keyword clusters, content strategy aligned with decision scenarios, technical SEO, and a 6-month roadmap.',
    descFr: 'Nous concevons la couche de visibilité : clusters de mots-clés basés sur l\'intention, stratégie de contenu alignée sur les scénarios, SEO technique et roadmap 6 mois.',
    features: [
      { en: 'Intent-based keyword research', fr: 'Recherche mots-clés basée sur l\'intention' },
      { en: 'Content cluster strategy', fr: 'Stratégie de clusters de contenu' },
      { en: 'Technical SEO audit', fr: 'Audit SEO technique' },
      { en: '6-month roadmap with KPIs', fr: 'Roadmap 6 mois avec KPIs' },
    ],
    deliverableEn: 'Strategy doc + 6-month roadmap + KPI dashboard',
    deliverableFr: 'Document stratégique + roadmap 6 mois + dashboard KPI',
    durationEn: '4-6 weeks', durationFr: '4-6 semaines',
    stat: { value: '6', labelEn: 'month roadmap', labelFr: 'mois de roadmap' },
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'accompagnement',
    icon: Shield,
    titleEn: 'Ongoing Advisory',
    titleFr: 'Accompagnement Continu',
    shortEn: 'Monthly KPI tracking & strategic steering.',
    shortFr: 'Suivi KPI mensuel et pilotage stratégique.',
    descEn: 'Monthly performance monitoring with KPI tracking, content updates, conversion funnel analysis, and strategic adjustments based on market pressure data.',
    descFr: 'Suivi mensuel de la performance : tracking KPI, mises à jour contenu, analyse funnel de conversion et ajustements stratégiques basés sur les données marché.',
    features: [
      { en: 'Monthly KPI report with trend analysis', fr: 'Rapport KPI mensuel avec analyse de tendances' },
      { en: 'Content refresh based on market data', fr: 'Rafraîchissement contenu basé sur données marché' },
      { en: 'Conversion funnel optimization', fr: 'Optimisation du funnel de conversion' },
      { en: 'Quarterly strategy review', fr: 'Revue stratégique trimestrielle' },
    ],
    deliverableEn: 'Monthly report + steering session',
    deliverableFr: 'Rapport mensuel + session de pilotage',
    durationEn: 'Ongoing (min. 6 months)', durationFr: 'Continu (min. 6 mois)',
    stat: { value: '12', labelEn: 'KPIs tracked', labelFr: 'KPIs suivis' },
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=600',
  },
];

export default function Expertise() {
  const { i18n } = useTranslation();
  const L = i18n.language;
  const { serviceId } = useParams();
  const selected = serviceId ? services.find(s => s.id === serviceId) : null;
  if (selected) return <ServiceDetail service={selected} lang={L} />;

  return (
    <div className="animate-fade-in" data-testid="expertise-page">

      {/* ════════════════════════════════════════════
          HERO — Style About (image + two-col)
          ════════════════════════════════════════════ */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&q=80&w=1400"
              alt={L === 'fr' ? 'Environnement industriel' : 'Industrial environment'}
              className="w-full h-[240px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#207bff]">
                <span className="w-2 h-2 bg-[#207bff] rounded-full" />
                {L === 'fr' ? '4 Services' : '4 Services'}
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? (
                <>Audit, conception et <span className="text-[#207bff]">accompagnement</span>{' '}<span className="text-[#718096]">digital industriel.</span></>
              ) : (
                <>Industrial digital <span className="text-[#207bff]">audit, design</span>{' '}<span className="text-[#718096]">and advisory.</span></>
              )}
            </h1>
            <div className="space-y-5">
              <p className="text-[#4a5568] leading-relaxed text-lg">
                {L === 'fr'
                  ? 'Chaque mission a un livrable concret, un calendrier défini et des métriques de succès mesurables. Pas de promesses vagues — des résultats documentés.'
                  : 'Every engagement has a concrete deliverable, a defined timeline, and measurable success metrics. No vague promises — documented results.'}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#207bff] text-white rounded-lg text-sm font-semibold hover:bg-[#1a62cc] transition-all group">
                {L === 'fr' ? 'Demander un audit' : 'Request an audit'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES — Animated card stack style
          ════════════════════════════════════════════ */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ServiceCardStack services={services} lang={L} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          APPROACH — Bento asymmetric (like indices)
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? 'Notre approche' : 'Our approach'}
            </h2>
            <p className="text-[#4a5568] text-lg self-end">
              {L === 'fr'
                ? 'Chaque intervention suit ce cadre. Nous clarifions le contexte, rassurons avec des données, puis déclenchons l\'action.'
                : 'Every engagement follows this framework. We clarify the context, reassure with data, then trigger action.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* CLARIFY — featured card, spans 2 rows */}
            <div className="md:row-span-2 bg-[#207bff] rounded-2xl p-8 text-white flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="text-5xl font-bold mb-2 tracking-tight">01</div>
                <h3 className="text-2xl font-bold mb-3">{L === 'fr' ? 'Clarifier' : 'Clarify'}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {L === 'fr'
                    ? 'Cartographier la portée complète du contexte décisionnel de votre prospect. Identifier les lacunes dans les scénarios, les processus, les preuves et les points d\'entrée. Comprendre où votre site perd des décideurs.'
                    : 'Map the full scope of your prospect\'s decision context. Identify gaps in scenarios, processes, proof, and entry points. Understand where your site is losing decision-makers.'}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-xs text-white/60">{L === 'fr' ? 'Axes analysés' : 'Axes analyzed'}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-xs text-white/60">{L === 'fr' ? 'OEM de référence' : 'Benchmark OEMs'}</div>
                </div>
              </div>
            </div>

            {/* REASSURE */}
            <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#4ea5ff]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4ea5ff]/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-[#4ea5ff]" />
                  </div>
                  <div className="text-2xl font-bold text-[#4ea5ff]">02</div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'Rassurer' : 'Reassure'}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Fournir une confiance basée sur les données. Blocs de preuve anonymisés, métriques vérifiables, processus visibles avec délais et engagements. Chaque élément réduit l\'incertitude de votre prospect.'
                    : 'Provide data-backed confidence. Anonymized proof blocks, verifiable metrics, visible processes with timelines and commitments. Every element reduces your prospect\'s uncertainty.'}
                </p>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#4ea5ff]">URI</span>
                <span className="text-xs text-[#718096]">{L === 'fr' ? 'Indice de réduction d\'incertitude' : 'Uncertainty Reduction Index'}</span>
              </div>
            </div>

            {/* TRIGGER */}
            <div className="bg-[#f5f7fa] rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#e89565]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#e89565]/10 flex items-center justify-center">
                    <Route className="w-5 h-5 text-[#e89565]" />
                  </div>
                  <div className="text-2xl font-bold text-[#e89565]">03</div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'Déclencher' : 'Trigger'}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {L === 'fr'
                    ? 'Permettre une action décisive avec des parcours structurés. Portes de décision contextuelles (discret, urgent, exploratoire), feuilles de route claires, et mécanismes d\'engagement adaptés au niveau de maturité.'
                    : 'Enable decisive action with structured pathways. Contextual decision gates (discreet, urgent, exploratory), clear roadmaps, and engagement mechanisms adapted to maturity level.'}
                </p>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#e89565]">4</span>
                <span className="text-xs text-[#718096]">{L === 'fr' ? 'portes de décision' : 'decision gates'}</span>
              </div>
            </div>

            {/* Wide bottom — summary */}
            <div className="md:col-span-2 bg-[#f0f7ff] rounded-2xl p-7 border border-[#207bff]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{L === 'fr' ? 'Clarifier. Rassurer. Déclencher.' : 'Clarify. Reassure. Trigger.'}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed max-w-lg">
                  {L === 'fr'
                    ? 'Ce framework s\'applique à chaque page, chaque parcours, chaque point de contact de votre site. Le résultat : un site qui convertit les visiteurs en décisions.'
                    : 'This framework applies to every page, every pathway, every touchpoint on your site. The result: a site that converts visitors into decisions.'}
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#207bff] text-white text-sm font-semibold rounded-lg hover:bg-[#1a62cc] transition-all flex-shrink-0">
                {L === 'fr' ? 'Discuter de votre projet' : 'Discuss your project'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ════════════════════════════════════════════
   SERVICE CARD STACK — Browse through services
   ════════════════════════════════════════════ */
function ServiceCardStack({ services, lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const Icon = active.icon;

  return (
    <div>
      {/* Tab pills */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {services.map((s, i) => {
          const I = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setActiveIndex(i)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeIndex === i ? 'bg-[#207bff] text-white shadow-lg shadow-[#207bff]/20' : 'bg-white border border-[#e2e8f0] text-[#4a5568] hover:border-[#207bff]/30'}`}
            >
              <I className="w-4 h-4" />
              {lang === 'fr' ? s.titleFr.split('(')[0].trim() : s.titleEn}
            </button>
          );
        })}
      </div>

      {/* Active card */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-[260px] md:h-auto overflow-hidden">
            <img
              src={active.image}
              alt={lang === 'fr' ? active.titleFr : active.titleEn}
              className="w-full h-full object-cover"
              key={active.id}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:bg-gradient-to-l md:from-white/5 md:to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#207bff]">
                <Icon className="w-3 h-3" />
                {lang === 'fr' ? active.durationFr : active.durationEn}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? active.titleFr : active.titleEn}</h3>
              <p className="text-[#4a5568] leading-relaxed mb-6">{lang === 'fr' ? active.descFr : active.descEn}</p>

              <div className="space-y-2 mb-6">
                {active.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#4a5568]">{lang === 'fr' ? f.fr : f.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-[#e2e8f0]">
              <div>
                <div className="text-xs text-[#718096] mb-1">{lang === 'fr' ? 'Livrable' : 'Deliverable'}</div>
                <div className="text-sm font-medium text-[#1a1a1a]">{lang === 'fr' ? active.deliverableFr : active.deliverableEn}</div>
              </div>
              <Link
                to={`/expertise/${active.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#207bff] text-white text-sm font-semibold rounded-lg hover:bg-[#1a62cc] transition-all"
              >
                {lang === 'fr' ? 'Détails' : 'Details'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SERVICE DETAIL PAGE
   ════════════════════════════════════════════ */
function ServiceDetail({ service, lang }) {
  const Icon = service.icon;
  return (
    <div className="animate-fade-in">
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/expertise" className="inline-flex items-center gap-2 text-[#207bff] font-medium mb-8 hover:gap-3 transition-all"><ArrowRight size={16} className="rotate-180" />{lang === 'fr' ? 'Retour aux services' : 'Back to services'}</Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#f0f7ff] flex items-center justify-center mb-6"><Icon size={28} className="text-[#207bff]" /></div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>{lang === 'fr' ? service.titleFr : service.titleEn}</h1>
              <p className="text-xl text-[#4a5568] leading-relaxed mb-6">{lang === 'fr' ? service.descFr : service.descEn}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#f0f7ff] text-[#207bff] px-3 py-1.5 rounded-full font-medium text-sm">{lang === 'fr' ? service.deliverableFr : service.deliverableEn}</span>
                <span className="bg-[#f0f7ff] text-[#207bff] px-3 py-1.5 rounded-full font-medium text-sm">{lang === 'fr' ? service.durationFr : service.durationEn}</span>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#207bff] text-white font-semibold rounded-lg hover:bg-[#1a62cc] transition-all">{lang === 'fr' ? 'Discuter de votre projet' : 'Discuss your project'}<ArrowRight size={18} /></Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src={service.image} alt="" className="w-full h-[300px] md:h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#207bff]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-[#207bff]">{service.stat.value}</div>
                <div className="text-sm text-[#4a5568]">{lang === 'fr' ? service.stat.labelFr : service.stat.labelEn}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">{lang === 'fr' ? 'Ce que nous délivrons' : 'What we deliver'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border-l-4 border-[#207bff] shadow-sm hover:translate-x-2 transition-transform">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} className="text-[#207bff]" />
                  <span className="text-lg font-medium text-[#1a1a1a]">{lang === 'fr' ? f.fr : f.en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#4ea5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{lang === 'fr' ? 'Prêt à commencer ?' : 'Ready to start?'}</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors">{lang === 'fr' ? 'Planifier une discussion' : 'Schedule a discussion'}<ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
