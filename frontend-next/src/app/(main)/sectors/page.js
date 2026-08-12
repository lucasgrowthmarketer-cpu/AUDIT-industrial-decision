import SectorsClient from '@/components/pages/SectorsClient';
export const metadata = {
  title: 'Secteurs — Machine-Outil, Mécanique, Maintenance',
  description: 'Nous intervenons auprès des distributeurs de machines-outils, mécaniciens de précision, chaudronniers et prestataires de maintenance industrielle.',
  alternates: {
    canonical: '/sectors',
    languages: { 'fr-FR': '/sectors', 'en-US': '/sectors?lang=en', 'x-default': '/sectors' },
  },
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
