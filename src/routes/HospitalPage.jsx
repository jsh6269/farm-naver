import Sidebar from "../components/Sidebar";
import hospitalHeader from "../assets/hospital/img_hospital10.gif";
import marsh from "../assets/hospital/marsh02s.gif";
import btn1 from "../assets/hospital/btn_hospital01.gif";
import btn2 from "../assets/hospital/btn_hospital02.gif";
import btn3 from "../assets/hospital/btn_hospital03.gif";

const HospitalPage = () => {
  return (
    <div className="bg-[#48ccec] rounded-2xl flex">
      <div className="mt-1 font-gulim">
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 동물병원
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[708px] bg-white rounded-2xl mt-[33px] mr-5">
        <img
          src={hospitalHeader}
          alt="동물병원 헤더"
          className="w-full rounded-t-2xl"
        />
        <div className="bg-gradient-to-b from-[#77df06] to-[#e5f7fc] mx-2.5 h-[440px] rounded-b-xl flex items-start">
          <div className="bg-white mx-2.5 rounded-b-[5.5px] h-[429px] pt-4 px-5 font-gulim text-[12px] w-full">
            <div className="flex justify-center gap-5 items-center mb-3 mt-1">
              <img src={marsh} alt="고체 알약" />
              <p className="text-[13.3px]">
                이곳은 동물 친구들의 건강뿐만 아니라 <br />
                마음의 병까지 고쳐드리는 곳이랍니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-[42px] ml-[52px] gap-y-1 pt-5">
              <img src={btn1} alt="진료실" />
              <img src={btn2} alt="약국" />
            </div>
            <div className="pt-6 ml-[52px]">
              <img src={btn3} alt="입원실" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HospitalPage;
