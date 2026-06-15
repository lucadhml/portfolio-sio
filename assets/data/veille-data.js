window.VEILLE_DATA = {
  "updatedAt": "2026-06-15",
  "methodologie": {
    "title": "Méthodologie de veille",
    "summary": "Ma veille technologique repose sur plusieurs sources complémentaires : IT-Connect, ANSSI et le CERT-FR pour la cybersécurité, 01net et Le Monde Informatique pour l'IA. Chaque jour, un script récupère automatiquement les nouvelles publications, calcule un score de pertinence par mots-clés, et sélectionne les 4 meilleures entrées par thème.",
    "frequency": "Mise à jour automatique quotidienne",
    "tooling": [
      "IT-Connect, ANSSI, CERT-FR (cybersécurité)",
      "01net, Le Monde Informatique (IA)",
      "Collecte automatique quotidienne",
      "Score de pertinence par mots-clés",
      "Sélection des 4 meilleures entrées par thème"
    ],
    "steps": [
      {
        "title": "1. Collecte multi-sources",
        "description": "Un script interroge chaque jour plusieurs sources fiables : presse technique, sources institutionnelles et revues spécialisées IA."
      },
      {
        "title": "2. Score de pertinence",
        "description": "Chaque publication reçoit un score basé sur ses mots-clés, sa source et son thème. Les scores négatifs permettent d'exclure les hors-sujets."
      },
      {
        "title": "3. Sélection des meilleures entrées",
        "description": "Le système conserve les 4 publications avec le score le plus élevé par thème, adaptées au parcours SISR."
      },
      {
        "title": "4. Publication automatique",
        "description": "Les entrées retenues sont publiées automatiquement sur le portfolio avec leur date, leur source et un résumé."
      }
    ],
    "criteria": [
      "Sources identifiées et crédibles",
      "Mise à jour quotidienne automatisée",
      "Score de pertinence adapté à l'option SISR",
      "Synthèses réutilisables devant le jury"
    ]
  },
  "topics": {
    "cybersecurite": {
      "title": "Cybersécurité",
      "subtitle": "Menaces, vulnérabilités et recommandations suivies à partir de sources techniques et institutionnelles.",
      "objective": "Cette veille me permet de suivre les vulnérabilités critiques, les recommandations de sécurité et les tendances de la menace afin d'alimenter ma culture sécurité sur les systèmes et les réseaux dans un cadre cohérent avec l'option SISR.",
      "interest": "L'intérêt de ce sujet est de relier des publications techniques à des situations concrètes : gestion des vulnérabilités, correctifs, sécurité des postes, sécurisation des services et compréhension de la menace actuelle.",
      "sources": [
        {
          "name": "IT-Connect",
          "type": "Presse technique",
          "url": "https://www.it-connect.fr/actualites/"
        },
        {
          "name": "ANSSI",
          "type": "Source institutionnelle",
          "url": "https://cyber.gouv.fr/actualites/rss/"
        },
        {
          "name": "CERT-FR",
          "type": "Bulletins et alertes",
          "url": "https://www.cert.ssi.gouv.fr/actualite/feed/"
        }
      ],
      "entries": [
        {
          "date": "10 juin 2026",
          "title": "Patch Tuesday – Juin 2026 : 200 failles de sécurité patchées, dont 3 zero-day",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/patch-tuesday-juin-2026-200-failles-de-securite-patchees-dont-3-zero-day/",
          "summary": "Le programme du Patch Tuesday de juin 2026 publié par Microsoft est très chargé : 200 failles de sécurité ont été corrigées, dont 3 failles zero-day.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "11 mars 2026",
          "title": "Panorama de la cybermenace 2025 : La France toujours sous la pression des cyber attaquants",
          "source": "ANSSI",
          "url": "http://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/",
          "summary": "Dans le Panorama de la cybermenace 2025, l’Agence nationale de la sécurité des systèmes d’information (ANSSI) présente le bilan d’une […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "12 juin 2026",
          "title": "Linux : une faille permet de devenir root à cause d’un unique caractère",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/linux-une-faille-permet-de-devenir-root-a-cause-dun-unique-caractere/",
          "summary": "Une simple erreur de syntaxe, réduite à un unique caractère dans le code du noyau Linux, est à l’origine d’une faille de sécurité : CVE-2026-23111.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "30 janvier 2026",
          "title": "La France prend la présidence du Groupe de travail sur la cybersécurité du G7",
          "source": "ANSSI",
          "url": "http://cyber.gouv.fr/actualites/la-france-prend-la-presidence-du-groupe-de-travail-sur-la-cybersecurite-du-g7/",
          "summary": "Face à l’intensification et à la diversification des cybermenaces, la cybersécurité constitue un enjeu stratégique majeur pour la sécurité nationale […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        }
      ]
    },
    "intelligence-artificielle": {
      "title": "Intelligence artificielle",
      "subtitle": "Usages, risques et enjeux de l'IA suivis depuis des sources spécialisées françaises et internationales.",
      "objective": "Cette veille me permet de suivre les évolutions de l'intelligence artificielle dans un cadre professionnel : nouveaux usages, risques de sécurité, agents autonomes, conformité et impacts sur les outils informatiques.",
      "interest": "L'intérêt de ce sujet est de garder une vision réaliste de l'IA : à la fois ses apports pour les métiers de l'IT et les nouveaux risques qu'elle introduit en matière de sécurité, d'automatisation et de gouvernance.",
      "sources": [
        {
          "name": "IT-Connect",
          "type": "Presse technique",
          "url": "https://www.it-connect.fr/actualites/"
        },
        {
          "name": "01net",
          "type": "Presse tech française",
          "url": "https://www.01net.com/feed/"
        },
        {
          "name": "Le Monde Informatique",
          "type": "Presse IT professionnelle",
          "url": "https://www.lemondeinformatique.fr/flux-rss/thematique/intelligence-artificielle/1.xml"
        }
      ],
      "entries": [
        {
          "date": "15 juin 2026",
          "title": "Cette cyberattaque chinoise a fait « des centaines de milliers de victimes » avec Gemini, Google contre-attaque",
          "source": "01net",
          "url": "https://www.01net.com/actualites/cette-cyberattaque-chinoise-a-fait-des-centaines-de-milliers-de-victimes-google-contre-attaque.html",
          "summary": "Un réseau criminel chinois a utilisé l'intelligence artificielle de Google pour déployer une vaste campagne de phishing. En trois ans, la plateforme Outsider Enterprise a volé les données de 3,8 millions de cartes bancaires, dérobé 1,9 m...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 juin 2026",
          "title": "Anthropic vs Trump, la Chine, alerte d’Amazon…Les dessous de la suspension de Claude Fable 5 et Mythos 5",
          "source": "01net",
          "url": "https://www.01net.com/actualites/alerte-amazon-vengeance-trump-contre-anthropic-exploitation-chinoise-dessous-suspension-nouvelles-versions-claude.html",
          "summary": "Sous pression de l'administration Trump, Anthropic a été contraint de couper l'accès mondial à ses deux modèles d'IA les plus puissants, Claude Fable 5 et Mythos 5. Aux origines de l'injonction américaine, on trouve un avertissement émis...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 juin 2026",
          "title": "Une IA surévalue sa voiture de 35 %, et BMW est forcé de payer la différence",
          "source": "01net",
          "url": "https://www.01net.com/actualites/ia-surevalue-sa-voiture-35-constructeur-automobile-force-payer-difference.html",
          "summary": "Un homme s’est vu offrir une proposition de reprise très intéressante pour sa BMW. Mais l’agent en face était une IA qui a largement surestimé la valeur de son véhicule. Reconnaissant son erreur, la marque a dû payer…",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "10 juin 2026",
          "title": "Claude Fable 5, la version grand public de Mythos est disponible, mais pour une durée limitée !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/claude-fable-5-la-version-grand-public-de-mythos-est-disponible-mais-pour-une-duree-limitee/",
          "summary": "Anthropic a publié Claude Fable 5 pour le grand public et Mythos 5 pour certains partenaires. Jusqu’au 22 juin 2026, Fable 5 est intégré aux forfaits Claude.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
