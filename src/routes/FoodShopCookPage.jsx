import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import header from "../assets/foodshop/img_food02.gif";
import thum from "../assets/foodshop/thum_food.gif";
import btnChoice from "../assets/foodshop/btn_choice.gif";
import iconPlus from "../assets/foodshop/icon_plus.gif";
import btnCook from "../assets/foodshop/btn_cook.gif";
import recipeTitle from "../assets/foodshop/040921_tilte.gif";
import ma01 from "../assets/foodshop/040921_ma01.gif";
import ma02 from "../assets/foodshop/040921_ma02.gif";
import ma03 from "../assets/foodshop/040921_ma03.gif";
import ma04 from "../assets/foodshop/040921_ma04.gif";
import ma05 from "../assets/foodshop/040921_ma05.gif";
import frameL from "../assets/foodshop/img_festival_left.gif";
import frameR from "../assets/foodshop/img_festival_right.gif";
import teBL from "../assets/foodshop/te_select03.gif";
import teBR from "../assets/foodshop/te_select04.gif";
import teBottomL from "../assets/foodshop/te_food09.gif";
import teBottomR from "../assets/foodshop/te_food10.gif";
import teFooterL from "../assets/foodshop/te_food03.gif";
import teFooterR from "../assets/foodshop/te_food04.gif";

const RECIPES = [ma01, ma02, ma03, ma04, ma05];

const FoodShopCookPage = () => (
  <PageShell
    bgClassName="bg-[#ffee5b]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/foodshop">쿠킹샵</CrumbLink>
        <CrumbSep />
        요리하기
      </>
    }
  >
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-2xl overflow-hidden">
      <img src={header} alt="요리하기" className="w-full" />

      <div className="flex mx-2.5 bg-[#FEFBD9]">
        <img src={frameL} alt="" width={10} height={50} />
        <div className="flex-1 bg-white pt-4 pb-2 rounded-b-lg">
          <div className="flex justify-center items-start gap-0 w-[465px] mx-auto">
            <div className="w-[108px] text-center">
              <div className="h-[108px] flex items-center justify-center">
                <img src={thum} alt="재료1" />
              </div>
              <button type="button" onClick={() => alert("로그인 후 재료를 선택할 수 있습니다.")} className="cursor-pointer mt-1">
                <img src={btnChoice} alt="선택" width={108} height={38} />
              </button>
            </div>
            <div className="w-[76px] flex justify-center pt-[50px]">
              <img src={iconPlus} alt="+" width={21} height={18} />
            </div>
            <div className="w-[108px] text-center">
              <div className="h-[108px] flex items-center justify-center">
                <img src={thum} alt="재료2" />
              </div>
              <button type="button" onClick={() => alert("로그인 후 재료를 선택할 수 있습니다.")} className="cursor-pointer mt-1">
                <img src={btnChoice} alt="선택" width={108} height={38} />
              </button>
            </div>
            <div className="w-[61px]" />
            <div className="w-[112px] pt-[42px]">
              <button type="button" onClick={() => alert("재료를 선택해주세요!")} className="cursor-pointer">
                <img src={btnCook} alt="요리하기" width={86} height={33} />
              </button>
            </div>
          </div>

          <div className="text-center mt-4 mb-6">
            <img src={recipeTitle} alt="요리 조합법" width={410} height={69} className="mx-auto" />
          </div>

          <div className="flex justify-center gap-0 mb-8">
            {RECIPES.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => alert("조합법 팝업은 로그인 후 이용할 수 있습니다.")}
                className="cursor-pointer"
              >
                <img src={img} alt={`조합법 ${i + 1}`} height={90} />
              </button>
            ))}
          </div>

          <div className="flex">
            <img src={teBL} alt="" width={10} height={10} />
            <div className="flex-1 bg-white h-2.5" />
            <img src={teBR} alt="" width={10} height={10} />
          </div>
        </div>
        <img src={frameR} alt="" width={10} height={50} />
      </div>

      <div className="flex">
        <img src={teBottomL} alt="" width={14} height={14} />
        <div className="flex-1" />
        <img src={teBottomR} alt="" width={14} height={14} />
      </div>

      <div className="flex">
        <img src={teFooterL} alt="" width={18} height={20} />
        <div className="flex-1 bg-[#FFEE5B]" />
        <img src={teFooterR} alt="" width={18} height={20} />
      </div>
    </div>
  </PageShell>
);

export default FoodShopCookPage;
