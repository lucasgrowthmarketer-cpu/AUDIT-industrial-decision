'use client';
// Experience3DClient : landing du service Expérience Produit 3D.
// DA du site mère (thème clair, cards blanches, primary #207bff), bilingue
// selon le pattern maison (i18n.language), structure héritée du template
// Appit validé. Les captures du showcase vivent dans des cadres navigateur
// SOMBRES : fenêtres vers l'expérience, contraste voulu sur la page claire.
// Captures attendues dans /public/images/experience/capture-1.png à -6.png
// (fallback stylisé automatique tant qu'elles sont absentes).
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import {
  ArrowRight, Box, Orbit, Crosshair, Play, LayoutGrid, FileText,
  BarChart3, Copy, Zap, CheckCircle2, Smartphone, MousePointerClick,
  Plus, Clock,
} from 'lucide-react';

const DEMO_URL = 'https://experience.industrialdecision.com?utm_source=site&utm_medium=landing&utm_campaign=showcase';

/* ---------- Cadre navigateur sombre (fenêtre vers l'expérience) ---------- */
function Frame({ n, label, className = '' }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`overflow-hidden rounded-2xl border border-[#1e2635] bg-[#0a0f18] shadow-[0_24px_60px_rgba(10,15,24,0.35)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-[#1e2635] bg-[#0d1320] px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#207bff]" />
        <span className="h-2 w-2 rounded-full bg-[#2a3550]" />
        <span className="h-2 w-2 rounded-full bg-[#2a3550]" />
        <span className="ml-2 font-mono text-[9px] tracking-wide text-[#5c6678]">experience.industrialdecision.com</span>
      </div>
      <div className="relative aspect-[16/10]">
        {!failed ? (
          <img src={`/images/experience/capture-${n}.png`} alt={label}
               className="absolute inset-0 h-full w-full object-cover"
               onError={() => setFailed(true)} />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-[radial-gradient(circle_at_50%_30%,rgba(32,123,255,0.08),transparent_65%)]"
               style={{ backgroundSize: '30px 30px', backgroundImage: 'linear-gradient(rgba(32,123,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(32,123,255,0.05) 1px, transparent 1px)' }}>
            <Box className="h-9 w-9 text-[#2f3d5c]" strokeWidth={1.3} />
            <span className="font-mono text-[10px] tracking-widest text-[#5c6678]">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------- Données bilingues --------------------------- */
const BENEFITS = [
  { icon: Orbit, tEn: 'Explore the machine', tFr: 'Explorer la machine',
    dEn: 'Free orbit around the product, zoom on every area, just like in your showroom.',
    dFr: 'Orbite libre autour du produit, zoom sur chaque zone, comme dans votre showroom.' },
  { icon: Crosshair, tEn: 'Understand the technique', tFr: 'Comprendre la technique',
    dEn: 'Clickable hotspots: spindle, magazine, control panel, each component with its specs.',
    dFr: 'Hotspots cliquables : broche, magasin, pupitre, chaque composant avec ses specs.' },
  { icon: Play, tEn: 'See the machine run', tFr: 'Voir la machine vivre',
    dEn: 'Animated machining cycle: door, table, spindle, tool change.',
    dFr: "Cycle d'usinage animé : porte, table, broche, changement d'outil." },
  { icon: LayoutGrid, tEn: 'Open the mechanics', tFr: 'Ouvrir la mécanique',
    dEn: 'Reversible exploded view: the internal architecture in one click.',
    dFr: "Vue éclatée réversible : l'architecture interne en un clic." },
];

const MINIS = [
  { icon: FileText, tEn: 'Built-in spec sheets', tFr: 'Fiches techniques intégrées',
    dEn: 'The exact specs of your machines, editable without a developer.',
    dFr: 'Les specs exactes de vos machines, éditables sans développeur.' },
  { icon: BarChart3, tEn: 'Engagement analytics', tFr: "Analytics d'engagement",
    dEn: 'Which prospect looked at which component, and for how long.',
    dFr: 'Quel prospect a regardé quel composant, combien de temps.' },
  { icon: Copy, tEn: 'Multi-machine', tFr: 'Multi-machines',
    dEn: 'One viewer, your whole catalog: every model follows the same interface contract.',
    dFr: 'Un viewer, tout votre catalogue : chaque modèle suit le même contrat d\'interface.' },
  { icon: Zap, tEn: 'Guaranteed performance', tFr: 'Performance garantie',
    dEn: 'Under 300 KB over the network, smooth on a mid-range phone.',
    dFr: 'Moins de 300 Ko sur le réseau, fluide sur mobile de milieu de gamme.' },
];

const CHECKS = [
  { en: 'Integrates with your existing website', fr: 'Intégration sur votre site existant' },
  { en: 'Content indexable by Google', fr: 'Contenu indexable par Google' },
  { en: 'Detailed analytics events', fr: 'Événements analytics détaillés' },
  { en: 'Contextual contact form', fr: 'Formulaire de contact contextualisé' },
  { en: 'Hosting and maintenance included', fr: 'Hébergement et maintenance inclus' },
];

const FEATURES = [
  { icon: Box, tEn: 'Real-time 3D viewer', tFr: 'Viewer 3D temps réel',
    dEn: 'Your machine, explorable in the browser, no plugin, no download.',
    dFr: 'Votre machine explorable dans le navigateur, sans plugin ni téléchargement.' },
  { icon: Crosshair, tEn: 'Technical hotspots', tFr: 'Hotspots techniques',
    dEn: 'Clickable points of interest with camera focus and spec sheet.',
    dFr: 'Points d\'intérêt cliquables avec focus caméra et fiche de caractéristiques.' },
  { icon: Play, tEn: 'Animated cycle', tFr: 'Cycle animé',
    dEn: 'The machine at work: motion sells better than a thousand words.',
    dFr: 'La machine en fonctionnement : le mouvement vend mieux que mille mots.' },
  { icon: LayoutGrid, tEn: 'Exploded view', tFr: 'Vue éclatée',
    dEn: 'Inside the machine, component by component, reassembled in one click.',
    dFr: 'L\'intérieur de la machine, composant par composant, réassemblable en un clic.' },
  { icon: Smartphone, tEn: 'Mobile native', tFr: 'Mobile natif',
    dEn: 'Dedicated touch interface: navigation chips, gestures, controlled performance.',
    dFr: 'Interface tactile dédiée : chips de navigation, gestes, performance maîtrisée.' },
  { icon: MousePointerClick, tEn: 'Engagement tracking', tFr: 'Mesure d\'engagement',
    dEn: 'Every interaction traced: know what interests your prospects before the first call.',
    dFr: 'Chaque interaction tracée : vous savez ce qui intéresse vos prospects avant le premier appel.' },
];

const FAQ = [
  { qEn: 'How long to put our first machine online?', qFr: 'Combien de temps pour mettre en ligne notre première machine ?',
    aEn: '4 to 8 weeks depending on complexity: modeling or adapting your existing CAD, configuring hotspots and animations, integrating with your website.',
    aFr: 'De 4 à 8 semaines selon la complexité : modélisation ou adaptation de votre CAO existante, configuration des hotspots et animations, intégration à votre site.' },
  { qEn: 'Do we need to provide CAD files?', qFr: 'Faut-il fournir des fichiers CAO ?',
    aEn: 'Ideally yes (STEP, IGES or native formats), we optimize them for the web. Without CAD, we model from photos and technical documentation.',
    aFr: 'C\'est l\'idéal (STEP, IGES ou formats natifs), nous les optimisons pour le web. Sans CAO, nous modélisons à partir de photos et de la documentation technique.' },
  { qEn: 'How do you protect confidential parts of our machines?', qFr: 'Comment protéger les éléments confidentiels de nos machines ?',
    aEn: 'The web model is a stylized, simplified version: everything covered by industrial secrecy is removed or simplified. You validate the model before it goes live.',
    aFr: 'Le modèle web est une version stylisée et allégée : nous retirons ou simplifions tout ce qui relève du secret industriel. Vous validez le modèle avant mise en ligne.' },
  { qEn: 'Does it work on mobile and on client workstations without a GPU?', qFr: 'Est-ce que ça fonctionne sur mobile et sur les postes sans carte graphique ?',
    aEn: 'Yes. The experience adapts automatically: touch version on mobile, performance settings per device, and a video fallback for browsers without 3D.',
    aFr: 'Oui. L\'expérience s\'adapte automatiquement : version tactile sur mobile, réglages de performance selon la machine, et repli en vidéo pour les navigateurs sans 3D.' },
  { qEn: 'How does it integrate with our existing website?', qFr: 'Comment ça s\'intègre à notre site existant ?',
    aEn: 'Two options: a dedicated page on a subdomain, like our demonstration, or embedded directly in your product pages. The first requires no change to your site.',
    aFr: 'Deux options : en page dédiée sur un sous-domaine, comme notre démonstration, ou embarqué directement dans vos pages produit. Aucun changement de votre site n\'est requis dans le premier cas.' },
  { qEn: 'What exactly do you measure?', qFr: 'Que mesure-t-on exactement ?',
    aEn: 'Every interaction: components viewed, animations launched, time spent, path to contact. The data flows into your Google Analytics.',
    aFr: 'Chaque interaction : composants consultés, animations lancées, temps passé, parcours jusqu\'au contact. Les données remontent dans votre Google Analytics.' },
  { qEn: 'How much does it cost?', qFr: 'Combien ça coûte ?',
    aEn: 'Every machine is different: the range takes shape after a 30-minute discussion about your catalog and available files. Request a quote, answer within one business day.',
    aFr: 'Chaque machine est différente : la fourchette se précise après un échange de 30 minutes sur votre catalogue et vos fichiers disponibles. Demandez un devis, réponse sous 24 h ouvrées.' },
];

/* -------------------------------- Composant ------------------------------- */
export default function Experience3DClient() {
  const { i18n } = useTranslation();
  const L = i18n.language;
  const fr = L === 'fr';
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="animate-fade-in" data-testid="experience-3d-page">

      {/* ═══ HERO ═══ */}
      <section className="bg-white pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-full bg-[#eef2f6] px-4 py-1.5 text-xs font-semibold text-[#207bff] hover:bg-[#e2ecfb] transition-colors">
            <span className="h-2 w-2 rounded-full bg-[#207bff]" />
            {fr ? 'Démonstration en ligne · experience.industrialdecision.com' : 'Live demo · experience.industrialdecision.com'}
          </a>
          <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a]"
              style={{ fontFamily: 'Manrope, sans-serif' }}>
            {fr ? <>Vos machines méritent mieux<br className="hidden md:block" /> que des <span className="text-[#207bff]">photos</span>.</>
                : <>Your machines deserve better<br className="hidden md:block" /> than <span className="text-[#207bff]">photos</span>.</>}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#4a5568]">
            {fr ? 'Viewers 3D interactifs pour machines industrielles : hotspots techniques, cycles animés, vues éclatées. Intégrés à votre site.'
                : 'Interactive 3D viewers for industrial machines: technical hotspots, animated cycles, exploded views. Embedded in your website.'}
          </p>
          <div className="mt-8 flex justify-center">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 rounded-lg bg-[#207bff] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1a62cc] transition-all">
              {fr ? 'Vivre la démonstration' : 'Experience the live demo'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#718096]">
            <Clock className="h-3.5 w-3.5" />
            {fr ? 'Fonctionne dans le navigateur · Desktop et mobile · Sans installation'
                : 'Runs in the browser · Desktop and mobile · No install'}
          </div>

          <div className="mt-14 grid items-center gap-5 md:grid-cols-[1fr_1.25fr_1fr]">
            <Frame n={1} label="ENSEMBLE" className="hidden md:block md:[transform:perspective(1200px)_rotateY(8deg)]" />
            <Frame n={2} label="PRODUIT · HOTSPOTS" className="z-10" />
            <Frame n={3} label={fr ? 'VUE ÉCLATÉE' : 'EXPLODED VIEW'} className="hidden md:block md:[transform:perspective(1200px)_rotateY(-8deg)]" />
          </div>
          <p className="mt-10 text-sm text-[#718096]">
            {fr ? 'Construit pour les fabricants, distributeurs et intégrateurs de machines.'
                : 'Built for machine manufacturers, distributors and integrators.'}
          </p>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="border-y border-[#e2e8f0] bg-[#f5f7fa] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {fr ? 'Un site industriel qui montre, au lieu de décrire.' : 'An industrial website that shows, instead of describing.'}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#e2e8f0]">
            {[
              { v: '5', en: 'explorable components per hotspot', frl: 'composants explorables par hotspot' },
              { v: '60', en: 'frames per second, browser only', frl: 'images par seconde, navigateur seul' },
              { v: '100 %', en: 'embeddable in your existing site', frl: 'intégrable à votre site existant' },
            ].map((s) => (
              <div key={s.v} className="px-6 text-center">
                <div className="text-5xl font-light text-[#207bff]" style={{ fontFamily: 'Manrope, sans-serif' }}>{s.v}</div>
                <div className="mt-1.5 text-sm text-[#4a5568]">{fr ? s.frl : s.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#207bff]">
              {fr ? 'Ce que ça change' : 'What changes'}
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {fr ? 'Ce que vos prospects peuvent enfin faire' : 'What your prospects can finally do'}
            </h2>
            <p className="mt-4 text-[#4a5568]">
              {fr ? 'Un acheteur de machine ne lit pas une plaquette. Il tourne autour, ouvre, compare. Donnez-lui ça en ligne.'
                  : 'A machine buyer does not read a brochure. He walks around it, opens it, compares. Give him that online.'}
            </p>
          </div>
          <div className="mt-12 grid items-center gap-5 lg:grid-cols-[1fr_1.15fr_1fr]">
            <div className="space-y-5">
              {BENEFITS.slice(0, 2).map((b) => (
                <div key={b.tFr} className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#b9d4ff] hover:shadow-md">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[#207bff]"><b.icon className="h-5 w-5" /></div>
                  <h3 className="font-semibold text-[#1a1a1a]">{fr ? b.tFr : b.tEn}</h3>
                  <p className="mt-1.5 text-sm text-[#4a5568]">{fr ? b.dFr : b.dEn}</p>
                </div>
              ))}
            </div>
            <Frame n={4} label={fr ? 'HOTSPOT BROCHE' : 'SPINDLE HOTSPOT'} className="order-first lg:order-none" />
            <div className="space-y-5">
              {BENEFITS.slice(2).map((b) => (
                <div key={b.tFr} className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#b9d4ff] hover:shadow-md">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[#207bff]"><b.icon className="h-5 w-5" /></div>
                  <h3 className="font-semibold text-[#1a1a1a]">{fr ? b.tFr : b.tEn}</h3>
                  <p className="mt-1.5 text-sm text-[#4a5568]">{fr ? b.dFr : b.dEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES A ═══ */}
      <section className="bg-[#f5f7fa] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Frame n={5} label={fr ? 'PANNEAU DATA' : 'DATA PANEL'} />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {fr ? <>Pensé pour vendre,<br />pas pour impressionner</> : <>Built to sell,<br />not to impress</>}
              </h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {MINIS.map((m) => (
                  <div key={m.tFr} className="rounded-xl border border-[#e2e8f0] bg-white p-5">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]">
                      <m.icon className="h-4 w-4 shrink-0 text-[#207bff]" />{fr ? m.tFr : m.tEn}
                    </h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#4a5568]">{fr ? m.dFr : m.dEn}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ CAPABILITIES B ═══ */}
          <div className="mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {fr ? <>Intégré à votre système,<br />pas posé à côté</> : <>Integrated with your system,<br />not bolted on</>}
              </h2>
              <p className="mt-4 text-[#4a5568]">
                {fr ? "L'expérience 3D n'est pas un gadget isolé : elle s'inscrit dans votre site, alimente votre SEO par son contenu technique indexable, et remonte ses données d'engagement dans vos outils."
                    : 'The 3D experience is not an isolated gadget: it lives in your website, feeds your SEO with indexable technical content, and pushes engagement data into your tools.'}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
                {CHECKS.map((c) => (
                  <span key={c.fr} className="flex items-center gap-2 text-sm text-[#4a5568]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#207bff]" />{fr ? c.fr : c.en}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-lg bg-[#207bff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a62cc] transition-all">
                  {fr ? 'Vivre la démonstration' : 'Experience the demo'}
                </a>
                <Link href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:border-[#207bff] transition-all">
                  {fr ? 'Demander un devis' : 'Request a quote'}
                </Link>
              </div>
            </div>
            <Frame n={6} label={fr ? 'PANNEAU SITE' : 'WEBSITE PANEL'} className="order-first lg:order-none" />
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#207bff]">{fr ? 'Sous le capot' : 'Under the hood'}</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {fr ? 'Ce que vous obtenez, précisément' : 'What you get, precisely'}
            </h2>
            <p className="mt-4 text-[#4a5568]">
              {fr ? 'Chaque expérience livrée est un système complet, pas une vidéo interactive.'
                  : 'Every delivered experience is a complete system, not an interactive video.'}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.tFr} className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#b9d4ff] hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[#207bff]"><f.icon className="h-5 w-5" /></div>
                <h3 className="font-semibold text-[#1a1a1a]">{fr ? f.tFr : f.tEn}</h3>
                <p className="mt-1.5 text-sm text-[#4a5568]">{fr ? f.dFr : f.dEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="border-t border-[#e2e8f0] bg-[#f5f7fa] py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#207bff]">FAQ</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {fr ? 'Questions fréquentes' : 'Frequently asked questions'}
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {FAQ.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                        aria-expanded={openFaq === i}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  {fr ? f.qFr : f.qEn}
                  <Plus className={`h-4 w-4 shrink-0 text-[#718096] transition-transform ${openFaq === i ? 'rotate-45 text-[#207bff]' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[#4a5568]">{fr ? f.aFr : f.aEn}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {fr ? 'Construisez le vôtre.' : 'Build yours.'}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-lg bg-[#207bff] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1a62cc] transition-all">
              {fr ? 'Vivre la démonstration' : 'Experience the demo'}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] hover:border-[#207bff] transition-all">
              {fr ? 'Demander un devis' : 'Request a quote'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
