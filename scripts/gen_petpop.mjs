import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const NP = path.join(ROOT, "raw", "new_pet");
const DEST = path.join(ROOT, "src", "assets", "petshop", "pop");
fs.mkdirSync(DEST, { recursive: true });

const top = [
  "pop_logo.gif",
  "bg_magiccard_close.gif",
  "bg_magiccard_pop.gif",
  "txt_pop_magiccard14.gif",
  "txt_pop_magiccard15.gif",
  "txt_pop_magiccard16.gif",
  "txt_pop_magiccard17.gif",
  "txt_pop_magiccard18.gif",
  "txt_pop_magiccard19.gif",
  "txt_pop_magiccard20_1.gif",
  "pop_magiccard_img04.gif",
  "pop13_1.gif",
  "pop13_2.gif",
  "pop13_3.gif",
];
const cards = [
  "c_rlflsps.gif",
  "c_frogs.gif",
  "c_dicerorhininaes.gif",
  "c_cats.gif",
  "c_firewalls.gif",
  "c_meteors.gif",
  "c_icehails.gif",
];

let n = 0;
for (const f of top) {
  const src = path.join(NP, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DEST, f));
    n++;
  } else console.error("MISSING", f);
}
for (const f of cards) {
  const src = path.join(NP, "card", f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DEST, f));
    n++;
  } else console.error("MISSING card", f);
}
console.error(`copied ${n}/${top.length + cards.length}`);
