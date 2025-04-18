import Sidebar from "../components/Sidebar";
import schoolHeader from "../assets/school/img_school01.gif";
import btn1 from "../assets/school/btn_school01.gif";
import btn2 from "../assets/school/btn_school02.gif";
import btn3 from "../assets/school/btn_talk060124_school.gif";
import btn4 from "../assets/school/btn_school04.gif";
import txtImg from "../assets/school/txt_school03.gif";

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
        <img src={schoolHeader} />
        <div className="bg-gradient-to-b from-[#febc50] to-[#e1f3ff] mx-[10px] h-[470px] rounded-b-xl">
          <div
            className="bg-white mx-[10px] rounded-b-[5.5px] h-[459px] pt-4 px-5"
            style={{ fontFamily: "굴림", fontSize: "12px" }}
          >
            <img src={txtImg} className="mx-auto" />
            <div className="flex flex-center flex-wrap gap-x-10.5 pl-2 gap-y-1 pt-5">
              <img src={btn1} />
              <img src={btn2} />
              <img src={btn3} />
              <img src={btn4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SchoolPage;
