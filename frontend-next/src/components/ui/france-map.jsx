'use client';

import { VIEWBOX, VIEWBOXES, REGION_PATHS, REGION_NAMES, DEPTS, VILLES } from '@/assets/geo/france-svg';

const BLUE = '#207bff';
const NAVY = '#0B1D3A';
const GREY = '#e8edf4';
const GREY_EDGE = '#d3dbe6';

// Defaillances industrielles 2025 par region (Industrial Decision)
const DEFAILLANCES = {
  IDF: 2290, ARA: 1780, HDF: 1355, PAC: 1285, GES: 1190, OCC: 1040,
  NAQ: 900, PDL: 700, BRE: 620, NOR: 580, CVL: 470, BFC: 430, COR: 90,
};
const MAX_DEF = 2290;

/**
 * code : code region mise en avant (ARA, HDF, GES, BFC)
 * mode : 'france' | 'pression' | 'depts' | 'bassins'
 */
export default function FranceMap({ code = 'ARA', mode = 'france', className = '' }) {
  const zoomed = mode === 'depts' || mode === 'bassins';
  const viewBox = zoomed ? (VIEWBOXES[code] || VIEWBOX) : VIEWBOX;
  const depts = DEPTS[code] || {};
  const villes = VILLES[code] || {};

  return (
    <svg
      viewBox={viewBox}
      className={`w-full h-full ${className}`}
      style={{ transition: 'all 1200ms cubic-bezier(0.23, 1, 0.32, 1)' }}
      role="img"
      aria-label={
        zoomed
          ? `Carte de la région ${REGION_NAMES[code] || code}`
          : `Carte des régions de France, ${REGION_NAMES[code] || code} mise en évidence`
      }
    >
      <defs>
        <filter id={`fm-shadow-${code}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={BLUE} floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Regions */}
      <g>
        {Object.entries(REGION_PATHS).map(([c, d]) => {
          const isTarget = c === code;

          let fill = GREY;
          let fillOpacity = 1;
          let stroke = GREY_EDGE;
          let strokeWidth = 0.7;

          if (mode === 'pression') {
            fill = BLUE;
            fillOpacity = 0.08 + ((DEFAILLANCES[c] ?? 100) / MAX_DEF) * 0.62;
            stroke = '#ffffff';
            strokeWidth = 0.8;
            if (isTarget) { stroke = NAVY; strokeWidth = 1.6; }
          } else if (isTarget) {
            fill = BLUE;
            fillOpacity = 0.14;
            stroke = BLUE;
            strokeWidth = 1.5;
          }

          if (zoomed) {
            if (isTarget) {
              fill = 'none';
              stroke = BLUE;
              strokeWidth = 1.2;
            } else {
              fill = '#f4f7fa';
              fillOpacity = 1;
              stroke = '#e8edf4';
              strokeWidth = 0.6;
            }
          }

          return (
            <path
              key={c}
              d={d}
              fill={fill}
              fillOpacity={fillOpacity}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              filter={isTarget && mode === 'france' ? `url(#fm-shadow-${code})` : undefined}
              style={{ transition: 'fill 900ms ease, fill-opacity 900ms ease, stroke 900ms ease, stroke-width 900ms ease' }}
            >
              <title>{REGION_NAMES[c]}</title>
            </path>
          );
        })}
      </g>

      {/* Departements de la region ciblee */}
      {zoomed && (
        <g>
          {Object.entries(depts).map(([c, dep]) => (
            <path
              key={c}
              d={dep.d}
              fill={BLUE}
              fillOpacity={mode === 'depts' ? 0.1 : 0.06}
              stroke={BLUE}
              strokeOpacity={mode === 'depts' ? 0.55 : 0.3}
              strokeWidth={0.5}
              strokeLinejoin="round"
              style={{ transition: 'fill-opacity 700ms ease, stroke-opacity 700ms ease' }}
            >
              <title>{dep.nom}</title>
            </path>
          ))}
        </g>
      )}

      {/* Poles industriels */}
      {mode === 'bassins' && (
        <g>
          {Object.entries(villes).map(([nom, { x, y }]) => (
            <g key={nom}>
              <circle cx={x} cy={y} r="7" fill={BLUE} fillOpacity="0.14" />
              <circle cx={x} cy={y} r="2.6" fill={BLUE} />
              <text
                x={x}
                y={y - 10}
                textAnchor="middle"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 6.5,
                  fontWeight: 600,
                  fill: NAVY,
                }}
              >
                {nom}
              </text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
