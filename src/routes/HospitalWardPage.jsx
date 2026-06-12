import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";
import { FestivalSearchBox } from "../components/FestivalFrame";

import header from "../assets/hospital/img_hospital05.gif";
import imgSearchTitle from "../assets/hospital/img_farm29_03.gif";

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
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-lg overflow-hidden mb-5">
      <img src={header} alt="입원실" className="w-full block" />

      <div className="mx-2.5 mb-3 bg-[#E5F7FC] rounded-lg overflow-hidden pb-1">
        <div className="bg-white mx-1 my-1 rounded-lg py-4 px-2 pb-6">
          <FestivalSearchBox
            titleImg={imgSearchTitle}
            onSearch={() => alert("찾고자 하는 동물의 농장 주인 아이디를 넣으세요!")}
            className="w-full max-w-[486px] mx-auto mb-4"
          />

          <div className="grid grid-cols-4 gap-x-2 gap-y-4 max-w-[504px] mx-auto">
            {WARD_PETS.map((p) => (
              <div key={p.name} className="w-[126px] text-center">
                <button type="button" className="cursor-pointer">
                  <img src={p.img} alt={p.name} width={110} height={110} />
                </button>
                <p className="text-[#666666] text-[12px] mt-1">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </PageShell>
);

export default HospitalWardPage;
