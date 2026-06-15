import PageShell from "../components/PageShell";

import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import tit from "../assets/school/library060706_tit.gif";
import btnStory from "../assets/school/library060706_btn.gif";
import mainImg from "../assets/school/library060706_main.gif";
import stit from "../assets/school/library060706_stit.gif";
import btnNew from "../assets/school/library060706_btn_new.gif";
import btnHit from "../assets/school/library060706_btn_hit.gif";

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

    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-lg overflow-hidden mb-5">
      <div className="px-2.5 pt-2">
        <div className="flex justify-between items-center w-[535px] mx-auto mb-1">
          <img src={tit} alt="소설책방" />
          <button type="button" onClick={() => alert("로그인 후 소설을 쓸 수 있습니다.")} className="cursor-pointer mr-2.5">
            <img src={btnStory} alt="소설쓰기" />
          </button>
        </div>

        <img src={mainImg} alt="" width={535} height={199} className="block mx-auto" />

        <div className="w-[535px] mx-auto mb-4 bg-gradient-to-b from-[#9f5000] to-[#FFF5A6] rounded-b-lg overflow-hidden pb-1">
          <div className="bg-white mx-[10px] mt-2 mb-3 rounded-lg px-3 py-1 pb-3">
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
        </div>
      </div>
    </div>
  </PageShell>
);

export default SchoolLibraryPage;
