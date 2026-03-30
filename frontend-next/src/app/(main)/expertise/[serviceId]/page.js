export const dynamic = "force-dynamic";
import ExpertiseClient from '@/components/pages/ExpertiseClient';
const serviceMeta = {
  'audit-drs': { title: 'Audit Decision Readiness (DRS)', desc: 'Evaluez la maturite decisionnelle de votre presence digitale.' },
  'site-decisionnel': { title: 'Site Web Decisionnel', desc: 'Concevez un site web qui genere des decisions.' },
  'strategie-acquisition': { title: 'Strategie d Acquisition Digitale', desc: 'Structurez votre pipeline commercial digital.' },
  'accompagnement': { title: 'Accompagnement Continu', desc: 'Suivi strategique de votre transformation digitale.' },
};
export async function generateMetadata({ params: p }) {
  const params = await p;
  const meta = serviceMeta[params.serviceId];
  return { title: meta?.title || 'Service', description: meta?.desc, alternates: { canonical: `/expertise/${params.serviceId}` } };
}
export default async function ExpertiseDetailPage({ params: p }) {
  const params = await p;
  const meta = serviceMeta[params.serviceId] || {};
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": meta.title,
    "description": meta.desc,
    "url": `https://www.industrialdecision.com/expertise/${params.serviceId}`,
    "provider": { "@type": "Organization", "name": "Industrial Decision" },
    "areaServed": "FR"
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ExpertiseClient serviceId={params.serviceId} />
    </>
  );
}
