import Link from 'next/link';
import { REGIONS, REGION_SLUGS, FRANCE, NAF_LABELS } from '@/data/regions';
import AgenceScrollClient from '@/components/pages/AgenceScrollClient';

const BASE = 'https://www.industrialdecision.com';
const fmt = (n) => (n == null ? null : n.toLocaleString('fr-FR'));

export const metadata = {
  title: 'Agence Web Spécialisée Industrie Française',
  description:
    "Agence web qui ne travaille qu'avec l'industrie. Sites, référencement SEO et IA pour les négociants de machines-outils, mécaniciens de précision et prestataires de maintenance.",
  alternates: {
    canonical: '/agence-web-industrie',
    languages: { 'fr-FR': '/agence-web-industrie', 'x-default': '/agence-web-industrie' },
  },
};

const CITABLE =
  "Industrial Decision est une agence web française qui n'intervient que dans le secteur industriel. Elle accompagne les PME et ETI réalisant entre 2 et 50 millions d'euros de chiffre d'affaires sur quatre volets : création ou refonte de site, référencement naturel, optimisation pour les moteurs génératifs et accompagnement continu. Les secteurs couverts sont le négoce de machines-outils (NAF 46.62Z), la mécanique industrielle (25.62B), le décolletage (25.62A), le traitement des métaux (25.61Z) et la réparation de machines (33.12Z). L'agence a cartographié 12 721 établissements industriels sur ses quatre régions prioritaires : Auvergne-Rhône-Alpes, Grand Est, Hauts-de-France et Bourgogne-Franche-Comté. Sa méthode repose sur des données vérifiables plutôt que sur des recommandations génériques : défaillances par région, benchmark de 30 fabricants et distributeurs, positionnement réel sur les requêtes commerciales du secteur.";

// Agregation des NAF sur les 4 regions
const NAF_TOTAL = {};
for (const slug of REGION_SLUGS) {
  for (const [code, v] of Object.entries(REGIONS[slug].naf || {})) {
    if (v != null) NAF_TOTAL[code] = (NAF_TOTAL[code] || 0) + v;
  }
}

