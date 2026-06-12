import fs from "node:fs";

const files = {
  "festival/pet": "raw/festival/pet/index.php%3f.html",
  "festival/farm": "raw/festival/farm/index.html",
  "festival/album": "raw/festival/album/index.php%3f.html",
  "hospital/clinic": "raw/hospital/hospital.php.html",
  "hospital/pharmacy": "raw/hospital/medical_room.php.html",
  "hospital/ward": "raw/hospital/sick_room.php.html",
  "school/class": "raw/school/class.php%3f.html",
  "school/library": "raw/school/library/index.php%3f.html",
  drawing: "raw/drawing/index.html",
  talk: "raw/talk/index.php%3f.html",
  "mix/craft": "raw/mix_dog/mix_dog.php.html",
  "mix/mix": "raw/mix_dog/mix.php.html",
  foodshop: "raw/foodshop/mix.php.html",
  merchant: "raw/room/merchant/select.php.html",
};

for (const [k, f] of Object.entries(files)) {
  if (!fs.existsSync(f)) {
    console.log(k, "MISSING", f);
    continue;
  }
  const html = fs.readFileSync(f, "utf8");
  const re = /src="\.\/new_pet\/([^"]+)"/g;
  const imgs = [...html.matchAll(re)].map((m) => m[1]);
  const uniq = [...new Set(imgs)];
  console.log("===", k, uniq.length, "===");
  uniq.slice(0, 20).forEach((i) => console.log(" ", i));
}
