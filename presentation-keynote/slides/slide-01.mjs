import { addBackground, addBulletList, addFooter, addChip, content, icon, rect, text, theme } from "./common.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx);

  text(slide, ctx, content.hero.eyebrow.toUpperCase(), 76, 92, 420, 20, {
    fontSize: 10.5,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, content.hero.name, 76, 128, 530, 70, {
    fontSize: 42,
    bold: true,
    typeface: theme.titleFont,
  });
  text(slide, ctx, content.hero.title, 76, 198, 520, 28, {
    fontSize: 19,
    color: theme.muted,
  });
  text(slide, ctx, content.hero.lead, 76, 252, 500, 102, {
    fontSize: 15,
    color: theme.muted,
  });

  rect(slide, ctx, 730, 114, 420, 404, "#202A38", {
    line: ctx.line("#314155", 1),
  });
  rect(slide, ctx, 754, 138, 372, 356, "#1A2230", {
    line: ctx.line("#3D4D65", 1),
  });
  await icon(slide, ctx, "Server", 788, 170, 46, 46, { color: theme.accent });
  text(slide, ctx, content.hero.focusTitle, 852, 174, 180, 30, {
    fontSize: 24,
    bold: true,
    typeface: theme.titleFont,
  });
  text(slide, ctx, content.hero.focusText, 788, 236, 300, 90, {
    fontSize: 14.5,
    color: theme.muted,
  });
  addBulletList(slide, ctx, ["Administration Windows", "Segmentation VLAN", "Solutions adaptees au metier"], 788, 338, 260, 28, {
    fontSize: 12.5,
    color: theme.whiteSoft,
  });
  content.hero.badges.forEach((badge, index) => {
    addChip(slide, ctx, badge, 788 + index * 110, 444, { width: 100 });
  });

  rect(slide, ctx, 76, 556, 350, 70, "#1C2532", {
    line: ctx.line("#314055", 1),
  });
  text(slide, ctx, "Support d'oral de secours", 98, 574, 180, 18, {
    fontSize: 10,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, "Presentation compatible Keynote en cas de probleme sur le portfolio web.", 98, 596, 292, 22, {
    fontSize: 12,
    color: theme.muted,
  });

  addFooter(slide, ctx, 1, "Presentation de secours inspiree du portfolio web");
  return slide;
}

