import ContactClient from '@/components/pages/ContactClient';
export const metadata = {
  title: 'Contact — Audit SEO Gratuit de Votre Site',
  description: 'Discutons de votre projet digital. Audit gratuit de votre site industriel : SEO technique, visibilité Google et IA, plan d\'action chiffré.',
  alternates: {
    canonical: '/contact',
    languages: { 'fr-FR': '/contact', 'en-US': '/contact?lang=en', 'x-default': '/contact' },
  },
};
export default function ContactPage() { return <ContactClient />; }
