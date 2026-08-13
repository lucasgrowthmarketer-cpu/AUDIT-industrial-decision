// =============================================================
// Etudes de cas clients
// Progression problem-aware -> solution-aware
// Chaque chiffre est verifiable publiquement ou dans la GSC du client
// =============================================================

export const CAS_CLIENTS = {

  'alma-machines-outils': {
    priority: 0.9,
    client: 'ALMA Machines-Outils',
    secteur: 'Distribution de machines-outils',
    ville: 'Marseille',
    zone: 'Provence-Alpes-Côte d\u2019Azur et Languedoc',
    site: 'alma-machines-outils.fr',
    duree: '5 mois',
    contact: 'Jean-Baptiste Borron, fondateur',

    title: 'Étude de cas ALMA Machines-Outils : de 8 à 91 sur 100',
    description:
      "Un distributeur de machines-outils invisible sur Google. Cinq mois plus tard : 203 pages indexées, 2 060 impressions mensuelles, score SEO 91/100. Le détail complet.",

    hero: {
      kicker: 'Étude de cas · Machine-outil',
      headline: 'Un catalogue de 160 machines. Zéro visible sur Google.',
      sub: "ALMA distribue 28 marques de machines-outils en PACA. En mars 2026, son site comptait sept pages indexées et ne générait aucune demande entrante. Voici ce qu'on a changé, et ce que ça a produit.",
      image: '/images/cas/alma/alma-visuel-1-hero-laptop-iphone.webp',
    },

    kpis: [
      { v: '8 → 91', l: 'score SEO sur 100' },
      { v: '7 → 203', l: 'pages indexées' },
      { v: '2 060', l: 'impressions mensuelles' },
      { v: '224', l: 'clics organiques cumulés' },
    ],

    // ─── PROBLÈME ───────────────────────────────────────────
    probleme: {
      h2: 'Le site existait. Personne ne le trouvait.',
      body: [
        "Jean-Baptiste Borron avait un site. Il était moderne, rapide à l'usage, et il présentait correctement l'activité d'ALMA. Le problème n'était visible par personne : le site était construit en React avec un rendu entièrement côté client. Concrètement, quand le robot de Google arrivait sur une page, il recevait un document HTML pratiquement vide, le contenu n'étant assemblé qu'ensuite par le navigateur.",
        "Résultat : sept pages indexées sur un catalogue de près de 160 machines. Vingt-huit marques distribuées, dont aucune ne disposait de page propre. Dix villes de la région couvertes commercialement, dont aucune n'apparaissait dans une recherche locale.",
        "S'ajoutait un problème d'héritage. Le site précédent, sous WordPress, avait accumulé de l'ancienneté et des positions. Aucune redirection n'avait été mise en place lors de la migration : ce capital se dégradait pendant que les nouvelles URLs restaient inconnues de Google.",
        "L'audit initial du 27 mars 2026 a donné un score de 8 sur 100. C'est un chiffre qu'on voit rarement, et il ne reflétait pas la qualité du travail commercial d'ALMA. Il reflétait une décision technique prise sans considérer le référencement.",
      ],
    },

    // ─── BENTO : CE QU'ON A CONSTRUIT ───────────────────────
    bento: {
      h2: 'Ce qu\u2019on a construit',
      intro:
        "203 pages indexées, ce n'est pas un chiffre gonflé artificiellement. Chaque page correspond à une intention de recherche réelle : une machine précise, une marque, un bassin géographique, un service.",
      items: [
        {
          t: 'Fiches machines',
          v: '~160',
          d: "Chaque machine du catalogue devient une page avec ses spécifications, sa photo réelle, son constructeur et un formulaire de devis contextualisé. Un acheteur qui cherche une référence précise arrive directement dessus.",
          icon: 'Cog',
          span: 'md:col-span-4 md:row-span-2',
        },
        {
          t: 'Pages marques',
          v: '28',
          d: "CMZ, Soraluce, Danobat, Hartford, HACO, Kaltenbach, Tornos, Spaleck. Chaque constructeur a sa page, avec son histoire, sa gamme et les machines disponibles chez ALMA.",
          icon: 'Layers',
          span: 'md:col-span-2 md:row-span-1',
        },
        {
          t: 'Pages villes',
          v: '10',
          d: "Marseille, Toulon, Nice, Aix, Montpellier, Avignon, Nîmes, Gap, Digne, Cannes. Le SEO local capté bassin par bassin.",
          icon: 'MapPin',
          span: 'md:col-span-2 md:row-span-1',
        },
        {
          t: 'Articles de blog',
          v: '10',
          d: "Guides d'achat et contenus techniques répondant aux questions posées avant une décision d'investissement.",
          icon: 'FileText',
          span: 'md:col-span-3 md:row-span-1',
        },
        {
          t: 'Gammes et services',
          v: '9',
          d: "Usinage, chaudronnerie, menuiserie, plus quatre pages services et la page héritage Ernault Services.",
          icon: 'Wrench',
          span: 'md:col-span-3 md:row-span-1',
        },
      ],
      image: '/images/cas/alma/alma-visuel-4-imac-orange.webp',
    },

    // ─── SECTIONS DÉTAILLÉES ────────────────────────────────
    sections: [
      {
        kicker: 'Fondations',
        h2: 'Rendre le site lisible par Google',
        body: [
          "La première décision a été de migrer de React en rendu client vers Next.js 15 avec rendu côté serveur. C'est le changement structurant : Google reçoit désormais le HTML complet de chaque page, sans dépendre de l'exécution du JavaScript.",
          "En parallèle, nous avons mis en place l'ensemble des signaux qui permettent à un moteur de comprendre un site : sitemap dynamique listant 212 URLs, données structurées Organization et LocalBusiness, fils d'Ariane, balises Open Graph, et un fichier llms.txt avec autorisation explicite des crawlers de ChatGPT, Claude et Perplexity.",
          "Les anciennes URLs WordPress ont été cartographiées une par une et redirigées en 301 vers leurs équivalents. Cette étape est celle que les refontes négligent le plus souvent, et celle qui coûte le plus cher quand elle est oubliée.",
        ],
        image: '/images/cas/alma/alma-visuel-3-trio-pages.webp',
        stats: [
          { v: '212', l: 'URLs au sitemap' },
          { v: '301', l: 'redirections WordPress' },
          { v: '0', l: 'image sans attribut alt' },
          { v: '3 422', l: 'liens internes' },
        ],
      },
      {
        kicker: 'Le bug invisible',
        h2: 'Les formulaires n\u2019ont jamais fonctionné',
        body: [
          "En juillet, en travaillant sur un autre sujet, nous avons découvert que les formulaires du site n'atteignaient jamais le serveur. Le proxy `/api` n'était pas déclaré dans la configuration Next.js. Les appels partaient en relatif, recevaient une erreur 404, et le code basculait silencieusement sur un repli par courrier électronique qui ne se déclenchait pas non plus.",
          "Aucun email n'était envoyé. Aucun contact n'était enregistré. Le formulaire Occasion cumulait un second défaut, un double préfixe `/api` qui le rendait inopérant depuis la création du site.",
          "Nous l'écrivons ici parce que c'est le genre de problème qui ne se voit pas dans un rapport de positions. Un site peut très bien remonter dans Google tout en perdant chaque demande qu'il génère. C'est précisément pour cette raison que nous mesurons les demandes entrantes et pas seulement le trafic.",
          "Le proxy a été rétabli, le helper d'appel normalisé, et un message d'erreur explicite remplace désormais tout repli silencieux.",
        ],
      },
      {
        kicker: 'Conversion',
        h2: 'Transformer les visiteurs en contacts identifiés',
        body: [
          "Une fois le site visible et les formulaires opérationnels, la question devient : que fait-on des visiteurs ?",
          "Nous avons mis en place un système de téléchargement conditionné. Les 26 catalogues et plaquettes ne sont accessibles qu'après un formulaire court demandant nom, société, téléphone et adresse professionnelle, avec consentement explicite. Le visiteur ne le remplit qu'une fois : les téléchargements suivants sont directs.",
          "Chaque type de demande alimente une liste distincte dans l'outil d'emailing : contact général, vente d'occasion, recherche d'occasion, brochures, téléchargement de catalogue. Jean-Baptiste reçoit chaque demande par email, avec les attributs société et téléphone déjà renseignés.",
        ],
        image: '/images/cas/alma/alma-visuel-5-brochure-table.webp',
        stats: [
          { v: '26', l: 'catalogues téléchargeables' },
          { v: '5', l: 'listes de contacts séparées' },
          { v: '1', l: 'saisie par visiteur' },
          { v: '24', l: 'marques avec catalogue dédié' },
        ],
      },
    ],

    // ─── RÉSULTATS ──────────────────────────────────────────
    resultats: {
      kicker: 'Août 2026',
      h2: 'Où en est le site aujourd\u2019hui',
      body: [
        "Cinq mois après le début du chantier, le site obtient un score de 91 sur 100. Google Search Console ne relève aucun problème d'exploration sur les quatre-vingt-dix derniers jours.",
        "Le détail par catégorie : contenu 100 sur 100, SEO technique 92, performance 90, balises meta 83. Le trafic est à 74 % français, ce qui correspond au marché visé.",
      ],
      image: '/images/cas/alma/alma-duo-iphone-transparent.png',
      scores: [
        { l: 'Contenu', v: 100 },
        { l: 'SEO technique', v: 92 },
        { l: 'Performance', v: 90 },
        { l: 'Balises meta', v: 83 },
      ],
      details: [
        { l: 'Pages indexées', v: '203' },
        { l: 'Impressions sur 28 jours', v: '2 060' },
        { l: 'Clics cumulés', v: '224' },
        { l: 'Mots sur la page d\u2019accueil', v: '1 870' },
        { l: 'Poids de page', v: '93 Ko' },
        { l: 'Problèmes détectés sur 90 j', v: 'Aucun' },
      ],
    },

    // ─── CE QUI RESTE ───────────────────────────────────────
    restant: {
      h2: 'Ce qui n\u2019est pas terminé',
      intro:
        "Un cas parfait n'existe pas, et le prétendre décrédibiliserait tout le reste. Voici ce que l'audit d'août relève encore, et ce que nous traitons dans l'accompagnement en cours.",
      items: [
        { t: 'Balise title trop courte', d: 'La page d\u2019accueil affiche 37 caractères là où l\u2019optimal se situe entre 40 et 65.' },
        { t: 'Open Graph incomplet', d: 'Deux des quatre balises manquent, ce qui appauvrit les aperçus lors des partages.' },
        { t: 'Favicon absent', d: 'Détail visuel, mais visible dans chaque onglet ouvert.' },
        { t: 'Neuf liens externes seulement', d: 'C\u2019est le facteur qui limite le plus la progression sur les requêtes concurrentielles.' },
        { t: 'Pas de flux RSS', d: 'Le blog gagnerait à être syndiqué pour élargir sa diffusion.' },
        { t: 'Trois schemas sur les cinq utiles', d: 'Product et FAQPage restent à déployer sur les fiches machines.' },
      ],
    },

    // ─── VERBATIM ───────────────────────────────────────────
    verbatim: {
      texte:
        "Chaque machine est un investissement structurant. Notre rôle : trouver la bonne, pour vous.",
      auteur: 'Jean-Baptiste Borron',
      role: 'Fondateur, ALMA Machines-Outils',
    },

    cta: {
      title: 'Votre site est-il dans la situation d\u2019ALMA en mars ?',
      body: "Nous mesurons le nombre de vos pages réellement indexées, le comparons à la taille de votre catalogue, et vous montrons l'écart. Diagnostic gratuit, livré sous une semaine.",
      label: 'Demander mon diagnostic',
      reassurance: 'Sans engagement · Livré sous 7 jours · Aucun accès à vos outils requis',
    },
  },
};

export const CAS_SLUGS = Object.keys(CAS_CLIENTS);
export const getCas = (slug) => CAS_CLIENTS[slug] || null;
