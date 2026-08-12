export const dynamic = "force-dynamic";
import InsightsClient from '@/components/pages/InsightsClient';
export const metadata = {
  title: 'Blog — SEO Industriel & Référencement IA',
  description: 'Analyses et guides pratiques sur le référencement industriel, la visibilité IA et la génération de leads B2B. Publié par Industrial Decision.',
  alternates: {
    canonical: '/insights',
    languages: { 'fr-FR': '/insights', 'en-US': '/insights?lang=en', 'x-default': '/insights' },
  },
};
export default function InsightsPage() { return <InsightsClient />; }
