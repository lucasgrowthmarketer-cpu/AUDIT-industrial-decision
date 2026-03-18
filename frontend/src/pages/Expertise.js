import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Search, Target, Zap, Shield, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'audit-drs',
    icon: Search,
    titleEn: 'Decision Readiness Audit',
    titleFr: 'Audit de Maturité Décisionnelle (DRS)',
    descEn: 'A structured audit of your website measured against 30+ industrial OEMs. We score your site on 4 axes: decision scenarios, process visibility, proof blocks, and entry points.',
    descFr: 'Un audit structuré de votre site mesuré face à 30+ OEM industriels. Nous évaluons votre site sur 4 axes : scénarios de décision, visibilité processus, blocs de preuve et points d\'entrée.',
    longDescEn: 'We apply the same methodology we used to benchmark 30 OEMs in the machine-tool sector: DMG MORI, Mazak, Makino, Hermle, AMADA, and others. Your website is scored on a DRS scale from 1 to 4, with a detailed gap analysis and an actionable improvement plan prioritized by impact.',
    longDescFr: 'Nous appliquons la même méthodologie utilisée pour benchmarker 30 OEM du secteur machine-outil : DMG MORI, Mazak, Makino, Hermle, AMADA, et d\'autres. Votre site est noté sur une échelle DRS de 1 à 4, avec une analyse détaillée des écarts et un plan d\'amélioration priorisé par impact.',
    features: [
      { en: 'DRS scoring on 4 decision axes', fr: 'Scoring DRS sur 4 axes décisionnels' },
      { en: 'Benchmark vs 30+ OEM competitors', fr: 'Benchmark vs 30+ OEM concurrents' },
      { en: 'Gap analysis with prioritized actions', fr: 'Analyse des écarts avec actions priorisées' },
      { en: 'Deliverable: written report + presentation', fr: 'Livrable : rapport écrit + présentation' },
    ],
    deliverableEn: 'Scored report + action plan + presentation',
    deliverableFr: 'Rapport chiffré + plan d\'action + présentation',
    durationEn: '2-3 weeks',
    durationFr: '2-3 semaines',
    stat: { value: '30+', labelEn: 'OEMs in our benchmark', labelFr: 'OEM dans notre benchmark' }
  },
  {
    id: 'site-decisionnel',
    icon: Target,
    titleEn: 'Decision-Grade Website',
    titleFr: 'Site Web Décisionnel',
    descEn: 'Full website redesign built as a decision support system — not a marketing brochure.',
    descFr: 'Refonte complète de votre site construit comme un système d\'aide à la décision — pas une brochure marketing.',
    longDescEn: 'We rebuild your website from the ground up using our decision-grade framework: structured entry points adapted to your buyers\' situations, visible operational processes with timelines and commitments, anonymized proof blocks, and contextual contact gates. The result is a site that reduces uncertainty and accelerates decisions.',
    longDescFr: 'Nous reconstruisons votre site avec notre framework décisionnel : points d\'entrée structurés adaptés aux situations de vos acheteurs, processus opérationnels visibles avec délais et engagements, blocs de preuve anonymisés, et portes de contact contextuelles. Résultat : un site qui réduit l\'incertitude et accélère les décisions.',
    features: [
      { en: 'Decision scenario pages for each buyer type', fr: 'Pages scénarios pour chaque profil d\'acheteur' },
      { en: 'Process visibility with SLAs and commitments', fr: 'Visibilité processus avec SLA et engagements' },
      { en: 'Proof blocks with anonymized metrics', fr: 'Blocs de preuve avec métriques anonymisées' },
      { en: 'Contextual entry gates (discreet, urgent, exploratory)', fr: 'Portes d\'entrée contextuelles (discret, urgent, exploratoire)' },
    ],
    deliverableEn: 'Full website + CMS + analytics setup',
    deliverableFr: 'Site complet + CMS + analytics',
    durationEn: '8-12 weeks',
    durationFr: '8-12 semaines',
    stat: { value: '4', labelEn: 'decision axes covered', labelFr: 'axes décisionnels couverts' }
  },
  {
    id: 'strategie-acquisition',
    icon: Zap,
    titleEn: 'Acquisition Strategy',
    titleFr: 'Stratégie d\'Acquisition Digitale',
    descEn: 'SEO, content clusters, and visibility layer design tailored to industrial decision-makers.',
    descFr: 'SEO, clusters de contenu et couche de visibilité pour décideurs industriels.',
    longDescEn: 'We design the visibility layer that brings qualified decision-makers to your website: intent-based keyword clusters for your sector, content strategy aligned with decision scenarios, technical SEO, and a 6-month roadmap with measurable milestones. Everything is built on our market pressure data.',
    longDescFr: 'Nous concevons la couche de visibilité qui amène des décideurs qualifiés sur votre site : clusters de mots-clés basés sur l\'intention pour votre secteur, stratégie de contenu alignée sur les scénarios de décision, SEO technique, et une roadmap 6 mois avec jalons mesurables.',
    features: [
      { en: 'Intent-based keyword research for your sector', fr: 'Recherche de mots-clés basée sur l\'intention' },
      { en: 'Content cluster strategy aligned with decision scenarios', fr: 'Stratégie de clusters de contenu' },
      { en: 'Technical SEO audit and implementation', fr: 'Audit SEO technique et implémentation' },
      { en: '6-month roadmap with KPIs', fr: 'Roadmap 6 mois avec KPIs' },
    ],
    deliverableEn: 'Strategy document + 6-month roadmap + KPI dashboard',
    deliverableFr: 'Document stratégique + roadmap 6 mois + dashboard KPI',
    durationEn: '4-6 weeks',
    durationFr: '4-6 semaines',
    stat: { value: '6', labelEn: 'month actionable roadmap', labelFr: 'mois de roadmap actionable' }
  },
  {
    id: 'accompagnement',
    icon: Shield,
    titleEn: 'Ongoing Advisory',
    titleFr: 'Accompagnement Continu',
    descEn: 'Monthly performance monitoring, content updates, and strategic adjustments.',
    descFr: 'Suivi mensuel de la performance, mises à jour contenu et ajustements stratégiques.',
    longDescEn: 'We monitor your digital performance monthly with KPI tracking, content updates, conversion funnel analysis, and strategic adjustments based on market pressure data. You receive a monthly report and a steering session with our team.',
    longDescFr: 'Nous suivons votre performance digitale mensuellement : tracking KPI, mises à jour contenu, analyse du funnel de conversion, et ajustements stratégiques basés sur les données de pression marché. Vous recevez un rapport mensuel et une session de pilotage.',
    features: [
      { en: 'Monthly KPI report with trend analysis', fr: 'Rapport KPI mensuel avec analyse de tendances' },
      { en: 'Content refresh based on market data', fr: 'Rafraîchissement contenu basé sur données marché' },
      { en: 'Conversion funnel optimization', fr: 'Optimisation du funnel de conversion' },
      { en: 'Quarterly strategy review', fr: 'Revue stratégique trimestrielle' },
    ],
    deliverableEn: 'Monthly report + steering session',
    deliverableFr: 'Rapport mensuel + session de pilotage',
    durationEn: 'Ongoing (min. 6 months)',
    durationFr: 'Continu (min. 6 mois)',
    stat: { value: '12', labelEn: 'KPIs tracked monthly', labelFr: 'KPIs suivis mensuellement' }
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
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">{L==='fr'?'Nos Services':'Our Services'}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">{L==='fr'?'Audit, conception et accompagnement digital industriel':'Industrial digital audit, design, and advisory'}</h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">{L==='fr'?'Chaque mission a un livrable concret, un calendrier défini et des métriques de succès mesurables.':'Every engagement has a concrete deliverable, a defined timeline, and measurable success metrics.'}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map(s => {
              const I = s.icon;
              return (
                <Link key={s.id} to={`/expertise/${s.id}`} className="block bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all group" data-testid={`service-${s.id}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="expertise-icon"><I size={24} className="text-[#207bff]"/></div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#207bff] transition-colors">{L==='fr'?s.titleFr:s.titleEn}</h3>
                      </div>
                      <p className="text-[#4a5568] leading-relaxed mb-4">{L==='fr'?s.descFr:s.descEn}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-[#718096]">
                        <span className="flex items-center gap-1"><CheckCircle size={14} className="text-[#10b981]"/>{L==='fr'?s.deliverableFr:s.deliverableEn}</span>
                        <span>{L==='fr'?s.durationFr:s.durationEn}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-4 flex justify-end">
                      <div className="bg-[#f0f7ff] rounded-xl p-6 text-center min-w-[140px]">
                        <div className="text-3xl font-bold text-[#207bff]">{s.stat.value}</div>
                        <div className="text-sm text-[#4a5568]">{L==='fr'?s.stat.labelFr:s.stat.labelEn}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">{L==='fr'?'Notre approche : Clarifier. Rassurer. Déclencher.':'Our approach: Clarify. Reassure. Trigger.'}</h2>
          <p className="text-[#4a5568] mb-12 max-w-2xl mx-auto">{L==='fr'?'Chaque intervention suit ce cadre. Nous clarifions le contexte décisionnel, nous rassurons avec des données et des preuves, puis nous déclenchons l\'action avec des parcours structurés.':'Every engagement follows this framework. We clarify the decision context, reassure with data and proof, then trigger action with structured pathways.'}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{n:1,en:'Clarify',fr:'Clarifier',dEn:'Map the full decision context and identify gaps',dFr:'Cartographier le contexte décisionnel et identifier les lacunes'},{n:2,en:'Reassure',fr:'Rassurer',dEn:'Provide data-backed confidence and proof',dFr:'Fournir confiance basée sur données et preuves'},{n:3,en:'Trigger',fr:'Déclencher',dEn:'Enable action with clear structured pathways',dFr:'Déclencher l\'action avec des parcours structurés'}].map(s=>(<div key={s.n} className="text-center"><div className="w-16 h-16 mx-auto mb-6 bg-[#207bff] rounded-full flex items-center justify-center"><span className="text-2xl font-bold text-white">{s.n}</span></div><h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{L==='fr'?s.fr:s.en}</h3><p className="text-[#4a5568]">{L==='fr'?s.dFr:s.dEn}</p></div>))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceDetail({ service, lang }) {
  const I = service.icon;
  return (
    <div className="animate-fade-in">
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/expertise" className="inline-flex items-center gap-2 text-[#207bff] font-medium mb-8 hover:gap-3 transition-all"><ArrowRight size={16} className="rotate-180"/>{lang==='fr'?'Retour aux services':'Back to services'}</Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="expertise-icon mb-6"><I size={32} className="text-[#207bff]"/></div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">{lang==='fr'?service.titleFr:service.titleEn}</h1>
              <p className="text-xl text-[#4a5568] leading-relaxed mb-6">{lang==='fr'?service.longDescFr:service.longDescEn}</p>
              <div className="flex flex-wrap gap-4 text-sm text-[#718096] mb-8">
                <span className="bg-[#f0f7ff] text-[#207bff] px-3 py-1 rounded-full font-medium">{lang==='fr'?service.deliverableFr:service.deliverableEn}</span>
                <span className="bg-[#f0f7ff] text-[#207bff] px-3 py-1 rounded-full font-medium">{lang==='fr'?service.durationFr:service.durationEn}</span>
              </div>
              <Link to="/contact" className="btn-primary">{lang==='fr'?'Discuter de votre projet':'Discuss your project'}<ArrowRight size={18}/></Link>
            </div>
            <div className="bg-[#207bff] rounded-2xl p-8 text-white text-center">
              <div className="text-6xl font-bold mb-2">{service.stat.value}</div>
              <div className="text-xl opacity-80">{lang==='fr'?service.stat.labelFr:service.stat.labelEn}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">{lang==='fr'?'Ce que nous délivrons':'What we deliver'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((f,i)=>(<div key={i} className="card-feature"><div className="flex items-center gap-4"><CheckCircle size={24} className="text-[#207bff]"/><span className="text-lg font-medium text-[#1a1a1a]">{lang==='fr'?f.fr:f.en}</span></div></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#4ea5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{lang==='fr'?'Prêt à commencer ?':'Ready to start?'}</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors">{lang==='fr'?'Planifier une discussion':'Schedule a discussion'}<ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  );
}
