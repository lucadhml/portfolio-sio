import { addBackground, addBulletList, addFooter, addHeader, content, icon, rect, text, theme } from "./common.mjs";

export async function slide10(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx);
  addHeader(slide, ctx, "Competences", "Domaines de competences", "Competences techniques structurees par domaines.");

  for (let index = 0; index < content.skills.length; index += 1) {
    const item = content.skills[index];
    const left = 70 + (index % 2) * 570;
    const top = 208 + Math.floor(index / 2) * 186;
    rect(slide, ctx, left, top, 540, 154, "#1C2532", {
      line: ctx.line("#34445A", 1),
    });
    await icon(slide, ctx, item.icon, left + 24, top + 22, 34, 34, { color: theme.accent });
    text(slide, ctx, item.title, left + 74, top + 18, 420, 38, {
      fontSize: 15.5,
      bold: true,
    });
    text(slide, ctx, item.text, left + 74, top + 58, 420, 38, {
      fontSize: 12.5,
      color: theme.muted,
    });
    addBulletList(slide, ctx, item.items, left + 24, top + 98, 480, 20, {
      fontSize: 11,
      color: theme.whiteSoft,
    });
  }

  rect(slide, ctx, 70, 596, 1140, 46, "#18212D", {
    line: ctx.line("#34445A", 1),
  });
  text(slide, ctx, "Le portfolio contient egalement le tableau de synthese des competences E5 en complement de cette presentation.", 96, 612, 950, 16, {
    fontSize: 11,
    color: theme.muted,
  });

  addFooter(slide, ctx, 10);
  return slide;
}

