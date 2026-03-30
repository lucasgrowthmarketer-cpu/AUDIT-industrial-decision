export const dynamic = "force-dynamic";
import SectorsClient from '@/components/pages/SectorsClient';
const sectorMeta = {
  'machine-tool': { title: 'Secteur Machine-Outil', desc: 'Conseil digital pour le negoce de machines-outils.' },
  'industrial-restructuring': { title: 'Restructuration Industrielle', desc: 'Accompagnement digital des PME/ETI en restructuration.' },
  'industrial-services': { title: 'Services Industriels', desc: 'Transformation digitale des services industriels.' },
};
export async function generateMetadata({ params: p }) {
  const params = await p;
  const meta = sectorMeta[params.sectorId];
  return { title: meta?.title || 'Secteur', description: meta?.desc, alternates: { canonical: `/sectors/${params.sectorId}` } };
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
