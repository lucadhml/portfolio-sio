window.VEILLE_DATA = {
  "updatedAt": "2026-09-03",
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
          "date": "21 janvier 2026",
          "title": "Vulnérabilité dans telnetd (21 janvier 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-003/",
          "summary": "Le 20 janvier 2026, les détails de la vulnérabilité CVE-2026-24061, affectant *telnetd*, ont été publiés. Cette vulnérabilité permet à un attaquant de contourner l'authentification et de se connecter à une machine vulnérable en tant que...",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "2 septembre 2026",
          "title": "Exchange Server : près de 22 000 serveurs exposés sont vulnérables à la CVE-2026-62911",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/microsoft-exchange-cve-2026-62911/",
          "summary": "Exchange exposé sur Internet: tout savoir sur la CVE-2026-62911, les risques, les chiffres Shadowserver et les correctifs à appliquer rapidement.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "2 avril 2026",
          "title": "Expiration de certificats Secure Boot en juin 2026 (02 avril 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-014/",
          "summary": "Le démarrage sécurisé (UEFI Secure Boot) est une fonctionnalité de sécurité disponible sur les ordinateurs PC clients et serveurs depuis 2011. Son rôle est de sécuriser la séquence de démarrage de l’appareil, en vérifiant l’intégrité du...",
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
          "date": "2 septembre 2026",
          "title": "Anthropic dégaine 2 nouvelles versions de Claude, et elles font des prouesses",
          "source": "01net",
          "url": "https://www.01net.com/actualites/anthropic-degaine-2-nouvelles-versions-de-claude-et-elles-font-des-prouesses.html",
          "summary": "Anthropic vient de sortir deux nouveaux modèles d'IA pour animer Claude, à savoir Claude Fable 5.1 et Claude Mythos 5.1. Le duo s'est illustré par une série de prouesses dans le domaine de la cybersécurité et de la science. Ils sont auss...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "2 septembre 2026",
          "title": "DSA : l’Europe place ChatGPT, Reddit et Roblox sous surveillance renforcée",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/dsa-chatgpt-reddit-roblox-designation-vlop-vlose/",
          "summary": "La Commission européenne désigne ChatGPT comme grand moteur de recherche, Reddit et Roblox comme grandes plateformes. Quatre mois pour être conforme au DSA.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "3 septembre 2026",
          "title": "Pentest et IA : le dilemme de la souveraineté face à l’industrialisation des attaques",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/pentest-et-ia-le-dilemme-de-la-souverainete-face-a-lindustrialisation-des-attaques/",
          "summary": "Construire son agent d’audit : avantages, risques et cadres (MITRE ATLAS, OWASP) pour garder maîtrise et traçabilité. Quand l’IA rencontre le pentest.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "3 septembre 2026",
          "title": "642 km d’autonomie, recharge en 24 minutes et IA : le Renault Scénic reçoit une mise à jour majeure pour devenir imbattable",
          "source": "01net",
          "url": "https://www.01net.com/actualites/642-km-autonomie-recharge-24-minutes-ia-renault-scenic-recoit-mise-a-jour-majeure-imbattable.html",
          "summary": "Renault met à jour le Scénic en optimisant sensiblement sa technique. Si l’on ne peut pas parler de restylage, les évolutions sont suffisamment marquées pour faire du SUV français l'un des leaders du marché.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
