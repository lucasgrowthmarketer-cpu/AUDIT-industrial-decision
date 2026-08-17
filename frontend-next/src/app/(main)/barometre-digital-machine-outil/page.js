import { BAROMETRE } from '@/data/barometre';
import BarometreClient from '@/components/pages/BarometreClient';

const BASE = 'https://www.industrialdecision.com';

export const metadata = {
  title: BAROMETRE.title,
  description: BAROMETRE.description,
  alternates: {
    canonical: '/barometre-digital-machine-outil',
    languages: {
      'fr-FR': '/barometre-digital-machine-outil',
      'x-default': '/barometre-digital-machine-outil',
    },
  },
  openGraph: {
    title: BAROMETRE.title,
    description: BAROMETRE.description,
    url: `${BASE}/barometre-digital-machine-outil`,
    type: 'article',
  },
};

const datasetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: BAROMETRE.title,
  description: BAROMETRE.description,
  url: `${BASE}/barometre-digital-machine-outil`,
  creator: { '@id': `${BASE}/#organization` },
  license: 'https://creativecommons.org/licenses/by/4.0/',
  temporalCoverage: '2026-08',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Sites analysés', value: BAROMETRE.nbSites },
    { '@type': 'PropertyValue', name: 'Critères évalués', value: BAROMETRE.nbCriteres },
    { '@type': 'PropertyValue', name: 'Sites autorisant les crawlers IA', value: 3 },
    { '@type': 'PropertyValue', name: 'Sites avec fichier llms.txt', value: 4 },
  ],
  inLanguage: 'fr-FR',
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: BAROMETRE.hero.headline,
  description: BAROMETRE.description,
  url: `${BASE}/barometre-digital-machine-outil`,
  author: { '@id': `${BASE}/#organization` },
  publisher: { '@id': `${BASE}/#organization` },
  articleSection: 'Étude sectorielle',
  inLanguage: 'fr-FR',
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/home` },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: `${BASE}/insights` },
    { '@type': 'ListItem', position: 3, name: 'Baromètre digital machine-outil', item: `${BASE}/barometre-digital-machine-outil` },
  ],
};

export default function BarometrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <BarometreClient data={BAROMETRE} />
    </>
  );
}
