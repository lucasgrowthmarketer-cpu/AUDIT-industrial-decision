import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, 
  Compass, 
  BarChart3, 
  GitBranch, 
  Shield, 
  Layers,
  Target
} from 'lucide-react';

const services = [
  {
    id: 'strategic-clarity',
    icon: Compass,
    nameEn: 'Strategic Clarity',
    nameFr: 'Clarté Stratégique',
    descEn: 'Reduce decision uncertainty through structured analysis and clear frameworks.',
    descFr: 'Réduire l\'incertitude décisionnelle grâce à une analyse structurée et des frameworks clairs.',
    features: [
      { en: 'Scenario mapping', fr: 'Cartographie de scénarios' },
      { en: 'Decision frameworks', fr: 'Frameworks décisionnels' },
      { en: 'Stakeholder alignment', fr: 'Alignement des parties prenantes' }
    ]
  },
  {
    id: 'market-intelligence',
    icon: BarChart3,
    nameEn: 'Market Intelligence',
    nameFr: 'Intelligence de Marché',
    descEn: 'Data-driven market pressure analysis for informed strategic decisions.',
    descFr: 'Analyse de la pression de marché basée sur les données pour des décisions stratégiques éclairées.',
    features: [
      { en: 'Regional analysis', fr: 'Analyse régionale' },
      { en: 'Trend identification', fr: 'Identification des tendances' },
      { en: 'Competitive positioning', fr: 'Positionnement concurrentiel' }
    ]
  },
  {
    id: 'process-design',
    icon: GitBranch,
    nameEn: 'Process Design',
    nameFr: 'Design de Processus',
    descEn: 'Clear process visibility with inputs, outputs, and risk identification.',
    descFr: 'Visibilité claire des processus avec entrées, sorties et identification des risques.',
    features: [
      { en: 'Workflow mapping', fr: 'Cartographie des flux' },
      { en: 'Bottleneck identification', fr: 'Identification des goulots' },
      { en: 'Optimization roadmap', fr: 'Feuille de route d\'optimisation' }
    ]
  },
  {
    id: 'governance',
    icon: Shield,
    nameEn: 'Governance & Proof',
    nameFr: 'Gouvernance & Preuves',
    descEn: 'Transparent methodology with verified case studies and KPIs.',
    descFr: 'Méthodologie transparente avec études de cas vérifiées et KPIs.',
    features: [
      { en: 'Case documentation', fr: 'Documentation des cas' },
      { en: 'KPI validation', fr: 'Validation des KPIs' },
      { en: 'Compliance frameworks', fr: 'Frameworks de conformité' }
    ]
  },
  {
    id: 'web-architecture',
    icon: Layers,
    nameEn: 'Web Architecture',
    nameFr: 'Architecture Web',
    descEn: 'Industrial web presence designed for decision-grade clarity.',
    descFr: 'Présence web industrielle conçue pour la clarté décisionnelle.',
    features: [
      { en: 'Decision interfaces', fr: 'Interfaces de décision' },
      { en: 'Data visualization', fr: 'Visualisation de données' },
      { en: 'Multi-language support', fr: 'Support multilingue' }
    ]
  }
];

export default function Expertise() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { serviceId } = useParams();
  
  const selectedService = serviceId ? services.find(s => s.id === serviceId) : null;
  
  if (selectedService) {
    return <ServiceDetail service={selectedService} lang={currentLang} />;
  }
  
  return (
    <div className="animate-fade-in" data-testid="expertise-page">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#262626]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {currentLang === 'fr' ? 'Expertise' : 'Expertise'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {currentLang === 'fr' 
              ? 'Des services conçus pour clarifier, rassurer et déclencher l\'action.'
              : 'Services designed to clarify, reassure, and trigger action.'}
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/expertise/${service.id}`}
                  className="group bg-[#2a2a2a] border border-white/5 rounded-lg p-6 hover:border-[#e89565]/30 transition-all"
                  data-testid={`service-${service.id}`}
                >
                  <div className="w-12 h-12 bg-[#e89565]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#e89565]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-[#e89565] transition-colors mb-2">
                    {currentLang === 'fr' ? service.nameFr : service.nameEn}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {currentLang === 'fr' ? service.descFr : service.descEn}
                  </p>
                  <div className="flex items-center text-sm text-[#e89565]">
                    {currentLang === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {currentLang === 'fr' ? 'Notre Approche' : 'Our Approach'}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { en: 'Clarify', fr: 'Clarifier', num: 1 },
              { en: 'Reassure', fr: 'Rassurer', num: 2 },
              { en: 'Trigger', fr: 'Déclencher', num: 3 }
            ].map((step, index) => (
              <React.Fragment key={step.num}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#e89565] rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-[#262626]">{step.num}</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {currentLang === 'fr' ? step.fr : step.en}
                  </span>
                </div>
                {index < 2 && (
                  <ArrowRight size={24} className="text-[#e89565] hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceDetail({ service, lang }) {
  const Icon = service.icon;
  
  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link to="/expertise" className="hover:text-foreground">Expertise</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{lang === 'fr' ? service.nameFr : service.nameEn}</span>
          </nav>
        </div>
      </div>
      
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#e89565]/10 rounded-lg flex items-center justify-center">
              <Icon size={32} className="text-[#e89565]" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              {lang === 'fr' ? service.nameFr : service.nameEn}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {lang === 'fr' ? service.descFr : service.descEn}
          </p>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-6">
            {lang === 'fr' ? 'Inclus' : 'Includes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.features.map((feature, i) => (
              <div key={i} className="bg-[#262626] border border-white/5 rounded-lg p-4">
                <Target size={16} className="text-[#e89565] mb-2" />
                <span className="text-foreground">{lang === 'fr' ? feature.fr : feature.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {lang === 'fr' ? 'Intéressé par ce service ?' : 'Interested in this service?'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              {lang === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </Link>
            <Link to="/decision-gates" className="btn btn-secondary">
              {lang === 'fr' ? 'Points d\'entrée' : 'Entry Points'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
