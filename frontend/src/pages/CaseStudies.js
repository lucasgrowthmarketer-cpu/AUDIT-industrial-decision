import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { proofBlocks } from '../data/proof_blocks';

export default function CaseStudies() {
  const { i18n } = useTranslation();
  const L = i18n.language;
  return (
    <div className="animate-fade-in" data-testid="case-studies-page">
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f5f7fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">{L==='fr'?'Résultats':'Results'}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">{L==='fr'?'Études de cas anonymisées':'Anonymized case studies'}</h1>
            <p className="text-xl text-[#4a5568] leading-relaxed">{L==='fr'?'Des résultats mesurables sur des missions réelles. Tous les cas sont anonymisés pour respecter la confidentialité de nos clients.':'Measurable results from real engagements. All cases are anonymized to respect client confidentiality.'}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {proofBlocks.map(pb => (
              <div key={pb.id} className="bg-white rounded-xl p-8 md:p-10 border border-slate-100 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-[#207bff] bg-[#f0f7ff] px-3 py-1 rounded-full">{L==='fr'?pb.sectorFr:pb.sector}</span>
                      <span className="text-sm text-[#718096]">{pb.region}</span>
                      <span className="text-sm text-[#718096] flex items-center gap-1"><Clock size={12}/>{pb.timeframe}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{pb.company}</h3>
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-[#718096] uppercase tracking-wider">{L==='fr'?'Problème':'Challenge'}</span>
                      <p className="text-[#4a5568] mt-1">{L==='fr'?pb.challengeFr:pb.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#718096] uppercase tracking-wider">{L==='fr'?'Intervention':'Intervention'}</span>
                      <p className="text-[#4a5568] mt-1">{L==='fr'?pb.interventionFr:pb.intervention}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="space-y-3">
                      {pb.metrics.map((m, i) => (
                        <div key={i} className="bg-[#f5f7fa] rounded-lg p-4">
                          <div className="text-xs text-[#718096] mb-1">{L==='fr'?m.labelFr:m.label}</div>
                          {m.improvement && <div className="text-xl font-bold text-[#207bff]">{m.improvement}</div>}
                          {m.before && m.after && <div className="text-sm text-[#4a5568]">{m.before} → {m.after}</div>}
                          {m.isIndex && <div className="text-xl font-bold text-[#207bff]">{m.value}/100</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{L==='fr'?'Vous voulez des résultats similaires ?':'Want similar results?'}</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-sm hover:bg-[#f0f7ff] transition-colors text-lg">{L==='fr'?'Demander un audit':'Request an audit'}<ArrowRight size={20}/></Link>
        </div>
      </section>
    </div>
  );
}
