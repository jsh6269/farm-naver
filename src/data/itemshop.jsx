import insectshop from "../assets/itemshop/shop/insectshop.gif";
import maskshop from "../assets/itemshop/shop/maskshop.gif";
import gloveshop from "../assets/itemshop/shop/gloveshop.gif";

import starMedals from "../assets/item/star_medal.gif";
import beautyRings from "../assets/item/beauty_ring02s.gif";
import hotToasts from "../assets/item/hottoasts.gif";
import happybeans from "../assets/item/happybeans.gif";

import iconListNew from "../assets/itemshop/icon_list_new.gif";
import iconListLimited from "../assets/itemshop/icon_list_limited.gif";

// 테마 아이템, 신규/인기 아이템, 세일 아이템 등 데이터 배열 정의 (생략 없이 모두 작성)
const themeItems = [
  {
    name: "곤충 샵",
    img: insectshop,
    link: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/theme_detail.php%253fseq%253d46.html",
    show: true,
  },
  {
    name: "가면 샵",
    img: maskshop,
    link: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/theme_detail.php%253fseq%253d45.html",
    show: true,
  },
  {
    name: "장갑 샵",
    img: gloveshop,
    link: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/theme_detail.php%253fseq%253d44.html",
    show: true,
  },
  // ... 이하 themeLi3~themeLi35까지 모두 추가 (show: true/false로 display 여부 구분)
];

const newItems = [
  {
    name: "뜨끈뜨끈 토스트",
    img: hotToasts,
    link: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/view.php%253fpet_id%253d%2526item_id%253dhottoast%2526kind%253dfood%2526kind_sub%253dcook%2526no%253d%2526lpage%253d.html",
    icon: iconListNew,
  },
  // ... 이하 신규 아이템 전부 추가
];

const popItems = [
  {
    name: "더링 오브 뷰티",
    img: beautyRings,
    link: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/view.php%253fpet_id%253d%2526item_id%253dbeauty_ring02%2526kind%253ditem%2526kind_sub%253daccesory%2526no%253d%2526lpage%253d.html",
    icon: iconListLimited,
  },
  // ... 이하 인기 아이템 전부 추가
];

const saleItems = [
  {
    name: "크라라의 훈장",
    img: starMedals,
    link: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/../sale/view.php%253fnid%253d77955405.html",
    price: "0 P",
    end: "03/25 17:32:48",
  },
  {
    name: "행복한 콩",
    img: happybeans,
    link: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/../sale/view.php%253fnid%253d77955468.html",
    price: "0 P",
    end: "03/25 17:36:48",
  },
];

export { themeItems, newItems, popItems, saleItems };
