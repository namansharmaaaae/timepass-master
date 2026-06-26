#!/usr/bin/env node
/**
 * Post-build renderer template fix.
 *
 * The TanStack Start Vite plugin (v1.168.x) embeds `index.html` verbatim into
 * `.netlify/functions-internal/server/_chunks/renderer-template.mjs` without
 * running Vite's asset-injection pass. This leaves the raw dev-mode source
 * path (`/src/client.tsx`) in the production HTML shell, which causes a MIME
 * type error when the browser requests it from the Netlify function.
 *
 * This script runs after `vite build` and:
 *   1. Reads the `_tanstack-start-manifest` that the build generated (it already
 *      knows the correct hashed asset path for every route).
 *   2. Extracts the hashed client-bundle path for the `__root__` route.
 *   3. Patches `renderer-template.mjs` to reference the real production asset.
 *   4. Injects the CSS `<link>` tag so the page is styled before JS runs.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

// Support both Netlify and Cloudflare/default Nitro presets.
const CANDIDATE_SERVER_DIRS = [
  resolve(".netlify/functions-internal/server"), // netlify preset
  resolve(".output/server"),                      // cloudflare-module / default preset
];

const serverDir = CANDIDATE_SERVER_DIRS.find(existsSync);
if (!serverDir) {
  console.log("[fix-renderer] No Nitro server output directory found — skipping.");
  process.exit(0);
}

// ── 1. Find the TanStack Start manifest ──────────────────────────────────────
const manifestFile = readdirSync(serverDir).find(
  (f) => f.startsWith("_tanstack-start-manifest") && f.endsWith(".mjs"),
);

if (!manifestFile) {
  console.log("[fix-renderer] _tanstack-start-manifest not found — skipping.");
  process.exit(0);
}

const manifest = readFileSync(join(serverDir, manifestFile), "utf-8");

// ── 2. Extract the main client script path from __root__.scripts[] ───────────
// The manifest contains:  scripts: [{ attrs: { type: "module", async: true, src: "/assets/index-HASH.js" } }]
const scriptMatch = manifest.match(
  /scripts:\s*\[\s*\{\s*attrs:\s*\{[^}]*src:\s*"([^"]+\.js)"[^}]*\}\s*\}\s*\]/,
);

if (!scriptMatch) {
  console.error(
    "[fix-renderer] Could not extract script src from manifest. " +
      "Manifest content (first 500 chars):\n" +
      manifest.slice(0, 500),
  );
  process.exit(1);
}

const scriptSrc = scriptMatch[1]; // e.g. "/assets/index-CKdW4CJK.js"
console.log(`[fix-renderer] Client script  : ${scriptSrc}`);

// ── 3. Find the compiled CSS asset ───────────────────────────────────────────
const distAssetsDir = resolve("dist/assets");
const cssFileName = existsSync(distAssetsDir)
  ? readdirSync(distAssetsDir).find((f) => f.endsWith(".css"))
  : null;
const cssSrc = cssFileName ? `/assets/${cssFileName}` : null;
if (cssSrc) {
  console.log(`[fix-renderer] CSS stylesheet : ${cssSrc}`);
} else {
  console.log("[fix-renderer] No CSS asset found — skipping CSS injection.");
}

// ── 4. Patch renderer-template.mjs ───────────────────────────────────────────
const rendererPath = join(serverDir, "_chunks/renderer-template.mjs");
if (!existsSync(rendererPath)) {
  console.log("[fix-renderer] renderer-template.mjs not found — skipping.");
  process.exit(0);
}

let content = readFileSync(rendererPath, "utf-8");
const originalContent = content;

// Replace any leftover dev-mode source paths with the hashed production asset.
content = content
  .replace(/\/src\/client\.tsx/g, scriptSrc)
  .replace(/\/src\/start\.ts/g, scriptSrc);

// Inject the CSS <link> before </head> to avoid flash-of-unstyled-content.
// The HTML is embedded as a JS string literal so "</head>" appears literally.
if (cssSrc && !content.includes(cssSrc)) {
  content = content.replace(
    "</head>",
    `<link rel="stylesheet" href="${cssSrc}"></head>`,
  );
}

if (content === originalContent) {
  console.warn(
    "[fix-renderer] ⚠  No changes were needed (template already up to date " +
      "or pattern not found). Verify renderer-template.mjs manually.",
  );
} else {
  writeFileSync(rendererPath, content);
  console.log("[fix-renderer] ✓ renderer-template.mjs patched successfully.");
}
