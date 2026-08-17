// =============================================================
// Donnees regionales — landing pages locales
// Chaque chiffre porte sa source. Null = donnee non disponible,
// le composant masque automatiquement les blocs vides.
// =============================================================

export const FRANCE = {
  defaillancesIndustrielles2025: 51772,
  evolution: 9.5,
  serie: [
    { annee: 2021, valeur: 35672, evolution: null },
    { annee: 2022, valeur: 37825, evolution: 6.0 },
    { annee: 2023, valeur: 42092, evolution: 11.3 },
    { annee: 2024, valeur: 47279, evolution: 12.3 },
    { annee: 2025, valeur: 51772, evolution: 9.5 },
  ],
  liquidationsDirectes: 41252,
  redressementsJudiciaires: 9958,
  sauvegardes: 562,
  oemBenchmarkes: 30,
  sources: 'Altares, Banque de France, analyse Industrial Decision',

  // Marche adressable sur les 4 regions prioritaires
  nafTotalRegionsPrioritaires: 12721,
  nafSource: 'recherche-entreprises.api.gouv.fr, etablissements actifs, avril 2026',
};

export const REGIONS = {

  'auvergne-rhone-alpes': {
    nom: 'Auvergne-Rhône-Alpes',
    code: 'ARA',
    codeInsee: '84',
    prefecture: 'Lyon',
    departements: ['01','03','07','15','26','38','42','43','63','69','73','74'],

    // ── CARTE ────────────────────────────────────────────
    center: [4.7, 45.4],
    zoom: 5.2,

    // ── PRESSION INDUSTRIELLE (donnee Industrial Decision) ──
    defaillances2025: 1780,
    evolutionDefaillances: 9.9,
    ipi: 62,
    rangDefaillances: 2,

    // ── POIDS INDUSTRIEL ─────────────────────────────────
    emploisIndustriels: 534000,
    emploisIndustrielsSource: 'Invest in Auvergne-Rhône-Alpes, 2025',
    sitesIndustriels: 61000,
    sitesIndustrielsSource: 'Préfecture de région',
    entreprisesIndustrielles: 22000,
    partIndustrieFrancaise: 16,
    partValeurAjoutee: 17.9,
    partValeurAjouteeFrance: 13.2,
    rangIndustriel: 1,
    pib: 300,
    usinesOuvertesDepuis2022: 148,
    partCreationsUsinesFrance: 31,

    // ── FAIT MARQUANT ────────────────────────────────────
    faitMarquant: "La fabrication de machines et équipements est le secteur d'activité le plus fortement surreprésenté de la région.",
    faitMarquantSource: 'INSEE',

    // ── NAF CIBLES ───────────────────────────────────────
    // A COMPLETER via recherche-entreprises.api.gouv.fr
    naf: {
      '28.41Z': 86,
      '28.49Z': 43,
      '46.62Z': 299,
      '25.62A': 379,
      '25.62B': 1872,
      '25.61Z': 686,
      '25.29Z': 30,
      '33.12Z': 2479,
    },
    nafTotal: 5874,
    nafSource: 'recherche-entreprises.api.gouv.fr, etablissements actifs, avril 2026',

    // ── BASSINS INDUSTRIELS ──────────────────────────────
    bassins: [
      {
        nom: "Vallée de l'Arve",
        villes: 'Cluses, Bonneville, Marnaz, Scionzier, Thyez',
        specialite: 'Décolletage et usinage de précision',
        chiffre: '242 des 428 entreprises françaises du décolletage',
        detail: "60 % du chiffre d'affaires national du secteur, environ 7 000 emplois directs. Le CTDEC et le pôle Mont Blanc Industries y sont implantés.",
      },
      {
        nom: 'Saint-Étienne',
        villes: 'Saint-Étienne, Roanne',
        specialite: 'Machines-outils et métallurgie',
        chiffre: null,
        detail: "Pôle historique de la mécanique et du travail des métaux.",
      },
      {
        nom: 'Grenoble',
        villes: 'Grenoble, Crolles',
        specialite: 'Microélectronique et équipements',
        chiffre: null,
        detail: 'STMicroelectronics, Schneider Electric, CEA-Grenoble.',
      },
      {
        nom: 'Oyonnax',
        villes: 'Oyonnax, Nantua',
        specialite: 'Plasturgie',
        chiffre: null,
        detail: 'La "Plastics Vallée", premier bassin plasturgiste français.',
      },
    ],

    // ── CLIENTS ──────────────────────────────────────────
    clients: [
      {
        nom: 'ALMA Machines-Outils',
        ville: null,
        secteur: 'Négoce de machines-outils',
        resultat: 'Score SEO de 8 à 91 sur 100, 212 pages publiées',
      },
    ],

    // ── CONTEXTE ─────────────────────────────────────────
    contexte: "Auvergne-Rhône-Alpes est la première région industrielle de France par l'emploi, avec 534 000 emplois industriels répartis sur 61 000 sites. L'industrie y génère 17,9 % de la valeur ajoutée régionale, contre 13,2 % en moyenne nationale. C'est aussi la deuxième région la plus touchée par les défaillances industrielles en 2025, avec 1 780 procédures et une hausse de 9,9 % sur un an. Cette combinaison de densité industrielle et de pression économique crée un contexte où la visibilité digitale devient un facteur de différenciation directe.",

    title: null,
    description: null,
  },

  // ── AUTRES REGIONS : donnees a completer ────────────────
  'hauts-de-france': {
    nom: 'Hauts-de-France',
    code: 'HDF',
    codeInsee: '32',
    prefecture: 'Lille',
    departements: ['02','59','60','62','80'],
    center: [2.8, 50.0],
    zoom: 6,

    defaillances2025: 1355,
    evolutionDefaillances: 9.5,
    ipi: null,
    rangDefaillances: 3,

    emploisIndustriels: 270000,
    emploisIndustrielsSource: 'Urssaf, postes salaries fin 2022',
    sitesIndustriels: null,
    entreprisesIndustrielles: 20000,
    partIndustrieFrancaise: 9,
    partEmploiRegional: 18,
    rangIndustriel: 4,

    faitMarquant: "La metallurgie represente 19 % des etablissements industriels de plus de 10 salaries de la region, juste derriere l'agroalimentaire.",
    faitMarquantSource: 'Bpifrance Le Lab',

    naf: {
      '28.41Z': 17,
      '28.49Z': 19,
      '46.62Z': 87,
      '25.62A': 23,
      '25.62B': 658,
      '25.61Z': 265,
      '25.29Z': 19,
      '33.12Z': 1121,
    },
    nafTotal: 2209,
    nafSource: 'recherche-entreprises.api.gouv.fr, etablissements actifs, avril 2026',

    bassins: [
      { nom: 'Dunkerque', villes: 'Dunkerque, Gravelines', specialite: 'Siderurgie et energie', chiffre: null,
        detail: "ArcelorMittal, premier site siderurgique de France. Pole de la decarbonation industrielle." },
      { nom: 'Valenciennes', villes: 'Valenciennes, Onnaing', specialite: 'Ferroviaire et automobile', chiffre: null,
        detail: "Alstom, Toyota. Bassin historique de la construction mecanique." },
      { nom: 'Maubeuge', villes: 'Maubeuge, Feignies', specialite: 'Metallurgie et automobile', chiffre: null,
        detail: "Vallourec, Renault. Taux d'emploi industriel superieur a 20 %." },
      { nom: 'Vallee de la Batterie', villes: 'Douvrin, Billy-Berclau', specialite: 'Batteries et electrification', chiffre: null,
        detail: "Gigafactories ACC et Verkor. Premier bassin francais de la batterie." },
    ],

    clients: [],

    contexte: "Les Hauts-de-France concentrent 270 000 emplois industriels, soit 9 % de l'emploi industriel francais, ce qui en fait la quatrieme region industrielle du pays. L'industrie y pese 18 % des effectifs salaries regionaux, nettement au-dessus de la moyenne nationale, repartis sur plus de 20 000 etablissements. La region est aussi la troisieme la plus touchee par les defaillances industrielles en 2025, avec 1 355 procedures et une hausse de 9,5 %. Entre reindustrialisation portee par la filiere batterie et fragilite des filieres historiques, le tissu regional est en pleine recomposition.",

    title: null,
    description: null,
  },

  'grand-est': {
    nom: 'Grand Est',
    code: 'GES',
    codeInsee: '44',
    prefecture: 'Strasbourg',
    departements: ['08','10','51','52','54','55','57','67','68','88'],
    center: [5.6, 48.6],
    zoom: 5.5,

    defaillances2025: 1190,
    evolutionDefaillances: 9.7,
    ipi: 48,
    rangDefaillances: 5,

    emploisIndustriels: 300753,
    emploisIndustrielsSource: 'DREETS Grand Est, salaries fin 2022',
    sitesIndustriels: null,
    entreprisesIndustrielles: 25679,
    entreprisesSource: 'INSEE Sirene, novembre 2024',
    partIndustrieFrancaise: null,
    partValeurAjoutee: 19.2,
    partValeurAjouteeFrance: 13.9,
    rangIndustriel: 3,

    faitMarquant: "Plus de 60 % des emplois industriels de la region relevent de la metallurgie. La fabrication de machines et equipements est l'un des deux premiers postes d'exportation regionaux.",
    faitMarquantSource: 'Prefecture de region Grand Est, DREETS',

    naf: {
      '28.41Z': 32,
      '28.49Z': 28,
      '46.62Z': 169,
      '25.62A': 15,
      '25.62B': 917,
      '25.61Z': 344,
      '25.29Z': 16,
      '33.12Z': 1305,
    },
    nafTotal: 2826,
    nafSource: 'recherche-entreprises.api.gouv.fr, etablissements actifs, avril 2026',

    bassins: [
      { nom: 'Alsace du Sud', villes: 'Mulhouse, Saint-Louis', specialite: 'Automobile et mecanique', chiffre: null,
        detail: "Stellantis Mulhouse. Forte specialisation sectorielle, proximite suisse et allemande." },
      { nom: 'Sillon lorrain', villes: 'Nancy, Metz, Thionville', specialite: 'Metallurgie et siderurgie', chiffre: null,
        detail: "Bassin historique du travail des metaux, dense en sous-traitance mecanique." },
      { nom: 'Vosges', villes: 'Epinal, Saint-Die', specialite: 'Bois, textile technique et mecanique', chiffre: null,
        detail: "Tissu dense de PME industrielles, taux d'emploi industriel eleve." },
      { nom: 'Eurometropole de Strasbourg', villes: 'Strasbourg, Haguenau', specialite: 'Equipements et agroalimentaire', chiffre: null,
        detail: "Hager Electro, Wurth France. Deuxieme region exportatrice de France." },
    ],

    clients: [],

    contexte: "Le Grand Est est la troisieme region la plus industrialisee de France avec plus de 300 000 salaries dans l'industrie. Le secteur y genere 19,2 % de la valeur ajoutee regionale, contre 13,9 % au niveau national, et plus de 60 % de ces emplois relevent de la metallurgie. La region compte pres de 25 700 etablissements industriels et se classe deuxieme region exportatrice francaise. En 2025, 1 190 defaillances industrielles y ont ete recensees, en hausse de 9,7 %. La dependance aux filieres automobile et metallurgique expose particulierement le tissu regional aux cycles industriels.",

    title: null,
    description: null,
  },

  'bourgogne-franche-comte': {
    nom: 'Bourgogne-Franche-Comté',
    code: 'BFC',
    codeInsee: '27',
    prefecture: 'Dijon',
    departements: ['21','25','39','58','70','71','89','90'],
    center: [4.9, 47.1],
    zoom: 5.8,

    // Le nombre de defaillances 2025 n'est pas publie pour cette region.
    // BFC ne figure pas dans les six premieres (seuil : moins de 1 040).
    defaillances2025: null,
    evolutionDefaillances: null,
    ipi: 31,
    rangDefaillances: null,

    emploisIndustriels: null,
    sitesIndustriels: null,
    entreprisesIndustrielles: null,
    partIndustrieFrancaise: 5,
    partEmploiRegional: 16,
    partValeurAjoutee: 18.5,
    partValeurAjouteeFrance: 13.2,
    rangIndustriel: 1,
    rangIndustrielPrecision: "en part de l'emploi industriel dans l'emploi regional",

    faitMarquant: "La metallurgie, l'agroalimentaire et le bois concentrent a eux seuls la majorite des etablissements industriels de la region. Les zones d'emploi de Saint-Claude et Montbeliard depassent 30 % d'emploi industriel.",
    faitMarquantSource: 'INSEE, Bpifrance Le Lab',

    naf: {
      '28.41Z': 25,
      '28.49Z': 23,
      '46.62Z': 59,
      '25.62A': 38,
      '25.62B': 629,
      '25.61Z': 251,
      '25.29Z': 10,
      '33.12Z': 777,
    },
    nafTotal: 1812,
    nafSource: 'recherche-entreprises.api.gouv.fr, etablissements actifs, avril 2026',

    bassins: [
      { nom: 'Aire urbaine Belfort-Montbeliard', villes: 'Sochaux, Montbeliard, Belfort', specialite: 'Automobile et energie', chiffre: null,
        detail: "Stellantis Sochaux, General Electric. Plus de 30 % d'emploi industriel sur la zone." },
      { nom: 'Le Creusot', villes: 'Le Creusot, Chalon-sur-Saone', specialite: 'Metallurgie lourde et nucleaire', chiffre: null,
        detail: "Framatome, Industeel. Fabrication de composants nucleaires civils et militaires." },
      { nom: 'Haut-Jura', villes: 'Saint-Claude, Morez', specialite: 'Plasturgie, lunetterie, decolletage', chiffre: null,
        detail: "Zone d'emploi la plus industrielle de France en part d'emploi." },
      { nom: 'Dijon', villes: 'Dijon, Beaune', specialite: 'Agroalimentaire et pharmacie', chiffre: null,
        detail: "Pole Vitagora, URGO, Amora Maille." },
    ],

    clients: [],

    contexte: "La Bourgogne-Franche-Comte est la premiere region industrielle de France en part de l'emploi : l'industrie y represente 16 % de l'emploi total regional et 18,5 % de la valeur ajoutee, contre 13,2 % au niveau national. Les zones d'emploi de Saint-Claude et Montbeliard depassent meme 30 % d'emploi industriel. La metallurgie, l'agroalimentaire et le bois concentrent la majorite des etablissements. Cette specialisation forte constitue autant un atout qu'une exposition : la region a perdu 4,9 % de ses emplois industriels entre 2015 et 2022, sans le rebond observe au niveau national.",

    title: null,
    description: null,
  },
};

export const NAF_LABELS = {
  '28.41Z': "Machines-outils pour le travail des métaux",
  '28.49Z': "Autres machines-outils",
  '46.62Z': "Commerce de gros de machines-outils",
  '25.62A': "Décolletage",
  '25.62B': "Mécanique industrielle",
  '25.61Z': "Traitement et revêtement des métaux",
  '25.29Z': "Réservoirs et citernes métalliques",
  '33.12Z': "Réparation de machines et équipements",
};

export const REGION_SLUGS = Object.keys(REGIONS);
export const getRegion = (slug) => REGIONS[slug] || null;
