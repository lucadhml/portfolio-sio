import { fileURLToPath } from "node:url";

export const theme = {
  bg: "#141922",
  bgSoft: "#1A2230",
  card: "#232C3A",
  cardAlt: "#1E2734",
  text: "#F5F6F8",
  muted: "#C8D0DC",
  line: "#3A475C",
  accent: "#6AA3FF",
  accentSoft: "#223A61",
  accentGlow: "#2A4267",
  whiteSoft: "#EAF0F9",
  titleFont: "Avenir Next",
  bodyFont: "Avenir Next",
};

export const content = {
  hero: {
    eyebrow: "Reseaux • Systemes • Cybersecurite",
    name: "Luca Duhamel",
    title: "Etudiant en BTS SIO - Option SISR",
    lead:
      "Passionne par l'administration systeme et les infrastructures reseau, je conçois des environnements fiables, securises et documentes pour accompagner les besoins des entreprises.",
    focusTitle: "Focus SISR",
    focusText:
      "Administration Windows, segmentation VLAN, securite reseau et deploiement de solutions adaptees aux contraintes metier.",
    badges: ["Windows Server", "Reseaux", "Securite"],
  },
  profile:
    "Je m'appelle Luca Duhamel, j'ai 22 ans et je suis actuellement en deuxieme annee de BTS SIO, option SISR. Avant de me tourner vers l'informatique, j'ai suivi un parcours scientifique et medical. Mes experiences m'ont apporte rigueur, sens des procedures et logique de service, des qualites que je reinvestis aujourd'hui dans les systemes et reseaux.",
  milestones: [
    "Bac STL puis BTS ABM",
    "Experience en laboratoire: rigueur et procedures",
    "Reorientation vers l'informatique et les infrastructures",
    "Alternance chez Nestle Purina en BTS SIO SISR",
  ],
  experiences: [
    {
      role: "Technicien informatique",
      type: "Alternance",
      company: "Nestle Purina",
      period: "2024-2026",
      location: "Montfort-sur-Risle",
      missions: ["Migration Windows 11", "Support utilisateur", "Inventaire du parc"],
      logo: "../../assets/logos/nestle-purina.jpg",
    },
    {
      role: "Photographe independant",
      type: "Micro-entreprise",
      company: "Luca Dhml Photos",
      period: "2022-2026",
      location: "Activite freelance",
      missions: ["Relation client", "Production numerique", "Organisation de projets"],
      logo: "../../assets/logos/luca-dhml-photos.png",
    },
    {
      role: "Technicien de laboratoire",
      type: "CDD",
      company: "Centre Henri Becquerel",
      period: "2023-2024",
      location: "Rouen",
      missions: ["Analyses", "Suivi des consommables", "Respect des normes"],
      logo: "../../assets/logos/henri-becquerel.jpg",
    },
  ],
  education: [
    {
      degree: "BTS SIO option SISR",
      school: "Mediaschool Iris",
      period: "2024-2026",
      location: "Rouen",
      logo: "../../assets/logos/mediaschool-iris.jpg",
    },
    {
      degree: "BTS ABM",
      school: "AFBB",
      period: "2021-2023",
      location: "Paris",
      logo: "../../assets/logos/afbb.png",
    },
    {
      degree: "Baccalaureat STL",
      school: "La Providence St Therese",
      period: "2020-2021",
      location: "Rouen",
      logo: "../../assets/logos/providence.png",
    },
  ],
  projects: [
    {
      slug: "active-directory",
      title: "Mise en place d'un serveur Active Directory",
      tag: "Ecole",
      context:
        "Deploiement d'un controleur de domaine Windows Server pour centraliser l'administration des utilisateurs et des ressources.",
      details: [
        "Creation des OU, comptes et groupes",
        "Mise en place des GPO",
        "Organisation des droits selon la methode AGDLP",
      ],
      stack: ["Windows Server", "AD DS", "GPO", "AGDLP"],
      image: "../../assets/projects/active-directory.png",
      docs: "1 dossier technique + maquettes VM",
    },
    {
      slug: "serveur-web-conteneurise",
      title: "Serveur web conteneurise avec Docker sous VMware",
      tag: "Ecole",
      context:
        "Mise en place d'un service web dans une machine virtuelle avec Docker pour disposer d'un environnement portable et isole.",
      details: [
        "Preparation de la VM Linux",
        "Execution du service dans un conteneur Docker",
        "Structuration d'un hebergement simple a administrer",
      ],
      stack: ["VMware", "Docker", "Linux", "Serveur web"],
      image: "../../assets/projects/serveur-web-conteneurise.svg",
      docs: "1 dossier technique",
    },
    {
      slug: "infrastructure-nas",
      title: "Mise en place d'une infrastructure NAS",
      tag: "Personnel",
      context:
        "Centralisation des donnees, gestion des droits d'acces et strategie de sauvegarde dans un environnement professionnel.",
      details: [
        "Partages reseau et droits",
        "Permissions utilisateurs",
        "Logique de sauvegarde et continuite d'acces",
      ],
      stack: ["NAS", "Partages", "Permissions", "Sauvegarde"],
      image: "../../assets/projects/infrastructure-nas.png",
      docs: "1 dossier technique",
    },
    {
      slug: "mise-a-niveau-parc",
      title: "Mise a niveau du parc informatique",
      tag: "Entreprise",
      context:
        "Analyse de l'etat d'un parc informatique afin d'ameliorer les performances, la fiabilite et la securite des postes.",
      details: [
        "Audit materiel",
        "Optimisation et maintenance",
        "Renforcement de la securisation",
      ],
      stack: ["Audit", "Maintenance", "Optimisation", "Securisation"],
      image: "../../assets/projects/mise-a-niveau-parc.png",
      docs: "1 dossier technique",
    },
    {
      slug: "deploiement-windows-11",
      title: "Deploiement de Windows 11",
      tag: "Entreprise",
      context:
        "Deploiement multi-postes pour obtenir un environnement homogene, stable et securise.",
      details: [
        "Preparation et standardisation des postes",
        "Configuration et mise a jour",
        "Procedure de deploiement documentee",
      ],
      stack: ["Windows 11", "Deploiement", "Standardisation", "Securisation"],
      image: "../../assets/projects/deploiement-windows-11.png",
      docs: "1 dossier technique + 1 procedure",
    },
  ],
  skills: [
    {
      title: "Support et mise a disposition des services",
      text: "Assurer la continuite de service et accompagner les utilisateurs.",
      items: ["Support", "Postes clients", "Documentation"],
      icon: "Headset",
    },
    {
      title: "Administration des systemes et des reseaux",
      text: "Concevoir, configurer et maintenir les infrastructures.",
      items: ["Windows Server", "VLAN / DNS / DHCP", "Stockage NAS"],
      icon: "Server",
    },
    {
      title: "Cybersecurite des services informatiques",
      text: "Proteger les acces, les postes et les donnees.",
      items: ["MAJ / pare-feu", "Gestion des acces", "Sauvegarde / restauration"],
      icon: "Shield",
    },
    {
      title: "Supervision et haute disponibilite",
      text: "Surveiller les services et anticiper les incidents.",
      items: ["Supervision", "Continuite", "Redondance"],
      icon: "ChartNoAxesCombined",
    },
  ],
  veille: {
    title: "Une veille simple, reguliere et reutilisable",
    text:
      "Ma veille repose sur un cycle hebdomadaire: reception des informations, tri des contenus utiles, synthese assistee par IA puis relecture pour conserver les elements exploitables dans le cadre du BTS SIO SISR.",
    bullets: ["1 revue par semaine", "Sources specialisees et officielles", "Syntheses datees et exploitables a l'oral"],
    topics: [
      {
        title: "Cybersecurite",
        chip: "Sujet prioritaire",
        text:
          "Suivi des vulnerabilites, recommandations de l'ANSSI et alertes utiles pour la securisation des systemes et reseaux.",
        icon: "Shield",
      },
      {
        title: "Intelligence artificielle",
        chip: "Sujet complementaire",
        text:
          "Suivi des evolutions de l'IA, de ses usages professionnels, de ses enjeux de conformite et de son impact sur les pratiques IT.",
        icon: "Brain",
      },
    ],
  },
  contact: {
    email: "duhamelluca76@gmail.com",
    linkedin:
      "linkedin.com/in/luca-duhamel-1939b8205",
  },
};

