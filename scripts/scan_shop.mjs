import fs from "node:fs";
import path from "node:path";

const SHOP = path.join(process.cwd(), "raw", "petshop", "shop");

const pageFiles = [];
// base index.html = page 1
pageFiles.push({ page: 1, file: path.join(SHOP, "index.html") });
for (const d of fs.readdirSync(SHOP)) {
  const m = d.match(/^%3fpage%3d(\d+)$/);
  if (m) {
    const f = path.join(SHOP, d, "index.html");
    if (fs.existsSync(f)) pageFiles.push({ page: Number(m[1]), file: f });
  }
}
pageFiles.sort((a, b) => a.page - b.page);

const arrows = new Set();
const rows = [];
for (const { page, file } of pageFiles) {
  const c = fs.readFileSync(file, "utf8");
  const id = (c.match(/pet\/title_([a-z0-9_]+)\.gif/) || [])[1] || "?";
  const arr = [...c.matchAll(/(btn_search060221_(?:next|pre|prev)[a-z0-9_]*\.gif)/gi)].map(
    (m) => m[1]
  );
  arr.forEach((a) => arrows.add(a));
  rows.push(`p${page}:${id} [${[...new Set(arr)].join(",")}]`);
}
console.error(rows.join("\n"));
console.error("ARROWS: " + [...arrows].join(", "));
