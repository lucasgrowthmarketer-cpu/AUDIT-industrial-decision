export const dynamic = "force-dynamic";
import LegalClient from '@/components/pages/LegalClient';
export async function generateMetadata({ params: p }) {
  const params = await p;
  const title = params.page === 'privacy' ? 'Politique de confidentialite' : 'Mentions legales';
  return { title, alternates: { canonical: `/legal/${params.page}` }, robots: { index: false } };
}
export default async function LegalDetailPage({ params: p }) {
  const params = await p;
  return <LegalClient pageSlug={params.page} />;
}
