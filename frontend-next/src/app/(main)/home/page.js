export const dynamic = "force-dynamic";
import HomeClient from '@/components/pages/HomeClient';
export const metadata = {
  title: 'Accueil — Decision Intelligence pour l\'industrie',
  description: 'Industrial Decision aide les dirigeants industriels a prendre de meilleures decisions. Audit DRS, site decisionnel, strategie d\'acquisition.',
  alternates: { canonical: '/home' },
};
export default function HomePage() { return <HomeClient />; }
