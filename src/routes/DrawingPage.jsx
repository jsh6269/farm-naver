import { useState } from "react";
import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

const drawingImgs = import.meta.glob("../assets/drawing/*.gif", {
  eager: true,
  import: "default",
});

const img = (name) => drawingImgs[`../assets/drawing/${name}`];

const PETS = [
  { id: "1", off: "pmu01_off.gif", text: "pmu01_text.gif", label: "곰" },
  { id: "2", off: "pmu02_off.gif", text: "pmu02_text.gif", label: "고양이" },
  { id: "3", off: "pmu03_off.gif", text: "pmu03_text.gif", label: "강아지" },
  { id: "4", off: "pmu04_off.gif", text: "pmu04_text.gif", label: "토끼" },
  { id: "5", off: "pmu05_off.gif", text: "pmu05_text.gif", label: "여우" },
  { id: "6", off: "pmu06_off.gif", text: "pmu06_text.gif", label: "사슴" },
  { id: "7", off: "pmu07_off.gif", text: "pmu07_text.gif", label: "돼지" },
  { id: "8", off: "pmu08_off.gif", text: "pmu08_text.gif", label: "양" },
  { id: "9", off: "pmu09_off.gif", text: "pmu09_text.gif", label: "원숭이" },
  { id: "10", off: "pmu10_off.gif", text: "pmu10_text.gif", label: "펭귄" },
  { id: "11", off: "pmu11_off.gif", text: "pmu11_text.gif", label: "코알라" },
  { id: "12", off: "pmu12_off.gif", text: "pmu12_text.gif", label: "다람쥐" },
  { id: "13", off: "pmu13_off.gif", text: "pmu13_text.gif", label: "캥거루" },
  { id: "14", off: "pmu14_off.gif", text: "pmu14_text.gif", label: "앵무새" },
  { id: "15", off: "pmu15_off.gif", text: "pmu15_text.gif", label: "호랑이" },
  { id: "16", off: "pmu16_off.gif", text: "pmu16_text.gif", label: "사자" },
  { id: "17", off: "pmu17_off.gif", text: "pmu17_text.gif", label: "기린" },
  { id: "18", off: "pmu18_off.gif", text: "pmu18_text.gif", label: "코끼리" },
  { id: "19", off: "pmu19_off.gif", text: "pmu19_text.gif", label: "하마" },
];

function PetButton({ pet, hoverId, setHoverId }) {
  const show = hoverId === pet.id;
  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="cursor-pointer block p-0 border-0 bg-transparent"
        onMouseEnter={() => setHoverId(pet.id)}
        onMouseLeave={() => setHoverId(null)}
        onClick={() => alert("로그인 후 색칠하기를 할 수 있습니다.")}
      >
        <img src={img(pet.off)} alt={pet.label} />
      </button>
      {show && img(pet.text) && (
        <img
          src={img(pet.text)}
          alt=""
          className="absolute z-10 pointer-events-none"
          style={{ top: -54, left: 0 }}
        />
      )}
    </div>
  );
}

const DrawingPage = () => {
  const [hoverId, setHoverId] = useState(null);

  return (
    <PageShell
      bgClassName="bg-[#8ed0ff]"
      contentClassName="w-[750px] mt-[33px] mr-5 overflow-x-auto"
      breadcrumb={
        <>
          <FarmCrumb />
          <CrumbSep />
          <CrumbLink to="/school">동물학교</CrumbLink>
          <CrumbSep />
          색칠하기
        </>
      }
    >
      <div className="w-[750px] font-gulim text-[12px] pb-4">
        <div className="flex">
          <PetButton pet={PETS[0]} hoverId={hoverId} setHoverId={setHoverId} />
          <PetButton pet={PETS[1]} hoverId={hoverId} setHoverId={setHoverId} />
          <div>
            <PetButton pet={PETS[2]} hoverId={hoverId} setHoverId={setHoverId} />
            <PetButton pet={PETS[3]} hoverId={hoverId} setHoverId={setHoverId} />
          </div>
          <PetButton pet={PETS[4]} hoverId={hoverId} setHoverId={setHoverId} />
          <PetButton pet={PETS[5]} hoverId={hoverId} setHoverId={setHoverId} />
          <div>
            <PetButton pet={PETS[6]} hoverId={hoverId} setHoverId={setHoverId} />
            <PetButton pet={PETS[7]} hoverId={hoverId} setHoverId={setHoverId} />
          </div>
          <PetButton pet={PETS[8]} hoverId={hoverId} setHoverId={setHoverId} />
          <PetButton pet={PETS[9]} hoverId={hoverId} setHoverId={setHoverId} />
        </div>

        <div className="flex">
          <button type="button" className="cursor-pointer p-0 border-0 bg-transparent" onClick={() => alert("로그인 후 색칠하기를 할 수 있습니다.")}>
            <img src={img("painting_img01.gif")} alt="색칠하기" />
          </button>
          <div>
            <div className="flex">
              <img src={img("painting_img02.gif")} alt="" />
              <PetButton pet={PETS[11]} hoverId={hoverId} setHoverId={setHoverId} />
              <img src={img("painting_img03.gif")} alt="" />
            </div>
            <div className="flex">
              <img src={img("painting_img04.gif")} alt="" />
              <PetButton pet={PETS[12]} hoverId={hoverId} setHoverId={setHoverId} />
              <PetButton pet={PETS[13]} hoverId={hoverId} setHoverId={setHoverId} />
            </div>
            <div className="flex">
              <PetButton pet={PETS[14]} hoverId={hoverId} setHoverId={setHoverId} />
              <PetButton pet={PETS[15]} hoverId={hoverId} setHoverId={setHoverId} />
              <PetButton pet={PETS[16]} hoverId={hoverId} setHoverId={setHoverId} />
              <PetButton pet={PETS[17]} hoverId={hoverId} setHoverId={setHoverId} />
              <PetButton pet={PETS[18]} hoverId={hoverId} setHoverId={setHoverId} />
            </div>
          </div>
          <PetButton pet={PETS[10]} hoverId={hoverId} setHoverId={setHoverId} />
        </div>
      </div>
    </PageShell>
  );
};

export default DrawingPage;
