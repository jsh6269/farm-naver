import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const RAW = path.join(ROOT, "raw");
const NP = path.join(RAW, "new_pet");
const ASSET = path.join(ROOT, "src", "assets");

const PAGES = {
  festival: [
    "festival/pet/index.php%3f.html",
    "festival/farm/index.html",
    "festival/album/index.php%3f.html",
  ],
  foodshop: ["foodshop/mix.php.html"],
  hospital: [
    "hospital/hospital.php.html",
    "hospital/medical_room.php.html",
    "hospital/sick_room.php.html",
  ],
  mix_dog: ["mix_dog/mix_dog.php.html", "mix_dog/mix.php.html"],
  merchant: ["room/merchant/select.php.html", "room/merchant/selectitem.php.html"],
  school: ["school/class.php%3f.html", "school/library/index.php%3f.html"],
  drawing: ["drawing/index.html"],
  talk: ["talk/index.php%3f.html"],
};

function extractImages(html) {
  const paths = new Set();
  const re = /(?:src|background)=["']\.\/new_pet\/([^"']+)["']/g;
  let m;
  while ((m = re.exec(html))) paths.add(m[1]);
  return [...paths];
}

function copyAsset(rel, destDir) {
  const src = path.join(NP, rel);
  if (!fs.existsSync(src)) {
    console.error("MISSING", rel);
    return;
  }
  const dest = path.join(destDir, path.basename(rel));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!fs.existsSync(dest)) fs.copyFileSync(src, dest);
}

for (const [section, files] of Object.entries(PAGES)) {
  const destDir = path.join(ASSET, section);
  fs.mkdirSync(destDir, { recursive: true });
  const imgs = new Set();
  for (const f of files) {
    const fp = path.join(RAW, f);
    if (!fs.existsSync(fp)) {
      console.error("NO HTML", f);
      continue;
    }
    extractImages(fs.readFileSync(fp, "utf8")).forEach((i) => imgs.add(i));
  }
  for (const rel of imgs) copyAsset(rel, destDir);
  // item/, pet/ 등 하위 폴더 유지
  for (const rel of imgs) {
    if (rel.includes("/")) {
      const subDest = path.join(destDir, path.dirname(rel));
      copyAsset(rel, subDest);
    }
  }
  console.error(`${section}: ${imgs.size} refs`);
}

// 공통 new_pet 루트 이미지 (foodshop mix 등)
const common = [
  "img_food02.gif", "thum_food.gif", "btn_choice.gif", "icon_plus.gif", "btn_cook.gif",
  "040921_tilte.gif", "040921_ma01.gif", "040921_ma02.gif", "040921_ma03.gif", "040921_ma04.gif", "040921_ma05.gif",
  "img_festival_left.gif", "te_food09.gif", "te_food10.gif",
  "sub_tit14.gif", "img_festival28_08.gif", "img_festival28_05.gif", "btn_festival28_festival.gif",
  "img_festival28_06.gif", "img_festival28_07.gif", "te_festival28_01.gif", "img_festival28_02.gif",
  "img_festival28_03.gif", "btn_festival28_search.gif", "te_festival28_02.gif", "bg_thum02.gif",
  "te_fesival11.gif", "te_fesival12.gif", "icon_12.gif", "tit_festival28_01.gif", "img_festival28_11.gif",
  "te_fesival09.gif", "te_fesival10.gif", "tit_festival28_02.gif", "img_farm29_03.gif",
  "sub05_img02.gif", "sub05_txt02.gif", "btn_dr_go.gif", "btn_first_hospital.gif",
  "img_hospital_left.gif", "img_hospital_right.gif", "te_select03.gif", "te_select04.gif",
  "te_school13.gif", "te_school14.gif", "icon_list_hot.gif",
  "library060706_te01.gif", "library060706_te02.gif", "library060706_tit.gif", "library060706_btn.gif",
  "merchant/merchant_050106_sub01.gif", "merchant/btn_merchant_050106_item.gif",
  "merchant/te_050106m_merchant01.gif", "merchant/te_050106m_merchant02.gif",
  "merchant/merchant_050106_change.gif",
];
for (const rel of common) {
  for (const section of ["foodshop", "festival", "hospital", "merchant", "school"]) {
    const dest = rel.includes("/")
      ? path.join(ASSET, section, path.dirname(rel))
      : path.join(ASSET, section);
    copyAsset(rel, dest);
  }
}

console.error("done");
