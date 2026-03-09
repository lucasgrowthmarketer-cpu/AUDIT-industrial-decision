import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Shield, 
  Lightbulb,
  BarChart3,
  Users,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const stats = [
  { value: '66,000+', labelEn: 'Failures Analyzed', labelFr: 'Défaillances Analysées' },
  { value: '30+', labelEn: 'Companies Benchmarked', labelFr: 'Entreprises Auditées' },
  { value: '13', labelEn: 'Regions Covered', labelFr: 'Régions Couvertes' },
  { value: '95%', labelEn: 'Client Satisfaction', labelFr: 'Satisfaction Client' },
];

const services = [
  {
    id: 'strategic-clarity',
    icon: Target,
    titleEn: 'Strategic Clarity',
    titleFr: 'Clarté Stratégique',
    descEn: 'Reduce decision uncertainty with structured analysis and clear frameworks.',
    descFr: 'Réduisez l\'incertitude décisionnelle grâce à une analyse structurée.',
    span: 'bento-span-6'
  },
  {
    id: 'market-intelligence',
    icon: BarChart3,
    titleEn: 'Market Intelligence',
    titleFr: 'Intelligence de Marché',
    descEn: 'Data-driven insights for informed strategic decisions.',
    descFr: 'Insights basés sur les données pour des décisions éclairées.',
    span: 'bento-span-6'
  },
  {
    id: 'process-design',
    icon: Lightbulb,
    titleEn: 'Process Design',
    titleFr: 'Design de Processus',
    descEn: 'Clear process visibility with risk identification.',
    descFr: 'Visibilité des processus avec identification des risques.',
    span: 'bento-span-4'
  },
  {
    id: 'governance',
    icon: Shield,
    titleEn: 'Governance & Proof',
    titleFr: 'Gouvernance & Preuves',
    descEn: 'Transparent methodology with verified case studies.',
    descFr: 'Méthodologie transparente avec études de cas vérifiées.',
    span: 'bento-span-4'
  },
  {
    id: 'transformation',
    icon: TrendingUp,
    titleEn: 'Digital Transformation',
    titleFr: 'Transformation Digitale',
    descEn: 'Accelerate your digital journey with expert guidance.',
    descFr: 'Accélérez votre transformation digitale avec nos experts.',
    span: 'bento-span-4'
  },
];

const caseStudies = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    sector: 'Manufacturing',
    sectorFr: 'Industrie',
    titleEn: 'Restructuring Strategy for Major OEM',
    titleFr: 'Stratégie de Restructuration pour OEM Majeur',
    result: '+32% operational efficiency'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
    sector: 'Automotive',
    sectorFr: 'Automobile',
    titleEn: 'Supply Chain Optimization',
    titleFr: 'Optimisation Supply Chain',
    result: '-18% costs reduction'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=800&q=80',
    sector: 'Technology',
    sectorFr: 'Technologie',
    titleEn: 'Digital Transformation Program',
    titleFr: 'Programme de Transformation Digitale',
    result: '3x faster decisions'
  },
];

