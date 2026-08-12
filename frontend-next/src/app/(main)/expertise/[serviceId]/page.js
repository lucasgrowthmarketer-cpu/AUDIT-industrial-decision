import ExpertiseClient from '@/components/pages/ExpertiseClient';
const serviceMeta = {
  'audit-drs': {
    title: 'Méthodologie DRS : notre grille d\'audit en 7 dimensions',
    desc: 'Comment nous notons un site industriel : les sept dimensions analysées, la pondération du score et le format du rapport livré.',
  },
  'site-decisionnel': {
    title: 'Framework de site décisionnel : scénarios et portes d\'entrée',
    desc: 'Notre architecture de site industriel : scénarios par type d\'acheteur, portes d\'entrée contextuelles, blocs de preuve et visibilité du processus.',
  },
  'strategie-acquisition': {
    title: 'Clusters de contenu et couche de visibilité décideurs',
    desc: 'Notre méthode de construction sémantique : clusters de mots-clés par intention, couche de visibilité et roadmap éditoriale sur six mois.',
  },
  'accompagnement': {
    title: 'Pilotage mensuel : KPI, dashboard et ajustements',
    desc: 'Le détail de notre suivi : rapport KPI mensuel, analyse de tendances, rafraîchissement du contenu selon les données de marché.',
  },
};
export async function generateMetadata({ params: p }) {
  const params = await p;
  const meta = serviceMeta[params.serviceId];
  return { title: meta?.title || 'Service', description: meta?.desc, alternates: {
      canonical: `/expertise/${params.serviceId}`,
      languages: { 'fr-FR': `/expertise/${params.serviceId}`, 'en-US': `/expertise/${params.serviceId}?lang=en`, 'x-default': `/expertise/${params.serviceId}` },
    } };
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
