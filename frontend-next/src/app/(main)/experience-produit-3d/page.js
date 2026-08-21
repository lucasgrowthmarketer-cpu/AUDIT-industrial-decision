export const dynamic = "force-dynamic";
import Experience3DClient from '@/components/pages/Experience3DClient';

const TITLE = 'Expérience Produit 3D · Viewers 3D pour machines industrielles';
const DESC = 'Viewers 3D interactifs pour machines industrielles : hotspots techniques, cycles animés, vues éclatées. Démonstration en ligne, intégration à votre site.';

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/experience-produit-3d' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://www.industrialdecision.com/experience-produit-3d',
    type: 'website',
    images: [{ url: '/images/experience/capture-2.jpg', width: 1200, height: 750 }],
  },
};

export default function Experience3DPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Expérience Produit 3D",
    "description": DESC,
    "url": "https://www.industrialdecision.com/experience-produit-3d",
    "provider": { "@type": "Organization", "name": "Industrial Decision", "url": "https://www.industrialdecision.com" },
    "areaServed": "FR",
    "serviceType": "3D product experience for industrial machinery",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Combien de temps pour mettre en ligne notre première machine ?",
        "acceptedAnswer": { "@type": "Answer", "text": "De 4 à 8 semaines selon la complexité : modélisation ou adaptation de votre CAO existante, configuration des hotspots et animations, intégration à votre site." } },
      { "@type": "Question", "name": "Faut-il fournir des fichiers CAO ?",
        "acceptedAnswer": { "@type": "Answer", "text": "C'est l'idéal (STEP, IGES ou formats natifs), nous les optimisons pour le web. Sans CAO, nous modélisons à partir de photos et de la documentation technique." } },
      { "@type": "Question", "name": "Comment protéger les éléments confidentiels de nos machines ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le modèle web est une version stylisée et allégée : nous retirons ou simplifions tout ce qui relève du secret industriel. Vous validez le modèle avant mise en ligne." } },
      { "@type": "Question", "name": "Est-ce que ça fonctionne sur mobile et sur les postes sans carte graphique ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui. L'expérience s'adapte automatiquement : version tactile sur mobile, réglages de performance selon la machine, et repli en vidéo pour les navigateurs sans 3D." } },
      { "@type": "Question", "name": "Comment ça s'intègre à notre site existant ?",
        "acceptedAnswer": { "@type": "Answer", "text": "En page dédiée sur un sous-domaine, comme notre démonstration, ou embarqué directement dans vos pages produit. Aucun changement de votre site n'est requis dans le premier cas." } },
      { "@type": "Question", "name": "Que mesure-t-on exactement ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Chaque interaction : composants consultés, animations lancées, temps passé, parcours jusqu'au contact. Les données remontent dans votre Google Analytics." } },
      { "@type": "Question", "name": "Combien ça coûte ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Chaque machine est différente : la fourchette se précise après un échange de 30 minutes sur votre catalogue et vos fichiers disponibles. Réponse sous 24 h ouvrées." } }
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Experience3DClient />
    </>
  );
}
