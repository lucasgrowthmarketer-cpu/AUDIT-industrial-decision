import HomeClient from '@/components/pages/HomeClient';
export const metadata = {
  title: 'Création de Site Web Industriel & Référencement SEO',
  description: 'Site web, SEO et référencement IA pour l\'industrie. Nous aidons les dirigeants industriels à générer des demandes entrantes qualifiées. Audit gratuit.',
  alternates: {
    canonical: '/home',
    languages: { 'fr-FR': '/home', 'en-US': '/home?lang=en', 'x-default': '/home' },
  },
};

export default function HomePage() { return <HomeClient />; }
