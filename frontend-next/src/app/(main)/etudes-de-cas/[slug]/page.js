import { notFound } from 'next/navigation';
import { CAS_SLUGS, getCas } from '@/data/casClients';
import CaseStudyClient from '@/components/pages/CaseStudyClient';

const BASE = 'https://www.industrialdecision.com';

export function generateStaticParams() {
  return CAS_SLUGS.map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { slug } = await p;
  const d = getCas(slug);
  if (!d) return {};
  return {
    title: d.title,
    description: d.description,
    alternates: {
      canonical: `/etudes-de-cas/${slug}`,
      languages: { 'fr-FR': `/etudes-de-cas/${slug}`, 'x-default': `/etudes-de-cas/${slug}` },
    },
    openGraph: {
      title: d.title,
      description: d.description,
      url: `${BASE}/etudes-de-cas/${slug}`,
      type: 'article',
      images: [{ url: `${BASE}${d.hero.image}` }],
    },
  };
}

export default async function CasPage({ params: p }) {
  const { slug } = await p;
  const d = getCas(slug);
  if (!d) notFound();

  const url = `${BASE}/etudes-de-cas/${slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: d.title,
    description: d.description,
    url,
    image: `${BASE}${d.hero.image}`,
    author: { '@id': `${BASE}/#organization` },
    publisher: { '@id': `${BASE}/#organization` },
    about: {
      '@type': 'Organization',
      name: d.client,
      url: `https://www.${d.site}`,
      address: { '@type': 'PostalAddress', addressLocality: d.ville, addressCountry: 'FR' },
    },
    articleSection: 'Étude de cas',
    inLanguage: 'fr-FR',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/home` },
      { '@type': 'ListItem', position: 2, name: 'Études de cas', item: `${BASE}/case-studies` },
      { '@type': 'ListItem', position: 3, name: d.client, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CaseStudyClient data={d} />
    </>
  );
}
