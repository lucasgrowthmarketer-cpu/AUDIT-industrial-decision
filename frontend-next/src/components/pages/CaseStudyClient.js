'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Cog, Layers, MapPin, FileText, Wrench, Quote, AlertTriangle,
} from 'lucide-react';

const ICONS = { Cog, Layers, MapPin, FileText, Wrench };

const ANIMS = [
  'cs-float 6s ease-in-out infinite',
  'cs-pulse 4s ease-in-out infinite',
  'cs-tilt 5.5s ease-in-out infinite',
  'cs-drift 8s ease-in-out infinite',
  'cs-glow 7s ease-in-out infinite',
];

/* Revele au scroll */
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

export default function CaseStudyClient({ data }) {
  const [bentoRef, bentoSeen] = useReveal(0.15);

  return (
    <div data-testid="case-study">

      {/* Animations du bento */}
      <style>{`
        @keyframes cs-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6%)} }
        @keyframes cs-pulse { 0%,100%{transform:scale(1);opacity:.85} 50%{transform:scale(1.08);opacity:1} }
        @keyframes cs-tilt  { 0%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} 100%{transform:rotate(-2deg)} }
        @keyframes cs-drift { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(6%,-6%,0)} }
        @keyframes cs-glow  { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes cs-card  { 0%{opacity:0;transform:translate3d(0,18px,0) scale(.96)} 100%{opacity:1;transform:none} }
        @keyframes cs-intro { 0%{opacity:0;transform:translate3d(0,28px,0)} 100%{opacity:1;transform:none} }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section className="pt-8 pb-14 md:pt-12 md:pb-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-4">
            {data.hero.kicker}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug mb-5 max-w-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {data.hero.headline}
          </h1>
          <p className="text-[#4a5568] leading-relaxed text-lg max-w-2xl mb-8">{data.hero.sub}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#718096] mb-10">
            <span>{data.secteur}</span>
            <span className="text-[#cbd5e1]">·</span>
            <span>{data.ville}</span>
            <span className="text-[#cbd5e1]">·</span>
            <span>{data.duree}</span>
            <span className="text-[#cbd5e1]">·</span>
            <a
              href={`https://www.${data.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#207bff] hover:underline"
            >
              {data.site}
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e2e8f0]">
            <img
              src={data.hero.image}
              alt={`Site ${data.client} sur ordinateur et mobile`}
              className="w-full h-auto"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ═══ KPI ═══ */}
      <section className="py-10 bg-[#f5f7fa] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.kpis.map((k, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tabular-nums">{k.v}</div>
                <div className="text-xs text-[#718096] mt-1 leading-snug">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLÈME ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {data.probleme.h2}
            </h2>
            <div className="space-y-5">
              {data.probleme.body.map((p, i) => (
                <p key={i} className="text-[#4a5568] leading-relaxed text-lg">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENTO ═══ */}
      <section ref={bentoRef} className="py-20 md:py-28 bg-[#fafbfc] border-y border-[#e2e8f0]">
        <div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          style={bentoSeen ? { animation: 'cs-intro .9s ease-out forwards' } : { opacity: 0 }}
        >
          <div className="mb-10 pb-6 border-b border-[#e2e8f0] flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#94a3b8] block mb-2">
                Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {data.bento.h2}
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[#718096] leading-relaxed">{data.bento.intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
            {data.bento.items.map((it, i) => {
              const Icon = ICONS[it.icon] || Cog;
              return (
                <article
                  key={i}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#207bff]/40 hover:shadow-[0_20px_60px_rgba(32,123,255,0.08)] ${it.span}`}
                  style={
                    bentoSeen
                      ? { animation: `cs-card .8s ease-out ${i * 0.1}s forwards`, opacity: 0 }
                      : { opacity: 0 }
                  }
                >
                  <div
                    className="absolute inset-0 -z-10 opacity-60"
                    style={{
                      background:
                        'radial-gradient(ellipse 60% 120% at 12% 0%, rgba(32,123,255,0.07), transparent 72%)',
                    }}
                  />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e2e8f0] bg-white flex-shrink-0">
                      <Icon
                        className="h-6 w-6 text-[#207bff]"
                        strokeWidth={1.5}
                        style={{ animation: ANIMS[i % ANIMS.length] }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <header className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-base font-bold text-[#1a1a1a]">{it.t}</h3>
                        <span className="ml-auto text-lg font-bold text-[#207bff] tabular-nums">
                          {it.v}
                        </span>
                      </header>
                      <p className="text-sm leading-relaxed text-[#718096]">{it.d}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {data.bento.image && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#e2e8f0]">
              <img src={data.bento.image} alt="Pages du site ALMA" className="w-full" loading="lazy" />
            </div>
          )}
        </div>
      </section>

      {/* ═══ SECTIONS ═══ */}
      {data.sections.map((s, i) => (
        <section key={i} className={i % 2 === 0 ? 'py-20 md:py-28 bg-white' : 'py-20 md:py-28 bg-[#fafbfc]'}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
              {s.kicker}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 max-w-3xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {s.h2}
            </h2>
            <div className="space-y-5 max-w-3xl">
              {s.body.map((p, j) => (
                <p key={j} className="text-[#4a5568] leading-relaxed text-lg">{p}</p>
              ))}
            </div>

            {s.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {s.stats.map((st, j) => (
                  <div key={j} className="bg-white border border-[#e2e8f0] rounded-2xl p-5">
                    <div className="text-2xl font-bold text-[#1a1a1a] tabular-nums">{st.v}</div>
                    <div className="text-xs text-[#718096] mt-1 leading-snug">{st.l}</div>
                  </div>
                ))}
              </div>
            )}

            {s.image && (
              <div className="mt-10 overflow-hidden rounded-2xl border border-[#e2e8f0]">
                <img src={s.image} alt="" className="w-full" loading="lazy" />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ═══ RÉSULTATS ═══ */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4ea5ff] mb-3 block">
            {data.resultats.kicker}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {data.resultats.h2}
          </h2>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <div className="space-y-5 mb-10">
                {data.resultats.body.map((p, i) => (
                  <p key={i} className="text-[#a0aec0] leading-relaxed text-lg">{p}</p>
                ))}
              </div>

              <div className="space-y-4">
                {data.resultats.scores.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[#a0aec0]">{s.l}</span>
                      <span className="text-white font-semibold tabular-nums">{s.v}/100</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-[#4ea5ff]" style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                {data.resultats.details.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] last:border-0"
                  >
                    <span className="text-sm text-[#a0aec0]">{d.l}</span>
                    <span className="text-sm font-semibold text-white tabular-nums">{d.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {data.resultats.image && (
            <div className="mt-14 flex justify-center">
              <img
                src={data.resultats.image}
                alt="Site ALMA sur mobile"
                className="w-full max-w-2xl"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>

      {/* ═══ VERBATIM ═══ */}
      {data.verbatim && (
        <section className="py-16 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Quote className="w-8 h-8 text-[#207bff]/25 mb-5" />
            <blockquote
              className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-snug mb-5"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {data.verbatim.texte}
            </blockquote>
            <div className="text-sm text-[#1a1a1a] font-semibold">{data.verbatim.auteur}</div>
            <div className="text-sm text-[#718096]">{data.verbatim.role}</div>
          </div>
        </section>
      )}

      {/* ═══ CE QUI RESTE ═══ */}
      <section className="py-20 md:py-28 bg-[#fafbfc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {data.restant.h2}
            </h2>
          </div>
          <p className="text-[#4a5568] leading-relaxed text-lg mb-10 max-w-3xl">{data.restant.intro}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.restant.items.map((it, i) => (
              <div key={i} className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-[15px]">{it.t}</h3>
                <p className="text-sm text-[#718096] leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {data.cta.title}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">{data.cta.body}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors"
          >
            {data.cta.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-white/60 mt-6">{data.cta.reassurance}</p>
        </div>
      </section>
    </div>
  );
}
