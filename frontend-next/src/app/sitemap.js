const BASE = 'https://www.industrialdecision.com';

export default function sitemap() {
  const now = new Date().toISOString();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/home`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/team`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/expertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/expertise/audit-drs`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/expertise/site-decisionnel`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/expertise/strategie-acquisition`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/expertise/accompagnement`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/sectors`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sectors/machine-tool`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/sectors/industrial-restructuring`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/sectors/industrial-services`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/insights`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/demo`, lastModified: now, priority: 0.6 },
  ];
}
