import ExpertiseClient from '@/components/pages/ExpertiseClient';
import { LANDINGS, LANDING_SLUGS } from '@/data/landings';

const BASE = 'https://www.industrialdecision.com';

export const metadata = {
  title: 'Nos Services — Site Web, SEO et Référencement IA',
  description:
    'Création de sites industriels, référencement SEO, optimisation pour les moteurs IA et accompagnement continu. Services pensés pour les PME et ETI industrielles.',
  alternates: {
    canonical: '/expertise',
    languages: { 'fr-FR': '/expertise', 'en-US': '/expertise?lang=en', 'x-default': '/expertise' },
  },
};

// Methodologie (pages historiques) + domaines d'intervention (landings)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services Industrial Decision',
  itemListElement: [
    ...LANDING_SLUGS.map((slug, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: LANDINGS[slug].title,
      url: `${BASE}/${slug}`,
    })),
    { '@type': 'ListItem', position: 7, name: 'Méthodologie DRS', url: `${BASE}/expertise/audit-drs` },
    { '@type': 'ListItem', position: 8, name: 'Framework de site décisionnel', url: `${BASE}/expertise/site-decisionnel` },
    { '@type': 'ListItem', position: 9, name: 'Clusters de contenu', url: `${BASE}/expertise/strategie-acquisition` },
    { '@type': 'ListItem', position: 10, name: 'Pilotage mensuel', url: `${BASE}/expertise/accompagnement` },
  ],
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/home` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/expertise` },
  ],
};

export default function ExpertisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ExpertiseClient />
    </>
  );
}
