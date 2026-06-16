window.VEILLE_DATA = {
  "updatedAt": "2026-06-16",
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
          "date": "15 juin 2026",
          "title": "Emmanuel Macron réunit OpenAI, Anthropic et Google DeepMind à l’occasion du G7",
          "source": "01net",
          "url": "https://www.01net.com/actualites/emmanuel-macron-reunit-openai-anthropic-et-google-deepmind-a-loccasion-du-g7.html",
          "summary": "Pour son G7, Emmanuel Macron a réussi un joli coup de casting : les patrons d'OpenAI, de Google DeepMind et d'Anthropic réunis au bord du Léman. La France y joue son rang de futur pôle européen de l'intelligence artificielle, avec des mi...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "16 juin 2026",
          "title": "100 experts en cybersécurité protestent contre la suspension de Claude Fable 5 et Mythos 5",
          "source": "01net",
          "url": "https://www.01net.com/actualites/100-experts-cybersecurite-protestent-contre-suspension-claude-fable-5-mythos-5.html",
          "summary": "Une centaine d'experts en cybersécurité protestent contre l'interdiction des deux derniers Claude déployés par Anthropic. Dans une lettre ouverte, ils estiment que les États-Unis se tirent une balle dans le pied, et dans celui de la cybe...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "16 juin 2026",
          "title": "Google Messages prépare une fonction très intéressante pour les images que vous recevez",
          "source": "01net",
          "url": "https://www.01net.com/actualites/google-messages-prepare-fonction-tres-interessante-pour-images-que-vous-recevez.html",
          "summary": "Google Messages prépare un outil pour identifier les images générées ou retouchées par intelligence artificielle directement dans vos conversations.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "16 juin 2026",
          "title": "Nouvelle faille de Microsoft 365 Copilot : comment des pirates peuvent piller vos données en un « seul clic »",
          "source": "01net",
          "url": "https://www.01net.com/actualites/nouvelle-faille-microsoft-365-copilot-comment-pirates-peuvent-piller-donnees-seul-clic.html",
          "summary": "Une faille critique a été débusquée dans le fonctionnement de Microsoft 365 Copilot Enterprise. En bernant l'assistant IA, un attaquant peut voler emails, codes d'authentification et fichiers confidentiels en n'envoyant qu'un simple lien...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