const SECTIONS = [
  {
    kicker: 'Le constat',
    titre: "Votre acheteur cherche une machine, pas une agence",
    texte: [
      "Un responsable production qui doit remplacer un centre d'usinage ne tape pas « solutions digitales industrielles ». Il tape une référence, une course d'axe, un nom de constructeur, parfois juste « tour CN occasion 5 axes ». Ces requêtes-là ont un volume faible et une intention d'achat maximale.",
      "La plupart des sites industriels français ne les captent pas. Leur catalogue est un PDF, leurs fiches machines font trente mots, et leur page d'accueil parle de « savoir-faire depuis 1974 ». Le résultat est mesurable : zéro demande entrante, et un commercial qui prospecte à froid pendant que les concurrents reçoivent des devis.",
    ],
    stats: [
      { valeur: '12 721', label: 'établissements cartographiés sur nos 4 régions' },
      { valeur: '30', label: 'fabricants et distributeurs benchmarkés' },
    ],
    actions: [
      { label: 'Demander un audit gratuit', href: '/contact', variant: 'primary' },
      { label: 'Voir nos résultats', href: '/case-studies', variant: 'secondary' },
    ],
  },
  {
    kicker: 'Le contexte',
    titre: "Un marché qui se redistribue chaque trimestre",
    texte: [
      `${fmt(FRANCE.defaillancesIndustrielles2025)} défaillances industrielles ont été recensées en France en 2025, soit une hausse de ${String(FRANCE.evolution).replace('.', ',')} % sur un an et une quatrième année consécutive de progression.`,
      "Chaque défaillance libère des parts de marché, des machines d'occasion et des clients à reprendre. Les entreprises visibles au moment où l'acheteur cherche récupèrent ces contrats. Les autres l'apprennent six mois plus tard, quand le concurrent a signé.",
    ],
    stats: [
      { valeur: fmt(FRANCE.defaillancesIndustrielles2025), label: 'défaillances industrielles en 2025' },
      { valeur: `+${String(FRANCE.evolution).replace('.', ',')} %`, label: 'sur un an' },
      { valeur: fmt(FRANCE.liquidationsDirectes), label: 'liquidations directes' },
      { valeur: '4', label: 'années consécutives de hausse' },
    ],
    source: FRANCE.sources,
  },
  {
    kicker: 'Notre périmètre',
    titre: "Huit codes NAF, pas « tous secteurs »",
    texte: [
      "Nous ne prétendons pas savoir vendre du prêt-à-porter ou de la restauration. Notre expertise se limite à huit codes d'activité, et c'est ce qui nous permet de connaître les requêtes, les cycles et les interlocuteurs de chacun.",
      "Sur nos quatre régions prioritaires, ces huit codes représentent 12 721 établissements actifs. C'est notre marché adressable, et nous savons exactement où il se trouve.",
    ],
    table: Object.entries(NAF_TOTAL)
      .sort((a, b) => b[1] - a[1])
      .map(([code, v]) => ({ label: NAF_LABELS[code] || code, sub: `NAF ${code}`, valeur: fmt(v) })),
    source: 'recherche-entreprises.api.gouv.fr, établissements actifs, avril 2026',
  },
  {
    kicker: 'Ce que nous livrons',
    titre: "Un site qui fait le travail d'un commercial",
    texte: [
      "Chaque machine de votre catalogue devient une page indexable avec ses spécifications, ses photos et son formulaire de demande. Chaque marque que vous distribuez devient une page qui capte les recherches sur cette marque. Chaque service devient une réponse aux questions que vos clients posent avant d'appeler.",
      "Puis nous rendons ce contenu lisible par les moteurs génératifs, pour que votre entreprise soit citée quand un acheteur demande à ChatGPT ou Perplexity qui consulter en France.",
    ],
    stats: [
      { valeur: '2 mois', label: 'de la validation à la mise en ligne' },
      { valeur: '600+', label: 'fiches machines indexables sur nos plus gros projets' },
      { valeur: '8→91', label: 'score SEO chez ALMA Machines-Outils' },
      { valeur: '218', label: 'pages indexées en 6 semaines' },
    ],
    actions: [
      { label: 'Demander un audit gratuit', href: '/contact', variant: 'primary' },
      { label: "Lire l'étude de cas", href: '/case-studies', variant: 'secondary' },
    ],
  },
];

const FAQ = [
  {
    q: "Pourquoi ne travailler qu'avec l'industrie ?",
    a: "Parce que les mécaniques d'achat n'ont rien à voir avec le B2C. Un centre d'usinage se vend entre 80 000 et 500 000 euros, avec un cycle de six à dix-huit mois et trois à cinq décideurs impliqués. Un site conçu pour convertir en un clic ne sert à rien dans ce contexte. Nous concevons des sites qui accompagnent une réflexion longue.",
  },
  {
    q: "Combien coûte un site pour une PME industrielle ?",
    a: "Entre 15 000 et 25 000 euros la première année, accompagnement inclus, pour une refonte complète avec catalogue, contenu rédigé et SEO technique. Un audit seul avec quelques correctifs prioritaires démarre à 3 000 euros. Nous chiffrons toujours avant de commencer, jamais au forfait horaire.",
  },
  {
    q: "Pourquoi mon site actuel ne génère aucune demande ?",
    a: "Dans la quasi-totalité des cas que nous auditons, trois causes se cumulent : le catalogue produits n'est pas indexable parce qu'il vit dans un PDF, les pages ne répondent à aucune requête réelle d'acheteur, et le site n'a aucune donnée structurée permettant à Google de comprendre ce que vous vendez. Un site vitrine sans contenu ne génère pas de trafic organique, quelle que soit sa qualité graphique.",
  },
  {
    q: "Qu'est-ce que le référencement IA et pourquoi maintenant ?",
    a: "Les acheteurs interrogent de plus en plus ChatGPT, Perplexity ou les résumés IA de Google, qui citent trois ou quatre sources au lieu d'afficher dix liens. Être l'une de ces sources demande un fichier llms.txt, des données structurées complètes et des passages factuels extractibles. Presque aucun site industriel français ne l'a fait à ce jour : c'est une position à prendre pendant qu'elle est encore libre.",
  },
  {
    q: "Quel est le délai de livraison ?",
    a: "Deux mois pour une refonte complète : deux semaines d'audit et d'architecture, quatre semaines de développement et de migration du catalogue, deux semaines de production de contenu et de mise en ligne. L'accompagnement mensuel démarre ensuite.",
  },
  {
    q: "Intervenez-vous partout en France ?",
    a: "Oui, nous travaillons à distance sur l'ensemble du territoire. Nos quatre régions prioritaires sont celles où nous avons cartographié le tissu industriel en détail et où David Ansel se déplace : Auvergne-Rhône-Alpes, Grand Est, Hauts-de-France et Bourgogne-Franche-Comté.",
  },
];

