window.VEILLE_DATA = {
  "updatedAt": "2026-11-26",
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
          "url": "https://cyber.gouv.fr/actualites/exigences-du-cra-processus-de-notification-pour-les-organismes-notifies/",
          "summary": "Dans un contexte marqué par l’exploitation croissante de vulnérabilités affectant des produits numériques ayant un niveau de cybersécurité insuffisant, le […]",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "25 novembre 2026",
          "title": "VMware vCenter et ESX : trois nouvelles failles critiques, cinq jours après la faille zero-day",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/vmware-vcenter-esx-cve-2026-123903-failles-novembre/",
          "summary": "Cinq jours après la zero-day CVE-2026-123890, Broadcom corrige 23 failles VMware, dont la CVE-2026-123903 dans vCenter et deux failles critiques dans ESX.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "23 novembre 2026",
          "title": "L’ANSSI accompagne les organisations dans leur sécurisation",
          "source": "ANSSI",
          "url": "https://cyber.gouv.fr/actualites/lanssi-accompagne-les-organisations-dans-leur-securisation/",
          "summary": "Toutes les organisations doivent faire face à de potentielles cyberattaques. Relevez votre niveau de sécurité avec le parcours de cybersécurité.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "26 novembre 2026",
          "title": "Jusqu’à 50 navires piratés via des failles FortiGate : l’Iran soupçonné par les États-Unis",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/navires-pirates-iran-fortigate/",
          "summary": "Pétroliers, méthanier : jusqu’à 50 navires auraient subi une cyberattaque via des pare-feu FortiGate non patchés. Washington soupçonne l’Iran.",
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
          "date": "26 novembre 2026",
          "title": "Vous demandez des conseils médicaux à ChatGPT ? Attention, l’IA risque de « vous mettre en danger »",
          "source": "01net",
          "url": "https://www.01net.com/actualites/vous-demandez-des-conseils-medicaux-a-chatgpt-attention-lia-risque-de-vous-mettre-en-danger.html",
          "summary": "L’ANSM alerte sur les dangers de demander des conseils médicaux à une IA lors de la prise de médicaments, après avoir recensé plusieurs cas de surdosage liés à des indications erronées. Ce type de pratique peut également mener à l'interr...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "24 novembre 2026",
          "title": "rust-anything : cet outil open source aide les agents IA à réécrire vos applications en Rust",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/rust-anything-reecrire-application-rust-agents-ia/",
          "summary": "Grâce à rust-anything, vous pouvez piloter un agent IA pour réécrire en Rust une application, tout en vérifiant chaque étape pour vous assurer du résultat.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "26 novembre 2026",
          "title": "Claude : les artefacts peuvent désormais être installés comme des applications sur Windows et Mac",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/claude-artefacts-applications-mac-windows/",
          "summary": "Anthropic lance Install as app : les artefacts de Claude s’installent comme des applications Mac et Windows, avec un accès complet possible à l’ordinateur.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "25 novembre 2026",
          "title": "Cyberattaque Commission européenne : les noms et adresses e-mail des utilisateurs d’EU Academy ont fuité",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/eu-academy-fuite-donnees-cyberattaque-commission-europeenne/",
          "summary": "La Commission européenne confirme que la cyberattaque assistée par l’IA a touché EU Academy : noms et e-mails des utilisateurs ont fuité.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
