import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Cog, Wrench, CheckCircle } from 'lucide-react';

const sectors = [
  {
    id: 'machine-tool',
    icon: Cog,
    nameEn: 'Machine-Tool OEMs & Integrators',
    nameFr: 'OEM & Intégrateurs Machines-Outils',
    descEn: 'Your buyers are technical decision-makers comparing DMG MORI, Mazak, Hermle — and your site needs to compete at their level. We help OEMs and integrators build websites that reduce decision uncertainty for industrial buyers.',
    descFr: 'Vos acheteurs sont des décideurs techniques qui comparent DMG MORI, Mazak, Hermle — et votre site doit rivaliser à ce niveau. Nous aidons les OEM et intégrateurs à construire des sites qui réduisent l\'incertitude décisionnelle.',
    challenges: [
      { en: 'Technical buyers who compare 5+ suppliers before contact', fr: 'Acheteurs techniques comparant 5+ fournisseurs avant contact' },
      { en: 'Long decision cycles requiring proof at every stage', fr: 'Cycles de décision longs nécessitant des preuves à chaque étape' },
      { en: 'Need for confidential evaluation options', fr: 'Besoin d\'options d\'évaluation confidentielles' },
      { en: 'Complex product ranges that overwhelm without guidance', fr: 'Gammes produit complexes qui submergent sans guidage' },
    ],
    dataPoint: '30 OEM websites benchmarked in our DRS audit',
    dataPointFr: '30 sites web OEM benchmarkés dans notre audit DRS',
  },
  {
    id: 'industrial-restructuring',
    icon: Factory,
    nameEn: 'Industrial Restructuring Actors',
    nameFr: 'Acteurs de la Restructuration Industrielle',
    descEn: 'Site closures, asset liquidation, activity transfers — the leaders managing these situations need discreet, process-visible, proof-backed digital entry points. We build the websites that support these critical decisions.',
    descFr: 'Fermetures de sites, liquidation d\'actifs, transferts d\'activité — les dirigeants qui gèrent ces situations ont besoin de points d\'entrée digitaux discrets, visibles en processus et étayés par des preuves.',
    challenges: [
      { en: 'Confidentiality requirements that prevent standard contact forms', fr: 'Exigences de confidentialité incompatibles avec les formulaires standard' },
      { en: 'Urgent timelines requiring fast-track engagement paths', fr: 'Calendriers urgents nécessitant des parcours d\'engagement accélérés' },
      { en: 'Multiple stakeholders (creditors, management, courts)', fr: 'Parties prenantes multiples (créanciers, direction, tribunaux)' },
      { en: 'Need for verifiable operational proof and case references', fr: 'Besoin de preuves opérationnelles vérifiables et de références' },
    ],
    dataPoint: '51,772 business failures tracked in 2025 across 13 regions',
    dataPointFr: '51 772 défaillances suivies en 2025 sur 13 régions',
  },
  {
    id: 'industrial-services',
    icon: Wrench,
    nameEn: 'Industrial Service Providers',
    nameFr: 'Prestataires de Services Industriels',
    descEn: 'Maintenance, tooling, after-sales, integration — if your clients are industrial decision-makers, your website is your first proof of reliability. We help service providers build digital credibility.',
    descFr: 'Maintenance, outillage, SAV, intégration — si vos clients sont des décideurs industriels, votre site est votre première preuve de fiabilité. Nous aidons les prestataires à construire leur crédibilité digitale.',
    challenges: [
      { en: 'Service differentiation in a trust-based market', fr: 'Différenciation de service dans un marché basé sur la confiance' },
      { en: 'After-sales visibility that builds long-term partnerships', fr: 'Visibilité SAV qui construit des partenariats long terme' },
      { en: 'Proving operational capacity without revealing client details', fr: 'Prouver la capacité opérationnelle sans révéler les clients' },
      { en: 'Converting emergency requests into structured engagements', fr: 'Convertir les demandes urgentes en engagements structurés' },
    ],
    dataPoint: 'DRS methodology adapted for service-oriented businesses',
    dataPointFr: 'Méthodologie DRS adaptée aux entreprises orientées service',
  },
];

export default function Sectors() {
  const { i18n } = useTranslation();
  const L = i18n.language;
  
  return (
    <div className="animate-fade-in" data-testid="sectors-page">
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">{L==='fr'?'Nos Secteurs':'Our Sectors'}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
              {L==='fr'?'Spécialisés dans l\'industrie française':'Specialized in French industry'}
            </h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              {L==='fr'
                ?'Nous ne travaillons pas avec tout le monde. Nous travaillons avec les acteurs de la machine-outil, de la restructuration industrielle et des services industriels en France. C\'est notre terrain.'
                :'We don\'t work with everyone. We work with machine-tool actors, industrial restructuring firms, and industrial service providers in France. That\'s our turf.'
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sectors.map(sector => {
              const Icon = sector.icon;
              return (
                <div key={sector.id} className="bg-white rounded-xl p-8 md:p-12 border border-slate-100 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-[#f0f7ff] rounded-xl flex items-center justify-center">
                          <Icon size={28} className="text-[#207bff]" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1a1a1a]">
                          {L==='fr'?sector.nameFr:sector.nameEn}
                        </h2>
                      </div>
                      <p className="text-[#4a5568] leading-relaxed mb-6 text-lg">
                        {L==='fr'?sector.descFr:sector.descEn}
                      </p>
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-[#718096] uppercase tracking-wider">
                          {L==='fr'?'Enjeux spécifiques':'Key challenges'}
                        </h3>
                        {sector.challenges.map((c, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-[#207bff] mt-1 flex-shrink-0" />
                            <span className="text-[#4a5568]">{L==='fr'?c.fr:c.en}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-4 flex items-end">
                      <div className="bg-[#f0f7ff] rounded-xl p-6 w-full">
                        <p className="text-sm text-[#207bff] font-medium">
                          {L==='fr'?sector.dataPointFr:sector.dataPoint}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {L==='fr'?'Votre secteur est ici ?':'Your sector is here?'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {L==='fr'?'Discutons de vos enjeux spécifiques.':'Let\'s discuss your specific challenges.'}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors text-lg">
            {L==='fr'?'Nous contacter':'Contact us'}<ArrowRight size={20}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
