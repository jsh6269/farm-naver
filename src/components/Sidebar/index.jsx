import React, { useState } from "react";
import { Link } from "react-router-dom";

import leftBtnMyfarmGo from "../../assets/sidebar/left_btn_myfarm_go02.gif";
import farmIcon from "../../assets/sidebar/left_new17.gif";

// 탭 메뉴
import tab01d from "../../assets/sidebar/left0611_tab01d.gif";
import tab01u from "../../assets/sidebar/left0611_tab01u.gif";
import tab02d from "../../assets/sidebar/left0611_tab02d.gif";
import tab02u from "../../assets/sidebar/left0611_tab02u.gif";

// 친한 농장 목록
import muAll from "../../assets/sidebar/left0611_mu_all.gif";

// 농장 대표 이미지 (예시)
import farmMainImg from "../../assets/sidebar/left_new12.gif";

import { topMenus, farmMenu, villageMenu } from "./tab";

// 롤오버 메뉴 버튼
function RolloverMenuButton({ href, off, on, alt }) {
  return (
    <Link
      to={href}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
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
    </Link>
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

export default function FarmSidebar() {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-[145px] ml-[19.5px] mr-[12px] mb-[15px] mt-1 flex flex-col items-center font-sans text-[15px]">
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
