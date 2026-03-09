import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  History,
  Globe
} from 'lucide-react';

const values = [
  {
    icon: Target,
    titleEn: 'Rigor',
    titleFr: 'Rigueur',
    descEn: 'Data-verified analyses, transparent methodologies, measurable results.',
    descFr: 'Analyses vérifiées par les données, méthodologies transparentes, résultats mesurables.'
  },
  {
    icon: Globe,
    titleEn: 'Clarity',
    titleFr: 'Clarté',
    descEn: 'Direct communication, jargon-free, action-oriented recommendations.',
    descFr: 'Communication directe, sans jargon, recommandations orientées action.'
  },
  {
    icon: Users,
    titleEn: 'Partnership',
    titleFr: 'Partenariat',
    descEn: 'Long-term relationships built on trust and shared success.',
    descFr: 'Relations durables fondées sur la confiance et le succès partagé.'
  },
  {
    icon: Award,
    titleEn: 'Excellence',
    titleFr: 'Excellence',
    descEn: 'Commitment to delivering exceptional value in every engagement.',
    descFr: 'Engagement à délivrer une valeur exceptionnelle à chaque mission.'
  }
];

const milestones = [
  { year: '2020', titleEn: 'Foundation', titleFr: 'Fondation', descEn: 'Industrial Decision is founded in Paris', descFr: 'Industrial Decision est fondé à Paris' },
  { year: '2021', titleEn: 'First Major Client', titleFr: 'Premier Client Majeur', descEn: 'Engagement with leading OEM manufacturer', descFr: 'Mission avec un fabricant OEM leader' },
  { year: '2022', titleEn: 'Team Expansion', titleFr: 'Expansion de l\'Équipe', descEn: 'Growth to full-service consulting firm', descFr: 'Évolution vers un cabinet de conseil complet' },
  { year: '2023', titleEn: 'Market Leadership', titleFr: 'Leadership de Marché', descEn: '30+ companies benchmarked, 66K+ failures analyzed', descFr: '30+ entreprises auditées, 66K+ défaillances analysées' },
  { year: '2024', titleEn: 'Innovation', titleFr: 'Innovation', descEn: 'Launch of decision-grade methodology framework', descFr: 'Lancement du framework méthodologique décisionnel' }
];

export default function About() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="animate-fade-in" data-testid="about-page">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">
                {currentLang === 'fr' ? 'À Propos' : 'About Us'}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                {currentLang === 'fr' 
                  ? 'Clarifier les Décisions Industrielles'
                  : 'Clarifying Industrial Decisions'
                }
              </h1>
              <p className="text-xl text-[#4a5568] leading-relaxed mb-8">
                {currentLang === 'fr'
                  ? 'Dans un contexte de plus de 66 000 défaillances d\'entreprises en France, les dirigeants industriels ont besoin de clarté stratégique. Industrial Decision fournit les méthodologies et l\'accompagnement nécessaires.'
                  : 'In a context of over 66,000 business failures in France, industrial leaders need strategic clarity. Industrial Decision provides the methodologies and guidance needed.'
                }
              </p>
              <Link to="/contact" className="btn-primary">
                {currentLang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Office"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#207bff] rounded-xl p-6 text-white shadow-lg">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm opacity-80">
                  {currentLang === 'fr' ? 'Années d\'Excellence' : 'Years of Excellence'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
              {currentLang === 'fr' ? 'Notre Mission' : 'Our Mission'}
            </h2>
            <div className="quote-block text-left bg-[#f5f7fa] rounded-2xl p-8 md:p-12">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] font-medium leading-relaxed">
                {currentLang === 'fr'
                  ? 'Transformer l\'incertitude industrielle en clarté décisionnelle, en combinant données rigoureuses, expertise sectorielle et méthodologies éprouvées.'
                  : 'Transform industrial uncertainty into decision clarity, combining rigorous data, sector expertise, and proven methodologies.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-label">
              {currentLang === 'fr' ? 'Nos Valeurs' : 'Our Values'}
            </span>
            <h2 className="section-title">
              {currentLang === 'fr' ? 'Ce Qui Nous Guide' : 'What Guides Us'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="card-premium text-center hover-lift"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#f0f7ff] rounded-2xl flex items-center justify-center">
                    <Icon size={28} className="text-[#207bff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                    {currentLang === 'fr' ? value.titleFr : value.titleEn}
                  </h3>
                  <p className="text-[#4a5568] leading-relaxed">
                    {currentLang === 'fr' ? value.descFr : value.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <span className="section-label">
              {currentLang === 'fr' ? 'Notre Histoire' : 'Our Journey'}
            </span>
            <h2 className="section-title">
              {currentLang === 'fr' ? 'Jalons Clés' : 'Key Milestones'}
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="flex items-start gap-6">
                    <div className="text-3xl font-bold text-[#207bff] min-w-[80px]">
                      {milestone.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                        {currentLang === 'fr' ? milestone.titleFr : milestone.titleEn}
                      </h3>
                      <p className="text-[#4a5568]">
                        {currentLang === 'fr' ? milestone.descFr : milestone.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#4ea5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {currentLang === 'fr' 
              ? 'Prêt à Travailler avec Nous ?'
              : 'Ready to Work with Us?'
            }
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team" className="btn-secondary bg-white text-[#207bff] border-none">
              {currentLang === 'fr' ? 'Rencontrer l\'Équipe' : 'Meet the Team'}
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors">
              {currentLang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
