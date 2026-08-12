'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';
import { franceRegions } from '@/assets/geo/france-regions';

const NAVY = '#0f1729';
const BLUE = '#207bff';
const DIM = '#1e293b';
const EDGE = '#334155';

export default function RegionMapClient({ region, steps }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);
  const raf = useRef(null);

  const onScroll = useCallback(() => {
    const mid = window.innerHeight / 2;
    let best = 0;
    let min = Infinity;
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < min) { min = d; best = i; }
    });
    setActive((prev) => (prev === best ? prev : best));
  }, []);

  useEffect(() => {
    let ticking = false;
    const h = () => {
      if (ticking) return;
      ticking = true;
      raf.current = requestAnimationFrame(() => { onScroll(); ticking = false; });
    };
    window.addEventListener('scroll', h, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', h);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [onScroll]);

  const step = steps[active] || steps[0];
  const view = step.view || { center: region.center, zoom: region.zoom };

  return (
    <div className="relative bg-[#0f1729] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">

          {/* CARTE STICKY */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:flex lg:items-center">
            <div className="w-full">
              <div className="relative aspect-square max-h-[520px] mx-auto">
                <ComposableMap
                  projection="geoConicConformal"
                  projectionConfig={{ center: [2.5, 46.5], parallels: [44, 49], scale: 2400 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <ZoomableGroup
                    center={view.center}
                    zoom={view.zoom}
                    minZoom={1}
                    maxZoom={12}
                    filterZoomEvent={() => false}
                  >
                    <Geographies geography={franceRegions}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const isTarget = geo.properties.code === region.code;
                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              style={{
                                default: {
                                  fill: isTarget ? BLUE : DIM,
                                  fillOpacity: isTarget ? 0.18 : 0.5,
                                  stroke: isTarget ? BLUE : EDGE,
                                  strokeWidth: isTarget ? 0.7 : 0.3,
                                  outline: 'none',
                                  transition: 'fill-opacity 700ms ease, stroke-width 700ms ease',
                                },
                                hover: { outline: 'none' },
                                pressed: { outline: 'none' },
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>

                    {step.markers?.map((m, i) => (
                      <Marker key={i} coordinates={m.coords}>
                        <circle r={2.2 / view.zoom} fill={BLUE} />
                        <circle r={5 / view.zoom} fill={BLUE} fillOpacity={0.18} />
                        {m.label && (
                          <text
                            textAnchor="middle"
                            y={-7 / view.zoom}
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: 9 / view.zoom,
                              fill: '#cbd5e1',
                              fontWeight: 500,
                            }}
                          >
                            {m.label}
                          </text>
                        )}
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              </div>

              {/* Compteur d'etapes */}
              <div className="hidden lg:flex items-center justify-center gap-2 mt-6">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => stepRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    aria-label={`Aller a l'etape ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active ? 'w-8 bg-[#207bff]' : 'w-4 bg-white/15 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CONTENU DEFILANT */}
          <div className="lg:col-span-6 py-12 lg:py-24">
            {steps.map((s, i) => (
              <section
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className={`lg:min-h-[70vh] flex flex-col justify-center py-10 lg:py-16 transition-opacity duration-500 ${
                  i === active ? 'opacity-100' : 'lg:opacity-40'
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4ea5ff] mb-4">
                  {s.kicker}
                </span>

                <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
                  {s.titre}
                </h2>

                {s.texte?.map((p, j) => (
                  <p key={j} className="text-[15px] text-zinc-400 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}

                {s.stats && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {s.stats.map((st, j) => (
                      <div key={j} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
                        <div className="text-2xl font-bold text-white tabular-nums">{st.valeur}</div>
                        <div className="text-xs text-zinc-500 mt-1 leading-snug">{st.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {s.table && (
                  <div className="mt-6 border border-white/[0.06] rounded-xl overflow-hidden">
                    {s.table.map((row, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="min-w-0 pr-4">
                          <div className="text-[13px] text-zinc-300 truncate">{row.label}</div>
                          {row.sub && <div className="text-[11px] text-zinc-600 mt-0.5">{row.sub}</div>}
                        </div>
                        <div className="text-sm font-semibold text-[#4ea5ff] tabular-nums flex-shrink-0">
                          {row.valeur}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {s.source && (
                  <p className="text-[11px] text-zinc-600 mt-4 italic">Source : {s.source}</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
