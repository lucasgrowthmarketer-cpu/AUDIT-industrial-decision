export const dynamic = "force-dynamic";
import dynamic2 from 'next/dynamic';
const LandingClient = dynamic2(() => import('@/components/pages/LandingClient'), { ssr: false });
export const metadata = {
  title: 'Industrial Decision — Engineering Better Decisions',
  description: 'Cabinet de conseil digital pour l\'industrie francaise. 30+ OEM analyses, methodologie DRS proprietaire.',
  alternates: { canonical: '/' },
};
export default function LandingPage() {
  return <LandingClient />;
}
