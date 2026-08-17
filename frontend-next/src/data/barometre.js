// =============================================================
// Baromètre digital machine-outil — édition 2026
// Données collectées en août 2026 sur 56 sites, 16 critères
// binaires et reproductibles. Méthode et script publics.
// =============================================================

export const BAROMETRE = {
  edition: '2026',
  dateCollecte: 'août 2026',
  nbSites: 56,
  nbCriteres: 16,

  title: 'Baromètre digital de la machine-outil 2026',
  description:
    "56 sites de fabricants et distributeurs de machines-outils analysés sur 16 critères techniques. Trois autorisent les crawlers IA. Résultats complets et méthode.",

  hero: {
    kicker: 'Étude · Édition 2026',
    headline: 'La moitié des distributeurs français ont moins de 10 pages sur Google.',
    sub: "56 sites de fabricants et de distributeurs de machines-outils, mesurés sur 16 critères vérifiables. Ceux qui ont un vrai catalogue en ligne sont précisément ceux qui n'ont rien fait pour être lisibles par les moteurs IA. Tableau complet des résultats."
  },

  kpis: [
    { v: '9,5', l: 'pages indexées, médiane des distributeurs' },
    { v: '7/8', l: 'gros catalogues sans aucune couche IA' },
    { v: '3/56', l: 'sites autorisant les crawlers IA' },
    { v: '16', l: 'critères binaires et vérifiables' },
  ],

  // ─── PROBLÈME ───────────────────────────────────────────
  probleme: {
    h2: 'Le terrain de jeu a changé, les sites non',
    body: [
      "Pendant quinze ans, la question était simple : le site est-il en HTTPS, s'affiche-t-il sur mobile, Google peut-il le lire ? Ces questions sont réglées. Sur les 56 sites analysés, 95 % sont en HTTPS, 96 % ont une balise viewport, 96 % servent leur contenu en HTML lisible.",
      "Mais un acheteur industriel ne parcourt plus systématiquement dix résultats de recherche. Il pose une question à ChatGPT, Perplexity ou au résumé IA de Google, et obtient une réponse rédigée citant trois ou quatre sources. Ces trois ou quatre entreprises recevront les demandes. Les autres n'apparaissent nulle part.",
      "Nous avons voulu savoir combien d'acteurs du secteur s'étaient préparés à ce basculement. La réponse tient en un chiffre : trois sur cinquante-six.",
    ],
  },

  // ─── MÉTHODE ────────────────────────────────────────────
  methode: {
    kicker: 'Méthode',
    h2: 'Seize critères binaires, aucune appréciation',
    body: [
      "Chaque critère est vérifiable par un tiers avec les mêmes outils. Un site a un fichier llms.txt ou n'en a pas. Son sitemap contient 8 URLs ou 212. Ses données structurées sont valides ou absentes. Aucune note ne repose sur une impression de navigation.",
      "Cette contrainte a une conséquence qu'il faut énoncer : le baromètre ne juge ni le design, ni l'ergonomie, ni la qualité éditoriale. Un site techniquement irréprochable peut être désagréable à utiliser, et l'inverse est vrai. Nous mesurons ce qu'une machine voit, pas ce qu'un humain ressent.",
      "Le script de collecte est public. N'importe qui peut refaire la mesure et obtenir les mêmes résultats.",
    ],
    criteres: [
      { g: 'Accessibilité machine', items: ['HTTPS actif', 'Rendu serveur', 'Encodage UTF-8', 'Balise viewport'] },
      { g: 'Indexabilité', items: ['Catalogue en HTML', 'Profondeur du sitemap', 'Sitemap déclaré', 'robots.txt valide'] },
      { g: 'Lisibilité IA', items: ['Crawlers IA autorisés', 'Fichier llms.txt', 'Données structurées métier'] },
      { g: 'Signaux de page', items: ['Title dimensionné', 'Meta description', 'H1 unique', 'Attributs alt', 'Section actualités'] },
    ],
  },

  // ─── BENTO : LES CONSTATS ───────────────────────────────
  bento: {
    h2: 'Ce que la mesure révèle',
    intro:
      "Quatre constats ressortent nettement du panel. Les deux premiers concernent la visibilité dans les moteurs génératifs, les deux suivants la façon dont Google comprend un site industriel.",
    items: [
      {
        t: 'Crawlers IA',
        v: '3/56',
        d: "Trois sites autorisent explicitement GPTBot, ClaudeBot ou PerplexityBot dans leur robots.txt. Aucun fabricant international. Les 28 constructeurs analysés, dont plusieurs pèsent des milliards, sont absents des réponses génératives.",
        icon: 'Bot',
        span: 'md:col-span-4 md:row-span-2',
      },
      {
        t: 'Fichier llms.txt',
        v: '4/56',
        d: "Le standard émergent qui décrit une entreprise aux modèles de langage. Quatre sites l'ont déployé.",
        icon: 'FileCode',
        span: 'md:col-span-2 md:row-span-1',
      },
      {
        t: 'Données structurées',
        v: '13/56',
        d: "Moins d'un quart des sites décrit son activité en JSON-LD avec un schema métier. Google devine le reste.",
        icon: 'Braces',
        span: 'md:col-span-2 md:row-span-1',
      },
      {
        t: 'Profondeur du catalogue',
        v: '16/56',
        d: "Seize sites dépassent 20 pages indexées. Les autres sont des vitrines : le catalogue existe en interne mais reste invisible dans les résultats de recherche.",
        icon: 'Layers',
        span: 'md:col-span-3 md:row-span-1',
      },
      {
        t: 'Images sans description',
        v: '37/56',
        d: "Deux tiers des sites ont des images sans attribut alt. Enjeu d'accessibilité, et référencement image inexploité.",
        icon: 'ImageOff',
        span: 'md:col-span-3 md:row-span-1',
      },
    ],
  },

  // ─── SECTIONS ───────────────────────────────────────────
  sections: [
    {
      kicker: 'Le constat principal',
      h2: 'Ceux qui ont le contenu n\u2019ont pas la structure',
      body: [
        "Huit distributeurs du panel dépassent 150 pages indexées. Ce sont les seuls qui ont réellement mis leur catalogue en ligne : jusqu\u2019à 3 053 pages pour l\u2019un d\u2019eux, 1 012 pour un autre, 770 pour un troisième. Un acheteur qui cherche une référence précise a une chance de les trouver.",
        "Sur ces huit sites, sept n\u2019ont ni fichier llms.txt, ni autorisation des crawlers IA, et six n\u2019ont aucun schema métier. Ils ont fait le travail le plus long, celui de publier des centaines de fiches, et ils s\u2019arrêtent juste avant la couche qui rend ce travail exploitable par les moteurs génératifs.",
        "À l\u2019inverse, sept sites de moins de vingt pages obtiennent 65 sur 100 ou plus. Leur template moderne coche automatiquement les cases techniques : données structurées, sitemap, balises correctes. Mais derrière, il n\u2019y a rien à indexer.",
        "Le secteur se partage donc entre des sites qui ont du contenu sans structure et des sites qui ont la structure sans contenu. Presque personne ne cumule les deux.",
      ],
      stats: [
        { v: '8/28', l: 'distributeurs dépassant 150 pages' },
        { v: '7/8', l: 'de ces sites sans couche IA' },
        { v: '7', l: 'sites de moins de 20 pages notés 65+' },
        { v: '5', l: 'sites sans aucun sitemap' },
      ],
    },
    {
      kicker: 'La médiane',
      h2: 'Neuf pages et demie',
      body: [
        "La médiane du panel des distributeurs s\u2019établit à 9,5 pages indexées. Dix-huit sites sur vingt-huit comptent moins de vingt pages. Cinq n\u2019ont aucun sitemap exploitable.",
        "Rapporté au métier, ce chiffre interroge. Un distributeur de machines-outils référence en général plusieurs dizaines de modèles, représente entre dix et trente constructeurs, et couvre plusieurs départements. Chacun de ces éléments correspond à une recherche possible, donc à une page potentielle.",
        "Neuf pages, c\u2019est un site de présentation. Le catalogue existe, mais il vit dans un PDF, dans un extranet ou dans la tête des commerciaux.",
      ],
    },
    {
      kicker: 'Ce qui est acquis',
      h2: 'Les fondamentaux ne différencient plus personne',
      body: [
        "HTTPS, rendu serveur, affichage mobile, encodage correct : ces quatre points sont réglés sur la quasi-totalité du panel. Trois distributeurs seulement restent en HTTP, deux servent un contenu que Google peine à lire.",
        "Ces critères ont cessé d\u2019être des avantages compétitifs pour devenir des prérequis. La différenciation s\u2019est déplacée d\u2019un cran, vers la profondeur du catalogue et la lisibilité par les machines.",
      ],
    },
    {
      kicker: 'La fenêtre',
      h2: 'Un angle mort qui se referme',
      body: [
        "Un taux d\u2019adoption de 5 % sur un levier de visibilité rappelle la situation du référencement naturel au début des années 2000. Les entreprises qui s\u2019y étaient mises alors ont conservé leur avance une décennie.",
        "La mise en conformité est par ailleurs modeste : un fichier llms.txt correctement rédigé, quelques lignes dans le robots.txt, des données structurées complètes. Aucun de ces chantiers ne demande une refonte, et aucun ne dépasse quelques jours de travail.",
        "Pour les huit sites qui disposent déjà d\u2019un catalogue en ligne, l\u2019écart à combler est encore plus réduit : le contenu existe, il ne manque que la couche qui le rend citable.",
      ],
    },
  ],

  // ─── TABLEAU DES 28 DISTRIBUTEURS ───────────────────────
  tableau: {
    kicker: 'Résultats détaillés',
    h2: 'Les 28 distributeurs, ligne par ligne',
    intro:
      "Les scores sont publiés sous identifiant. Nous ne nommons pas les entreprises : la grille mesure la conformité technique, pas la qualité d\u2019un site, et un score bas ne dit rien du sérieux commercial d\u2019un distributeur. Une seule ligne est identifiée, celle de notre client, pour que le lien soit visible.",
    colonnes: ['Réf.', 'Score', 'Pages indexées', 'Schemas métier', 'Crawlers IA', 'llms.txt'],
    lignes: [
      { id: 'ALMA', s: 100, p: 212, sc: 2, ia: true, l: true, note: 'client Industrial Decision' },
      { id: 'D-02', s: 88, p: 8, sc: 1, ia: true, l: true },
      { id: 'D-03', s: 78, p: 348, sc: 0, ia: false, l: false },
      { id: 'D-04', s: 78, p: 5, sc: 2, ia: false, l: true },
      { id: 'D-05', s: 78, p: 42, sc: 2, ia: false, l: false },
      { id: 'D-06', s: 76, p: 7, sc: 1, ia: false, l: false },
      { id: 'D-07', s: 73, p: 770, sc: 0, ia: false, l: false },
      { id: 'D-08', s: 73, p: 381, sc: 0, ia: false, l: false },
      { id: 'D-09', s: 71, p: 4, sc: 1, ia: false, l: false },
      { id: 'D-10', s: 71, p: 9, sc: 1, ia: false, l: false },
      { id: 'D-11', s: 71, p: 3, sc: 1, ia: false, l: false },
      { id: 'D-12', s: 69, p: 1012, sc: 1, ia: false, l: false },
      { id: 'D-13', s: 68, p: 3053, sc: 1, ia: false, l: false },
      { id: 'D-14', s: 67, p: 10, sc: 1, ia: false, l: false },
      { id: 'D-15', s: 63, p: 421, sc: 0, ia: false, l: false },
      { id: 'D-16', s: 61, p: 3, sc: 0, ia: false, l: false },
      { id: 'D-17', s: 57, p: 3, sc: 1, ia: false, l: false },
      { id: 'D-18', s: 57, p: 48, sc: 0, ia: false, l: false },
      { id: 'D-19', s: 56, p: 0, sc: 0, ia: false, l: false },
      { id: 'D-20', s: 55, p: 159, sc: 1, ia: false, l: false },
      { id: 'D-21', s: 53, p: 14, sc: 0, ia: true, l: false },
      { id: 'D-22', s: 46, p: 12, sc: 1, ia: false, l: false },
      { id: 'D-23', s: 45, p: 14, sc: 0, ia: false, l: false },
      { id: 'D-24', s: 43, p: 9, sc: 0, ia: false, l: false },
      { id: 'D-25', s: 41, p: 0, sc: 0, ia: false, l: false },
      { id: 'D-26', s: 34, p: 0, sc: 0, ia: false, l: false },
      { id: 'D-27', s: 32, p: 0, sc: 0, ia: false, l: false },
      { id: 'D-28', s: 25, p: 0, sc: 0, ia: false, l: false },
    ],
    lecture:
      "Les lignes D-03, D-07, D-08, D-12, D-13, D-15 et D-20 correspondent aux sites disposant d\u2019un catalogue en ligne substantiel. Aucune ne coche les colonnes Crawlers IA et llms.txt.",
  },

  // ─── PANEL FABRICANTS ───────────────────────────────────
  fabricants: {
    kicker: 'Panel comparatif',
    h2: 'Les 28 fabricants et intégrateurs analysés',
    intro:
      "Constructeurs internationaux présents sur le marché français. Leurs scores individuels ne sont pas publiés : la comparaison porte sur les moyennes et les taux de conformité.",
    liste: [
      'DMG MORI', 'Mazak', 'Okuma Europe', 'Makino', 'HURON Graffenstaden', 'SOMAB',
      'INDEX-TRAUB France', 'Tornos', 'Citizen Machinery Europe', 'TSUGAMI Europe',
      'GROB', 'Hermle France', 'Starrag', 'CHIRON Group', 'Brother Machine Tools',
      'Hurco France', 'United Grinding', 'Sodick Europe', 'Fives Machining',
      'GF Machining Solutions', 'Danobat', 'Junker Group', 'LIPEMEC', 'KASTO',
      'BEHRINGER France', 'AMADA France', 'Kaltenbach', 'ZAYER',
    ],
    note:
      "Deux sites du panel initial, Haas France et DN Solutions, renvoient un HTML vide aux requêtes automatisées. Ils sont exclus des moyennes plutôt que notés à zéro.",
  },

  // ─── RÉSULTATS DÉTAILLÉS ────────────────────────────────
  resultats: {
    kicker: 'Distribution',
    h2: 'Comment se répartissent les 56 sites',
    body: [
      "Les scores s'étalent de 25 à 100 sur 100. La moitié du panel se situe entre 45 et 70, ce qui traduit un secteur homogène plutôt qu'une fracture entre bons et mauvais élèves.",
      "Un site du panel obtient 100 sur 100. Nous le signalons par transparence : il s'agit d'ALMA Machines-Outils, dont Industrial Decision a réalisé la refonte. Son score reflète la grille appliquée, pas un jugement indépendant.",
    ],
    distribution: [
      { l: '80 à 100', oem: 0, dist: 2 },
      { l: '60 à 79', oem: 13, dist: 14 },
      { l: '40 à 59', oem: 13, dist: 9 },
      { l: 'Moins de 40', oem: 2, dist: 3 },
    ],
    conformite: [
      { l: 'HTTPS', oem: 100, dist: 89 },
      { l: 'Rendu serveur', oem: 100, dist: 93 },
      { l: 'Catalogue en HTML', oem: 82, dist: 89 },
      { l: 'robots.txt valide', oem: 79, dist: 93 },
      { l: 'Sitemap déclaré', oem: 68, dist: 82 },
      { l: 'Profondeur du catalogue', oem: 21, dist: 36 },
      { l: 'Données structurées', oem: 11, dist: 36 },
      { l: 'Fichier llms.txt', oem: 4, dist: 11 },
      { l: 'Crawlers IA autorisés', oem: 0, dist: 11 },
    ],
  },

  // ─── PÉRIMÈTRE ──────────────────────────────────────────
  perimetre: {
    h2: 'Périmètre et limites',
    items: [
      { t: '28 fabricants et intégrateurs', d: 'Constructeurs internationaux présents sur le marché français : Allemagne, Japon, Suisse, Espagne, États-Unis, Corée du Sud, France.' },
      { t: '28 distributeurs français', d: 'Négociants de machines-outils neuves et occasion, du national au régional.' },
      { t: '2 sites non mesurables', d: "Deux sites du panel initial renvoient un HTML vide aux requêtes automatisées, protection anti-robot ou rendu JavaScript intégral. Ils sont exclus des moyennes plutôt que notés à zéro." },
      { t: 'Ce que la grille ne mesure pas', d: "Design, ergonomie, qualité éditoriale, performance commerciale. Un score élevé n'indique pas un beau site, mais un site lisible par les machines." },
      { t: 'Un instantané', d: 'Les données datent d\u2019août 2026. Un site refondu depuis obtiendrait un résultat différent.' },
      { t: 'Méthode reproductible', d: 'Le script de collecte est disponible sur demande. Les mêmes URLs donnent les mêmes scores.' },
    ],
  },

  cta: {
    title: 'Où se situe votre site dans ce panel ?',
    body: "Nous appliquons la même grille de 16 critères à votre site et vous transmettons votre score, vos points de conformité et vos écarts par rapport à la moyenne du secteur.",
    label: 'Demander mon score',
    reassurance: 'Sans engagement · Livré sous 7 jours · Même méthode que l\u2019étude',
  },
};
