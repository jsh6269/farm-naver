import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import pets from "../data/petshopPets.json";
import noDye from "../assets/petshop/nono0221.gif";

// 동물 변형 이미지(성장/표정/색상)와 UI 크롬 이미지를 불러온다.
const petImgs = import.meta.glob("../assets/petshop/pet/*.gif", {
  eager: true,
  import: "default",
});
const uiImgs = import.meta.glob("../assets/petshop/shop/*.gif", {
  eager: true,
  import: "default",
});
const pet = (f) => petImgs[`../assets/petshop/pet/${f}`];
const ui = (f) => uiImgs[`../assets/petshop/shop/${f}`];

// 미리보기 파일명: {동물}{성장}{표정}{색상}.gif (없으면 성장 기본 이미지로 대체)
const previewFile = (id, grow, face, color) => {
  const f = `${id}${grow}${face}${color}.gif`;
  return pet(f) ? f : `${id}${grow}.gif`;
};

const GROWS = [
  { grow: "", tab: "select060221_txt01.gif" },
  { grow: "_1", tab: "select060221_txt02.gif" },
  { grow: "_2", tab: "select060221_txt03.gif" },
];
// 색상 스와치 파일명은 색상 접미사로부터 유도된다(_green -> petshop_green.gif).
const swatchOf = (color) => `petshop${color}.gif`;

// te_search 프레임으로 감싼 박스
function Framed({ height, children }) {
  return (
    <div className="w-[137px]">
      <img src={ui("te_search060221_01.gif")} alt="" className="block w-[137px]" />
      <div
        style={{
          backgroundImage: `url(${ui("te_search060221_03.gif")})`,
          minHeight: height,
        }}
        className="bg-repeat-y bg-top flex flex-col items-center justify-center py-1"
      >
        {children}
      </div>
      <img src={ui("te_search060221_02.gif")} alt="" className="block w-[137px]" />
    </div>
  );
}

function GrowthColumn({ id, grow, tab, colorList, face, color, onFace, onColor }) {
  const file = previewFile(id, grow, face, color);
  return (
    <div className="w-[137px] flex flex-col items-center">
      <Framed height={22}>
        <img src={ui(tab)} alt="성장 단계" />
      </Framed>
      <div className="h-2" />
      <div className="h-[100px] flex items-center justify-center mt-4 mb-2">
        <img src={pet(file)} alt={id} className="max-h-[130px]" />
      </div>
      <div className="h-2.5" />
      <Framed height={59}>
        <button onClick={onFace} className="cursor-pointer">
          <img src={ui("select060221_other.gif")} alt="기타 표정" width="122" height="27" />
        </button>
        {colorList.length > 0 ? (
          <div className="w-[122px] flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 mt-2 leading-[0]">
            {colorList.map((c) => (
              <button
                key={c}
                onClick={() => onColor(c)}
                className="cursor-pointer"
              >
                <img src={ui(swatchOf(c))} alt="색상" className="block" />
              </button>
            ))}
          </div>
        ) : (
          <img src={noDye} alt="적용할 수 있는 염색 물감이 없습니다" className="mt-2" />
        )}
      </Framed>
    </div>
  );
}

