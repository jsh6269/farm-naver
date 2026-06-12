import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import schoolHeader from "../assets/school/img_school01.gif";
import btn1 from "../assets/school/btn_school01.gif";
import btn2 from "../assets/school/btn_school02.gif";
import btn3 from "../assets/school/btn_talk060124_school.gif";
import btn4 from "../assets/school/btn_school04.gif";
import txtImg from "../assets/school/txt_school03.gif";

const SchoolPage = () => {
  return (
    <PageShell
      bgClassName="bg-[#8ed0ff]"
      contentClassName="w-[550px] h-[738px] bg-white rounded-2xl mt-[33px] mr-5"
      breadcrumb={
        <>
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 동물학교
        </>
      }
    >
      <img
        src={schoolHeader}
        alt="동물학교 헤더"
        className="w-full rounded-t-2xl"
      />
      <div className="bg-gradient-to-b from-[#febc50] to-[#e1f3ff] mx-2.5 h-[470px] rounded-b-xl flex items-start">
        <div className="bg-white mx-2.5 rounded-b-[5.5px] h-[459px] pt-4 px-5 font-gulim text-[12px] w-full">
          <img src={txtImg} alt="학교 안내 텍스트" className="mx-auto" />
          <div className="flex flex-wrap gap-x-[42px] gap-y-1 pt-5 justify-center">
            <Link to="/school/class">
              <img src={btn1} alt="수업하기" />
            </Link>
            <Link to="/drawing">
              <img src={btn2} alt="색칠하기" />
            </Link>
            <Link to="/talk">
              <img src={btn3} alt="말 가르치기" />
            </Link>
            <Link to="/school/library">
              <img src={btn4} alt="소설책방" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
export default SchoolPage;
