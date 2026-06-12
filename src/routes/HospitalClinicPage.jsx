import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import header from "../assets/hospital/img_hospital02.gif";
import subImg from "../assets/hospital/sub05_img02.gif";
import subTxt from "../assets/hospital/sub05_txt02.gif";
import btnGo from "../assets/hospital/btn_dr_go.gif";
import btnBack from "../assets/hospital/btn_first_hospital.gif";

const HospitalClinicPage = () => (
  <PageShell
    bgClassName="bg-[#48ccec]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/hospital">동물병원</CrumbLink>
        <CrumbSep />
        진료실
      </>
    }
  >
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-lg overflow-hidden mb-5">
      <img src={header} alt="진료실" className="w-full block" />

      <div className="mx-2.5 mb-3 bg-[#E5F7FC] rounded-lg overflow-hidden pb-1">
        <div className="bg-white mx-1 my-1 rounded-lg py-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-5">
            <img src={subImg} alt="" width={121} height={72} />
            <img src={subTxt} alt="" width={249} height={74} />
          </div>
          <button type="button" onClick={() => alert("로그인 후 진료를 받을 수 있습니다.")} className="cursor-pointer mb-8">
            <img src={btnGo} alt="진료받기" width={119} height={38} />
          </button>
          <Link to="/hospital">
            <img src={btnBack} alt="병원 첫화면" />
          </Link>
        </div>
      </div>
    </div>
  </PageShell>
);

export default HospitalClinicPage;