function ShopContent() {
  const [idx, setIdx] = useState(0);
  const [faces, setFaces] = useState(["", "", ""]);
  const [colors, setColors] = useState(["", "", ""]);

  const animal = pets[idx];
  const go = (next) => {
    setIdx(next);
    setFaces(["", "", ""]);
    setColors(["", "", ""]);
  };

  const setFace = (col) =>
    setFaces((f) => f.map((v, i) => (i === col ? (v ? "" : "_face1") : v)));
  const setColor = (col, color) =>
    setColors((c) => c.map((v, i) => (i === col ? color : v)));

  const adopt = () =>
    window.alert("분양은 로그인 후 이용할 수 있어요. (로그인 기능은 제공되지 않습니다)");
  const popup = () => window.alert("로그인 후 이용할 수 있어요.");

  return (
    <div className="w-[537px] mx-auto pt-2 pb-4 font-gulim text-[12px]">
      {/* 서브타이틀 + 헤더 배너 */}
      <img src={ui("sub_tit21.gif")} alt="동물 분양" className="ml-2.5" />
      <img
        src={ui("img_select01.gif")}
        alt="동물을 선택하세요"
        className="block w-full mt-1"
      />

      {/* 흰색 카드 (보라 프레임) */}
      <div className="bg-gradient-to-b from-[#fec4d8] to-[#f6f1ff] rounded-b-2xl px-2 pb-2">
        <div className="bg-white rounded-b-lg mx-[7px] px-4 py-4 w-[507px] mb-2">
          {/* 타이틀 바 */}
          <div className="flex items-center justify-between">
            <img src={pet(animal.title)} alt={animal.id} />
            <div className="flex items-center gap-1">
              <button onClick={popup} className="cursor-pointer">
                <img src={ui("btn_search060724_01.gif")} alt="종료된 동물 목록" />
              </button>
              <button onClick={popup} className="cursor-pointer">
                <img src={ui("btn_search060221_animal.gif")} alt="동물 성장과정" height="33" />
              </button>
            </div>
          </div>
          <div className="h-[2px] bg-[#E5E5E5] mt-1.5" />
          <div className="h-[15px]" />

          {/* 성장단계 3컬럼 + 이전/다음 */}
          <div className="flex items-start justify-center">
            <div className="w-[25px] flex items-center h-[230px]">
              {idx > 0 && (
                <button onClick={() => go(idx - 1)} className="cursor-pointer">
                  <img src={ui("btn_search060221_prev.gif")} alt="이전 동물" />
                </button>
              )}
            </div>
            {GROWS.map((g, col) => (
              <div key={g.grow || "base"} className={col > 0 ? "ml-4" : ""}>
                <GrowthColumn
                  id={animal.id}
                  grow={g.grow}
                  tab={g.tab}
                  colorList={animal.colors || []}
                  face={faces[col]}
                  color={colors[col]}
                  onFace={() => setFace(col)}
                  onColor={(c) => setColor(col, c)}
                />
              </div>
            ))}
            <div className="w-[25px] flex items-center justify-end h-[230px]">
              {idx < pets.length - 1 && (
                <button onClick={() => go(idx + 1)} className="cursor-pointer">
                  <img src={ui("btn_search060221_next.gif")} alt="다음 동물" />
                </button>
              )}
            </div>
          </div>

          {/* 색상 안내 */}
          <div className="mt-5 flex items-center">
            <img src={ui("select060724_color_txt.gif")} alt="색상 안내" className="mr-1.5" />
            <button onClick={popup} className="cursor-pointer">
              <img src={ui("btn_060724_color.gif")} alt="색상 보기" />
            </button>
          </div>

          {/* 분양받기 */}
          <div className="mt-4 text-center">
            <button onClick={adopt} className="cursor-pointer">
              <img src={ui("btn_animal_agree02.gif")} alt="분양받기" width="120" height="29" />
            </button>
          </div>

          <div className="h-[2px] bg-[#E5E5E5] mt-5" />
          <div className="mt-3 flex justify-center">
            <Link to="/petshop" className="inline-block cursor-pointer">
              <img src={ui("btn_first_animal.gif")} alt="동물가게 처음으로" width="209" height="68" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const PetShopShopPage = () => (
  <PageShell
    bgClassName="bg-[#ccb4fd]"
    contentClassName="w-[555px] bg-white rounded-2xl mt-[33px] mr-5 mb-6"
    breadcrumb={
      <>
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp;
        <Link to="/petshop" className="text-blue-700">
          동물가게
        </Link>
        &nbsp; &gt; &nbsp; 선택의 방
      </>
    }
  >
    <ShopContent />
  </PageShell>
);

export default PetShopShopPage;
