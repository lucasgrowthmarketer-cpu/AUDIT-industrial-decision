'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDown, 
  ChevronUp, 
  Target, 
  Lightbulb, 
  Award,
  Mail
} from 'lucide-react';

const teamMembers = [
  {
    id: 'lucas',
    name: 'Lucas A.',
    role: 'Founder & Strategic Architect',
    roleFr: 'Fondateur & Architecte Stratégique',
    photo: '/team/lucas.png',
    description: 'Specializes in digital strategy applied to industrial contexts. Lucas architects web ecosystems that function as decision support systems, not marketing tools.',
    descriptionFr: 'Spécialisé dans la stratégie digitale appliquée aux contextes industriels. Lucas conçoit des écosystèmes web qui fonctionnent comme des systèmes d\'aide à la décision.',
    decisionScope: 'Digital infrastructure strategy, website architecture, content systems, decision pathway optimization.',
    decisionScopeFr: 'Stratégie d\'infrastructure digitale, architecture web, systèmes de contenu, optimisation des parcours décisionnels.',
    contribution: 'System architecture design, decision-grade website frameworks, industrial content strategy, measurement protocols.',
    contributionFr: 'Design d\'architecture système, frameworks web décisionnels, stratégie de contenu industriel, protocoles de mesure.',
    expertise: ['Industrial web architecture', 'Decision support systems', 'Content strategy for B2B', 'Conversion optimization', 'Analytics & measurement'],
    expertiseFr: ['Architecture web industrielle', 'Systèmes d\'aide à la décision', 'Stratégie de contenu B2B', 'Optimisation de conversion', 'Analytics & mesure'],
    linkedin: 'https://www.linkedin.com/in/lucas-ansel',
    email: 'lucas@industrialdecision.com'
  },
  {
    id: 'ayoub',
    name: 'Ayoub B.',
    role: 'Chief Technology Officer',
    roleFr: 'Directeur Technique',
    photo: '/team/ayoub.png',
    description: 'Brings technical depth to industrial digital projects. Ayoub ensures that strategic concepts translate into robust, scalable implementations.',
    descriptionFr: 'Apporte une profondeur technique aux projets digitaux industriels. Ayoub garantit que les concepts stratégiques se traduisent en implémentations robustes.',
    decisionScope: 'Technical architecture, data systems, implementation quality, system integration.',
    decisionScopeFr: 'Architecture technique, systèmes de données, qualité d\'implémentation, intégration système.',
    contribution: 'Backend development, data pipeline design, API architecture, quality assurance, technical documentation.',
    contributionFr: 'Développement backend, conception de pipelines de données, architecture API, assurance qualité, documentation technique.',
    expertise: ['Full-stack development', 'Data engineering', 'System integration', 'Technical documentation', 'Quality assurance'],
    expertiseFr: ['Développement full-stack', 'Ingénierie des données', 'Intégration système', 'Documentation technique', 'Assurance qualité'],
    linkedin: '#',
    email: 'ayoub@industrialdecision.com'
  },
  {
    id: 'david',
    name: 'David A.',
    role: 'Industrial Operations & Strategic Advisory',
    roleFr: 'Opérations Industrielles & Conseil Stratégique',
    photo: '/team/david.png',
    description: 'Decades of experience in industrial operations provide the foundation for strategic credibility. David bridges the gap between digital capabilities and real-world industrial constraints.',
    descriptionFr: 'Des décennies d\'expérience en opérations industrielles fournissent le fondement de la crédibilité stratégique. David fait le pont entre les capacités digitales et les contraintes industrielles réelles.',
    decisionScope: 'Industrial operations, strategic positioning, stakeholder alignment, operational feasibility.',
    decisionScopeFr: 'Opérations industrielles, positionnement stratégique, alignement des parties prenantes, faisabilité opérationnelle.',
    contribution: 'Operational insight, industry credibility, strategic validation, stakeholder communication, risk assessment.',
    contributionFr: 'Insight opérationnel, crédibilité industrielle, validation stratégique, communication avec les parties prenantes, évaluation des risques.',
    expertise: ['Industrial operations', 'Strategic advisory', 'Stakeholder management', 'Risk assessment', 'Business development'],
    expertiseFr: ['Opérations industrielles', 'Conseil stratégique', 'Gestion des parties prenantes', 'Évaluation des risques', 'Développement commercial'],
    linkedin: '#',
    email: 'david@industrialdecision.com'
  }
];

