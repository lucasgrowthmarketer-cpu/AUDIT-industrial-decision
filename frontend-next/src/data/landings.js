// =============================================================
// Landing pages SEO — structure landing-page-builder
// Hero / Problem / Solution / Benefits / Proof / Objections /
// Offer / Final CTA
// Audience : problem-aware -> solution-aware
// Pas de prix affiche (lead gen B2B, pas e-commerce)
// =============================================================

export const LANDINGS = {

  'seo-industriel': {
    priority: 1.0,
    kicker: 'Référencement naturel',
    title: 'SEO Industriel : Référencement pour PME et ETI',
    description:
      "Votre catalogue n'apparaît nulle part sur Google alors que vos concurrents captent vos acheteurs. Diagnostic gratuit de votre visibilité réelle.",
    image: '/images/usinage-cnc.webp',

    hero: {
      headline: 'Vos machines existent. Google ne les voit pas.',
      subheadline:
        "Chaque référence de votre catalogue devrait capter des acheteurs. Aujourd'hui, elles sont invisibles et vos concurrents encaissent.",
      cta: 'Voir ce que Google sait de vous',
    },

    citable:
      "Le référencement naturel appliqué à l'industrie se distingue du SEO généraliste sur trois points. Les requêtes cibles ont un faible volume mais une intention d'achat très élevée : un acheteur qui cherche « centre usinage 5 axes occasion » est en phase de décision, pas de découverte. Le cycle de vente s'étale sur six à dix-huit mois et implique plusieurs décideurs, ce qui impose un contenu qui accompagne la réflexion plutôt qu'un tunnel de conversion. Enfin, le catalogue produit constitue le principal gisement de trafic : chaque machine, chaque référence et chaque marque distribuée peut devenir une page indexable. Un distributeur disposant de 600 machines en stock possède 600 portes d'entrée organiques potentielles, généralement enfermées dans un document PDF que Google n'exploite pas.",

    problem: {
      h2: 'Le commercial appelle. Le téléphone, lui, ne sonne pas.',
      body: [
        "Vos commerciaux passent leurs journées à prospecter des entreprises qui ne les attendent pas. Pendant ce temps, des dizaines d'acheteurs cherchent exactement ce que vous vendez, tapent une référence machine dans Google, et tombent sur un concurrent.",
        "Le plus frustrant, c'est que vous avez le stock, l'expertise et les références. Ce qui manque, c'est que Google comprenne ce que vous avez. Votre catalogue vit dans un PDF, vos fiches font trente mots, et votre page d'accueil parle de savoir-faire depuis 1974.",
        "Résultat mesurable : zéro demande entrante, un coût d'acquisition qui repose entièrement sur le temps commercial, et des marchés qui vous échappent sans que vous sachiez lesquels.",
      ],
    },

    solution: {
      h2: 'Transformer votre catalogue en machine à leads',
      body: [
        "Le principe est simple : chaque chose que vous vendez devient une page que Google peut lire, comprendre et proposer à un acheteur.",
      ],
      mechanism: [
        { n: '01', t: 'On mesure ce qui existe', d: "Positions réelles, requêtes captées, et surtout celles que vos concurrents prennent à votre place. Sans ce point de départ, tout le reste est de l'intuition." },
        { n: '02', t: 'On structure le catalogue', d: "Par type de machine, par marque, par usage. Chaque niveau devient une page qui capte un segment de recherches précis." },
        { n: '03', t: 'On écrit le contenu', d: "Fiches machines, pages marques, pages services. C'est l'étape que les agences laissent au client, et celle qui fait la différence." },
        { n: '04', t: 'On mesure les demandes', d: "Le rapport mensuel compte les demandes entrantes et leur origine. Pas les impressions." },
      ],
    },

    benefits: {
      h2: 'Ce que ça change concrètement',
      items: [
        { t: 'Des acheteurs qui vous trouvent seuls', d: "Une requête à 40 recherches mensuelles avec un panier moyen de 80 000 euros vaut plus qu'un million d'impressions publicitaires." },
        { t: 'Un commercial qui rappelle au lieu de démarcher', d: "Rappeler quelqu'un qui a demandé un devis convertit trois à cinq fois mieux qu'un appel à froid." },
        { t: 'Un actif qui vous appartient', d: "Contrairement à la publicité, une page bien positionnée continue de produire quand vous arrêtez de payer." },
        { t: 'Une visibilité mesurable', d: "Positions, trafic, demandes. Chaque chiffre est vérifiable dans vos propres outils, pas dans un tableau de bord opaque." },
      ],
    },

    proof: {
      h2: 'Ce que nous savons de votre marché',
      body: [
        "Nous n'arrivons pas avec des bonnes pratiques génériques. Nous avons cartographié le tissu industriel français code NAF par code NAF, benchmarké les acteurs de votre secteur, et nous suivons les mouvements du marché région par région.",
      ],
      stats: [
        { v: '12 721', l: 'établissements cartographiés sur 4 régions' },
        { v: '30', l: 'fabricants et distributeurs benchmarkés' },
        { v: '8 → 91', l: 'score SEO chez ALMA Machines-Outils' },
        { v: '218', l: 'pages indexées en 6 semaines' },
      ],
      caseStudy: {
        client: 'ALMA Machines-Outils',
        secteur: 'Distribution de machines-outils',
        avant: 'Score SEO 8/100, catalogue non indexable',
        apres: 'Score 91/100, 212 pages publiées dont 203 indexées, formulaires segmentés',
        delai: '5 mois',
      },
    },

    objections: [
      { q: 'Nos volumes de recherche sont trop faibles pour que ça marche', a: "C'est justement ce qui rend le SEO industriel rentable. Quarante recherches mensuelles sur une requête d'achat valent bien plus que dix mille recherches sur un produit à trente euros. Nous ciblons l'intention, pas le volume, et le coût par lead s'en trouve divisé." },
      { q: "Faut-il refaire tout le site d'abord ?", a: "Pas systématiquement. Si le site est en HTTPS, techniquement sain et permet de créer des pages librement, on travaille sur l'existant. En revanche, un catalogue enfermé dans un PDF ou une technologie que Google indexe mal doit être repris : optimiser une page non indexable ne sert à rien." },
      { q: 'Combien de temps avant le premier résultat ?', a: "Les positions bougent entre six et dix semaines après les correctifs techniques. Les demandes entrantes suivent généralement à partir du troisième mois. Sur les requêtes les plus concurrentielles, comptez six à douze mois. Nous le disons avant de commencer, pas après." },
      { q: 'On a déjà été déçus par une agence', a: "C'est le cas de la majorité des entreprises que nous rencontrons. La différence tient à ce qui est mesuré : nous comptons les demandes entrantes et leur origine, pas les impressions ni les positions moyennes. Si les demandes n'augmentent pas, le travail n'a pas fonctionné." },
    ],

    offer: {
      h2: 'Commencez par voir où vous en êtes',
      intro:
        "Avant de parler budget ou refonte, nous vous livrons un diagnostic de votre visibilité réelle. Gratuit, sans engagement, et suffisamment précis pour être utile même si vous ne travaillez jamais avec nous.",
      included: [
        { t: 'Votre score de visibilité sur 100', d: 'Calculé sur sept dimensions : technique, contenu, présence locale, lisibilité IA.' },
        { t: 'Les requêtes que vous ne captez pas', d: 'Avec le nom des concurrents qui les prennent à votre place.' },
        { t: 'Les trois correctifs prioritaires', d: 'Classés par rapport impact sur effort, applicables immédiatement.' },
      ],
      reserved: [
        'Analyse concurrentielle détaillée sur cinq acteurs',
        'Estimation chiffrée du manque à gagner annuel',
        'Plan d\u2019action complet sur douze mois',
      ],
      note: "La version complète est réservée aux entreprises avec lesquelles nous engageons une discussion. Le diagnostic gratuit suffit à savoir si le sujet mérite votre attention.",
    },

    finalCta: {
      title: 'Combien de demandes vous échappent chaque mois ?',
      body: "Nous analysons votre site, vos positions et celles de vos concurrents directs. Vous recevez le diagnostic sous une semaine.",
      label: 'Demander mon diagnostic gratuit',
      reassurance: 'Sans engagement · Livré sous 7 jours · Aucun accès à vos outils requis',
    },

    methode: {
      href: "/expertise/strategie-acquisition",
      titre: "Clusters de contenu et couche de visibilité",
      desc: "Le détail de notre méthode de construction sémantique : clusters par intention, roadmap éditoriale, indicateurs de suivi.",
    },

    related: ['audit-seo-industriel', 'referencement-ia', 'generation-leads-industrie'],
  },

  'referencement-ia': {
    priority: 1.0,
    kicker: 'Generative Engine Optimization',
    title: "Référencement IA (GEO) pour l'Industrie",
    description:
      "Vos acheteurs interrogent ChatGPT avant Google. Si l'IA ne vous cite pas, vous n'existez pas dans la conversation. Test de visibilité gratuit.",
    image: '/images/data-analytics.webp',

    hero: {
      headline: "Votre acheteur demande à ChatGPT. Qui lui répond ?",
      subheadline:
        "L'IA cite trois ou quatre entreprises. Si vous n'en faites pas partie, vous n'êtes pas dans la conversation.",
      cta: 'Tester ma visibilité IA',
    },

    citable:
      "Le référencement IA, ou GEO pour Generative Engine Optimization, consiste à rendre un site citable par les moteurs de recherche génératifs. Contrairement au SEO classique qui vise une position dans une liste de liens, le GEO vise à être sélectionné comme source dans une réponse rédigée par une intelligence artificielle. Les leviers principaux sont un fichier llms.txt décrivant l'entreprise et ses services, des données structurées JSON-LD complètes, des passages factuels auto-suffisants de 130 à 170 mots extractibles sans contexte, et des mentions de la marque sur des sources tierces autoritaires. Pour une entreprise industrielle française, le GEO représente en 2026 un avantage compétitif accessible : la grande majorité des sites du secteur n'ont ni llms.txt, ni données structurées complètes, ni contenu formulé en réponse à des questions précises.",

    problem: {
      h2: 'Dix liens sont devenus une réponse',
      body: [
        "Un responsable production qui cherche un fournisseur ne parcourt plus la première page de Google. Il demande à ChatGPT ou Perplexity qui consulter en France, et obtient une réponse rédigée citant trois ou quatre entreprises.",
        "Ces trois ou quatre entreprises recevront les demandes. Les autres n'apparaissent nulle part, sans même savoir qu'elles ont été écartées. Il n'y a pas de deuxième page dans une réponse d'IA.",
        "Le problème n'est pas la qualité de votre offre. C'est que votre site n'a rien qu'une IA puisse lire, comprendre et citer.",
      ],
    },

    solution: {
      h2: "Devenir une source que l'IA peut citer",
      body: [
        "Une IA ne cite pas une entreprise parce qu'elle est bonne. Elle la cite parce que son contenu est structuré, factuel et extractible. Ça s'organise.",
      ],
      mechanism: [
        { n: '01', t: 'On rend le site lisible par les crawlers IA', d: "Fichier llms.txt, autorisation explicite de GPTBot, ClaudeBot, PerplexityBot et une douzaine d'autres." },
        { n: '02', t: 'On structure les données', d: 'Organization, Service, Product, FAQPage. C\u2019est le format que les moteurs génératifs lisent en priorité pour comprendre une entreprise.' },
        { n: '03', t: 'On écrit des passages citables', d: 'Des blocs de 130 à 170 mots formulés comme des réponses complètes, extractibles sans leur contexte.' },
        { n: '04', t: 'On mesure les citations', d: 'Chaque mois, nous interrogeons les principaux moteurs sur vos requêtes et relevons si vous êtes cité, où et comment.' },
      ],
    },

    benefits: {
      h2: 'Pourquoi maintenant, et pas dans deux ans',
      items: [
        { t: 'Le terrain est encore libre', d: "Sur les 56 sites du secteur que nous avons audités en août 2026, quatre seulement disposent d'un fichier llms.txt et trois autorisent explicitement les crawlers IA." },
        { t: 'Une position difficile à déloger', d: "Comme pour le SEO en 2003, les premiers à structurer leur contenu prennent une place que les suivants peinent à reprendre." },
        { t: 'Un effet cumulatif avec le SEO', d: "Les données structurées et les passages citables améliorent aussi le référencement classique. Aucun effort n'est perdu." },
        { t: 'Une fenêtre de dix-huit mois', d: "Quand les grandes agences auront intégré le GEO à leurs offres standard, l'avantage aura disparu." },
      ],
    },

    proof: {
      h2: 'Nous appliquons notre propre méthode',
      body: [
        "Le site que vous lisez dispose d'un fichier llms.txt de 74 lignes, d'un schema Organization à plus de soixante propriétés validé sans erreur par schema.org, et d'un passage citable sur chaque page de service.",
        "Ce n'est pas une démonstration commerciale : c'est exactement ce que nous déployons chez nos clients. Vous pouvez le vérifier en consultant notre llms.txt, ou en demandant à ChatGPT quelle agence web intervient auprès des industriels français.",
      ],
      stats: [
        { v: '3/56', l: 'sites du secteur autorisant les crawlers IA' },
        { v: '4/56', l: 'sites avec un fichier llms.txt' },
        { v: '74', l: 'lignes dans notre propre llms.txt' },
        { v: '0', l: 'erreur au validateur schema.org' },
      ],
    },

    objections: [
      { q: "Est-ce que ce n'est pas juste du marketing ?", a: "Chaque mécanisme est vérifiable. Un fichier llms.txt est lu ou non par un crawler, cela se constate dans les logs serveur. Une donnée structurée est valide ou non, cela se teste sur le validateur schema.org. Une citation dans ChatGPT s'observe directement. Rien dans cette méthode n'est déclaratif." },
      { q: 'Le GEO remplace-t-il le SEO ?', a: "Non, il s'y ajoute. Les deux partagent la même base : contenu de qualité, structure technique propre, données structurées. Le GEO ajoute une couche de formulation par-dessus. Un site sans SEO ne sera pas cité par les IA non plus." },
      { q: 'Combien de temps avant les premières citations ?', a: "Entre deux et trois mois généralement. Les crawlers IA repassent régulièrement, mais la construction de l'autorité prend plus de temps que l'indexation Google classique." },
      { q: 'Nos clients utilisent-ils vraiment ces outils ?', a: "La question mérite d'être posée pour votre marché précis. C'est pourquoi le test que nous proposons commence par vérifier ce que les IA répondent aujourd'hui sur vos requêtes : si personne de votre secteur n'apparaît, l'opportunité est encore plus nette." },
    ],

    offer: {
      h2: 'Testons ce que les IA disent de vous',
      intro:
        "Nous interrogeons ChatGPT, Perplexity et les résumés IA de Google sur les requêtes de votre marché, et nous vous montrons les réponses telles quelles.",
      included: [
        { t: 'Les réponses brutes des trois moteurs', d: "Sur cinq requêtes correspondant à votre activité, captures à l'appui." },
        { t: 'Qui est cité à votre place', d: 'Le nom des entreprises que les IA recommandent aujourd\u2019hui sur votre marché.' },
        { t: 'Votre score de lisibilité IA', d: 'llms.txt, données structurées, citabilité du contenu, mentions de marque.' },
      ],
      reserved: [
        'Panel étendu à vingt requêtes avec suivi mensuel',
        'Analyse des sources citées et de leur structure',
        'Plan de mise en conformité GEO détaillé',
      ],
      note: "Le test gratuit suffit à constater si vous existez ou non pour les moteurs génératifs. Le reste relève d'une mission.",
    },

    finalCta: {
      title: 'Que répond ChatGPT quand on cherche votre métier ?',
      body: "Nous posons la question aux trois principaux moteurs et vous montrons les réponses. Vous saurez en une semaine si vous êtes dans la conversation.",
      label: 'Demander le test gratuit',
      reassurance: 'Sans engagement · Livré sous 7 jours · Captures et sources fournies',
    },

    methode: {
      href: "/expertise/audit-drs",
      titre: "Méthodologie DRS : la grille en 7 dimensions",
      desc: "Comment nous notons un site, dont la dimension lisibilité IA : critères, pondération, format du rapport.",
    },

    related: ['seo-industriel', 'audit-seo-industriel', 'creation-site-internet-industriel'],
  },

  'audit-seo-industriel': {
    priority: 1.0,
    kicker: 'Diagnostic',
    title: 'Audit SEO de Site Industriel',
    description:
      "Un diagnostic chiffré de votre visibilité, pas une check-list générique. Score sur 100, comparaison concurrentielle, priorités d'action.",
    image: '/images/audit-digital.webp',

    hero: {
      headline: 'Vous ne savez pas ce que vous perdez. Nous, si.',
      subheadline:
        "Un diagnostic chiffré de votre visibilité : ce que vous captez, ce qui vous échappe, et par où commencer.",
      cta: 'Demander mon diagnostic',
    },

    citable:
      "Un audit SEO de site industriel évalue la visibilité digitale d'une entreprise selon sept dimensions : architecture technique, SEO technique, qualité du contenu et signaux E-E-A-T, présence digitale locale, visibilité concurrentielle, lisibilité par les moteurs IA et performance. Chaque dimension reçoit un score sur 100, pondéré pour produire un score global. L'audit compare ensuite ces résultats à ceux des concurrents directs identifiés sur les mêmes requêtes commerciales, puis quantifie le manque à gagner annuel à partir des volumes de recherche non captés, du taux de conversion sectoriel et du panier moyen. Le livrable comprend le scoring détaillé, la liste des constats classés par sévérité avec leur source vérifiable, la cartographie des opportunités et un plan d'action priorisé par rapport impact sur effort.",

    problem: {
      h2: 'Les audits que vous avez reçus ne servaient à rien',
      body: [
        "Ajoutez des balises. Écrivez du contenu. Obtenez des backlinks. Vous avez déjà lu ces recommandations, et elles ne vous ont dit ni où vous perdez de l'argent, ni combien, ni par quoi commencer.",
        "Un audit générique se reconnaît à ce qu'il pourrait être envoyé à n'importe quelle entreprise en changeant le nom. Il liste des bonnes pratiques universelles au lieu de mesurer votre situation.",
        "Le résultat est prévisible : le document finit dans un dossier, rien n'est appliqué, et le sujet revient six mois plus tard au même point.",
      ],
    },

    solution: {
      h2: 'Un diagnostic dont chaque constat est vérifiable',
      body: [
        "Notre principe est simple : vous devez pouvoir contrôler chaque affirmation sans nous croire sur parole. Si nous écrivons que votre catalogue n'est pas indexable, nous indiquons l'URL et la manipulation qui permet de le constater.",
      ],
      mechanism: [
        { n: '01', t: 'Sept dimensions notées sur 100', d: 'Technique, SEO, contenu et E-E-A-T, présence locale, visibilité concurrentielle, lisibilité IA, performance.' },
        { n: '02', t: 'Comparaison à vos concurrents réels', d: "Pas des concurrents théoriques : ceux qui apparaissent devant vous sur vos propres requêtes commerciales." },
        { n: '03', t: 'Chiffrage du manque à gagner', d: 'À partir des volumes non captés, du taux de conversion sectoriel et de votre panier moyen.' },
        { n: '04', t: 'Priorisation impact sur effort', d: 'Ce qui rapporte le plus pour le moins de travail arrive en premier. Le reste attend.' },
      ],
    },

    benefits: {
      h2: 'Ce que vous en retirez',
      items: [
        { t: 'Une décision éclairée', d: "Vous saurez si le sujet mérite un budget, et lequel. Ou s'il ne le mérite pas : cela arrive et nous le disons." },
        { t: 'Un argumentaire chiffré en interne', d: "Un score, un manque à gagner et un benchmark concurrentiel convainquent un comité de direction mieux qu'une intuition." },
        { t: 'Des correctifs applicables seul', d: "Certains constats se corrigent en interne sans prestataire. Nous les signalons plutôt que de les garder pour une facture." },
        { t: 'Un point de départ mesurable', d: "Le score initial permet de constater la progression ensuite. Sans lui, personne ne peut prouver quoi que ce soit." },
      ],
    },

    proof: {
      h2: 'Un exemple de ce que ça donne',
      body: [
        "Chez ALMA Machines-Outils, l'audit initial relevait un score de 8 sur 100 : catalogue non indexable, absence de données structurées, aucune page positionnée sur les marques distribuées.",
        "Cinq mois après le début du chantier, le score atteignait 91 sur 100. Le sitemap déclare 212 URLs, dont 203 sont indexées par Google. Le site est en ligne et ces chiffres sont vérifiables.",
      ],
      stats: [
        { v: '7', l: 'dimensions analysées' },
        { v: '40', l: 'pages dans l\u2019audit complet' },
        { v: '30', l: 'OEM de référence pour le benchmark' },
        { v: '7 j', l: 'pour le diagnostic gratuit' },
      ],
      caseStudy: {
        client: 'ALMA Machines-Outils',
        secteur: 'Distribution de machines-outils',
        avant: 'Score 8/100 : catalogue invisible, zéro donnée structurée',
        apres: 'Score 91/100, 212 pages publiées dont 203 indexées, demandes entrantes qualifiées',
        delai: '5 mois',
      },
    },

    objections: [
      { q: "Pourquoi le diagnostic est-il gratuit ?", a: "Parce que c'est le meilleur moyen de montrer notre niveau d'analyse plutôt que de le promettre. Certaines entreprises corrigent seules ce que nous relevons et ne nous rappellent jamais. C'est un risque que nous acceptons : celles qui reviennent savent exactement ce qu'elles achètent." },
      { q: 'Avez-vous besoin des accès à nos outils ?', a: "Non pour le diagnostic gratuit : nous travaillons uniquement sur des données publiques et vérifiables. Pour l'audit complet, un accès en lecture à Analytics et Search Console améliore la précision de l'estimation, sans être bloquant." },
      { q: 'Combien de temps cela prend-il ?', a: "Une semaine pour le diagnostic gratuit. Trois semaines pour l'audit complet incluant l'analyse concurrentielle détaillée, le chiffrage du manque à gagner et le plan sur douze mois." },
      { q: "Et si l'audit conclut que tout va bien ?", a: "Nous vous le dirons. Cela arrive rarement, mais quand un site est déjà bien construit, nous préférons le signaler et proposer un accompagnement éditorial plutôt que de vendre une refonte inutile." },
    ],

    offer: {
      h2: 'Ce que contient le diagnostic gratuit',
      intro:
        "Une version condensée de notre audit complet, suffisamment précise pour être utile même si vous ne travaillez jamais avec nous.",
      included: [
        { t: 'Votre score global sur 100', d: 'Avec le détail par dimension et la comparaison à la moyenne de votre secteur.' },
        { t: 'Les cinq constats les plus coûteux', d: 'Classés par sévérité, chacun avec sa source vérifiable.' },
        { t: 'Les concurrents qui captent vos requêtes', d: 'Trois acteurs nommés, avec les requêtes concernées.' },
      ],
      reserved: [
        'Scoring détaillé des sept dimensions avec sous-critères',
        'Benchmark complet face à cinq concurrents',
        'Estimation chiffrée du manque à gagner annuel',
        'Plan d\u2019action priorisé sur douze mois',
      ],
      note: "L'audit complet en quarante pages est facturé, et déduit si vous nous confiez ensuite le projet. Nous ne facturons pas deux fois le même travail d'analyse.",
    },

    finalCta: {
      title: 'Recevez votre diagnostic sous une semaine',
      body: "Donnez-nous l'adresse de votre site. Nous vous renvoyons un document chiffré avec votre score, vos constats prioritaires et les concurrents qui vous devancent.",
      label: 'Demander mon diagnostic gratuit',
      reassurance: 'Sans engagement · Livré sous 7 jours · Aucun accès à vos outils requis',
    },

    methode: {
      href: "/expertise/audit-drs",
      titre: "Méthodologie DRS : la grille en 7 dimensions",
      desc: "Le détail des sept dimensions, leur pondération dans le score global et la structure du rapport livré.",
    },

    related: ['seo-industriel', 'referencement-ia', 'refonte-site-industriel'],
  },

  'creation-site-internet-industriel': {
    priority: 1.0,
    kicker: 'Conception',
    title: 'Création de Site Internet Industriel',
    description:
      "Votre site est une plaquette en ligne. Il devrait être votre meilleur commercial. Catalogue indexable, fiches machines, formulaires qualifiants.",
    image: '/images/infrastructure-tech.webp',

    hero: {
      headline: 'Votre site est une plaquette. Pas un commercial.',
      subheadline:
        "Il présente votre entreprise à ceux qui la connaissent déjà. Il ne va chercher personne.",
      cta: 'Voir ce que votre site pourrait produire',
    },

    citable:
      "La création d'un site internet industriel répond à des contraintes propres au B2B technique. Le catalogue produit doit être indexable page par page plutôt qu'enfermé dans un PDF : chaque machine, chaque référence et chaque marque distribuée constitue une page susceptible de capter des recherches. Le parcours doit accompagner un cycle de décision de six à dix-huit mois impliquant plusieurs interlocuteurs aux besoins différents : le dirigeant cherche des références et de la solidité, le responsable production des spécifications techniques, l'acheteur des conditions et des délais. Techniquement, le rendu côté serveur est nécessaire pour que Google indexe un catalogue volumineux, et les données structurées de type Product permettent d'apparaître dans les résultats enrichis. Un site industriel bien construit compte plusieurs centaines de pages indexables, pas une dizaine.",

    problem: {
      h2: 'Un beau site qui ne rapporte rien',
      body: [
        "Vous avez investi dans un site. Il est propre, les photos sont belles, votre logo est bien placé. Et il ne génère aucune demande.",
        "La raison est structurelle : il présente votre entreprise au lieu de répondre aux questions de vos acheteurs. Votre catalogue est un PDF que Google n'exploite pas. Vos fiches machines contiennent une marque, un modèle et un prix. Vos formulaires demandent un nom et un message libre.",
        "Pendant ce temps, un acheteur qui cherche une référence précise trouve un concurrent dont la fiche fait quatre cents mots et détaille chaque spécification.",
      ],
    },

    solution: {
      h2: 'Un site construit autour de ce que cherchent vos acheteurs',
      body: [
        "Nous ne partons pas de votre organigramme mais des requêtes réelles de votre marché. Chaque chose que vous vendez devient une page. Chaque question posée avant l'achat devient une réponse.",
      ],
      mechanism: [
        { n: '01', t: 'Audit et architecture', d: "Deux semaines pour identifier ce qui doit être conservé, redirigé, et comment structurer le catalogue selon les recherches réelles." },
        { n: '02', t: 'Développement et migration', d: 'Quatre semaines. Site Next.js avec rendu serveur, catalogue importé, fiches générées. Vous suivez sur une préproduction.' },
        { n: '03', t: 'Contenu et mise en ligne', d: 'Deux semaines. Pages marques, pages services, fiches types rédigées. Bascule avec plan de redirection complet.' },
        { n: '04', t: 'Accompagnement', d: 'Suivi mensuel des positions et des demandes entrantes. Le code vous appartient, sur votre dépôt GitHub.' },
      ],
    },

    benefits: {
      h2: 'Ce que contient un site que nous livrons',
      items: [
        { t: 'Un catalogue indexable page par page', d: "Chaque machine devient une page avec spécifications, photos, disponibilité et formulaire. Jusqu'à 600 fiches sur nos plus gros projets." },
        { t: 'Une page par marque distribuée', d: "Un acheteur qui cherche « distributeur DN Solutions France » doit vous trouver. Pas votre concurrent." },
        { t: 'Des formulaires qui qualifient', d: 'Devis machine, demande SAV, inscription formation : trois formulaires distincts, trois niveaux de qualification.' },
        { t: 'Des preuves vérifiables', d: "Études de cas chiffrées, bios de l'équipe, certifications. Ce que Google appelle E-E-A-T et ce qui rassure un acheteur." },
        { t: 'Un socle technique propre', d: 'Rendu serveur, HTTPS, sitemap dynamique, données structurées, llms.txt. Indexable dès le premier jour.' },
      ],
    },

    proof: {
      h2: 'Le cas ALMA Machines-Outils',
      body: [
        "Distributeur de machines-outils, site refait intégralement. Le catalogue vivait dans des PDF, le score de visibilité était de 8 sur 100, et le site ne générait aucune demande entrante.",
        "Cinq mois plus tard : score de 91 sur 100, 212 pages publiées dont 203 indexées, système de téléchargement de documentation technique avec qualification des demandeurs, et formulaires segmentés par type de besoin.",
      ],
      stats: [
        { v: '2 mois', l: 'de la validation à la mise en ligne' },
        { v: '218', l: 'pages indexées en 6 semaines' },
        { v: '8 → 91', l: 'score de visibilité' },
        { v: '600+', l: 'fiches machines sur nos plus gros projets' },
      ],
      caseStudy: {
        client: 'ALMA Machines-Outils',
        secteur: 'Distribution de machines-outils',
        avant: 'Catalogue en PDF, score 8/100, zéro demande entrante',
        apres: '212 pages publiées dont 203 indexées, score 91/100, formulaires qualifiants',
        delai: '5 mois',
      },
    },

    objections: [
      { q: 'Que devient notre référencement pendant la refonte ?', a: "Nous établissons un plan de redirection complet avant la bascule : chaque URL indexée pointe vers son équivalent. C'est l'étape que les refontes ratées négligent, et qui provoque des pertes de trafic de 40 à 70 %. Avec un plan correct, les positions se maintiennent." },
      { q: 'Pourrons-nous modifier le contenu nous-mêmes ?', a: "Oui pour les fiches machines et les pages de contenu, sans toucher au code. Pour les modifications de structure, il faut un développeur, mais le code étant livré sur votre dépôt, n'importe quel prestataire peut reprendre. Vous n'êtes pas prisonnier." },
      { q: 'Pourquoi pas WordPress ?', a: "Parce que les performances se dégradent au-delà de quelques centaines de références, et que l'indexation d'un gros catalogue devient problématique. Nous utilisons Next.js avec rendu serveur, qui garantit que Google voit l'intégralité du catalogue." },
      { q: 'Deux mois, est-ce réaliste ?', a: "C'est notre délai standard quand le contenu source est disponible. Le facteur limitant n'est jamais le développement mais la fourniture des données : photos, spécifications, textes existants. Nous cadrons ce point dès la première réunion." },
    ],

    offer: {
      h2: 'Avant de parler refonte, mesurons',
      intro:
        "Nous regardons votre site actuel et votre catalogue, puis nous vous disons ce qui est indexable aujourd'hui, ce qui ne l'est pas, et ce que ça représente.",
      included: [
        { t: 'Le nombre de vos pages réellement indexées', d: 'Comparé au nombre de références de votre catalogue. L\u2019écart est souvent parlant.' },
        { t: 'Les requêtes produits que vous ne captez pas', d: 'Avec les concurrents qui apparaissent à votre place.' },
        { t: 'Un avis franc sur la nécessité d\u2019une refonte', d: 'Si votre site peut être optimisé sans être refait, nous vous le dirons.' },
      ],
      reserved: [
        'Architecture de site recommandée avec arborescence complète',
        'Maquettes des pages clés',
        'Cahier des charges technique et chiffrage détaillé',
      ],
      note: "L'architecture et les maquettes font partie de la phase de cadrage, engagée une fois le projet lancé.",
    },

    finalCta: {
      title: 'Combien de vos machines sont visibles sur Google ?',
      body: "Nous comparons votre catalogue à ce que Google en connaît. L'écart vous dira si le sujet mérite un budget.",
      label: 'Demander mon diagnostic gratuit',
      reassurance: 'Sans engagement · Livré sous 7 jours · Avis franc sur la nécessité d\u2019une refonte',
    },

    methode: {
      href: "/expertise/site-decisionnel",
      titre: "Framework de site décisionnel",
      desc: "Notre architecture type : scénarios par acheteur, portes d'entrée contextuelles, blocs de preuve, visibilité du processus.",
    },

    related: ['refonte-site-industriel', 'seo-industriel', 'audit-seo-industriel'],
  },

  'refonte-site-industriel': {
    priority: 0.9,
    kicker: 'Refonte',
    title: 'Refonte de Site Web Industriel',
    description:
      "Refondre sans perdre son référencement. Plan de redirection, migration du catalogue, conservation des positions acquises.",
    image: '/images/atelier-industriel.webp',

    hero: {
      headline: 'Une refonte ratée coûte un an de visibilité',
      subheadline:
        "40 à 70 % du trafic organique disparaît quand la migration est mal préparée. Ça se prévient.",
      cta: 'Sécuriser ma refonte',
    },

    citable:
      "La refonte d'un site industriel comporte un risque spécifique : la perte du référencement acquis. Lorsque les URLs changent sans redirection permanente, Google désindexe les anciennes pages et doit réapprendre le nouveau site depuis zéro. Les observations sectorielles font état de pertes de trafic organique de 40 à 70 % sur les refontes non préparées, avec un délai de récupération de six à douze mois. La méthode de prévention comporte quatre étapes : inventaire complet des URLs indexées avant la refonte, cartographie de chaque ancienne URL vers son équivalent, mise en place de redirections 301 permanentes, puis surveillance des erreurs d'exploration dans la Search Console pendant les huit semaines suivant la bascule. Les pages qui génèrent du trafic doivent être conservées ou remplacées par un contenu au moins équivalent.",

    problem: {
      h2: 'Le site est plus beau. Le téléphone a cessé de sonner.',
      body: [
        "C'est le scénario que nous voyons le plus souvent. Une refonte livrée, un design moderne, une direction satisfaite. Puis trois mois plus tard, le constat : le trafic a chuté et les demandes entrantes avec.",
        "Le coupable n'est presque jamais le design. Ce sont les URLs qui ont changé sans redirection, les pages qui se positionnaient et qui ont été supprimées parce qu'elles n'étaient pas belles, et le contenu réécrit en plus court pour faire propre.",
        "Personne ne s'en aperçoit avant plusieurs mois, parce que personne n'avait relevé les positions avant la bascule.",
      ],
    },

    solution: {
      h2: 'Mesurer avant, migrer avec méthode, vérifier après',
      body: [
        "Une refonte réussie ne se juge pas au rendu visuel mais à la conservation de ce qui fonctionnait. Cela demande un protocole, pas de la chance.",
      ],
      mechanism: [
        { n: '01', t: 'Inventaire avant bascule', d: "Toutes les URLs indexées, leur trafic, leurs positions, leurs backlinks. Ce relevé sert de référence et de garde-fou." },
        { n: '02', t: 'Cartographie des redirections', d: 'Chaque ancienne URL vers sa destination. Les pages qui génèrent du trafic sont conservées et enrichies, pas remplacées.' },
        { n: '03', t: 'Bascule contrôlée', d: 'Redirections 301 en place et testées, nouveau sitemap soumis, anciennes URLs vérifiées une à une.' },
        { n: '04', t: 'Surveillance huit semaines', d: 'Erreurs d\u2019exploration suivies quotidiennement, comparaison hebdomadaire au relevé initial.' },
      ],
    },

    benefits: {
      h2: 'Ce que vous conservez',
      items: [
        { t: 'Vos positions acquises', d: "Les pages qui se classaient continuent de se classer. La fluctuation dure deux à trois semaines, pas six mois." },
        { t: "L'autorité de vos backlinks", d: 'Les redirections 301 transmettent la valeur des liens entrants. Sans elles, des années de liens partent en fumée.' },
        { t: 'Le trafic de vos anciennes pages', d: "Une page à 200 visites mensuelles vaut plus qu'une page esthétique à zéro visite. Nous les gardons." },
        { t: 'La preuve de ce qui a marché', d: "Le relevé initial permet de comparer objectivement avant et après. Aucune place pour l'approximation." },
      ],
    },

    proof: {
      h2: 'Quand nous déconseillons la refonte',
      body: [
        "La refonte s'impose si le site n'est pas en HTTPS, si le catalogue vit dans un PDF, si l'encodage des caractères est cassé, ou si la technologie empêche Google d'indexer le contenu. Dans ces cas, aucune optimisation ne suffit.",
        "Elle ne s'impose pas si le site est techniquement sain et que le problème vient du contenu. Nous le disons alors, et nous proposons un accompagnement éditorial qui coûte trois fois moins cher pour un résultat souvent supérieur. Cela nous a déjà fait perdre des projets. Nous continuons.",
      ],
      stats: [
        { v: '40-70 %', l: 'de trafic perdu sur une refonte non préparée' },
        { v: '6-12 mois', l: 'pour récupérer après une migration ratée' },
        { v: '8 sem.', l: 'de surveillance post-bascule' },
        { v: '100 %', l: 'des URLs indexées cartographiées' },
      ],
    },

    objections: [
      { q: 'Notre prestataire actuel dit que ce risque est exagéré', a: "Demandez-lui son plan de redirection et son relevé de positions avant bascule. Si ces deux documents existent, le risque est effectivement maîtrisé. S'ils n'existent pas, la question mérite d'être posée avant la mise en ligne, pas après." },
      { q: 'Peut-on garder le design actuel ?', a: "Oui, si vous en êtes satisfait. Nous refondons alors uniquement la structure technique et l'architecture de contenu. C'est moins coûteux, et cela évite de déstabiliser les visiteurs qui vous connaissent." },
      { q: 'Que deviennent nos URLs référencées sur des annuaires ?', a: "Elles continuent de fonctionner grâce aux redirections 301, qui transmettent aussi l'autorité des liens. Nous fournissons en parallèle la liste des annuaires à mettre à jour pour les cas où la redirection ne suffit pas." },
      { q: 'Combien de temps dure une refonte ?', a: "Deux mois pour un site avec catalogue. L'inventaire et la cartographie des redirections représentent environ une semaine de ce délai : c'est le meilleur investissement du projet." },
    ],

    offer: {
      h2: 'Avant de refondre, faisons le relevé',
      intro:
        "Nous mesurons ce que votre site actuel produit, pour que vous sachiez exactement ce qu'il ne faut pas perdre.",
      included: [
        { t: 'Vos pages qui génèrent réellement du trafic', d: 'La liste de celles à conserver absolument dans la refonte.' },
        { t: 'Vos positions actuelles sur vos requêtes clés', d: 'Le point de comparaison indispensable pour juger la migration ensuite.' },
        { t: 'Les risques identifiés sur votre projet', d: 'Ce qui, dans le cahier des charges envisagé, menace votre référencement.' },
      ],
      reserved: [
        'Inventaire exhaustif des URLs avec trafic et backlinks',
        'Plan de redirection complet, URL par URL',
        'Protocole de surveillance post-bascule sur huit semaines',
      ],
      note: "Le plan de redirection détaillé fait partie de la mission de migration. Le relevé gratuit suffit à identifier les risques principaux.",
    },

    finalCta: {
      title: 'Ne perdez pas ce que vous avez mis des années à construire',
      body: "Nous relevons vos positions et votre trafic actuels, et identifions les pages à protéger. C'est la base de toute refonte réussie.",
      label: 'Demander mon relevé gratuit',
      reassurance: 'Sans engagement · Livré sous 7 jours · Utile même avec un autre prestataire',
    },

    methode: {
      href: "/expertise/site-decisionnel",
      titre: "Framework de site décisionnel",
      desc: "L'architecture que nous appliquons en refonte : scénarios, portes d'entrée, blocs de preuve.",
    },

    related: ['creation-site-internet-industriel', 'audit-seo-industriel', 'seo-industriel'],
  },

  'generation-leads-industrie': {
    priority: 0.9,
    kicker: 'Acquisition',
    title: 'Génération de Leads B2B Industriels',
    description:
      "Vos commerciaux démarchent des inconnus. Ils devraient rappeler des gens qui ont demandé un devis. Diagnostic gratuit de vos requêtes non captées.",
    image: '/images/strategie-acquisition.webp',

    hero: {
      headline: 'Vos commerciaux démarchent. Ils devraient rappeler.',
      subheadline:
        "Rappeler quelqu'un qui a demandé un devis convertit trois à cinq fois mieux qu'un appel à froid.",
      cta: 'Voir les demandes qui vous échappent',
    },

    citable:
      "La génération de leads B2B industriels repose sur trois leviers complémentaires. Le premier est la captation des requêtes commerciales : un acheteur qui cherche une machine ou un service précis doit trouver l'entreprise, ce qui suppose des pages produits indexables et un contenu répondant à ses questions. Le deuxième est la visibilité locale, déterminante pour les entreprises multi-sites : chaque implantation doit disposer d'une fiche Google Business optimisée, car de nombreuses recherches industrielles incluent une dimension géographique. Le troisième est le timing : dans un secteur où 51 772 défaillances industrielles ont été recensées en France en 2025, chaque procédure redistribue des parts de marché et des équipements. Identifier ces mouvements permet d'intervenir au moment où un besoin apparaît plutôt qu'au hasard d'un fichier de prospection.",

    problem: {
      h2: 'Le coût réel de la prospection à froid',
      body: [
        "Un commercial passe entre soixante et quatre-vingts appels pour obtenir un rendez-vous. Sur ces rendez-vous, une minorité aboutit. Le reste du temps est consommé à convaincre des gens qui n'avaient rien demandé.",
        "Pendant ces mêmes journées, des acheteurs de votre marché cherchent activement ce que vous vendez. Ils tapent une référence, comparent trois fournisseurs, demandent un devis. Sans vous, parce que vous n'apparaissez pas.",
        "Vous payez donc deux fois : le temps commercial dépensé sur des prospects froids, et les affaires perdues sur des prospects chauds que vous n'avez jamais vus.",
      ],
    },

    solution: {
      h2: 'Faire venir au lieu d\u2019aller chercher',
      body: [
        "L'objectif n'est pas de remplacer vos commerciaux mais de changer la nature de leurs appels. Un rendez-vous entrant se prépare, se qualifie et se conclut différemment d'un appel imposé.",
      ],
      mechanism: [
        { n: '01', t: 'Capter les requêtes d\u2019achat', d: 'Pages produits, pages marques, pages services. Chaque recherche commerciale de votre marché trouve une réponse chez vous.' },
        { n: '02', t: 'Être visible localement', d: "Une fiche Google Business par implantation, avec collecte d'avis. Déterminant quand vous avez plusieurs agences." },
        { n: '03', t: 'Qualifier dès le formulaire', d: 'Trois formulaires distincts selon le besoin. Le commercial sait de quoi il s\u2019agit avant de décrocher.' },
        { n: '04', t: 'Jouer le timing du marché', d: 'Nous suivons les défaillances industrielles par région. Chaque procédure libère des marchés et des équipements.' },
      ],
    },

    benefits: {
      h2: 'Ce que ça change pour vos équipes',
      items: [
        { t: 'Un taux de conversion multiplié', d: 'Un prospect entrant a déjà identifié son besoin et vous a présélectionné. Le travail commercial commence beaucoup plus loin.' },
        { t: 'Des commerciaux qui restent', d: "La prospection à froid use. Traiter des demandes entrantes améliore nettement les conditions de travail et la rétention." },
        { t: 'Un pipeline prévisible', d: 'Le volume de demandes entrantes se mesure et se projette. Les prévisions cessent de reposer sur le moral des équipes.' },
        { t: 'Un coût par lead décroissant', d: "Une page positionnée continue de produire sans coût marginal. L'inverse exact d'un budget publicitaire." },
      ],
    },

    proof: {
      h2: "Le levier que personne n'exploite : le timing",
      body: [
        "Nous suivons les défaillances industrielles région par région. En 2025, 51 772 procédures ont été recensées en France, en hausse de 9,5 % sur un an, quatrième année consécutive de progression.",
        "Chaque défaillance signifie trois choses : des machines qui reviennent sur le marché de l'occasion, un carnet de commandes qui se redistribue, et des clients qui doivent trouver un nouveau fournisseur en urgence. Les entreprises visibles à ce moment-là captent ces mouvements. Cette donnée ne figure dans aucun outil SEO du marché.",
      ],
      stats: [
        { v: '51 772', l: 'défaillances industrielles en 2025' },
        { v: '+9,5 %', l: 'sur un an, 4e année de hausse' },
        { v: '13', l: 'régions suivies mensuellement' },
        { v: '12 721', l: 'établissements cartographiés' },
      ],
    },

    objections: [
      { q: 'Combien de leads pouvons-nous espérer par mois ?', a: "Cela dépend de votre marché et de votre point de départ. Sur un distributeur régional partant de zéro, nous observons les premières demandes au troisième mois, puis une montée vers cinq à quinze demandes qualifiées mensuelles à partir du sixième. Nous refusons d'annoncer un chiffre avant l'audit : ce serait inventé." },
      { q: 'Faut-il faire de la publicité payante ?', a: "Rarement, et jamais en premier. Sur des requêtes industrielles à faible volume, le SEO coûte moins cher à moyen terme et produit un actif durable. La publicité sert à tester un marché ou accompagner un lancement, pas comme canal principal." },
      { q: "Qu'appelez-vous un lead qualifié ?", a: "Une demande émanant d'une entreprise identifiée, portant sur un besoin précis, avec un interlocuteur joignable. Un formulaire rempli avec « bonjour, vos prix ? » et une adresse Gmail ne compte pas dans nos rapports." },
      { q: 'Nos commerciaux vont-ils devoir changer leur méthode ?', a: "Leur méthode de closing ne change pas. Ce qui change, c'est le point d'entrée. Nous travaillons d'ailleurs avec eux : ce sont eux qui savent quelles objections reviennent et quelles affaires ont été perdues, et ce matériau alimente directement le contenu du site." },
    ],

    offer: {
      h2: 'Voyons ce qui vous échappe',
      intro:
        "Nous identifions les requêtes commerciales de votre marché que vous ne captez pas, et qui les capte à votre place.",
      included: [
        { t: 'Les requêtes d\u2019achat de votre marché', d: 'Celles qui expriment une intention immédiate, avec leur volume mensuel.' },
        { t: 'Votre position sur chacune', d: 'Et le nom des concurrents qui apparaissent devant vous.' },
        { t: 'L\u2019état de votre visibilité locale', d: 'Fiches Google Business par implantation, avis, cohérence des informations.' },
      ],
      reserved: [
        'Cartographie complète des requêtes par cluster d\u2019intention',
        'Estimation du volume d\u2019affaires non capté',
        'Plan d\u2019acquisition sur douze mois avec objectifs mensuels',
      ],
      note: "L'estimation chiffrée du volume d'affaires fait partie de l'audit complet, réalisé une fois la discussion engagée.",
    },

    finalCta: {
      title: 'Combien de devis partent chez vos concurrents ?',
      body: "Nous identifions les requêtes que vous ne captez pas et qui les récupère. Vous saurez ce que ça représente en volume.",
      label: 'Demander mon diagnostic gratuit',
      reassurance: 'Sans engagement · Livré sous 7 jours · Concurrents nommés',
    },

    methode: {
      href: "/expertise/accompagnement",
      titre: "Pilotage mensuel : KPI et ajustements",
      desc: "Le détail du suivi : rapport mensuel, analyse de tendances, ajustements selon les données de marché.",
    },

    related: ['seo-industriel', 'creation-site-internet-industriel', 'referencement-ia'],
  },
};

export const LANDING_SLUGS = Object.keys(LANDINGS);
export const getLanding = (slug) => LANDINGS[slug] || null;
