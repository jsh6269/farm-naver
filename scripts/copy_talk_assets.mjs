import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const RAW = path.join(ROOT, "raw");
const NP = path.join(RAW, "new_pet");
const DEST = path.join(ROOT, "src", "assets", "talk");

const FILES = [
  "talk/index.php%3fod%3dnid%26page%3d1.html",
  "school/library/index.php%3f.html",
];

function extractImages(html) {
  const paths = new Set();
  const re = /(?:src|background)=["']\.\/new_pet\/([^"']+)["']/g;
  let m;
  while ((m = re.exec(html))) paths.add(m[1]);
  return paths;
}

const imgs = new Set();
for (const f of FILES) {
  const fp = path.join(RAW, f);
  if (fs.existsSync(fp)) extractImages(fs.readFileSync(fp, "utf8")).forEach((i) => imgs.add(i));
}

for (const rel of imgs) {
  const src = path.join(NP, rel);
  const destDir = rel.includes("/")
    ? path.join(DEST, path.dirname(rel))
    : DEST;
  fs.mkdirSync(destDir, { recursive: true });
  const dest = path.join(destDir, path.basename(rel));
  if (fs.existsSync(src) && !fs.existsSync(dest)) fs.copyFileSync(src, dest);
}

console.log(`copied ${imgs.size} image refs`);
