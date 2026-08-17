'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Bot, FileCode, Braces, Layers, ImageOff, AlertTriangle, Check, X, Minus,
} from 'lucide-react';

const ICONS = { Bot, FileCode, Braces, Layers, ImageOff };

const ANIMS = [
  'br-float 6s ease-in-out infinite',
  'br-pulse 4s ease-in-out infinite',
  'br-tilt 5.5s ease-in-out infinite',
  'br-drift 8s ease-in-out infinite',
  'br-glow 7s ease-in-out infinite',
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    const io = new IntersectionObserver(
      (e) => e.forEach((x) => { if (x.isIntersecting) { setSeen(true); io.disconnect(); } }),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

export default function BarometreClient({ data }) {
  const [bentoRef, bentoSeen] = useReveal();

  return (
    <div data-testid="barometre">
      <style>{`
        @keyframes br-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6%)} }
        @keyframes br-pulse { 0%,100%{transform:scale(1);opacity:.85} 50%{transform:scale(1.08);opacity:1} }
        @keyframes br-tilt  { 0%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} 100%{transform:rotate(-2deg)} }
        @keyframes br-drift { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(6%,-6%,0)} }
        @keyframes br-glow  { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes br-card  { 0%{opacity:0;transform:translate3d(0,18px,0) scale(.96)} 100%{opacity:1;transform:none} }
        @keyframes br-intro { 0%{opacity:0;transform:translate3d(0,28px,0)} 100%{opacity:1;transform:none} }
      `}</style>

      {/* HERO */}
      <section className="pt-8 pb-14 md:pt-12 md:pb-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-4">
            {data.hero.kicker}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug mb-5 max-w-4xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {data.hero.headline}
          </h1>
          <p className="text-[#4a5568] leading-relaxed text-lg max-w-3xl">{data.hero.sub}</p>
        </div>
      </section>

      {/* KPI */}
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

      {/* PROBLÈME */}
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

      {/* MÉTHODE */}
      <section className="py-20 md:py-28 bg-[#fafbfc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
            {data.methode.kicker}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 max-w-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {data.methode.h2}
          </h2>
          <div className="space-y-5 max-w-3xl mb-12">
            {data.methode.body.map((p, i) => (
              <p key={i} className="text-[#4a5568] leading-relaxed text-lg">{p}</p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.methode.criteres.map((g, i) => (
              <div key={i} className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
                <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-4">{g.g}</h3>
                <ul className="space-y-2">
                  {g.items.map((it, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <Check className="w-3.5 h-3.5 text-[#207bff] flex-shrink-0 mt-1" strokeWidth={3} />
                      <span className="text-sm text-[#718096] leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO */}
      <section ref={bentoRef} className="py-20 md:py-28 bg-white">
        <div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          style={bentoSeen ? { animation: 'br-intro .9s ease-out forwards' } : { opacity: 0 }}
        >
          <div className="mb-10 pb-6 border-b border-[#e2e8f0] flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#94a3b8] block mb-2">Constats</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {data.bento.h2}
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[#718096] leading-relaxed">{data.bento.intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
            {data.bento.items.map((it, i) => {
              const Icon = ICONS[it.icon] || Bot;
              return (
                <article
                  key={i}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#207bff]/40 hover:shadow-[0_20px_60px_rgba(32,123,255,0.08)] ${it.span}`}
                  style={bentoSeen ? { animation: `br-card .8s ease-out ${i * 0.1}s forwards`, opacity: 0 } : { opacity: 0 }}
                >
                  <div
                    className="absolute inset-0 -z-10 opacity-60"
                    style={{ background: 'radial-gradient(ellipse 60% 120% at 12% 0%, rgba(32,123,255,0.07), transparent 72%)' }}
                  />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e2e8f0] bg-white flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#207bff]" strokeWidth={1.5} style={{ animation: ANIMS[i % ANIMS.length] }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <header className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-base font-bold text-[#1a1a1a]">{it.t}</h3>
                        <span className="ml-auto text-lg font-bold text-[#207bff] tabular-nums">{it.v}</span>
                      </header>
                      <p className="text-sm leading-relaxed text-[#718096]">{it.d}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      {data.sections.map((s, i) => (
        <section key={i} className={i % 2 === 0 ? 'py-20 md:py-28 bg-[#fafbfc] border-y border-[#e2e8f0]' : 'py-20 md:py-28 bg-white'}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">{s.kicker}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 max-w-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
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
          </div>
        </section>
      ))}


      {/* TABLEAU DES DISTRIBUTEURS */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e2e8f0]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
            {data.tableau.kicker}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {data.tableau.h2}
          </h2>
          <p className="text-[#4a5568] leading-relaxed text-lg max-w-3xl mb-10">
            {data.tableau.intro}
          </p>

          <div className="overflow-x-auto border border-[#e2e8f0] rounded-2xl">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#fafbfc] border-b border-[#e2e8f0]">
                  {data.tableau.colonnes.map((c, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#718096] ${
                        i === 0 ? 'text-left' : 'text-right'
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.tableau.lignes.map((r, i) => {
                  const gros = r.p >= 150;
                  return (
                    <tr
                      key={i}
                      className={`border-b border-[#f1f5f9] last:border-0 transition-colors hover:bg-[#fafbfc] ${
                        r.note ? 'bg-[#f0f7ff]' : ''
                      }`}
                    >
                      <td className="px-4 py-3">
                        <span className={`font-semibold tabular-nums ${r.note ? 'text-[#207bff]' : 'text-[#1a1a1a]'}`}>
                          {r.id}
                        </span>
                        {r.note && (
                          <span className="ml-2 text-[10px] text-[#718096]">{r.note}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="inline-flex items-center gap-2 justify-end">
                          <span className="hidden sm:block w-16 h-1 rounded-full bg-[#e2e8f0] overflow-hidden">
                            <span
                              className="block h-full rounded-full bg-[#207bff]"
                              style={{ width: `${r.s}%` }}
                            />
                          </span>
                          <span className="font-semibold text-[#1a1a1a] tabular-nums w-8 text-right">{r.s}</span>
                        </span>
                      </td>
                      <td className={`px-4 py-3 text-right tabular-nums ${gros ? 'font-semibold text-[#1a1a1a]' : 'text-[#718096]'}`}>
                        {r.p === 0 ? <span className="text-[#cbd5e1]">—</span> : r.p.toLocaleString('fr-FR')}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums text-[#718096]">
                        {r.sc === 0 ? <span className="text-[#cbd5e1]">0</span> : r.sc}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end">
                          {r.ia
                            ? <Check className="w-4 h-4 text-[#207bff]" strokeWidth={3} />
                            : <Minus className="w-4 h-4 text-[#cbd5e1]" strokeWidth={3} />}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end">
                          {r.l
                            ? <Check className="w-4 h-4 text-[#207bff]" strokeWidth={3} />
                            : <Minus className="w-4 h-4 text-[#cbd5e1]" strokeWidth={3} />}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-[#718096] leading-relaxed mt-6 max-w-3xl">
            {data.tableau.lecture}
          </p>
        </div>
      </section>

      {/* PANEL FABRICANTS */}
      <section className="py-20 md:py-28 bg-[#fafbfc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
            {data.fabricants.kicker}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {data.fabricants.h2}
          </h2>
          <p className="text-[#4a5568] leading-relaxed text-lg max-w-3xl mb-10">
            {data.fabricants.intro}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {data.fabricants.liste.map((f, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 bg-white border border-[#e2e8f0] rounded-lg text-sm text-[#4a5568]"
              >
                {f}
              </span>
            ))}
          </div>

          <p className="text-sm text-[#718096] leading-relaxed max-w-3xl">
            {data.fabricants.note}
          </p>
        </div>
      </section>

      {/* RÉSULTATS — fond sombre */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4ea5ff] mb-3 block">
            {data.resultats.kicker}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {data.resultats.h2}
          </h2>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="space-y-5 mb-10">
                {data.resultats.body.map((p, i) => (
                  <p key={i} className="text-[#a0aec0] leading-relaxed text-lg">{p}</p>
                ))}
              </div>

              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 px-5 py-3 border-b border-white/[0.08] text-xs uppercase tracking-wider text-[#718096]">
                  <span>Score</span>
                  <span className="text-right">Fabricants</span>
                  <span className="text-right">Distributeurs</span>
                </div>
                {data.resultats.distribution.map((d, i) => (
                  <div key={i} className="grid grid-cols-3 px-5 py-3 border-b border-white/[0.06] last:border-0">
                    <span className="text-sm text-[#a0aec0]">{d.l}</span>
                    <span className="text-sm text-white text-right tabular-nums">{d.oem}</span>
                    <span className="text-sm text-[#4ea5ff] text-right tabular-nums font-semibold">{d.dist}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-[#718096] mb-6">
                Taux de conformité par critère
              </p>
              <div className="space-y-5">
                {data.resultats.conformite.map((c, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#a0aec0]">{c.l}</span>
                      <span className="text-[#718096] tabular-nums text-xs">
                        <span className="text-white">{c.oem} %</span>
                        <span className="mx-1.5">·</span>
                        <span className="text-[#4ea5ff]">{c.dist} %</span>
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-white/60" style={{ width: `${c.oem}%` }} />
                      </div>
                      <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-[#4ea5ff]" style={{ width: `${c.dist}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#718096] mt-6">
                Barre claire : 28 fabricants. Barre bleue : 28 distributeurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PÉRIMÈTRE */}
      <section className="py-20 md:py-28 bg-[#fafbfc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-10">
            <AlertTriangle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-1.5" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {data.perimetre.h2}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.perimetre.items.map((it, i) => (
              <div key={i} className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-[15px]">{it.t}</h3>
                <p className="text-sm text-[#718096] leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
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
