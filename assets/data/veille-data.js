window.VEILLE_DATA = {
  "updatedAt": "2026-06-11",
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
          "date": "10 juin 2026",
          "title": "Google Chrome : 74 vulnérabilités patchées, dont une faille zero-day déjà exploitée !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/google-chrome-74-vulnerabilites-patchees-dont-une-faille-zero-day-deja-exploitee/",
          "summary": "Mise à jour Google Chrome : 74 vulnérabilités corrigées, dont la CVE-2026-11645, une faille zero-day déjà exploitée. Voici comment vous protéger.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "10 juin 2026",
          "title": "Patch Tuesday – Juin 2026 : 200 failles de sécurité patchées, dont 3 zero-day",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/patch-tuesday-juin-2026-200-failles-de-securite-patchees-dont-3-zero-day/",
          "summary": "Le programme du Patch Tuesday de juin 2026 publié par Microsoft est très chargé : 200 failles de sécurité ont été corrigées, dont 3 failles zero-day.",
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
          "date": "11 juin 2026",
          "title": "L’autre entreprise du PDG d’OpenAI est dans une mauvaise passe",
          "source": "01net",
          "url": "https://www.01net.com/actualites/lautre-entreprise-du-pdg-dopenai-est-dans-une-mauvaise-passe.html",
          "summary": "Il y a des semaines où la fortune sourit d'un côté du couloir et grimace de l'autre. Pendant qu'OpenAI déposait discrètement son dossier d'entrée en Bourse, promesse de l'une des plus grosses introductions de l'histoire de la tech, l'aut...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "11 juin 2026",
          "title": "Qui va gagner la Coupe du Monde 2026 ? On a posé la question à 5 IA, voici leurs pronostics",
          "source": "01net",
          "url": "https://www.01net.com/actualites/qui-va-gagner-coupe-monde-2026-pose-question-cinq-ia-voici-pronostics.html",
          "summary": "La Coupe du Monde 2026 débute ce 11 juin. Avant le coup d’envoi du premier match, on a demandé à cinq intelligences artificielles de prédire l’intégralité de la compétition, des phases de groupes jusqu’à la finale. Notre objectif est de...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "10 juin 2026",
          "title": "Google déploie trois nouveautés majeures pour Google Home",
          "source": "01net",
          "url": "https://www.01net.com/actualites/google-deploie-trois-nouveautes-majeures-pour-google-home.html",
          "summary": "Grâce à une nouvelle mise à jour, les utilisateurs de Google Home pourront contrôler l’affichage des contenus multimédia par la voix. Les appareils Nest compatibles avec Gemini proposeront par ailleurs un suivi interactif et personnalisé...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "10 juin 2026",
          "title": "Insta360 s’allie à Leica pour réinventer la caméra de poche et faire trembler DJI",
          "source": "01net",
          "url": "https://www.01net.com/actualites/insta360-sallie-a-leica-pour-reinventer-la-camera-de-poche-et-faire-trembler-dji.html",
          "summary": "Insta360 lance la Luna Ultra, une caméra gimbal 8K conçue avec Leica. Capteur 1 pouce, écran détachable et IA, on vous dévoile toutes les caractéristiques de la rivale de DJI.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
