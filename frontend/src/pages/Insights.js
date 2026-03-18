import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BarChart3 } from 'lucide-react';

const insights = [
  {
    id: 'benchmark-oem-2025',
    type: 'report',
    titleEn: 'DRS Benchmark: 30 Machine-Tool OEM Websites',
    titleFr: 'Benchmark DRS : 30 Sites Web OEM Machines-Outils',
    excerptEn: 'How do DMG MORI, Mazak, Hermle, AMADA and 26 others score on decision readiness? Our audit of 30 OEM websites reveals systematic gaps in how industrial sites support buyer decisions.',
    excerptFr: 'Comment DMG MORI, Mazak, Hermle, AMADA et 26 autres se positionnent-ils en maturité décisionnelle ? Notre audit de 30 sites OEM révèle des lacunes systématiques.',
    status: 'available',
    statusLabelEn: 'Available on request',
    statusLabelFr: 'Disponible sur demande',
  },
  {
    id: 'market-pressure-france-2025',
    type: 'data',
    titleEn: 'Industrial Pressure Map: France 2021-2025',
    titleFr: 'Carte de Pression Industrielle : France 2021-2025',
    excerptEn: 'Regional analysis of 51,000+ business failures across 13 French regions. Which areas face the most pressure? How has the trend evolved over 5 years?',
    excerptFr: 'Analyse régionale de 51 000+ défaillances sur 13 régions françaises. Quelles zones sont les plus touchées ? Comment la tendance a-t-elle évolué sur 5 ans ?',
    status: 'demo',
    statusLabelEn: 'Shown in demo meetings',
    statusLabelFr: 'Présenté en rendez-vous démo',
  },
];

export default function Insights() {
  const { i18n } = useTranslation();
  const L = i18n.language;
  return (
    <div className="animate-fade-in" data-testid="insights-page">
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">{L==='fr'?'Ressources':'Resources'}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">{L==='fr'?'Nos études et données':'Our studies and data'}</h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">{L==='fr'?'Des analyses basées sur nos données propriétaires. Disponibles sur demande ou présentées en rendez-vous.':'Analyses based on our proprietary data. Available on request or presented in meetings.'}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {insights.map(article => (
              <div key={article.id} className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0f7ff] rounded-xl flex items-center justify-center flex-shrink-0">
                    {article.type === 'report' ? <FileText size={24} className="text-[#207bff]"/> : <BarChart3 size={24} className="text-[#207bff]"/>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#207bff] bg-[#f0f7ff] px-2 py-1 rounded">{article.type}</span>
                      <span className="text-xs text-[#718096]">{L==='fr'?article.statusLabelFr:article.statusLabelEn}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{L==='fr'?article.titleFr:article.titleEn}</h3>
                    <p className="text-[#4a5568] leading-relaxed mb-4">{L==='fr'?article.excerptFr:article.excerptEn}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#207bff] font-medium hover:gap-3 transition-all">
                      {L==='fr'?'Demander l\'accès':'Request access'}<ArrowRight size={16}/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">{L==='fr'?'Vous voulez voir nos données en direct ?':'Want to see our data live?'}</h2>
          <p className="text-[#4a5568] mb-8">{L==='fr'?'Réservez une démo et nous vous montrons notre plateforme d\'intelligence décisionnelle avec vos données de marché.':'Book a demo and we\'ll show you our decision intelligence platform with your market data.'}</p>
          <Link to="/contact" className="btn-primary">{L==='fr'?'Réserver une démo':'Book a demo'}<ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  );
}
