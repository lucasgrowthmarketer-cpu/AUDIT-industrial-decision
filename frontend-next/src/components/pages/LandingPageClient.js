'use client';
import Link from 'next/link';
import { ArrowRight, Check, Lock } from 'lucide-react';

export default function LandingPageClient({ data, landings }) {
  const related = (data.related || [])
    .map((s) => ({ slug: s, ...landings[s] }))
    .filter((r) => r.title);

  return (
    <div data-testid="landing-page">

      {/* ─── HERO ─── */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-4">
                {data.kicker}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug mb-5">
                {data.hero.headline}
              </h1>
              <p className="text-[#4a5568] leading-relaxed text-lg mb-8 max-w-xl">
                {data.hero.subheadline}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#207bff] text-white text-sm font-semibold rounded-lg hover:bg-[#1a62cc] transition-all"
              >
                {data.hero.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {data.image && (
              <div className="lg:col-span-5 hidden lg:block animate-fade-in">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={data.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 to-transparent" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── PASSAGE CITABLE (GEO) ─── */}
      {data.citable && (
        <section className="py-12 bg-[#f0f7ff] border-y border-[#207bff]/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#207bff] mb-4 block">
              En résumé
            </span>
            <p className="text-[#1a1a1a] leading-relaxed text-lg max-w-4xl">{data.citable}</p>
          </div>
        </section>
      )}

      {/* ─── PROBLÈME ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">
              {data.problem.h2}
            </h2>
            <div className="space-y-5">
              {data.problem.body.map((p, i) => (
                <p key={i} className="text-[#4a5568] leading-relaxed text-lg">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-20 md:py-28 bg-[#fafbfc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
              {data.solution.h2}
            </h2>
            {data.solution.body?.map((p, i) => (
              <p key={i} className="text-[#4a5568] leading-relaxed text-lg">{p}</p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.solution.mechanism.map((m, i) => (
              <div key={i} className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
                <span className="block text-2xl font-bold text-[#207bff]/20 mb-3">{m.n}</span>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{m.t}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BÉNÉFICES ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 max-w-2xl">
            {data.benefits.h2}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {data.benefits.items.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#f0f7ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#207bff]" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{b.t}</h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREUVE ─── */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {data.proof.h2}
              </h2>
              <div className="space-y-5">
                {data.proof.body.map((p, i) => (
                  <p key={i} className="text-[#a0aec0] leading-relaxed text-lg">{p}</p>
                ))}
              </div>

              {data.proof.caseStudy && (
                <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <h3 className="text-lg font-bold text-white">{data.proof.caseStudy.client}</h3>
                    <span className="text-xs text-[#718096]">{data.proof.caseStudy.delai}</span>
                  </div>
                  <p className="text-xs text-[#718096] mb-4">{data.proof.caseStudy.secteur}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#718096] block mb-1">Avant</span>
                      <p className="text-sm text-[#a0aec0]">{data.proof.caseStudy.avant}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#4ea5ff] block mb-1">Après</span>
                      <p className="text-sm text-white">{data.proof.caseStudy.apres}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 content-start">
              {data.proof.stats.map((s, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-[#4ea5ff] tabular-nums mb-2">{s.v}</div>
                  <div className="text-sm text-[#718096] leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OBJECTIONS ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
            Objections
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12">
            Ce que vous êtes en droit de vous demander
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {data.objections.map((o, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{o.q}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFRE ─── */}
      <section className="py-20 md:py-28 bg-[#fafbfc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-5">{data.offer.h2}</h2>
            <p className="text-[#4a5568] leading-relaxed text-lg">{data.offer.intro}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Inclus */}
            <div className="lg:col-span-7 bg-white border-2 border-[#207bff]/20 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#207bff]">
                  Inclus, gratuitement
                </span>
              </div>
              <div className="space-y-6">
                {data.offer.included.map((it, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#f0f7ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#207bff]" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] mb-1">{it.t}</h3>
                      <p className="text-sm text-[#4a5568] leading-relaxed">{it.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réservé */}
            <div className="lg:col-span-5 bg-white border border-[#e2e8f0] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Lock className="w-3.5 h-3.5 text-[#718096]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#718096]">
                  Réservé aux missions
                </span>
              </div>
              <ul className="space-y-4">
                {data.offer.reserved.map((r, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1] flex-shrink-0 mt-2" />
                    <span className="text-sm text-[#718096] leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#94a3b8] leading-relaxed mt-6 pt-6 border-t border-[#e2e8f0]">
                {data.offer.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIEN METHODE ─── */}
      {data.methode && (
        <section className="py-14 bg-white border-t border-[#e2e8f0]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href={data.methode.href}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 md:p-8 bg-[#fafbfc] border border-[#e2e8f0] rounded-2xl hover:border-[#207bff]/40 transition-all"
            >
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#207bff] mb-2 block">
                  Pour aller plus loin
                </span>
                <h2 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#207bff] transition-colors">
                  {data.methode.titre}
                </h2>
                <p className="text-sm text-[#4a5568] leading-relaxed max-w-2xl">
                  {data.methode.desc}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#207bff] flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      )}

      {/* ─── MAILLAGE ─── */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#718096] mb-6">
              À lire aussi
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="group block p-6 bg-white border border-[#e2e8f0] rounded-2xl hover:border-[#207bff]/40 hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#207bff] mb-2 block">
                    {r.kicker}
                  </span>
                  <h3 className="font-bold text-[#1a1a1a] leading-snug group-hover:text-[#207bff] transition-colors">
                    {r.hero.headline}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto">
            {data.finalCta.title}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {data.finalCta.body}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors"
          >
            {data.finalCta.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-white/60 mt-6">{data.finalCta.reassurance}</p>
        </div>
      </section>
    </div>
  );
}
