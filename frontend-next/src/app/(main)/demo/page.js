export const dynamic = "force-dynamic";
import DemoClient from '@/components/pages/DemoClient';
export const metadata = {
  title: 'Demo — Strategy Desk',
  description: 'Decouvrez notre interface de decision industrielle. Demo interactive du Strategy Desk.',
  alternates: { canonical: '/demo' },
};
export default function DemoPage() { return <DemoClient />; }
