window.VEILLE_DATA = {
  "updatedAt": "2026-11-20",
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
          "date": "19 novembre 2026",
          "title": "VMware vCenter : une faille critique exploitée comme zero-day depuis septembre 2026",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/vmware-vcenter-cve-2026-123890-zero-day/",
          "summary": "Broadcom a corrigé la CVE-2026-123890, une faille critique dans VMware vCenter exploitée comme zero-day dès septembre 2026 d’après Mandiant.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "21 juillet 2026",
          "title": "Exigences du CRA : processus de notification pour les organismes notifiés",
          "source": "ANSSI",
          "url": "https://cyber.gouv.fr/actualites/exigences-du-cra-processus-de-notification-pour-les-organismes-notifies/",
          "summary": "Dans un contexte marqué par l’exploitation croissante de vulnérabilités affectant des produits numériques ayant un niveau de cybersécurité insuffisant, le […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "19 novembre 2026",
          "title": "PHP va corriger au moins une faille critique ce jeudi : préparez-vous à mettre à jour PHP 8.2 à 8.5",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/mise-a-jour-php-faille-critique-19-novembre-2026/",
          "summary": "Ce 19 novembre 2026, au moins une faille de sécurité critique sera corrigée dans les branches 8.2 à 8.5 de PHP, et sans doute la CVE-2026-115560.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "18 novembre 2026",
          "title": "NGINX2Root : deux failles critiques permettent de prendre le contrôle d’un serveur NGINX",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/nginx2root-failles-cve-2026-123007-rce/",
          "summary": "Failles NGINX : CVE-2026-123007 et CVE-2026-123633 permettent d’exécuter du code à distance via HTTP/2. Voici les versions à installer et comment vous protéger.",
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
          "date": "20 novembre 2026",
          "title": "Apple voudrait son propre agent IA autonome pour concurrencer ChatGPT, Claude et Gemini",
          "source": "01net",
          "url": "https://www.01net.com/actualites/apple-voudrait-son-propre-agent-ia-autonome-pour-concurrencer-chatgpt-claude-et-gemini.html",
          "summary": "Apple travaillerait d'arrache-pied sur un agent d'IA autonome qui serait capable d'utiliser un ordinateur. De quoi aller concurrencer OpenAI, Anthropic, Meta ou encore SpaceXAI, qui ont déjà leur agent respectif.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "20 novembre 2026",
          "title": "Le futur smartphone d’OpenAI aurait un point commun avec l’iPhone",
          "source": "01net",
          "url": "https://www.01net.com/actualites/le-futur-smartphone-dopenai-aurait-un-point-commun-avec-liphone.html",
          "summary": "Pour assembler son téléphone centré autour de ChatGPT, OpenAI aurait fait appel à FIH Mobile, une filiale de Foxconn. Ce dernier nom vous dit quelque chose ? Il s'agit du groupe chargé d'assembler les iPhone.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "20 novembre 2026",
          "title": "« Rien ne laisse à penser que les choses vont s’arranger » : face aux cyberattaques IA, la France contre-attaque",
          "source": "01net",
          "url": "https://www.01net.com/actualites/rien-ne-laisse-penser-choses-arranger-face-cyberattaques-ia-france-contre-attaque.html",
          "summary": "Le Premier ministre Sébastien Lecornu tire la sonnette d'alarme. Face à une menace cyber « particulièrement grave et inédite », dopée par l’intelligence artificielle, le gouvernement a détaillé son plan pour riposter. Alors que « rien ne...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "19 novembre 2026",
          "title": "Garlic LLM : cette application fait tourner une IA de 9 milliards de paramètres sur une PS4",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/garlic-llm-ia-locale-ps4/",
          "summary": "Garlic LLM fait tourner l’IA Qwen3.5-9B en local sur le GPU d’une PS4 débridée, sans Internet et à plus de 30 tokens par seconde. Voici ce qu’il faut savoir.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
