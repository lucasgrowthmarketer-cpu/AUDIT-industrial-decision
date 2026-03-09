import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Factory, Cog, Cpu, Truck, Building2, TrendingUp } from 'lucide-react';

const sectors = [
  {
    id: 'manufacturing',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    nameEn: 'Manufacturing',
    nameFr: 'Industrie Manufacturière',
    descEn: 'Strategic support for industrial manufacturers navigating market pressure and transformation.',
    descFr: 'Accompagnement stratégique pour les industriels face à la pression du marché et la transformation.',
    stats: { failures: '12,500+', growth: '+8%' },
    challenges: [
      { en: 'Supply chain resilience', fr: 'Résilience de la supply chain' },
      { en: 'Digital transformation', fr: 'Transformation digitale' },
      { en: 'Cost optimization', fr: 'Optimisation des coûts' }
    ]
  },
  {
    id: 'automotive',
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
    nameEn: 'Automotive & Mobility',
    nameFr: 'Automobile & Mobilité',
    descEn: 'Decision clarity for OEMs and suppliers navigating the mobility transition.',
    descFr: 'Clarté décisionnelle pour les OEM et équipementiers en pleine transition de la mobilité.',
    stats: { failures: '3,200+', growth: '+15%' },
    challenges: [
      { en: 'Electrification strategy', fr: 'Stratégie d\'électrification' },
      { en: 'Supplier consolidation', fr: 'Consolidation des fournisseurs' },
      { en: 'R&D prioritization', fr: 'Priorisation R&D' }
    ]
  },
  {
    id: 'technology',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    nameEn: 'Industrial Technology',
    nameFr: 'Technologie Industrielle',
    descEn: 'Strategic guidance for tech-driven industrial companies scaling their impact.',
    descFr: 'Accompagnement stratégique pour les entreprises industrielles tech en phase de croissance.',
    stats: { failures: '2,100+', growth: '+12%' },
    challenges: [
      { en: 'Market positioning', fr: 'Positionnement marché' },
      { en: 'Scale-up strategy', fr: 'Stratégie de scale-up' },
      { en: 'Partnership development', fr: 'Développement de partenariats' }
    ]
  },
  {
    id: 'logistics',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    nameEn: 'Logistics & Supply Chain',
    nameFr: 'Logistique & Supply Chain',
    descEn: 'Strategic clarity for supply chain optimization and logistics transformation.',
    descFr: 'Clarté stratégique pour l\'optimisation supply chain et la transformation logistique.',
    stats: { failures: '4,800+', growth: '+6%' },
    challenges: [
      { en: 'Network optimization', fr: 'Optimisation du réseau' },
      { en: 'Technology integration', fr: 'Intégration technologique' },
      { en: 'Sustainability', fr: 'Durabilité' }
    ]
  },
  {
    id: 'construction',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    nameEn: 'Industrial Construction',
    nameFr: 'Construction Industrielle',
    descEn: 'Decision support for industrial construction and infrastructure projects.',
    descFr: 'Aide à la décision pour la construction industrielle et les projets d\'infrastructure.',
    stats: { failures: '8,900+', growth: '+18%' },
    challenges: [
      { en: 'Project risk management', fr: 'Gestion des risques projet' },
      { en: 'Resource allocation', fr: 'Allocation des ressources' },
      { en: 'Market diversification', fr: 'Diversification de marché' }
    ]
  }
];

export default function Sectors() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { sectorId } = useParams();
  
  const selectedSector = sectorId ? sectors.find(s => s.id === sectorId) : null;
  
  if (selectedSector) {
    return <SectorDetail sector={selectedSector} lang={currentLang} />;
  }
  
  return (
    <div className="animate-fade-in" data-testid="sectors-page">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">
              {currentLang === 'fr' ? 'Secteurs' : 'Sectors'}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              {currentLang === 'fr' 
                ? 'Expertise Sectorielle Approfondie'
                : 'Deep Sector Expertise'
              }
            </h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              {currentLang === 'fr'
                ? 'Une connaissance intime des enjeux spécifiques de chaque industrie pour des recommandations véritablement actionnables.'
                : 'Intimate knowledge of each industry\'s specific challenges for truly actionable recommendations.'
              }
            </p>
          </div>
        </div>
      </section>
      
      {/* Sectors Grid */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Link
                key={sector.id}
                to={`/sectors/${sector.id}`}
                className="sector-card group"
                data-testid={`sector-${sector.id}`}
              >
                <img 
                  src={sector.image} 
                  alt={currentLang === 'fr' ? sector.nameFr : sector.nameEn}
                />
                <div className="overlay">
                  <span className="badge badge-primary bg-white/20 backdrop-blur-sm text-white mb-3">
                    {sector.stats.growth} YoY
                  </span>
                  <h3 className="text-2xl font-bold mb-2">
                    {currentLang === 'fr' ? sector.nameFr : sector.nameEn}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {currentLang === 'fr' ? sector.descFr : sector.descEn}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    {currentLang === 'fr' ? 'Explorer' : 'Explore'}
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            {currentLang === 'fr' ? 'Votre secteur n\'est pas listé ?' : 'Your sector not listed?'}
          </h2>
          <p className="text-[#4a5568] mb-8">
            {currentLang === 'fr'
              ? 'Contactez-nous pour discuter de vos besoins spécifiques.'
              : 'Contact us to discuss your specific needs.'
            }
          </p>
          <Link to="/contact" className="btn-primary">
            {currentLang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectorDetail({ sector, lang }) {
  const Icon = sector.icon;
  
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img 
          src={sector.image} 
          alt={lang === 'fr' ? sector.nameFr : sector.nameEn}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <Link to="/sectors" className="inline-flex items-center gap-2 text-white/80 font-medium mb-6 hover:text-white transition-colors">
              <ArrowRight size={16} className="rotate-180" />
              {lang === 'fr' ? 'Retour aux secteurs' : 'Back to sectors'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {lang === 'fr' ? sector.nameFr : sector.nameEn}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {lang === 'fr' ? sector.descFr : sector.descEn}
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 bg-[#207bff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold">{sector.stats.failures}</div>
              <div className="text-sm opacity-80">{lang === 'fr' ? 'Défaillances 2024' : '2024 Failures'}</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">{sector.stats.growth}</div>
              <div className="text-sm opacity-80">YoY</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">13</div>
              <div className="text-sm opacity-80">{lang === 'fr' ? 'Régions analysées' : 'Regions analyzed'}</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">High</div>
              <div className="text-sm opacity-80">{lang === 'fr' ? 'Pression' : 'Pressure'}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">
            {lang === 'fr' ? 'Enjeux Clés' : 'Key Challenges'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sector.challenges.map((challenge, index) => (
              <div key={index} className="card-feature">
                <h3 className="text-lg font-bold text-[#1a1a1a]">
                  {lang === 'fr' ? challenge.fr : challenge.en}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#4ea5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {lang === 'fr' ? 'Besoin de Clarté ?' : 'Need Clarity?'}
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors">
            {lang === 'fr' ? 'Discuter de vos Enjeux' : 'Discuss Your Challenges'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
