import SectorsClient from '@/components/pages/SectorsClient';
const sectorMeta = {
  'machine-tool': { title: 'Agence Web & SEO pour Distributeurs Machines-Outils', desc: 'Site web et référencement pour le négoce de machines-outils. Catalogue en ligne, fiches machines optimisées, visibilité sur les requêtes marques et occasion.' },
  'industrial-restructuring': { title: 'Digital pour la Restructuration Industrielle', desc: 'Accompagnement digital des entreprises industrielles en transformation : refonte de site, repositionnement, visibilité auprès de nouveaux marchés.' },
  'industrial-services': { title: 'Site Web & SEO pour Services Industriels', desc: 'Maintenance, rétrofit, reconstruction, transferts d\'usine. Nous rendons vos services industriels visibles auprès des donneurs d\'ordres qui les cherchent.' },
};
export async function generateMetadata({ params: p }) {
  const params = await p;
  const meta = sectorMeta[params.sectorId];
  return { title: meta?.title || 'Secteur', description: meta?.desc, alternates: {
      canonical: `/sectors/${params.sectorId}`,
      languages: { 'fr-FR': `/sectors/${params.sectorId}`, 'en-US': `/sectors/${params.sectorId}?lang=en`, 'x-default': `/sectors/${params.sectorId}` },
    } };
}
export default async function SectorDetailPage({ params: p }) {
  const params = await p;
  const meta = sectorMeta[params.sectorId] || {};
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Industrial Decision",
    "description": meta.desc,
    "url": `https://www.industrialdecision.com/sectors/${params.sectorId}`,
    "areaServed": "FR",
    "knowsAbout": meta.title
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectorsClient sectorId={params.sectorId} />
    </>
  );
}
