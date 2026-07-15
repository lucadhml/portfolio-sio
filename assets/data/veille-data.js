window.VEILLE_DATA = {
  "updatedAt": "2026-07-15",
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
          "date": "15 juillet 2026",
          "title": "Microsoft dévoile son plus gros Patch Tuesday de l’histoire avec 570 failles et 3 zero-day",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/patch-tuesday-juillet-2026-570-failles-de-securite-corrigees-dont-3-zero-day/",
          "summary": "Microsoft signe le plus gros lot de correctifs de son histoire, avec trois failles zero-day dont deux exploitées, et au total 570 vulnérabilités patchées.",
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
          "date": "21 janvier 2026",
          "title": "Vulnérabilité dans telnetd (21 janvier 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-003/",
          "summary": "Le 20 janvier 2026, les détails de la vulnérabilité CVE-2026-24061, affectant *telnetd*, ont été publiés. Cette vulnérabilité permet à un attaquant de contourner l'authentification et de se connecter à une machine vulnérable en tant que...",
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
          "date": "13 juillet 2026",
          "title": "WhatsApp a viré ChatGPT en janvier, l’Europe vient de l’y remettre de force",
          "source": "01net",
          "url": "https://www.01net.com/actualites/whatsapp-a-vire-chatgpt-en-janvier-leurope-vient-de-ly-remettre-de-force.html",
          "summary": "OpenAI annonce le retour de ChatGPT sur WhatsApp dans l'Union européenne, en Suisse, en Islande, au Liechtenstein et en Norvège. Une annonce qui fait suite à une décision antitrust de la Commission européenne contre Meta.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "13 juillet 2026",
          "title": "Test Geekom A9 Max 2026 Edition : un mini PC haut de gamme",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/test-geekom-a9-max-2026-edition/",
          "summary": "Test du Geekom A9 Max 2026 Edition : Ryzen AI 9 HX 470, NPU 55 TOPS, Radeon 890M. Ce qui change face à la génération 2025 et ce qu’il vaut pour l’IA locale.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "13 juillet 2026",
          "title": "Apple lancerait le produit le plus cher de son histoire en 2028",
          "source": "01net",
          "url": "https://www.01net.com/actualites/apple-lancerait-le-produit-le-plus-cher-de-son-histoire-en-2028.html",
          "summary": "Apple aurait décidé de laisser tomber les variantes haut de gamme de la puce M6 pour se concentrer sur les puces M7, davantage adaptées à l’intelligence artificielle. Cependant, le Mac Studio équipé de la puce M7 Ultra, prévu pour 2028,...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 juillet 2026",
          "title": "Vous retardez vos mises à jour Windows ? Microsoft épingle cette mauvaise habitude pour une bonne raison",
          "source": "01net",
          "url": "https://www.01net.com/actualites/vous-retardez-mises-jour-windows-microsoft-epingle-mauvaise-habitude-raison-serieuse.html",
          "summary": "Repousser la mise à jour Windows du mardi soir, c'était presque un art de vivre. Microsoft vient d'y mettre fin : trois jours de délai maximum, parce que les pirates ont désormais une IA plus rapide que votre procrastination.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
