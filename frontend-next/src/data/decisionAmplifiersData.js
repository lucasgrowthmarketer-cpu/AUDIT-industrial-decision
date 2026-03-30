// Decision Amplifiers Data - Local embedded dataset
// No external API calls - all data is statically typed and embedded

export const decisionAmplifiersData = {
  architecture: {
    intentClusters: [
      {
        id: 'crisis-response',
        labelEn: 'Crisis Response',
        labelFr: 'Réponse de crise',
        urgency: 5,
        signals: ['urgent inquiry', 'immediate need', 'crisis mention'],
        decisionRisk: 'High - requires immediate strategic clarity'
      },
      {
        id: 'strategic-planning',
        labelEn: 'Strategic Planning',
        labelFr: 'Planification stratégique',
        urgency: 3,
        signals: ['future planning', 'long-term', 'strategic review'],
        decisionRisk: 'Medium - needs structured approach'
      },
      {
        id: 'market-exploration',
        labelEn: 'Market Exploration',
        labelFr: 'Exploration de marché',
        urgency: 2,
        signals: ['market analysis', 'competition', 'opportunity'],
        decisionRisk: 'Low - information gathering phase'
      },
      {
        id: 'operational-review',
        labelEn: 'Operational Review',
        labelFr: 'Revue opérationnelle',
        urgency: 3,
        signals: ['process improvement', 'efficiency', 'optimization'],
        decisionRisk: 'Medium - operational impact'
      },
      {
        id: 'due-diligence',
        labelEn: 'Due Diligence',
        labelFr: 'Due Diligence',
        urgency: 4,
        signals: ['acquisition', 'merger', 'investment'],
        decisionRisk: 'High - significant capital at risk'
      },
      {
        id: 'restructuring',
        labelEn: 'Restructuring',
        labelFr: 'Restructuration',
        urgency: 5,
        signals: ['turnaround', 'reorganization', 'cost reduction'],
        decisionRisk: 'Critical - survival mode'
      }
    ]
  },
  
  visibility: {
    channels: [
      {
        id: 'organic-search',
        nameEn: 'Organic Search',
        nameFr: 'Recherche organique',
        metrics: [
          { label: 'Impressions', value: 12500, unit: '/mo' },
          { label: 'CTR', value: 3.2, unit: '%' },
          { label: 'Position', value: 8.4, unit: ' avg' }
        ]
      },
      {
        id: 'linkedin',
        nameEn: 'LinkedIn Network',
        nameFr: 'Réseau LinkedIn',
        metrics: [
          { label: 'Connections', value: 2840, unit: '' },
          { label: 'Engagement', value: 4.7, unit: '%' },
          { label: 'Profile Views', value: 890, unit: '/mo' }
        ]
      },
      {
        id: 'direct-referral',
        nameEn: 'Direct Referral',
        nameFr: 'Recommandation directe',
        metrics: [
          { label: 'Qualified Leads', value: 24, unit: '/qtr' },
          { label: 'Conversion', value: 42, unit: '%' },
          { label: 'NPS', value: 72, unit: '' }
        ]
      }
    ]
  },
  
  trust: {
    trustMetrics: [
      { id: 'expertise-proof', label: 'Expertise Proof', value: 78, unit: '%' },
      { id: 'case-validation', label: 'Case Validation', value: 85, unit: '%' },
      { id: 'response-quality', label: 'Response Quality', value: 92, unit: '%' },
      { id: 'confidentiality', label: 'Confidentiality Score', value: 100, unit: '%' }
    ],
    trustSignals: [
      { en: 'Anonymized case studies with verified KPIs', fr: 'Études de cas anonymisées avec KPIs vérifiés' },
      { en: 'Clear methodology documentation', fr: 'Documentation méthodologique claire' },
      { en: 'Transparent pricing and engagement models', fr: 'Tarification et modèles d\'engagement transparents' },
      { en: 'GDPR compliant data handling', fr: 'Traitement des données conforme au RGPD' },
      { en: 'No-commitment initial assessment', fr: 'Évaluation initiale sans engagement' }
    ]
  },
  
  activation: {
    activationLogic: [
      {
        step: 1,
        labelEn: 'Intent Recognition',
        labelFr: 'Reconnaissance d\'intention',
        descriptionEn: 'Identify the decision context and urgency level from initial inquiry signals.',
        descriptionFr: 'Identifier le contexte de décision et le niveau d\'urgence à partir des signaux de demande initiale.'
      },
      {
        step: 2,
        labelEn: 'Value Alignment',
        labelFr: 'Alignement de valeur',
        descriptionEn: 'Match visitor needs with relevant scenarios, processes, and proof blocks.',
        descriptionFr: 'Faire correspondre les besoins du visiteur avec les scénarios, processus et blocs de preuve pertinents.'
      },
      {
        step: 3,
        labelEn: 'Trust Establishment',
        labelFr: 'Établissement de la confiance',
        descriptionEn: 'Provide governance-backed evidence and clear methodology transparency.',
        descriptionFr: 'Fournir des preuves garanties par la gouvernance et une transparence méthodologique claire.'
      },
      {
        step: 4,
        labelEn: 'Gate Selection',
        labelFr: 'Sélection de porte',
        descriptionEn: 'Guide to appropriate entry point based on urgency and commitment level.',
        descriptionFr: 'Guider vers le point d\'entrée approprié en fonction de l\'urgence et du niveau d\'engagement.'
      },
      {
        step: 5,
        labelEn: 'Qualified Engagement',
        labelFr: 'Engagement qualifié',
        descriptionEn: 'Convert high-intent visitors into meaningful advisory conversations.',
        descriptionFr: 'Convertir les visiteurs à forte intention en conversations de conseil significatives.'
      }
    ]
  },
  
  indices: {
    definitions: [
      {
        id: 'DRS',
        nameEn: 'Decision Readiness Score',
        nameFr: 'Score de Préparation à la Décision',
        formula: '(scenarios + process + proof + entry) / 4 × 100',
        weights: { yes: 1, partial: 0.5, no: 0 },
        descriptionEn: 'Measures how well-prepared a company is for strategic decisions based on 4 dimensions.',
        descriptionFr: 'Mesure le niveau de préparation d\'une entreprise aux décisions stratégiques sur 4 dimensions.'
      },
      {
        id: 'URI',
        nameEn: 'Uncertainty Reduction Index',
        nameFr: 'Indice de Réduction d\'Incertitude',
        formula: 'scenarioToProcess × 0.3 + processToProof × 0.3 + proofToGate × 0.4',
        descriptionEn: 'Tracks how effectively the system reduces decision uncertainty through the funnel.',
        descriptionFr: 'Suit l\'efficacité du système à réduire l\'incertitude décisionnelle à travers l\'entonnoir.'
      },
      {
        id: 'IPI',
        nameEn: 'Industrial Pressure Index',
        nameFr: 'Indice de Pression Industrielle',
        formula: 'normalizedVolume + yoyScore + concentrationScore',
        descriptionEn: 'Composite index of industrial failure pressure in France.',
        descriptionFr: 'Indice composite de la pression des défaillances industrielles en France.'
      },
      {
        id: 'ICR',
        nameEn: 'Intent Coverage Rate',
        nameFr: 'Taux de Couverture d\'Intention',
        formula: 'coveredIntents / totalIntents × 100',
        descriptionEn: 'Percentage of industrial decision intents addressed by the system.',
        descriptionFr: 'Pourcentage des intentions de décision industrielle traitées par le système.'
      },
      {
        id: 'NDI',
        nameEn: 'Network Density Index',
        nameFr: 'Indice de Densité Réseau',
        formula: 'qualifiedConnections / totalConnections × qualityFactor',
        descriptionEn: 'Quality-weighted density of professional network connections.',
        descriptionFr: 'Densité pondérée par la qualité des connexions du réseau professionnel.'
      },
      {
        id: 'AEI',
        nameEn: 'Activation Efficiency Index',
        nameFr: 'Indice d\'Efficacité d\'Activation',
        formula: 'qualifiedMeetings / activatedLeads × 100',
        descriptionEn: 'Conversion rate from activated leads to qualified meetings.',
        descriptionFr: 'Taux de conversion des leads activés en réunions qualifiées.'
      },
      {
        id: 'SCI',
        nameEn: 'System Coherence Index',
        nameFr: 'Indice de Cohérence Système',
        formula: 'DRS×0.25 + URI×0.25 + ICR×0.20 + Trust×0.15 + AEI×0.15',
        descriptionEn: 'Overall system effectiveness score combining all metrics.',
        descriptionFr: 'Score global d\'efficacité du système combinant toutes les métriques.'
      }
    ]
  }
};

export default decisionAmplifiersData;
