export const dynamic = "force-dynamic";
import TeamClient from '@/components/pages/TeamClient';
export const metadata = {
  title: 'Equipe',
  description: 'Les experts derriere Industrial Decision. Strategie digitale, architecture web industrielle, operations.',
  alternates: { canonical: '/team' },
};
export default function TeamPage() { return <TeamClient />; }
