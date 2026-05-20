window.VEILLE_DATA = {
  "updatedAt": "2026-05-20",
  "methodologie": {
    "title": "Méthodologie de veille",
    "summary": "Ma veille technologique repose sur plusieurs sources complémentaires : IT-Connect et le CERT-FR pour la cybersécurité, MIT Technology Review et Korben pour l'IA. Chaque jour, un script récupère automatiquement les nouvelles publications, calcule un score de pertinence par mots-clés, et sélectionne les 4 meilleures entrées par thème.",
    "frequency": "Mise à jour automatique quotidienne",
    "tooling": [
      "IT-Connect, ANSSI, CERT-FR (cybersécurité)",
      "MIT Technology Review, Korben (IA)",
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
          "url": "https://cyber.gouv.fr/actualites"
        },
        {
          "name": "CERT-FR",
          "type": "Bulletins et alertes",
          "url": "https://www.cert.ssi.gouv.fr/actualite/"
        }
      ],
      "entries": [
        {
          "date": "18 mai 2026",
          "title": "Pwn2Own Berlin 2026 : 47 failles zero-day découvertes dans VMware, Windows, des outils IA, etc.",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/pwn2own-berlin-2026-47-failles-zero-day-decouvertes-dans-vmware-windows-des-outils-ia-etc/",
          "summary": "À l'occasion de l'édition 2026 du Pwn2Own de Berlin, les hackers ont pu découvrir 47 failles de sécurité zero-day au terme de trois jours de compétition.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "15 mai 2026",
          "title": "Exchange Server – CVE-2026-42897 : cette faille zero-day est déjà exploitée !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/exchange-server-cve-2026-42897-cette-faille-zero-day-est-deja-exploitee/",
          "summary": "La vulnérabilité CVE-2026-42897 affecte Exchange Server 2016, 2019 et SE. Découvrez les mesures d'urgence pour atténuer la menace sans patch officiel.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "15 mai 2026",
          "title": "Outlook – CVE-2026-40361 : cette faille zero-click menace les entreprises, patchez !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/outlook-cve-2026-40361-cette-faille-zero-click-menace-les-entreprises-patchez/",
          "summary": "Le Patch Tuesday de mai 2026 publié par Microsoft corrige une faille de type zero-click affectant Outlook (et Word) : CVE-2026-40361. Voici comment se protéger.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "14 mai 2026",
          "title": "NGINX Rift – CVE-2026-42945 : cette faille critique vieille de 18 ans menace vos serveurs Web",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/nginx-rift-cve-2026-42945-cette-faille-critique-de-18-ans-menace-vos-serveurs-web/",
          "summary": "La faille NGINX Rift présente dans le code depuis 18 ans permet à un attaquant non authentifié d'exécuter du code à distance ou de faire planter le serveur Web.",
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
          "name": "MIT Technology Review",
          "type": "Revue spécialisée IA",
          "url": "https://www.technologyreview.com/topic/artificial-intelligence/"
        },
        {
          "name": "Korben",
          "type": "Blog tech & IA",
          "url": "https://korben.info"
        }
      ],
      "entries": [
        {
          "date": "18 mai 2026",
          "title": "OpenAI confirme un vol de données lié à une attaque supply chain sur TanStack",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/openai-confirme-un-vol-de-donnees-lie-a-une-attaque-supply-chain-sur-tanstack/",
          "summary": "OpenAI a été victime d'une fuite de données suite à l'attaque ciblant TanStack : une mise à jour des applications est nécessaire sur Mac avant le 12 juin 2026.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "18 mai 2026",
          "title": "Pwn2Own Berlin 2026 : 47 failles zero-day découvertes dans VMware, Windows, des outils IA, etc.",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/pwn2own-berlin-2026-47-failles-zero-day-decouvertes-dans-vmware-windows-des-outils-ia-etc/",
          "summary": "À l'occasion de l'édition 2026 du Pwn2Own de Berlin, les hackers ont pu découvrir 47 failles de sécurité zero-day au terme de trois jours de compétition.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 mai 2026",
          "title": "OpenAI dégaine Daybreak : sa plateforme cybersécurité pour concurrencer Anthropic",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/openai-degaine-daybreak-sa-plateforme-cybersecurite-pour-concurrencer-anthropic/",
          "summary": "OpenAI se positionne face à Anthropic avec Daybreak, une plateforme intégrée de cybersécurité exploitant GPT-5.5 et Codex Security pour la cyberdéfense.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
