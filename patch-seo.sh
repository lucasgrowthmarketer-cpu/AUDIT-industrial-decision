#!/usr/bin/env bash
# =============================================================
# Industrial Decision - Patch SEO
# Chantiers 1 a 4 : robots.js, retitrage FR, hreflang, force-dynamic
# A executer depuis frontend-next/
# =============================================================
set -e

if [ ! -d "src/app" ]; then
  echo "ERREUR: lance ce script depuis frontend-next/ (src/app introuvable)"
  exit 1
fi

echo "== Sauvegarde =="
cp -r src/app /tmp/app-backup-$(date +%s)
echo "OK"

# -------------------------------------------------------------
# 1. robots.js dynamique
# -------------------------------------------------------------
echo ""
echo "== 1. robots.js =="
rm -f public/robots.txt

cat > src/app/robots.js <<'ROBOTSEOF'
const BASE = 'https://www.industrialdecision.com';

const aiCrawlers = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-Web', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
  'Bingbot', 'Amazonbot', 'meta-externalagent',
  'SemrushBot', 'AhrefsBot',
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/health'],
      },
      ...aiCrawlers.map((ua) => ({
        userAgent: ua,
        allow: '/',
        disallow: ['/api/'],
      })),
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
ROBOTSEOF
echo "OK src/app/robots.js"

# -------------------------------------------------------------
# 2-4. Retitrage + hreflang + force-dynamic
# -------------------------------------------------------------
echo ""
echo "== 2-4. Metadata =="

python3 <<'PYEOF'
import re, os, glob

base = 'src/app'

# ---------- ROOT LAYOUT ----------
p = f'{base}/layout.js'
if os.path.exists(p):
    s = open(p, encoding='utf-8').read()
    s = re.sub(r"default:\s*'(?:[^'\\]|\\.)*'",
               "default: 'Agence Web & SEO pour l\\\\'Industrie Française | Industrial Decision'", s, count=1)
    s = re.sub(r"description:\s*'(?:[^'\\]|\\.)*'",
               "description: 'Agence web spécialisée industrie française. Création de sites, référencement SEO et IA pour PME et ETI industrielles. Machine-outil, mécanique, maintenance.'", s, count=1)
    s = re.sub(r"keywords:\s*'(?:[^'\\]|\\.)*'",
               "keywords: 'agence web industrie, création site internet industriel, SEO industriel, référencement IA, agence web machine outil, site web PME industrielle, référencement B2B industrie'", s, count=1)
    if 'languages:' not in s:
        s = s.replace("robots: { index: true, follow: true },",
"""robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
    languages: { 'fr-FR': '/', 'en-US': '/?lang=en', 'x-default': '/' },
  },""")
    open(p, 'w', encoding='utf-8').write(s)
    print('  layout.js')

# ---------- PAGES STATIQUES ----------
# (chemin, title, description, retirer_force_dynamic)
pages = [
  ('page.js',
   "Agence Web & SEO Industrie Française | Industrial Decision",
   "Nous concevons les sites web et la visibilité en ligne des PME et ETI industrielles françaises. Machine-outil, mécanique de précision, maintenance industrielle.",
   False),
  ('(main)/home/page.js',
   "Création de Site Web Industriel & Référencement SEO",
   "Site web, SEO et référencement IA pour l'industrie. Nous aidons les dirigeants industriels à générer des demandes entrantes qualifiées. Audit gratuit.",
   True),
  ('(main)/about/page.js',
   "Notre Agence Web Spécialisée Industrie Française",
   "Industrial Decision accompagne les PME et ETI industrielles françaises dans leur visibilité digitale. Notre approche, notre méthode, nos convictions.",
   True),
  ('(main)/team/page.js',
   "L'Équipe — Experts Web & SEO Industrie",
   "Lucas Ansel, Ayoub Bouzalmad et David Ansel. Stratégie digitale, développement web et conseil terrain pour l'industrie française.",
   True),
  ('(main)/expertise/page.js',
   "Nos Services — Site Web, SEO et Référencement IA",
   "Création de sites industriels, référencement SEO, optimisation pour les moteurs IA et accompagnement continu. Services pensés pour les PME et ETI industrielles.",
   True),
  ('(main)/sectors/page.js',
   "Secteurs — Machine-Outil, Mécanique, Maintenance",
   "Nous intervenons auprès des distributeurs de machines-outils, mécaniciens de précision, chaudronniers et prestataires de maintenance industrielle.",
   True),
  ('(main)/case-studies/page.js',
   "Études de Cas — Résultats Clients Industriels",
   "Résultats concrets chez nos clients industriels : scores SEO, pages indexées, demandes entrantes générées. Chiffres avant/après documentés.",
   True),
  ('(main)/insights/page.js',
   "Blog — SEO Industriel & Référencement IA",
   "Analyses et guides pratiques sur le référencement industriel, la visibilité IA et la génération de leads B2B. Publié par Industrial Decision.",
   False),
  ('(main)/contact/page.js',
   "Contact — Audit SEO Gratuit de Votre Site",
   "Discutons de votre projet digital. Audit gratuit de votre site industriel : SEO technique, visibilité Google et IA, plan d'action chiffré.",
   True),
  ('(main)/demo/page.js',
   "Démo — Interface d'Analyse Digitale Industrielle",
   "Découvrez notre outil d'analyse de la visibilité digitale industrielle. Démonstration interactive du Strategy Desk Industrial Decision.",
   False),
  ('(main)/legal/page.js', None, None, True),
  ('(main)/legal/[page]/page.js', None, None, True),
]

