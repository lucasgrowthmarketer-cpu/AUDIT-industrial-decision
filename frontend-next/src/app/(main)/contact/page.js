export const dynamic = "force-dynamic";
import ContactClient from '@/components/pages/ContactClient';
export const metadata = {
  title: 'Contact',
  description: 'Contactez Industrial Decision. Audit DRS gratuit, conseil strategique, accompagnement digital industriel.',
  alternates: { canonical: '/contact' },
};
export default function ContactPage() { return <ContactClient />; }
