/**
 * Industrial Decision - Indices Calculation Library
 * All indices are normalized to 0-100 scale
 */

/**
 * DRS (Decision Readiness Score) - 0-100
 * Maps yes/partial/no to weights and aggregates per company
 * Formula: (scenarios + process + proof + entry) / 4 * 100
 * where yes=1, partial=0.5, no=0
 */
export const calculateDRS = (company) => {
  const weights = { yes: 1, partial: 0.5, no: 0, Yes: 1, Partial: 0.5, No: 0 };
  
  const scenarios = weights[company.scenarios] || 0;
  const process = weights[company.process] || 0;
  const proof = weights[company.proof] || 0;
  const entry = weights[company.entry] || 0;
  
  return Math.round(((scenarios + process + proof + entry) / 4) * 100);
};

/**
 * Calculate average DRS for a list of companies
 */
export const calculateAverageDRS = (companies) => {
  if (!companies || companies.length === 0) return 0;
  const total = companies.reduce((sum, company) => sum + calculateDRS(company), 0);
  return Math.round(total / companies.length);
};

/**
 * URI (Uncertainty Reduction Index) - 0-100
 * Completion rate: scenario → process → proof → gate
 * Uses mock analytics data
 */
export const calculateURI = (analyticsData = {}) => {
  const {
    scenarioViews = 65,
    processViews = 48,
    proofViews = 35,
    gateSubmissions = 22
  } = analyticsData;
  
  // Funnel completion rate
  const scenarioToProcess = processViews / scenarioViews;
  const processToProof = proofViews / processViews;
  const proofToGate = gateSubmissions / proofViews;
  
  // Weighted average of conversion rates
  const uri = ((scenarioToProcess * 0.3) + (processToProof * 0.3) + (proofToGate * 0.4)) * 100;
  return Math.round(Math.min(uri, 100));
};

/**
 * IPI (Industrial Pressure Index) - 0-100
 * Normalized index using failures level + YoY change + industrial share
 */
export const calculateIPI = (currentFailures, previousFailures, industrialShare = 0.12) => {
  // Normalize failure volume (0-60 points, capped at 2500 failures)
  const normalizedVolume = Math.min((currentFailures / 2500) * 60, 60);
  
  // YoY variation impact (0-30 points)
  const yoyChange = previousFailures > 0 
    ? ((currentFailures - previousFailures) / previousFailures) * 100 
    : 0;
  const yoyScore = Math.min(Math.max(yoyChange * 1.5, 0), 30);
  
  // Industrial concentration factor (0-10 points)
  const concentrationScore = industrialShare * 100 * 0.1;
  
  return Math.round(normalizedVolume + yoyScore + concentrationScore);
};

/**
 * ICR (Intent Coverage Rate) - 0-100
 * Measures coverage of industrial decision intents
 */
export const calculateICR = (coveredIntents, totalIntents) => {
  if (totalIntents === 0) return 0;
  return Math.round((coveredIntents / totalIntents) * 100);
};

/**
 * NDI (Network Density Index) - 0-100
 * Network density = (qualifiedConnections / totalConnections) * qualityFactor
 */
export const calculateNDI = (qualifiedConnections, totalConnections, qualityFactor = 0.8) => {
  if (totalConnections === 0) return 0;
  return Math.round((qualifiedConnections / totalConnections) * qualityFactor * 100);
};

/**
 * AEI (Activation Efficiency Index) - 0-100
 * Activation efficiency = qualifiedMeetings / activatedLeads
 */
export const calculateAEI = (qualifiedMeetings, activatedLeads) => {
  if (activatedLeads === 0) return 0;
  return Math.round((qualifiedMeetings / activatedLeads) * 100);
};

/**
 * SCI (System Coherence Index) - 0-100
 * Weighted composite of all indices
 * SCI = DRS*0.25 + URI*0.25 + ICR*0.20 + Trust*0.15 + AEI*0.15
 * 
 * Example calculation:
 * DRS = 72, URI = 68, ICR = 55, Trust = 48, AEI = 62
 * SCI = (72*0.25) + (68*0.25) + (55*0.20) + (48*0.15) + (62*0.15)
 * SCI = 18 + 17 + 11 + 7.2 + 9.3 = 62.5 ≈ 63
 */
export const calculateSCI = (metrics) => {
  const {
    DRS = 0,
    URI = 0,
    ICR = 0,
    Trust = 0,
    AEI = 0
  } = metrics;
  
  const weights = {
    DRS: 0.25,
    URI: 0.25,
    ICR: 0.20,
    Trust: 0.15,
    AEI: 0.15
  };
  
  const sci = (DRS * weights.DRS) +
              (URI * weights.URI) +
              (ICR * weights.ICR) +
              (Trust * weights.Trust) +
              (AEI * weights.AEI);
  
  return Math.round(sci);
};

/**
 * Get color based on score thresholds
 */
export const getScoreColor = (score, thresholds = { high: 75, medium: 50 }) => {
  if (score >= thresholds.high) return '#10b981'; // success green
  if (score >= thresholds.medium) return '#f59e0b'; // warning amber
  return '#ef4444'; // error red
};

/**
 * Get score label based on value
 */
export const getScoreLabel = (score, language = 'en') => {
  const labels = {
    en: { excellent: 'Excellent', good: 'Good', needsImprovement: 'Needs Improvement' },
    fr: { excellent: 'Excellent', good: 'Bon', needsImprovement: 'À améliorer' }
  };
  
  const lang = labels[language] || labels.en;
  
  if (score >= 75) return lang.excellent;
  if (score >= 50) return lang.good;
  return lang.needsImprovement;
};

// Sample metrics for demonstration
export const sampleMetrics = {
  DRS: 72,
  URI: 68,
  ICR: 55,
  Trust: 48,
  AEI: 62
};

// Example: calculateSCI(sampleMetrics) = 63
