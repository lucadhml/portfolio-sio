import { addBackground, addBulletList, addChip, addFooter, addHeader, content, icon, rect, text, theme } from "./common.mjs";

export async function slide11(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx);
  addHeader(slide, ctx, "Veille technologique", content.veille.title, "Une veille structuree, datee et exploitable pour le BTS SIO.");

  rect(slide, ctx, 70, 206, 1140, 144, "#1C2532", {
    line: ctx.line("#34445A", 1),
  });
  text(slide, ctx, content.veille.text, 98, 236, 640, 76, {
    fontSize: 14.5,
    color: theme.muted,
  });
  addBulletList(slide, ctx, content.veille.bullets, 790, 236, 350, 28, {
    fontSize: 12.5,
    color: theme.whiteSoft,
  });

  for (let index = 0; index < content.veille.topics.length; index += 1) {
    const topic = content.veille.topics[index];
    const left = 70 + index * 570;
    rect(slide, ctx, left, 396, 540, 190, "#1B2431", {
      line: ctx.line("#34445A", 1),
    });
    await icon(slide, ctx, topic.icon, left + 24, 424, 34, 34, { color: theme.accent });
    addChip(slide, ctx, topic.chip, left + 382, 424, { width: 130, height: 24 });
    text(slide, ctx, topic.title, left + 74, 424, 250, 24, {
      fontSize: 18,
      bold: true,
    });
    text(slide, ctx, topic.text, left + 24, 474, 488, 74, {
      fontSize: 13,
      color: theme.muted,
    });
  }

  addFooter(slide, ctx, 11);
  return slide;
}

