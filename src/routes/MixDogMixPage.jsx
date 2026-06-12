import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import title from "../assets/mix_dog/mix_dog/title.gif";
import thum from "../assets/mix_dog/mix_dog/pop_alchemy_img01.gif";
import btnChoice from "../assets/mix_dog/mix_dog/btn_11.gif";
import iconPlus from "../assets/mix_dog/mix_dog/car_004.gif";
import btnMix from "../assets/mix_dog/mix_dog/btn_02_off.gif";
import sideL from "../assets/mix_dog/mix_dog/img_alchemy01.gif";
import sideR from "../assets/mix_dog/mix_dog/img_alchemy02.gif";
import teBL from "../assets/mix_dog/mix_dog/te_alchemy13.gif";
import teBR from "../assets/mix_dog/mix_dog/te_alchemy14.gif";
import teBarBL from "../assets/mix_dog/mix_dog/te_alchemy11.gif";
import teBarBR from "../assets/mix_dog/mix_dog/te_alchemy12.gif";
import teBottomL from "../assets/mix_dog/mix_dog/te_alchemy09.gif";
import teBottomR from "../assets/mix_dog/mix_dog/te_alchemy10.gif";
import teFooterL from "../assets/mix_dog/mix_dog/te_alchemy03.gif";
import teFooterR from "../assets/mix_dog/mix_dog/te_alchemy04.gif";
import listImg from "../assets/mix_dog/mix_dog/new_pop02.gif";

const MixDogMixPage = () => (
  <PageShell
    bgClassName="bg-[#9351dc]"
    contentClassName="w-[550px] rounded-2xl mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/mix_dog">연금술</CrumbLink>
        <CrumbSep />
        아이템 조합
      </>
    }
  >
    <div className="w-[555px] bg-[#6118B3] font-gulim rounded-b-xl overflow-hidden">
      <img src={title} alt="아이템 조합" width={555} height={245} />

      <div className="flex w-[535px] mx-auto bg-[#FFC900] rounded-b-xl mb-3">
        <img src={sideL} alt="" width={10} height={60} />
        <div className="flex-1 bg-white pt-6 pb-4">
          <div className="flex justify-center items-start w-[465px] mx-auto">
            <div className="w-[108px] text-center">
              <div className="h-[108px] flex items-center justify-center">
                <img src={thum} alt="아이템1" width={100} height={100} />
              </div>
              <button type="button" onClick={() => alert("로그인 후 아이템을 선택할 수 있습니다.")} className="cursor-pointer mt-1">
                <img src={btnChoice} alt="선택" width={108} height={38} />
              </button>
            </div>
            <div className="w-[76px] flex justify-center pt-[50px]">
              <img src={iconPlus} alt="+" width={21} height={23} />
            </div>
            <div className="w-[108px] text-center">
              <div className="h-[108px] flex items-center justify-center">
                <img src={thum} alt="아이템2" width={100} height={100} />
              </div>
              <button type="button" onClick={() => alert("로그인 후 아이템을 선택할 수 있습니다.")} className="cursor-pointer mt-1">
                <img src={btnChoice} alt="선택" width={108} height={38} />
              </button>
            </div>
            <div className="w-[61px]" />
            <div className="w-[112px] pt-[42px]">
              <button type="button" onClick={() => alert("아이템을 선택해주세요!")} className="cursor-pointer">
                <img src={btnMix} alt="조합하기" width={101} height={39} />
              </button>
            </div>
          </div>

          <div className="text-center mt-6 mb-4">
            <img src={listImg} alt="조합 예시" width={450} height={93} className="mx-auto" />
          </div>

          <div className="flex">
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

export default MixDogMixPage;
