import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Target, Users, Globe, Award, ArrowRight } from 'lucide-react';

const values = [
  { icon: Target, titleEn: 'Rigor', titleFr: 'Rigueur', descEn: 'Data-verified analyses. Transparent methodologies. Measurable results. No vanity metrics.', descFr: 'Analyses vérifiées par les données. Méthodologies transparentes. Résultats mesurables. Pas de vanity metrics.' },
  { icon: Globe, titleEn: 'Clarity', titleFr: 'Clarté', descEn: 'Direct communication, jargon-free, action-oriented. We say what we do and do what we say.', descFr: 'Communication directe, sans jargon, orientée action. On dit ce qu\'on fait et on fait ce qu\'on dit.' },
  { icon: Users, titleEn: 'Specialization', titleFr: 'Spécialisation', descEn: 'We don\'t do everything for everyone. We do digital strategy for industrial actors in France. Period.', descFr: 'Nous ne faisons pas tout pour tout le monde. Nous faisons la stratégie digitale pour l\'industrie en France. Point.' },
  { icon: Award, titleEn: 'Proof', titleFr: 'Preuve', descEn: 'Every recommendation we make is backed by our benchmark of 30 OEMs and 51,000+ failure analyses.', descFr: 'Chaque recommandation s\'appuie sur notre benchmark de 30 OEM et 51 000+ analyses de défaillances.' },
];

export default function About() {
  const { i18n } = useTranslation();
  const L = i18n.language;
  return (
    <div className="animate-fade-in" data-testid="about-page">
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">{L==='fr'?'À Propos':'About Us'}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">{L==='fr'?'Le conseil digital qui parle industrie':'The digital advisory that speaks industry'}</h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              {L==='fr'
                ?'Industrial Decision est né d\'un constat simple : les sites web industriels ne sont pas conçus pour aider les décideurs à décider. Nous avons audité 30 OEM de la machine-outil, analysé plus de 51 000 défaillances d\'entreprises en France, et construit une méthodologie propriétaire pour y remédier.'
                :'Industrial Decision was born from a simple observation: industrial websites aren\'t designed to help decision-makers decide. We audited 30 machine-tool OEMs, analyzed 51,000+ business failures in France, and built a proprietary methodology to fix that.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">{L==='fr'?'Ce que nous faisons':'What we do'}</h2>
            <div className="bg-[#f5f7fa] rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-[#1a1a1a] font-medium leading-relaxed">
                {L==='fr'
                  ?'Nous auditons et transformons les sites web d\'acteurs de la machine-outil, de la restructuration industrielle et des services industriels en France. Notre objectif : que chaque visite d\'un décideur industriel sur votre site le rapproche d\'une décision, pas d\'une hésitation.'
                  :'We audit and transform the websites of machine-tool actors, industrial restructuring firms, and industrial service providers in France. Our goal: every visit from an industrial decision-maker should bring them closer to a decision, not to hesitation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{L==='fr'?'Nos Principes':'Our Principles'}</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">{L==='fr'?'Ce qui nous guide':'What guides us'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v,i)=>{const I=v.icon;return(<div key={i} className="card-premium text-center hover-lift"><div className="w-16 h-16 mx-auto mb-6 bg-[#f0f7ff] rounded-2xl flex items-center justify-center"><I size={28} className="text-[#207bff]"/></div><h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{L==='fr'?v.titleFr:v.titleEn}</h3><p className="text-[#4a5568] leading-relaxed">{L==='fr'?v.descFr:v.descEn}</p></div>)})}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">{L==='fr'?'Notre Méthodologie':'Our Methodology'}</span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">{L==='fr'?'Indices propriétaires':'Proprietary indices'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {name:'DRS',full:'Decision Readiness Score',fullFr:'Score de Maturité Décisionnelle',dEn:'Measures how well a website supports industrial decision-making, scored 1-4 across scenarios, process, proof, and entry points.',dFr:'Mesure la capacité d\'un site à soutenir la décision industrielle, noté 1-4 sur scénarios, processus, preuve et points d\'entrée.'},
              {name:'URI',full:'Uncertainty Reduction Index',fullFr:'Indice de Réduction d\'Incertitude',dEn:'Quantifies how much a website reduces buyer uncertainty at each stage of the decision journey.',dFr:'Quantifie la réduction d\'incertitude pour l\'acheteur à chaque étape du parcours de décision.'},
              {name:'IPI',full:'Industrial Pressure Index',fullFr:'Indice de Pression Industrielle',dEn:'Composite index tracking industrial failure pressure across 13 French regions using Banque de France and Altares data.',dFr:'Indice composite suivant la pression de défaillance industrielle sur 13 régions françaises via Banque de France et Altares.'},
            ].map((idx,i)=>(<div key={i} className="bg-[#f5f7fa] rounded-xl p-8"><div className="text-3xl font-bold text-[#207bff] mb-1">{idx.name}</div><div className="text-sm text-[#718096] mb-4">{L==='fr'?idx.fullFr:idx.full}</div><p className="text-[#4a5568] leading-relaxed">{L==='fr'?idx.dFr:idx.dEn}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#4ea5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{L==='fr'?'Envie d\'en savoir plus ?':'Want to know more?'}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team" className="btn-secondary bg-white text-[#207bff] border-none">{L==='fr'?'Rencontrer l\'équipe':'Meet the team'}</Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors">{L==='fr'?'Nous contacter':'Contact us'}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