export function assetPath(relativePath) {
  return fileURLToPath(new URL(relativePath, import.meta.url));
}

export function badgeFill(label) {
  if (label === "Entreprise") return "#294664";
  if (label === "Personnel") return "#314634";
  return "#2D3950";
}

export function withAlpha(hex, alpha) {
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return hex;
  return `#${clean}${alpha}`;
}

export function rect(slide, ctx, left, top, width, height, fill, options = {}) {
  return ctx.addShape(slide, {
    left,
    top,
    width,
    height,
    geometry: options.geometry ?? "roundRect",
    fill,
    line: options.line ?? ctx.line(withAlpha(theme.line, "AA"), options.lineWidth ?? 1),
    name: options.name,
  });
}

export function rule(slide, ctx, left, top, width, color, height = 1) {
  return ctx.addShape(slide, {
    left,
    top,
    width,
    height,
    geometry: "rect",
    fill: color,
    line: ctx.line(color, 0),
  });
}

export function text(slide, ctx, value, left, top, width, height, options = {}) {
  return ctx.addText(slide, {
    text: value,
    left,
    top,
    width,
    height,
    fontSize: options.fontSize ?? 20,
    color: options.color ?? theme.text,
    bold: Boolean(options.bold),
    typeface: options.typeface ?? theme.bodyFont,
    align: options.align ?? "left",
    valign: options.valign ?? "top",
    fill: options.fill ?? "#00000000",
    line: options.line ?? ctx.line(),
    insets: options.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

export async function image(slide, ctx, path, left, top, width, height, options = {}) {
  return ctx.addImage(slide, {
    path: assetPath(path),
    left,
    top,
    width,
    height,
    fit: options.fit ?? "cover",
    alt: options.alt ?? "",
  });
}

export async function icon(slide, ctx, name, left, top, width, height, options = {}) {
  return ctx.addLucideIcon(slide, {
    name,
    left,
    top,
    width,
    height,
    color: options.color ?? theme.accent,
    strokeWidth: options.strokeWidth ?? 1.8,
    fit: "contain",
  });
}

export function addBackground(slide, ctx) {
  ctx.addShape(slide, {
    left: 0,
    top: 0,
    width: ctx.W,
    height: ctx.H,
    geometry: "rect",
    fill: theme.bg,
    line: ctx.line(theme.bg, 0),
  });
  ctx.addShape(slide, {
    left: -90,
    top: -150,
    width: 520,
    height: 520,
    geometry: "ellipse",
    fill: withAlpha(theme.accent, "16"),
    line: ctx.line(withAlpha(theme.accent, "00"), 0),
  });
  ctx.addShape(slide, {
    left: 940,
    top: -120,
    width: 420,
    height: 420,
    geometry: "ellipse",
    fill: withAlpha("#8AB6FF", "10"),
    line: ctx.line(withAlpha("#8AB6FF", "00"), 0),
  });
  ctx.addShape(slide, {
    left: 920,
    top: 470,
    width: 360,
    height: 260,
    geometry: "ellipse",
    fill: withAlpha(theme.accent, "10"),
    line: ctx.line(withAlpha(theme.accent, "00"), 0),
  });
}

export function addHeader(slide, ctx, eyebrow, title, subtitle) {
  text(slide, ctx, eyebrow.toUpperCase(), 70, 50, 460, 18, {
    fontSize: 10,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, title, 70, 78, 760, 54, {
    fontSize: 29,
    bold: true,
    typeface: theme.titleFont,
  });
  if (subtitle) {
    text(slide, ctx, subtitle, 70, 136, 780, 36, {
      fontSize: 13.5,
      color: theme.muted,
    });
  }
}

export function addFooter(slide, ctx, page, label = "Portfolio BTS SIO SISR") {
  rule(slide, ctx, 70, 676, 1140, withAlpha(theme.line, "AA"), 1);
  text(slide, ctx, label, 70, 686, 900, 16, {
    fontSize: 8.5,
    color: theme.muted,
  });
  text(slide, ctx, String(page).padStart(2, "0"), 1160, 682, 50, 20, {
    fontSize: 11,
    color: theme.muted,
    bold: true,
    align: "right",
    typeface: theme.titleFont,
  });
}

export function addChip(slide, ctx, label, left, top, options = {}) {
  rect(slide, ctx, left, top, options.width ?? 130, options.height ?? 28, options.fill ?? withAlpha(theme.accent, "1A"), {
    line: ctx.line(options.lineColor ?? withAlpha(theme.accent, "44"), 1),
  });
  text(slide, ctx, label, left + 12, top + 7, (options.width ?? 130) - 24, 14, {
    fontSize: 9,
    color: options.color ?? theme.whiteSoft,
    bold: true,
    align: "center",
  });
}

export function addBulletList(slide, ctx, items, left, top, width, rowHeight = 28, options = {}) {
  items.forEach((item, index) => {
    const yy = top + index * rowHeight;
    ctx.addShape(slide, {
      left,
      top: yy + 8,
      width: 7,
      height: 7,
      geometry: "ellipse",
      fill: options.dotColor ?? theme.accent,
      line: ctx.line(options.dotColor ?? theme.accent, 0),
    });
    text(slide, ctx, item, left + 18, yy, width - 18, rowHeight, {
      fontSize: options.fontSize ?? 12.5,
      color: options.color ?? theme.muted,
      bold: options.bold ?? false,
    });
  });
}

