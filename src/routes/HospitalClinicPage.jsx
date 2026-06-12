import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import header from "../assets/hospital/img_hospital02.gif";
import subImg from "../assets/hospital/sub05_img02.gif";
import subTxt from "../assets/hospital/sub05_txt02.gif";
import btnGo from "../assets/hospital/btn_dr_go.gif";
import btnBack from "../assets/hospital/btn_first_hospital.gif";
import frameL from "../assets/hospital/img_hospital_left.gif";
import frameR from "../assets/hospital/img_hospital_right.gif";
import teBL from "../assets/hospital/te_select03.gif";
import teBR from "../assets/hospital/te_select04.gif";
import teBarBL from "../assets/hospital/te_school13.gif";
import teBarBR from "../assets/hospital/te_school14.gif";
import teBottomL from "../assets/hospital/te05_item05.gif";
import teBottomR from "../assets/hospital/te05_item06.gif";
import teFooterL from "../assets/hospital/te05_item03.gif";
import teFooterR from "../assets/hospital/te05_item04.gif";

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
    <div className="w-[555px] bg-white font-gulim text-[12px] rounded-2xl overflow-hidden">
      <img src={header} alt="진료실" className="w-full" />

      <div className="flex mx-2.5 bg-[#E5F7FC]">
        <img src={frameL} alt="" width={10} height={60} />
        <div className="flex-1 bg-white py-8 flex flex-col items-center">
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
          <div className="flex w-full mt-6">
            <img src={teBL} alt="" width={10} height={10} />
            <div className="flex-1" />
            <img src={teBR} alt="" width={10} height={10} />
          </div>
        </div>
        <img src={frameR} alt="" width={10} height={60} />
      </div>

      <div className="flex mx-2.5">
        <img src={teBarBL} alt="" width={10} height={10} />
        <div className="flex-1" />
        <img src={teBarBR} alt="" width={10} height={10} />
      </div>

      <div className="flex">
        <img src={teBottomL} alt="" width={14} height={14} />
        <div className="flex-1" />
        <img src={teBottomR} alt="" width={14} height={14} />
      </div>

      <div className="flex">
        <img src={teFooterL} alt="" width={18} height={19} />
        <div className="flex-1 bg-[#48CCEC]" />
        <img src={teFooterR} alt="" width={18} height={19} />
      </div>
    </div>
  </PageShell>
);

export default HospitalClinicPage;
