window.VEILLE_DATA = {
  "updatedAt": "2026-09-12",
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
          "date": "9 septembre 2026",
          "title": "Magento : la faille zero-day StyleSmuggler est corrigée, mais des boutiques sont déjà piratées",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/magento-adobe-commerce-faille-zero-day-stylesmuggler-cve-2026-75650/",
          "summary": "Exploitée depuis le 4 septembre 2026, la faille StyleSmuggler (CVE-2026-75650) permet de pirater Magento et Adobe Commerce. Un patch est disponible.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "10 septembre 2026",
          "title": "ShieldCrash : cette nouvelle zero-day Microsoft Defender offre un accès système",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/shieldcrash-zero-day-defender-contournement-patch-shieldbreak/",
          "summary": "L’exploit ShieldCrash contourne le correctif de Microsoft pour la faille ShieldBreak et permet de lire n’importe quel fichier sur Windows et Windows Server.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "10 septembre 2026",
          "title": "Android : le patch de septembre 2026 corrige une faille critique exploitable à distance sans interaction",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/android-patch-septembre-2026-faille-critique-rce/",
          "summary": "Google a publié le bulletin de sécurité de septembre 2026 pour Android : il corrige 180 vulnérabilités, dont une faille critique exploitable à distance.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "21 juillet 2026",
          "title": "Exigences du CRA : processus de notification pour les organismes notifiés",
          "source": "ANSSI",
          "url": "http://cyber.sites.beta.gouv.fr/actualites/exigences-du-cra-processus-de-notification-pour-les-organismes-notifies/",
          "summary": "Dans un contexte marqué par l’exploitation croissante de vulnérabilités affectant des produits numériques ayant un niveau de cybersécurité insuffisant, le […]",
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
          "date": "11 septembre 2026",
          "title": "Course à l’IA : OpenAI se dit prêt à lever le pied, mais refuse d’être le seul",
          "source": "01net",
          "url": "https://www.01net.com/actualites/course-a-lia-openai-se-dit-pret-a-lever-le-pied-mais-refuse-detre-le-seul.html",
          "summary": "Alors que les alertes sur les dérives potentielles de l’intelligence artificielle se multiplient, OpenAI se dit prêt à lever le pied. Sam Altman souhaite toutefois que sa société ne soit pas la seule à ralentir ses activités. Le PDG appe...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "11 septembre 2026",
          "title": "ChatGPT : OpenAI ne suit plus et suspend les abonnements Pro",
          "source": "01net",
          "url": "https://www.01net.com/actualites/chatgpt-openai-ne-suit-plus-et-suspend-les-abonnements-pro.html",
          "summary": "Une semaine après avoir proclamé « le début de l'ère de l'AGI », OpenAI ferme la porte à ceux qui voulaient payer 200 dollars par mois pour y entrer. Les serveurs, eux, n'avaient visiblement pas lu le communiqué.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "12 septembre 2026",
          "title": "Cette start-up française veut que vous trouviez votre logement en discutant simplement avec ChatGPT",
          "source": "01net",
          "url": "https://www.01net.com/actualites/cette-start-up-francaise-veut-que-vous-trouviez-votre-logement-en-discutant-simplement-avec-chatgpt.html",
          "summary": "La start-up française Omny lance sur ChatGPT une application permettant de mener toute une recherche immobilière par conversation, jusqu'à la prise de rendez-vous avec un agent.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "12 septembre 2026",
          "title": "Selon Anthropic, les plombiers et électriciens pourraient être les grands gagnants de l’IA",
          "source": "01net",
          "url": "https://www.01net.com/actualites/plombiers-electriciens-pourraient-grands-gagnants-ia.html",
          "summary": "Le créateur de Claude a modélisé l'économie américaine de 2030 : dans tous les cas, le pays s'enrichit. Pour les diplômés derrière un écran, c'est une autre histoire. Et les prophéties de son propre PDG y laissent des plumes.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
