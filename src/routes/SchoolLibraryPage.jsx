import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import teTopL from "../assets/school/library060706_te01.gif";
import teTopR from "../assets/school/library060706_te02.gif";
import tit from "../assets/school/library060706_tit.gif";
import btnStory from "../assets/school/library060706_btn.gif";
import mainImg from "../assets/school/library060706_main.gif";
import sideL from "../assets/school/library060706_te03.gif";
import sideR from "../assets/school/library060706_te04.gif";
import innerTL from "../assets/school/library060706_te10.gif";
import innerTR from "../assets/school/library060706_te11.gif";
import stit from "../assets/school/library060706_stit.gif";
import btnNew from "../assets/school/library060706_btn_new.gif";
import btnHit from "../assets/school/library060706_btn_hit.gif";
import innerBL from "../assets/school/library060706_te12.gif";
import innerBR from "../assets/school/library060706_te13.gif";
import barBL from "../assets/school/library060706_te05.gif";
import barBR from "../assets/school/library060706_te06.gif";
import teBottomL from "../assets/school/te_school07.gif";
import teBottomR from "../assets/school/te_school08.gif";
import teFooterL from "../assets/school/te_school03.gif";
import teFooterR from "../assets/school/te_school04.gif";

import s01 from "../assets/school/institution/sum_story_01.gif";
import s02 from "../assets/school/institution/sum_story_02.gif";
import s04 from "../assets/school/institution/sum_story_04.gif";
import s05 from "../assets/school/institution/sum_story_05.gif";
import s08 from "../assets/school/institution/sum_story_08.gif";
import s09 from "../assets/school/institution/sum_story_09.gif";
import s10 from "../assets/school/institution/sum_story_10.gif";
import s11 from "../assets/school/institution/sum_story_11.gif";
import s12 from "../assets/school/institution/sum_story_12.gif";

const STORIES = [
  { img: s04, title: "아주 소중했던 조" },
  { img: s09, title: "테일즈런너의 모험 2" },
  { img: s05, title: "테일즈런너의 모험 1" },
  { img: s10, title: "크라라의보물찾기 2부" },
  { img: s01, title: "크라라의보물찾기 1부" },
  { img: s02, title: "코코를 잃어버렸어요!" },
  { img: s09, title: "씨끌벅적 동물농장" },
  { img: s12, title: "인간세계로~" },
  { img: s05, title: "크라라의 탐험" },
  { img: s01, title: "크라라의 과거" },
  { img: s11, title: "탐험의 전설" },
  { img: s08, title: "위험한 선택" },
];

const SchoolLibraryPage = () => (
  <PageShell
    bgClassName="bg-[#8ed0ff]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/school">동물학교</CrumbLink>
        <CrumbSep />
        소설책방
      </>
    }
  >
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-2xl overflow-hidden">
      <div className="flex">
        <img src={teTopL} alt="" />
        <div className="flex-1 bg-white" />
        <img src={teTopR} alt="" />
      </div>

      <div className="px-2.5">
        <div className="flex justify-between items-center w-[535px] mx-auto mb-1">
          <img src={tit} alt="소설책방" />
          <button type="button" onClick={() => alert("로그인 후 소설을 쓸 수 있습니다.")} className="cursor-pointer mr-2.5">
            <img src={btnStory} alt="소설쓰기" />
          </button>
        </div>

        <img src={mainImg} alt="" width={535} height={199} className="block mx-auto" />

        <div className="flex w-[535px] mx-auto">
          <img src={sideL} alt="" width={10} height={155} />
          <div className="flex-1 bg-[#FFF5A6]">
            <div className="bg-white mx-2 mt-2 mb-2">
              <div className="flex">
                <img src={innerTL} alt="" width={10} height={10} />
                <div className="flex-1" />
                <img src={innerTR} alt="" width={10} height={10} />
              </div>

              <div className="px-3 py-1">
                <div className="flex justify-between items-center mb-2">
                  <img src={stit} alt="소설 목록" />
                  <div className="flex items-center gap-1.5 shrink-0">
                    <img src={btnNew} alt="등록순" className="shrink-0" />
                    <img src={btnHit} alt="인기순" className="shrink-0" />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-x-2.5 gap-y-2 max-w-[495px] mx-auto pb-2">
                  {STORIES.map((s) => (
                    <button
                      key={s.title}
                      type="button"
                      className="w-[110px] text-center cursor-pointer"
                      onClick={() => alert("소설을 읽으려면 로그인이 필요합니다.")}
                    >
                      <img src={s.img} alt={s.title} width={100} height={100} className="mx-auto my-1.5" />
                      <span className="text-[#737373] text-[12px]">{s.title}</span>
                    </button>
                  ))}
                </div>

                <div className="text-center py-2 text-[12px]">
                  <b>1</b>&nbsp;&nbsp;2&nbsp;&nbsp;3
                </div>
              </div>

              <div className="flex">
                <img src={innerBL} alt="" width={10} height={10} />
                <div className="flex-1 bg-white" />
                <img src={innerBR} alt="" width={10} height={10} />
              </div>
            </div>
          </div>
          <img src={sideR} alt="" width={10} height={155} />
        </div>

        <div className="flex w-[535px] mx-auto">
          <img src={barBL} alt="" width={10} height={10} />
          <div className="flex-1 bg-[#FFF5A6]" />
          <img src={barBR} alt="" width={10} height={10} />
        </div>
      </div>

      <div className="flex">
        <img src={teBottomL} alt="" />
        <div className="flex-1 bg-white" />
        <img src={teBottomR} alt="" />
      </div>

      <div className="flex">
        <img src={teFooterL} alt="" width={18} height={20} />
        <div className="flex-1 bg-[#8ED0FF]" />
        <img src={teFooterR} alt="" width={18} height={20} />
      </div>
    </div>
  </PageShell>
);

export default SchoolLibraryPage;
