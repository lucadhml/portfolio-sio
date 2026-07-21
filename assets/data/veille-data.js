window.VEILLE_DATA = {
  "updatedAt": "2026-07-21",
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
          "date": "11 mars 2026",
          "title": "Panorama de la cybermenace 2025 : La France toujours sous la pression des cyber attaquants",
          "source": "ANSSI",
          "url": "http://cyber.sites.beta.gouv.fr/actualites/panorama-de-la-cybermenace-2025/",
          "summary": "Dans le Panorama de la cybermenace 2025, l’Agence nationale de la sécurité des systèmes d’information (ANSSI) présente le bilan d’une […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "21 juillet 2026",
          "title": "HollowByte : une faille DoS dans OpenSSL corrigée en silence, sans CVE",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/openssl-hollowbyte-faille-dos-11-octets/",
          "summary": "La faille HollowByte sature la mémoire d’un serveur OpenSSL avec un paquet de 11 octets. Corrigée en silence depuis la version 4.0.1, et sans aucun CVE.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "20 juillet 2026",
          "title": "NGINX – CVE-2026-42533 : cette faille peut faire planter votre serveur Web",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/nginx-cve-2026-42533-faille-critique-map-regex/",
          "summary": "F5 a corrigé la CVE-2026-42533, une faille critique de NGINX qui peut faire planter les workers et, parfois, permettre une exécution de code à distance.",
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
          "date": "20 juillet 2026",
          "title": "Google repousse la sortie de sa plus puissante IA : ce gros défaut qui bloque tout en interne",
          "source": "01net",
          "url": "https://www.01net.com/actualites/google-repousse-la-sortie-de-sa-plus-puissante-ia-ce-gros-defaut-qui-bloque-tout-en-interne.html",
          "summary": "Attendu pour juin 2026, le surpuissant modèle d'intelligence artificielle Gemini 3.5 Pro de Google accuse un sérieux retard. En interne, ses lacunes en programmation informatique inquiètent.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "20 juillet 2026",
          "title": "Anthropic annonce une mauvaise nouvelle aux utilisateurs de Claude Fable 5",
          "source": "01net",
          "url": "https://www.01net.com/actualites/anthropic-annonce-une-mauvaise-nouvelle-aux-utilisateurs-de-claude-fable-5.html",
          "summary": "Claude Fable 5 n'est plus accessible à tous les abonnés d'Anthropic. Le modèle d'IA le plus puissant de la gamme Claude reste inclus dans les forfaits Max et Team Premium, mais avec un accès plafonné. Les abonnés Pro et Team Standard, eu...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "20 juillet 2026",
          "title": "Nubia dévoile le smartphone du futur : un agent IA capable de tout faire à votre place",
          "source": "01net",
          "url": "https://www.01net.com/actualites/nubia-devoile-le-smartphone-du-futur-un-agent-ia-capable-de-tout-faire-a-votre-place.html",
          "summary": "Nubia a présenté le NaviX Ultra, un smartphone intégrant une intelligence artificielle au cœur même de son système. Ici, pas d’application dédiée ni de simples fonctionnalités IA ajoutées à l’appareil : le téléphone est entièrement pensé...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "20 juillet 2026",
          "title": "1Password laisse Claude se connecter à vos comptes, sans jamais lui confier vos mots de passe",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/1password-for-claude-connexion-sans-mot-de-passe/",
          "summary": "Avec 1Password for Claude, l’IA se connecte à vos comptes dans le navigateur, sans jamais voir vos mots de passe ni vos codes (MFA).",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
