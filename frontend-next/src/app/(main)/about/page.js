import AboutClient from '@/components/pages/AboutClient';
export const metadata = {
  title: 'Notre Agence Web Spécialisée Industrie Française',
  description: 'Industrial Decision accompagne les PME et ETI industrielles françaises dans leur visibilité digitale. Notre approche, notre méthode, nos convictions.',
  alternates: {
    canonical: '/about',
    languages: { 'fr-FR': '/about', 'en-US': '/about?lang=en', 'x-default': '/about' },
  },
};
export default function AboutPage() { return <AboutClient />; }
