import Sidebar from "../components/Sidebar";

import topBanner from "../assets/castle/castlemain_top_00.gif";
import img01 from "../assets/castle/castlemain_img01.gif";
import chang from "../assets/castle/castlemain_chang_00.gif";
import img02 from "../assets/castle/castlemain_img02.gif";
import img03 from "../assets/castle/castlemain_img03.gif";
import img04 from "../assets/castle/castlemain_img04.gif";
import barBg from "../assets/castle/castlemain_img05.gif";

import btnInfo from "../assets/castle/btn_castle_info.gif";
import btnMeet from "../assets/castle/btn_castle_meet.gif";
import btnRoom from "../assets/castle/btn_castle_room.gif";
import btnGame from "../assets/castle/btn_castle_game.gif";
import btnTakeItem from "../assets/castle/btn_castle_takeitem.gif";

const BASE = "https://jsh6269.github.io/farm.jr.naver.com/castle";

const CastlePage = () => (
  <div className="bg-[#FFF78C] rounded-2xl flex">
    <div className="mt-1 font-gulim">
      <span className="text-[12px] text-start ml-5">
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 성주의 집
        <Sidebar />
      </span>
    </div>
    <div className="w-[555px] h-[600px] bg-white rounded-2xl mt-[33px] mr-5 mb-6 flex flex-col items-center">
      <img
        src={topBanner}
        width={555}
        height={231}
        alt="성주의 집"
        className="rounded-t-2xl"
      />
      {/* 성 내부 장면 */}
      <div className="flex">
        <img src={img01} width={70} height={224} alt="" />
        <img src={chang} width={110} height={224} alt="성주의 자리" />
        <img src={img02} width={176} height={224} alt="성주의 옥좌" />
        <img src={img03} width={111} height={224} alt="" />
        <img src={img04} width={68} height={224} alt="" />
      </div>
      {/* 메뉴 버튼 영역 */}
      <div
        className="w-[535px] min-h-[100px] pt-3 pb-3 flex flex-col items-center gap-2 rounded-b-lg"
        style={{ backgroundImage: `url(${barBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className="flex items-center gap-[5px]">
          <a href={`${BASE}/notice/?rid=0`}>
            <img src={btnInfo} width={132} height={34} alt="마을의 예산 소식" />
          </a>
          <a href={`${BASE}/conference/?rid=0`}>
            <img src={btnMeet} width={115} height={34} alt="회의장" />
          </a>
          <a href={`${BASE}/lord/?rid=0`}>
            <img src={btnRoom} width={91} height={34} alt="성주의 방" />
          </a>
        </div>
        <div className="flex items-center gap-[5px]">
          <a href={`${BASE}/../room/game.php%253frid%253d0.html`}>
            <img src={btnGame} alt="작물 재배하기" />
          </a>
          <a href={`${BASE}/../room/item.php%253frid%253d0.html`}>
            <img src={btnTakeItem} alt="아이템 받기" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CastlePage;
