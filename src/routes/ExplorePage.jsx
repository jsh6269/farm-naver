import Sidebar from "../components/Sidebar";
import img01 from "../assets/explore/top_0924_img01.gif";
import img02 from "../assets/explore/top_0924_img02.gif";
import img03 from "../assets/explore/top_0924_img03.gif";
import img04 from "../assets/explore/top_0924_img04.gif";
import img05 from "../assets/explore/top_0924_img05.gif";
import img06 from "../assets/explore/top_0924_img06.gif";
import img07 from "../assets/explore/top_0924_img07.gif";
import img08 from "../assets/explore/top_0924_img08.gif";
import img09 from "../assets/explore/top_0924_img09.gif";
import img10 from "../assets/explore/top_0924_img10.gif";
import btn01 from "../assets/explore/btn_0924_01.gif";
import btn02 from "../assets/explore/btn_0924_02.gif";
import btn03 from "../assets/explore/btn_0924_03.gif";
import btn04 from "../assets/explore/btn_0924_04.gif";

const imageRows = [
  [img01, img02],
  [img03, img04],
  [img05, img06],
  [img07, img08],
  [img09, img10],
];

const buttonGroups = [
  [btn01, btn02],
  [btn03, btn04],
];

const ExploreLayout = () => (
  <div className="rounded-b-[13px] bg-[#6C32E0] w-[555px]">
    {/* 이미지 영역 */}
    <div>
      {imageRows.map((row, i) => (
        <div key={i} className="flex leading-none">
          {row.map((src, j) => (
            <img
              key={j}
              src={src}
              alt={`탐험 이미지 ${i * 2 + j + 1}`}
              className="block border-0 select-none"
              draggable={false}
            />
          ))}
        </div>
      ))}
    </div>
    {/* 버튼 영역 */}
    <div className="w-[555px]">
      {buttonGroups.map((group, idx) => (
        <div key={idx}>
          <div className="flex justify-center">
            {group.map((btn, btnIdx) => (
              <a
                key={btnIdx}
                href="#"
                tabIndex={-1}
                className="outline-none"
                aria-label={`탐험 버튼 ${idx * 2 + btnIdx + 1}`}
              >
                <img
                  src={btn}
                  alt={`탐험 버튼 ${idx * 2 + btnIdx + 1}`}
                  className="block border-0"
                />
              </a>
            ))}
          </div>
          {/* 버튼 그룹 간 간격 */}
          {idx === 0 && <div className="h-5" />}
          {idx === 1 && <div className="h-[18px]" />}
        </div>
      ))}
    </div>
  </div>
);

const ExplorePage = () => (
  <div className="bg-[#9966ff] rounded-2xl flex">
    <div className="mt-1" style={{ fontFamily: "굴림" }}>
      <span className="text-[12px] text-start ml-5">
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 탐험
        <Sidebar />
      </span>
    </div>
    <div className="w-[550px] h-[738px] mt-[33px] mr-5">
      <ExploreLayout />
    </div>
  </div>
);

export default ExplorePage;
