export const dynamic = "force-dynamic";
import LandingClient from '@/components/pages/LandingClient';

export const metadata = {
  title: 'Industrial Decision — Engineering Better Decisions',
  description: 'Cabinet de conseil digital pour l\'industrie francaise. 30+ OEM analyses, methodologie DRS proprietaire. Audit, strategie digitale, accompagnement.',
  alternates: { canonical: '/' },
};

export default function LandingPage() {
  return <LandingClient />;
}
