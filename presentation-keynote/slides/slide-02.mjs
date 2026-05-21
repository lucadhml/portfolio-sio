import { addBackground, addBulletList, addFooter, addHeader, content, rect, text, theme } from "./common.mjs";

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx);
  addHeader(slide, ctx, "A propos", "Profil", "Un profil SISR construit autour des infrastructures, de la rigueur et de la montee en competences.");

  rect(slide, ctx, 70, 206, 610, 360, "#1B2431", {
    line: ctx.line("#34445A", 1),
  });
  text(slide, ctx, content.profile, 96, 236, 560, 170, {
    fontSize: 15.5,
    color: theme.muted,
  });

  text(slide, ctx, "Points cles", 96, 428, 180, 20, {
    fontSize: 14,
    bold: true,
    color: theme.text,
  });
  addBulletList(slide, ctx, content.milestones, 96, 458, 530, 30, {
    fontSize: 13,
    color: theme.whiteSoft,
  });

  rect(slide, ctx, 718, 206, 492, 360, "#1D2734", {
    line: ctx.line("#34445A", 1),
  });
  [
    ["22", "ans"],
    ["BTS SIO", "option SISR"],
    ["2024-2026", "alternance Nestle Purina"],
  ].forEach((item, index) => {
    const x = 748;
    const y = 236 + index * 104;
    rect(slide, ctx, x, y, 188, 78, index === 1 ? "#243548" : "#202A38", {
      line: ctx.line(index === 1 ? "#51729C" : "#34445A", 1),
    });
    text(slide, ctx, item[0], x + 18, y + 14, 150, 28, {
      fontSize: 28,
      bold: true,
      typeface: theme.titleFont,
    });
    text(slide, ctx, item[1], x + 18, y + 46, 156, 20, {
      fontSize: 12,
      color: theme.muted,
    });
  });

  rect(slide, ctx, 950, 236, 230, 286, "#141C28", {
    line: ctx.line("#34445A", 1),
  });
  text(slide, ctx, "Positionnement", 970, 258, 160, 18, {
    fontSize: 10,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, "Je me dirige vers des missions d'administration systeme, de support d'infrastructure et de securisation de l'environnement informatique.", 970, 292, 170, 130, {
    fontSize: 13,
    color: theme.muted,
  });
  text(slide, ctx, "Objectif oral:", 970, 444, 120, 16, {
    fontSize: 10,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, "montrer un parcours coherent, des projets concrets et une progression vers les metiers SISR.", 970, 468, 170, 46, {
    fontSize: 12,
    color: theme.whiteSoft,
  });

  addFooter(slide, ctx, 2);
  return slide;
}

