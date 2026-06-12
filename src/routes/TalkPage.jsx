import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import frameL from "../assets/talk/img_school_left.gif";
import frameR from "../assets/talk/img_school_right.gif";
import tabOn from "../assets/talk/talk060124_tab01on.gif";
import tabWrite from "../assets/talk/talk060124_tab02.gif";
import tabList from "../assets/talk/talk060124_tab03.gif";
import boxTop from "../assets/talk/talk060124_box_top.gif";
import boxBottom from "../assets/talk/talk060124_box_bot.gif";
import subTxt from "../assets/talk/talk060124_sub01_txt.gif";
import btnHit from "../assets/talk/btn_talk060124_hit.gif";
import btnNew from "../assets/talk/btn_talk060124_newon.gif";
import listIcon1 from "../assets/talk/talk060124_list_img01.gif";
import listIcon2 from "../assets/talk/talk060124_list_img02.gif";
import listIcon3 from "../assets/talk/talk060124_list_img03.gif";
import listIcon4 from "../assets/talk/talk060124_list_img04.gif";
import teBL from "../assets/school/te_select03.gif";
import teBR from "../assets/school/te_select04.gif";
import teBarBL from "../assets/school/te_school13.gif";
import teBarBR from "../assets/school/te_school14.gif";
import teBottomL from "../assets/school/te_school07.gif";
import teBottomR from "../assets/school/te_school08.gif";
import teFooterL from "../assets/school/te_school03.gif";
import teFooterR from "../assets/school/te_school04.gif";

const ENTRIES = [
  { q: "너 나 좋아해?", a: "네~~ 저는 주인님이 너무 좋아요!!", user: "totoya11", votes: 0 },
  { q: "난 니가 싫어", a: "흑.. 미워하지마세요~전 주인님이 좋아요", user: "totoya11", votes: 0 },
  { q: "갔고싶은 아이탬은?", a: "마술상점에 있는 겄들", user: "puppykelly", votes: 0 },
  { q: "안녕?", a: "안녕하세요 주인님~", user: "farmkid", votes: 1 },
  { q: "오늘 뭐해?", a: "주인님과 놀고 싶어요!", user: "petlover", votes: 2 },
];

function TalkEntry({ q, a, user, votes }) {
  return (
    <>
      <div className="flex w-[458px] mx-auto text-[12px]">
        <img src={listIcon1} alt="" width={5} height={36} className="mr-2 shrink-0" />
        <div className="w-[293px]">
          <div className="flex items-center gap-1 mb-2">
            <img src={listIcon2} alt="" width={27} height={14} />
            <span className="text-[#4C4C4C]">{q}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={listIcon3} alt="" width={22} height={13} />
            <span className="text-[#4C4C4C]">{a}</span>
          </div>
        </div>
        <div className="w-[60px] text-center self-center">{user}</div>
        <div className="w-[53px] text-center self-center">{votes} 표</div>
        <button type="button" onClick={() => alert("로그인 후 추천할 수 있습니다.")} className="cursor-pointer self-center">
          <img src={listIcon4} alt="추천" width={39} height={21} />
        </button>
      </div>
      <div className="w-[478px] mx-auto py-5">
        <div className="h-px bg-[#CCCCCC]" />
      </div>
    </>
  );
}

const TalkPage = () => (
  <PageShell
    bgClassName="bg-[#8ed0ff]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/school">동물학교</CrumbLink>
        <CrumbSep />
        말 가르치기
      </>
    }
  >
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-2xl overflow-hidden">
      <div className="flex mx-2.5 bg-[#E1F3FF] mt-2">
        <img src={frameL} alt="" width={10} height={61} />
        <div className="flex-1 bg-white py-2">
          <div className="flex justify-center mb-0">
            <img src={tabOn} alt="말 가르치기" width={169} height={40} />
            <button type="button" onClick={() => alert("로그인 후 글을 쓸 수 있습니다.")} className="cursor-pointer">
              <img src={tabWrite} alt="글쓰기" width={167} height={40} />
            </button>
            <button type="button" className="cursor-pointer">
              <img src={tabList} alt="목록" width={161} height={40} />
            </button>
          </div>

          <div className="w-[497px] mx-auto">
            <img src={boxTop} alt="" width={497} className="block" />
            <div className="px-2 pb-2 bg-[#F5F5F5]">
              <div className="flex justify-between items-center w-[478px] mx-auto pt-1 pb-1.5">
                <img src={subTxt} alt="" width={236} height={21} />
                <div className="flex items-center gap-1 shrink-0">
                  <img src={btnHit} alt="인기순" width={64} height={22} className="shrink-0" />
                  <img src={btnNew} alt="등록순" width={64} height={22} className="shrink-0" />
                </div>
              </div>
              <div className="w-[478px] mx-auto h-0.5 bg-[#E5E5E5] mb-4" />

              {ENTRIES.map((e) => (
                <TalkEntry key={e.q} {...e} />
              ))}
            </div>
            <img src={boxBottom} alt="" width={497} className="block" />
          </div>

          <div className="flex w-full mt-2">
            <img src={teBL} alt="" width={10} height={10} />
            <div className="flex-1" />
            <img src={teBR} alt="" width={10} height={10} />
          </div>
        </div>
        <img src={frameR} alt="" width={10} height={61} />
      </div>

      <div className="flex mx-2.5">
        <img src={teBarBL} alt="" width={10} height={10} />
        <div className="flex-1" />
        <img src={teBarBR} alt="" width={10} height={10} />
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

export default TalkPage;
