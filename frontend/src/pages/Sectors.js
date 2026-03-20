import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Factory, Cog, Wrench, CheckCircle, ChevronRight, Search, Target, Zap, Shield, TrendingUp, BarChart3, Users } from 'lucide-react';

/* ─── SECTOR DATA ─── */
const sectors = [
  {
    id: 'machine-tool',
    icon: Cog,
    nameEn: 'Machine-Tool OEMs & Integrators',
    nameFr: 'OEM & Intégrateurs Machines-Outils',
    shortEn: 'Decision-grade websites for industrial equipment manufacturers.',
    shortFr: 'Sites décisionnels pour fabricants d\'équipements industriels.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=1400',
    descEn: 'Your buyers are technical decision-makers comparing DMG MORI, Mazak, Hermle — and your site needs to compete at their level. We help OEMs and integrators build websites that reduce decision uncertainty.',
    descFr: 'Vos acheteurs sont des décideurs techniques qui comparent DMG MORI, Mazak, Hermle — et votre site doit rivaliser à ce niveau. Nous aidons les OEM et intégrateurs à réduire l\'incertitude décisionnelle.',
    challenges: [
      { en: 'Technical buyers comparing 5+ suppliers before contact', fr: 'Acheteurs techniques comparant 5+ fournisseurs avant contact' },
      { en: 'Long decision cycles requiring proof at every stage', fr: 'Cycles de décision longs nécessitant des preuves à chaque étape' },
      { en: 'Need for confidential evaluation options', fr: 'Besoin d\'options d\'évaluation confidentielles' },
      { en: 'Complex product ranges that overwhelm without guidance', fr: 'Gammes produit complexes qui submergent sans guidage' },
    ],
    kpis: [
      { value: '30+', labelEn: 'OEMs benchmarked', labelFr: 'OEM benchmarkés' },
      { value: 'DRS', labelEn: 'Scoring methodology', labelFr: 'Méthodologie de scoring' },
      { value: '5', labelEn: 'Decision scenarios', labelFr: 'Scénarios de décision' },
      { value: '4', labelEn: 'Entry gates', labelFr: 'Portes d\'entrée' },
    ],
    solutions: [
      { icon: Search, en: 'DRS Audit benchmarked against your direct OEM competitors', fr: 'Audit DRS benchmarké face à vos concurrents OEM directs' },
      { icon: Target, en: 'Decision scenario pages for each buyer situation', fr: 'Pages scénarios pour chaque situation d\'acheteur' },
      { icon: Shield, en: 'Contextual entry gates (discreet, exploratory, urgent)', fr: 'Portes d\'entrée contextuelles (discret, exploratoire, urgent)' },
      { icon: Zap, en: 'SEO strategy targeting industrial purchase intent', fr: 'Stratégie SEO ciblant l\'intention d\'achat industriel' },
    ],
  },
  {
    id: 'industrial-restructuring',
    icon: Factory,
    nameEn: 'Industrial Restructuring Actors',
    nameFr: 'Acteurs de la Restructuration Industrielle',
    shortEn: 'Digital entry points for crisis and transition management.',
    shortFr: 'Points d\'entrée digitaux pour la gestion de crise et transition.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1400',
    descEn: 'Site closures, asset liquidation, activity transfers — leaders managing these situations need discreet, process-visible, proof-backed digital entry points.',
    descFr: 'Fermetures de sites, liquidation d\'actifs, transferts d\'activité — les dirigeants ont besoin de points d\'entrée digitaux discrets, visibles en processus et étayés par des preuves.',
    challenges: [
      { en: 'Confidentiality incompatible with standard contact forms', fr: 'Confidentialité incompatible avec les formulaires standard' },
      { en: 'Urgent timelines requiring fast-track engagement', fr: 'Calendriers urgents nécessitant des parcours accélérés' },
      { en: 'Multiple stakeholders (creditors, management, courts)', fr: 'Parties prenantes multiples (créanciers, direction, tribunaux)' },
      { en: 'Need for verifiable proof and case references', fr: 'Besoin de preuves vérifiables et de références' },
    ],
    kpis: [
      { value: '51,772', labelEn: 'Failures tracked (2025)', labelFr: 'Défaillances suivies (2025)' },
      { value: '13', labelEn: 'Regions mapped', labelFr: 'Régions cartographiées' },
      { value: '+9.5%', labelEn: 'Annual increase', labelFr: 'Hausse annuelle' },
      { value: 'IPI', labelEn: 'Pressure Index', labelFr: 'Indice de pression' },
    ],
    solutions: [
      { icon: Shield, en: 'Discreet entry gates with confidentiality protocols', fr: 'Portes d\'entrée discrètes avec protocoles de confidentialité' },
      { icon: Target, en: 'Process visibility with timelines and commitments', fr: 'Visibilité processus avec délais et engagements' },
      { icon: BarChart3, en: 'Market pressure data to contextualize urgency', fr: 'Données pression marché pour contextualiser l\'urgence' },
      { icon: Users, en: 'Multi-stakeholder communication pathways', fr: 'Parcours de communication multi-parties prenantes' },
    ],
  },
  {
    id: 'industrial-services',
    icon: Wrench,
    nameEn: 'Industrial Service Providers',
    nameFr: 'Prestataires de Services Industriels',
    shortEn: 'Digital credibility for maintenance, tooling, and SAV.',
    shortFr: 'Crédibilité digitale pour maintenance, outillage et SAV.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1400',
    descEn: 'Maintenance, tooling, after-sales, integration — if your clients are industrial decision-makers, your website is your first proof of reliability.',
    descFr: 'Maintenance, outillage, SAV, intégration — si vos clients sont des décideurs industriels, votre site est votre première preuve de fiabilité.',
    challenges: [
      { en: 'Service differentiation in a trust-based market', fr: 'Différenciation dans un marché basé sur la confiance' },
      { en: 'After-sales visibility for long-term partnerships', fr: 'Visibilité SAV pour des partenariats long terme' },
      { en: 'Proving capacity without revealing client details', fr: 'Prouver la capacité sans révéler les clients' },
      { en: 'Converting emergency requests into engagements', fr: 'Convertir les demandes urgentes en engagements' },
    ],
    kpis: [
      { value: 'DRS', labelEn: 'Adapted for services', labelFr: 'Adapté aux services' },
      { value: 'URI', labelEn: 'Trust measurement', labelFr: 'Mesure de confiance' },
      { value: '24/7', labelEn: 'Emergency pathways', labelFr: 'Parcours urgence' },
      { value: '100%', labelEn: 'Proof-backed', labelFr: 'Étayé par des preuves' },
    ],
    solutions: [
      { icon: Search, en: 'Service-adapted DRS audit and benchmark', fr: 'Audit DRS adapté aux services et benchmark' },
      { icon: Zap, en: 'Emergency request conversion pathways', fr: 'Parcours de conversion pour demandes urgentes' },
      { icon: Target, en: 'Anonymized proof blocks for service reliability', fr: 'Blocs de preuve anonymisés pour la fiabilité service' },
      { icon: TrendingUp, en: 'After-sales visibility modules', fr: 'Modules de visibilité SAV' },
    ],
  },
];

