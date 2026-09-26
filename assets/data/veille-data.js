window.VEILLE_DATA = {
  "updatedAt": "2026-09-26",
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
          "date": "24 septembre 2026",
          "title": "Veeam Agent pour Windows : la faille CVE-2026-32996 offre les privilèges SYSTEM, un exploit est public",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/veeam-agent-windows-faille-cve-2026-32996-privileges-system/",
          "summary": "Un exploit public cible la faille CVE-2026-32996 de Veeam Agent pour Windows, qui offre les privilèges SYSTEM et qui serait exploitée activement.",
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
          "date": "24 septembre 2026",
          "title": "GLPI 11.0.9 et 10.0.27 : 12 failles patchées et un rythme de mises à jour qui s’accélère",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/glpi-11-0-9-10-0-27-failles-securite-patch/",
          "summary": "GLPI 11.0.9 et 10.0.27 corrigent 12 failles, dont une injection SQL sans authentification. Teclib’ annonce un patch de sécurité toutes les deux semaines.",
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
          "date": "26 septembre 2026",
          "title": "ChatGPT a tenté de pirater plusieurs sites du gouvernement américain",
          "source": "01net",
          "url": "https://www.01net.com/actualites/ia-openai-chatgpt-sonde-sites-gouvernement-americain.html",
          "summary": "Des agents IA d'OpenAI ont fouillé plusieurs sites du gouvernement américain cet été. Le ministère de l'Éducation, le Bureau du recensement et la gendarme boursier sont concernés. OpenAI assure qu'aucune donnée n'a été volée, mais reconn...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "25 septembre 2026",
          "title": "Jev : cette IA qui ne génère aucun texte défie les LLM",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/jev-typesafe-ia-decisions-typees-llm/",
          "summary": "Jev de TypeSafe AI renvoie des décisions et des probabilités au lieu de texte. Tarif, latence, limites et différences avec les LLM d’OpenAI et Anthropic.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "25 septembre 2026",
          "title": "Microsoft dévoile son nouveau Copilot, une « super app » pour toutes ses IA",
          "source": "01net",
          "url": "https://www.01net.com/actualites/microsoft-devoile-son-nouveau-copilot-une-super-app-pour-toutes-ses-ia.html",
          "summary": "Microsoft vient d’annoncer l’arrivée d’une nouvelle version de son Copilot. Destiné principalement aux entreprises, ce nouvel assistant se présentera désormais comme une plateforme unifiée regroupant tous ses outils d’intelligence artifi...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "25 septembre 2026",
          "title": "Un agent IA d’OpenAI a piraté un portail du gouvernement australien",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/openai-agent-ia-portail-medicare-australie/",
          "summary": "Un agent IA d’OpenAI a accédé à des fichiers non publics d’un portail Medicare australien. OpenAI a mis près de trois mois à prévenir le gouvernement.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
