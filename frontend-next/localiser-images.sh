#!/usr/bin/env bash
# =============================================================
# Industrial Decision - Rapatriement des images Unsplash
# 10 photos -> /public/images/ en WebP + reecriture des refs
# A executer depuis frontend-next/
# =============================================================
set -e

if [ ! -d "src/app" ]; then
  echo "ERREUR: lance ce script depuis frontend-next/"
  exit 1
fi

command -v curl >/dev/null || { echo "curl requis"; exit 1; }

mkdir -p public/images

echo "== Telechargement des 10 photos =="

# id_unsplash|nom_local|largeur
IMAGES="
photo-1537462715879-360eeb61a0ad|usinage-cnc|1600
photo-1581092160607-ee22621dd758|atelier-industriel|1600
photo-1581091226825-a6a2a5aee158|audit-digital|1600
photo-1460925895917-afdab827c52f|data-analytics|1600
photo-1565043666747-69f6646db940|strategie-acquisition|1600
photo-1565193566173-7a0ee3dbe261|production-industrielle|1600
photo-1558494949-ef010cbdcc31|infrastructure-tech|1600
photo-1551288049-bebda4e38f71|tableau-de-bord|1600
photo-1553877522-43269d4ea984|equipe-industrielle|1600
photo-1567789884554-0b844b597180|machine-outil|1600
"

for line in $IMAGES; do
  [ -z "$line" ] && continue
  id=$(echo "$line" | cut -d'|' -f1)
  name=$(echo "$line" | cut -d'|' -f2)
  w=$(echo "$line" | cut -d'|' -f3)

  if [ -f "public/images/${name}.jpg" ]; then
    echo "  ${name}.jpg deja present"
    continue
  fi

  url="https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}"
  echo -n "  ${name}.jpg ... "
  curl -sL "$url" -o "public/images/${name}.jpg"
  echo "$(du -h "public/images/${name}.jpg" | cut -f1)"
done

echo ""
echo "== Conversion WebP =="
if command -v cwebp >/dev/null 2>&1; then
  for f in public/images/*.jpg; do
    out="${f%.jpg}.webp"
    [ -f "$out" ] && continue
    cwebp -q 82 "$f" -o "$out" >/dev/null 2>&1
    echo "  $(basename "$out")  $(du -h "$out" | cut -f1)"
  done
elif command -v npx >/dev/null 2>&1; then
  echo "  cwebp absent, conversion via sharp..."
  npx --yes sharp-cli --version >/dev/null 2>&1 && \
    npx --yes sharp-cli -i "public/images/*.jpg" -o public/images/ -f webp -q 82 || \
    echo "  Conversion WebP ignoree (les JPG restent utilisables)"
else
  echo "  Pas d'outil de conversion, les JPG restent utilisables"
fi

echo ""
echo "== Reecriture des references dans le code =="

python3 <<'PYEOF'
import re, glob, os

MAPPING = {
    'photo-1537462715879-360eeb61a0ad': 'usinage-cnc',
    'photo-1581092160607-ee22621dd758': 'atelier-industriel',
    'photo-1581091226825-a6a2a5aee158': 'audit-digital',
    'photo-1460925895917-afdab827c52f': 'data-analytics',
    'photo-1565043666747-69f6646db940': 'strategie-acquisition',
    'photo-1565193566173-7a0ee3dbe261': 'production-industrielle',
    'photo-1558494949-ef010cbdcc31': 'infrastructure-tech',
    'photo-1551288049-bebda4e38f71': 'tableau-de-bord',
    'photo-1553877522-43269d4ea984': 'equipe-industrielle',
    'photo-1567789884554-0b844b597180': 'machine-outil',
}

# Extension reellement disponible
ext = '.webp' if os.path.exists('public/images/usinage-cnc.webp') else '.jpg'
print(f'  Extension utilisee : {ext}')

total = 0
for path in glob.glob('src/**/*.js', recursive=True):
    s = open(path, encoding='utf-8').read()
    orig = s
    for pid, name in MAPPING.items():
        # Remplace l'URL complete avec ses parametres
        s = re.sub(
            r'https://images\.unsplash\.com/' + re.escape(pid) + r'[^\s"\'\)]*',
            f'/images/{name}{ext}',
            s
        )
    if s != orig:
        n = len(re.findall(r'/images/', s)) - len(re.findall(r'/images/', orig))
        open(path, 'w', encoding='utf-8').write(s)
        total += 1
        print(f'  {path}')

print(f'  -> {total} fichiers modifies')

# Verification
rest = 0
for path in glob.glob('src/**/*.js', recursive=True):
    rest += len(re.findall(r'images\.unsplash\.com', open(path, encoding='utf-8').read()))
print(f'  References Unsplash restantes : {rest}')
PYEOF

echo ""
echo "== Ajout lazy loading + dimensions sur les img =="

python3 <<'PYEOF'
import re, glob

total = 0
for path in glob.glob('src/**/*.js', recursive=True):
    s = open(path, encoding='utf-8').read()
    orig = s
    # Ajoute loading="lazy" et decoding="async" aux <img sans loading
    def add_attrs(m):
        tag = m.group(0)
        if 'loading=' in tag:
            return tag
        return tag.replace('<img', '<img loading="lazy" decoding="async"', 1)
    s = re.sub(r'<img\b[^>]*>', add_attrs, s)
    if s != orig:
        open(path, 'w', encoding='utf-8').write(s)
        total += 1
        print(f'  {path}')
print(f'  -> {total} fichiers')
PYEOF

echo ""
echo "== Taille finale =="
du -sh public/images/
ls -1 public/images/ | wc -l | xargs echo "Fichiers :"

echo ""
echo "============================================"
echo "Termine. Etapes suivantes :"
echo "  npm run build"
echo "  git add -A"
echo "  git commit -m 'perf: images Unsplash rapatriees en local + lazy loading'"
echo "  git push"
echo "============================================"
