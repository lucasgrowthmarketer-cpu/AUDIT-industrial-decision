import { notFound } from 'next/navigation';
import Link from 'next/link';
import { REGIONS, REGION_SLUGS, getRegion, NAF_LABELS, FRANCE } from '@/data/regions';
import RegionScrollClient from '@/components/pages/RegionScrollClient';

const BASE = 'https://www.industrialdecision.com';
const fmt = (n) => (n == null ? null : n.toLocaleString('fr-FR'));

export function generateStaticParams() {
  return REGION_SLUGS.map((region) => ({ region }));
}
export const dynamicParams = false;

export async function generateMetadata({ params: p }) {
  const { region: slug } = await p;
  const r = getRegion(slug);
  if (!r) return {};
  const title = r.title || `Agence Web & SEO Industrie en ${r.nom}`;
  const description =
    r.description ||
    `Création de site et référencement pour les PME et ETI industrielles de ${r.nom}. ${
      r.nafTotal ? `${fmt(r.nafTotal)} établissements industriels dans nos secteurs cibles.` : ''
    }`.trim();
  return {
    title,
    description,
    alternates: {
      canonical: `/agence-web-industrie/${slug}`,
      languages: {
        'fr-FR': `/agence-web-industrie/${slug}`,
        'x-default': `/agence-web-industrie/${slug}`,
      },
    },
    openGraph: { title, description, url: `${BASE}/agence-web-industrie/${slug}` },
  };
}

function buildSteps(r) {
  const steps = [];

  steps.push({
    kicker: 'Situation',
    titre: `${r.nom} dans le paysage industriel français`,
    texte: [r.contexte].filter(Boolean),
    stats: [
      r.emploisIndustriels && { valeur: fmt(r.emploisIndustriels), label: 'emplois industriels' },
      r.sitesIndustriels && { valeur: fmt(r.sitesIndustriels), label: 'sites industriels' },
      !r.sitesIndustriels && r.entreprisesIndustrielles && { valeur: fmt(r.entreprisesIndustrielles), label: 'établissements industriels' },
      r.partIndustrieFrancaise && { valeur: `${r.partIndustrieFrancaise} %`, label: "de l'industrie française" },
      !r.partIndustrieFrancaise && r.partEmploiRegional && { valeur: `${r.partEmploiRegional} %`, label: "de l'emploi régional" },
      r.partValeurAjoutee && { valeur: `${String(r.partValeurAjoutee).replace('.', ',')} %`, label: `de la valeur ajoutée régionale${r.partValeurAjouteeFrance ? ` (${String(r.partValeurAjouteeFrance).replace('.', ',')} % en France)` : ''}` },
      r.rangIndustriel && { valeur: `${r.rangIndustriel}ᵉ`, label: `région industrielle de France${r.rangIndustrielPrecision ? ` ${r.rangIndustrielPrecision}` : ''}` },
    ].filter(Boolean).slice(0, 4),
    source: r.emploisIndustrielsSource,
  });

  if (r.defaillances2025) {
    steps.push({
      kicker: 'Pression industrielle',
      titre: 'Un tissu sous tension',
      texte: [
        `En 2025, ${fmt(r.defaillances2025)} défaillances industrielles ont été recensées en ${r.nom}${r.evolutionDefaillances ? `, en hausse de ${String(r.evolutionDefaillances).replace('.', ',')} % sur un an` : ''}.`,
        `À l'échelle nationale, le total atteint ${fmt(FRANCE.defaillancesIndustrielles2025)} procédures, soit une progression de ${String(FRANCE.evolution).replace('.', ',')} %. Chaque défaillance redistribue des parts de marché : les entreprises visibles au bon moment récupèrent les contrats.`,
      ],
      stats: [
        { valeur: fmt(r.defaillances2025), label: 'défaillances industrielles 2025' },
        r.evolutionDefaillances && { valeur: `+${String(r.evolutionDefaillances).replace('.', ',')} %`, label: 'sur un an' },
        r.ipi && { valeur: `${r.ipi}/100`, label: 'indice de pression industrielle' },
        r.rangDefaillances && { valeur: `${r.rangDefaillances}ᵉ`, label: 'région la plus touchée' },
      ].filter(Boolean),
      source: FRANCE.sources,
    });
  }

  const nafRows = Object.entries(r.naf || {})
    .filter(([, v]) => v != null)
    .sort((a, b) => b[1] - a[1])
    .map(([code, v]) => ({ label: NAF_LABELS[code] || code, sub: `NAF ${code}`, valeur: fmt(v) }));

  if (nafRows.length) {
    steps.push({
      kicker: 'Marché adressable',
      titre: 'Les entreprises que nous accompagnons',
      texte: [
        `${fmt(r.nafTotal)} établissements actifs en ${r.nom} relèvent des secteurs sur lesquels nous intervenons : machines-outils, mécanique de précision, traitement des métaux et maintenance industrielle.`,
        `La majorité n'a pas de site capable de générer une demande entrante. C'est précisément là que se joue la différence entre une entreprise qu'on trouve et une entreprise qu'on ne trouve pas.`,
      ],
      table: nafRows,
      source: r.nafSource,
    });
  }

  if (r.bassins?.length) {
    steps.push({
      kicker: 'Bassins industriels',
      titre: 'Les territoires que nous connaissons',
      texte: [r.faitMarquant].filter(Boolean),
      table: r.bassins.map((b) => ({
        label: b.nom,
        sub: `${b.specialite}${b.villes ? ` · ${b.villes}` : ''}`,
        valeur: b.chiffre ? '●' : '·',
      })),
      source: r.faitMarquantSource,
    });
  }

  return steps;
}

