export const dynamic = "force-dynamic";
import InsightsClient from '@/components/pages/InsightsClient';
export const metadata = {
  title: 'Ressources & Insights',
  description: 'Analyses, tendances et perspectives sur la transformation digitale industrielle en France.',
  alternates: { canonical: '/insights' },
};
export default function InsightsPage() { return <InsightsClient />; }
