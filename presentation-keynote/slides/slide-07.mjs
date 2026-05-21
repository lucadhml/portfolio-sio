import { addBackground, addBulletList, addChip, addFooter, addHeader, badgeFill, content, image, rect, text, theme } from "./common.mjs";

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  const project = content.projects[2];
  addBackground(slide, ctx);
  addHeader(slide, ctx, "Projet 3", project.title, project.context);

  rect(slide, ctx, 70, 216, 500, 340, "#1C2532", { line: ctx.line("#34445A", 1) });
  await image(slide, ctx, project.image, 92, 240, 456, 292, { fit: "contain", alt: project.title });

  rect(slide, ctx, 612, 216, 598, 340, "#1B2431", { line: ctx.line("#34445A", 1) });
  addChip(slide, ctx, project.tag, 640, 244, { width: 104, height: 24, fill: badgeFill(project.tag), lineColor: "#55749D" });
  text(slide, ctx, "Objectifs et realisations", 640, 288, 230, 22, { fontSize: 14, bold: true });
  addBulletList(slide, ctx, project.details, 640, 322, 520, 36, { fontSize: 13, color: theme.whiteSoft });
  text(slide, ctx, "Technologies", 640, 446, 160, 18, { fontSize: 12, bold: true, color: theme.accent });
  text(slide, ctx, project.stack.join(" • "), 640, 472, 500, 18, { fontSize: 12, color: theme.muted });
  text(slide, ctx, "Livrables", 640, 510, 120, 18, { fontSize: 12, bold: true, color: theme.accent });
  text(slide, ctx, project.docs, 640, 536, 220, 18, { fontSize: 12, color: theme.muted });

  addFooter(slide, ctx, 7, "Projet: Infrastructure NAS");
  return slide;
}

