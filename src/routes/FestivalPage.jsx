import Sidebar from "../components/Sidebar";
import festivalHeader from "../assets/festival/img_festival01.gif";
import btn1 from "../assets/festival/btn_festival28_ani_album.gif";
import btn2 from "../assets/festival/btn_festival28_ani_festival.gif";
import btn3 from "../assets/festival/btn_festival28_farm_festiva.gif";

const FestivalPage = () => {
  return (
    <div className="bg-[#FFF799] rounded-2xl flex">
      <div className="mt-1 font-gulim">
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 페스티벌
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[738px] bg-white rounded-2xl mt-[33px] mr-5">
        <img
          src={festivalHeader}
          alt="페스티벌 헤더"
          className="w-full rounded-t-2xl"
        />
        <div className="bg-gradient-to-b from-amber-200 to-[#FEFBD9] mx-2.5 h-[470px] rounded-b-xl flex justify-center items-start">
          <div className="bg-white mx-2.5 rounded-b-[5.5px] h-[459px] pt-4 px-5 w-full font-gulim text-[12px]">
            <h3 className="font-semibold mb-1">
              이번주 페스티발 주제는 “으스스 할로윈파티” 입니다.
            </h3>
            <p className="mb-2">
              좀 있으면 다가오는 할로윈 데이를 기념하여 동물농장에서도
              으스스하고 재미있는 할로윈 파티가 열렸나 봐요~!
            </p>
            <div className="flex flex-wrap gap-x-[42px] gap-y-1 pl-3 pt-5">
              <img src={btn2} alt="동물 페스티벌 버튼" />
              <img src={btn3} alt="농장 페스티벌 버튼" />
            </div>
            <div className="pt-3 pl-2">
              <img src={btn1} alt="베스트앨범 페스티벌 버튼" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FestivalPage;
