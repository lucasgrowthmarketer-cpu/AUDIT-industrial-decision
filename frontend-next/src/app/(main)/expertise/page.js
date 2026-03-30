export const dynamic = "force-dynamic";
import ExpertiseClient from '@/components/pages/ExpertiseClient';
export const metadata = {
  title: 'Services — Audit DRS, Site Decisionnel, Strategie',
  description: 'Nos services : Audit Decision Readiness (DRS), site web decisionnel, strategie d\'acquisition digitale, accompagnement continu.',
  alternates: { canonical: '/expertise' },
};
export default function ExpertisePage() { return <ExpertiseClient />; }