/* ─── ACCORDION ITEM ─── */
const AccordionItem = ({ sector, isActive, onMouseEnter, lang }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out h-[420px] ${isActive ? 'w-[380px]' : 'w-[70px]'}`}
      onMouseEnter={onMouseEnter}
    >
      <img src={sector.image} alt={lang === 'fr' ? sector.nameFr : sector.nameEn} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#1a1a1a]/50" />

      {/* Active content */}
      {isActive && (
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#207bff] rounded-full text-xs font-semibold text-white mb-3 self-start">
            {React.createElement(sector.icon, { className: 'w-3 h-3' })}
            {lang === 'fr' ? sector.shortFr.split('.')[0] : sector.shortEn.split('.')[0]}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{lang === 'fr' ? sector.nameFr : sector.nameEn}</h3>
          <p className="text-white/70 text-sm mb-4 max-w-sm">{lang === 'fr' ? sector.shortFr : sector.shortEn}</p>
          <Link to={`/sectors/${sector.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1a1a1a] text-sm font-semibold rounded-lg hover:bg-[#f0f7ff] transition-all self-start">
            {lang === 'fr' ? 'Découvrir' : 'Explore'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Inactive — vertical text */}
      {!isActive && (
        <span className="absolute text-white text-base font-semibold whitespace-nowrap bottom-24 left-1/2 -translate-x-1/2 rotate-90">
          {lang === 'fr' ? sector.nameFr.split(' ').slice(0, 3).join(' ') : sector.nameEn.split(' ').slice(0, 3).join(' ')}
        </span>
      )}
    </div>
  );
};

