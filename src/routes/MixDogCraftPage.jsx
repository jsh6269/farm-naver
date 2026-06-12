import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import title from "../assets/mix_dog/mix_dog/title.gif";
import img001off from "../assets/mix_dog/mix_dog/img_alchemy001_off.gif";
import img002 from "../assets/mix_dog/mix_dog/img_alchemy002.gif";
import gifMove from "../assets/mix_dog/mix_dog/gif_02_move_0.gif";
import img003off from "../assets/mix_dog/mix_dog/img_alchemy003_off.gif";
import btnMix from "../assets/mix_dog/mix_dog/btn_02_off.gif";

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
    <div className="w-[555px] bg-[#6118B3] font-gulim rounded-lg overflow-hidden mb-5">
      <img src={title} alt="연금술" width={555} height={245} className="block" />

      <div className="mx-2.5 mb-3 bg-[#FFC900] rounded-lg overflow-hidden pb-1">
        <div className="bg-white mx-1 my-1 rounded-lg overflow-hidden">
          <div className="flex">
            <img src={img001off} alt="" width={172} height={216} />
            <div>
              <img src={img002} alt="" width={170} height={95} />
              <img src={gifMove} alt="" width={170} height={185} />
            </div>
            <img src={img003off} alt="" width={173} height={142} />
          </div>
          <div className="h-8 bg-white" />
          <div className="flex justify-center bg-white pb-6">
            <Link to="/mix_dog/mix">
              <img src={btnMix} alt="아이템 조합" width={101} height={39} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </PageShell>
);

export default MixDogCraftPage;
