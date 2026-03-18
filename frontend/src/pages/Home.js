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
  Zap,
  Globe,
  Database,
  LineChart,
  ArrowUpRight,
  Play
} from 'lucide-react';

const stats = [
  { value: '66,000+', labelEn: 'Failures Analyzed', labelFr: 'Défaillances Analysées', icon: Database },
  { value: '30+', labelEn: 'Companies Benchmarked', labelFr: 'Entreprises Auditées', icon: BarChart3 },
  { value: '13', labelEn: 'Regions Covered', labelFr: 'Régions Couvertes', icon: Globe },
  { value: '95%', labelEn: 'Client Satisfaction', labelFr: 'Satisfaction Client', icon: Users },
];

const expertise = [
  {
    id: 'strategic-clarity',
    icon: Target,
    titleEn: 'Strategic Clarity',
    titleFr: 'Clarté Stratégique',
    descEn: 'Reduce decision uncertainty with data-backed frameworks.',
    descFr: 'Réduisez l\'incertitude avec des frameworks basés sur les données.',
    color: '#207bff'
  },
  {
    id: 'market-intelligence',
    icon: LineChart,
    titleEn: 'Market Intelligence',
    titleFr: 'Intelligence de Marché',
    descEn: 'Real-time market pressure analysis across 13 French regions.',
    descFr: 'Analyse de la pression marché en temps réel sur 13 régions.',
    color: '#4ea5ff'
  },
  {
    id: 'process-design',
    icon: Zap,
    titleEn: 'Process Optimization',
    titleFr: 'Optimisation des Processus',
    descEn: 'Streamline operations with proven methodologies.',
    descFr: 'Optimisez vos opérations avec des méthodologies éprouvées.',
    color: '#10b981'
  },
  {
    id: 'governance',
    icon: Shield,
    titleEn: 'Governance & Proof',
    titleFr: 'Gouvernance & Preuves',
    descEn: 'Transparent KPIs and verified case studies.',
    descFr: 'KPIs transparents et études de cas vérifiées.',
    color: '#f59e0b'
  },
];

const clients = [
  'Automotive OEMs', 'Industrial Manufacturers', 'Tech Companies', 
  'Logistics Providers', 'Construction Firms', 'Supply Chain Leaders'
];

