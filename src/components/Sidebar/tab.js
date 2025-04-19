// 상단 고정 메뉴
import muB01Off from "../../assets/sidebar/left0611_mu_b01.gif";
import muB01On from "../../assets/sidebar/left0611_mu_b01on.gif";
import muB02Off from "../../assets/sidebar/left0611_mu_b02.gif";
import muB02On from "../../assets/sidebar/left0611_mu_b02on.gif";
import muB03Off from "../../assets/sidebar/left0611_mu_b03.gif";
import muB03On from "../../assets/sidebar/left0611_mu_b03on.gif";
import muB04Off from "../../assets/sidebar/left0611_mu_b04.gif";
import muB04On from "../../assets/sidebar/left0611_mu_b04on.gif";
import muB06Off from "../../assets/sidebar/left0611_mu_b06.gif";
import muB06On from "../../assets/sidebar/left0611_mu_b06on.gif";

// 농장 메뉴
import tab01Mu11Off from "../../assets/sidebar/left0611_tab01_mu11off.gif";
import tab01Mu11On from "../../assets/sidebar/left0611_tab01_mu11on.gif";
import tab01Mu12Off from "../../assets/sidebar/left0611_tab01_mu12off.gif";
import tab01Mu12On from "../../assets/sidebar/left0611_tab01_mu12on.gif";
import tab01Mu05Off from "../../assets/sidebar/left0611_tab01_mu05.gif";
import tab01Mu05On from "../../assets/sidebar/left0611_tab01_mu05on.gif";
import tab01Mu02Off from "../../assets/sidebar/left0611_tab01_mu02.gif";
import tab01Mu02On from "../../assets/sidebar/left0611_tab01_mu02on.gif";
import tab01Mu03Off from "../../assets/sidebar/left0611_tab01_mu03.gif";
import tab01Mu03On from "../../assets/sidebar/left0611_tab01_mu03on.gif";
import tab01Mu08Off from "../../assets/sidebar/left0611_tab01_mu08.gif";
import tab01Mu08On from "../../assets/sidebar/left0611_tab01_mu08on.gif";
import tab01Mu01Off from "../../assets/sidebar/left0611_tab01_mu01.gif";
import tab01Mu01On from "../../assets/sidebar/left0611_tab01_mu01on.gif";
import tab01Mu04Off from "../../assets/sidebar/left0611_tab01_mu04.gif";
import tab01Mu04On from "../../assets/sidebar/left0611_tab01_mu04on.gif";
import tab01Mu07Off from "../../assets/sidebar/left0611_tab01_mu07.gif";
import tab01Mu07On from "../../assets/sidebar/left0611_tab01_mu07on.gif";
import tab01Mu06Off from "../../assets/sidebar/left0611_tab01_mu06.gif";
import tab01Mu06On from "../../assets/sidebar/left0611_tab01_mu06on.gif";

// 마을 메뉴
import tab02Mu01Off from "../../assets/sidebar/left0611_tab02_mu01.gif";
import tab02Mu01On from "../../assets/sidebar/left0611_tab02_mu01on.gif";
import tab02Mu02Off from "../../assets/sidebar/left0611_tab02_mu02.gif";
import tab02Mu02On from "../../assets/sidebar/left0611_tab02_mu02on.gif";
import tab02Mu03Off from "../../assets/sidebar/left0611_tab02_mu03.gif";
import tab02Mu03On from "../../assets/sidebar/left0611_tab02_mu03on.gif";
import tab02Mu04Off from "../../assets/sidebar/left0611_tab02_mu04.gif";
import tab02Mu04On from "../../assets/sidebar/left0611_tab02_mu04on.gif";
import tab02Mu05Off from "../../assets/sidebar/left0611_tab02_mu05.gif";
import tab02Mu05On from "../../assets/sidebar/left0611_tab02_mu05on.gif";
import tab02Mu06Off from "../../assets/sidebar/left0611_tab02_mu06.gif";
import tab02Mu06On from "../../assets/sidebar/left0611_tab02_mu06on.gif";
import tab02Mu07Off from "../../assets/sidebar/left0611_tab02_mu07.gif";
import tab02Mu07On from "../../assets/sidebar/left0611_tab02_mu07on.gif";
import tab02Mu08Off from "../../assets/sidebar/left0611_tab02_mu08.gif";
import tab02Mu08On from "../../assets/sidebar/left0611_tab02_mu08on.gif";
import tab02Mu09Off from "../../assets/sidebar/left0611_tab02_mu09.gif";
import tab02Mu09On from "../../assets/sidebar/left0611_tab02_mu09on.gif";

