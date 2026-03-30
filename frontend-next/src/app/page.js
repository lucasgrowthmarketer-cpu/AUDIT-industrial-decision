export const dynamic = "force-dynamic";
import LandingWrapper from '@/components/pages/LandingWrapper';
export const metadata = {
  title: 'Industrial Decision — Engineering Better Decisions',
  description: 'Cabinet de conseil digital pour l industrie francaise.',
  alternates: { canonical: '/' },
};
export default function LandingPage() {
  return <LandingWrapper />;
}
