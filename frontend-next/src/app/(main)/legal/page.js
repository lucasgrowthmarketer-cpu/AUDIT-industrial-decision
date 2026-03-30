export const dynamic = "force-dynamic";
import LegalClient from '@/components/pages/LegalClient';
export const metadata = {
  title: 'Mentions legales',
  alternates: { canonical: '/legal' },
  robots: { index: false },
};
export default function LegalPage() { return <LegalClient />; }
