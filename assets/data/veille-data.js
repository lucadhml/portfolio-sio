window.VEILLE_DATA = {
  "updatedAt": "2026-07-04",
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
          "date": "30 juin 2026",
          "title": "Exploitarium : un chercheur dévoile des failles zero-day dans 15 logiciels open source",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/exploitarium-un-chercheur-devoile-des-failles-zero-day-dans-15-logiciels-open-source/",
          "summary": "Un chercheur anonyme a publié sur GitHub des codes d’exploitation pour des failles zero-day dans 15 logiciels open source. Deux sont déjà exploitées.",
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
          "date": "3 juillet 2026",
          "title": "Google Chrome : 382 failles corrigées d’un coup, un record largement porté par l’IA",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/google-chrome-151-382-failles-corrigees-ia/",
          "summary": "Google a publié Chrome 151 et a corrigé 382 vulnérabilités, dont 15 critiques, via une seule mise à jour. Un correctif record largement porté par l’IA.",
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
          "date": "3 juillet 2026",
          "title": "Project Aion : le Windows 100 % IA que Microsoft a caché",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/project-aion-os-ia-microsoft/",
          "summary": "La démo interne de Project Aion a fuité : un OS agentique de Microsoft bâti sur Edge, où Copilot remplace le menu Démarrer et l’IA pilote tout.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "2 juillet 2026",
          "title": "Ornith 1.0, l’IA open source qui dépasse Claude Opus 4.7",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/ornith-1-0-ia-open-source-qui-depasse-claude-opus-4-7/",
          "summary": "DeepReinforce publie Ornith-1.0, une IA open source pour le coding qui apprend à bâtir son propre harnais. Sa version 397B devance Claude Opus 4.7.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "3 juillet 2026",
          "title": "Le retour de Claude Fable 5 déçoit : les utilisateurs sont frustrés par les restrictions",
          "source": "01net",
          "url": "https://www.01net.com/actualites/retour-claude-fable-5-decoit-utilisateurs-sont-frustres-restrictions.html",
          "summary": "Après trois semaines de suspension, Anthropic a réactivé Claude Fable 5. Quotas rabotés, tarification à l'usage, et garde-fous de sécurité qui font de l'excès de zèle... Ce grand retour tourne au fiasco. Les utilisateurs sont très déçus....",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "3 juillet 2026",
          "title": "J’ai acheté mes lunettes huit fois moins cher sur BlackSheep : je ne m’attendais pas à ce résultat",
          "source": "01net",
          "url": "https://www.01net.com/tests/jai-achete-mes-lunettes-huit-fois-moins-cher-sur-blacksheep-je-ne-mattendais-pas-a-ce-resultat.html",
          "summary": "Peut-on vraiment faire confiance aux lunettes achetées en ligne quand on porte une correction prononcée ? J'ai commandé sur BlackSheep et soumis les verres à une ophtalmologue pour le savoir.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
