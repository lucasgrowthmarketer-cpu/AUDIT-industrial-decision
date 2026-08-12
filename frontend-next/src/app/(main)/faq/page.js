import FaqClient from '@/components/pages/FaqClient';
import { FAQ_GLOBALE } from '@/data/faq';

const BASE = 'https://www.industrialdecision.com';

export const metadata = {
  title: 'FAQ — Référencement et Sites Web Industriels',
  description:
    "Vos questions sur le référencement industriel, la conception de sites, la refonte sans perte de positions et la visibilité dans les moteurs IA. Réponses sourcées.",
  alternates: {
    canonical: '/faq',
    languages: { 'fr-FR': '/faq', 'en-US': '/faq?lang=en', 'x-default': '/faq' },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GLOBALE.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/home` },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <FaqClient />
    </>
  );
}
