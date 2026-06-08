import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const NEWPET = "C:/Users/suhan/OneDrive/바탕 화면/farm/raw/new_pet";
const PET_SRC = path.join(NEWPET, "pet");
const SHOP = path.join(ROOT, "raw", "petshop", "shop");

const DEST_PET = path.join(ROOT, "src", "assets", "petshop", "pet");
const DEST_UI = path.join(ROOT, "src", "assets", "petshop", "shop");
fs.mkdirSync(DEST_PET, { recursive: true });
fs.mkdirSync(DEST_UI, { recursive: true });

// 1) 페이지네이션 순서대로 동물 목록을 만든다(중복 제거).
//    base index.html(featured)은 맨 뒤로 보내 ?page=1(otter)이 첫 동물이 되게 한다.
const pages = [{ page: 9999, file: path.join(SHOP, "index.html") }];
for (const d of fs.readdirSync(SHOP)) {
  const m = d.match(/^%3fpage%3d(\d+)$/);
  if (m) {
    const f = path.join(SHOP, d, "index.html");
    if (fs.existsSync(f)) pages.push({ page: Number(m[1]), file: f });
  }
}
pages.sort((a, b) => a.page - b.page);

// 동물별 색상 목록(첫 성장컬럼의 chk_color 인자) 추출
const colorsById = new Map();
const order = [];
const seen = new Set();
for (const { file } of pages) {
  const c = fs.readFileSync(file, "utf8");
  const id = (c.match(/pet\/title_([a-z0-9_]+)\.gif/) || [])[1];
  if (!id || seen.has(id)) continue;
  seen.add(id);
  order.push(id);
  const colors = [
    ...new Set(
      [...c.matchAll(/chk_color\('([^']*)'\s*,\s*''\)/g)].map((m) => m[1])
    ),
  ];
  colorsById.set(id, colors);
}

// 2) 동물별 모든 변형 이미지(성장/표정/색상) + 타이틀 이미지를 복사한다.
const allPetFiles = fs.readdirSync(PET_SRC);
const copyPet = (file) => {
  const src = path.join(PET_SRC, file);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(DEST_PET, file));
};

const pets = [];
for (const id of order) {
  const titleFile = `title_${id}.gif`;
  if (!fs.existsSync(path.join(PET_SRC, titleFile))) continue;
  copyPet(titleFile);
  const re = new RegExp(`^${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(_[^.]*)?\\.gif$`);
  let variants = 0;
  for (const f of allPetFiles) {
    if (re.test(f)) {
      copyPet(f);
      variants++;
    }
  }
  pets.push({ id, title: titleFile, colors: colorsById.get(id) || [] });
  console.error(`${id}: ${variants} imgs, colors=[${(colorsById.get(id) || []).join(",")}]`);
}

// 3) 화면 구성용 UI 크롬 이미지를 복사한다.
const uiGifs = [
  "sub_tit21.gif",
  "img_select01.gif",
  "img_select_left.gif",
  "img_select_right.gif",
  "round_img13.gif",
  "round_img14.gif",
  "round_img15.gif",
  "round_img16.gif",
  "te_select01.gif",
  "te_select02.gif",
  "te_select03.gif",
  "te_select04.gif",
  "te_search060221_01.gif",
  "te_search060221_02.gif",
  "te_search060221_03.gif",
  "select060221_txt01.gif",
  "select060221_txt02.gif",
  "select060221_txt03.gif",
  "select060221_other.gif",
  // 색상 스와치(동물별로 사용 세트가 다름)
  "petshop_.gif",
  "petshop_bluecelest.gif",
  "petshop_brown.gif",
  "petshop_black.gif",
  "petshop_green.gif",
  "petshop_pink.gif",
  "petshop_blue.gif",
  "petshop_coral.gif",
  "petshop_turkeygreen.gif",
  "petshop_violet.gif",
  "petshop_red.gif",
  "petshop_magenta.gif",
  "petshop_yellow.gif",
  "petshop_gray.gif",
  "petshop_lilac.gif",
  "petshop_white.gif",
  "petshop_orange.gif",
  "petshop_pattern.gif",
  "petshop_yellowdeep.gif",
  "petshop_gold.gif",
  "petshop_olivegreen.gif",
  "btn_search060221_next.gif",
  "btn_search060221_prev.gif",
  "btn_animal_agree02.gif",
  "btn_search060724_01.gif",
  "btn_search060221_animal.gif",
  "select060724_color_txt.gif",
  "btn_060724_color.gif",
  "btn_first_animal.gif",
  "t_my03.gif",
  "t_my04.gif",
];
let uiCopied = 0;
for (const g of uiGifs) {
  const src = path.join(NEWPET, g);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DEST_UI, g));
    uiCopied++;
  } else {
    console.error(`MISSING ui: ${g}`);
  }
}

fs.writeFileSync(
  path.join(ROOT, "src", "data", "petshopPets.json"),
  JSON.stringify(pets, null, 2),
  "utf8"
);
console.error(`\norder(${pets.length}): ${pets.map((p) => p.id).join(", ")}`);
console.error(`ui copied: ${uiCopied}/${uiGifs.length}`);
