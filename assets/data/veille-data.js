window.VEILLE_DATA = {
  "updatedAt": "2026-06-17",
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
          "date": "16 juin 2026",
          "title": "SearchLeak : la faille qui transformait Copilot en outil de vol de données en un clic",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/searchleak-la-faille-qui-transformait-copilot-en-outil-de-vol-de-donnees-en-un-clic/",
          "summary": "L’attaque SearchLeak détourne l’IA Microsoft Copilot Enterprise pour exfiltrer e-mails, fichiers OneDrive et SharePoint via une URL piégée (CVE-2026-42824).",
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
          "url": "http://cyber.sites.beta.gouv.fr/actualites/la-france-prend-la-presidence-du-groupe-de-travail-sur-la-cybersecurite-du-g7/",
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
          "date": "17 juin 2026",
          "title": "Après le suicide d’une utilisatrice de ChatGPT, OpenAI est la cible d’une nouvelle plainte",
          "source": "01net",
          "url": "https://www.01net.com/actualites/openai-de-nouveau-poursuivi-apres-suicide-utilisatrice-chatgpt.html",
          "summary": "Une Canadienne accuse ChatGPT d’avoir encouragé les idées suicidaires de sa fille avant son décès et poursuit OpenAI en justice.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "17 juin 2026",
          "title": "655 millions d’euros pour l’IA : le coup de force de la France à VivaTech vire à l’imbroglio géopolitique",
          "source": "01net",
          "url": "https://www.01net.com/actualites/655-millions-deuros-pour-lia-le-coup-de-force-de-la-france-a-vivatech-vire-a-limbroglio-geopolitique.html",
          "summary": "Juste à temps pour l'ouverture de Vivatech, le Premier ministre Sébastien Lecornu acte un virage souverain : 655 millions d'euros pour l'IA, un chatbot Mistral pour un million d'agents de l'État, et un calendrier de rupture avec l'améric...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "16 juin 2026",
          "title": "Facebook ajoute de l’IA à son moteur de recherche, comment ça marche ?",
          "source": "01net",
          "url": "https://www.01net.com/actualites/facebook-ia-moteur-recherche-comment-marche.html",
          "summary": "Meta déploie un mode IA dans le moteur de recherche Facebook. Cette fonctionnalité repose sur l’intelligence artificielle pour générer des réponses à partir des publications, groupes, reels et annonces marketplace.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "16 juin 2026",
          "title": "Apple explique enfin pourquoi Siri AI a pris autant de retard",
          "source": "01net",
          "url": "https://www.01net.com/actualites/apple-explique-enfin-pourquoi-siri-ai-a-pris-autant-de-retard.html",
          "summary": "Initialement, Apple prévoyait une mise à jour de Siri qui aurait permis quelques améliorations en matière d'IA. Après réflexion, l’entreprise à la pomme a opté pour une toute autre stratégie, à savoir une refonte de A à Z de Siri.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
