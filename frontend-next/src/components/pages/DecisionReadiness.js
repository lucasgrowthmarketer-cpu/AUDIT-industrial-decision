'use client';
import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Filter, Download } from 'lucide-react';
import { oemAuditData } from '@/data/oem_audit';
import { calculateDRS, calculateAverageDRS, getScoreColor, getScoreLabel } from '@/lib/indices';

export default function DecisionReadiness() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const [filters, setFilters] = useState({
    type: 'all',
    country: 'all',
    drsMin: 0
  });
  const [sortConfig, setSortConfig] = useState({ key: 'drs', direction: 'desc' });
  
  // Get unique values for filters
  const types = ['all', ...new Set(oemAuditData.map(d => d.type))];
  const countries = ['all', ...new Set(oemAuditData.map(d => d.country))];
  
  // Calculate DRS for each company and filter/sort
  const processedData = useMemo(() => {
    return oemAuditData
      .map(company => ({
        ...company,
        drs: calculateDRS(company)
      }))
      .filter(company => {
        if (filters.type !== 'all' && company.type !== filters.type) return false;
        if (filters.country !== 'all' && company.country !== filters.country) return false;
        if (company.drs < filters.drsMin) return false;
        return true;
      })
      .sort((a, b) => {
        const direction = sortConfig.direction === 'asc' ? 1 : -1;
        if (sortConfig.key === 'drs') {
          return (a.drs - b.drs) * direction;
        }
        return a[sortConfig.key].localeCompare(b[sortConfig.key]) * direction;
      });
  }, [filters, sortConfig]);
  
  const averageDRS = calculateAverageDRS(processedData);
  
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };
  
  const getStatusCell = (value) => {
    const colors = {
      yes: 'text-[#10b981]',
      Yes: 'text-[#10b981]',
      partial: 'text-[#f59e0b]',
      Partial: 'text-[#f59e0b]',
      no: 'text-[#ef4444]',
      No: 'text-[#ef4444]'
    };
    return <span className={colors[value] || 'text-muted-foreground'}>{value}</span>;
  };
  
  const getDRSClass = (score) => {
    if (score >= 75) return 'drs-excellent';
    if (score >= 50) return 'drs-good';
    return 'drs-needs-improvement';
  };
  
  return (
    <div className="page-container animate-fade-in" data-testid="decision-readiness-page">
      <section className="page-header">
        <h1 className="page-title">{t('decisionReadiness.title')}</h1>
        <p className="page-subtitle">{t('decisionReadiness.subtitle')}</p>
      </section>
      
      {/* DRS Overview */}
      <section className="kpi-grid mb-6">
        <div className="kpi-widget" data-testid="average-drs">
          <div className="kpi-header">
            <span className="kpi-title">{t('decisionReadiness.averageDrs')}</span>
          </div>
          <div className="kpi-value" style={{ color: getScoreColor(averageDRS) }}>
            {averageDRS}
          </div>
          <div className="kpi-source">
            {getScoreLabel(averageDRS, currentLang)} • {processedData.length} {t('decisionReadiness.companiesAnalyzed')}
          </div>
        </div>
        
        <div className="kpi-widget">
          <div className="kpi-header">
            <span className="kpi-title">{t('decisionReadiness.highReadiness')}</span>
          </div>
          <div className="kpi-value text-[#10b981]">
            {processedData.filter(d => d.drs >= 75).length}
          </div>
          <div className="kpi-source">DRS ≥ 75</div>
        </div>
        
        <div className="kpi-widget">
          <div className="kpi-header">
            <span className="kpi-title">{t('decisionReadiness.needsImprovement')}</span>
          </div>
          <div className="kpi-value text-[#ef4444]">
            {processedData.filter(d => d.drs < 50).length}
          </div>
          <div className="kpi-source">DRS &lt; 50</div>
        </div>
      </section>
      
      {/* DRS Matrix Info */}
      <section className="info-block mb-6">
        <h3 className="info-block-title">{t('decisionReadiness.drsMatrix')}</h3>
        <p className="info-block-text">
          {t('decisionReadiness.drsExplanation')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="text-center">
            <div className="text-sm font-semibold text-muted-foreground">Scenarios</div>
            <div className="text-xs text-muted-foreground/70 mt-1">Strategic planning</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-muted-foreground">Process</div>
            <div className="text-xs text-muted-foreground/70 mt-1">Clear workflows</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-muted-foreground">Proof</div>
            <div className="text-xs text-muted-foreground/70 mt-1">Case studies</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-muted-foreground">Entry</div>
            <div className="text-xs text-muted-foreground/70 mt-1">Clear pathways</div>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="data-panel">
        <div className="filters-bar">
          <div className="filter-group">
            <Filter size={16} className="text-muted-foreground" />
            <span className="filter-label">{t('common.type')}</span>
            <select 
              className="filter-select"
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              data-testid="filter-type"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? t('common.all') : type}
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <span className="filter-label">{t('common.country')}</span>
            <select 
              className="filter-select"
              value={filters.country}
              onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))}
              data-testid="filter-country"
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country === 'all' ? t('common.all') : country}
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <span className="filter-label">{t('decisionReadiness.minDrs')}</span>
            <select 
              className="filter-select"
              value={filters.drsMin}
              onChange={(e) => setFilters(prev => ({ ...prev, drsMin: parseInt(e.target.value) }))}
              data-testid="filter-drs"
            >
              <option value={0}>All</option>
              <option value={50}>≥ 50</option>
              <option value={75}>≥ 75</option>
            </select>
          </div>
        </div>
        
        {/* Table */}
        <div className="audit-table-container">
          <table className="audit-table" data-testid="audit-table">
            <thead>
              <tr>
                <th 
                  className="cursor-pointer hover:text-foreground"
                  onClick={() => handleSort('company')}
                >
                  {t('decisionReadiness.company')}
                  {sortConfig.key === 'company' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="inline ml-1" size={14} /> : <ChevronDown className="inline ml-1" size={14} />
                  )}
                </th>
                <th>{t('common.country')}</th>
                <th>{t('common.type')}</th>
                <th>Scenarios</th>
                <th>Process</th>
                <th>Proof</th>
                <th>Entry</th>
                <th 
                  className="cursor-pointer hover:text-foreground"
                  onClick={() => handleSort('drs')}
                >
                  DRS
                  {sortConfig.key === 'drs' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="inline ml-1" size={14} /> : <ChevronDown className="inline ml-1" size={14} />
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {processedData.map((company, index) => (
                <tr key={index} data-testid={`row-${company.company}`}>
                  <td className="company-name">{company.company}</td>
                  <td>{company.country}</td>
                  <td><span className="badge badge-default">{company.type}</span></td>
                  <td>{getStatusCell(company.scenarios)}</td>
                  <td>{getStatusCell(company.process)}</td>
                  <td>{getStatusCell(company.proof)}</td>
                  <td>{getStatusCell(company.entry)}</td>
                  <td>
                    <span className={`drs-score ${getDRSClass(company.drs)}`}>
                      {company.drs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {processedData.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            {t('common.noResults')}
          </div>
        )}
      </section>
    </div>
  );
}
