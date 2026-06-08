import fs from "node:fs";
import path from "node:path";

const UPLOAD_DIR =
  "C:/Users/suhan/.cursor/projects/c-Users-suhan-OneDrive-farm/uploads";

// 페이지 순서대로 (page1 = sale-0, page2~ = index.php-1 ..)
const files = [
  "sale-0.md",
  ...Array.from({ length: 18 }, (_, i) => `index.php-${i + 1}.md`),
];

const re =
  /\[\]\(view\.php\?nid=(\d+)[^)]*\)\s*\[([^\]]*)\]\([^)]*\)\s*\[([^\]]*)\]\([^)]*\)\s*([\d,]+)\s*P\s*(\S+)\s+(\d{2}\/\d{2}\s+[\d:]+)/g;

const clean = (s) =>
  s
    .replace(/\\/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();

const items = [];
const seen = new Set();

for (const file of files) {
  const full = path.join(UPLOAD_DIR, file);
  if (!fs.existsSync(full)) {
    console.error("MISSING", file);
    continue;
  }
  const text = fs.readFileSync(full, "utf8");
  let m;
  let count = 0;
  re.lastIndex = 0;
  while ((m = re.exec(text)) !== null) {
    const [, nid, name, desc, price, user, end] = m;
    if (seen.has(nid)) continue;
    seen.add(nid);
    items.push({
      id: nid,
      name: clean(name),
      desc: clean(desc),
      price: `${price} P`,
      user: clean(user),
      end: clean(end),
    });
    count++;
  }
  console.error(`${file}: ${count} items`);
}

// 고유 아이템명 빈도
const freq = {};
for (const it of items) freq[it.name] = (freq[it.name] || 0) + 1;
const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
console.error(`\nTOTAL ITEMS: ${items.length}`);
console.error(`DISTINCT NAMES: ${sorted.length}`);
console.error("\nTOP NAMES:");
for (const [n, c] of sorted.slice(0, 60)) console.error(`  ${c}\t${n}`);

fs.writeFileSync(
  path.join(process.cwd(), "scripts", "sale_items.json"),
  JSON.stringify(items, null, 2),
  "utf8"
);
console.error("\nwrote scripts/sale_items.json");
