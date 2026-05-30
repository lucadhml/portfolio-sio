window.VEILLE_DATA = {
  "updatedAt": "2026-05-30",
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
          "date": "26 mai 2026",
          "title": "Faille RCE dans SharePoint : Microsoft publie un patch pour la CVE-2026-45659",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/faille-rce-sharepoint-patch-cve-2026-45659/",
          "summary": "Microsoft a publié un nouveau correctif de sécurité pour patcher une faille de sécurité RCE affectant plusieurs versions de SharePoint : CVE-2026-45659.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "27 mai 2026",
          "title": "Rocky Linux : un nouveau dépôt optionnel pour patcher les failles zero-day",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/rocky-linux-un-nouveau-depot-optionnel-pour-patcher-les-failles-zero-day/",
          "summary": "Rocky Linux a un nouveau dépôt optionnel disponible pour distribuer des patchs de sécurité (hotfix) afin de protéger les machines des failles zero-day.",
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
          "date": "28 mai 2026",
          "title": "« Développer nos propres puces, ça devrait arriver à un moment donné » : Mistral AI pourrait bientôt se lancer dans les semi-conducteurs",
          "source": "01net",
          "url": "https://www.01net.com/actualites/developper-nos-propres-puces-ca-devrait-arriver-a-un-moment-donne-mistral-ai-pourrait-bientot-se-lancer-dans-les-semi-conducteurs.html",
          "summary": "Après les modèles de langage et les centres de données, la championne française de l'IA générative Mistral AI envisage de développer ses propres puces électroniques.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "29 mai 2026",
          "title": "Le nouveau Siri se dévoile en images deux semaines avant la WWDC",
          "source": "01net",
          "url": "https://www.01net.com/actualites/le-nouveau-siri-se-devoile-en-images-deux-semaines-avant-la-wwdc.html",
          "summary": "iOS 27 et son nouveau Siri se dévoilent avant la WWDC : IA générative, app dédiée, appareil photo repensé. Mais combien de ces fonctionnalités arriveront vraiment en Europe ?",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "28 mai 2026",
          "title": "Airbus choisit Mistral AI pour propulser l’IA dans ses avions et ses systèmes de défense",
          "source": "01net",
          "url": "https://www.01net.com/actualites/airbus-choisit-mistral-ai-propulser-ia-avions-systemes-defense.html",
          "summary": "Trois ans et déjà dans les cockpits. La startup française vient de décrocher l'accès aux quatre divisions d'Airbus, et elle n'a pas l'intention de s'arrêter là.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "29 mai 2026",
          "title": "Claude Mythos : Anthropic va ouvrir les vannes de l’IA qui débusque les failles de sécurité",
          "source": "01net",
          "url": "https://www.01net.com/actualites/claude-mythos-anthropic-ouvrir-vannes-ia-debusque-failles-de-securite.html",
          "summary": "Après plusieurs semaines d'accès restreint, Anthropic va ouvrir les portes de Claude Mythos à tous ses clients. Ce modèle d'IA a déjà permis de débusquer plus de 10 000 failles de sécurité. Les équipes de cybersécurité doivent se prépare...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
