export const dynamic = "force-dynamic";
import SectorsClient from '@/components/pages/SectorsClient';
export const metadata = {
  title: 'Secteurs — Machine-outil, Restructuration, Services industriels',
  description: 'Nos secteurs : negoce de machines-outils, restructuration industrielle, services industriels et asset management.',
  alternates: { canonical: '/sectors' },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Industrial Decision",
  "url": "https://www.industrialdecision.com/sectors",
  "knowsAbout": ["Machine-outil", "Restructuration industrielle", "Services industriels"],
  "areaServed": "FR"
};
export default function SectorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectorsClient />
    </>
  );
}
