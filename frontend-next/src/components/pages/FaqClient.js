'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQ_GLOBALE, FAQ_CATEGORIES } from '@/data/faq';

const ORDRE = ['diagnostic', 'seo', 'ia', 'site', 'leads', 'methode'];

export default function FaqClient({ lang = 'fr' }) {
  const [open, setOpen] = useState(null);
  const [filtre, setFiltre] = useState(null);

  const questions = useMemo(
    () => (filtre ? FAQ_GLOBALE.filter((f) => f.cat === filtre) : FAQ_GLOBALE),
    [filtre]
  );

  return (
    <div className="animate-fade-in" data-testid="faq-page">

      {/* HERO */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
            {lang === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-snug mb-5"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {lang === 'fr'
              ? 'Ce qu\u2019on nous demande le plus'
              : 'What we are asked most'}
          </h1>
          <p className="text-[#4a5568] leading-relaxed text-lg max-w-2xl">
            {lang === 'fr'
              ? `${FAQ_GLOBALE.length} questions sur le référencement industriel, la conception de sites et la visibilité dans les moteurs IA. Chaque réponse s\u2019appuie sur des constats vérifiables issus de nos audits.`
              : `${FAQ_GLOBALE.length} questions on industrial SEO, website design and AI search visibility. Each answer is based on verifiable findings from our audits.`}
          </p>
        </div>
      </section>

      {/* FILTRES + ACCORDEON */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => { setFiltre(null); setOpen(null); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filtre === null
                  ? 'bg-[#207bff] text-white'
                  : 'bg-[#f5f7fa] text-[#4a5568] border border-[#e2e8f0] hover:border-[#207bff]/40'
              }`}
            >
              {lang === 'fr' ? 'Toutes' : 'All'} ({FAQ_GLOBALE.length})
            </button>
            {ORDRE.map((c) => {
              const n = FAQ_GLOBALE.filter((f) => f.cat === c).length;
              if (!n) return null;
              return (
                <button
                  key={c}
                  onClick={() => { setFiltre(c); setOpen(null); }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filtre === c
                      ? 'bg-[#207bff] text-white'
                      : 'bg-[#f5f7fa] text-[#4a5568] border border-[#e2e8f0] hover:border-[#207bff]/40'
                  }`}
                >
                  {FAQ_CATEGORIES[c]} ({n})
                </button>
              );
            })}
          </div>

          <div className="divide-y divide-[#e2e8f0] border-y border-[#e2e8f0]">
            {questions.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={`${filtre || 'all'}-${i}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  >
                    <span
                      className={`text-base md:text-[17px] font-semibold leading-snug transition-colors ${
                        isOpen ? 'text-[#207bff]' : 'text-[#1a1a1a] group-hover:text-[#207bff]'
                      }`}
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#207bff] flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-a-${i}`}
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#4a5568] leading-relaxed text-[15px] pb-6 pr-8">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {lang === 'fr' ? 'Votre question n\u2019est pas là ?' : 'Question not answered?'}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Posez-la directement. Nous répondons sous 24 heures ouvrées, sans passer par un formulaire de qualification.'
              : 'Ask directly. We answer within one business day, no qualification form.'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#207bff] font-semibold rounded-lg hover:bg-[#f0f7ff] transition-colors"
          >
            {lang === 'fr' ? 'Nous écrire' : 'Contact us'} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
