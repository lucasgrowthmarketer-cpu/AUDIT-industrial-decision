import { REGION_SLUGS } from '@/data/regions';
import { LANDING_SLUGS, LANDINGS } from '@/data/landings';
import { CAS_SLUGS, CAS_CLIENTS } from '@/data/casClients';

const BASE = 'https://www.industrialdecision.com';

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    // ── Accueil ────────────────────────────────────────────
    { url: `${BASE}/home`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // ── Conversion ─────────────────────────────────────────
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ── Hubs services ──────────────────────────────────────
    { url: `${BASE}/expertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/agence-web-industrie`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ── Landing pages service ──────────────────────────────
    ...LANDING_SLUGS.map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: LANDINGS[slug].priority ?? 0.9,
    })),

    // ── Pages regionales ───────────────────────────────────
    ...REGION_SLUGS.map((slug) => ({
      url: `${BASE}/agence-web-industrie/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),

    // ── Methodologie ───────────────────────────────────────
    { url: `${BASE}/expertise/audit-drs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/expertise/site-decisionnel`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/expertise/strategie-acquisition`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/expertise/accompagnement`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Secteurs ───────────────────────────────────────────
    { url: `${BASE}/sectors`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sectors/machine-tool`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/sectors/industrial-restructuring`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/sectors/industrial-services`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ── Etudes de cas ──────────────────────────────────────
    ...CAS_SLUGS.map((slug) => ({
      url: `${BASE}/etudes-de-cas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: CAS_CLIENTS[slug].priority ?? 0.8,
    })),

    // ── Contenu et preuve ──────────────────────────────────
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // ── Entreprise ─────────────────────────────────────────
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/team`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ── Legal ──────────────────────────────────────────────
    { url: `${BASE}/legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
