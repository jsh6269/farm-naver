import fs from "node:fs";
import path from "node:path";

const SHOP = path.join(process.cwd(), "raw", "petshop", "shop");
const pages = [{ page: 0, file: path.join(SHOP, "index.html") }];
for (const d of fs.readdirSync(SHOP)) {
  const m = d.match(/^%3fpage%3d(\d+)$/);
  if (m) {
    const f = path.join(SHOP, d, "index.html");
    if (fs.existsSync(f)) pages.push({ page: Number(m[1]), file: f });
  }
}
pages.sort((a, b) => a.page - b.page);

const allSwatches = new Set();
for (const { file } of pages) {
  const c = fs.readFileSync(file, "utf8");
  const id = (c.match(/pet\/title_([a-z0-9_]+)\.gif/) || [])[1] || "?";
  // 첫 컬럼(chk_color)의 색상 인자만 추출
  const colors = [
    ...new Set(
      [...c.matchAll(/chk_color\('([^']*)'\s*,\s*''\)/g)].map((m) => m[1])
    ),
  ];
  const swatches = [
    ...new Set(
      [...c.matchAll(/chk_color\('[^']*','\s*'\)[\s\S]{0,120}?(petshop_[a-z0-9_]*\.gif)/g)]
        .map((m) => m[1])
    ),
  ];
  // 간단히: 첫 컬러박스 영역의 petshop_ 스와치 이미지
  const swImgs = [
    ...new Set([...c.matchAll(/(petshop_[a-z0-9]*\.gif)/g)].map((m) => m[1])),
  ];
  swImgs.forEach((s) => allSwatches.add(s));
  console.error(`${id}: colors=[${colors.join(",")}] swatches=[${swImgs.join(",")}]`);
}
console.error("\nALL SWATCH IMAGES: " + [...allSwatches].join(", "));
