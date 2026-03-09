import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  BarChart3, 
  Lightbulb, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Layers
} from 'lucide-react';

const services = [
  {
    id: 'strategic-clarity',
    icon: Target,
    titleEn: 'Strategic Clarity',
    titleFr: 'Clarté Stratégique',
    descEn: 'Reduce decision uncertainty through structured analysis and clear frameworks.',
    descFr: 'Réduire l\'incertitude décisionnelle grâce à une analyse structurée et des frameworks clairs.',
    longDescEn: 'We help industrial leaders navigate complex strategic decisions by providing clarity through proven frameworks. Our approach combines deep market understanding with rigorous analytical methods to reduce uncertainty and accelerate decision-making.',
    longDescFr: 'Nous aidons les dirigeants industriels à naviguer des décisions stratégiques complexes en apportant de la clarté grâce à des frameworks éprouvés. Notre approche combine une compréhension profonde du marché avec des méthodes analytiques rigoureuses.',
    features: [
      { en: 'Scenario mapping & analysis', fr: 'Cartographie et analyse de scénarios' },
      { en: 'Decision frameworks development', fr: 'Développement de frameworks décisionnels' },
      { en: 'Stakeholder alignment workshops', fr: 'Ateliers d\'alignement des parties prenantes' },
      { en: 'Strategic roadmap creation', fr: 'Création de feuilles de route stratégiques' }
    ],
    stats: { value: '40%', labelEn: 'faster decisions', labelFr: 'de décisions plus rapides' }
  },
  {
    id: 'market-intelligence',
    icon: BarChart3,
    titleEn: 'Market Intelligence',
    titleFr: 'Intelligence de Marché',
    descEn: 'Data-driven market pressure analysis for informed strategic decisions.',
    descFr: 'Analyse de la pression de marché basée sur les données pour des décisions stratégiques éclairées.',
    longDescEn: 'Our market intelligence services provide comprehensive analysis of industrial market dynamics. We analyze 66,000+ business failures across 13 regions to deliver actionable insights for strategic planning.',
    longDescFr: 'Nos services d\'intelligence de marché fournissent une analyse complète des dynamiques du marché industriel. Nous analysons plus de 66 000 défaillances d\'entreprises dans 13 régions.',
    features: [
      { en: 'Regional market analysis', fr: 'Analyse de marché régionale' },
      { en: 'Industry trend identification', fr: 'Identification des tendances sectorielles' },
      { en: 'Competitive positioning', fr: 'Positionnement concurrentiel' },
      { en: 'Risk assessment', fr: 'Évaluation des risques' }
    ],
    stats: { value: '66K+', labelEn: 'failures analyzed', labelFr: 'défaillances analysées' }
  },
  {
    id: 'process-design',
    icon: Lightbulb,
    titleEn: 'Process Design',
    titleFr: 'Design de Processus',
    descEn: 'Clear process visibility with inputs, outputs, and risk identification.',
    descFr: 'Visibilité claire des processus avec entrées, sorties et identification des risques.',
    longDescEn: 'We design and optimize operational processes to enhance efficiency and reduce risk. Our methodology provides complete visibility into workflows, enabling data-driven improvements.',
    longDescFr: 'Nous concevons et optimisons les processus opérationnels pour améliorer l\'efficacité et réduire les risques. Notre méthodologie offre une visibilité complète sur les flux de travail.',
    features: [
      { en: 'Workflow mapping', fr: 'Cartographie des flux' },
      { en: 'Bottleneck identification', fr: 'Identification des goulots d\'étranglement' },
      { en: 'Process optimization', fr: 'Optimisation des processus' },
      { en: 'Implementation roadmap', fr: 'Feuille de route d\'implémentation' }
    ],
    stats: { value: '32%', labelEn: 'efficiency gain', labelFr: 'gain d\'efficacité' }
  },
  {
    id: 'governance',
    icon: Shield,
    titleEn: 'Governance & Proof',
    titleFr: 'Gouvernance & Preuves',
    descEn: 'Transparent methodology with verified case studies and KPIs.',
    descFr: 'Méthodologie transparente avec études de cas vérifiées et KPIs.',
    longDescEn: 'We establish robust governance frameworks and provide verifiable proof of results. Our approach ensures transparency, accountability, and measurable outcomes for every engagement.',
    longDescFr: 'Nous établissons des cadres de gouvernance robustes et fournissons des preuves vérifiables des résultats. Notre approche garantit transparence, responsabilité et résultats mesurables.',
    features: [
      { en: 'Case documentation', fr: 'Documentation des cas' },
      { en: 'KPI validation', fr: 'Validation des KPIs' },
      { en: 'Compliance frameworks', fr: 'Cadres de conformité' },
      { en: 'Audit trail creation', fr: 'Création de pistes d\'audit' }
    ],
    stats: { value: '100%', labelEn: 'verified results', labelFr: 'résultats vérifiés' }
  },
  {
    id: 'digital-transformation',
    icon: TrendingUp,
    titleEn: 'Digital Transformation',
    titleFr: 'Transformation Digitale',
    descEn: 'Accelerate your digital journey with expert guidance and implementation.',
    descFr: 'Accélérez votre parcours digital avec l\'accompagnement et l\'implémentation d\'experts.',
    longDescEn: 'We guide industrial companies through digital transformation, from strategy to implementation. Our expertise ensures technology investments deliver measurable business value.',
    longDescFr: 'Nous guidons les entreprises industrielles à travers leur transformation digitale, de la stratégie à l\'implémentation. Notre expertise garantit que les investissements technologiques délivrent une valeur business mesurable.',
    features: [
      { en: 'Digital strategy development', fr: 'Développement de stratégie digitale' },
      { en: 'Technology assessment', fr: 'Évaluation technologique' },
      { en: 'Implementation support', fr: 'Support d\'implémentation' },
      { en: 'Change management', fr: 'Gestion du changement' }
    ],
    stats: { value: '3x', labelEn: 'ROI achieved', labelFr: 'ROI atteint' }
  }
];

