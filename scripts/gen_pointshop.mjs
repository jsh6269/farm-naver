import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const RAW = path.join(ROOT, "raw");
const NP = path.join(RAW, "new_pet");
const SWF_SRC = "C:\\Users\\suhan\\fileSuhan\\동물농장\\동물농장 게임";
const SWF_DEST = path.join(ROOT, "public", "games");
const ASSET = path.join(ROOT, "src", "assets", "pointshop");
const GAME_IMG = path.join(ASSET, "game");
const DATA = path.join(ROOT, "src", "data", "pointshopGames.json");

// id + 난이도(1=초급,2=중급,3=고급) → swf (raw embed.php 기준)
const SWF = {
  alba: { 1: "alba_01.swf", 2: "alba_02.swf", 3: "alba_03.swf" },
  bread: { 1: "bread.swf" },
  carrot: { 1: "carrot.swf" },
  circus: { 1: "circus_01.swf", 3: "circus_03.swf" },
  clrara: { 1: "clrara.swf" },
  cookingshop: { 1: "v1_cookingshop.swf", 2: "v2_cookingshop.swf", 3: "v3_cookingshop.swf" },
  dart: { 1: "v1_dart.swf", 2: "v2_dart.swf", 3: "v3_dart.swf" },
  diskthrow: { 1: "v1_diskthrow.swf" },
  dolphinshow: { 1: "dolphinshow.swf" },
  edible: { 1: "edible.swf" },
  battlequiz: { 1: "battlequiz.swf" },
  escape: { 1: "v1_escape.swf", 2: "v2_escape.swf", 3: "v3_escape.swf" },
  flowerbox: { 1: "flower01.swf", 2: "flower02.swf", 3: "flower03.swf" },
  exploration: { 1: "v1_exploration.swf", 2: "v2_exploration.swf", 3: "v3_exploration.swf" },
  festival: { 1: "festival_01.swf", 2: "festival_02.swf", 3: "festival_03.swf" },
  fishing: { 1: "v1_fishing.swf", 2: "v2_fishing.swf", 3: "v3_fishing.swf" },
  helpanimals: { 1: "helpanimals.swf" },
  influenza: { 1: "influenza_01.swf", 2: "influenza_02.swf", 3: "influenza_03.swf" },
  jump: { 1: "v1_jumpjump.swf", 2: "v2_jumpjump.swf", 3: "v3_jumpjump.swf" },
  magictraining: { 1: "magictraining_01.swf", 3: "magictraining_03.swf" },
  maze: { 1: "maze.swf" },
  monkey: { 1: "monkey.swf" },
  mothqueen: { 1: "mothqueen.swf" },
  post: { 1: "post_01.swf", 2: "post_02.swf", 3: "post_03.swf" },
  puzzle: { 1: "puzzle_01.swf", 2: "puzzle_02.swf", 3: "puzzle_03.swf" },
  push: { 1: "v1_push.swf", 3: "v3_push.swf" },
  snowball: { 3: "snow_03.swf" },
  snowcraft: { 1: "snowcraft_01.swf", 3: "snowcraft_03.swf" },
  snowmonstar: { 1: "snowmonstar.swf" },
  taxi: { 1: "taxi.swf" },
  viking: { 1: "viking_01.swf", 2: "viking_02.swf", 3: "viking_03.swf" },
  weasel: { 1: "weasel.swf" },
  witch: { 1: "witch.swf" },
  wool: { 1: "wool.swf" },
};

const SIZE = {
  bread: { w: 650, h: 500 },
  dart: { w: 600, h: 500 },
};
const DEF = { w: 660, h: 552 };

function parseList(level) {
  const file = path.join(RAW, "pointshop", `list.php%3flevel%3d${level}.html`);
  const html = fs.readFileSync(file, "utf8");
  const items = [];
  const re =
    /\/pointshop\/([a-z0-9_]+)\/(?:v\d_[^"]*|festival_0\d|snowball_0\d)\.php[^"]*"><img[^>]+src="\.\/new_pet\/game\/([^"]+)"[\s\S]*?id="nodeco"><font[^>]*><b>([^<]+)<\/b>/g;
  let m;
  while ((m = re.exec(html))) {
    items.push({ id: m[1], thumb: m[2], name: m[3], level });
  }
  return items;
}

const games = [];
for (const level of [1, 2, 3]) {
  for (const item of parseList(level)) {
    const swf = SWF[item.id]?.[level] ?? null;
    const sz = SIZE[item.id] ?? DEF;
    games.push({
      id: item.id,
      name: item.name,
      level,
      thumb: item.thumb,
      swf,
      width: swf ? sz.w : null,
      height: swf ? sz.h : null,
      playable: !!swf,
    });
  }
}

fs.mkdirSync(SWF_DEST, { recursive: true });
fs.mkdirSync(GAME_IMG, { recursive: true });

const swfFiles = [
  ...new Set([
    ...fs.readdirSync(SWF_SRC).filter((f) => f.endsWith(".swf")),
    ...fs.readdirSync(SWF_DEST).filter((f) => f.endsWith(".swf")),
  ]),
];
for (const f of fs.readdirSync(SWF_SRC).filter((x) => x.endsWith(".swf"))) {
  fs.copyFileSync(path.join(SWF_SRC, f), path.join(SWF_DEST, f));
}

const thumbs = new Set(games.map((g) => g.thumb));
for (const t of thumbs) {
  const src = path.join(NP, "game", t);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(GAME_IMG, t));
  else console.error("MISSING thumb", t);
}

const chrome = [
  "level1.gif", "level1_ani.gif", "level1_desc.gif",
  "level2.gif", "level2_ani.gif", "level2_desc.gif",
  "level3.gif", "level3_ani.gif", "level3_desc.gif",
  "te_school05.gif", "te_school06.gif",
  "icon_point_game01.gif", "te_poing_game05.gif", "te_poing_game06.gif",
  "te_poing_game07.gif", "te_poing_game08.gif",
  "bg_point_game02.gif", "btn_first_point02.gif",
];
for (const f of chrome) {
  const src = path.join(NP, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(ASSET, f));
}

const used = new Set(games.filter((g) => g.swf).map((g) => g.swf));
const unused = swfFiles.filter((f) => !used.has(f));
if (unused.length) console.error("UNUSED swf:", unused.join(", "));

fs.writeFileSync(DATA, JSON.stringify(games, null, 2));
console.error(`games: ${games.length}, playable: ${games.filter((g) => g.playable).length}, swf: ${swfFiles.length}`);
