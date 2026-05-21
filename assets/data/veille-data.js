window.VEILLE_DATA = {
  "updatedAt": "2026-05-21",
  "methodologie": {
    "title": "Méthodologie de veille",
    "summary": "Ma veille technologique repose sur plusieurs sources complémentaires : IT-Connect, ANSSI et le CERT-FR pour la cybersécurité, 01net et Le Monde Informatique pour l’IA. Chaque jour, un script récupère automatiquement les nouvelles publications, calcule un score de pertinence par mots-clés, et sélectionne les 4 meilleures entrées par thème.",
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
        "description": "Chaque publication reçoit un score basé sur ses mots-clés, sa source et son thème. Les scores négatifs permettent d’exclure les hors-sujets."
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
      "Score de pertinence adapté à l’option SISR",
      "Synthèses réutilisables devant le jury"
    ]
  },
  "topics": {
    "cybersecurite": {
      "title": "Cybersécurité",
      "subtitle": "Menaces, vulnérabilités et recommandations suivies à partir de sources techniques et institutionnelles.",
      "objective": "Cette veille me permet de suivre les vulnérabilités critiques, les recommandations de sécurité et les tendances de la menace afin d’alimenter ma culture sécurité sur les systèmes et les réseaux dans un cadre cohérent avec l’option SISR.",
      "interest": "L’intérêt de ce sujet est de relier des publications techniques à des situations concrètes : gestion des vulnérabilités, correctifs, sécurité des postes, sécurisation des services et compréhension de la menace actuelle.",
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
          "date": "19 mai 2026",
          "title": "+563 % pour Chrome, +180 % pour VMware : l’IA provoque un tsunami historique de failles",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/comment-ia-provoque-un-tsunami-historique-de-failles/",
          "summary": "Découvrez comment l’IA accélère la découverte de vulnérabilités, entraînant une explosion des CVE en 2026, y compris dans le monde de l’open source.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l’administration des systèmes et réseaux."
        },
        {
          "date": "11 mars 2026",
          "title": "Panorama de la cybermenace 2025 : La France toujours sous la pression des cyber attaquants",
          "source": "ANSSI",
          "url": "http://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/",
          "summary": "Dans le Panorama de la cybermenace 2025, l’Agence nationale de la sécurité des systèmes d’information (ANSSI) présente le bilan d’une […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l’administration des systèmes et réseaux."
        },
        {
          "date": "30 janvier 2026",
          "title": "La France prend la présidence du Groupe de travail sur la cybersécurité du G7",
          "source": "ANSSI",
          "url": "http://cyber.gouv.fr/actualites/la-france-prend-la-presidence-du-groupe-de-travail-sur-la-cybersecurite-du-g7/",
          "summary": "Face à l’intensification et à la diversification des cybermenaces, la cybersécurité constitue un enjeu stratégique majeur pour la sécurité nationale […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l’administration des systèmes et réseaux."
        },
        {
          "date": "20 mai 2026",
          "title": "La faille DirtyDecrypt menace les serveurs Linux : un PoC a été publié",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/la-faille-dirtydecrypt-menace-les-serveurs-linux-un-poc-a-ete-publie/",
          "summary": "Découvrez DirtyDecrypt, une nouvelle faille Linux (CVE-2026-31635) correspondant à une élévation de privilèges en local. Elle permet d’obtenir les droits root.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l’administration des systèmes et réseaux."
        }
      ]
    },
    "intelligence-artificielle": {
      "title": "Intelligence artificielle",
      "subtitle": "Usages, risques et enjeux de l’IA suivis depuis des sources spécialisées françaises et internationales.",
      "objective": "Cette veille me permet de suivre les évolutions de l’intelligence artificielle dans un cadre professionnel : nouveaux usages, risques de sécurité, agents autonomes, conformité et impacts sur les outils informatiques.",
      "interest": "L’intérêt de ce sujet est de garder une vision réaliste de l’IA : à la fois ses apports pour les métiers de l’IT et les nouveaux risques qu’elle introduit en matière de sécurité, d’automatisation et de gouvernance.",
      "sources": [
        {
          "name": "IT-Connect",
          "type": "Presse technique",
          "url": "https://www.it-connect.fr/actualites/"
        },
        {
          "name": "01net",
          "type": "Presse tech française",
          "url": "https://www.01net.com/actualites/"
        },
        {
          "name": "Le Monde Informatique",
          "type": "Presse IT professionnelle",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-intelligence-artificielle-ia-1.html"
        }
      ],
      "entries": [
        {
          "date": "19 mai 2026",
          "title": "+563 % pour Chrome, +180 % pour VMware : l’IA provoque un tsunami historique de failles",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/comment-ia-provoque-un-tsunami-historique-de-failles/",
          "summary": "L’IA accélère la découverte de vulnérabilités à une échelle inédite, entraînant une explosion des CVE en 2026 dans les logiciels open source comme propriétaires. Un défi majeur pour les équipes IT.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l’intelligence artificielle."
        },
        {
          "date": "20 mai 2026",
          "title": "L’IA générative s’impose dans les entreprises françaises en 2026",
          "source": "01net",
          "url": "https://www.01net.com/actualites/intelligence-artificielle/",
          "summary": "Les usages professionnels de l’IA générative se multiplient dans les PME et grands groupes français : automatisation des tâches, assistance au code, gestion documentaire. Le point sur l’adoption en entreprise.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l’intelligence artificielle."
        },
        {
          "date": "15 mai 2026",
          "title": "Agents IA autonomes : opportunités et risques pour les DSI",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-intelligence-artificielle-ia-1.html",
          "summary": "Les agents IA capables d’agir de façon autonome sur des systèmes d’information soulèvent de nouvelles questions de gouvernance, de sécurité et de responsabilité pour les directions informatiques.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l’intelligence artificielle."
        },
        {
          "date": "12 mai 2026",
          "title": "Réglementation IA en Europe : ce que l’AI Act change concrètement pour les entreprises",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-intelligence-artificielle-ia-1.html",
          "summary": "L’entrée en vigueur progressive de l’AI Act européen impose de nouvelles obligations aux entreprises utilisant ou développant des systèmes d’IA. Tour d’horizon des impacts pour les professionnels IT.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l’intelligence artificielle."
        }
      ]
    }
  }
};