export default function Home() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="animate-fade-in" data-testid="home-page">
      {/* Hero Section - Premium Tech Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafbfc]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(32, 123, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(32, 123, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#207bff]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#4ea5ff]/10 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                <span className="text-sm font-medium text-[#1a1a1a]">
                  {currentLang === 'fr' ? 'Cabinet de Conseil Stratégique' : 'Strategic Advisory Firm'}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight">
                {currentLang === 'fr' ? (
                  <>
                    Transformer<br />
                    <span className="text-[#207bff]">l'incertitude</span><br />
                    en décision
                  </>
                ) : (
                  <>
                    Transform<br />
                    <span className="text-[#207bff]">uncertainty</span><br />
                    into decisions
                  </>
                )}
              </h1>
              
              <p className="text-xl text-[#4a5568] leading-relaxed max-w-lg">
                {currentLang === 'fr' 
                  ? 'Nous accompagnons les dirigeants industriels avec des données, des méthodologies et une expertise sectorielle pour des décisions éclairées.'
                  : 'We guide industrial leaders with data, methodologies, and sector expertise for informed decision-making.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  {currentLang === 'fr' ? 'Commencer' : 'Get Started'}
                  <ArrowRight size={20} />
                </Link>
                <Link to="/case-studies" className="btn-ghost text-lg px-8 py-4 border border-slate-200 rounded-sm hover:border-[#207bff]">
                  <Play size={18} className="text-[#207bff]" />
                  {currentLang === 'fr' ? 'Voir nos résultats' : 'See our results'}
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-xs text-[#718096] uppercase tracking-wider mb-4">
                  {currentLang === 'fr' ? 'Ils nous font confiance' : 'Trusted by leaders in'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {clients.slice(0, 4).map((client, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-slate-100 rounded-full text-sm text-[#4a5568]">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right - Bento Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Large Stat Card */}
                <div className="col-span-2 bg-[#1a1a1a] rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#207bff]/20 rounded-full blur-[60px]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-[#4ea5ff] mb-2">
                      <TrendingUp size={20} />
                      <span className="text-sm font-medium">Industrial Pressure Index</span>
                    </div>
                    <div className="text-6xl font-bold mb-2">+23%</div>
                    <p className="text-white/60 text-sm">
                      {currentLang === 'fr' ? 'Augmentation des défaillances en 2024' : 'Increase in failures in 2024'}
                    </p>
                  </div>
                </div>
                
                {/* Stat Cards */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Database size={24} className="text-[#207bff] mb-3" />
                  <div className="text-3xl font-bold text-[#1a1a1a]">66K+</div>
                  <p className="text-sm text-[#718096]">
                    {currentLang === 'fr' ? 'Données analysées' : 'Data points analyzed'}
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-[#207bff] to-[#4ea5ff] rounded-2xl p-6 text-white">
                  <Target size={24} className="mb-3 opacity-80" />
                  <div className="text-3xl font-bold">95%</div>
                  <p className="text-sm opacity-80">
                    {currentLang === 'fr' ? 'Satisfaction client' : 'Client satisfaction'}
                  </p>
                </div>
                
                {/* Region Map Preview */}
                <div className="col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-[#718096]">
                        {currentLang === 'fr' ? 'Couverture nationale' : 'National coverage'}
                      </p>
                      <p className="text-2xl font-bold text-[#1a1a1a]">13 {currentLang === 'fr' ? 'régions' : 'regions'}</p>
                    </div>
                    <Link to="/case-studies" className="text-[#207bff] hover:underline text-sm font-medium flex items-center gap-1">
                      {currentLang === 'fr' ? 'Explorer' : 'Explore'}
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['IDF', 'ARA', 'PACA', 'OCC', 'NAQ', 'HDF', 'GES', 'PDL'].map((region, i) => (
                      <div 
                        key={region}
                        className="h-12 rounded-lg flex items-center justify-center text-xs font-medium"
                        style={{ 
                          backgroundColor: `rgba(32, 123, 255, ${0.1 + (i * 0.08)})`,
                          color: i > 4 ? '#fff' : '#207bff'
                        }}
                      >
                        {region}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group">
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-[#f5f7fa]">
                    <div className="w-12 h-12 bg-[#207bff]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-[#207bff]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#718096] font-medium">
                      {currentLang === 'fr' ? stat.labelFr : stat.labelEn}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Expertise Bento Grid */}
      <section className="py-24 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">
                {currentLang === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                {currentLang === 'fr' 
                  ? 'Solutions de niveau enterprise'
                  : 'Enterprise-grade solutions'
                }
              </h2>
            </div>
            <Link to="/expertise" className="btn-secondary">
              {currentLang === 'fr' ? 'Tout voir' : 'View all'}
              <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            {/* Large Feature Card */}
            <Link 
              to="/expertise/strategic-clarity"
              className="md:col-span-2 md:row-span-2 bg-[#1a1a1a] rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#207bff]/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#207bff]/30 rounded-full blur-[80px] group-hover:w-80 group-hover:h-80 transition-all" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-3xl font-bold mb-4">
                    {currentLang === 'fr' ? 'Clarté Stratégique' : 'Strategic Clarity'}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {currentLang === 'fr' 
                      ? 'Transformez l\'incertitude en avantage compétitif avec nos frameworks décisionnels éprouvés.'
                      : 'Transform uncertainty into competitive advantage with our proven decision frameworks.'
                    }
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#4ea5ff] font-medium group-hover:gap-3 transition-all">
                    {currentLang === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Smaller Cards */}
            {expertise.slice(1).map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={`/expertise/${item.id}`}
                  className="bg-white rounded-3xl p-6 border border-slate-100 relative overflow-hidden group hover:border-[#207bff]/30 hover:shadow-lg transition-all"
                >
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="relative z-10 h-full flex flex-col">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#207bff] transition-colors">
                      {currentLang === 'fr' ? item.titleFr : item.titleEn}
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed flex-grow">
                      {currentLang === 'fr' ? item.descFr : item.descEn}
                    </p>
                    <ArrowUpRight size={18} className="text-[#207bff] mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">
                {currentLang === 'fr' ? 'Résultats Prouvés' : 'Proven Results'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                {currentLang === 'fr' ? 'Impact mesurable' : 'Measurable impact'}
              </h2>
            </div>
            <Link to="/case-studies" className="btn-secondary">
              {currentLang === 'fr' ? 'Toutes les études' : 'All case studies'}
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                metric: '+32%', 
                labelEn: 'Operational efficiency', 
                labelFr: 'Efficacité opérationnelle',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
                sector: 'Manufacturing'
              },
              { 
                metric: '-25%', 
                labelEn: 'Supply chain risk', 
                labelFr: 'Risque supply chain',
                image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
                sector: 'Automotive'
              },
              { 
                metric: '3x', 
                labelEn: 'Faster decisions', 
                labelFr: 'Décisions plus rapides',
                image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80',
                sector: 'Technology'
              },
            ].map((item, index) => (
              <Link
                key={index}
                to="/case-studies"
                className="group relative h-[400px] rounded-3xl overflow-hidden"
              >
                <img 
                  src={item.image} 
                  alt={currentLang === 'fr' ? item.labelFr : item.labelEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[#4ea5ff] text-sm font-medium mb-2">{item.sector}</span>
                  <div className="text-5xl font-bold text-white mb-2">{item.metric}</div>
                  <p className="text-white/80">
                    {currentLang === 'fr' ? item.labelFr : item.labelEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Preview */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4ea5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
                {currentLang === 'fr' ? 'Notre Équipe' : 'Our Team'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {currentLang === 'fr' 
                  ? 'Expertise combinée'
                  : 'Combined expertise'
                }
              </h2>
              <p className="text-[#a0aec0] text-lg leading-relaxed mb-8">
                {currentLang === 'fr'
                  ? 'Une équipe pluridisciplinaire alliant stratégie digitale, expertise technique et connaissance industrielle approfondie.'
                  : 'A multidisciplinary team combining digital strategy, technical expertise, and deep industrial knowledge.'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: '50+', labelEn: 'Years combined experience', labelFr: 'Années d\'expérience combinée' },
                  { value: '3', labelEn: 'Specialized domains', labelFr: 'Domaines spécialisés' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-[#4ea5ff]">{stat.value}</div>
                    <div className="text-sm text-[#718096]">
                      {currentLang === 'fr' ? stat.labelFr : stat.labelEn}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/team" className="btn-secondary bg-white text-[#207bff] border-none">
                {currentLang === 'fr' ? 'Rencontrer l\'équipe' : 'Meet the team'}
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { photo: 'https://i.ibb.co/N6Td5161/Untitled-design-5.png', name: 'Lucas A.' },
                { photo: 'https://i.ibb.co/gZS47BmH/Untitled-design-6.png', name: 'Ayoub B.' },
                { photo: 'https://i.ibb.co/DDKhbt2R/Untitled-design-7.png', name: 'David A.' },
              ].map((member, i) => (
                <div key={i} className="relative group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2">
                    <p className="text-white text-sm font-medium">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#207bff] to-[#1a62cc] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {currentLang === 'fr' 
              ? 'Prêt à clarifier vos décisions ?'
              : 'Ready to clarify your decisions?'
            }
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {currentLang === 'fr'
              ? 'Planifiez un échange confidentiel avec notre équipe pour discuter de vos enjeux stratégiques.'
              : 'Schedule a confidential discussion with our team to address your strategic challenges.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors text-lg"
            >
              {currentLang === 'fr' ? 'Planifier un Échange' : 'Schedule a Call'}
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/expertise" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-semibold rounded-sm border-2 border-white/30 hover:bg-white/10 transition-colors text-lg"
            >
              {currentLang === 'fr' ? 'Explorer nos Services' : 'Explore Services'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
