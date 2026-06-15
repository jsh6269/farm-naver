import PageShell from "../components/PageShell";

import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";



import title from "../assets/mix_dog/mix_dog/title.gif";

import thum from "../assets/mix_dog/mix_dog/pop_alchemy_img01.gif";

import btnChoice from "../assets/mix_dog/mix_dog/btn_11.gif";

import iconPlus from "../assets/mix_dog/mix_dog/car_004.gif";

import btnMix from "../assets/mix_dog/mix_dog/btn_02_off.gif";

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

    <div className="w-[555px] bg-[#6118B3] font-gulim rounded-lg overflow-hidden mb-5">

      <img src={title} alt="아이템 조합" width={555} height={245} className="block" />



      <div className="mx-2.5 mb-3 bg-[#FFC900] rounded-lg overflow-hidden pb-1">

        <div className="bg-white mx-1 my-1 rounded-lg pt-6 pb-6">

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



          <div className="text-center mt-6">

            <img src={listImg} alt="조합 예시" width={450} height={93} className="mx-auto" />

          </div>

        </div>

      </div>

    </div>

  </PageShell>

);



export default MixDogMixPage;

