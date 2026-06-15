import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import header from "../assets/hospital/img_hospital03.gif";
import introImg from "../assets/hospital/item/carrot_juice02s.gif";
import iconHot from "../assets/hospital/icon_list_hot.gif";

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

    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-lg overflow-hidden mb-5">
      <img src={header} alt="약국" className="w-full block" />
      <div className="mx-2.5 mb-3 bg-gradient-to-b from-[#ffc763] to-[#E5F7FC] rounded-b-lg overflow-hidden pb-1">
        <div className="bg-white mx-[10px] mb-3 rounded-b-lg py-3 px-4 pb-6">
          <div className="flex items-start gap-3 mb-5 max-w-[460px] mx-auto">
            <img src={introImg} alt="" width={132} />
            <p className="text-[12px] leading-[18px] pt-1">
              약이 무조건 좋은것이 아니랍니다. 정확한 몸의 상태를 파악해 처방을 통해 약을 먹는것이
              가장 좋은 방법이랍니다^^
            </p>
          </div>

          <div className="flex justify-center gap-12 flex-wrap max-w-[460px] mx-auto">
            {PHARMACY_ITEMS.map((item) => (
              <PharmacyItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </PageShell>
);

export default HospitalPharmacyPage;