function TeamMemberCard({ member, isExpanded, onToggle, lang }) {
  return (
    <div 
      className="team-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      data-testid={`team-card-${member.id}`}
    >
      {/* Photo */}
      <div className="relative h-80 overflow-hidden">
        <img loading="lazy" decoding="async" 
          src={member.photo} 
          alt={member.name} 
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-[#4ea5ff] font-medium">
            {lang === 'fr' ? member.roleFr : member.role}
          </p>
        </div>
      </div>
      
      {/* Quick Info */}
      <div className="p-6">
        <p className="text-[#4a5568] leading-relaxed mb-4">
          {lang === 'fr' ? member.descriptionFr : member.description}
        </p>
        
        <div className="flex gap-3 mb-4">
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#f0f7ff] rounded-lg flex items-center justify-center text-[#207bff] hover:bg-[#207bff] hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a 
            href={`mailto:${member.email}`}
            className="w-10 h-10 bg-[#f0f7ff] rounded-lg flex items-center justify-center text-[#207bff] hover:bg-[#207bff] hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
        
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#f5f7fa] rounded-lg text-[#4a5568] hover:bg-[#207bff] hover:text-white transition-colors"
        >
          <span className="font-medium">
            {isExpanded 
              ? (lang === 'fr' ? 'Voir moins' : 'Show less')
              : (lang === 'fr' ? 'En savoir plus' : 'Learn more')
            }
          </span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 space-y-6 animate-fade-in" data-testid={`team-details-${member.id}`}>
          <div className="h-px bg-slate-200" />
          
          {/* Decision Scope */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target size={18} className="text-[#207bff]" />
              <h4 className="font-semibold text-[#1a1a1a]">
                {lang === 'fr' ? 'Périmètre Décisionnel' : 'Decision Scope'}
              </h4>
            </div>
            <p className="text-[#4a5568] text-sm leading-relaxed pl-7">
              {lang === 'fr' ? member.decisionScopeFr : member.decisionScope}
            </p>
          </div>
          
          {/* Contribution */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={18} className="text-[#207bff]" />
              <h4 className="font-semibold text-[#1a1a1a]">
                {lang === 'fr' ? 'Contribution' : 'Contribution'}
              </h4>
            </div>
            <p className="text-[#4a5568] text-sm leading-relaxed pl-7">
              {lang === 'fr' ? member.contributionFr : member.contribution}
            </p>
          </div>
          
          {/* Expertise */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={18} className="text-[#207bff]" />
              <h4 className="font-semibold text-[#1a1a1a]">
                {lang === 'fr' ? 'Expertise Clé' : 'Core Expertise'}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 pl-7">
              {(lang === 'fr' ? member.expertiseFr : member.expertise).map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#f0f7ff] text-[#207bff] text-sm font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [expandedMember, setExpandedMember] = useState(null);

  const handleToggle = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <div className="animate-fade-in" data-testid="team-page">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">
              {currentLang === 'fr' ? 'Notre Équipe' : 'Our Team'}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              {currentLang === 'fr' 
                ? 'L\'Expertise au Service de vos Décisions'
                : 'Expertise Serving Your Decisions'
              }
            </h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              {currentLang === 'fr'
                ? 'Une équipe pluridisciplinaire combinant expertise technique, vision stratégique et connaissance approfondie des enjeux industriels.'
                : 'A multidisciplinary team combining technical expertise, strategic vision, and deep understanding of industrial challenges.'
              }
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                isExpanded={expandedMember === member.id}
                onToggle={() => handleToggle(member.id)}
                lang={currentLang}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Collective Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-premium text-center">
            <div className="line-decoration mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              {currentLang === 'fr' ? 'Notre Approche Collective' : 'Our Collective Approach'}
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed">
              {currentLang === 'fr'
                ? 'Nous croyons que les meilleures décisions émergent de la collaboration entre expertise technique, vision stratégique et connaissance terrain. Notre équipe fonctionne comme un système intégré où chaque membre apporte une perspective unique mais complémentaire.'
                : 'We believe that the best decisions emerge from collaboration between technical expertise, strategic vision, and field knowledge. Our team functions as an integrated system where each member brings a unique but complementary perspective.'
              }
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#4ea5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {currentLang === 'fr' 
              ? 'Travaillons Ensemble'
              : 'Let\'s Work Together'
            }
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {currentLang === 'fr'
              ? 'Discutons de vos enjeux et découvrez comment notre équipe peut vous accompagner.'
              : 'Let\'s discuss your challenges and discover how our team can support you.'
            }
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors"
          >
            {currentLang === 'fr' ? 'Prendre Contact' : 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}
