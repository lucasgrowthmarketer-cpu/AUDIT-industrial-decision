import './globals.css';
import Script from 'next/script';
import I18nProvider from '@/components/providers/I18nProvider';

export const metadata = {
  metadataBase: new URL('https://www.industrialdecision.com'),
  title: {
    default: 'Industrial Decision — Engineering Better Decisions',
    template: '%s | Industrial Decision',
  },
  description: 'Audit et conseil digital pour l\'industrie francaise. Machine-outil, restructuration, services industriels. Methodologie DRS proprietaire.',
  keywords: 'audit digital industriel, machine-outil, DRS, site web decisionnel, restructuration industrielle, conseil digital industrie France',
  authors: [{ name: 'Industrial Decision' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Industrial Decision',
    images: [{ url: '/logo-id.png' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "Industrial Decision",
  "url": "https://www.industrialdecision.com",
  "logo": "https://www.industrialdecision.com/logo-id.png",
  "description": "Cabinet de conseil digital specialise dans l'industrie francaise. Intelligence decisionnelle, audit DRS, strategie d'acquisition digitale.",
  "founder": { "@type": "Person", "name": "Lucas Ansel" },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "areaServed": "FR",
  "sameAs": [
    "https://www.linkedin.com/company/industrial-decision"
  ],
  "knowsAbout": [
    "Machine-outil",
    "Restructuration industrielle",
    "Intelligence decisionnelle",
    "Audit digital industriel",
    "Strategie d'acquisition"
  ]
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
