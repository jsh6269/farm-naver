import Sidebar from "../components/Sidebar";
import festivalHeader from "../assets/festival/img_festival01.gif";
import btn1 from "../assets/festival/btn_festival28_ani_album.gif";
import btn2 from "../assets/festival/btn_festival28_ani_festival.gif";
import btn3 from "../assets/festival/btn_festival28_farm_festiva.gif";

const SchoolPage = () => {
  return (
    <div className="bg-[#8ed0ff] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 동물학교
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[738px] bg-white rounded-2xl mt-[33px] mr-5">
        <img src={festivalHeader} />
        <div className="bg-gradient-to-b from-amber-200 to-[#FEFBD9] mx-[10px] h-[470px] rounded-b-xl">
          <div
            className="bg-white mx-[10px] rounded-b-[5.5px] h-[459px] pt-4 px-5"
            style={{ fontFamily: "굴림", fontSize: "12px" }}
          >
            <h3 className="font-semibold">
              이번주 페스티발 주제는 “으스스 할로윈파티” 입니다.
            </h3>
            <p>
              좀 있으면 다가오는 할로윈 데이를 기념하여 동물농장에서도
              으스스하고 재미있는 할로윈 파티가 열렸나 봐요~!
            </p>
            <div className="flex flex-start flex-wrap gap-x-10.5 pl-1.5 gap-y-1 pt-5">
              <img src={btn2} />
              <img src={btn3} />
            </div>
            <div className="pt-3">
              <img src={btn1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SchoolPage;