export default function Expertise() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { serviceId } = useParams();
  
  const selectedService = serviceId ? services.find(s => s.id === serviceId) : null;
  
  if (selectedService) {
    return <ServiceDetail service={selectedService} lang={currentLang} />;
  }
  
  return (
    <div className="animate-fade-in" data-testid="expertise-page">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">
              {currentLang === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              {currentLang === 'fr' 
                ? 'Solutions Stratégiques sur Mesure'
                : 'Tailored Strategic Solutions'
              }
            </h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              {currentLang === 'fr'
                ? 'Des méthodologies éprouvées pour accompagner vos décisions les plus critiques et transformer l\'incertitude en opportunité.'
                : 'Proven methodologies to support your most critical decisions and transform uncertainty into opportunity.'
              }
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/expertise/${service.id}`}
                  className="card-premium group hover-lift"
                  data-testid={`service-${service.id}`}
                >
                  <div className="expertise-icon mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-[#207bff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#207bff] transition-colors">
                    {currentLang === 'fr' ? service.titleFr : service.titleEn}
                  </h3>
                  <p className="text-[#4a5568] leading-relaxed mb-6">
                    {currentLang === 'fr' ? service.descFr : service.descEn}
                  </p>
                  <div className="flex items-center gap-2 text-[#207bff] font-medium">
                    {currentLang === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-label">
              {currentLang === 'fr' ? 'Notre Approche' : 'Our Approach'}
            </span>
            <h2 className="section-title">
              {currentLang === 'fr' ? 'Clarifier. Rassurer. Déclencher.' : 'Clarify. Reassure. Trigger.'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: 1, titleEn: 'Clarify', titleFr: 'Clarifier', descEn: 'Understand the full scope of your decision context', descFr: 'Comprendre la portée complète de votre contexte décisionnel' },
              { num: 2, titleEn: 'Reassure', titleFr: 'Rassurer', descEn: 'Provide data-backed confidence in your options', descFr: 'Fournir une confiance basée sur les données' },
              { num: 3, titleEn: 'Trigger', titleFr: 'Déclencher', descEn: 'Enable decisive action with clear roadmaps', descFr: 'Permettre une action décisive avec des feuilles de route claires' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#207bff] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {currentLang === 'fr' ? step.titleFr : step.titleEn}
                </h3>
                <p className="text-[#4a5568]">
                  {currentLang === 'fr' ? step.descFr : step.descEn}
                </p>
              </div>
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
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/expertise" className="inline-flex items-center gap-2 text-[#207bff] font-medium mb-8 hover:gap-3 transition-all">
            <ArrowRight size={16} className="rotate-180" />
            {lang === 'fr' ? 'Retour à l\'expertise' : 'Back to expertise'}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="expertise-icon mb-6">
                <Icon size={32} className="text-[#207bff]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
                {lang === 'fr' ? service.titleFr : service.titleEn}
              </h1>
              <p className="text-xl text-[#4a5568] leading-relaxed mb-8">
                {lang === 'fr' ? service.longDescFr : service.longDescEn}
              </p>
              <Link to="/contact" className="btn-primary">
                {lang === 'fr' ? 'Discuter de votre Projet' : 'Discuss Your Project'}
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-[#207bff] rounded-2xl p-8 text-white">
              <div className="text-6xl font-bold mb-2">{service.stats.value}</div>
              <div className="text-xl opacity-80">
                {lang === 'fr' ? service.stats.labelFr : service.stats.labelEn}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">
            {lang === 'fr' ? 'Ce que nous délivrons' : 'What we deliver'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="card-feature">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} className="text-[#207bff]" />
                  <span className="text-lg font-medium text-[#1a1a1a]">
                    {lang === 'fr' ? feature.fr : feature.en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#4ea5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {lang === 'fr' ? 'Prêt à Commencer ?' : 'Ready to Start?'}
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors">
            {lang === 'fr' ? 'Planifier une Discussion' : 'Schedule a Discussion'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
