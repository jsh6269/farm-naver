import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const NEWPET = "C:/Users/suhan/OneDrive/바탕 화면/farm/raw/new_pet";
const ADOPT_DIR = path.join(ROOT, "raw", "petshop", "adopt");
const RAW = path.join(ADOPT_DIR, "list.php%3fpage%3d.html");
const PET_SRC = path.join(NEWPET, "pet");
const DEST = path.join(ROOT, "src", "assets", "petshop", "pet");
const DEST_UI = path.join(ROOT, "src", "assets", "petshop", "adopt");

fs.mkdirSync(DEST, { recursive: true });
fs.mkdirSync(DEST_UI, { recursive: true });
const html = fs.readFileSync(RAW, "utf8");

const copyOne = (file) => {
  const src = path.join(PET_SRC, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DEST, file));
    return true;
  }
  return false;
};

// 목록(성숙형 m)과 상세(기본형)에서 모두 쓰도록 두 변형을 함께 복사하고,
// 목록에 사용할 대표 파일명을 돌려준다.
const copyPet = (petId, preferred) => {
  copyOne(`${petId}.gif`);
  const cands = [preferred, `${petId}m.gif`, `${petId}.gif`].filter(Boolean);
  for (const file of cands) {
    if (copyOne(file)) return file;
  }
  return null;
};

// 입양 화면 구성용 UI 크롬 이미지를 복사한다.
const uiGifs = [
  "sub_tit23.gif",
  "img_protect03.gif",
  "img_protect04.gif",
  "bbs_talk.gif",
  "img_select_left.gif",
  "img_select_right.gif",
  "btn_first_animal.gif",
  "btn_protect02.gif",
  "te_co03.gif",
  "te_co04.gif",
  "te_co05.gif",
  "te_co06.gif",
  "img_info10.gif",
  "img_info12.gif",
  "icon_14.gif",
];
for (const g of uiGifs) {
  const src = path.join(NEWPET, g);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(DEST_UI, g));
  else console.error(`MISSING ui: ${g}`);
}

// 각 입양글: 메시지박스(bbs_talk) → 동물이미지 → 닉네임(view 링크) 순서로 반복된다.
const msgs = [
  ...html.matchAll(/bbs_talk\.gif"[\s\S]*?<font id="size1">([\s\S]*?)<\/font>/g),
].map((m) => m[1].replace(/\s+/g, " ").trim());

const imgs = [
  ...html.matchAll(/pet\/([a-z0-9_]+)\.gif"\s+width="110"/g),
].map((m) => m[1]);

const links = [
  ...html.matchAll(
    /user_id%253d([^%]+)%2526pet_id%253d([a-z0-9_]+)%2526status%253d(\d+)[\s\S]*?id="nodeco">[\s\S]*?<b>([^<]+)<\/b>/g
  ),
].map((m) => ({
  userId: m[1],
  petId: m[2],
  status: Number(m[3]),
  nick: m[4].trim(),
}));

const byKey = new Map();
const n = Math.min(msgs.length, imgs.length, links.length);
for (let i = 0; i < n; i++) {
  const { nick, userId, petId, status } = links[i];
  const img = copyPet(petId, `${imgs[i]}.gif`) || `${petId}.gif`;
  byKey.set(`${userId}/${petId}`, {
    img,
    message: msgs[i],
    nick,
    userId,
    petId,
    status,
  });
}

// 개별 view.php 스냅샷에서 추가 입양 동물을 수집한다(닉네임/메시지는 비어 있음).
const DEFAULT_MSGS = [
  "좋은 농장에서 무럭무럭 자라고 싶어요~",
  "저를 데려가 주실 농부님을 기다려요!",
  "새 가족을 만나고 싶어요~",
  "사랑받으며 자라고 싶어요!",
];
let di = 0;
for (const f of fs.readdirSync(ADOPT_DIR)) {
  const m = f.match(
    /view\.php%3f(?:user_)?id%3d([a-z0-9_]+)%26pet_id%3d([a-z0-9_]+)%26status%3d(\d+)/i
  );
  if (!m) continue;
  const [, userId, petId, status] = m;
  const key = `${userId}/${petId}`;
  if (byKey.has(key)) continue;
  const img = copyPet(petId);
  if (!img) continue;
  byKey.set(key, {
    img,
    message: DEFAULT_MSGS[di++ % DEFAULT_MSGS.length],
    nick: userId,
    userId,
    petId,
    status: Number(status),
  });
}

const entries = [...byKey.values()];
fs.writeFileSync(
  path.join(ROOT, "src", "data", "adoptList.json"),
  JSON.stringify(entries, null, 2),
  "utf8"
);
console.error(`list entries:${n} total:${entries.length}`);
console.error(entries.map((e) => `${e.nick}(${e.petId}/${e.status})`).join(", "));
