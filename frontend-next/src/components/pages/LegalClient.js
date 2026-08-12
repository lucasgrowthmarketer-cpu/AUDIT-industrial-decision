'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LegalClient({ pageSlug }) {
  const { i18n } = useTranslation();
  const L = i18n.language;
  // pageSlug from props
  
  if (pageSlug === 'privacy') return <Privacy lang={L} />;
  return <Mentions lang={L} />;
}

function Mentions({ lang }) {
  return (
    <div className="animate-fade-in py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {lang === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
        </h1>
        <div className="prose prose-slate max-w-none space-y-6 text-[#4a5568] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Éditeur du site' : 'Site Publisher'}</h2>
            <p><strong>Industrial Decision</strong><br/>
            {lang === 'fr' ? 'Conseil digital spécialisé dans l\'industrie' : 'Digital advisory specialized in industry'}<br/>
            Paris, France<br/>
            Email : lucas@industrialdecision.com</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Directeur de la publication' : 'Publication Director'}</h2>
            <p>Lucas Ansel, {lang === 'fr' ? 'Fondateur' : 'Founder'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Hébergement' : 'Hosting'}</h2>
            <p>OVHcloud<br/>
            2 rue Kellermann, 59100 Roubaix, France<br/>
            <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer" className="text-[#207bff]">ovhcloud.com</a></p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}</h2>
            <p>{lang === 'fr' 
              ? 'L\'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, méthodologies DRS, URI, IPI) est la propriété exclusive d\'Industrial Decision ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation est interdite sans accord préalable écrit.'
              : 'All content on this site (text, images, graphics, logos, icons, DRS, URI, IPI methodologies) is the exclusive property of Industrial Decision or its partners. Any reproduction, representation, modification, publication, or adaptation is prohibited without prior written consent.'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Données personnelles' : 'Personal Data'}</h2>
            <p>{lang === 'fr' 
              ? 'Pour en savoir plus sur la gestion de vos données personnelles, consultez notre '
              : 'To learn more about how we manage your personal data, see our '}
            <Link href="/legal/privacy" className="text-[#207bff] underline">{lang === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}</Link>.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Cookies' : 'Cookies'}</h2>
            <p>{lang === 'fr'
              ? 'Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de tracking tiers n\'est utilisé sans votre consentement explicite.'
              : 'This site uses technical cookies necessary for its operation. No advertising or third-party tracking cookies are used without your explicit consent.'}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

function Privacy({ lang }) {
  return (
    <div className="animate-fade-in py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {lang === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
        </h1>
        <p className="text-xs text-[#718096] mb-8">{lang === 'fr' ? 'Dernière mise à jour : Mars 2025' : 'Last updated: March 2025'}</p>
        <div className="prose prose-slate max-w-none space-y-6 text-[#4a5568] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Responsable du traitement' : 'Data Controller'}</h2>
            <p>Industrial Decision — lucas@industrialdecision.com<br/>
            Paris, France</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Données collectées' : 'Data Collected'}</h2>
            <p>{lang === 'fr'
              ? 'Via le formulaire de contact : nom, email, entreprise (optionnel), message, type d\'échange choisi. Ces données sont collectées uniquement pour répondre à votre demande.'
              : 'Via the contact form: name, email, company (optional), message, exchange type selected. This data is collected solely to respond to your inquiry.'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Finalité du traitement' : 'Purpose of Processing'}</h2>
            <p>{lang === 'fr'
              ? 'Répondre aux demandes de contact et d\'audit. Envoyer des communications liées à nos services (uniquement avec consentement). Améliorer notre site et nos services.'
              : 'Responding to contact and audit requests. Sending service-related communications (with consent only). Improving our site and services.'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Base juridique' : 'Legal Basis'}</h2>
            <p>{lang === 'fr'
              ? 'Consentement explicite (formulaire de contact avec case à cocher RGPD). Intérêt légitime pour l\'amélioration de nos services.'
              : 'Explicit consent (contact form with GDPR checkbox). Legitimate interest for service improvement.'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Durée de conservation' : 'Data Retention'}</h2>
            <p>{lang === 'fr'
              ? 'Les données de contact sont conservées pendant 3 ans maximum après le dernier échange. Elles sont ensuite supprimées automatiquement.'
              : 'Contact data is retained for a maximum of 3 years after the last exchange. It is then automatically deleted.'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Partage des données' : 'Data Sharing'}</h2>
            <p>{lang === 'fr'
              ? 'Vos données ne sont jamais vendues ni partagées avec des tiers à des fins marketing. Elles peuvent être transmises à nos sous-traitants techniques (hébergement, email) dans le cadre strict de l\'exécution du service.'
              : 'Your data is never sold or shared with third parties for marketing purposes. It may be transmitted to our technical subcontractors (hosting, email) strictly for service execution.'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Vos droits' : 'Your Rights'}</h2>
            <p>{lang === 'fr'
              ? 'Conformément au RGPD, vous disposez des droits d\'accès, de rectification, d\'effacement, de limitation, de portabilité et d\'opposition au traitement de vos données. Pour exercer ces droits : lucas@industrialdecision.com'
              : 'Under GDPR, you have the right to access, rectify, erase, restrict, port, and object to the processing of your data. To exercise these rights: lucas@industrialdecision.com'}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{lang === 'fr' ? 'Cookies et analytics' : 'Cookies & Analytics'}</h2>
            <p>{lang === 'fr'
              ? 'Ce site utilise Google Analytics pour mesurer l\'audience. Vous pouvez refuser ces cookies via la bannière de consentement. Les cookies techniques nécessaires au fonctionnement du site ne requièrent pas de consentement.'
              : 'This site uses Google Analytics for audience measurement. You can refuse these cookies via the consent banner. Technical cookies necessary for site operation do not require consent.'}</p>
          </section>
        </div>
        <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
          <Link href="/legal" className="text-sm text-[#207bff] flex items-center gap-1 hover:gap-2 transition-all">
            {lang === 'fr' ? 'Voir les mentions légales' : 'See legal notice'} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
