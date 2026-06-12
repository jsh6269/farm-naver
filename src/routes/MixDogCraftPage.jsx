import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import title from "../assets/mix_dog/mix_dog/title.gif";
import sideL from "../assets/mix_dog/mix_dog/img_alchemy01.gif";
import sideR from "../assets/mix_dog/mix_dog/img_alchemy02.gif";
import img001off from "../assets/mix_dog/mix_dog/img_alchemy001_off.gif";
import img002 from "../assets/mix_dog/mix_dog/img_alchemy002.gif";
import gifMove from "../assets/mix_dog/mix_dog/gif_02_move_0.gif";
import img003off from "../assets/mix_dog/mix_dog/img_alchemy003_off.gif";
import btnMix from "../assets/mix_dog/mix_dog/btn_02_off.gif";
import teBL from "../assets/mix_dog/mix_dog/te_alchemy13.gif";
import teBR from "../assets/mix_dog/mix_dog/te_alchemy14.gif";
import teBarBL from "../assets/mix_dog/mix_dog/te_alchemy11.gif";
import teBarBR from "../assets/mix_dog/mix_dog/te_alchemy12.gif";
import teBottomL from "../assets/mix_dog/mix_dog/te_alchemy09.gif";
import teBottomR from "../assets/mix_dog/mix_dog/te_alchemy10.gif";
import teFooterL from "../assets/mix_dog/mix_dog/te_alchemy03.gif";
import teFooterR from "../assets/mix_dog/mix_dog/te_alchemy04.gif";

const MixDogCraftPage = () => (
  <PageShell
    bgClassName="bg-[#9351dc]"
    contentClassName="w-[550px] rounded-2xl mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/mix_dog">연금술</CrumbLink>
        <CrumbSep />
        믹스독 돌보기
      </>
    }
  >
    <div className="w-[555px] bg-[#6118B3] font-gulim rounded-b-xl overflow-hidden">
      <img src={title} alt="연금술" width={555} height={245} />

      <div className="flex w-[535px] mx-auto bg-[#FFC900] rounded-b-xl mb-3">
        <img src={sideL} alt="" width={10} height={60} />
        <div className="flex-1 bg-white">
          <div className="flex">
            <img src={img001off} alt="" width={172} height={216} />
            <div>
              <img src={img002} alt="" width={170} height={95} />
              <img src={gifMove} alt="" width={170} height={185} />
            </div>
            <img src={img003off} alt="" width={173} height={142} />
          </div>
          <div className="h-8 bg-white" />
          <div className="flex justify-center bg-white pb-3">
            <Link to="/mix_dog/mix">
              <img src={btnMix} alt="아이템 조합" width={101} height={39} />
            </Link>
          </div>
          <div className="h-3 bg-white" />
          <div className="flex bg-white">
            <img src={teBL} alt="" width={4} height={4} />
            <div className="flex-1" />
            <img src={teBR} alt="" width={4} height={4} />
          </div>
        </div>
        <img src={sideR} alt="" width={10} height={60} />
      </div>

      <div className="flex w-[535px] mx-auto">
        <img src={teBarBL} alt="" width={10} height={10} />
        <div className="flex-1 bg-[#FFC900]" />
        <img src={teBarBR} alt="" width={10} height={10} />
      </div>

      <div className="flex">
        <img src={teBottomL} alt="" width={10} height={11} />
        <div className="w-[535px]" />
        <img src={teBottomR} alt="" width={10} height={11} />
      </div>

      <div className="flex">
        <img src={teFooterL} alt="" width={18} height={20} />
        <div className="flex-1 bg-[#9351DC]" />
        <img src={teFooterR} alt="" width={18} height={20} />
      </div>
    </div>
  </PageShell>
);

export default MixDogCraftPage;
