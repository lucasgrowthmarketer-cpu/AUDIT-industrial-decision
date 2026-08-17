#!/usr/bin/env python3
"""
=============================================================
Baromètre digital — collecte automatisée
Industrial Decision

15 critères binaires, vérifiables et reproductibles.
Aucune appréciation subjective : un tiers qui refait le test
obtient le même résultat.

Usage :
    pip install requests beautifulsoup4
    python3 audit-sites.py sites.csv

    sites.csv : nom,url,type,pays   (une ligne d'en-tête)

Sortie :
    barometre-resultats.json   données brutes complètes
    barometre-resultats.csv    tableau à plat
    + synthèse imprimée
=============================================================
"""

import csv
import json
import re
import sys
import time
from urllib.parse import urljoin, urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Dépendances manquantes :\n    pip install requests beautifulsoup4")
    sys.exit(1)

UA = "Mozilla/5.0 (compatible; IndustrialDecisionBot/1.0; +https://www.industrialdecision.com)"
TIMEOUT = 25

# Pondération des 15 critères (total 100)
POIDS = {
    "https": 8,
    "rendu_serveur": 12,
    "catalogue_indexable": 12,
    "sitemap": 7,
    "robots_txt": 5,
    "crawlers_ia": 6,
    "llms_txt": 6,
    "donnees_structurees": 10,
    "title_ok": 7,
    "description_ok": 6,
    "h1_unique": 6,
    "viewport": 4,
    "images_alt": 5,
    "blog": 3,
    "encodage_utf8": 3,
}

CRAWLERS_IA = ["gptbot", "claudebot", "perplexitybot", "oai-searchbot", "google-extended"]


def get(url, **kw):
    return requests.get(
        url, headers={"User-Agent": UA}, timeout=TIMEOUT, allow_redirects=True, **kw
    )


