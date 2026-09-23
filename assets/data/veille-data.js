window.VEILLE_DATA = {
  "updatedAt": "2026-09-23",
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
          "date": "21 janvier 2026",
          "title": "Vulnérabilité dans telnetd (21 janvier 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-003/",
          "summary": "Le 20 janvier 2026, les détails de la vulnérabilité CVE-2026-24061, affectant *telnetd*, ont été publiés. Cette vulnérabilité permet à un attaquant de contourner l'authentification et de se connecter à une machine vulnérable en tant que...",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "2 avril 2026",
          "title": "Expiration de certificats Secure Boot en juin 2026 (02 avril 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-014/",
          "summary": "Le démarrage sécurisé (UEFI Secure Boot) est une fonctionnalité de sécurité disponible sur les ordinateurs PC clients et serveurs depuis 2011. Son rôle est de sécuriser la séquence de démarrage de l’appareil, en vérifiant l’intégrité du...",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "23 septembre 2026",
          "title": "BigDiskBuster : cette nouvelle zero-day empêche Microsoft Defender de se mettre à jour",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/bigdiskbuster-zero-day-defender-bloque-mises-a-jour/",
          "summary": "BigDiskBuster, la nouvelle faille zero-day de Nightmare Eclipse, sature le disque pour empêcher Microsoft Defender de se mettre à jour sur Windows.",
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
          "date": "23 septembre 2026",
          "title": "ChatGPT vs Claude : OpenAI et Anthropic dégainent des IA moins chers et plus efficaces… au lieu de ralentir",
          "source": "01net",
          "url": "https://www.01net.com/actualites/chatgpt-vs-claude-openai-et-anthropic-degainent-ia-moins-chers-lieu-ralentir.html",
          "summary": "Coup sur coup, OpenAI et Anthropic ont lancé de nouvelles IA bien moins chères que les précédentes. GPT-6 Sol et Luna d'un côté, Claude Opus 5.5 de l'autre. La guerre des prix de l'IA s'intensifie en pleine polémique sur le ralentissemen...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "23 septembre 2026",
          "title": "J’ai raté 3 fois le CCNA en formation intensive : l’histoire de Damien Soulages, fondateur de Formip",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/jai-rate-3-fois-le-ccna-en-formation-intensive-lhistoire-de-damien-soulages-fondateur-de-formip/",
          "summary": "Comment sortir de l’échec CCNA ? Découvrez l’itinéraire de Damien Formip: méthode pratique, apprentissage actif et IA au service de la réussite.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "23 septembre 2026",
          "title": "Le futur avion de chasse de la France fait voler deux IA 100 % françaises",
          "source": "01net",
          "url": "https://www.01net.com/actualites/le-futur-avion-de-chasse-de-la-france-fait-voler-deux-ia-100-francaises.html",
          "summary": "Deux algorithmes tricolores viennent de prendre l'air à bord d'un avion de chasse. Leur rôle exact ? Motus. Depuis l'abandon du chasseur européen, chaque avionneur français trace sa propre route vers l'IA de combat.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "19 septembre 2026",
          "title": "UGREEN Nexode Pro : deux chargeurs avec écran intelligent, dont un que j’ai pris en main",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/ugreen-nexode-pro-chargeurs-ecran-intelligent-160w-300w/",
          "summary": "UGREEN a étoffé sa gamme Nexode Pro avec un chargeur mural de 160 watts et un chargeur de bureau de 300 watts. Ils ont le droit à un écran intelligent.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
