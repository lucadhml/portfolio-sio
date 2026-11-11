window.VEILLE_DATA = {
  "updatedAt": "2026-11-11",
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
          "date": "11 novembre 2026",
          "title": "Patch Tuesday – Novembre 2026 : 1 093 failles corrigées, dont une faille zero-day dans Outlook",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/patch-tuesday-novembre-2026-recapitulatif/",
          "summary": "Microsoft a corrigé 1 093 failles avec le Patch Tuesday de novembre 2026. Une faille zero-day est déjà exploitée dans Outlook : voici le récapitulatif complet.",
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
          "date": "21 janvier 2026",
          "title": "Vulnérabilité dans telnetd (21 janvier 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-003/",
          "summary": "Le 20 janvier 2026, les détails de la vulnérabilité CVE-2026-24061, affectant *telnetd*, ont été publiés. Cette vulnérabilité permet à un attaquant de contourner l'authentification et de se connecter à une machine vulnérable en tant que...",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "2 avril 2026",
          "title": "Expiration de certificats Secure Boot en juin 2026 (02 avril 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-014/",
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
          "date": "10 novembre 2026",
          "title": "Claude Fable 5.2 a codé un système d’exploitation en 8 jours avec plus de 1 000 sous-agents",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/claude-fable-5-2-systeme-exploitation-1000-sous-agents/",
          "summary": "Anthropic a dévoilé Claude Fable 5.2 (et Mythos 5.2), et à cette occasion, l’IA a créée un système d’exploitation en huit jours avec plus de 1 000 sous-agents.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "11 novembre 2026",
          "title": "Mercedes lance une IA embarquée qui fonctionne même sans réseau : ce qui change pour les conducteurs",
          "source": "01net",
          "url": "https://www.01net.com/actualites/mercedes-nouvelle-ia-embarquee-fonctionne-sans-reseau-change-conducteurs.html",
          "summary": "Mercedes voit plus loin pour ses futurs modèles avec une nouvelle IA plus performante. Conçu avec l’entreprise américaine Liquid AI, ce dispositif pourra fonctionner à bord en circuit fermé sans avoir à passer par le cloud, ce qui apport...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "11 novembre 2026",
          "title": "Claude « copie » Office avec Sheets et Whiteboards : Anthropic attaque Microsoft sur son propre terrain",
          "source": "01net",
          "url": "https://www.01net.com/actualites/claude-copie-office-avec-sheets-et-whiteboards-anthropic-attaque-microsoft-sur-son-propre-terrain.html",
          "summary": "Anthropic a lancé Claude Sheet et Claude Whiteboards, deux outils en bêta qui transforment Claude en une suite bureautique. De quoi marcher sur les platebandes d'un certain Microsoft, qui intègre pourtant Claude Cowork dans Microsoft 365...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "11 novembre 2026",
          "title": "Le Pixel 10a joue les kamikazes et sacrifie 37% de son prix (AMOLED, 120 Hz, Tensor G4, Gemini) 💣",
          "source": "01net",
          "url": "https://www.01net.com/bons-plans/le-pixel-10a-joue-les-kamikazes-et-sacrifie-50-de-son-prix-amoled-120-hz-tensor-g4-gemini.html",
          "summary": "Le Single Day ne nous a visiblement pas encore livré toutes ses surprises, et ce 11 novembre au matin a levé le voile sur de nouvelles pépites. C'est l'occasion rêvée de vous équiper d'un téléphone fluide au quotidien, doué dans l'exerci...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
