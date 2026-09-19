window.VEILLE_DATA = {
  "updatedAt": "2026-09-19",
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
          "date": "21 juillet 2026",
          "title": "Exigences du CRA : processus de notification pour les organismes notifiés",
          "source": "ANSSI",
          "url": "http://cyber.sites.beta.gouv.fr/actualites/exigences-du-cra-processus-de-notification-pour-les-organismes-notifies/",
          "summary": "Dans un contexte marqué par l’exploitation croissante de vulnérabilités affectant des produits numériques ayant un niveau de cybersécurité insuffisant, le […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "16 septembre 2026",
          "title": "iOS 27 et macOS Golden Gate 27 : Apple corrige plus de 200 failles, dont 20 dans le noyau d’iOS",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/apple-ios-27-macos-golden-gate-27-plus-de-200-failles-corrigees/",
          "summary": "Apple a publié iOS 27 et macOS Golden Gate 27 avec plus de 200 correctifs de sécurité, dont une faille CoreMedia exploitable via une simple image.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "15 septembre 2026",
          "title": "Logitech Options+ : une faille donne les privilèges SYSTEM à n’importe quel utilisateur Windows",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/logitech-options-plus-faille-system-cve-2026-12518/",
          "summary": "Une faille dans Logitech Options+ (CVE-2026-12518) permet à un utilisateur standard d’obtenir les privilèges SYSTEM sur Windows. Un correctif est disponible.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "16 septembre 2026",
          "title": "Nintendo Switch : une faille permet d’exécuter du code via le code QR affiché à l’écran",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/nintendo-switch-faille-code-qr-cve-2026-82079/",
          "summary": "Une faille de sécurité dans la Nintendo Switch : CVE-2026-82079. Un attaquant à proximité qui scanne le code QR affiché par la console peut exécuter du code.",
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
          "date": "18 septembre 2026",
          "title": "Mastercard offre des cartes bancaires aux IA pour dépenser votre argent",
          "source": "01net",
          "url": "https://www.01net.com/actualites/mastercard-offre-des-cartes-bancaires-aux-ia-pour-depenser-votre-argent.html",
          "summary": "Confier sa carte à un inconnu reste une mauvaise idée. La confier à un agent d'intelligence artificielle devient un produit officiel chez Mastercard. Les garde-fous, eux, semblent encore écrits au crayon à papier.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "18 septembre 2026",
          "title": "OpenAI a été piraté grâce à l’IA de son grand rival",
          "source": "01net",
          "url": "https://www.01net.com/actualites/openai-a-ete-pirate-grace-a-lia-de-son-grand-rival.html",
          "summary": "Un forum communautaire, une bibliothèque d'images vieillissante et une IA sortie de la veille : il n'en fallait pas plus pour entrouvrir les systèmes internes d'OpenAI. Les cambrioleurs, heureusement, étaient payés pour prévenir.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 septembre 2026",
          "title": "WordPress : les mises à jour de plugins jugées à risque désormais bloquées grâce à l’IA !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/wordpress-controle-securite-automatise-mises-a-jour-plugins/",
          "summary": "WordPress.org analyse désormais chaque mise à jour de plugin par IA et bloque automatiquement les versions à risque, après une porte dérobée stoppée en juillet.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
