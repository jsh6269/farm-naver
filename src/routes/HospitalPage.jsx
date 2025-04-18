import Sidebar from "../components/Sidebar";
import hospitalHeader from "../assets/hospital/img_hospital10.gif";
import marsh from "../assets/hospital/marsh02s.gif";
import btn1 from "../assets/hospital/btn_hospital01.gif";
import btn2 from "../assets/hospital/btn_hospital02.gif";
import btn3 from "../assets/hospital/btn_hospital03.gif";

const HospitalPage = () => {
  return (
    <div className="bg-[#48ccec] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 동물병원
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[708px] bg-white rounded-2xl mt-[33px] mr-5">
        <img src={hospitalHeader} />
        <div className="bg-gradient-to-b from-[#77df06] to-[#e5f7fc] mx-[10px] h-[440px] rounded-b-xl">
          <div
            className="bg-white mx-[10px] rounded-b-[5.5px] h-[429px] pt-4 px-5"
            style={{ fontFamily: "굴림", fontSize: "12px" }}
          >
            <div className="flex justify-center gap-5 items-center mb-3 mt-1">
              <img src={marsh} />
              <p className="text-[13.3px]">
                이곳은 동물 친구들의 건강뿐만 아니라 <br />
                마음의 병까지 고쳐드리는 곳이랍니다.
              </p>
            </div>
            <div className="flex flex-start flex-wrap gap-x-10.5 ml-13 gap-y-1 pt-5">
              <img src={btn1} />
              <img src={btn2} />
            </div>
            <div className="pt-6 ml-13">
              <img src={btn3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HospitalPage;
