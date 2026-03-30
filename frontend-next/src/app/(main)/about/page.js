export const dynamic = "force-dynamic";
import AboutClient from '@/components/pages/AboutClient';
export const metadata = {
  title: 'A propos',
  description: 'Industrial Decision, cabinet de conseil digital specialise dans l\'industrie francaise. Notre mission, notre approche, nos valeurs.',
  alternates: { canonical: '/about' },
};
export default function AboutPage() { return <AboutClient />; }
