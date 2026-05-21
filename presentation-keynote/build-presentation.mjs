import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const skillDir = "/Users/luca_dhml/.codex/plugins/cache/openai-primary-runtime/presentations/26.430.10722/skills/presentations";
const workspace = path.join(root, "presentation-keynote", ".workspace");
const slidesDir = path.join(root, "presentation-keynote", "slides");
const previewDir = path.join(workspace, "preview");
const layoutDir = path.join(workspace, "layout");
const outputDir = path.join(root, "presentation-keynote", "output");
const outputFile = path.join(outputDir, "Luca-Duhamel-Portfolio-SISR-Keynote.pptx");
const manifest = path.join(workspace, "artifact-build-manifest.json");

const node = "/Users/luca_dhml/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node";
const buildScript = path.join(skillDir, "scripts", "build_artifact_deck.mjs");

const result = spawnSync(
  node,
  [
    buildScript,
    "--workspace",
    workspace,
    "--slides-dir",
    slidesDir,
    "--out",
    outputFile,
    "--preview-dir",
    previewDir,
    "--layout-dir",
    layoutDir,
    "--manifest",
    manifest,
    "--slide-count",
    "12",
  ],
  {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
