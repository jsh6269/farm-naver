import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import header from "../assets/hospital/img_hospital03.gif";
import introImg from "../assets/hospital/item/carrot_juice02s.gif";
import iconHot from "../assets/hospital/icon_list_hot.gif";
import frameL from "../assets/hospital/img_hospital_left.gif";
import frameR from "../assets/hospital/img_hospital_right.gif";
import teBL from "../assets/hospital/te_select03.gif";
import teBR from "../assets/hospital/te_select04.gif";
import teBarBL from "../assets/hospital/te_school13.gif";
import teBarBR from "../assets/hospital/te_school14.gif";
import teBottomL from "../assets/hospital/te05_item05.gif";
import teBottomR from "../assets/hospital/te05_item06.gif";
import teFooterL from "../assets/hospital/te05_item03.gif";
import teFooterR from "../assets/hospital/te05_item04.gif";

import item1 from "../assets/hospital/item/game_healingpotions.gif";
import item2 from "../assets/hospital/item/red_mask02s.gif";
import item3 from "../assets/hospital/item/strengthreinforces.gif";
import item4 from "../assets/hospital/item/icicle02s.gif";
import item5 from "../assets/hospital/item/magicband01s.gif";
import item6 from "../assets/hospital/item/sweetsyrups.gif";

const PHARMACY_ITEMS = [
  { img: item1, name: "피로 회복약", hot: true, color: "#FECB01" },
  { img: item2, name: "빨간 마스크", hot: false, color: "#0069C8" },
  { img: item3, name: "체력강화제", hot: false, color: "#676767" },
  { img: item4, name: "고드름 연고", hot: true, color: "#0069C8" },
  { img: item5, name: "마법붕대", hot: false, color: "#6B6A64" },
  { img: item6, name: "효과 만점 달콤 시럽", hot: false, color: "#676767" },
];

function PharmacyItem({ img, name, hot, color }) {
  return (
    <div className="w-[60px] text-center">
      <button type="button" onClick={() => alert("로그인 후 구매할 수 있습니다.")} className="cursor-pointer">
        <img src={img} alt={name} />
      </button>
      <div className="h-1" />
      <span className="text-[12px]" style={{ color }}>
        {name}
        {hot && <img src={iconHot} alt="" className="inline ml-0.5" />}
      </span>
    </div>
  );
}

const HospitalPharmacyPage = () => (
  <PageShell
    bgClassName="bg-[#48ccec]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/hospital">동물병원</CrumbLink>
        <CrumbSep />
        약국
      </>
    }
  >
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-2xl overflow-hidden">
      <img src={header} alt="약국" className="w-full" />

      <div className="flex mx-2.5 bg-[#E5F7FC]">
        <img src={frameL} alt="" width={10} height={60} />
        <div className="flex-1 bg-white py-3 px-4">
          <div className="flex items-start gap-3 mb-5 max-w-[460px] mx-auto">
            <img src={introImg} alt="" width={132} />
            <p className="text-[12px] leading-[18px] pt-1">
              약이 무조건 좋은것이 아니랍니다. 정확한 몸의 상태를 파악해 처방을 통해 약을 먹는것이
              가장 좋은 방법이랍니다^^
            </p>
          </div>

          <div className="flex justify-center gap-10 flex-wrap max-w-[460px] mx-auto mb-4">
            {PHARMACY_ITEMS.map((item) => (
              <PharmacyItem key={item.name} {...item} />
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

export default HospitalPharmacyPage;
