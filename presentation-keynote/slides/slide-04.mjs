import { addBackground, addFooter, addHeader, addChip, content, rect, text, theme } from "./common.mjs";

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx);
  addHeader(slide, ctx, "Projets", "Vue d'ensemble des projets", "5 projets techniques structures autour des systemes, du reseau et de l'infrastructure.");

  rect(slide, ctx, 70, 206, 650, 134, "#1C2532", {
    line: ctx.line("#34445A", 1),
  });
  text(slide, ctx, "Chaque carte du portfolio donne une lecture rapide du projet, de son environnement technique et des livrables disponibles. Cette presentation reprend cette logique pour faciliter l'oral du BTS SIO.", 98, 240, 594, 60, {
    fontSize: 15,
    color: theme.muted,
  });

  [
    ["5", "projets"],
    ["6", "documents"],
    ["1", "jeu de maquettes"],
  ].forEach((item, index) => {
    rect(slide, ctx, 760 + index * 150, 206, 136, 134, "#202A38", {
      line: ctx.line("#34445A", 1),
    });
    text(slide, ctx, item[0], 760 + index * 150, 242, 136, 36, {
      fontSize: 32,
      bold: true,
      align: "center",
      typeface: theme.titleFont,
    });
    text(slide, ctx, item[1], 778 + index * 150, 286, 100, 18, {
      fontSize: 11,
      color: theme.muted,
      align: "center",
    });
  });

  content.projects.forEach((project, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const left = 70 + column * 570;
    const top = 380 + row * 104;
    rect(slide, ctx, left, top, 540, 84, "#1B2431", {
      line: ctx.line("#34445A", 1),
    });
    addChip(slide, ctx, project.tag, left + 18, top + 16, {
      width: 102,
      height: 24,
      fill: project.tag === "Entreprise" ? "#294664" : project.tag === "Personnel" ? "#2E4734" : "#2D3950",
      lineColor: "#55749D",
    });
    text(slide, ctx, project.title, left + 136, top + 16, 376, 24, {
      fontSize: 13.5,
      bold: true,
    });
    text(slide, ctx, project.stack.join(" • "), left + 136, top + 46, 376, 16, {
      fontSize: 10.5,
      color: theme.muted,
    });
  });

  addFooter(slide, ctx, 4);
  return slide;
}

