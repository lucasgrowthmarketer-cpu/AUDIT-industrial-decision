#!/bin/bash
# =============================================================
# INDUSTRIAL DECISION — Migration CRA → Next.js 15 SSR
# Run from: /workspaces/AUDIT-industrial-decision-v38/frontend-next/
# =============================================================
set -e

echo ""
echo "============================================"
echo "  INDUSTRIAL DECISION — MIGRATION NEXT.JS"
echo "============================================"
echo ""

if [ ! -f package.json ] || ! grep -q '"next"' package.json; then
  echo "ERREUR: Lance ce script depuis frontend-next/"
  exit 1
fi

# ─── ETAPE 1: Copier tous les fichiers depuis l'ancien frontend ───
echo "📦 Etape 1/6: Copie des fichiers source"

# UI components
cp -r ../frontend/src/components/ui src/components/

# Custom components
cp ../frontend/src/components/CookieConsent.js src/components/
cp ../frontend/src/components/Sidebar.js src/components/

# Layouts
mkdir -p src/layouts
cp ../frontend/src/layouts/MainLayout.js src/layouts/
cp ../frontend/src/layouts/DashboardLayout.js src/layouts/
cp ../frontend/src/layouts/CorporateLayout.js src/layouts/

# Data files
mkdir -p src/data
cp ../frontend/src/data/*.js src/data/

# Lib
mkdir -p src/lib
cp ../frontend/src/lib/utils.js src/lib/
cp ../frontend/src/lib/indices.js src/lib/

# Hooks
mkdir -p src/hooks
cp ../frontend/src/hooks/use-toast.js src/hooks/

# i18n
mkdir -p src/i18n/locales
cp ../frontend/src/i18n/config.js src/i18n/
cp ../frontend/src/i18n/locales/en.json src/i18n/locales/
cp ../frontend/src/i18n/locales/fr.json src/i18n/locales/

# Assets
mkdir -p src/assets/geo
cp ../frontend/src/assets/geo/france.js src/assets/geo/

# Public assets
cp ../frontend/public/logo-id.png public/
cp ../frontend/public/alma-logo.png public/ 2>/dev/null || true
cp ../frontend/public/CNC_Meachine.glb public/

# CSS
cat ../frontend/src/index.css > src/app/globals.css
cat ../frontend/src/App.css >> src/app/globals.css

# components.json (shadcn)
cp ../frontend/components.json . 2>/dev/null || true
cp ../frontend/jsconfig.json . 2>/dev/null || true

echo "  Fichiers copies"

# ─── ETAPE 2: Copier les pages comme client components ───
echo "📄 Etape 2/6: Copie des pages CRA comme client components"

mkdir -p src/components/pages

cp ../frontend/src/pages/Landing.js src/components/pages/LandingClient.js
cp ../frontend/src/pages/Home.js src/components/pages/HomeClient.js
cp ../frontend/src/pages/About.js src/components/pages/AboutClient.js
cp ../frontend/src/pages/Team.js src/components/pages/TeamClient.js
cp ../frontend/src/pages/Expertise.js src/components/pages/ExpertiseClient.js
cp ../frontend/src/pages/Sectors.js src/components/pages/SectorsClient.js
cp ../frontend/src/pages/CaseStudies.js src/components/pages/CaseStudiesClient.js
cp ../frontend/src/pages/Insights.js src/components/pages/InsightsClient.js
cp ../frontend/src/pages/Contact.js src/components/pages/ContactClient.js
cp ../frontend/src/pages/Legal.js src/components/pages/LegalClient.js
cp ../frontend/src/pages/Demo.js src/components/pages/DemoClient.js

# Dashboard pages (orphaned but preserved)
cp ../frontend/src/pages/SystemStatus.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/COMEXOverview.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/MarketPressure.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/DecisionReadiness.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/DecisionScenarios.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/ProcessVisibility.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/ProofBlocks.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/DecisionGates.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/DecisionAmplifiers.js src/components/pages/ 2>/dev/null || true
cp ../frontend/src/pages/SourcesMethod.js src/components/pages/ 2>/dev/null || true

echo "  Pages copiees"

# ─── ETAPE 3: Fix imports dans TOUS les fichiers JS/JSX ───
echo "🔧 Etape 3/6: Fix imports react-router-dom → Next.js"

ALL_FILES=$(find src/components src/layouts -name "*.js" -o -name "*.jsx" | grep -v node_modules)

for f in $ALL_FILES; do
  # ── react-router-dom → next ──
  # Multi-import patterns (most specific first)
  sed -i "s|import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { NavLink, useNavigate, Link } from 'react-router-dom';|import Link from 'next/link';\nimport { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { NavLink, Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useParams } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useNavigate } from 'react-router-dom';|import Link from 'next/link';\nimport { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { useNavigate } from 'react-router-dom';|import { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { useLocation } from 'react-router-dom';|import { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { useParams } from 'react-router-dom';||g" "$f"
  sed -i "s|import { Link } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  # Catch remaining
  sed -i "s|from 'react-router-dom'|from 'next/link'|g" "$f"

  # ── Link: to= → href= ──
  sed -i 's|<Link to=|<Link href=|g' "$f"
  sed -i 's|<NavLink to=|<Link href=|g' "$f"
  sed -i 's|<NavLink |<Link |g' "$f"
  sed -i 's|</NavLink>|</Link>|g' "$f"

  # ── useLocation → usePathname ──
  sed -i 's|const { pathname } = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|const location = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|useLocation()|usePathname()|g' "$f"
  sed -i 's|location\.pathname|pathname|g' "$f"

  # ── useNavigate → useRouter ──
  sed -i 's|const navigate = useNavigate();|const router = useRouter();|g' "$f"
  sed -i "s|navigate('/|router.push('/|g" "$f"
  sed -i 's|navigate(-1)|router.back()|g' "$f"

  # ── Fix relative imports → @/ aliases ──
  sed -i "s|from '../components/|from '@/components/|g" "$f"
  sed -i "s|from '../data/|from '@/data/|g" "$f"
  sed -i "s|from '../hooks/|from '@/hooks/|g" "$f"
  sed -i "s|from '../lib/|from '@/lib/|g" "$f"
  sed -i "s|from '../layouts/|from '@/layouts/|g" "$f"
  sed -i "s|from '../assets/|from '@/assets/|g" "$f"
  sed -i "s|from '../i18n/|from '@/i18n/|g" "$f"
  sed -i "s|from './ui/|from '@/components/ui/|g" "$f"

  # ── Add 'use client' if file uses client-side features ──
  if grep -qE "(useState|useEffect|usePathname|useRouter|useTranslation|useRef|onClick|onChange|useFrame|Canvas)" "$f"; then
    if ! grep -q "'use client'" "$f"; then
      sed -i '1s/^/'\''use client'\'';\n/' "$f"
    fi
  fi
done

echo "  Imports fixes dans $(echo $ALL_FILES | wc -w) fichiers"

# ─── ETAPE 4: Fix specifiques ───
echo "🔧 Etape 4/6: Corrections specifiques"

# MainLayout: replace <Outlet /> with {children}
sed -i 's|<Outlet />|{children}|g' src/layouts/MainLayout.js
# MainLayout: accept children prop
sed -i 's|export default function MainLayout()|export default function MainLayout({ children })|g' src/layouts/MainLayout.js
# Fix any remaining Outlet import
sed -i '/Outlet/d' src/layouts/MainLayout.js

# Fix Linkedin icon (may not exist in this lucide version)
for f in src/layouts/MainLayout.js src/layouts/CorporateLayout.js; do
  if [ -f "$f" ]; then
    # Check if Linkedin exists, if not remove it
    sed -i 's|, Linkedin||g' "$f"
    sed -i 's|Linkedin, ||g' "$f"
    sed -i 's|<Linkedin[^/]*/> *||g' "$f"
    sed -i 's|<Linkedin[^/]*/>||g' "$f"
  fi
