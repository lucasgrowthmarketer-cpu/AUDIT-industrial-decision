import { notFound } from 'next/navigation';
import { LANDINGS, LANDING_SLUGS, getLanding } from '@/data/landings';
import LandingPageClient from '@/components/pages/LandingPageClient';

const BASE = 'https://www.industrialdecision.com';

export function generateStaticParams() {
  return LANDING_SLUGS.map((landing) => ({ landing }));
}
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { landing } = await p;
  const d = getLanding(landing);
  if (!d) return {};
  return {
    title: d.title,
    description: d.description,
    alternates: {
      canonical: `/${landing}`,
      languages: { 'fr-FR': `/${landing}`, 'x-default': `/${landing}` },
    },
    openGraph: {
      title: d.title,
      description: d.description,
      url: `${BASE}/${landing}`,
      images: d.image ? [{ url: `${BASE}${d.image}` }] : undefined,
    },
  };
}

export default async function LandingPage({ params: p }) {
  const { landing } = await p;
  const d = getLanding(landing);
  if (!d) notFound();

  const url = `${BASE}/${landing}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: d.hero.headline,
    description: d.description,
    url,
    serviceType: d.kicker,
    provider: { '@id': `${BASE}/#organization` },
    areaServed: { '@type': 'Country', name: 'France' },
  };

  const faqJsonLd = d.objections?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: d.objections.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/home` },
      { '@type': 'ListItem', position: 2, name: d.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LandingPageClient data={d} landings={LANDINGS} />
    </>
  );
}
