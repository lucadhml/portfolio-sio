window.VEILLE_DATA = {
  "updatedAt": "2026-10-27",
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
          "date": "27 octobre 2026",
          "title": "Broccoli2Shell : la faille Brotli de Node2Shell touche aussi Python, .NET et Linux",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/faille-brotli-broccoli2shell-python-dotnet-linux/",
          "summary": "La faille Brotli CVE-2026-111497 dépasse Node.js : Python, .NET et Linux sont aussi touchés. Voici comment se protéger de cette vulnérabilité.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "22 octobre 2026",
          "title": "GitLab corrige la CVE-2026-110264, une faille critique qui touche toutes les versions depuis 2014",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/gitlab-cve-2026-110264-faille-critique-regex-onigmo/",
          "summary": "GitLab a corrigé la CVE-2026-110264, une faille critique exploitable sans authentification qui touche toutes les versions depuis la 7.0, sortie en 2014.",
          "interest": "Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l'administration des systèmes et réseaux."
        },
        {
          "date": "23 octobre 2026",
          "title": "PHP signale une nouvelle faille RCE (CVE-2026-115560) : appliquez le même réglage que PHP2Shell",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/php-cve-2026-115560-session-upload-progress/",
          "summary": "CVE-2026-115560 : PHP signale une nouvelle faille RCE. Désactiver Session Upload Progress, déjà conseillé pour PHP2Shell, suffit en attendant le correctif.",
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
          "date": "27 octobre 2026",
          "title": "Un ChatGPT moins cher et plus puissant : le nouveau modèle GPT-6.1 Terra d’OpenAI a trouvé sa recette",
          "source": "01net",
          "url": "https://www.01net.com/actualites/un-chatgpt-moins-cher-et-plus-puissant-le-nouveau-modele-gpt-6-1-terra-dopenai-a-trouve-sa-recette.html",
          "summary": "OpenAI a présenté ce lundi 26 octobre GPT-6.1 Terra, un nouveau modèle de langage intermédiaire conçu pour comprendre ce qui s'affiche sur votre écran. De quoi prendre le contrôle de votre ordinateur... pour travailler à votre place.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "26 octobre 2026",
          "title": "WordCraft, GridCraft, DeckCraft : après Adobe, Word, Excel et PowerPoint réécrits en Rust avec l’IA",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/wordcraft-gridcraft-deckcraft-suite-office-rust-claude/",
          "summary": "WordCraft, GridCraft et DeckCraft : trois clones open source de Word, Excel et PowerPoint écrits en Rust avec Claude Opus 5.5. Sont-ils opérationnels ?",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "23 octobre 2026",
          "title": "Windows 11 : avec Project Pantheon, Microsoft teste une mémoire IA qui ne retient que ce que vous choisissez",
          "source": "IT-Connect",
          "url": "https://www.it-connect.fr/windows-11-project-pantheon-context-vault-memoire-ia/",
          "summary": "Microsoft teste Project Pantheon, une mémoire IA pour Windows 11 qui ne retient que ce que vous sauvegardez, avec un serveur MCP ouvert à Claude et Cursor.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        },
        {
          "date": "27 octobre 2026",
          "title": "Un tournant historique pour l’IA : Anthropic s’apprête à entrer en Bourse avec une croissance monstrueuse",
          "source": "01net",
          "url": "https://www.01net.com/actualites/un-tournant-historique-pour-lia-anthropic-sapprete-a-entrer-en-bourse-avec-une-croissance-monstrueuse.html",
          "summary": "Anthropic entre dans la dernière ligne droite avant son introduction en Bourse. Pourtant, si son chiffre d'affaires est en explosion, elle a perdu plus de 80 milliards de dollars au premier semestre 2026.",
          "interest": "Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l'intelligence artificielle."
        }
      ]
    }
  }
};
