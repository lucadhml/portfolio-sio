import { addBackground, addFooter, addHeader, content, image, rect, text, theme } from "./common.mjs";

async function entry(slide, ctx, item, left, top, width, kind) {
  rect(slide, ctx, left, top, width, 120, "#1C2532", {
    line: ctx.line("#34445A", 1),
  });
  await image(slide, ctx, item.logo, left + 18, top + 18, 56, 56, { fit: "contain", alt: item.company || item.school });
  text(slide, ctx, kind === "exp" ? item.role : item.degree, left + 88, top + 18, width - 110, 30, {
    fontSize: 15,
    bold: true,
  });
  text(slide, ctx, kind === "exp" ? `${item.type} • ${item.company}` : `${item.school} • ${item.location}`, left + 88, top + 48, width - 110, 18, {
    fontSize: 11.5,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, `${item.period} • ${item.location}`, left + 88, top + 68, width - 110, 16, {
    fontSize: 10.5,
    color: theme.muted,
  });
  const summary = kind === "exp" ? item.missions.slice(0, 2).join(" • ") : "Parcours de formation en lien avec l'evolution de mon projet professionnel.";
  text(slide, ctx, summary, left + 18, top + 90, width - 36, 16, {
    fontSize: 10.5,
    color: theme.whiteSoft,
  });
}

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx);
  addHeader(slide, ctx, "Parcours", "Experiences et formation", "Vue d'ensemble de mes experiences professionnelles et de mon parcours academique.");

  text(slide, ctx, "Experiences professionnelles", 70, 192, 280, 22, {
    fontSize: 14,
    bold: true,
    color: theme.text,
  });
  text(slide, ctx, "Parcours academique", 662, 192, 220, 22, {
    fontSize: 14,
    bold: true,
    color: theme.text,
  });

  for (let index = 0; index < content.experiences.length; index += 1) {
    await entry(slide, ctx, content.experiences[index], 70, 226 + index * 138, 548, "exp");
  }
  for (let index = 0; index < content.education.length; index += 1) {
    await entry(slide, ctx, content.education[index], 662, 226 + index * 138, 548, "edu");
  }

  addFooter(slide, ctx, 3);
  return slide;
}

