import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";
import FestivalFrame, {
  FestivalSearchBox,
  FestivalYellowBar,
} from "../components/FestivalFrame";

import titFarm from "../assets/festival/tit_festival28_01.gif";
import imgFarmTit from "../assets/festival/img_festival28_11.gif";
import imgTheme from "../assets/festival/img_festival28_05.gif";
import imgWinnerLabel from "../assets/festival/img_festival28_06.gif";
import iconDot from "../assets/festival/icon_12.gif";
import btnFarmRegist from "../assets/festival/btn_farm29_festival.gif";
import imgFarmSearch from "../assets/festival/img_farm29_02_01.gif";
import farmWinner from "../assets/festival/item/farm_winner.gif";

const FestivalFarmPage = () => (
  <PageShell
    bgClassName="bg-[#FFF799]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/festival">페스티벌</CrumbLink>
        <CrumbSep />
        농장 페스티벌
      </>
    }
  >
    <FestivalFrame>
      <div className="flex items-center h-[38px] w-[535px] pl-2.5">
        <img src={titFarm} alt="" />
        <img src={imgFarmTit} alt="" className="ml-2.5 align-middle" />
      </div>

      <FestivalYellowBar className="mb-2.5">
        <div className="w-[501px] flex py-2">
          <div className="w-[335px] pl-3">
            <div className="flex items-center gap-2 mb-1">
              <img src={imgTheme} alt="" width={94} height={15} />
              <span className="text-[#663300] font-bold text-[12px]">구호활동 중인 농장</span>
            </div>
            <p className="text-[#333333] text-[12px] pl-3 leading-[18px]">
              도움의 손길이 다급한 재해 현장 속에서 구호활동을 하는 농장을 찾아요~
            </p>
          </div>
          <div className="pt-1">
            <button type="button" onClick={() => alert("로그인 후 참가할 수 있습니다.")}>
              <img src={btnFarmRegist} alt="농장 페스티벌 참가" width={157} height={29} />
            </button>
          </div>
        </div>
      </FestivalYellowBar>

      <FestivalYellowBar className="mb-2.5">
        <div className="w-[515px] flex py-2 px-5">
          <div className="w-[382px]">
            <img src={imgWinnerLabel} alt="" width={117} height={14} className="mb-1" />
            <div className="flex gap-1 items-center text-[12px] mb-0.5">
              <img src={iconDot} alt="" width={5} height={5} />
              <span>
                농장이름 : <span className="text-blue-700">슬기의 사랑 농장~♣</span>
              </span>
            </div>
            <div className="flex gap-1 items-center text-[12px] mb-1">
              <img src={iconDot} alt="" width={5} height={5} />
              <span>
                소속마을 : <span className="text-blue-700">그린마을</span>
              </span>
            </div>
            <p className="text-[12px] leading-[18px] pl-3">
              여기위의그림처럼추천많이하면 선물이~ 펑펑~!...
            </p>
          </div>
          <div className="w-[103px]">
            <img src={farmWinner} alt="" width={70} height={70} />
            <p className="text-[11px] text-[#785303] mt-1">* 황금트로피</p>
          </div>
        </div>
      </FestivalYellowBar>

      <FestivalSearchBox titleImg={imgFarmSearch} className="mb-2.5" />
    </FestivalFrame>
  </PageShell>
);

export default FestivalFarmPage;