export default async function RegionPage({ params: p }) {
  const { region: slug } = await p;
  const r = getRegion(slug);
  if (!r) notFound();

  const url = `${BASE}/agence-web-industrie/${slug}`;
  const steps = buildSteps(r);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Industrial Decision — ${r.nom}`,
    description: `Agence web et SEO pour les entreprises industrielles de ${r.nom}.`,
    url,
    provider: { '@id': `${BASE}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: r.nom },
    serviceType: ['Création de site web', 'Référencement SEO', 'Référencement IA'],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/home` },
      { '@type': 'ListItem', position: 2, name: 'Agence web industrie', item: `${BASE}/agence-web-industrie` },
      { '@type': 'ListItem', position: 3, name: r.nom, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO — un seul H1 sur la page */}
      <section className="bg-white text-[#0B1D3A] pt-28 pb-16 border-b border-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-[#207bff]/20 bg-[#f0f7ff] px-3 py-1.5 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4ea5ff]">
              {r.nom} · {r.prefecture}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 max-w-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Agence web et SEO pour l&apos;industrie en {r.nom}
          </h1>

          <p className="max-w-2xl text-lg text-[#4a5568] leading-relaxed mb-10">
            {r.nafTotal
              ? `${fmt(r.nafTotal)} établissements industriels dans nos secteurs cibles. Nous concevons les sites et la visibilité en ligne de ceux qui veulent être trouvés.`
              : `Nous concevons les sites et la visibilité en ligne des PME et ETI industrielles de la région.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#207bff] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a62cc] transition-colors"
            >
              Demander un audit gratuit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#e2e8f0] px-8 py-4 text-sm font-semibold text-[#0B1D3A] hover:border-[#207bff]/40 hover:bg-[#f8fafc] transition-colors"
            >
              Voir nos résultats
            </Link>
          </div>
        </div>
      </section>

      {/* GLOBE SCROLL + CONTENU */}
      <RegionScrollClient steps={steps} code={r.code} />

      {/* CLIENTS LOCAUX */}
      {r.clients?.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#207bff] mb-3 block">
              Références
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
              Ce que nous avons livré en {r.nom}
            </h2>
            <div className="space-y-4">
              {r.clients.map((c, i) => (
                <div key={i} className="border border-[#e2e8f0] rounded-xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-[#1a1a1a]">{c.nom}</h3>
                    <span className="text-xs text-[#718096]">{c.secteur}</span>
                  </div>
                  <p className="text-[15px] text-[#4a5568]">{c.resultat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MAILLAGE — autres regions */}
      <section className="bg-[#fafbfc] border-t border-[#e2e8f0] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#718096] mb-6">
            Nos autres zones d&apos;intervention
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {REGION_SLUGS.filter((sl) => sl !== slug).map((sl) => {
              const o = REGIONS[sl];
              return (
                <Link
                  key={sl}
                  href={`/agence-web-industrie/${sl}`}
                  className="group block p-5 bg-white border border-[#e2e8f0] rounded-xl hover:border-[#207bff]/40 hover:shadow-sm transition-all"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#207bff] mb-2">
                    {o.prefecture}
                  </p>
                  <h3 className="font-semibold text-[#0B1D3A] text-sm leading-snug group-hover:text-[#207bff] transition-colors">
                    {o.nom}
                  </h3>
                  {o.nafTotal && (
                    <p className="text-xs text-[#718096] mt-2">
                      {fmt(o.nafTotal)} établissements ciblés
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
          <Link
            href="/agence-web-industrie"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#207bff] hover:gap-3 transition-all"
          >
            Voir toutes nos zones d&apos;intervention
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#207bff] to-[#1a62cc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Où en est votre visibilité en {r.nom} ?
          </h2>
          <p className="text-lg text-white/80 mb-9 leading-relaxed">
            Nous analysons votre site, vos positions Google et ce que captent vos concurrents régionaux.
            Diagnostic chiffré, sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-[#207bff] font-semibold rounded-full hover:bg-[#f0f7ff] transition-colors"
          >
            Demander mon audit gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
