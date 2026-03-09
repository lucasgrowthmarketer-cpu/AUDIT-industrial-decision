import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Building2, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    sector: 'Manufacturing',
    sectorFr: 'Industrie Manufacturière',
    titleEn: 'Restructuring Strategy for Major OEM',
    titleFr: 'Stratégie de Restructuration pour OEM Majeur',
    descEn: 'A leading automotive supplier facing market pressure needed a clear strategic roadmap to navigate restructuring decisions.',
    descFr: 'Un équipementier automobile majeur face à la pression du marché avait besoin d\'une feuille de route stratégique claire.',
    challenge: { en: 'Declining margins and increased competition', fr: 'Marges en baisse et concurrence accrue' },
    solution: { en: 'Comprehensive market analysis and strategic repositioning', fr: 'Analyse de marché complète et repositionnement stratégique' },
    results: [
      { value: '+32%', labelEn: 'Operational efficiency', labelFr: 'Efficacité opérationnelle' },
      { value: '-18%', labelEn: 'Cost reduction', labelFr: 'Réduction des coûts' },
      { value: '6 mo', labelEn: 'Time to results', labelFr: 'Délai de résultats' }
    ],
    duration: '6 months'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
    sector: 'Automotive',
    sectorFr: 'Automobile',
    titleEn: 'Supply Chain Optimization Program',
    titleFr: 'Programme d\'Optimisation Supply Chain',
    descEn: 'An automotive OEM sought to optimize their supplier network and reduce supply chain vulnerabilities.',
    descFr: 'Un OEM automobile cherchait à optimiser son réseau de fournisseurs et réduire les vulnérabilités supply chain.',
    challenge: { en: 'Complex supplier network with high risk exposure', fr: 'Réseau fournisseurs complexe avec exposition au risque élevée' },
    solution: { en: 'Data-driven supplier assessment and consolidation strategy', fr: 'Évaluation fournisseurs basée sur les données et stratégie de consolidation' },
    results: [
      { value: '-25%', labelEn: 'Supplier risk', labelFr: 'Risque fournisseur' },
      { value: '-18%', labelEn: 'Procurement costs', labelFr: 'Coûts d\'achat' },
      { value: '12 mo', labelEn: 'Time to results', labelFr: 'Délai de résultats' }
    ],
    duration: '12 months'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=800&q=80',
    sector: 'Technology',
    sectorFr: 'Technologie',
    titleEn: 'Digital Transformation Program',
    titleFr: 'Programme de Transformation Digitale',
    descEn: 'An industrial tech company needed to accelerate their digital capabilities while maintaining operational excellence.',
    descFr: 'Une entreprise tech industrielle devait accélérer ses capacités digitales tout en maintenant l\'excellence opérationnelle.',
    challenge: { en: 'Legacy systems limiting growth potential', fr: 'Systèmes legacy limitant le potentiel de croissance' },
    solution: { en: 'Phased digital transformation with clear ROI milestones', fr: 'Transformation digitale par phases avec jalons ROI clairs' },
    results: [
      { value: '3x', labelEn: 'Faster decisions', labelFr: 'Décisions plus rapides' },
      { value: '+45%', labelEn: 'Process efficiency', labelFr: 'Efficacité des processus' },
      { value: '9 mo', labelEn: 'Time to results', labelFr: 'Délai de résultats' }
    ],
    duration: '9 months'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    sector: 'Logistics',
    sectorFr: 'Logistique',
    titleEn: 'Network Optimization Initiative',
    titleFr: 'Initiative d\'Optimisation Réseau',
    descEn: 'A logistics provider needed to optimize their distribution network while preparing for market expansion.',
    descFr: 'Un prestataire logistique devait optimiser son réseau de distribution tout en préparant son expansion.',
    challenge: { en: 'Inefficient network with high operating costs', fr: 'Réseau inefficient avec coûts opérationnels élevés' },
    solution: { en: 'Network modeling and strategic hub placement', fr: 'Modélisation réseau et placement stratégique des hubs' },
    results: [
      { value: '-22%', labelEn: 'Operating costs', labelFr: 'Coûts opérationnels' },
      { value: '+35%', labelEn: 'Delivery speed', labelFr: 'Vitesse de livraison' },
      { value: '8 mo', labelEn: 'Time to results', labelFr: 'Délai de résultats' }
    ],
    duration: '8 months'
  }
];

export default function CaseStudies() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="animate-fade-in" data-testid="case-studies-page">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">
              {currentLang === 'fr' ? 'Études de Cas' : 'Case Studies'}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              {currentLang === 'fr' 
                ? 'Résultats Concrets et Vérifiables'
                : 'Concrete and Verifiable Results'
              }
            </h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">
              {currentLang === 'fr'
                ? 'Découvrez comment nous avons accompagné des leaders industriels à travers leurs décisions stratégiques les plus critiques.'
                : 'Discover how we\'ve guided industrial leaders through their most critical strategic decisions.'
              }
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                data-testid={`case-study-${study.id}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={study.image} 
                      alt={currentLang === 'fr' ? study.titleFr : study.titleEn}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-primary bg-white">
                        {currentLang === 'fr' ? study.sectorFr : study.sector}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                    {currentLang === 'fr' ? study.titleFr : study.titleEn}
                  </h2>
                  <p className="text-[#4a5568] leading-relaxed mb-6">
                    {currentLang === 'fr' ? study.descFr : study.descEn}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#ef4444]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#ef4444] text-sm font-bold">!</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#1a1a1a]">
                          {currentLang === 'fr' ? 'Challenge' : 'Challenge'}:
                        </span>
                        <span className="text-[#4a5568] ml-2">
                          {currentLang === 'fr' ? study.challenge.fr : study.challenge.en}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-[#207bff] flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-[#1a1a1a]">
                          {currentLang === 'fr' ? 'Solution' : 'Solution'}:
                        </span>
                        <span className="text-[#4a5568] ml-2">
                          {currentLang === 'fr' ? study.solution.fr : study.solution.en}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 bg-white rounded-xl p-6 shadow-sm">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-[#207bff]">{result.value}</div>
                        <div className="text-xs text-[#718096]">
                          {currentLang === 'fr' ? result.labelFr : result.labelEn}
                        </div>
                      </div>
                    ))}
                  </div>
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
            {currentLang === 'fr' 
              ? 'Votre Prochain Succès Commence Ici'
              : 'Your Next Success Starts Here'
            }
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {currentLang === 'fr'
              ? 'Discutons de vos enjeux et découvrons comment nous pouvons vous accompagner.'
              : 'Let\'s discuss your challenges and discover how we can support you.'
            }
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors">
            {currentLang === 'fr' ? 'Planifier une Discussion' : 'Schedule a Discussion'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      
      {/* Confidentiality Note */}
      <section className="py-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#718096]">
            {currentLang === 'fr'
              ? 'Toutes les études de cas sont anonymisées pour protéger la confidentialité de nos clients. Les KPIs présentés sont vérifiés et validés.'
              : 'All case studies are anonymized to protect client confidentiality. Presented KPIs are verified and validated.'
            }
          </p>
        </div>
      </section>
    </div>
  );
}
