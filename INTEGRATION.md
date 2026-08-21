# Intégration · Page "Expérience Produit 3D" sur industrialdecision.com
## Package complet : route, composant, nav, sitemap, SEO, captures
### À appliquer dans le Codespace du site mère (repo AUDIT-industrial-decision)

## 0. Discipline anti-collision (repo co-modifié)
Avant d'appliquer, coller à Claude la sortie de :
```
git log --oneline -5 && git status --short
```

## 1. Fichiers NOUVEAUX du package (aucun conflit possible)
Copier tels quels depuis ce zip, chemins relatifs à la racine du repo :

- frontend-next/src/app/(main)/experience-produit-3d/page.js
  Route App Router : metadata (title, description, canonical
  /experience-produit-3d, OpenGraph avec image capture-2), JSON-LD Service
  ET FAQPage (les 7 questions, éligibles aux rich results Google).

- frontend-next/src/components/pages/Experience3DClient.js
  La landing complète dans la DA du site : thème clair, cards blanches
  rounded-2xl, primary #207bff, Manrope titres, bilingue FR/EN par le
  pattern maison (i18n.language). Structure héritée du template Appit
  validé : hero + 3 cadres, stats, benefits, capabilities x2, features x6,
  FAQ accordéon, CTA finale. Les captures du showcase vivent dans des
  cadres navigateur SOMBRES sur la page claire : fenêtres vers
  l'expérience, contraste assumé.

Application :
```
cd /workspaces/<repo-site-mere>
unzip -o sitemere-experience3d.zip
```

## 2. Navigation (src/layouts/MainLayout.js) — patch avec asserts
Ajoute l'entrée au sous-menu Services :
```
python3 - <<'PYEOF'
p = "frontend-next/src/layouts/MainLayout.js"
src = open(p).read()
anchor = "{ path: '/expertise/accompagnement', labelEn: 'Ongoing Advisory', labelFr: 'Accompagnement' },"
assert anchor in src, "ancre nav introuvable, coller le fichier a Claude"
addition = anchor + "\n      { path: '/experience-produit-3d', labelEn: '3D Product Experience', labelFr: 'Expérience Produit 3D' },"
assert "/experience-produit-3d" not in src, "deja present"
src = src.replace(anchor, addition)
open(p, "w").write(src)
print("Nav : Experience Produit 3D ajoutee au menu Services")
PYEOF
```

## 3. Sitemap (frontend-next/src/app/sitemap.js) — patch avec asserts
```
python3 - <<'PYEOF'
p = "frontend-next/src/app/sitemap.js"
src = open(p).read()
anchor = "{ url: `${BASE}/expertise/accompagnement`, lastModified: now, priority: 0.8 },"
assert anchor in src, "ancre sitemap introuvable"
assert "experience-produit-3d" not in src, "deja present"
src = src.replace(anchor, anchor + "\n    { url: `${BASE}/experience-produit-3d`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },")
open(p, "w").write(src)
print("Sitemap : /experience-produit-3d ajoute (priority 0.9)")
PYEOF
```

## 4. Captures du showcase (votre partie, ~10 min)
Sur https://experience.industrialdecision.com, desktop ~1600px, sans ?debug.
Déposer dans frontend-next/public/images/experience/ :

| Fichier | Contenu |
|---|---|
| capture-1.png | État ENSEMBLE, machine trois quarts, halos visibles |
| capture-2.png | État PRODUIT, hotspots affichés, machine de face (sert aussi d'image OG) |
| capture-3.png | Vue éclatée active |
| capture-4.png | Hotspot BROCHE ouvert avec card de specs |
| capture-5.png | Panneau DATA (gros chiffre 2,5 M€ visible) |
| capture-6.png | Panneau SITE (mini-site ID Machine Tools) |

Tant qu'une capture est absente, son cadre affiche un placeholder stylisé
(la page reste présentable). Poids conseillé : PNG < 400 Ko chacune, ou
convertir en .webp et adapter l'extension dans Experience3DClient.js
(une seule ligne : le src de <img>).

## 5. Build, test, déploiement
```
cd frontend-next
npm run build
```
Test local avant push : npm run dev, puis vérifier
- /experience-produit-3d en FR et en EN (switch de langue du header)
- le menu Services > Expérience Produit 3D
- la FAQ (un seul item ouvert a la fois)
- les CTA : "Vivre la démonstration" ouvre le sous-domaine avec les UTM,
  "Demander un devis" va sur /contact
- mobile : cadres empilés, celui du centre seul dans le hero
Puis commit + push selon le workflow du repo.

## 6. SEO, points couverts
- Canonical https://www.industrialdecision.com/experience-produit-3d
- JSON-LD Service (provider Organization Industrial Decision)
- JSON-LD FAQPage aligne mot pour mot avec la FAQ visible (obligatoire
  pour les rich results)
- OpenGraph avec image (capture-2) pour les partages LinkedIn
- Sitemap priority 0.9 (page commerciale majeure)
- H1 unique, hiérarchie H2 par section, alt sur toutes les captures
- UTM sortants : utm_source=site&utm_medium=landing&utm_campaign=showcase
  (distincts des futurs liens cold email pour l'attribution GA4)

## 7. Non inclus volontairement
- Aucune modification d'ExpertiseClient.js : la page vit en route dédiée.
  Si vous voulez AUSSI une carte dans /expertise, reprendre la section 1
  du document SERVICE-3D-INTEGRATION.md livré précédemment.
- Le lien depuis la home : à décider (bloc dédié ou simple entrée nav).
