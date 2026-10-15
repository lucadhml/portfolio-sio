window.VEILLE_DATA = {
  "updatedAt": "2026-10-15",
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
          "date": "14 octobre 2026",
          "title": "Patch Tuesday – Octobre 2026 : 1 407 failles corrigées, dont trois failles zero-day",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/patch-tuesday-octobre-2026-recapitulatif/",
          "summary": "Microsoft a corrigé 1 407 failles avec le Patch Tuesday d’octobre 2026, un nouveau record. Une faille zero-day est déjà exploitée : voici ce qu’il faut savoir.",
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
          "date": "14 octobre 2026",
          "title": "Patch Tuesday : Microsoft teste les cohortes de risque pour vous aider à trier plus de 1 400 CVE",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/microsoft-cohortes-de-risque-patch-tuesday/",
          "summary": "Microsoft propose les cohortes de risque pour prioriser les correctifs du Patch Tuesday. Découvrez ce nouveau principe qui reste tout de même perfectible.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "21 janvier 2026",
          "title": "Vulnérabilité dans telnetd (21 janvier 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-003/",
          "summary": "Le 20 janvier 2026, les détails de la vulnérabilité CVE-2026-24061, affectant *telnetd*, ont été publiés. Cette vulnérabilité permet à un attaquant de contourner l'authentification et de se connecter à une machine vulnérable en tant que...",
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
          "date": "14 octobre 2026",
          "title": "Scandale chez OpenAI : le FBI arrête un employé pour espionnage",
          "source": "01net",
          "url": "https://www.01net.com/actualites/scandale-chez-openai-le-fbi-arrete-un-employe-pour-espionnage.html",
          "summary": "Un sac oublié avec une carte d'identité, des recherches en ligne compromettantes et des modèles d'IA lâchés sur l'enquête : le dossier judiciaire visant un salarié d'OpenAI, arrêté par le FBI, frôle la parodie d'espionnage.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "13 octobre 2026",
          "title": "CyberXero : ce pirate a utilisé 51 agents Claude Code pour attaquer WordPress et l’Ukraine",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/cyberxero-claude-code-wordpress-energie-ukraine/",
          "summary": "Un pirate russophone a compromis 429 sites WordPress en 61 secondes et volé 628 000 fiches ukrainiennes avec l’aide de 51 agents Claude Code.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 octobre 2026",
          "title": "Frigos de supermarchés piratés : Claude a reproduit la cyberattaque en 28 minutes",
          "source": "01net",
          "url": "https://www.01net.com/actualites/frigos-de-supermarches-pirates-claude-a-reproduit-la-cyberattaque-en-28-minutes.html",
          "summary": "28 minutes. C'est le temps qu'il a fallu à Claude pour reproduire la cyberattaque qui a fait surchauffer les frigos de centaines de supermarchés français. L'expérimentation démontre que l'offensive était à la portée de n'importe quel cyb...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 octobre 2026",
          "title": "HomePod mini à 169 €, Apple TV à 349 € : les prix Apple s’envolent en France, et ce n’est peut-être pas fini",
          "source": "01net",
          "url": "https://www.01net.com/actualites/homepod-mini-a-169-e-apple-tv-a-349-e-les-prix-apple-senvolent-en-france-et-ce-nest-peut-etre-pas-fini.html",
          "summary": "Avec le HomePod mini 2 et la nouvelle Apple TV 4K, Apple poursuit la hausse de ses prix entamée en juin. En six ans, la petite enceinte est passée de 99 à 169 euros, et le prix d'entrée du boîtier TV a plus que doublé depuis 2022. Sans S...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
