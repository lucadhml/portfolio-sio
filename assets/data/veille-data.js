window.VEILLE_DATA = {
  "updatedAt": "2026-06-08",
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
          "theme": "cybersecurite",
          "date": "3 juin 2026",
          "title": "Bulletin d'actualité CERTFR-2026-ACT-024 – Roundcube, GitLab, Veeam et Linux",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-024/",
          "summary": "Le CERT-FR recense plusieurs vulnérabilités critiques publiées en fin de semaine 22 : Roundcube expose des failles d'exécution de code à distance et d'injection SQL sans authentification (corrigées en 1.6.16 et 1.7.1), tandis que des correctifs urgents touchent également GitLab, Veeam Backup & Replication, Centreon Web et plusieurs distributions Linux (Ubuntu, Red Hat, Debian).",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "theme": "cybersecurite",
          "date": "28 mai 2026",
          "title": "CVE-2026-21643 – La faille critique de FortiClient EMS activement exploitée",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/cve-2026-21643-cette-faille-critique-dans-forticlient-ems-est-exploitee/",
          "summary": "La CVE-2026-21643 est une injection SQL critique dans FortiClient EMS de Fortinet, exploitable à distance sans authentification. Des cybercriminels l'exploitent activement pour prendre le contrôle de systèmes non patchés. Fortinet a publié un correctif d'urgence à appliquer sans délai.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "theme": "cybersecurite",
          "date": "4 juin 2026",
          "title": "CVE-2026-32746 – Les serveurs Linux menacés par une nouvelle faille Telnet",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/cve-2026-32746-les-serveurs-linux-menaces-par-une-nouvelle-faille-telnet/",
          "summary": "Une faille critique CVE-2026-32746 a été découverte dans GNU InetUtils, au niveau de l'implémentation Telnet. Elle permet l'exécution de code à distance sur les serveurs Linux exposés. IT-Connect détaille les versions affectées et les mesures de mitigation recommandées.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "theme": "cybersecurite",
          "date": "17 mars 2026",
          "title": "NIS 2 : l'ANSSI poursuit et renforce sa dynamique d'accompagnement",
          "source": "ANSSI",
          "url": "https://cyber.gouv.fr/actualites/nis-2-lanssi-poursuit-et-renforce-sa-dynamique-daccompagnement/",
          "summary": "L'ANSSI a réuni acteurs institutionnels, sectoriels et publics concernés par la directive NIS 2 pour encourager leur engagement dans la démarche de sécurisation nationale portée par le Référentiel Cyber France (ReCyF). Cette initiative vise à élever le niveau de sécurité numérique des entités françaises essentielles.",
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
          "theme": "intelligence-artificielle",
          "date": "3 juin 2026",
          "title": "OpenAI pousse les agents de codage vers l'orchestration",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-openai-pousse-les-agents-de-codage-vers-l-orchestration-100049.html",
          "summary": "OpenAI lance Frontier, une plateforme pour accompagner les entreprises dans la conception, le déploiement et la gestion d'agents IA de codage. En parallèle, la société a recruté Peter Steinberg, créateur d'OpenClaw, pour piloter sa stratégie d'agents personnels capables d'agir de façon autonome dans les environnements bureautiques.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "theme": "intelligence-artificielle",
          "date": "5 juin 2026",
          "title": "Polytechnique généralise l'enseignement de l'IA en 2e année",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-polytechnique-generalise-l-enseignement-de-l-ia-en-2e-annee-100277.html",
          "summary": "L'École Polytechnique intègre l'intelligence artificielle comme matière obligatoire en deuxième année du cycle ingénieur. Cette décision reflète la montée en puissance des compétences IA dans les formations d'élite françaises et signale l'importance croissante de ces savoirs dans tous les métiers de l'IT.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "theme": "intelligence-artificielle",
          "date": "22 mai 2026",
          "title": "Agents IA : une faille invisible dans les systèmes d'information",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/les-dossiers/lire-agents-ia-une-faille-invisible-dans-les-systemes-d-information-1698.html",
          "summary": "Les agents IA autonomes, capables d'enchaîner des actions sans intervention humaine (interroger des bases de données, appeler des API, exécuter du code), introduisent de nouvelles surfaces d'attaque invisibles dans les systèmes d'information des entreprises.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "theme": "intelligence-artificielle",
          "date": "20 mai 2026",
          "title": "DeepSeek taille son LLM V4 pour les usages IA pointus",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-deepseek-taille-son-llm-v4-pour-les-usages-ia-pointus-100019.html",
          "summary": "DeepSeek publie son LLM V4, optimisé pour les usages agentiques avec des coûts d'inférence significativement réduits. Ce modèle rivalise avec les solutions américaines et s'impose comme une alternative crédible pour les entreprises européennes cherchant à déployer de l'IA sans dépendance aux grands fournisseurs US.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