def audit(nom, url, type_="", pays=""):
    r = {
        "nom": nom,
        "url": url,
        "type": type_,
        "pays": pays,
        "criteres": {},
        "details": {},
        "erreur": None,
    }
    c = r["criteres"]
    d = r["details"]

    # ── Chargement de la page d'accueil ──
    try:
        resp = get(url)
        html = resp.text
        final = resp.url
        d["url_finale"] = final
        d["statut"] = resp.status_code
    except Exception as e:
        r["erreur"] = str(e)[:160]
        return r

    base = f"{urlparse(final).scheme}://{urlparse(final).netloc}"
    soup = BeautifulSoup(html, "html.parser")

    # Repli sur la racine si la page ciblee est trop pauvre (sous-page vide)
    tmp = BeautifulSoup(html, "html.parser")
    for t in tmp(["script", "style", "noscript"]):
        t.decompose()
    if len(" ".join(tmp.get_text(" ").split()).split()) < 60 and final.rstrip("/") != base:
        try:
            resp2 = get(base)
            tmp2 = BeautifulSoup(resp2.text, "html.parser")
            for t in tmp2(["script", "style", "noscript"]):
                t.decompose()
            if len(" ".join(tmp2.get_text(" ").split()).split()) >= 60:
                html, final, resp = resp2.text, resp2.url, resp2
                soup = BeautifulSoup(html, "html.parser")
                d["repli_racine"] = True
                d["url_finale"] = final
        except Exception:
            pass

    # 1 ── HTTPS
    c["https"] = final.startswith("https://")

    # 2 ── Rendu serveur : du texte visible dans le HTML brut ?
    for t in soup(["script", "style", "noscript"]):
        t.decompose()
    texte = " ".join(soup.get_text(" ").split())
    d["mots_html_brut"] = len(texte.split())
    c["rendu_serveur"] = d["mots_html_brut"] >= 250

    # 3 ── Encodage UTF-8
    ctype = resp.headers.get("content-type", "").lower()
    meta_cs = soup.find("meta", charset=True)
    cs = (meta_cs.get("charset", "") if meta_cs else "") + " " + ctype
    c["encodage_utf8"] = "utf-8" in cs.lower()
    d["encodage"] = cs.strip()[:60]

    # 4 ── Title
    t = soup.find("title")
    tt = t.get_text(strip=True) if t else ""
    d["title"] = tt[:120]
    d["title_len"] = len(tt)
    c["title_ok"] = 15 <= len(tt) <= 75

    # 5 ── Meta description
    md = soup.find("meta", attrs={"name": re.compile("^description$", re.I)})
    dd = md.get("content", "").strip() if md else ""
    d["description_len"] = len(dd)
    c["description_ok"] = 100 <= len(dd) <= 190

    # 6 ── H1 unique
    h1 = soup.find_all("h1")
    d["nb_h1"] = len(h1)
    c["h1_unique"] = len(h1) == 1

    # 7 ── Viewport
    c["viewport"] = soup.find("meta", attrs={"name": re.compile("^viewport$", re.I)}) is not None

    # 8 ── Images avec alt
    imgs = soup.find_all("img")
    sans_alt = [i for i in imgs if not i.get("alt", "").strip()]
    d["nb_images"] = len(imgs)
    d["images_sans_alt"] = len(sans_alt)
    c["images_alt"] = len(imgs) == 0 or len(sans_alt) / len(imgs) <= 0.15

    # 9 ── Données structurées JSON-LD
    types = set()
    for s in BeautifulSoup(html, "html.parser").find_all(
        "script", type=re.compile("application/ld\\+json", re.I)
    ):
        try:
            data = json.loads(s.string or "{}")
            for obj in data if isinstance(data, list) else [data]:
                for g in obj.get("@graph", [obj]) if isinstance(obj, dict) else []:
                    ty = g.get("@type")
                    if isinstance(ty, list):
                        types.update(ty)
                    elif ty:
                        types.add(ty)
        except Exception:
            pass
    d["schemas"] = sorted(types)
    c["donnees_structurees"] = len(types) >= 3

    # 10 ── robots.txt
    robots = ""
    try:
        rr = get(urljoin(base, "/robots.txt"))
        if rr.status_code == 200 and "user-agent" in rr.text.lower():
            robots = rr.text
    except Exception:
        pass
    c["robots_txt"] = bool(robots)
    d["robots_taille"] = len(robots)

    # 11 ── Crawlers IA autorisés
    rl = robots.lower()
    trouves = [x for x in CRAWLERS_IA if x in rl]
    d["crawlers_ia_cites"] = trouves
    # Cité et non bloqué globalement
    bloque = bool(re.search(r"user-agent:\s*(gptbot|claudebot)[\s\S]{0,120}?disallow:\s*/\s*$", rl, re.M))
    c["crawlers_ia"] = bool(trouves) and not bloque

    # 12 ── Sitemap
    urls_sitemap = 0
    sm_url = None
    m = re.search(r"sitemap:\s*(\S+)", rl)
    candidats = [m.group(1)] if m else []
    candidats += [urljoin(base, p) for p in ("/sitemap.xml", "/sitemap_index.xml")]
    for u in candidats:
        try:
            sr = get(u)
            if sr.status_code == 200 and "<urlset" in sr.text[:3000] or "<sitemapindex" in sr.text[:3000]:
                urls_sitemap = sr.text.count("<loc>")
                sm_url = u
                break
        except Exception:
            continue
    c["sitemap"] = urls_sitemap > 0
    d["sitemap_urls"] = urls_sitemap
    d["sitemap_url"] = sm_url

    # 13 ── llms.txt
    llms = False
    try:
        lr = get(urljoin(base, "/llms.txt"))
        llms = lr.status_code == 200 and len(lr.text) > 80 and "<html" not in lr.text[:400].lower()
    except Exception:
        pass
    c["llms_txt"] = llms

    # 14 ── Catalogue indexable : pages produits en HTML, pas en PDF
    liens = [a.get("href", "") for a in soup.find_all("a", href=True)]
    pdfs = [l for l in liens if l.lower().endswith(".pdf")]
    MOTS = ("product", "produit", "machine", "maschine", "catalog", "catalogue",
            "gamme", "range", "solutions", "modell", "serie", "series")
    pages_prod = [l for l in liens if any(k in l.lower() for k in MOTS) and not l.lower().endswith(".pdf")]
    d["liens_pdf"] = len(pdfs)
    d["liens_produits_html"] = len(pages_prod)
    c["catalogue_indexable"] = len(pages_prod) >= 5

    # 15 ── Blog / actualités
    MOTS_BLOG = ("/blog", "/news", "/actualite", "/aktuelles", "/insights",
                 "/noticias", "/press", "/media")
    c["blog"] = any(any(k in l.lower() for k in MOTS_BLOG) for l in liens)

    # ── Site non mesurable (protection anti-bot ou rendu JS integral) ──
    if d["mots_html_brut"] < 50:
        r["erreur"] = "non mesurable : HTML quasi vide (anti-bot ou rendu JS integral)"
        r["score"] = None
        return r

    # ── Score ──
    score = sum(POIDS[k] for k, v in c.items() if v)
    r["score"] = score
    return r


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    sites = []
    with open(sys.argv[1], encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            if row.get("url"):
                sites.append(row)

    print(f"Baromètre digital — {len(sites)} sites, 15 critères\n")
    resultats = []

    for i, s in enumerate(sites, 1):
        nom = s.get("nom", s["url"])
        print(f"  [{i:>2}/{len(sites)}] {nom[:38]:<38} ", end="", flush=True)
        r = audit(nom, s["url"], s.get("type", ""), s.get("pays", ""))
        resultats.append(r)
        if r["erreur"]:
            print(f"ERREUR  {r['erreur'][:40]}")
        else:
            ok = sum(1 for v in r["criteres"].values() if v)
            print(f"{r['score']:>3}/100   ({ok}/15 critères)")
        time.sleep(1.2)

    with open("barometre-resultats.json", "w", encoding="utf-8") as f:
        json.dump(resultats, f, ensure_ascii=False, indent=2)

    champs = ["nom", "url", "type", "pays", "score"] + list(POIDS)
    with open("barometre-resultats.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(champs)
        for r in resultats:
            if r["erreur"]:
                continue
            w.writerow([r["nom"], r["url"], r["type"], r["pays"], r["score"]]
                       + [int(r["criteres"].get(k, False)) for k in POIDS])

    # ── Synthèse ──
    valides = [r for r in resultats if not r["erreur"]]
    exclus = [r for r in resultats if r["erreur"]]
    if exclus:
        print("\n  Sites exclus de la synthese :")
        for r in exclus:
            print(f"    {r['nom'][:34]:<34} {r['erreur'][:52]}")
    if not valides:
        print("\nAucun site analysé.")
        return

    scores = sorted(r["score"] for r in valides)
    n = len(scores)
    moy = sum(scores) / n
    med = scores[n // 2] if n % 2 else (scores[n // 2 - 1] + scores[n // 2]) / 2

    print("\n" + "=" * 62)
    print(f"  SYNTHÈSE — {n} sites analysés")
    print("=" * 62)
    print(f"  Score moyen   {moy:.0f}/100")
    print(f"  Médiane       {med:.0f}/100")
    print(f"  Minimum       {scores[0]}/100")
    print(f"  Maximum       {scores[-1]}/100")
    print()
    print("  Taux de conformité par critère :")
    for k in POIDS:
        c = sum(1 for r in valides if r["criteres"].get(k))
        pct = c / n * 100
        barre = "█" * int(pct / 5)
        print(f"    {k:<22} {c:>2}/{n}  {pct:>3.0f}%  {barre}")

    print("\n  Fichiers écrits : barometre-resultats.json, barometre-resultats.csv")


if __name__ == "__main__":
    main()