done

# Pages with useParams → accept props instead
# ExpertiseClient
sed -i "s|const { serviceId } = useParams();|// serviceId from props|g" src/components/pages/ExpertiseClient.js
sed -i 's|export default function Expertise()|export default function ExpertiseClient({ serviceId })|g' src/components/pages/ExpertiseClient.js
sed -i 's|const Expertise = ()|const ExpertiseClient = ({ serviceId })|g' src/components/pages/ExpertiseClient.js
sed -i 's|export default Expertise|export default ExpertiseClient|g' src/components/pages/ExpertiseClient.js

# SectorsClient
sed -i "s|const { sectorId } = useParams();|// sectorId from props|g" src/components/pages/SectorsClient.js
sed -i 's|export default function Sectors()|export default function SectorsClient({ sectorId })|g' src/components/pages/SectorsClient.js
sed -i 's|const Sectors = ()|const SectorsClient = ({ sectorId })|g' src/components/pages/SectorsClient.js
sed -i 's|export default Sectors|export default SectorsClient|g' src/components/pages/SectorsClient.js

# LegalClient
sed -i "s|const { page } = useParams();|// pageSlug from props|g" src/components/pages/LegalClient.js
sed -i "s|const { page: pageSlug } = useParams();|// pageSlug from props|g" src/components/pages/LegalClient.js
sed -i 's|export default function Legal()|export default function LegalClient({ pageSlug })|g' src/components/pages/LegalClient.js
sed -i 's|const Legal = ()|const LegalClient = ({ pageSlug })|g' src/components/pages/LegalClient.js
sed -i 's|export default Legal|export default LegalClient|g' src/components/pages/LegalClient.js

# LandingClient: useNavigate → useRouter
sed -i 's|const navigate = useNavigate();|const router = useRouter();|g' src/components/pages/LandingClient.js

# Rename default exports for all client pages
for page in Home About Team CaseStudies Insights Contact Demo; do
  f="src/components/pages/${page}Client.js"
  if [ -f "$f" ]; then
    sed -i "s|export default function ${page}()|export default function ${page}Client()|g" "$f"
    sed -i "s|export default ${page};|export default ${page}Client;|g" "$f"
    sed -i "s|export default ${page}$|export default ${page}Client|g" "$f"
    # Also handle const pattern
    sed -i "s|const ${page} = ()|const ${page}Client = ()|g" "$f"
  fi
done

# Fix i18n config: remove localStorage (SSR incompatible)
sed -i "s|const savedLanguage = localStorage.getItem('language') || 'fr';|const savedLanguage = typeof window !== 'undefined' ? (localStorage.getItem('language') || 'fr') : 'fr';|g" src/i18n/config.js

echo "  Corrections specifiques appliquees"

# ─── ETAPE 5: Fix Tailwind @apply border-border ───
echo "🔧 Etape 5/6: Fix CSS"

# Remove duplicate @tailwind directives if globals.css already has them
# Keep only the first set
awk '!seen[$0]++ || !/^@tailwind/' src/app/globals.css > /tmp/globals-dedup.css
mv /tmp/globals-dedup.css src/app/globals.css

echo "  CSS OK"

# ─── ETAPE 6: Nettoyage ───
echo "🧹 Etape 6/6: Nettoyage"

# Remove old static sitemap (replaced by dynamic sitemap.js)
rm -f public/sitemap.xml

echo "  Nettoyage OK"

echo ""
echo "============================================"
echo "  MIGRATION TERMINEE"
echo "============================================"
echo ""
echo "Prochaine etape: npm run build"
echo ""
