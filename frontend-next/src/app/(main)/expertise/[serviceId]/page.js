import ExpertiseClient from '@/components/pages/ExpertiseClient';
const serviceMeta = {
  'audit-drs': { title: 'Audit SEO Gratuit pour Site Industriel', desc: 'Audit complet de votre présence digitale : SEO technique, contenu, visibilité Google et IA. Diagnostic chiffré et plan d\'action pour votre site industriel.' },
  'site-decisionnel': { title: 'Création de Site Web pour PME Industrielle', desc: 'Nous concevons des sites industriels qui génèrent des demandes de devis. Catalogue produits, fiches machines, SEO intégré dès la conception.' },
  'strategie-acquisition': { title: 'Référencement SEO & Génération de Leads B2B Industrie', desc: 'Stratégie de référencement pour l\'industrie : SEO technique, contenu métier, visibilité locale. Objectif : des demandes entrantes qualifiées.' },
  'accompagnement': { title: 'Accompagnement Digital Continu pour Industriels', desc: 'Suivi mensuel de votre visibilité : production de contenu, optimisations SEO, reporting de performance. Un partenaire digital pour votre PME industrielle.' },
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
