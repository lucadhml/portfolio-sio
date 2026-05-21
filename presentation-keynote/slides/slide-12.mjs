import { addBackground, addFooter, addHeader, content, icon, rect, text, theme } from "./common.mjs";

export async function slide12(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx);
  addHeader(slide, ctx, "Contact", "Merci pour votre attention", "Un support de presentation prevu pour garder une solution fiable meme sans acces au portfolio web.");

  rect(slide, ctx, 70, 218, 580, 292, "#1C2532", {
    line: ctx.line("#34445A", 1),
  });
  text(slide, ctx, "Ce support reprend l'identite du portfolio:", 98, 248, 360, 20, {
    fontSize: 14,
    bold: true,
  });
  text(slide, ctx, "palette bleu nuit, cartes epurees, navigation par sections, projets detaillees, competences et veille technologique.", 98, 282, 456, 54, {
    fontSize: 14,
    color: theme.muted,
  });
  text(slide, ctx, "Utilisation conseillee a l'oral:", 98, 366, 280, 18, {
    fontSize: 12,
    bold: true,
    color: theme.accent,
  });
  text(slide, ctx, "presenter le profil, enchaîner sur le parcours, puis choisir 2 ou 3 projets a detailler selon les questions du jury.", 98, 392, 462, 48, {
    fontSize: 13,
    color: theme.whiteSoft,
  });

  rect(slide, ctx, 690, 218, 520, 292, "#1B2431", {
    line: ctx.line("#34445A", 1),
  });
  await icon(slide, ctx, "Mail", 722, 256, 28, 28, { color: theme.accent });
  text(slide, ctx, "Email", 770, 256, 160, 18, {
    fontSize: 12,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, content.contact.email, 770, 282, 280, 22, {
    fontSize: 18,
    bold: true,
  });
  await icon(slide, ctx, "Link", 722, 348, 28, 28, { color: theme.accent });
  text(slide, ctx, "LinkedIn", 770, 348, 160, 18, {
    fontSize: 12,
    color: theme.accent,
    bold: true,
  });
  text(slide, ctx, content.contact.linkedin, 770, 374, 330, 44, {
    fontSize: 16,
    color: theme.text,
  });

  rect(slide, ctx, 70, 560, 1140, 74, "#18212D", {
    line: ctx.line("#34445A", 1),
  });
  text(slide, ctx, "Presentation de secours generee pour etre ouverte dans Keynote ou PowerPoint.", 98, 584, 620, 18, {
    fontSize: 12.5,
    color: theme.whiteSoft,
  });

  addFooter(slide, ctx, 12, "Luca Duhamel • BTS SIO SISR");
  return slide;
}
