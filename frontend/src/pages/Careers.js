import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Briefcase, Users, ArrowRight, CheckCircle } from 'lucide-react';

const positions = [
  {
    id: 'strategy-consultant',
    titleEn: 'Strategy Consultant',
    titleFr: 'Consultant Stratégie',
    typeEn: 'Full-time',
    typeFr: 'CDI',
    locationEn: 'Paris / Remote',
    locationFr: 'Paris / Télétravail',
    descEn: 'Join our team to help industrial leaders make better strategic decisions.',
    descFr: 'Rejoignez notre équipe pour aider les dirigeants industriels à prendre de meilleures décisions stratégiques.'
  },
  {
    id: 'data-analyst',
    titleEn: 'Data Analyst',
    titleFr: 'Analyste Data',
    typeEn: 'Full-time',
    typeFr: 'CDI',
    locationEn: 'Paris / Remote',
    locationFr: 'Paris / Télétravail',
    descEn: 'Analyze industrial market data to drive actionable insights.',
    descFr: 'Analysez les données du marché industriel pour générer des insights actionnables.'
  }
];

const values = [
  { en: 'Rigor in analysis', fr: 'Rigueur dans l\'analyse' },
  { en: 'Clarity in communication', fr: 'Clarté dans la communication' },
  { en: 'Impact on decisions', fr: 'Impact sur les décisions' },
  { en: 'Continuous learning', fr: 'Apprentissage continu' }
];

export default function Careers() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="animate-fade-in" data-testid="careers-page">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#262626]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {currentLang === 'fr' ? 'Carrières' : 'Careers'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {currentLang === 'fr' 
              ? 'Rejoignez une équipe passionnée par la clarté stratégique et l\'impact industriel.'
              : 'Join a team passionate about strategic clarity and industrial impact.'}
          </p>
        </div>
      </section>
      
      {/* Culture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {currentLang === 'fr' ? 'Notre Culture' : 'Our Culture'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentLang === 'fr' 
                  ? 'Nous valorisons la rigueur intellectuelle, la clarté dans la communication et l\'impact mesurable sur les décisions de nos clients.'
                  : 'We value intellectual rigor, clarity in communication, and measurable impact on our clients\' decisions.'}
              </p>
              <div className="space-y-3">
                {values.map((value, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#10b981]" />
                    <span className="text-foreground">
                      {currentLang === 'fr' ? value.fr : value.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#2a2a2a] border border-white/5 rounded-lg p-8">
              <Users size={40} className="text-[#e89565] mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                {currentLang === 'fr' ? 'Équipe en croissance' : 'Growing Team'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === 'fr' 
                  ? 'Nous construisons une équipe de consultants et d\'analystes de premier plan.'
                  : 'We\'re building a team of top-tier consultants and analysts.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {currentLang === 'fr' ? 'Postes Ouverts' : 'Open Positions'}
          </h2>
          
          <div className="space-y-4">
            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-[#262626] border border-white/5 rounded-lg p-6 hover:border-[#e89565]/30 transition-all"
                data-testid={`position-${position.id}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={18} className="text-[#e89565]" />
                      <h3 className="text-lg font-bold text-foreground">
                        {currentLang === 'fr' ? position.titleFr : position.titleEn}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {currentLang === 'fr' ? position.descFr : position.descEn}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="badge badge-default">
                        {currentLang === 'fr' ? position.typeFr : position.typeEn}
                      </span>
                      <span>{currentLang === 'fr' ? position.locationFr : position.locationEn}</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="btn btn-secondary whitespace-nowrap"
                  >
                    {currentLang === 'fr' ? 'Postuler' : 'Apply'}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {currentLang === 'fr' ? 'Processus de Recrutement' : 'Hiring Process'}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {[
              { num: 1, en: 'Application', fr: 'Candidature' },
              { num: 2, en: 'Screening', fr: 'Présélection' },
              { num: 3, en: 'Case Study', fr: 'Étude de Cas' },
              { num: 4, en: 'Final Interview', fr: 'Entretien Final' }
            ].map((step, index) => (
              <React.Fragment key={step.num}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#e89565] rounded-full flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-[#262626]">{step.num}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {currentLang === 'fr' ? step.fr : step.en}
                  </span>
                </div>
                {index < 3 && (
                  <ArrowRight size={20} className="text-muted-foreground hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#e89565]/10 border-y border-[#e89565]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {currentLang === 'fr' ? 'Pas de poste correspondant ?' : 'No matching position?'}
          </h2>
          <p className="text-muted-foreground mb-8">
            {currentLang === 'fr' 
              ? 'Envoyez-nous une candidature spontanée.'
              : 'Send us a spontaneous application.'}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {currentLang === 'fr' ? 'Nous contacter' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
}
