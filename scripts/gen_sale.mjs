import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC_ITEM_DIR = "C:/Users/suhan/fileSuhan/동물농장/item_list/item";
const MAKEHTML = "C:/Users/suhan/fileSuhan/동물농장/item_list/makehtml.py";
const PHEASANT_DIR = "C:/Users/suhan/OneDrive/바탕 화면/꿩";
const DEST_ITEM_DIR = path.join(ROOT, "src", "assets", "item");

// 1) makehtml.py 의 data 블록에서 한글이름 -> 파일명 매핑 추출
const py = fs.readFileSync(MAKEHTML, "utf8");
const block = py.match(/data\s*=\s*"""([\s\S]*?)"""/);
if (!block) throw new Error("data block not found in makehtml.py");

const nameToFile = new Map();
for (const line of block[1].trim().split("\n")) {
  const parts = line.split("\t");
  if (parts.length < 5) continue;
  const file = parts[0].replace(/^\.\/item\//, "").trim();
  const name = parts[4].trim();
  if (name && !nameToFile.has(name)) nameToFile.set(name, file);
}
console.error(`name->file entries: ${nameToFile.size}`);

// 1-b) 사용자가 추가로 모아둔 이미지(꿩 폴더): "{한글이름}_{영문}.gif"
//      한글을 제거(첫 _ 이후의 영문만)해 프로젝트에 복사하고 매핑을 덮어쓴다.
if (fs.existsSync(PHEASANT_DIR)) {
  for (const f of fs.readdirSync(PHEASANT_DIR)) {
    if (!f.toLowerCase().endsWith(".gif")) continue;
    const i = f.indexOf("_");
    if (i < 0) continue;
    const koreanName = f.slice(0, i).trim();
    const englishFile = f.slice(i + 1).trim();
    fs.copyFileSync(
      path.join(PHEASANT_DIR, f),
      path.join(DEST_ITEM_DIR, englishFile)
    );
    nameToFile.set(koreanName, englishFile);
  }
}

// 공백 무시 매칭용 보조 맵
const noSpace = (s) => s.replace(/\s+/g, "");
const nameToFileLoose = new Map();
for (const [n, f] of nameToFile) {
  const key = noSpace(n);
  if (!nameToFileLoose.has(key)) nameToFileLoose.set(key, f);
}

// 1-c) 스냅샷에서 "..." 로 잘린 설명의 전체 문장(생성본).
//      실제 데이터가 없어 한 문장 끝까지만 자연스럽게 완성한 것.
const DESC_FULL = {
  "...": "급하게 처분하니 많은 관심 부탁드려요.",
  "갑부님들......": "갑부님들 많이 사주세요.",
  "안오실건가 ...": "안오실건가 봐요.",
  "구하기 찐짜 어려워요...": "구하기 찐짜 어려워요.",
  "tj...": "tj 싸게 팝니다.",
  "사실때는 10억 위로 ...": "사실때는 10억 위로 올려주세요.",
  "갑부님들 한번 와서 ...": "갑부님들 한번 와서 사주세요.",
  "갑부님들 제가 아끼던...": "갑부님들 제가 아끼던 아이템이에요.",
  "갑부님들!!! 꼭 사주...": "갑부님들!!! 꼭 사주세요.",
  "이거 멸종위기에요~ㅠ...": "이거 멸종위기에요~ㅠ 얼른 데려가세요.",
  "갑부님들 만이이용해 ...": "갑부님들 만이이용해 주세요.",
  "♥♧ 갑부님들 ♠◆♣...": "♥♧ 갑부님들 많이 사주세요 ♠◆♣",
  "비매품, 퀘스트 템 입...": "비매품, 퀘스트 템 입니다.",
  "갑부님들만 믿고 0포...": "갑부님들만 믿고 0포인트에 올려요.",
  "갑부님들 부탁드립니...": "갑부님들 부탁드립니다.",
  "chocho94를 치시면 모...": "chocho94를 치시면 모두 싸게 드려요.",
  "갑부님들 거지 도와주...": "갑부님들 거지 도와주세요.",
  "아무것도 신청하지 마...": "아무것도 신청하지 마세요.",
  "북쪽탑 50층에서 마도...": "북쪽탑 50층에서 마도서를 구했어요.",
  "사빼A 랑 교환해요~! ...": "사빼A 랑 교환해요~ 쪽지 주세요.",
  "감사합니다 포인트 이...": "감사합니다 포인트 이벤트 중이에요.",
  "그냥.... 최소한 원래...": "그냥 최소한 원래 가격에 팔아요.",
  "애는 몬스터인데 툭 ...": "애는 몬스터인데 툭 치면 움직여요.",
  "갑부님들 많이 사주세...": "갑부님들 많이 사주세요.",
  "정말 재미있는 아이템...": "정말 재미있는 아이템이에요.",
  "훌륭한 선생님들에게 ...": "훌륭한 선생님들에게 선물하세요.",
  "갑부님들만 살거라고 ...": "갑부님들만 살거라고 생각해요.",
  "월드컵에서 우승하는 ...": "월드컵에서 우승하는 기념템이에요.",
  "dhtwww치면 좋은거 마...": "dhtwww치면 좋은거 많이 드려요.",
  "hhhhhhhhhhhhhhhhhhhh...": "hhhhhhhhhhhhhhhhhhhh 많이 사주세요.",
  "4000원에팜니다만이사...": "4000원에팜니다만이사주세요.",
  "훈장 비싸면싸게 드릴...": "훈장 비싸면싸게 드릴게요.",
  "조금싸게드릴테니까많...": "조금싸게드릴테니까많이사주세요.",
  "갑부님들믿구 10000전...": "갑부님들믿구 10000전에 팔아요.",
  "사세요...": "사세요.",
  "갑부님들 믿고 0전에 ...": "갑부님들 믿고 0전에 올려요.",
  "제발비싸게 사주세요 ...": "제발비싸게 사주세요.",
  "갑부님들아 많이 쳐 ...": "갑부님들아 많이 쳐 주세요.",
  "갑부님들 많이 올려주...": "갑부님들 많이 올려주세요.",
  "갑부님들 거지한번 돕...": "갑부님들 거지한번 도와주세요.",
  "갑부님젭알.............": "갑부님 젭알 사주세요.",
  "애정, 매력 등등 많...": "애정, 매력 등등 많이 올라가요.",
  "꼭 사주세요......": "꼭 사주세요.",
  "갑부님들만 믿고 0원...": "갑부님들만 믿고 0원에 올려요.",
  "21억넘게사면 크훈주...": "21억넘게사면 크훈 줄게요.",
  "0원 올리고 가지고 싶...": "0원 올리고 가지고 싶어요.",
  "갑부님들만 믿고.....": "갑부님들만 믿고 올려요.",
  "갑부님들 믿고 많이쳐...": "갑부님들 믿고 많이쳐 주세요.",
  "이거 5억이상에 사주...": "이거 5억이상에 사주세요.",
  "자기 농장 나무에 달...": "자기 농장 나무에 달아두면 예뻐요.",
  "크훈준다 와바 옐로1...": "크훈준다 와바 옐로1번방으로 와요.",
};

// 2) 추출한 실제 장터 아이템
const items = JSON.parse(
  fs.readFileSync(path.join(ROOT, "scripts", "sale_items.json"), "utf8")
);

// 3) 매칭 + 복사 대상 수집
const neededFiles = new Set();
const unmatched = new Map();
const rows = items.map((it) => {
  const file = nameToFile.get(it.name) || nameToFileLoose.get(noSpace(it.name));
  if (file) {
    neededFiles.add(file);
    return { ...it, file };
  }
  unmatched.set(it.name, (unmatched.get(it.name) || 0) + 1);
  return { ...it, file: null };
});

// 4) 필요한 이미지 복사 (원본 도감 또는 이미 복사된 꿩 이미지)
let copied = 0;
let missing = [];
for (const file of neededFiles) {
  const dest = path.join(DEST_ITEM_DIR, file);
  if (fs.existsSync(dest)) continue; // 이미 존재(꿩 폴더 등)
  const src = path.join(SRC_ITEM_DIR, file);
  if (!fs.existsSync(src)) {
    missing.push(file);
    continue;
  }
  fs.copyFileSync(src, dest);
  copied++;
}
console.error(`copied ${copied} new images (needed ${neededFiles.size})`);
if (missing.length) console.error(`MISSING source files: ${missing.join(", ")}`);

const matchedCount = rows.filter((r) => r.file).length;
console.error(`matched ${matchedCount}/${rows.length} items`);
if (unmatched.size) {
  console.error(`unmatched names (${unmatched.size}):`);
  for (const [n, c] of [...unmatched].sort((a, b) => b[1] - a[1]))
    console.error(`  ${c}\t${n}`);
}

// file 이 있지만 원본 누락이면 placeholder 처리
const missingSet = new Set(missing);
const cleaned = rows.map((r) =>
  r.file && !missingSet.has(r.file) ? r : { ...r, file: null }
);

// 5) sale.jsx 생성 (import.meta.glob 로 아이콘 일괄 로드)
const body = cleaned
  .map((r) => {
    const o = {
      id: r.id,
      name: r.name,
      desc: r.desc,
      price: r.price,
      user: r.user,
      end: r.end,
      file: r.file,
    };
    const full = DESC_FULL[r.desc];
    if (full) o.descFull = full;
    const fields = Object.entries(o)
      .map(([k, v]) => `    ${k}: ${JSON.stringify(v)},`)
      .join("\n");
    return `  {\n${fields}\n  },`;
  })
  .join("\n");

const out = `// 이 파일은 scripts/gen_sale.mjs 로 생성됩니다 (web.archive.org 와글와글 장터 스냅샷 기반).
// 아이템명/설명/가격/아이디/종료시간은 실제 스냅샷에서, 썸네일은 동물농장 아이템 도감(makehtml.py)의 실제 파일과 매칭했습니다.
import placeholder from "../assets/sale/item_placeholder.svg";

const icons = import.meta.glob("../assets/item/*.gif", {
  eager: true,
  import: "default",
});

const resolve = (file) =>
  file && icons[\`../assets/item/\${file}\`]
    ? icons[\`../assets/item/\${file}\`]
    : placeholder;

const rawItems = [
${body}
];

const items = rawItems.map((it) => ({ ...it, img: resolve(it.file) }));

export default items;
`;

fs.writeFileSync(path.join(ROOT, "src", "data", "sale.jsx"), out, "utf8");
console.error(`\nwrote src/data/sale.jsx with ${cleaned.length} items`);
const ph = cleaned.filter((r) => !r.file).length;
console.error(`placeholder items: ${ph}/${cleaned.length}`);
