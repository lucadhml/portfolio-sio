window.VEILLE_DATA = {
  "updatedAt": "2026-08-19",
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
          "date": "18 août 2026",
          "title": "Patch Tuesday Août 2026 : 421 failles corrigées et une zero-day exploitée par Lazarus",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/patch-tuesday-aout-2026-421-failles-corrigees-3-zero-day/",
          "summary": "Microsoft a corrigé 421 vulnérabilités en août 2026, dont 3 zero-day. L’une d’elles était déjà exploitée par Lazarus pour déployer son rootkit FudModule.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "21 juillet 2026",
          "title": "Exigences du CRA : processus de notification pour les organismes notifiés",
          "source": "ANSSI",
          "url": "http://cyber.sites.beta.gouv.fr/actualites/exigences-du-cra-processus-de-notification-pour-les-organismes-notifies/",
          "summary": "Dans un contexte marqué par l’exploitation croissante de vulnérabilités affectant des produits numériques ayant un niveau de cybersécurité insuffisant, le […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "18 août 2026",
          "title": "ShieldBreak : cette faille zero-day menace Windows, Microsoft prépare un patch",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/shieldbreak-zero-day-defender-cve-2026-69414/",
          "summary": "Nightmare Eclipse a publié ShieldBreak, une faille zero-day qui contourne le patch RoguePlanet de Microsoft Defender. Microsoft dit travailler sur un correctif.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "11 mars 2026",
          "title": "Panorama de la cybermenace 2025 : La France toujours sous la pression des cyber attaquants",
          "source": "ANSSI",
          "url": "http://cyber.sites.beta.gouv.fr/actualites/panorama-de-la-cybermenace-2025/",
          "summary": "Dans le Panorama de la cybermenace 2025, l’Agence nationale de la sécurité des systèmes d’information (ANSSI) présente le bilan d’une […]",
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
          "date": "18 août 2026",
          "title": "ChatGPT pour les ados : OpenAI lance des comptes dédiés pour les moins de 18 ans",
          "source": "01net",
          "url": "https://www.01net.com/actualites/chatgpt-pour-les-ados-openai-lance-des-comptes-dedies-pour-les-moins-de-18-ans.html",
          "summary": "OpenAI lance les comptes pour adolescents. Ceux-ci intègrent un mode Étude, ainsi que des garde-fous pour préserver le bien-être des plus jeunes.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "18 août 2026",
          "title": "La nouveauté la plus impressionnante des Pixel 11 n’est clairement pas celle que l’on croit",
          "source": "01net",
          "url": "https://www.01net.com/actualites/la-nouveaute-la-plus-impressionnante-des-pixel-11-nest-clairement-pas-celle-que-lon-croit.html",
          "summary": "À l'occasion du lancement des Pixel 11, Google DeepMind a dévoilé SL2T, un modèle d'IA capable de traduire la langue des signes en texte en temps réel. Intégré à Gboard et à Live Transcribe, il permet aux utilisateurs sourds et malentend...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "19 août 2026",
          "title": "Microsoft optimise Windows pour les PC avec 8 Go de RAM…mais refuse toujours le label Copilot+",
          "source": "01net",
          "url": "https://www.01net.com/actualites/microsoft-optimise-windows-pour-les-pc-avec-8-go-de-ram-mais-refuse-toujours-le-label-copilot.html",
          "summary": "Windows 11 va enfin apprendre à vivre avec 8 Go de RAM. L'IA maison, elle, campe derrière ses 16 Go. Les PC pas chers auront un système plus léger, et toujours pas de Copilot+.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "19 août 2026",
          "title": "Après Anthropic, Amazon découpe à son tour des livres pour entraîner son IA",
          "source": "01net",
          "url": "https://www.01net.com/actualites/apres-anthropic-amazon-decoupe-a-son-tour-des-livres-pour-entrainer-son-ia.html",
          "summary": "Un AirTag glissé entre deux pages, des semaines de route, et une découverte au bout : l'ancien libraire du web massicote des livres rares pour nourrir ses modèles. Anthropic avait ouvert la voie, Amazon industrialise.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
