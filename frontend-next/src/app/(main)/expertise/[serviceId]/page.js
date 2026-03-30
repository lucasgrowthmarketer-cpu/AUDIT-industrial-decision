export const dynamic = "force-dynamic";
import ExpertiseClient from '@/components/pages/ExpertiseClient';
const serviceMeta = {
  'audit-drs': { title: 'Audit Decision Readiness (DRS)', desc: 'Evaluez la maturite decisionnelle de votre presence digitale avec notre methodologie DRS proprietaire.' },
  'site-decisionnel': { title: 'Site Web Decisionnel', desc: 'Concevez un site web qui genere des decisions, pas juste des visites.' },
  'strategie-acquisition': { title: 'Strategie d\'Acquisition Digitale', desc: 'Structurez votre pipeline commercial digital pour l\'industrie.' },
  'accompagnement': { title: 'Accompagnement Continu', desc: 'Suivi strategique et operationnel de votre transformation digitale.' },
};
export async function generateMetadata({ params: p }) {
  const params = await p;
  const meta = serviceMeta[params.serviceId];
  return { title: meta?.title || 'Service', description: meta?.desc, alternates: { canonical: `/expertise/${params.serviceId}` } };
}
export default async function ExpertiseDetailPage({ params: p }) {
  const params = await p;
  return <ExpertiseClient serviceId={params.serviceId} />;
}
