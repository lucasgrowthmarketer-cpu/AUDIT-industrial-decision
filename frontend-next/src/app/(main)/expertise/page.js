import ExpertiseClient from '@/components/pages/ExpertiseClient';
export const metadata = {
  title: 'Nos Services — Site Web, SEO et Référencement IA',
  description: 'Création de sites industriels, référencement SEO, optimisation pour les moteurs IA et accompagnement continu. Services pensés pour les PME et ETI industrielles.',
  alternates: {
    canonical: '/expertise',
    languages: { 'fr-FR': '/expertise', 'en-US': '/expertise?lang=en', 'x-default': '/expertise' },
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services Industrial Decision",
  "itemListElement": [
    { "@type": "Service", "position": 1, "name": "Audit Decision Readiness (DRS)", "url": "https://www.industrialdecision.com/expertise/audit-drs" },
    { "@type": "Service", "position": 2, "name": "Site Web Decisionnel", "url": "https://www.industrialdecision.com/expertise/site-decisionnel" },
    { "@type": "Service", "position": 3, "name": "Strategie d Acquisition Digitale", "url": "https://www.industrialdecision.com/expertise/strategie-acquisition" },
    { "@type": "Service", "position": 4, "name": "Accompagnement Continu", "url": "https://www.industrialdecision.com/expertise/accompagnement" },
  ]
};
export default function ExpertisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ExpertiseClient />
    </>
  );
}
