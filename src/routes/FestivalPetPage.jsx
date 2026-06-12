import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";
import FestivalFrame, {
  FestivalSearchBox,
  FestivalWhiteGrid,
  FestivalYellowBar,
} from "../components/FestivalFrame";

import subTit from "../assets/festival/sub_tit14.gif";
import imgTit from "../assets/festival/img_festival28_08.gif";
import imgTheme from "../assets/festival/img_festival28_05.gif";
import imgWinnerLabel from "../assets/festival/img_festival28_06.gif";
import iconDot from "../assets/festival/icon_12.gif";
import imgPrize from "../assets/festival/img_festival28_07.gif";
import btnRegist from "../assets/festival/btn_festival28_festival.gif";
import imgSearchTitle from "../assets/festival/img_festival28_02.gif";
import tabRecomOn from "../assets/festival/tab_festival01_on.gif";
import tabNidOff from "../assets/festival/tab_festival02_off.gif";
import bgThum from "../assets/festival/bg_thum07.gif";
import bgThumWinner from "../assets/festival/bg_thum02.gif";

import winnerPet from "../assets/festival/pet/koalam.gif";
import pet1 from "../assets/festival/pet/koalam_2.gif";
import pet2 from "../assets/festival/pet/swanm_1.gif";
import pet3 from "../assets/festival/pet/dolphinm_2_pattern.gif";
import pet4 from "../assets/festival/pet/foxm.gif";
import pet5 from "../assets/festival/pet/c_ekfkawnlm.gif";
import pet6 from "../assets/festival/pet/c_tktmam_1.gif";
import pet7 from "../assets/festival/pet/rabbitm_2.gif";
import pet8 from "../assets/festival/pet/pigm_2_gold.gif";

const ENTRIES = [
  { img: pet1, name: "박호정" },
  { img: pet2, name: "럭키맨" },
  { img: pet3, name: "예쁜이" },
  { img: pet4, name: "큐티 여우" },
  { img: pet5, name: "다람이" },
  { img: pet6, name: "크리스틴" },
  { img: pet7, name: "깜찍◎l" },
  { img: pet8, name: "꾸꾸리" },
];

function PetCell({ img, name, bg = bgThum }) {
  return (
    <div className="w-[110px] text-center">
      <div
        className="h-[110px] flex items-center justify-center mx-auto"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "130px 130px", backgroundPosition: "center" }}
      >
        <img src={img} alt={name} width={110} height={110} />
      </div>
      <div className="h-[45px] flex items-start justify-center pt-1">
        <span className="text-[#6E5904] text-[12px]">{name}</span>
      </div>
    </div>
  );
}

const FestivalPetPage = () => (
  <PageShell
    bgClassName="bg-[#FFF799]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/festival">페스티벌</CrumbLink>
        <CrumbSep />
        동물 페스티벌
      </>
    }
  >
    <FestivalFrame>
      <div className="flex items-center h-[38px] w-[535px] pl-2.5">
        <img src={subTit} alt="" />
        <img src={imgTit} alt="" className="ml-2.5" width={245} height={13} />
      </div>

      <FestivalYellowBar className="mb-2.5">
        <div className="w-[501px] flex py-2">
          <div className="w-[335px] pl-3">
            <div className="flex items-center gap-2 mb-1">
              <img src={imgTheme} alt="" width={94} height={15} />
              <span className="text-[#663300] font-bold text-[12px]">차례를 지내는 동물</span>
            </div>
            <p className="text-[#333333] text-[12px] pl-3 leading-[18px]">
              설날에는 조상님에게 2012년 한 해 동안 잘 살펴주십사 차례를 지내요~ 우리 동물
              친구들은 조상님에게 어떤 소원을 빌었을까요? 소개해주세요~
            </p>
          </div>
          <div className="pt-1">
            <button type="button" onClick={() => alert("로그인 후 참가할 수 있습니다.")}>
              <img src={btnRegist} alt="페스티벌 참가" width={157} height={29} />
            </button>
          </div>
        </div>
      </FestivalYellowBar>

      <FestivalYellowBar className="mb-2.5">
        <div className="w-[515px] flex py-2 px-2">
          <div
            className="w-[130px] h-[130px] flex items-center justify-center shrink-0"
            style={{ backgroundImage: `url(${bgThumWinner})`, backgroundRepeat: "no-repeat", backgroundSize: "130px 130px" }}
          >
            <img src={winnerPet} alt="우승 동물" />
          </div>
          <div className="w-5" />
          <div className="w-[235px]">
            <img src={imgWinnerLabel} alt="" width={117} height={14} className="mb-1" />
            <div className="flex gap-1 items-center text-[12px] mb-0.5">
              <img src={iconDot} alt="" width={5} height={5} />
              <span>이름 : 똥냄쉐이</span>
            </div>
            <div className="flex gap-1 items-center text-[12px] mb-1">
              <img src={iconDot} alt="" width={5} height={5} />
              <span>소속 : SNSD♡태연 TVXQ♡창민 (딥블루마을)</span>
            </div>
            <p className="text-[12px] leading-[18px] pl-3">냄새가많이납니다.</p>
          </div>
          <div className="w-[130px] pl-2">
            <img src={imgPrize} alt="" width={93} height={77} />
            <p className="text-[11px] text-[#785303] pl-1.5 mt-1 leading-tight">
              * 황금트로피와
              <br />
              2000포인트 상금
            </p>
          </div>
        </div>
      </FestivalYellowBar>

      <FestivalSearchBox titleImg={imgSearchTitle} />

      <div className="h-2.5" />

      <div className="w-[535px] flex items-end">
        <img src={tabRecomOn} alt="추천순" width={110} height={45} className="shrink-0" />
        <img src={tabNidOff} alt="최신순" width={110} height={45} className="shrink-0" />
      </div>

      <FestivalWhiteGrid>
        <div className="w-[485px] grid grid-cols-4 gap-x-[15px] gap-y-2.5 py-2">
          {ENTRIES.map((e) => (
            <PetCell key={e.name} {...e} />
          ))}
        </div>
      </FestivalWhiteGrid>
    </FestivalFrame>
  </PageShell>
);

export default FestivalPetPage;