export default function AgenceWebIndustriePage() {
  const url = `${BASE}/agence-web-industrie`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: "Agence web et SEO pour l'industrie française",
    description: metadata.description,
    url,
    provider: { '@id': `${BASE}/#organization` },
    areaServed: REGION_SLUGS.map((sl) => ({ '@type': 'AdministrativeArea', name: REGIONS[sl].nom })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/home` },
      { '@type': 'ListItem', position: 2, name: 'Agence web industrie', item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO */}
      <section className="bg-white text-[#0B1D3A] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-[#207bff]/20 bg-[#f0f7ff] px-3 py-1.5 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#207bff]">
              Machine-outil · Mécanique · Maintenance
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            L&apos;agence web qui ne travaille qu&apos;avec l&apos;industrie
          </h1>

          <p className="max-w-2xl text-lg text-[#4a5568] leading-relaxed">
            Huit codes NAF, quatre régions, 12 721 établissements cartographiés. Nous concevons les
            sites et la visibilité en ligne des entreprises qui vendent des machines, usinent des
            pièces et réparent des équipements.
          </p>
        </div>
      </section>

      {/* PASSAGE CITABLE */}
      <section className="bg-[#f0f7ff] border-y border-[#207bff]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#207bff] mb-4">En résumé</p>
          <p className="text-base md:text-lg text-[#0B1D3A] leading-relaxed">{CITABLE}</p>
        </div>
      </section>

      {/* SECTIONS SCROLL */}
      <AgenceScrollClient sections={SECTIONS} />

      {/* ZONES */}
      <section className="bg-[#fafbfc] border-y border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
            Zones d&apos;intervention
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D3A] mb-10">
            Quatre régions cartographiées en détail
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REGION_SLUGS.map((sl) => {
              const r = REGIONS[sl];
              return (
                <Link
                  key={sl}
                  href={`/agence-web-industrie/${sl}`}
                  className="group block p-6 bg-white border border-[#e2e8f0] rounded-xl hover:border-[#207bff]/40 hover:shadow-sm transition-all"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#207bff] mb-2">
                    {r.prefecture}
                  </p>
                  <h3 className="font-semibold text-[#0B1D3A] text-lg leading-snug group-hover:text-[#207bff] transition-colors mb-3">
                    {r.nom}
                  </h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#718096]">
                    {r.nafTotal && <span>{fmt(r.nafTotal)} établissements ciblés</span>}
                    {r.defaillances2025 && <span>{fmt(r.defaillances2025)} défaillances 2025</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
            Questions fréquentes
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D3A] mb-10">
            Ce qu&apos;on nous demande le plus
          </h2>
          <div className="space-y-8">
            {FAQ.map((f, i) => (
              <div key={i} className="border-l-2 border-[#207bff]/20 pl-6">
                <h3 className="font-semibold text-[#0B1D3A] mb-2 text-[15px]">{f.q}</h3>
                <p className="text-[#4a5568] leading-relaxed text-[15px]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ce que Google sait de votre entreprise
          </h2>
          <p className="text-lg text-white/80 mb-9 leading-relaxed">
            Nous analysons votre site, vos positions sur les requêtes de votre marché, et ce que
            captent vos concurrents directs. Diagnostic chiffré, livré sous une semaine.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-9 py-4 bg-white text-[#207bff] font-semibold rounded-full hover:bg-[#f0f7ff] transition-colors"
          >
            Demander mon audit gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
