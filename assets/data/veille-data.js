window.VEILLE_DATA = {
  "updatedAt": "2026-06-02",
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
          "date": "2 juin 2026",
          "title": "Windows Server – CVE-2026-41089 : cette faille critique dans Netlogon est exploitée !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/windows-server-cve-2026-41089-cette-faille-critique-dans-netlogon-est-exploitee/",
          "summary": "Le CCB a publié une alerte à propos de la CVE-2026-41089, une faille présente dans le service Netlogon de Windows Server : elle est exploitée par les pirates.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "1 juin 2026",
          "title": "Palo Alto – CVE-2026-0257 : cette faille dans le VPN est activement exploitée !",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/palo-alto-cve-2026-0257-cette-faille-dans-le-vpn-est-activement-exploitee/",
          "summary": "Une faille de sécurité découverte dans le service VPN GlobalProtect de Palo Alto Networks est actuellement exploitée par les cybercriminels : CVE-2026-0257.",
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
          "date": "2 juin 2026",
          "title": "Scandale de sécurité chez Meta : l’IA permettait de pirater n’importe quel compte Instagram en quelques clics",
          "source": "01net",
          "url": "https://www.01net.com/actualites/scandale-securite-meta-ia-permettait-pirater-nimporte-quel-compte-instagram-en-quelques-clics.html",
          "summary": "Meta AI, le chatbot de Meta, a souffert d'une grave faille de sécurité. En conversant avec l'IA, il était possible de pirater un compte Instagram en quelques clics. En demandant simplement à l'intelligence artificielle de changer l'adres...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "2 juin 2026",
          "title": "Pour financer l’IA, Google fait quelque chose de jamais vu depuis 2004",
          "source": "01net",
          "url": "https://www.01net.com/actualites/pour-financer-lia-google-fait-quelque-chose-de-jamais-vu-depuis-2004.html",
          "summary": "Alphabet, la maison mère de Google, annonce une augmentation de capital de 80 milliards de dollars pour financer ses infrastructures d'intelligence artificielle. Il s'agit de sa première vente d'actions importante depuis son introduction...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "1 juin 2026",
          "title": "La Maison Blanche veut garder le contrôle de Claude Mythos : l’UE toujours écartée",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/la-maison-blanche-veut-garder-le-controle-de-claude-mythos-lue-toujours-ecartee/",
          "summary": "Face à la puissance du modèle IA Claude Mythos d’Anthropic, l’administration américaine est opposée à ce que l’Union européenne puisse y avoir accès.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "2 juin 2026",
          "title": "Google Drive : ce nouveau bouton va ranger tous vos fichiers en vrac à votre place",
          "source": "01net",
          "url": "https://www.01net.com/actualites/google-drive-nouveau-bouton-va-ranger-fichiers-en-vrac-votre-place.html",
          "summary": "Google déploie une nouvelle fonctionnalité pour mettre de l’ordre dans vos fichiers sur Drive : Gemini propose désormais de classer automatiquement vos fichiers en analysant la structure de vos dossiers existants.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