for rel, title, desc, static in pages:
    p = os.path.join(base, rel)
    if not os.path.exists(p):
        print(f'  SKIP {rel}')
        continue
    s = open(p, encoding='utf-8').read()
    if title:
        t = title.replace("'", "\\'")
        d = desc.replace("'", "\\'")
        s = re.sub(r"title:\s*'(?:[^'\\]|\\.)*'", f"title: '{t}'", s, count=1)
        s = re.sub(r"description:\s*'(?:[^'\\]|\\.)*'", f"description: '{d}'", s, count=1)
    if static:
        s = s.replace('export const dynamic = "force-dynamic";\n', '')
        s = s.replace("export const dynamic = 'force-dynamic';\n", '')
    open(p, 'w', encoding='utf-8').write(s)
    print(f'  {rel}')

# ---------- PAGES DYNAMIQUES ----------
p = f'{base}/(main)/expertise/[serviceId]/page.js'
if os.path.exists(p):
    s = open(p, encoding='utf-8').read()
    s = re.sub(
        r"const serviceMeta = \{.*?\n\};",
        """const serviceMeta = {
  'audit-drs': { title: 'Audit SEO Gratuit pour Site Industriel', desc: 'Audit complet de votre présence digitale : SEO technique, contenu, visibilité Google et IA. Diagnostic chiffré et plan d\\\\'action pour votre site industriel.' },
  'site-decisionnel': { title: 'Création de Site Web pour PME Industrielle', desc: 'Nous concevons des sites industriels qui génèrent des demandes de devis. Catalogue produits, fiches machines, SEO intégré dès la conception.' },
  'strategie-acquisition': { title: 'Référencement SEO & Génération de Leads B2B Industrie', desc: 'Stratégie de référencement pour l\\\\'industrie : SEO technique, contenu métier, visibilité locale. Objectif : des demandes entrantes qualifiées.' },
  'accompagnement': { title: 'Accompagnement Digital Continu pour Industriels', desc: 'Suivi mensuel de votre visibilité : production de contenu, optimisations SEO, reporting de performance. Un partenaire digital pour votre PME industrielle.' },
};""",
        s, flags=re.S, count=1)
    s = s.replace('export const dynamic = "force-dynamic";\n', '')
    open(p, 'w', encoding='utf-8').write(s)
    print('  expertise/[serviceId]')

p = f'{base}/(main)/sectors/[sectorId]/page.js'
if os.path.exists(p):
    s = open(p, encoding='utf-8').read()
    s = re.sub(
        r"const sectorMeta = \{.*?\n\};",
        """const sectorMeta = {
  'machine-tool': { title: 'Agence Web & SEO pour Distributeurs Machines-Outils', desc: 'Site web et référencement pour le négoce de machines-outils. Catalogue en ligne, fiches machines optimisées, visibilité sur les requêtes marques et occasion.' },
  'industrial-restructuring': { title: 'Digital pour la Restructuration Industrielle', desc: 'Accompagnement digital des entreprises industrielles en transformation : refonte de site, repositionnement, visibilité auprès de nouveaux marchés.' },
  'industrial-services': { title: 'Site Web & SEO pour Services Industriels', desc: 'Maintenance, rétrofit, reconstruction, transferts d\\\\'usine. Nous rendons vos services industriels visibles auprès des donneurs d\\\\'ordres qui les cherchent.' },
};""",
        s, flags=re.S, count=1)
    s = s.replace('export const dynamic = "force-dynamic";\n', '')
    open(p, 'w', encoding='utf-8').write(s)
    print('  sectors/[sectorId]')

# ---------- HREFLANG PARTOUT ----------
print('')
print('  hreflang:')
n = 0
for p in glob.glob(f'{base}/**/page.js', recursive=True):
    s = open(p, encoding='utf-8').read()
    if 'languages:' in s:
        continue
    m = re.search(r"alternates:\s*\{\s*canonical:\s*'([^']+)'\s*\}", s)
    if m:
        path = m.group(1)
        s = s[:m.start()] + (
            "alternates: {\n"
            f"    canonical: '{path}',\n"
            f"    languages: {{ 'fr-FR': '{path}', 'en-US': '{path}?lang=en', 'x-default': '{path}' }},\n"
            "  }"
        ) + s[m.end():]
        open(p, 'w', encoding='utf-8').write(s)
        n += 1
        print(f'    {p.replace(base + "/", "")}')
        continue
    m = re.search(r"alternates:\s*\{\s*canonical:\s*`([^`]+)`\s*\}", s)
    if m:
        path = m.group(1)
        s = s[:m.start()] + (
            "alternates: {\n"
            f"      canonical: `{path}`,\n"
            f"      languages: {{ 'fr-FR': `{path}`, 'en-US': `{path}?lang=en`, 'x-default': `{path}` }},\n"
            "    }"
        ) + s[m.end():]
        open(p, 'w', encoding='utf-8').write(s)
        n += 1
        print(f'    {p.replace(base + "/", "")}')

print(f'    -> {n} fichiers')
PYEOF

echo ""
echo "== Verification =="
echo "force-dynamic restants :"
grep -rl "force-dynamic" src/app/ 2>/dev/null | sed 's|src/app/|  |' || echo "  aucun"
echo ""
echo "hreflang :"
echo "  $(grep -rl 'languages:' src/app/ 2>/dev/null | wc -l) fichiers"
echo ""
echo "robots.js : $([ -f src/app/robots.js ] && echo 'present' || echo 'MANQUANT')"
echo "public/robots.txt : $([ -f public/robots.txt ] && echo 'ENCORE LA (a supprimer)' || echo 'supprime')"

echo ""
echo "============================================"
echo "Termine. Etapes suivantes :"
echo "  npm install"
echo "  npm run build"
echo "  git add -A"
echo "  git commit -m 'SEO: robots.js, retitrage FR, hreflang, force-dynamic'"
echo "  git push"
echo "============================================"
