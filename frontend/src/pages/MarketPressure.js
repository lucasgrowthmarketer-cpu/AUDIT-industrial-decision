import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ComposableMap, 
  Geographies, 
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { Info } from 'lucide-react';
import { 
  pressureByRegion, 
  nationalTrendData,
  regionCodeMap 
} from '../data/industrial_pressure';
import { franceRegionsGeoJSON, regionNames } from '../assets/geo/france';
import { calculateIPI, getScoreColor } from '../lib/indices';

export default function MarketPressure() {
  const { t, i18n } = useTranslation();
  const [selectedYear, setSelectedYear] = useState(2024);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
  const currentLang = i18n.language;
  const years = [2021, 2022, 2023, 2024, 2025];
  
  // Get data for selected year
  const yearData = pressureByRegion[selectedYear] || {};
  
  // Calculate totals
  const yearTotals = nationalTrendData.find(d => d.year === selectedYear) || {};
  const prevYearTotals = nationalTrendData.find(d => d.year === selectedYear - 1) || {};
  
  // Calculate IPI
  const ipi = calculateIPI(yearTotals.total || 0, prevYearTotals.total || 0, 0.12);
  
  // Color scale
  const colorScale = useMemo(() => {
    const values = Object.values(yearData);
    const maxVal = Math.max(...values, 1);
    return scaleQuantize()
      .domain([0, maxVal])
      .range([
        '#2a2a2a',
        '#4a3a2a',
        '#6a4a3a',
        '#8a5a4a',
        '#aa6a5a',
        '#ca7a6a',
        '#e89565'
      ]);
  }, [yearData]);
  
  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX + 15, y: e.clientY - 10 });
  };
  
  const handleMouseEnter = (geo) => {
    const regionCode = geo.properties.code;
    const regionData = yearData[regionCode] || 0;
    setHoveredRegion({
      code: regionCode,
      name: regionNames[regionCode]?.[currentLang] || geo.properties.name,
      value: regionData
    });
  };
  
  return (
    <div className="page-container animate-fade-in" data-testid="market-pressure-page">
      <section className="page-header">
        <h1 className="page-title">{t('marketPressure.title')}</h1>
        <p className="page-subtitle">{t('marketPressure.subtitle')}</p>
      </section>
      
      {/* IPI Gauge */}
      <section className="kpi-grid mb-6">
        <div className="kpi-widget" data-testid="ipi-gauge">
          <div className="kpi-header">
            <span className="kpi-title">Industrial Pressure Index (IPI)</span>
          </div>
          <div className="kpi-value" style={{ color: getScoreColor(ipi, { high: 60, medium: 40 }) }}>
            {ipi}
          </div>
          <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden mt-2">
            <div 
              className="h-full transition-all duration-500"
              style={{ 
                width: `${ipi}%`,
                backgroundColor: getScoreColor(ipi, { high: 60, medium: 40 })
              }}
            />
          </div>
          <div className="kpi-source mt-2">
            0 = Low Pressure | 100 = High Pressure
          </div>
        </div>
        
        <div className="kpi-widget">
          <div className="kpi-header">
            <span className="kpi-title">{t('marketPressure.totalFailures')} {selectedYear}</span>
          </div>
          <div className="kpi-value">{(yearTotals.total || 0).toLocaleString()}</div>
          <div className="kpi-source">{t('common.source')}: {t('common.banqueDeFrance')}</div>
        </div>
        
        <div className="kpi-widget">
          <div className="kpi-header">
            <span className="kpi-title">{t('common.yoyVariation')}</span>
          </div>
          <div className="kpi-value" style={{ color: '#ef4444' }}>
            {prevYearTotals.total ? 
              ((((yearTotals.total || 0) - prevYearTotals.total) / prevYearTotals.total) * 100).toFixed(1) + '%'
              : 'N/A'}
          </div>
          <div className="kpi-source">vs. {selectedYear - 1}</div>
        </div>
      </section>
      
      {/* Controls */}
      <section className="data-panel">
        <div className="map-controls">
          <div className="control-group">
            <span className="control-label">{t('common.year')}</span>
            <div className="toggle-group">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`toggle-button ${selectedYear === year ? 'active' : ''}`}
                  data-testid={`year-${year}`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div 
          className="map-container" 
          onMouseMove={handleMouseMove}
          data-testid="france-map"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center: [2.5, 46.5],
              scale: 2800
            }}
            width={800}
            height={700}
            style={{ width: '100%', height: 'auto' }}
          >
            <ZoomableGroup>
              <Geographies geography={franceRegionsGeoJSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const regionCode = geo.properties.code;
                    const value = yearData[regionCode] || 0;
                    const isHovered = hoveredRegion?.code === regionCode;
                    
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={colorScale(value)}
                        stroke={isHovered ? '#e89565' : '#333'}
                        strokeWidth={isHovered ? 2 : 0.5}
                        onMouseEnter={() => handleMouseEnter(geo)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        style={{
                          default: { outline: 'none' },
                          hover: { outline: 'none', cursor: 'pointer' },
                          pressed: { outline: 'none' }
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          
          {/* Tooltip */}
          {hoveredRegion && (
            <div 
              className="map-tooltip"
              style={{ 
                left: tooltipPosition.x, 
                top: tooltipPosition.y 
              }}
            >
              <div className="font-semibold text-foreground">{hoveredRegion.name}</div>
              <div className="text-muted-foreground">
                {hoveredRegion.value.toLocaleString()} {t('marketPressure.failures')}
              </div>
            </div>
          )}
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <span className="text-sm text-muted-foreground">{t('marketPressure.lowPressure')}</span>
          <div className="flex gap-1">
            {['#2a2a2a', '#4a3a2a', '#6a4a3a', '#8a5a4a', '#aa6a5a', '#ca7a6a', '#e89565'].map((color, i) => (
              <div 
                key={i}
                className="w-8 h-4 rounded-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{t('marketPressure.highPressure')}</span>
        </div>
      </section>
      
      {/* Info Block */}
      <section className="info-block mt-6">
        <div className="flex items-start gap-3">
          <Info size={20} className="text-[#e89565] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="info-block-title">{t('marketPressure.dataSource')}</h3>
            <p className="info-block-text">{t('marketPressure.sourceDescription')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