export default function Home() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="animate-fade-in" data-testid="home-page">
      {/* Hero Section */}
      <section className="hero relative" data-testid="hero-section">
        <div className="hero-gradient" />
        <div className="hero-pattern" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#207bff]/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#207bff] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#207bff]">
                  {currentLang === 'fr' ? 'Cabinet de Conseil Stratégique' : 'Strategic Consulting Firm'}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-tight mb-6">
                {currentLang === 'fr' ? (
                  <>
                    Clarifier les
                    <span className="gradient-text block">Décisions Industrielles</span>
                  </>
                ) : (
                  <>
                    Clarifying
                    <span className="gradient-text block">Industrial Decisions</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl text-[#4a5568] leading-relaxed mb-8 max-w-xl">
                {currentLang === 'fr' 
                  ? 'Nous accompagnons les dirigeants industriels vers une prise de décision éclairée, basée sur les données et la méthodologie.'
                  : 'We guide industrial leaders towards informed decision-making, powered by data and proven methodology.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  {currentLang === 'fr' ? 'Prendre Rendez-vous' : 'Schedule a Meeting'}
                  <ArrowRight size={18} />
                </Link>
                <Link to="/case-studies" className="btn-secondary">
                  {currentLang === 'fr' ? 'Voir nos Réalisations' : 'View Our Work'}
                </Link>
              </div>
            </div>
            
            {/* Hero Image / Stats */}
            <div className="relative animate-fade-in-up delay-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                  alt="Industrial consulting"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 animate-fade-in delay-400">
                  <div className="stat-number">66K+</div>
                  <div className="stat-label">
                    {currentLang === 'fr' ? 'Défaillances analysées' : 'Failures analyzed'}
                  </div>
                </div>
                
                {/* Another floating card */}
                <div className="absolute -top-4 -right-4 bg-[#207bff] rounded-xl shadow-lg p-4 text-white animate-fade-in delay-300">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={24} />
                    <span className="text-2xl font-bold">+23%</span>
                  </div>
                  <span className="text-sm opacity-80">
                    {currentLang === 'fr' ? 'Pression industrielle' : 'Industrial pressure'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Bar */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#207bff] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#718096] font-medium">
                  {currentLang === 'fr' ? stat.labelFr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Bento Grid */}
      <section className="section bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-label">
              {currentLang === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
            </span>
            <h2 className="section-title">
              {currentLang === 'fr' 
                ? 'Solutions Stratégiques sur Mesure'
                : 'Tailored Strategic Solutions'
              }
            </h2>
            <p className="section-subtitle">
              {currentLang === 'fr'
                ? 'Des méthodologies éprouvées pour accompagner vos décisions les plus critiques.'
                : 'Proven methodologies to support your most critical decisions.'
              }
            </p>
          </div>
          
          <div className="bento-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/expertise/${service.id}`}
                  className={`bento-item ${service.span} p-8 group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`service-${service.id}`}
                >
                  <div className="expertise-icon mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-[#207bff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#207bff] transition-colors">
                    {currentLang === 'fr' ? service.titleFr : service.titleEn}
                  </h3>
                  <p className="text-[#4a5568] leading-relaxed mb-4">
                    {currentLang === 'fr' ? service.descFr : service.descEn}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#207bff] font-medium group-hover:gap-3 transition-all">
                    {currentLang === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="section-label">
                {currentLang === 'fr' ? 'Études de Cas' : 'Case Studies'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                {currentLang === 'fr' ? 'Résultats Concrets' : 'Proven Results'}
              </h2>
            </div>
            <Link to="/case-studies" className="btn-secondary">
              {currentLang === 'fr' ? 'Voir Toutes les Études' : 'View All Studies'}
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to="/case-studies"
                className="case-study-card h-[400px] hover-lift"
                data-testid={`case-study-${study.id}`}
              >
                <img 
                  src={study.image} 
                  alt={currentLang === 'fr' ? study.titleFr : study.titleEn}
                  className="w-full h-full object-cover"
                />
                <div className="content">
                  <span className="badge badge-primary mb-3">
                    {currentLang === 'fr' ? study.sectorFr : study.sector}
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    {currentLang === 'fr' ? study.titleFr : study.titleEn}
                  </h3>
                  <div className="flex items-center gap-2 text-[#4ea5ff]">
                    <TrendingUp size={16} />
                    <span className="font-semibold">{study.result}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4ea5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
                {currentLang === 'fr' ? 'Pourquoi Nous Choisir' : 'Why Choose Us'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {currentLang === 'fr' 
                  ? 'Une Approche Fondée sur les Données'
                  : 'A Data-Driven Approach'
                }
              </h2>
              <p className="text-[#a0aec0] text-lg leading-relaxed mb-8">
                {currentLang === 'fr'
                  ? 'Notre méthodologie unique combine analyse quantitative rigoureuse et expertise sectorielle approfondie pour délivrer des recommandations actionnables.'
                  : 'Our unique methodology combines rigorous quantitative analysis with deep sector expertise to deliver actionable recommendations.'
                }
              </p>
              
              <div className="space-y-4">
                {[
                  { en: 'Data-backed strategic insights', fr: 'Insights stratégiques basés sur les données' },
                  { en: 'Transparent methodology', fr: 'Méthodologie transparente' },
                  { en: 'Measurable outcomes', fr: 'Résultats mesurables' },
                  { en: 'Industry expertise', fr: 'Expertise sectorielle' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#4ea5ff]" />
                    <span className="text-white font-medium">
                      {currentLang === 'fr' ? item.fr : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#207bff] to-[#4ea5ff] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLang === 'fr' 
              ? 'Prêt à Clarifier vos Décisions ?'
              : 'Ready to Clarify Your Decisions?'
            }
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {currentLang === 'fr'
              ? 'Discutons de vos enjeux stratégiques et découvrez comment nous pouvons vous accompagner.'
              : 'Let\'s discuss your strategic challenges and discover how we can support you.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors"
            >
              {currentLang === 'fr' ? 'Planifier un Échange' : 'Schedule a Call'}
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/expertise" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-sm border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              {currentLang === 'fr' ? 'Découvrir nos Services' : 'Explore Our Services'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
