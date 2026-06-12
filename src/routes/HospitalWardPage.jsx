import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import header from "../assets/hospital/img_hospital05.gif";
import imgSearchTitle from "../assets/hospital/img_farm29_03.gif";
import frameL from "../assets/hospital/img_hospital_left.gif";
import frameR from "../assets/hospital/img_hospital_right.gif";
import teSearchL from "../assets/hospital/te_festival28_01.gif";
import teSearchR from "../assets/hospital/te_festival28_02.gif";
import imgSearchId from "../assets/hospital/img_festival28_03.gif";
import btnSearch from "../assets/hospital/btn_festival28_search.gif";
import teBL from "../assets/hospital/te_select03.gif";
import teBR from "../assets/hospital/te_select04.gif";
import teBarBL from "../assets/hospital/te_school13.gif";
import teBarBR from "../assets/hospital/te_school14.gif";
import teBottomL from "../assets/hospital/te05_item05.gif";
import teBottomR from "../assets/hospital/te05_item06.gif";
import teFooterL from "../assets/hospital/te05_item03.gif";
import teFooterR from "../assets/hospital/te05_item04.gif";

import pet1 from "../assets/hospital/pet/goatmxjm.gif";
import pet2 from "../assets/hospital/pet/foxm.gif";
import pet3 from "../assets/hospital/pet/catm_2.gif";
import pet4 from "../assets/hospital/pet/c_ekfkawnlm.gif";
import pet5 from "../assets/hospital/pet/sheepm.gif";
import pet6 from "../assets/hospital/pet/owlm.gif";
import pet7 from "../assets/hospital/pet/dragonm_1.gif";
import pet8 from "../assets/hospital/pet/c_tktmam.gif";

const WARD_PETS = [
  { img: pet1, name: "포동이1" },
  { img: pet2, name: "여우" },
  { img: pet3, name: "가영이" },
  { img: pet4, name: "리나" },
  { img: pet5, name: "아롱이" },
  { img: pet6, name: "부엉이" },
  { img: pet7, name: "용용이" },
  { img: pet8, name: "다람이" },
];

const HospitalWardPage = () => (
  <PageShell
    bgClassName="bg-[#48ccec]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/hospital">동물병원</CrumbLink>
        <CrumbSep />
        입원실
      </>
    }
  >
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-2xl overflow-hidden">
      <img src={header} alt="입원실" className="w-full" />

      <div className="flex mx-2.5 bg-[#E5F7FC]">
        <img src={frameL} alt="" width={10} height={60} />
        <div className="flex-1 bg-white py-4 px-2">
          <div className="w-[486px] mx-auto flex mb-4">
            <img src={teSearchL} alt="" width={10} height={70} />
            <div className="flex-1 bg-[#FFF799] flex flex-col items-center justify-center py-2">
              <img src={imgSearchTitle} alt="" width={347} height={14} className="mb-3" />
              <div className="flex items-center gap-1.5">
                <img src={imgSearchId} alt="" width={63} height={21} />
                <input type="text" className="text-[12px] w-[235px] h-[19px] border border-gray-400 px-1" />
                <button
                  type="button"
                  onClick={() => alert("찾고자 하는 동물의 농장 주인 아이디를 넣으세요!")}
                  className="cursor-pointer"
                >
                  <img src={btnSearch} alt="검색" width={55} height={22} />
                </button>
              </div>
            </div>
            <img src={teSearchR} alt="" width={10} height={70} />
          </div>

          <div className="grid grid-cols-4 gap-x-2 gap-y-4 max-w-[504px] mx-auto mb-4">
            {WARD_PETS.map((p) => (
              <div key={p.name} className="w-[126px] text-center">
                <button type="button" className="cursor-pointer">
                  <img src={p.img} alt={p.name} width={110} height={110} />
                </button>
                <p className="text-[#666666] text-[12px] mt-1">{p.name}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full">
            <img src={teBL} alt="" width={10} height={10} />
            <div className="flex-1" />
            <img src={teBR} alt="" width={10} height={10} />
          </div>
        </div>
        <img src={frameR} alt="" width={10} height={60} />
      </div>

      <div className="flex mx-2.5">
        <img src={teBarBL} alt="" width={10} height={10} />
        <div className="flex-1" />
        <img src={teBarBR} alt="" width={10} height={10} />
      </div>

      <div className="flex">
        <img src={teBottomL} alt="" width={14} height={14} />
        <div className="flex-1" />
        <img src={teBottomR} alt="" width={14} height={14} />
      </div>

      <div className="flex">
        <img src={teFooterL} alt="" width={18} height={19} />
        <div className="flex-1 bg-[#48CCEC]" />
        <img src={teFooterR} alt="" width={18} height={19} />
      </div>
    </div>
  </PageShell>
);

export default HospitalWardPage;
