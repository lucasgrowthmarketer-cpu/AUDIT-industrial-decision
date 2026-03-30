export const dynamic = "force-dynamic";
import SectorsClient from '@/components/pages/SectorsClient';
export const metadata = {
  title: 'Secteurs — Machine-outil, Restructuration, Services industriels',
  description: 'Nos secteurs : negoce de machines-outils, restructuration industrielle, services industriels et asset management.',
  alternates: { canonical: '/sectors' },
};
export default function SectorsPage() { return <SectorsClient />; }
