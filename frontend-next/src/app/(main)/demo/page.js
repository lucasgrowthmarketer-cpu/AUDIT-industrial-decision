export const dynamic = "force-dynamic";
import DemoClient from '@/components/pages/DemoClient';
export const metadata = {
  title: 'Démo — Interface d\'Analyse Digitale Industrielle',
  description: 'Découvrez notre outil d\'analyse de la visibilité digitale industrielle. Démonstration interactive du Strategy Desk Industrial Decision.',
  alternates: {
    canonical: '/demo',
    languages: { 'fr-FR': '/demo', 'en-US': '/demo?lang=en', 'x-default': '/demo' },
  },
};
export default function DemoPage() { return <DemoClient />; }
