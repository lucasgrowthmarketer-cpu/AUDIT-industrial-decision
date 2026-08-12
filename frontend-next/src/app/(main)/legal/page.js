import LegalClient from '@/components/pages/LegalClient';
export const metadata = {
  title: 'Mentions legales',
  alternates: {
    canonical: '/legal',
    languages: { 'fr-FR': '/legal', 'en-US': '/legal?lang=en', 'x-default': '/legal' },
  },
  robots: { index: false },
};
export default function LegalPage() { return <LegalClient />; }
