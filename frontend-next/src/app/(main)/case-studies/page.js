export const dynamic = "force-dynamic";
import CaseStudiesClient from '@/components/pages/CaseStudiesClient';
export const metadata = {
  title: 'Etudes de Cas',
  description: 'Resultats concrets de nos interventions aupres de PME et ETI industrielles francaises.',
  alternates: { canonical: '/case-studies' },
};
export default function CaseStudiesPage() { return <CaseStudiesClient />; }
