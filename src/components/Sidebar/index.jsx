import React, { useState } from "react";

// 이미지 import (예시: src/assets/new_pet/left/...)
import leftBtnMyfarmGo from "../../assets/sidebar/left_btn_myfarm_go02.gif";
import farmIcon from "../../assets/sidebar/left_new17.gif";

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

// 탭 메뉴
import tab01d from "../../assets/sidebar/left0611_tab01d.gif";
import tab01u from "../../assets/sidebar/left0611_tab01u.gif";
import tab02d from "../../assets/sidebar/left0611_tab02d.gif";
import tab02u from "../../assets/sidebar/left0611_tab02u.gif";

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

// 친한 농장 목록
import muAll from "../../assets/sidebar/left0611_mu_all.gif";

// 농장 대표 이미지 (예시)
import farmMainImg from "../../assets/sidebar/left_new12.gif";

// 롤오버 메뉴 버튼
function RolloverMenuButton({ href, off, on, alt }) {
  return (
    <a
      href={href}
      tabIndex={-1}
      className="block w-[131px] h-[23px] relative group my-0.5"
    >
      <img
        src={off}
        alt={alt + "_off"}
        className="object-cover w-full h-full"
        draggable={false}
      />
      <img
        src={on}
        alt={alt + "_on"}
        className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100"
        draggable={false}
      />
    </a>
  );
}

function TabMenu({ active, setActive, on, off, alt }) {
  return (
    <div className="flex flex-col items-center w-[131px] mx-auto mt-2 mb-1">
      <div className="flex">
        <button className="focus:outline-none" onClick={() => setActive(0)}>
          <img
            src={active === 0 ? on : off}
            alt={alt}
            width={131}
            height={29}
            draggable={false}
          />
        </button>
      </div>
    </div>
  );
}

const topMenus = [
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/pointshop/",
    off: muB01Off,
    on: muB01On,
    alt: "포인트 게임",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/itemshop/",
    off: muB02Off,
    on: muB02On,
    alt: "아이템 가게",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/sale/",
    off: muB03Off,
    on: muB03On,
    alt: "와글와글 장터",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/petshop/",
    off: muB04Off,
    on: muB04On,
    alt: "동물가게",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/room/main.php%253fwhere%253dmy.html",
    off: muB06Off,
    on: muB06On,
    alt: "우리마을 가기",
  },
];

const farmMenu = [
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/crystal/",
    off: tab01Mu11Off,
    on: tab01Mu11On,
    alt: "라즈벨의 수정구슬",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/comic/",
    off: tab01Mu12Off,
    on: tab01Mu12On,
    alt: "코믹북",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/festival/",
    off: tab01Mu05Off,
    on: tab01Mu05On,
    alt: "페스티벌",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/foodshop/",
    off: tab01Mu02Off,
    on: tab01Mu02On,
    alt: "쿠킹샵",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/mix_dog/",
    off: tab01Mu03Off,
    on: tab01Mu03On,
    alt: "연금술",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/room/merchant/",
    off: tab01Mu08Off,
    on: tab01Mu08On,
    alt: "중고상인",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/hospital/",
    off: tab01Mu01Off,
    on: tab01Mu01On,
    alt: "동물병원",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/school/",
    off: tab01Mu04Off,
    on: tab01Mu04On,
    alt: "동물학교",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/post/",
    off: tab01Mu07Off,
    on: tab01Mu07On,
    alt: "우체국",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/explore/home.php.html",
    off: tab01Mu06Off,
    on: tab01Mu06On,
    alt: "탐험",
  },
];

const villageMenu = [
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/room/",
    off: tab02Mu01Off,
    on: tab02Mu01On,
    alt: "우리마을 가기",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/work/",
    off: tab02Mu02Off,
    on: tab02Mu02On,
    alt: "일하기",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/bank/",
    off: tab02Mu03Off,
    on: tab02Mu03On,
    alt: "은행",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/travel/",
    off: tab02Mu04Off,
    on: tab02Mu04On,
    alt: "여행",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/castle/?where=my",
    off: tab02Mu05Off,
    on: tab02Mu05On,
    alt: "성",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/department/?where=my",
    off: tab02Mu06Off,
    on: tab02Mu06On,
    alt: "백화점",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/institution/park/?where=my",
    off: tab02Mu07Off,
    on: tab02Mu07On,
    alt: "공원",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/institution/play/?where=my",
    off: tab02Mu08Off,
    on: tab02Mu08On,
    alt: "놀이터",
  },
  {
    href: "https://jsh6269.github.io/farm.jr.naver.com/institution/library/?where=my",
    off: tab02Mu09Off,
    on: tab02Mu09On,
    alt: "도서관",
  },
];

export default function FarmSidebar() {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-[145px] ml-[16px] mr-[12px] mb-[15px] mt-1 flex flex-col items-center font-sans text-[15px]">
      {/* 내 농장 바로가기 */}
      <div className="w-full rounded-2xl mb-2 pb-0.1">
        <div className="h-1/2 bg-[#00ACFF] rounded-t-2xl">
          <div className="flex items-center pt-2">
            <img
              src={leftBtnMyfarmGo}
              alt="내 농장 바로가기"
              className="w-full h-[30px] object-cover rounded-t-lg"
              draggable={false}
            />
          </div>
        </div>
        <div className="h-1/2 bg-[#AEEC1C] rounded-2xl pb-3">
          <img
            src={farmMainImg}
            alt="농장"
            className="mb-2"
            draggable={false}
          />
          <div className="text-green-700 text-[10px] text-left my-3 mx-1 leading-tight px-2">
            아직 농장이 없으신 분은
            <br />
            먼저 농장을 만드세요
          </div>
          <img
            src={farmIcon}
            alt="농장만들기"
            className="rounded-lg mx-auto"
            draggable={false}
          />
        </div>
      </div>

      {/* 상단 고정 메뉴 */}
      <div className="w-full bg-white rounded-2xl mb-2 flex flex-col items-center">
        <div className="my-1.5">
          {topMenus.map((item, idx) => (
            <RolloverMenuButton
              key={idx}
              href={item.href}
              off={item.off}
              on={item.on}
              alt={item.alt}
            />
          ))}
        </div>
      </div>

      {/* 탭 메뉴 (농장/마을) */}
      <div className="w-full bg-white rounded-2xl mb-2 flex flex-col items-center">
        <TabMenu
          active={tab}
          setActive={setTab}
          on={tab01d}
          off={tab01u}
          alt="농장 메뉴"
        />
        <div>
          {(tab === 0 ? farmMenu : villageMenu).map((item, idx) => (
            <RolloverMenuButton
              key={idx}
              href={item.href}
              off={item.off}
              on={item.on}
              alt={item.alt}
            />
          ))}
        </div>

        {/* 친한 농장 목록보기 */}
        <div className="w-full flex flex-col items-center">
          <TabMenu
            active={tab}
            setActive={setTab}
            on={tab02d}
            off={tab02u}
            alt="마을 메뉴"
          />
          <button
            className="w-[131px] h-[16px] bg-transparent border-none p-0 mb-4"
            onClick={() =>
              window.open(
                "http://farm.jr.naver.com/popup/friend.php?id=",
                "rqst",
                "toolbar=0,menubar=0,status=no,scrollbars=auto,resizable=yes,width=470,height=430"
              )
            }
          >
            <img src={muAll} alt="친한 농장 목록보기" draggable={false} />
          </button>
        </div>
      </div>
    </div>
  );
}
