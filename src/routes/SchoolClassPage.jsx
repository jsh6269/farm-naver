import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import header from "../assets/school/img_school01.gif";
import txtImg from "../assets/school/txt_school03.gif";

const SchoolClassPage = () => (
  <PageShell
    bgClassName="bg-[#8ed0ff]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/school">동물학교</CrumbLink>
        <CrumbSep />
        수업하기
      </>
    }
  >
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-lg overflow-hidden mb-5">
      <img src={header} alt="동물학교" className="w-full rounded-t-2xl" />

      <div className="bg-gradient-to-b from-[#febc50] to-[#e1f3ff] mx-2.5 rounded-b-xl">
        <div className="bg-white mx-2.5 rounded-b-[5.5px] py-6 px-5 min-h-[360px] flex flex-col items-center">
          <img src={txtImg} alt="학교 안내" className="mb-6" />

          <div className="bg-[#E1F3FF] border border-[#8ED0FF] rounded px-8 py-10 text-center max-w-[400px]">
            <p className="text-[14px] font-bold text-[#333] mb-3">수업을 듣으려면 로그인이 필요합니다</p>
            <p className="text-[12px] text-[#666] leading-[20px]">
              동물 친구를 선택한 후 수업하기를 누르면
              <br />
              동물학교에서 다양한 수업을 들을 수 있어요.
            </p>
            <button
              type="button"
              onClick={() => alert("로그인 후 동물을 선택해 수업을 들을 수 있습니다.")}
              className="mt-6 text-[12px] text-blue-700 underline cursor-pointer"
            >
              동물 선택하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </PageShell>
);

export default SchoolClassPage;
