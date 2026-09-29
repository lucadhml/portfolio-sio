window.VEILLE_DATA = {
  "updatedAt": "2026-09-29",
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
          "date": "28 septembre 2026",
          "title": "« Éteignez vos NetScaler » : Citrix confirme 2 failles zero-day critiques déjà exploitées",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/citrix-netscaler-cve-2026-88771-cve-2026-88772-zero-day-exploitees/",
          "summary": "Citrix confirme l’exploitation de deux nouvelles failles zero-day critiques dans NetScaler ADC et Gateway. Voici les versions à installer pour se protéger.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "21 janvier 2026",
          "title": "Vulnérabilité dans telnetd (21 janvier 2026)",
          "source": "CERT-FR",
          "url": "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2026-ACT-003/",
          "summary": "Le 20 janvier 2026, les détails de la vulnérabilité CVE-2026-24061, affectant *telnetd*, ont été publiés. Cette vulnérabilité permet à un attaquant de contourner l'authentification et de se connecter à une machine vulnérable en tant que...",
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
          "date": "29 septembre 2026",
          "title": "OpenAI annule la sortie du nouveau ChatGPT pour « garantir la sécurité » de ses IA",
          "source": "01net",
          "url": "https://www.01net.com/actualites/openai-annule-sortie-nouveau-chatgpt-garantir-securite.html",
          "summary": "OpenAI a décidé de ne pas lancer GPT-6.1 Astra, le prochain grand modèle d’IA qui doit animer ChatGPT, prévu en octobre. Selon le géant de l'IA, il ne respectait pas ses exigences de sécurité. L’annonce survient dans un climat de fortes...",
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
          "date": "28 septembre 2026",
          "title": "Scandale chez OpenAI : ChatGPT a publié les images de certains utilisateurs sur Internet",
          "source": "01net",
          "url": "https://www.01net.com/actualites/scandale-chez-openai-chatgpt-a-publie-les-images-de-certains-utilisateurs-sur-internet.html",
          "summary": "Des agents de ChatGPT ont publié sur le Web des photos envoyées par des utilisateurs, de leur propre initiative. OpenAI a retiré l'essentiel des fichiers, sans pouvoir prévenir les personnes concernées.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "28 septembre 2026",
          "title": "« Un milliard de morts » : Bill Gates tire la sonnette d’alarme au sujet de l’IA",
          "source": "01net",
          "url": "https://www.01net.com/actualites/milliard-morts-bill-gates-tire-sonnette-alarme-sujet-ia.html",
          "summary": "À son tour, Bill Gates tire la sonnette d'alarme sur l’intelligence artificielle. Mal utilisée, cette technologie pourrait provoquer « un milliard de morts », estime le milliardaire. Dans le sillage d'OpenAI, Anthropic, Google et Elon Mu...",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
