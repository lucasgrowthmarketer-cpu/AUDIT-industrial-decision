export const dynamic = "force-dynamic";
import SectorsClient from '@/components/pages/SectorsClient';
const sectorMeta = {
  'machine-tool': { title: 'Secteur Machine-Outil', desc: 'Conseil digital pour le negoce de machines-outils. 30+ OEM analyses.' },
  'industrial-restructuring': { title: 'Restructuration Industrielle', desc: 'Accompagnement digital des PME/ETI en restructuration.' },
  'industrial-services': { title: 'Services Industriels', desc: 'Transformation digitale des entreprises de services industriels.' },
};
export async function generateMetadata({ params: p }) {
  const params = await p;
  const meta = sectorMeta[params.sectorId];
  return { title: meta?.title || 'Secteur', description: meta?.desc, alternates: { canonical: `/sectors/${params.sectorId}` } };
}
export default async function SectorDetailPage({ params: p }) {
  const params = await p;
  return <SectorsClient sectorId={params.sectorId} />;
}
