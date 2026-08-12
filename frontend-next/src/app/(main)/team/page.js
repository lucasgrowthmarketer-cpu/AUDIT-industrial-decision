import TeamClient from '@/components/pages/TeamClient';
export const metadata = {
  title: 'L\'Équipe — Experts Web & SEO Industrie',
  description: 'Lucas Ansel, Ayoub Bouzalmad et David Ansel. Stratégie digitale, développement web et conseil terrain pour l\'industrie française.',
  alternates: {
    canonical: '/team',
    languages: { 'fr-FR': '/team', 'en-US': '/team?lang=en', 'x-default': '/team' },
  },
};
export default function TeamPage() { return <TeamClient />; }
