import './globals.css';
import Script from 'next/script';
import I18nProvider from '@/components/providers/I18nProvider';

export const metadata = {
  metadataBase: new URL('https://www.industrialdecision.com'),
  title: {
    default: 'Agence Web & SEO pour l\'Industrie Française | Industrial Decision',
    template: '%s | Industrial Decision',
  },
  description: 'Agence web spécialisée industrie française. Création de sites, référencement SEO et IA pour PME et ETI industrielles. Machine-outil, mécanique, maintenance.',
  keywords: 'agence web industrie, création site internet industriel, SEO industriel, référencement IA, agence web machine outil, site web PME industrielle, référencement B2B industrie',
  authors: [{ name: 'Industrial Decision' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Industrial Decision',
    images: [{ url: '/logo-id.png' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
    languages: { 'fr-FR': '/', 'en-US': '/?lang=en', 'x-default': '/' },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.industrialdecision.com/#organization",
  "name": "Industrial Decision",
  "alternateName": "Industrial Decision - Agence Web Industrie",
  "url": "https://www.industrialdecision.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.industrialdecision.com/logo-id.png",
    "width": 571,
    "height": 580
  },
  "image": "https://www.industrialdecision.com/logo-id.png",
  "description": "Agence web et SEO specialisee dans l'industrie francaise. Creation de sites internet, referencement naturel, optimisation pour les moteurs IA et generation de leads B2B pour les PME et ETI industrielles.",
  "slogan": "Engineering Better Decisions",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Lucas Ansel",
    "jobTitle": "Fondateur et Architecte Strategique",
    "sameAs": "https://www.linkedin.com/in/lucas-ansel-growth-hacker/"
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Lucas Ansel",
      "jobTitle": "Fondateur et Architecte Strategique",
      "sameAs": "https://www.linkedin.com/in/lucas-ansel-growth-hacker/"
    },
    {
      "@type": "Person",
      "name": "Ayoub Bouzalmad",
      "jobTitle": "Directeur Technique",
      "sameAs": "https://www.linkedin.com/in/ayoub-bouzalmad-ba17a8139/"
    },
    {
      "@type": "Person",
      "name": "David Ansel",
      "jobTitle": "Operations et Conseil Industriel",
      "sameAs": "https://www.linkedin.com/in/david-ansel-7ab435a8/"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  },
  "email": "direction@industrialdecision.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "direction@industrialdecision.com",
    "availableLanguage": ["French", "English"],
    "areaServed": "FR"
  },
  "areaServed": [
    { "@type": "Country", "name": "France" },
    { "@type": "AdministrativeArea", "name": "Auvergne-Rhone-Alpes" },
    { "@type": "AdministrativeArea", "name": "Hauts-de-France" },
    { "@type": "AdministrativeArea", "name": "Grand Est" },
    { "@type": "AdministrativeArea", "name": "Bourgogne-Franche-Comte" }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/industrial-decision"
  ],
  "knowsAbout": [
    "Creation de site internet industriel",
    "Referencement naturel SEO industriel",
    "Referencement IA et GEO",
    "Agence web pour l'industrie",
    "Generation de leads B2B industriels",
    "Negoce de machines-outils",
    "Mecanique de precision",
    "Maintenance industrielle",
    "Transformation digitale industrielle"
  ],
  "serviceType": [
    "Creation de site web",
    "Referencement SEO",
    "Optimisation pour moteurs generatifs (GEO)",
    "Audit digital",
    "Strategie d'acquisition B2B"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Industrial Decision",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Audit SEO de site industriel",
          "description": "Diagnostic complet de la visibilite digitale : SEO technique, contenu, positionnement Google et citations par les moteurs IA.",
          "url": "https://www.industrialdecision.com/expertise/audit-drs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Creation de site web industriel",
          "description": "Conception de sites internet pour PME et ETI industrielles : catalogue produits, fiches machines, SEO integre des la conception.",
          "url": "https://www.industrialdecision.com/expertise/site-decisionnel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Referencement SEO et generation de leads B2B",
          "description": "Strategie de referencement pour l'industrie : SEO technique, contenu metier, visibilite locale et generation de demandes entrantes qualifiees.",
          "url": "https://www.industrialdecision.com/expertise/strategie-acquisition"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accompagnement digital continu",
          "description": "Suivi mensuel de la visibilite : production de contenu, optimisations SEO, reporting de performance.",
          "url": "https://www.industrialdecision.com/expertise/accompagnement"
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-id.png" />
        <link rel="apple-touch-icon" href="/logo-id.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5R95M2ZVGZ" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());gtag('config','G-5R95M2ZVGZ');
        `}</Script>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