const topMenus = [
  {
    href: "/pointshop",
    off: muB01Off,
    on: muB01On,
    alt: "포인트 게임",
  },
  {
    href: "/itemshop",
    off: muB02Off,
    on: muB02On,
    alt: "아이템 가게",
  },
  {
    href: "/sale",
    off: muB03Off,
    on: muB03On,
    alt: "와글와글 장터",
  },
  {
    href: "/petshop",
    off: muB04Off,
    on: muB04On,
    alt: "동물가게",
  },
  {
    href: "/room/red",
    off: muB06Off,
    on: muB06On,
    alt: "우리마을 가기",
  },
];

const farmMenu = [
  {
    href: "/crystal",
    off: tab01Mu11Off,
    on: tab01Mu11On,
    alt: "라즈벨의 수정구슬",
  },
  {
    href: "/comic",
    off: tab01Mu12Off,
    on: tab01Mu12On,
    alt: "코믹북",
  },
  {
    href: "/festival",
    off: tab01Mu05Off,
    on: tab01Mu05On,
    alt: "페스티벌",
  },
  {
    href: "/foodshop",
    off: tab01Mu02Off,
    on: tab01Mu02On,
    alt: "쿠킹샵",
  },
  {
    href: "/mix_dog",
    off: tab01Mu03Off,
    on: tab01Mu03On,
    alt: "연금술",
  },
  {
    href: "/merchant",
    off: tab01Mu08Off,
    on: tab01Mu08On,
    alt: "중고상인",
  },
  {
    href: "/hospital",
    off: tab01Mu01Off,
    on: tab01Mu01On,
    alt: "동물병원",
  },
  {
    href: "/school",
    off: tab01Mu04Off,
    on: tab01Mu04On,
    alt: "동물학교",
  },
  {
    href: "/post",
    off: tab01Mu07Off,
    on: tab01Mu07On,
    alt: "우체국",
  },
  {
    href: "/explore",
    off: tab01Mu06Off,
    on: tab01Mu06On,
    alt: "탐험",
  },
];

const villageMenu = [
  {
    href: "/room",
    off: tab02Mu01Off,
    on: tab02Mu01On,
    alt: "우리마을 가기",
  },
  {
    href: "/work",
    off: tab02Mu02Off,
    on: tab02Mu02On,
    alt: "일하기",
  },
  {
    href: "/bank",
    off: tab02Mu03Off,
    on: tab02Mu03On,
    alt: "은행",
  },
  {
    href: "/travel",
    off: tab02Mu04Off,
    on: tab02Mu04On,
    alt: "여행",
  },
  {
    href: "/castle",
    off: tab02Mu05Off,
    on: tab02Mu05On,
    alt: "성",
  },
  {
    href: "/department",
    off: tab02Mu06Off,
    on: tab02Mu06On,
    alt: "백화점",
  },
  {
    href: "/park",
    off: tab02Mu07Off,
    on: tab02Mu07On,
    alt: "공원",
  },
  {
    href: "/play",
    off: tab02Mu08Off,
    on: tab02Mu08On,
    alt: "놀이터",
  },
  {
    href: "/library",
    off: tab02Mu09Off,
    on: tab02Mu09On,
    alt: "도서관",
  },
];

export { topMenus, farmMenu, villageMenu };
