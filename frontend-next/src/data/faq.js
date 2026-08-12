// =============================================================
// FAQ globale — affichee dans le footer sur tout le site.
// Objectif : contenu organique + justification des affirmations
// avancees sur les landing pages. Aucune mention de prix.
// =============================================================

export const FAQ_CATEGORIES = {
  diagnostic: 'Comprendre le problème',
  seo: 'Référencement naturel',
  ia: 'Référencement IA',
  site: 'Conception et refonte',
  leads: 'Génération de demandes',
  methode: 'Notre méthode',
};

export const FAQ_GLOBALE = [

  // ─── COMPRENDRE LE PROBLÈME ───────────────────────────────
  {
    cat: 'diagnostic',
    q: "Pourquoi mon site industriel ne génère-t-il aucune demande entrante ?",
    a: "Dans la quasi-totalité des audits que nous réalisons, trois causes se cumulent. Le catalogue produit vit dans un fichier PDF, format que Google indexe mal et n'affiche pas dans les résultats produits : des centaines de références deviennent invisibles d'un coup. Les pages du site présentent l'entreprise au lieu de répondre aux questions des acheteurs, donc elles ne correspondent à aucune requête réelle. Enfin, l'absence de données structurées empêche Google de comprendre ce que vous vendez : sans schema Product ou Organization, le moteur devine, et il devine mal. Aucune de ces trois causes ne se règle avec un nouveau design.",
  },
  {
    cat: 'diagnostic',
    q: "Comment savoir si mon site est réellement indexé par Google ?",
    a: "Tapez « site:votredomaine.fr » dans Google : le nombre de résultats affichés correspond aux pages connues du moteur. Comparez-le au nombre de références de votre catalogue. Un distributeur avec 400 machines en stock et 12 pages indexées a un problème structurel. La Search Console donne une réponse plus précise dans l'onglet Indexation, avec le motif exact de non-indexation pour chaque page écartée : contenu dupliqué, page bloquée par robots.txt, redirection, ou simplement page découverte mais non explorée.",
  },
  {
    cat: 'diagnostic',
    q: "Mes concurrents sont-ils vraiment mieux positionnés que moi ?",
    a: "C'est vérifiable en quelques minutes. Tapez les cinq requêtes que taperait un acheteur de votre marché, en navigation privée pour éviter la personnalisation des résultats. Notez qui apparaît dans les dix premiers. Si vous n'y êtes pas et qu'un concurrent y figure sur plusieurs requêtes, l'écart est réel et il se traduit en demandes de devis que vous ne recevez pas. Notre diagnostic gratuit formalise cet exercice sur un panel plus large et identifie les requêtes où l'écart est le plus coûteux.",
  },
  {
    cat: 'diagnostic',
    q: "Le marché industriel justifie-t-il vraiment un investissement digital ?",
    a: "Les chiffres du secteur donnent un élément de réponse. En 2025, 51 772 défaillances industrielles ont été recensées en France, en hausse de 9,5 % sur un an, quatrième année consécutive de progression après 35 672 en 2021 et 47 279 en 2024. Chaque défaillance redistribue des parts de marché, libère des équipements et oblige des clients à trouver un nouveau fournisseur en urgence. Ces mouvements profitent aux entreprises visibles au moment où le besoin apparaît. Sur un marché stable, la visibilité est un confort ; sur un marché en recomposition, c'est un facteur de survie.",
  },

  // ─── RÉFÉRENCEMENT NATUREL ────────────────────────────────
  {
    cat: 'seo',
    q: "Le SEO fonctionne-t-il quand les volumes de recherche sont faibles ?",
    a: "C'est précisément ce qui le rend rentable dans l'industrie. Une requête comme « centre usinage 5 axes occasion » génère quelques dizaines de recherches mensuelles, mais chacune émane d'un acheteur en phase de décision sur un équipement à plusieurs centaines de milliers d'euros. À l'inverse, une requête grand public à dix mille recherches mensuelles sur un produit à trente euros exige un volume énorme pour être rentable. Nous ciblons l'intention d'achat, pas le volume : le coût par demande qualifiée s'en trouve divisé, et la concurrence sur ces requêtes reste faible.",
  },
  {
    cat: 'seo',
    q: "En quoi le SEO industriel diffère-t-il du référencement classique ?",
    a: "Sur trois points structurels. Les requêtes cibles sont techniques et précises : un acheteur tape une référence constructeur, une course d'axe ou un diamètre de passage en broche, pas des mots-clés génériques. Le cycle de vente s'étale sur six à dix-huit mois et implique plusieurs décideurs aux besoins différents, ce qui impose un contenu qui accompagne une réflexion longue plutôt qu'un tunnel de conversion rapide. Enfin, le catalogue produit constitue le principal gisement de trafic : chaque machine, chaque référence et chaque marque distribuée peut devenir une page indexable, ce qui n'a pas d'équivalent dans la plupart des secteurs.",
  },
  {
    cat: 'seo',
    q: "Combien de temps avant de constater les premiers résultats ?",
    a: "Les positions commencent à bouger entre six et dix semaines après la mise en ligne des correctifs techniques : c'est le délai nécessaire pour que Google recrawle et réévalue le site. Les demandes entrantes suivent généralement à partir du troisième mois, une fois les pages produits et services indexées et positionnées. Sur les requêtes les plus concurrentielles, comme « machine outil occasion » en national, comptez six à douze mois. Nous annonçons ces délais avant de commencer plutôt que de les découvrir en cours de mission.",
  },
  {
    cat: 'seo',
    q: "Faut-il des backlinks pour se positionner dans l'industrie ?",
    a: "Ils aident, mais ils ne sont pas le premier levier sur des requêtes techniques peu concurrentielles. Un site industriel bien structuré, avec un catalogue indexable et un contenu qui répond précisément aux requêtes, se positionne souvent sans campagne de netlinking. Les backlinks deviennent déterminants sur les requêtes génériques à forte concurrence. Nous privilégions les liens naturels : publications sectorielles, annuaires professionnels de la mécanique, syndicats de branche, et données originales que d'autres sites citent spontanément.",
  },
  {
    cat: 'seo',
    q: "Mon catalogue est en PDF, est-ce vraiment un problème ?",
    a: "Oui, et c'est souvent le problème le plus coûteux. Google indexe mal les PDF, ne comprend pas leur structure interne et ne les fait pas remonter dans les résultats produits enrichis. Un catalogue de 300 références en PDF représente une seule URL au lieu de 300 pages potentielles. Un acheteur qui cherche une référence précise ne vous trouve pas, alors que votre concurrent dont chaque machine dispose de sa propre page apparaît. La conversion du catalogue en pages indexables est généralement le premier chantier que nous recommandons.",
  },

  // ─── RÉFÉRENCEMENT IA ─────────────────────────────────────
  {
    cat: 'ia',
    q: "Qu'est-ce que le référencement IA, ou GEO ?",
    a: "Le GEO, pour Generative Engine Optimization, consiste à rendre un site citable par les moteurs de recherche génératifs comme ChatGPT, Perplexity ou les résumés IA de Google. Contrairement au référencement classique qui vise une position dans une liste de liens, le GEO vise à être sélectionné comme source dans une réponse rédigée. Les leviers principaux sont un fichier llms.txt décrivant l'entreprise, des données structurées JSON-LD complètes, des passages factuels auto-suffisants de 130 à 170 mots extractibles sans leur contexte, et des mentions de la marque sur des sources tierces autoritaires.",
  },
  {
    cat: 'ia',
    q: "Le GEO remplace-t-il le référencement naturel ?",
    a: "Non, il s'y ajoute et repose sur les mêmes fondations : contenu de qualité, structure technique propre, données structurées valides. Un site invisible pour Google le sera aussi pour les moteurs génératifs, qui s'appuient largement sur l'index web pour construire leurs réponses. Le GEO ajoute une couche de formulation par-dessus : des passages rédigés comme des réponses complètes, une déclaration explicite de l'activité dans un fichier llms.txt, et une autorisation des crawlers IA dans le robots.txt. Les deux disciplines se renforcent mutuellement.",
  },
  {
    cat: 'ia',
    q: "Pourquoi traiter ce sujet maintenant plutôt que dans deux ans ?",
    a: "Parce que le terrain est encore libre dans l'industrie française. Sur les trente fabricants et distributeurs de machines-outils que nous avons audités, aucun ne disposait d'un fichier llms.txt et deux seulement avaient des données structurées exploitables. La situation ressemble à celle du référencement classique au début des années 2000 : les règles se stabilisent, la concurrence est quasi nulle, et les premiers à structurer leur contenu prennent une position que les suivants peinent à reprendre. Quand les grandes agences auront intégré le GEO à leurs offres standard, cet avantage aura disparu.",
  },
  {
    cat: 'ia',
    q: "Comment vérifier concrètement si les IA citent mon entreprise ?",
    a: "Posez directement la question aux trois principaux moteurs. Demandez à ChatGPT, Perplexity et Gemini quelle entreprise consulter pour votre activité et votre région, puis relevez les noms cités. Répétez sur cinq formulations différentes pour éviter les réponses accidentelles. Si votre entreprise n'apparaît jamais, c'est mesurable et corrigeable. Nous formalisons cet exercice mensuellement sur un panel de requêtes correspondant au marché de nos clients, en relevant la position dans la réponse et la formulation employée.",
  },
  {
    cat: 'ia',
    q: "Ces techniques sont-elles vérifiables ou purement déclaratives ?",
    a: "Chaque mécanisme se contrôle indépendamment. Un fichier llms.txt est lu ou non par un crawler, cela se constate dans les logs du serveur. Une donnée structurée est valide ou non, cela se teste gratuitement sur le validateur schema.org. Les crawlers autorisés se vérifient dans le fichier robots.txt public. Une citation dans un moteur génératif s'observe directement. Rien dans cette méthode ne repose sur une promesse invérifiable, et nous appliquons la même approche sur notre propre site, que vous pouvez inspecter.",
  },

  // ─── CONCEPTION ET REFONTE ────────────────────────────────
  {
    cat: 'site',
    q: "Vais-je perdre mon référencement pendant une refonte ?",
    a: "Pas si la migration est préparée. Une refonte non préparée fait perdre entre 40 et 70 % du trafic organique, avec un délai de récupération de six à douze mois. La cause est presque toujours la même : les URLs changent sans redirection, Google désindexe les anciennes pages et doit réapprendre le site depuis zéro. La prévention tient en quatre étapes : inventaire complet des URLs indexées avec leur trafic et leurs backlinks, cartographie de chaque ancienne URL vers son équivalent, redirections 301 permanentes testées avant la bascule, et surveillance des erreurs d'exploration pendant les huit semaines suivantes.",
  },
  {
    cat: 'site',
    q: "Faut-il refaire le site pour améliorer son référencement ?",
    a: "Pas systématiquement, et nous le disons quand ce n'est pas nécessaire. Si le site est en HTTPS, techniquement sain, et que le système de gestion permet de créer des pages librement, on travaille sur l'existant : c'est plus rapide et nettement moins coûteux. La refonte s'impose en revanche quand le site n'est pas sécurisé, quand le catalogue vit dans un PDF, quand l'encodage des caractères est cassé, ou quand la technologie employée empêche Google d'indexer le contenu. Dans ces cas, aucune optimisation de surface ne produit de résultat.",
  },
  {
    cat: 'site',
    q: "Sur quelle technologie construisez-vous les sites ?",
    a: "Next.js avec rendu côté serveur, ce qui garantit que Google reçoit le contenu complet du catalogue sans dépendre de l'exécution du JavaScript. Base MongoDB pour les données produits, hébergement adapté à vos contraintes. Nous évitons WordPress sur les catalogues volumineux : les performances se dégradent au-delà de quelques centaines de références et l'indexation devient problématique. Le code source est livré sur votre dépôt GitHub, ce qui vous permet de changer de prestataire sans repartir de zéro.",
  },
  {
    cat: 'site',
    q: "Pourrons-nous modifier le contenu nous-mêmes après livraison ?",
    a: "Oui pour les fiches machines, les pages de contenu et les textes courants, sans intervention technique. Les modifications de structure ou l'ajout de nouveaux types de pages demandent un développeur, mais le code étant sur votre dépôt, n'importe quel prestataire peut reprendre le travail. Nous formons votre équipe à la mise à jour du catalogue lors de la mise en ligne, et cette formation est documentée pour les personnes qui arriveront ensuite.",
  },

  // ─── GÉNÉRATION DE DEMANDES ───────────────────────────────
  {
    cat: 'leads',
    q: "Qu'appelez-vous une demande qualifiée ?",
    a: "Une demande émanant d'une entreprise identifiable, portant sur un besoin précis, avec un interlocuteur joignable. Un formulaire rempli avec « bonjour, vos prix ? » et une adresse personnelle ne compte pas dans nos rapports. Cette exigence a une conséquence sur la conception du site : nous séparons les formulaires selon le besoin, une demande de devis machine ne posant pas les mêmes questions qu'une demande de dépannage ou une inscription à une formation. Le commercial sait de quoi il s'agit avant de décrocher.",
  },
  {
    cat: 'leads',
    q: "Faut-il faire de la publicité payante en complément ?",
    a: "Rarement, et jamais comme canal principal. Sur des requêtes industrielles à faible volume, le référencement naturel coûte moins cher à moyen terme et construit un actif durable : une page bien positionnée continue de produire quand vous cessez de payer. La publicité a du sens pour tester rapidement l'appétence d'un marché, accompagner le lancement d'une gamme, ou occuper le terrain pendant que le référencement se met en place. Nous la recommandons dans ces cas précis, pas par défaut.",
  },
  {
    cat: 'leads',
    q: "La visibilité locale compte-t-elle pour une entreprise multi-sites ?",
    a: "Elle est déterminante et souvent négligée. De nombreuses recherches industrielles incluent une dimension géographique : « rectification cylindrique Lyon », « maintenance presse Hauts-de-France ». Une entreprise disposant de cinq implantations mais d'une seule fiche Google Business perd la visibilité des quatre autres bassins. Chaque site doit avoir sa fiche complète, avec ses horaires, ses photos, sa catégorie principale et une stratégie de collecte d'avis. C'est un chantier peu coûteux dont l'effet est rapide.",
  },

  // ─── NOTRE MÉTHODE ────────────────────────────────────────
  {
    cat: 'methode',
    q: "Pourquoi n'intervenez-vous que dans l'industrie ?",
    a: "Parce que les mécaniques d'achat n'ont rien de comparable avec le grand public ou le B2B logiciel. Un équipement industriel se vend sur un cycle de six à dix-huit mois, avec trois à cinq décideurs impliqués et un besoin de preuve technique élevé. Nous nous limitons à huit codes NAF : machines-outils (28.41Z, 28.49Z, 46.62Z), mécanique de précision et décolletage (25.62A, 25.62B), traitement des métaux (25.61Z, 25.29Z) et réparation de machines (33.12Z). Cette restriction nous permet de connaître les requêtes réelles, les cycles et les interlocuteurs de chaque métier.",
  },
  {
    cat: 'methode',
    q: "Quelles sont vos zones d'intervention ?",
    a: "Nous travaillons à distance sur l'ensemble du territoire français. Quatre régions font l'objet d'une connaissance approfondie, parce que nous y avons cartographié le tissu industriel établissement par établissement : l'Auvergne-Rhône-Alpes avec 5 874 établissements dans nos secteurs cibles, le Grand Est avec 2 826, les Hauts-de-France avec 2 209 et la Bourgogne-Franche-Comté avec 1 812. Soit 12 721 entreprises dont nous connaissons l'activité, la localisation et le contexte concurrentiel.",
  },
  {
    cat: 'methode',
    q: "Sur quelles données appuyez-vous vos recommandations ?",
    a: "Sur trois sources que nous maintenons nous-mêmes. Un recensement des établissements industriels par code NAF et par département, issu des données publiques d'entreprises. Un benchmark de trente fabricants et distributeurs de machines-outils français et étrangers, évalués sur les mêmes critères. Et un suivi des défaillances industrielles par région, croisant les données Altares et Banque de France. Ces trois jeux de données nous disent quelles requêtes existent, qui les capte, et à quel moment un marché se libère. Une recommandation sans ces éléments reste une intuition.",
  },
  {
    cat: 'methode',
    q: "Que contient le diagnostic gratuit ?",
    a: "Votre score de visibilité sur 100, calculé sur sept dimensions : architecture technique, référencement technique, qualité du contenu, présence digitale locale, visibilité concurrentielle, lisibilité par les moteurs IA et performance. S'y ajoutent les cinq constats les plus coûteux, chacun accompagné de sa source vérifiable, et le nom des concurrents qui captent vos requêtes commerciales. Livré sous une semaine, sans engagement et sans accès à vos outils : nous travaillons uniquement sur des données publiques.",
  },
  {
    cat: 'methode',
    q: "Que se passe-t-il si le diagnostic conclut que tout va bien ?",
    a: "Nous vous le disons. Cela arrive rarement, mais quand un site est déjà correctement construit et indexé, nous préférons le signaler et proposer un accompagnement éditorial ciblé plutôt que de vendre une refonte inutile. Il nous arrive aussi de recommander des correctifs que vous pouvez appliquer seuls, sans prestataire. Certaines entreprises le font et ne nous rappellent jamais : c'est un risque accepté, et celles qui reviennent savent exactement ce qu'elles achètent.",
  },
];