/* ════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════ */
export default function Sectors() {
  const { i18n } = useTranslation();
  const L = i18n.language;
  const { sectorId } = useParams();
  const selected = sectorId ? sectors.find(s => s.id === sectorId) : null;
  if (selected) return <SectorDetail sector={selected} lang={L} />;

  return <SectorsOverview lang={L} />;
}

/* ════════════════════════════════════════════
   SECTORS OVERVIEW — Accordion layout
   ════════════════════════════════════════════ */
function SectorsOverview({ lang }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="animate-fade-in" data-testid="sectors-page">
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="section-label">{lang === 'fr' ? 'Nos secteurs' : 'Our Sectors'}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight tracking-tight mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {lang === 'fr' ? (
                  <>Spécialisés dans <span className="text-[#207bff]">l'industrie</span> française</>
                ) : (
                  <>Specialized in French <span className="text-[#207bff]">industry</span></>
                )}
              </h1>
              <p className="text-lg text-[#4a5568] max-w-xl mx-auto md:mx-0 mb-8">
                {lang === 'fr'
                  ? 'Nous ne travaillons pas avec tout le monde. Machines-outils, restructuration, services industriels — c\'est notre terrain.'
                  : 'We don\'t work with everyone. Machine tools, restructuring, industrial services — that\'s our turf.'}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#207bff] text-white font-semibold rounded-lg hover:bg-[#1a62cc] transition-all">
                {lang === 'fr' ? 'Parlons-en' : 'Contact us'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — Image Accordion */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
                {sectors.map((sector, index) => (
                  <AccordionItem
                    key={sector.id}
                    sector={sector}
                    isActive={index === activeIndex}
                    onMouseEnter={() => setActiveIndex(index)}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector cards below for mobile / details */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectors.map(sector => {
              const Icon = sector.icon;
              return (
                <Link key={sector.id} to={`/sectors/${sector.id}`} className="bg-white rounded-2xl p-7 border border-[#e2e8f0] hover:border-[#207bff]/20 hover:shadow-lg hover:shadow-[#207bff]/5 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 mb-5 rounded-xl bg-[#f0f7ff] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#207bff]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#207bff] transition-colors">{lang === 'fr' ? sector.nameFr : sector.nameEn}</h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed mb-4">{lang === 'fr' ? sector.shortFr : sector.shortEn}</p>
                  <span className="text-sm font-medium text-[#207bff] flex items-center gap-1 group-hover:gap-2 transition-all">
                    {lang === 'fr' ? 'Découvrir' : 'Explore'} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{lang === 'fr' ? 'Votre secteur est ici ?' : 'Your sector is here?'}</h2>
          <p className="text-white/70 text-lg mb-8">{lang === 'fr' ? 'Parlons de vos enjeux concrets.' : 'Let\'s discuss your specific challenges.'}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors text-lg">
            {lang === 'fr' ? 'Parlons-en' : 'Contact us'} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ════════════════════════════════════════════
   SECTOR DETAIL — Landing page per sector
   ════════════════════════════════════════════ */
function SectorDetail({ sector, lang }) {
  const Icon = sector.icon;

  return (
    <div className="animate-fade-in">
      {/* Hero — About style */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={sector.heroImage} alt="" className="w-full h-[240px] md:h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
            <div className="absolute top-6 left-6">
              <Link to="/sectors" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#1a1a1a] hover:bg-white transition-all">
                <ArrowRight className="w-3 h-3 rotate-180" /> {lang === 'fr' ? 'Secteurs' : 'Sectors'}
              </Link>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#207bff] rounded-full text-xs font-semibold text-white">
                <Icon className="w-3 h-3" /> {lang === 'fr' ? 'Secteur spécialisé' : 'Specialized sector'}
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {lang === 'fr' ? sector.nameFr : sector.nameEn}
            </h1>
            <div className="space-y-5">
              <p className="text-[#4a5568] leading-relaxed text-lg">{lang === 'fr' ? sector.descFr : sector.descEn}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#207bff] text-white rounded-lg text-sm font-semibold hover:bg-[#1a62cc] transition-all">
                {lang === 'fr' ? 'Parlons de vos enjeux' : 'Discuss your challenges'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Bar */}
      <section className="py-10 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sector.kpis.map((k, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#207bff] mb-1">{k.value}</div>
                <div className="text-sm text-[#718096] font-medium">{lang === 'fr' ? k.labelFr : k.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges + Solutions Bento */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Challenges */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {lang === 'fr' ? 'Les blocages typiques' : 'Specific challenges'}
            </h2>
            <p className="text-[#4a5568] text-lg self-end">
              {lang === 'fr' ? 'Les freins que nous observons systématiquement dans ce secteur.' : 'The blockers we systematically see in this sector.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {sector.challenges.map((c, i) => (
              <div key={i} className="bg-[#fef2f2] rounded-2xl p-6 border border-[#ef4444]/10 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#ef4444]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#ef4444] text-sm font-bold">0{i + 1}</span>
                </div>
                <p className="text-[#4a5568] leading-relaxed">{lang === 'fr' ? c.fr : c.en}</p>
              </div>
            ))}
          </div>

          {/* Solutions — Bento grid */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {lang === 'fr' ? 'Ce que nous mettons en place' : 'What we bring'}
            </h2>
            <p className="text-[#4a5568] text-lg self-end">
              {lang === 'fr' ? 'Des solutions concrètes, testées sur le terrain.' : 'Concrete solutions tested in the field.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {sector.solutions.map((sol, i) => {
              const SolIcon = sol.icon;
              if (i === 0) {
                // Featured card — tall
                return (
                  <div key={i} className="md:col-span-2 md:row-span-2 bg-[#207bff] rounded-2xl p-8 text-white flex flex-col justify-between min-h-[280px]">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                        <SolIcon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white/90 text-base leading-relaxed">{lang === 'fr' ? sol.fr : sol.en}</p>
                    </div>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-[#207bff] transition-all self-start">
                      {lang === 'fr' ? 'En discuter' : 'Discuss'} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              }
              // Regular cards
              return (
                <div key={i} className="md:col-span-2 bg-[#f5f7fa] rounded-2xl p-6 border border-[#e2e8f0] hover:border-[#207bff]/20 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#207bff]/10 flex items-center justify-center flex-shrink-0">
                    <SolIcon className="w-5 h-5 text-[#207bff]" />
                  </div>
                  <p className="text-sm text-[#4a5568] leading-relaxed">{lang === 'fr' ? sol.fr : sol.en}</p>
                </div>
              );
            })}

            {/* Wide CTA card */}
            <div className="md:col-span-4 bg-[#f0f7ff] rounded-2xl p-7 border border-[#207bff]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {lang === 'fr' ? 'Vous êtes dans ce secteur ?' : 'You\'re in this sector?'}
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {lang === 'fr'
                    ? 'Chaque mission commence par un audit DRS adapté à votre contexte. Parlons de vos enjeux concrets.'
                    : 'Every engagement starts with a DRS audit adapted to your context. Let\'s discuss your specific challenges.'}
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#207bff] text-white text-sm font-semibold rounded-lg hover:bg-[#1a62cc] transition-all flex-shrink-0">
                {lang === 'fr' ? 'Demander un audit gratuit' : 'Request an audit'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">{lang === 'fr' ? 'Services adaptés à ce secteur' : 'Recommended services'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { id: 'audit-drs', icon: Search, en: 'Decision Readiness Audit', fr: 'Audit de Maturité Décisionnelle', time: '2-3 sem.' },
              { id: 'site-decisionnel', icon: Target, en: 'Decision-Grade Website', fr: 'Site Web Décisionnel', time: '8-12 sem.' },
            ].map(svc => {
              const SvcIcon = svc.icon;
              return (
                <Link key={svc.id} to={`/expertise/${svc.id}`} className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:border-[#207bff]/20 hover:shadow-sm transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#207bff] group-hover:text-white transition-colors">
                    <SvcIcon className="w-5 h-5 text-[#207bff] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#207bff] transition-colors">{lang === 'fr' ? svc.fr : svc.en}</h3>
                    <span className="text-xs text-[#718096] font-mono">{svc.time}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#e2e8f0] group-hover:text-[#207bff] transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{lang === 'fr' ? 'Prêt à passer à l\'action ?' : 'Ready to transform your digital presence?'}</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors">
            {lang === 'fr' ? 'Planifier un échange' : 'Schedule a call'} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
