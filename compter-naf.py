#!/usr/bin/env python3
"""
=============================================================
Comptage des etablissements par code NAF et par region
Source : recherche-entreprises.api.gouv.fr (API publique)

Usage :
    python3 compter-naf.py                  # les 4 regions prioritaires
    python3 compter-naf.py --toutes         # les 13 regions
    python3 compter-naf.py --region ARA     # une seule region

Sortie : naf-par-region.json + bloc a coller dans regions.js
=============================================================
"""

import json
import sys
import time
import urllib.parse
import urllib.request

API = "https://recherche-entreprises.api.gouv.fr/search"

# Codes NAF cibles Industrial Decision
NAF = {
    "28.41Z": "Machines-outils pour le travail des metaux",
    "28.49Z": "Autres machines-outils",
    "46.62Z": "Commerce de gros de machines-outils",
    "25.62A": "Decolletage",
    "25.62B": "Mecanique industrielle",
    "25.61Z": "Traitement et revetement des metaux",
    "25.29Z": "Reservoirs et citernes metalliques",
    "33.12Z": "Reparation de machines et equipements",
}

# Departements par region
REGIONS = {
    "ARA": ("auvergne-rhone-alpes", "Auvergne-Rhone-Alpes",
            ["01","03","07","15","26","38","42","43","63","69","73","74"]),
    "HDF": ("hauts-de-france", "Hauts-de-France",
            ["02","59","60","62","80"]),
    "GES": ("grand-est", "Grand Est",
            ["08","10","51","52","54","55","57","67","68","88"]),
    "BFC": ("bourgogne-franche-comte", "Bourgogne-Franche-Comte",
            ["21","25","39","58","70","71","89","90"]),
    "IDF": ("ile-de-france", "Ile-de-France",
            ["75","77","78","91","92","93","94","95"]),
    "OCC": ("occitanie", "Occitanie",
            ["09","11","12","30","31","32","34","46","48","65","66","81","82"]),
    "NAQ": ("nouvelle-aquitaine", "Nouvelle-Aquitaine",
            ["16","17","19","23","24","33","40","47","64","79","86","87"]),
    "PAC": ("provence-alpes-cote-d-azur", "Provence-Alpes-Cote d'Azur",
            ["04","05","06","13","83","84"]),
    "PDL": ("pays-de-la-loire", "Pays de la Loire",
            ["44","49","53","72","85"]),
    "BRE": ("bretagne", "Bretagne", ["22","29","35","56"]),
    "NOR": ("normandie", "Normandie", ["14","27","50","61","76"]),
    "CVL": ("centre-val-de-loire", "Centre-Val de Loire",
            ["18","28","36","37","41","45"]),
    "COR": ("corse", "Corse", ["2A","2B"]),
}

PRIORITAIRES = ["ARA", "HDF", "GES", "BFC"]


def fetch(params, tentatives=3):
    """Appel API avec retry."""
    url = f"{API}?{urllib.parse.urlencode(params)}"
    for i in range(tentatives):
        try:
            req = urllib.request.Request(
                url, headers={"User-Agent": "IndustrialDecision/1.0 (contact@industrialdecision.com)"}
            )
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e:
            if i == tentatives - 1:
                print(f"      erreur : {e}")
                return None
            time.sleep(2 * (i + 1))
    return None


def compter(naf, dept, actifs_seulement=True):
    """Nombre d'etablissements pour un NAF dans un departement."""
    params = {
        "activite_principale": naf,
        "departement": dept,
        "per_page": 1,
        "page": 1,
    }
    if actifs_seulement:
        params["etat_administratif"] = "A"

    data = fetch(params)
    if data is None:
        return None
    return data.get("total_results", 0)


def compter_region(code_region, verbeux=True):
    slug, nom, depts = REGIONS[code_region]
    if verbeux:
        print(f"\n{'='*58}")
        print(f"  {nom}  ({len(depts)} departements)")
        print(f"{'='*58}")

    resultats = {}
    for naf, libelle in NAF.items():
        total = 0
        echecs = 0
        for d in depts:
            n = compter(naf, d)
            if n is None:
                echecs += 1
            else:
                total += n
            time.sleep(0.12)  # respect du rate limit

        resultats[naf] = None if echecs == len(depts) else total
        if verbeux:
            suffixe = f"  ({echecs} dept en echec)" if echecs else ""
            valeur = "n/d" if resultats[naf] is None else f"{resultats[naf]:>6,}".replace(",", " ")
            print(f"  {naf}  {valeur}   {libelle}{suffixe}")

    if verbeux:
        connus = [v for v in resultats.values() if v is not None]
        print(f"  {'-'*54}")
        print(f"  TOTAL  {sum(connus):>6,}".replace(",", " ") + "   etablissements cibles")

    return {"slug": slug, "nom": nom, "naf": resultats}


def bloc_js(resultats):
    """Genere le bloc a coller dans regions.js"""
    lignes = []
    lignes.append("\n" + "=" * 58)
    lignes.append("  A COLLER DANS src/data/regions.js")
    lignes.append("=" * 58 + "\n")
    for code, r in resultats.items():
        lignes.append(f"// {r['nom']} — remplacer le bloc naf: {{ ... }}")
        lignes.append("    naf: {")
        for naf in NAF:
            v = r["naf"].get(naf)
            lignes.append(f"      '{naf}': {v if v is not None else 'null'},")
        lignes.append("    },\n")
    return "\n".join(lignes)


def main():
    args = sys.argv[1:]

    if "--toutes" in args:
        cibles = list(REGIONS.keys())
    elif "--region" in args:
        i = args.index("--region")
        code = args[i + 1].upper()
        if code not in REGIONS:
            print(f"Region inconnue : {code}")
            print(f"Disponibles : {', '.join(REGIONS)}")
            sys.exit(1)
        cibles = [code]
    else:
        cibles = PRIORITAIRES

    print(f"Comptage NAF — {len(cibles)} region(s), {len(NAF)} codes")
    print("Source : recherche-entreprises.api.gouv.fr")
    print("Filtre : etablissements actifs uniquement")

    resultats = {}
    for code in cibles:
        resultats[code] = compter_region(code)

    with open("naf-par-region.json", "w", encoding="utf-8") as f:
        json.dump(resultats, f, ensure_ascii=False, indent=2)

    print(bloc_js(resultats))
    print("Fichier ecrit : naf-par-region.json")


if __name__ == "__main__":
    main()
