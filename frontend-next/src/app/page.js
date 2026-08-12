export const dynamic = "force-dynamic";
import LandingWrapper from '@/components/pages/LandingWrapper';
export const metadata = {
  title: 'Agence Web & SEO Industrie Française | Industrial Decision',
  description: 'Nous concevons les sites web et la visibilité en ligne des PME et ETI industrielles françaises. Machine-outil, mécanique de précision, maintenance industrielle.',
  alternates: {
    canonical: '/',
    languages: { 'fr-FR': '/', 'en-US': '/?lang=en', 'x-default': '/' },
  },
};
export default function LandingPage() {
  return <LandingWrapper />;
}
