import CaseStudiesClient from '@/components/pages/CaseStudiesClient';
export const metadata = {
  title: 'Études de Cas — Résultats Clients Industriels',
  description: 'Résultats concrets chez nos clients industriels : scores SEO, pages indexées, demandes entrantes générées. Chiffres avant/après documentés.',
  alternates: {
    canonical: '/case-studies',
    languages: { 'fr-FR': '/case-studies', 'en-US': '/case-studies?lang=en', 'x-default': '/case-studies' },
  },
};
export default function CaseStudiesPage() { return <CaseStudiesClient />; }
