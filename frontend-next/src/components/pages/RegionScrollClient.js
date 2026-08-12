'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import FranceMap from '@/components/ui/france-map';

// Position de la carte par section — { top, left } en %, scale
const MAP_POSITIONS = [
  { top: 50, left: 76, scale: 1.0 },   // S1 : droite, texte a gauche
  { top: 50, left: 24, scale: 1.0 },   // S2 : gauche, texte a droite
  { top: 46, left: 78, scale: 1.05 },  // S3 : droite, tableau a gauche
  { top: 50, left: 50, scale: 1.5 },   // S4 : fond de scene central
];

// Mode de carte par section
const MAP_MODES = ['france', 'pression', 'depts', 'bassins'];

const ALIGNS = ['left', 'right', 'left', 'center'];

export default function RegionScrollClient({ steps, code = 'ARA' }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const rafId = useRef(null);

  const positions = useMemo(
    () => steps.map((_, i) => MAP_POSITIONS[i % MAP_POSITIONS.length]),
    [steps]
  );

  const update = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0);

    const mid = window.innerHeight / 2;
    let best = 0;
    let min = Infinity;
    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < min) { min = d; best = i; }
    });
    setActive((p) => (p === best ? p : best));

    // La carte fixe ne doit exister que pendant la zone de scroll :
    // au-dela, elle se superposerait aux sections suivantes et au footer.
    const box = containerRef.current?.getBoundingClientRect();
    if (box) {
      const inView = box.top < window.innerHeight * 0.5 && box.bottom > window.innerHeight * 0.9;
      setVisible((v) => (v === inView ? v : inView));
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const h = () => {
      if (ticking) return;
      ticking = true;
      rafId.current = requestAnimationFrame(() => { update(); ticking = false; });
    };
    window.addEventListener('scroll', h, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', h);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [update]);

  const pos = positions[active] || positions[0];
  const isBackdrop = active === steps.length - 1;
  const transform = `translate3d(${pos.left}vw, ${pos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${pos.scale}, ${pos.scale}, 1)`;

  return (
    <div ref={containerRef} className="relative bg-white text-[#0B1D3A] overflow-x-clip">

      {/* Barre de progression */}
      <div
        className="fixed top-0 left-0 w-full h-0.5 bg-[#e2e8f0] z-50 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0, pointerEvents: 'none' }}
      >
        <div
          className="h-full bg-[#207bff]"
          style={{
            transform: `scaleX(${progress})`,
            transformOrigin: 'left center',
            transition: 'transform 0.15s ease-out',
          }}
        />
      </div>

      {/* Dots de navigation */}
      <div
        className="hidden sm:block fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center gap-4">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() =>
                sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
              aria-label={s.kicker || `Section ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                active === i
                  ? 'bg-[#207bff] border-[#207bff]'
                  : 'bg-transparent border-[#cbd5e1] hover:border-[#207bff]/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Carte fixe — se deplace et change de mode entre les sections */}
      <div
        className="fixed top-0 left-0 z-0 pointer-events-none will-change-transform hidden md:block"
        style={{
          transition:
            'transform 1400ms cubic-bezier(0.23, 1, 0.32, 1), opacity 700ms ease',
          transform,
          opacity: visible ? (isBackdrop ? 0.22 : 1) : 0,
          visibility: visible ? 'visible' : 'hidden',
          width: 'min(46vw, 560px)',
          height: 'min(46vw, 560px)',
        }}
        aria-hidden={!visible}
      >
        <FranceMap code={code} mode={MAP_MODES[active % MAP_MODES.length]} />
      </div>

      {/* Sections */}
      {steps.map((s, i) => {
        const align = ALIGNS[i % ALIGNS.length];
        return (
          <section
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            className={`relative md:min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-14 md:py-16 z-10 ${
              align === 'center'
                ? 'items-center text-center'
                : align === 'right'
                ? 'items-end'
                : 'items-start'
            }`}
          >
            <div className={`w-full max-w-xl ${align === 'center' ? 'max-w-2xl' : ''}`}>
              {/* Carte inline sur mobile (le panneau fixe est masque en dessous de md) */}
              <div className="md:hidden w-full max-w-[320px] mx-auto mb-8">
                <FranceMap code={code} mode={MAP_MODES[i % MAP_MODES.length]} />
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#207bff] mb-4 block">
                {s.kicker}
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {s.titre}
              </h2>

              {s.texte?.map((p, j) => (
                <p key={j} className="text-[15px] sm:text-base text-[#4a5568] leading-relaxed mb-4">
                  {p}
                </p>
              ))}

              {s.stats && (
                <div className={`grid grid-cols-2 gap-3 mt-8 ${align === 'center' ? 'sm:grid-cols-4' : ''}`}>
                  {s.stats.map((st, j) => (
                    <div
                      key={j}
                      className="bg-white/85 backdrop-blur-sm border border-[#e2e8f0] rounded-xl p-4 text-left shadow-sm"
                    >
                      <div className="text-2xl font-bold text-[#0B1D3A] tabular-nums">{st.valeur}</div>
                      <div className="text-xs text-[#718096] mt-1 leading-snug">{st.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {s.table && (
                <div className="mt-8 bg-white/90 backdrop-blur-sm border border-[#e2e8f0] rounded-xl overflow-hidden text-left shadow-sm">
                  {s.table.map((row, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between px-4 py-3 border-b border-[#f1f5f9] last:border-0 hover:bg-[#f8fafc] transition-colors"
                    >
                      <div className="min-w-0 pr-4">
                        <div className="text-[13px] text-[#0B1D3A] truncate">{row.label}</div>
                        {row.sub && <div className="text-[11px] text-[#94a3b8] mt-0.5">{row.sub}</div>}
                      </div>
                      <div className="text-sm font-semibold text-[#207bff] tabular-nums flex-shrink-0">
                        {row.valeur}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {s.source && (
                <p className="text-[11px] text-[#94a3b8] mt-4 italic">Source : {s.source}</p>
              )}

              {i === steps.length - 1 && (
                <div className={`flex flex-col sm:flex-row gap-4 mt-10 ${align === 'center' ? 'justify-center' : ''}`}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#207bff] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a62cc] transition-all hover:scale-[1.02]"
                  >
                    Demander un audit gratuit
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[#e2e8f0] bg-white/80 px-8 py-4 text-sm font-semibold text-[#0B1D3A] hover:border-[#207bff]/40 hover:bg-[#f8fafc] transition-colors"
                  >
                    Voir nos résultats
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
