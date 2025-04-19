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
      <div className="mt-1 font-gulim">
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 동물학교
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[738px] bg-white rounded-2xl mt-[33px] mr-5">
        <img
          src={schoolHeader}
          alt="동물학교 헤더"
          className="w-full rounded-t-2xl"
        />
        <div className="bg-gradient-to-b from-[#febc50] to-[#e1f3ff] mx-2.5 h-[470px] rounded-b-xl flex items-start">
          <div className="bg-white mx-2.5 rounded-b-[5.5px] h-[459px] pt-4 px-5 font-gulim text-[12px] w-full">
            <img src={txtImg} alt="학교 안내 텍스트" className="mx-auto" />
            <div className="flex flex-wrap gap-x-[42px] gap-y-1 pt-5 justify-center">
              <img src={btn1} alt="수업하기" />
              <img src={btn2} alt="색칠하기" />
              <img src={btn3} alt="말 가르치기" />
              <img src={btn4} alt="소설책방" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SchoolPage;
