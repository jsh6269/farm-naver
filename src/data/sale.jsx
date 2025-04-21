// 아이템 이미지 import
import heavenssword from "../assets/item/heavenssword.gif";
import festival_crown02 from "../assets/item/festival_crown02.gif";
import festival_crown03 from "../assets/item/festival_crown03.gif";
import star_medal from "../assets/item/star_medal.gif";
import wisdom_crown01 from "../assets/item/wisdom_crown01.gif";
import Cloud_Big from "../assets/item/Cloud_Big.gif";
import cavegame_king_medal from "../assets/item/cavegame_king_medal.gif";
import starfootprint from "../assets/item/starfootprint.gif";
import lotuslamp from "../assets/item/lotuslamp.gif";
import oldlamp from "../assets/item/oldlamp.gif";

import icon_list_limited from "../assets/sale/icon_list_limited.gif";
import icon_list_hot from "../assets/sale/icon_list_hot.gif";

// 아이템 데이터 배열
const items = [
  {
    id: "77062168",
    img: heavenssword,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">천상의 검</span>
        <img src={icon_list_limited} alt="" className="inline" />
      </>
    ),
    desc: "'",
    price: "1000000 P",
    user: "ksg0096",
    end: "01/09 00:33:43",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062168%2526page%253d1.html",
  },
  {
    id: "77062172",
    img: festival_crown02,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">2등 페스티벌 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: "'",
    price: "100000 P",
    user: "ksg0096",
    end: "01/09 00:34:40",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062172%2526page%253d1.html",
  },
  {
    id: "77062174",
    img: festival_crown02,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">2등 페스티벌 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: "'",
    price: "100000 P",
    user: "ksg0096",
    end: "01/09 00:35:04",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062174%2526page%253d1.html",
  },
  {
    id: "77062169",
    img: festival_crown03,
    name: (
      <>
        <span className="text-[#C00854] font-bold">1등 페스티벌 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: ".",
    price: "100000 P",
    user: "ksg0096",
    end: "01/09 00:33:56",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062169%2526page%253d1.html",
  },
  {
    id: "77062176",
    img: heavenssword,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">천상의 검</span>
        <img src={icon_list_limited} alt="" className="inline" />
      </>
    ),
    desc: "''",
    price: "1000000 P",
    user: "ksg0096",
    end: "01/09 00:35:27",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062176%2526page%253d1.html",
  },
  {
    id: "77075508",
    img: star_medal,
    name: "크라라의 훈장",
    desc: "부자님부탁합니다.",
    price: "100 P",
    user: "zhzh5032",
    end: "01/10 00:32:32",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075508%2526page%253d1.html",
  },
  {
    id: "77075507",
    img: wisdom_crown01,
    name: (
      <>
        <span className="text-[#6B6A64] font-bold">지식의 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: "떠리떠리 10%할인",
    price: "2000 P",
    user: "12foemtmxhsw",
    end: "01/10 00:31:57",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075507%2526page%253d1.html",
  },
  {
    id: "77075506",
    img: Cloud_Big,
    name: "큰 뭉게뭉게 구름",
    desc: "울지않을래더멋진남잘...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:31:51",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075506%2526page%253d1.html",
  },
  {
    id: "77075505",
    img: cavegame_king_medal,
    name: "뭉게왕의 훈장",
    desc: "비매품",
    price: "100000 P",
    user: "gllmon",
    end: "01/10 00:31:47",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075505%2526page%253d1.html",
  },
  {
    id: "77075504",
    img: starfootprint,
    name: (
      <>
        별들의 발자국
        <img src={icon_list_limited} alt="" className="inline" />
      </>
    ),
    desc: ".",
    price: "0 P",
    user: "gllmon",
    end: "01/10 00:31:33",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075504%2526page%253d1.html",
  },
  {
    id: "77075503",
    img: lotuslamp,
    name: "연꽃 등",
    desc: "또각또각걸어가려해보...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:31:33",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075503%2526page%253d1.html",
  },
  {
    id: "77075502",
    img: Cloud_Big,
    name: "큰 뭉게뭉게 구름",
    desc: "하이힐에짧은치마모두...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:31:15",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075502%2526page%253d1.html",
  },
  {
    id: "77075501",
    img: oldlamp,
    name: "청사초롱",
    desc: "너없이도슬프지않아무...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:30:56",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075501%2526page%253d1.html",
  },
];
export default items;
