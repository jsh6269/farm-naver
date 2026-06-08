import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import list from "../data/adoptList.json";

const petImgs = import.meta.glob("../assets/petshop/pet/*.gif", {
  eager: true,
  import: "default",
});
const uiImgs = import.meta.glob("../assets/petshop/adopt/*.gif", {
  eager: true,
  import: "default",
});
const pet = (f) => petImgs[`../assets/petshop/pet/${f}`];
const ui = (f) => uiImgs[`../assets/petshop/adopt/${f}`];

const GROWTH_MAX = 20;
const STATS = [
  { label: "애정지수", color: "#FF86C7" },
  { label: "매력지수", color: "#FFC600" },
  { label: "건강지수", color: "#4BBCDD" },
  { label: "지식지수", color: "#78D613" },
];

// 말풍선(원본 bbs_talk.gif 대체)
function Bubble({ children }) {
  return (
    <div className="relative w-[154px]">
      <div className="min-h-[80px] bg-white border border-[#E0D2F2] rounded-[10px] px-3 py-3 text-[12px] text-[#555] leading-[16px] flex items-center justify-center text-center">
        {children}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 bg-white border-b border-r border-[#E0D2F2] rotate-45" />
    </div>
  );
}

function StatBar({ label, color, pct }) {
  return (
    <div className="flex items-center justify-center h-5">
      <span className="w-[61px] text-center text-[12px] text-black">
        {label} :
      </span>
      <span className="inline-flex items-center">
        <img src={ui("img_info12.gif")} alt="" className="block" />
        <span className="block w-[65px] h-[11px] bg-white">
          <span
            className="block h-full"
            style={{ width: `${pct}%`, backgroundColor: color }}
          />
        </span>
        <img src={ui("img_info10.gif")} alt="" className="block" />
      </span>
    </div>
  );
}

function SubHeader() {
  return (
    <>
      <img src={ui("sub_tit23.gif")} alt="동물 입양" className="ml-2.5" />
      <img
        src={ui("img_protect03.gif")}
        alt="입양 안내"
        className="block w-full mt-1"
      />
    </>
  );
}

function FrameWrap({ children }) {
  return (
    <div className="bg-gradient-to-b from-[#fec4d8] to-[#f6f1ff] rounded-b-2xl px-2 pb-5">
      <div className="bg-white rounded-b-lg px-4 py-4 mx-[7px] w-[510px]">{children}</div>
    </div>
  );
}

function AdoptList({ onSelect }) {
  return (
    <div className="w-[537px] mx-auto pt-2 pb-4 font-gulim text-[12px]">
      <SubHeader />
      <FrameWrap>
        <div className="grid grid-cols-3 gap-x-2 gap-y-7 justify-items-center">
          {list.map((e, i) => (
            <button
              key={`${e.userId}-${e.petId}-${i}`}
              onClick={() => onSelect(e)}
              className="w-[154px] flex flex-col items-center cursor-pointer"
            >
              <Bubble>“{e.message}”</Bubble>
              <div className="h-[110px] flex items-end justify-center mt-3">
                <img src={pet(e.img)} alt={e.petId} className="max-h-[110px]" />
              </div>
              <span className="mt-2 text-[12px] font-bold text-[#317806]">
                {e.nick}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <Link to="/petshop">
            <img
              src={ui("btn_first_animal.gif")}
              alt="처음으로"
              width="209"
              height="68"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </FrameWrap>
    </div>
  );
}

function AdoptDetail({ entry, onBack }) {
  const pct = Math.min(100, Math.round((entry.status / GROWTH_MAX) * 100));
  const baseImg = `${entry.petId}.gif`;
  const adopt = () =>
    window.alert("입양은 로그인 후 이용할 수 있어요.");

  return (
    <div className="w-[537px] mx-auto pt-2 pb-4 font-gulim text-[12px]">
      <SubHeader />
      <FrameWrap>
        <div className="flex justify-center mt-4">
          <div className="w-[141px] flex items-start justify-center">
            <img
              src={pet(baseImg)}
              alt={entry.petId}
              className="max-h-[135px] mt-1"
            />
          </div>
          <div className="flex items-start justify-center pt-1 mr-6">
            <img src={ui("img_protect04.gif")} alt="" />
          </div>
          <div className="w-[154px]">
            <div className="bg-[#F9FFC6] rounded-md py-3 flex flex-col gap-1.5">
              {STATS.map((s) => (
                <StatBar key={s.label} label={s.label} color={s.color} pct={pct} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 pl-10 text-[12px] leading-[18px] text-black">
          <p className="flex items-start gap-1.5 mb-2">
            <img src={ui("icon_14.gif")} alt="" className="mt-1" />
            <span>
              이름 : <b>{entry.nick}</b>
            </span>
          </p>
          <p className="flex items-start gap-1.5 mb-2">
            <img src={ui("icon_14.gif")} alt="" className="mt-1" />
            <span>성별 : 비공개</span>
          </p>
          <p className="flex items-start gap-1.5">
            <img src={ui("icon_14.gif")} alt="" className="mt-1" />
            <span>특징 : {entry.message}</span>
          </p>
        </div>

        <div className="mt-5 text-center">
          <button onClick={adopt} className="cursor-pointer">
            <img src={ui("btn_protect02.gif")} alt="입양하기" width="114" height="36" />
          </button>
        </div>

        <div className="mt-5 flex justify-center">
          <button onClick={onBack} className="cursor-pointer">
            <img src={ui("btn_first_animal.gif")} alt="목록으로" width="209" height="68" />
          </button>
        </div>
      </FrameWrap>
    </div>
  );
}

function AdoptContent() {
  const [selected, setSelected] = useState(null);
  return selected ? (
    <AdoptDetail entry={selected} onBack={() => setSelected(null)} />
  ) : (
    <AdoptList onSelect={setSelected} />
  );
}

const PetShopAdoptPage = () => (
  <div className="bg-[#ccb4fd] rounded-2xl flex">
    <div className="mt-1 font-gulim">
      <span className="text-[12px] text-start ml-5">
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp;
        <Link to="/petshop" className="text-blue-700">
          동물가게
        </Link>
        &nbsp; &gt; &nbsp; 동물 입양
        <Sidebar />
      </span>
    </div>
    <div className="w-[555px] self-start bg-white rounded-2xl mt-[33px] mr-5 mb-6">
      <AdoptContent />
    </div>
  </div>
);

export default PetShopAdoptPage;
