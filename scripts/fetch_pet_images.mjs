import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DEST = path.join(ROOT, "src", "assets", "petshop", "pet");
const TS = "20160630105143";
const BASE = `https://web.archive.org/web/${TS}if_/http://image.jr.naver.com/new_pet/pet/`;
const CONCURRENCY = 6;

const pets = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src", "data", "petshopPets.json"), "utf8")
);

// UI가 요청 가능한 모든 조합: {id}{grow}{face}{color}.gif
const GROWS = ["", "_1", "_2"];
const FACES = ["", "_face1"];
const needed = new Set();
for (const { id, colors } of pets) {
  const colorList = (colors || []).filter((c) => c && c !== "_");
  for (const grow of GROWS) {
    for (const face of FACES) {
      needed.add(`${id}${grow}${face}.gif`);
      for (const color of colorList) {
        needed.add(`${id}${grow}${face}${color}.gif`);
      }
    }
  }
}

const missing = [...needed].filter(
  (f) => !fs.existsSync(path.join(DEST, f))
);
console.error(`needed=${needed.size}, missing locally=${missing.length}`);

const isGif = (buf) =>
  buf.length > 6 && buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46; // "GIF"

let ok = 0;
let fail = 0;
const failed = [];

async function fetchOne(file) {
  try {
    const res = await fetch(BASE + file, {
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      fail++;
      failed.push(file);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (!isGif(buf)) {
      fail++;
      failed.push(file);
      return;
    }
    fs.writeFileSync(path.join(DEST, file), buf);
    ok++;
    if ((ok + fail) % 25 === 0)
      console.error(`progress: ${ok + fail}/${missing.length} (ok=${ok})`);
  } catch {
    fail++;
    failed.push(file);
  }
}

// 동시성 제한 워커 풀
let idx = 0;
async function worker() {
  while (idx < missing.length) {
    const my = idx++;
    await fetchOne(missing[my]);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

console.error(`\nDONE ok=${ok} fail=${fail}`);
fs.writeFileSync(
  path.join(ROOT, "scripts", "fetch_failed.json"),
  JSON.stringify(failed, null, 2)
);
console.error(`failed list -> scripts/fetch_failed.json`);
