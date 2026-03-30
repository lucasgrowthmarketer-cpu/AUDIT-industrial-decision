export const dynamic = "force-dynamic";
import ExpertiseClient from '@/components/pages/ExpertiseClient';
export const metadata = {
  title: 'Services — Audit DRS, Site Decisionnel, Strategie',
  description: 'Nos services : Audit Decision Readiness (DRS), site web decisionnel, strategie d acquisition digitale, accompagnement continu.',
  alternates: { canonical: '/expertise' },
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
