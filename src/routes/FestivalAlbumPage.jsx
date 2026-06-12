import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";
import FestivalFrame, {
  FestivalSearchBox,
  FestivalWhiteGrid,
  FestivalYellowBar,
} from "../components/FestivalFrame";

import subTitBestalbum from "../assets/festival/festival/sub_tit_bestalbum.gif";
import btnBestalbum from "../assets/festival/festival/btn_bestalbum.gif";
import bannerTop from "../assets/festival/festival/bestalbum070206_top.gif";
import txtBest from "../assets/festival/txt_bestalbum01.gif";
import bestImg from "../assets/festival/festival/bestalbum070206_img.gif";
import imgSearchTitle from "../assets/festival/img_festival28_02.gif";
import tabRecomOn from "../assets/festival/tab_festival01_on.gif";
import tabNidOff from "../assets/festival/tab_festival02_off.gif";
import bgThum from "../assets/festival/bg_thum07.gif";

import winnerPet from "../assets/festival/pet/dolphinm_2_orange.gif";
import pet1 from "../assets/festival/pet/dragonm_2.gif";
import pet2 from "../assets/festival/pet/pigm_2_gold.gif";
import pet3 from "../assets/festival/pet/wolfm_2.gif";
import pet4 from "../assets/festival/pet/wolfm_2_violet.gif";
import pet5 from "../assets/festival/pet/rabbitm_2.gif";
import pet6 from "../assets/festival/pet/bluebirdm_1_white.gif";
import pet7 from "../assets/festival/pet/koalam_2.gif";
import pet8 from "../assets/festival/pet/foxm.gif";

const ENTRIES = [
  { img: pet1, name: "용용이의 엔딩앨..." },
  { img: pet2, name: "꾸꾸리의 엔딩앨..." },
  { img: pet3, name: "강아지의 엔딩앨..." },
  { img: pet4, name: "암소가굿의 엔딩..." },
  { img: pet5, name: "깜찍◎l의 엔딩..." },
  { img: pet6, name: "파랑새의 엔딩..." },
  { img: pet7, name: "코알라의 엔딩..." },
  { img: pet8, name: "여우의 엔딩앨..." },
];

function AlbumCell({ img, name }) {
  return (
    <div className="w-[110px] text-center">
      <div
        className="h-[110px] flex items-center justify-center mx-auto"
        style={{
          backgroundImage: `url(${bgThum})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "110px 110px",
          backgroundPosition: "center",
        }}
      >
        <img src={img} alt={name} width={110} height={110} className="shrink-0" />
      </div>
      <div className="h-[45px] flex items-start justify-center pt-1">
        <span className="text-[#6E5904] text-[12px]">{name}</span>
      </div>
    </div>
  );
}

const FestivalAlbumPage = () => (
  <PageShell
    bgClassName="bg-[#FFF799]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/festival">페스티벌</CrumbLink>
        <CrumbSep />
        베스트앨범
      </>
    }
  >
    <FestivalFrame>
      <div className="w-[535px] flex justify-between items-start mb-2.5">
        <img src={subTitBestalbum} alt="금주의 베스트앨범" width={171} height={37} className="shrink-0" />
        <button
          type="button"
          onClick={() => alert("로그인 후 베스트앨범에 참여할 수 있습니다.")}
          className="cursor-pointer shrink-0 p-0 border-0 bg-transparent inline-flex"
        >
          <img src={btnBestalbum} alt="베스트앨범 참여하기" width={145} height={29} className="block" />
        </button>
      </div>

      <FestivalYellowBar className="mb-2.5">
        <div className="w-[515px] py-3">
          <img src={bannerTop} alt="" className="w-full block" />
          <div className="h-2.5" />
          <div className="flex pb-1">
            <div className="w-[130px] h-[130px] flex items-center justify-center shrink-0 ml-[-5px] mr-[1px]">
              <img src={winnerPet} alt="" width={110} height={110} className="shrink-0 block" />
            </div>
            <div className="w-5 shrink-0" />
            <div className="w-[365px] pt-2.5 ml-[-15px] mt-[-8px]">
              <div className="flex justify-between items-end">
                <img src={txtBest} alt="" width={256} height={79} className="shrink-0" />
                <img src={bestImg} alt="" className="shrink-0" />
              </div>
              <div className="h-2.5" />
              <p className="text-[#212121] text-[12px] leading-[18px]">
                베스트 앨범으로 우승자에게는{" "}
                <span className="text-[#CB4E00] font-bold">마법카드</span>를 상품으로 드려요.
              </p>
            </div>
          </div>
        </div>
      </FestivalYellowBar>

      <FestivalSearchBox titleImg={imgSearchTitle} />

      <div className="h-2.5" />

      <div className="w-[535px] flex items-end">
        <img src={tabRecomOn} alt="인기순" width={110} height={45} className="shrink-0" />
        <img src={tabNidOff} alt="등록순" width={110} height={45} className="shrink-0" />
      </div>

      <FestivalWhiteGrid>
        <div className="w-[485px] grid grid-cols-4 gap-x-[15px] gap-y-2.5 py-2">
          {ENTRIES.map((e) => (
            <AlbumCell key={e.name} {...e} />
          ))}
        </div>
      </FestivalWhiteGrid>
    </FestivalFrame>
  </PageShell>
);

export default FestivalAlbumPage;
