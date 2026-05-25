window.VEILLE_DATA = {
  "updatedAt": "2026-05-25",
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
          "date": "14 mai 2026",
          "title": "Vulnérabilité dans Microsoft Exchange Server – CVE-2026-42897 activement exploitée",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-005/",
          "summary": "Microsoft a publié un avis de sécurité concernant la CVE-2026-42897 affectant Exchange Server 2016, 2019 et SE. Elle permet à un attaquant non authentifié de déclencher une injection XSS à distance via Outlook Web Access. La vulnérabilité est activement exploitée.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et des réseaux."
        },
        {
          "date": "20 mai 2026",
          "title": "Windows : comment se protéger de la faille zero-day YellowKey ?",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/windows-comment-se-proteger-de-la-faille-zero-day-yellowkey/",
          "summary": "Une faille zero-day baptisée YellowKey affecte Windows et fait l'objet d'une exploitation active. IT-Connect présente les mesures de mitigation à appliquer en urgence en attendant le correctif officiel de Microsoft.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et des réseaux."
        },
        {
          "date": "19 mai 2026",
          "title": "Pierre & Vacances – Center Parcs : cyberattaque et fuite de 1,6 million de fichiers de réservation",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/actualites/actu-securite/",
          "summary": "Le groupe Pierre & Vacances – Center Parcs a été victime d'une cyberattaque entraînant la fuite de données relatives à 1,6 million de fichiers de réservation. Cet incident illustre les risques persistants pesant sur les systèmes d'information d'entreprise.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et des réseaux."
        },
        {
          "date": "6 mai 2026",
          "title": "Publication du rapport d'activité 2025 de l'ANSSI",
          "source": "ANSSI",
          "url": "https://cyber.gouv.fr/actualites/publication-du-rapport-dactivite-2025-de-lanssi/",
          "summary": "L'ANSSI publie son rapport d'activité 2025 et présente le Référentiel Cyber France (ReCyF), un ensemble de mesures recommandées pour atteindre les objectifs de sécurité fixés par la directive NIS 2 dans les organisations françaises.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et des réseaux."
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
          "date": "22 mai 2026",
          "title": "Agents IA : une faille invisible dans les systèmes d'information",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/les-dossiers/lire-agents-ia-une-faille-invisible-dans-les-systemes-d-information-1698.html",
          "summary": "Les agents IA autonomes, capables d'enchaîner des actions sans intervention humaine (interroger des bases de données, appeler des API, exécuter du code), introduisent de nouvelles surfaces d'attaque invisibles dans les systèmes d'information des entreprises.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "20 mai 2026",
          "title": "La demande en compétence agentique bondit de 60 % en France",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-la-demande-en-competence-agentique-bondit-de-60-en-france-99943.html",
          "summary": "Selon le rapport Tech Trends 2026, la demande de profils maîtrisant les agents IA a progressé de 60 % en un an en France. D'ici 2028, les grandes entreprises américaines déploieront chacune plus de 150 000 agents IA, selon Gartner.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "15 mai 2026",
          "title": "LLM et agents IA : quelles évolutions à venir ?",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-llm-et-agents-ia-quelles-evolutions-a-venir-99726.html",
          "summary": "Les futurs modèles de langage apprendront à la volée en temps réel, en entrelacant informations numériques et données du monde réel. Cette évolution permettra aux LLM de piloter des actions robotiques et de s'adapter dynamiquement à leur environnement.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "12 mai 2026",
          "title": "Cybermenaces pilotées par l'IA : quelle stratégie de défense ?",
          "source": "Le Monde Informatique",
          "url": "https://www.lemondeinformatique.fr/actualites/lire-cybermenaces-pilotees-par-l-ia-quelle-strategie-de-defense-99592.html",
          "summary": "L'IA générative est désormais exploitée pour automatiser et sophistiquer les cyberattaques. Cet article explore les stratégies de défense adaptées face à des menaces pilotées par l'IA, incluant détection comportementale et réponse automatisée aux incidents.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
