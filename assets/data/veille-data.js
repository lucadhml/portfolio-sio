window.VEILLE_DATA = {
  "updatedAt": "2026-08-04",
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
          "date": "30 juillet 2026",
          "title": "VMware : 3 failles critiques dans vCenter et ESX, dont une évasion de machine virtuelle",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/vmware-3-failles-critiques-vcenter-esx-juillet-2026/",
          "summary": "Le 29 juillet 2026, Broadcom a dévoilé cinq vulnérabilités dans les solutions VMware ESX, dont la CVE-2026-47876 qui est de type VM escape.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "11 mars 2026",
          "title": "Panorama de la cybermenace 2025 : La France toujours sous la pression des cyber attaquants",
          "source": "ANSSI",
          "url": "http://cyber.sites.beta.gouv.fr/actualites/panorama-de-la-cybermenace-2025/",
          "summary": "Dans le Panorama de la cybermenace 2025, l’Agence nationale de la sécurité des systèmes d’information (ANSSI) présente le bilan d’une […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "29 juillet 2026",
          "title": "Apple : plus de 200 failles patchées dans tous ses systèmes, dont 11 trouvées avec l’IA",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/apple-plus-de-200-failles-patchees-tous-ses-systemes/",
          "summary": "Patchs Apple : contournements de Gatekeeper, accès root sur macOS, faille dans le noyau. Aucun zero-day, mais onze failles découvertes avec l’IA.",
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
          "date": "3 août 2026",
          "title": "Le futur ChatGPT a résolu 10 énigmes mathématiques réputées insolubles",
          "source": "01net",
          "url": "https://www.01net.com/actualites/nouveau-chatgpt-resolu-10-enigmes-mathematiques-reputees-insolubles.html",
          "summary": "Astra, la prochaine intelligence artificielle qui animera ChatGPT, vient de réaliser plusieurs percées historiques. OpenAI révèle que l'IA a résolu dix problèmes mathématiques restés insolubles depuis des décennies. Ces prouesses n'ont c...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "3 août 2026",
          "title": "Chatbots, deepfakes, IA : l’Europe impose de nouvelles règles",
          "source": "01net",
          "url": "https://www.01net.com/actualites/chatbots-deepfakes-ia-leurope-impose-de-nouvelles-regles.html",
          "summary": "Depuis le 2 août 2026, l’article 50 de l’AI Act impose de nouvelles règles aux fournisseurs de systèmes d’IA et aux plateformes en ligne. Voici tout ce qu’il faut savoir.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "4 août 2026",
          "title": "Les IA d’OpenAI et d’Anthropic piratent des entreprises, l’Europe s’en mêle",
          "source": "01net",
          "url": "https://www.01net.com/actualites/ia-dopenai-anthropic-piratent-entreprises-bruxelles-mele.html",
          "summary": "Des agents IA censés jouer aux pirates dans des bacs à sable ont fini par s'attaquer à de vraies entreprises. La Commission européenne demande des explications, au moment précis où elle obtient le droit de frapper au portefeuille.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "29 juillet 2026",
          "title": "Piratage de Hugging Face : l’agent IA d’OpenAI a aussi détourné 4 comptes externes",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/openai-agent-ia-quatre-comptes-services-hugging-face/",
          "summary": "OpenAI révèle que ses modèles IA ont utilisé des identifiants exposés sur quatre services tiers pendant l’intrusion chez Hugging Face. Modal Labs est concerné.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
