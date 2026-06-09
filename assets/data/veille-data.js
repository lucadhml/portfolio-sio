window.VEILLE_DATA = {
  "updatedAt": "2026-06-09",
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
          "date": "8 juin 2026",
          "title": "Ces trois failles offrent un accès root sur UniFi OS Server : patchez !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/ces-trois-failles-offrent-un-acces-root-sur-unifi-os-server-patchez/",
          "summary": "CVE-2026-34908, CVE-2026-34909, et CVE-2026-34910 : exploitées ensemble, ces trois failles permettent d’exécuter du code en tant que root sur UniFi OS Server.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "3 juin 2026",
          "title": "VS Code : un chercheur publie une faille zero-day pour punir Microsoft",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/vs-code-un-chercheur-publie-une-faille-zero-day-pour-punir-microsoft/",
          "summary": "Un chercheur en sécurité a divulgué une faille de sécurité zero-day affectant Visual Studio Code et plus particulièrement la version web via github.dev.",
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
          "date": "8 juin 2026",
          "title": "Apple lance enfin Siri AI : qu’est-ce que c’est ?",
          "source": "01net",
          "url": "https://www.01net.com/actualites/apple-rend-enfin-siri-intelligent-avec-siri-ai-mais-pas-tout-de-suite-en-europe.html",
          "summary": "Siri va subir une transformation majeure en 2026 avec l'intégration de l'IA générative et de Gemini, offrant une expérience utilisateur améliorée. L'assistant bénéficiera d'un nouveau look, d'une voix ajustable et d'une meilleure compréh...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "9 juin 2026",
          "title": "Le ChatGPT tel qu’on le connaît va bientôt disparaître",
          "source": "01net",
          "url": "https://www.01net.com/actualites/le-chatgpt-tel-quon-le-connait-va-bientot-disparaitre.html",
          "summary": "OpenAI s'appelait ainsi parce que l'IA devait être ouverte à tous. En 2026, la version gratuite de ChatGPT va afficher de la publicité, et l'interface chat est officiellement « morte ».",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "9 juin 2026",
          "title": "Samsung veut supprimer une étape agaçante pour parler aux IA : cette nouveauté pourrait faire la différence",
          "source": "01net",
          "url": "https://www.01net.com/actualites/samsung-veut-supprimer-une-etape-agacante-pour-parler-aux-ia-cette-nouveaute-pourrait-faire-la-difference.html",
          "summary": "Samsung simplifie l'accès à Bixby sur le Galaxy S26 avec One UI 9, ajoutant une option de déclenchement par geste. La nouvelle fonctionnalité Gesture Wake-up active Bixby automatiquement lorsque le téléphone est approché du visage. Cette...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "8 juin 2026",
          "title": "Coup de sang sur GitHub autour de Rsync et de l’utilisation de l’IA Claude",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/coup-de-sang-sur-github-autour-de-rsync-et-de-lutilisation-de-ia-claude/",
          "summary": "Rsync : une mise à jour perturbe les sauvegardes incrémentales, révélant des commits co-écrits avec l’IA Claude d’Anthropic. Qu’en est-il ?",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
