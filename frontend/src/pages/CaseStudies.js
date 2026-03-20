import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, MapPin, Search, Target, Zap, Shield, ChevronRight, BarChart3, Factory } from 'lucide-react';
import { proofBlocks } from '../data/proof_blocks';

/* Accent colors per case study for visual variety */
const accents = ['#207bff', '#4ea5ff', '#10b981', '#e89565', '#207bff'];
const images = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
];

export default function CaseStudies() {
  const { i18n } = useTranslation();
  const L = i18n.language;

  return (
    <div className="animate-fade-in" data-testid="case-studies-page">

      {/* ── HERO — About style ── */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1400"
              alt="Industrial"
              className="w-full h-[200px] md:h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#207bff]">
                <BarChart3 className="w-3 h-3" /> {L === 'fr' ? '5 Études de cas' : '5 Case studies'}
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {L === 'fr' ? (
                <>Résultats <span className="text-[#207bff]">mesurables</span>{' '}<span className="text-[#718096]">sur des missions réelles.</span></>
              ) : (
                <><span className="text-[#207bff]">Measurable</span> results{' '}<span className="text-[#718096]">from real engagements.</span></>
              )}
            </h1>
            <div className="space-y-5">
              <p className="text-[#4a5568] leading-relaxed text-lg">
                {L === 'fr'
                  ? 'Tous les cas sont anonymisés pour respecter la confidentialité. Chaque métrique est vérifiable et liée à un livrable concret de notre méthodologie.'
                  : 'All cases are anonymized to respect confidentiality. Every metric is verifiable and linked to a concrete deliverable from our methodology.'}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#207bff] text-white rounded-lg text-sm font-semibold hover:bg-[#1a62cc] transition-all group">
                {L === 'fr' ? 'Obtenir des résultats similaires' : 'Get similar results'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES — Bento grid per study ── */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          {proofBlocks.map((pb, idx) => (
            <CaseStudyBento key={pb.id} pb={pb} lang={L} accent={accents[idx] || '#207bff'} image={images[idx]} index={idx} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {L === 'fr' ? 'Vous voulez des résultats similaires ?' : 'Want similar results?'}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            {L === 'fr' ? 'Chaque mission commence par un audit DRS. Discutons de votre contexte.' : 'Every engagement starts with a DRS audit. Let\'s discuss your context.'}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors text-lg">
            {L === 'fr' ? 'Demander un audit' : 'Request an audit'} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ════════════════════════════════════════════
   BENTO GRID PER CASE STUDY
   ════════════════════════════════════════════ */
function CaseStudyBento({ pb, lang, accent, image, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(120px,auto)]">

      {/* ─ Card 1: Company + sector — tall (span 2 col, 3 rows) ─ */}
      <div className={`md:col-span-2 md:row-span-3 rounded-2xl overflow-hidden relative ${isEven ? 'md:order-1' : 'md:order-4'}`}>
        <img src={image} alt={pb.company} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-white" style={{ background: accent }}>{lang === 'fr' ? pb.sectorFr : pb.sector}</span>
            <span className="flex items-center gap-1 text-white/60 text-[10px]"><MapPin className="w-3 h-3" />{pb.region}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{pb.company}</h3>
          <div className="flex items-center gap-2 text-white/50 text-xs">
            <Clock className="w-3 h-3" /> {pb.timeframe}
          </div>
        </div>
      </div>

      {/* ─ Card 2: Challenge ─ */}
      <div className={`md:col-span-2 bg-white rounded-2xl p-6 border border-[#e2e8f0] flex flex-col justify-between ${isEven ? 'md:order-2' : 'md:order-5'}`}>
        <div>
          <span className="text-[10px] font-semibold text-[#ef4444] uppercase tracking-wider">{lang === 'fr' ? 'Problème' : 'Challenge'}</span>
          <p className="text-[#1a1a1a] text-sm leading-relaxed mt-2 font-medium">{lang === 'fr' ? pb.challengeFr : pb.challenge}</p>
        </div>
        <div className="mt-4 w-full h-1 rounded-full bg-[#fef2f2]">
          <div className="h-full rounded-full bg-[#ef4444]/60" style={{ width: '100%' }} />
        </div>
      </div>

      {/* ─ Card 3: Intervention ─ */}
      <div className={`md:col-span-2 bg-white rounded-2xl p-6 border border-[#e2e8f0] flex flex-col justify-between ${isEven ? 'md:order-3' : 'md:order-6'}`}>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: accent }}>{lang === 'fr' ? 'Intervention' : 'Intervention'}</span>
          <p className="text-[#1a1a1a] text-sm leading-relaxed mt-2 font-medium">{lang === 'fr' ? pb.interventionFr : pb.intervention}</p>
        </div>
        <div className="mt-4 w-full h-1 rounded-full bg-[#f0f7ff]">
          <div className="h-full rounded-full" style={{ width: '100%', background: `${accent}60` }} />
        </div>
      </div>

      {/* ─ Cards 4-6: Metrics — each metric gets its own card ─ */}
      {pb.metrics.map((m, i) => {
        const isLast = i === pb.metrics.length - 1;
        return (
          <div
            key={i}
            className={`md:col-span-2 rounded-2xl p-6 flex flex-col justify-between border transition-all hover:-translate-y-0.5 ${
              isLast
                ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white'
                : 'bg-white border-[#e2e8f0]'
            } ${isEven ? `md:order-${i + 4}` : `md:order-${i + 1}`}`}
          >
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isLast ? 'text-white/50' : 'text-[#718096]'}`}>
              {lang === 'fr' ? m.labelFr : m.label}
            </span>

            <div className="mt-3">
              {m.improvement && (
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl md:text-5xl font-bold ${isLast ? 'text-white' : ''}`} style={!isLast ? { color: accent } : {}}>
                    {m.improvement}
                  </span>
                </div>
              )}
              {m.before && m.after && (
                <div className={`text-sm mt-1 ${isLast ? 'text-white/60' : 'text-[#718096]'}`}>
                  {m.before} → {m.after}
                </div>
              )}
              {m.isIndex && (
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl md:text-5xl font-bold ${isLast ? 'text-white' : ''}`} style={!isLast ? { color: accent } : {}}>
                    {m.value}
                  </span>
                  <span className={`text-sm ${isLast ? 'text-white/50' : 'text-[#718096]'}`}>{m.label && m.label.includes('DRS') ? '/4' : '/100'}</span>
                </div>
              )}
            </div>

            {/* Mini progress bar */}
            <div className={`mt-4 w-full h-1.5 rounded-full ${isLast ? 'bg-white/10' : 'bg-[#f5f7fa]'}`}>
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: m.isIndex ? (m.label && m.label.includes('DRS') ? `${(parseFloat(m.value)/4)*100}%` : `${m.value}%`) : m.improvement ? `${Math.min(Math.abs(parseInt(m.improvement)), 100)}%` : '50%',
                  background: isLast ? 'white' : accent,
                  opacity: isLast ? 0.6 : 1,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
