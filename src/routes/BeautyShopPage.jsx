import Sidebar from "../components/Sidebar";

import title from "../assets/beautyshop/tit_060125hair.gif";
import mainBanner from "../assets/beautyshop/main_060125hair.gif";
import txtPlay from "../assets/beautyshop/txt_060125hair_play.gif";
import arrow from "../assets/beautyshop/arr_060125hair.gif";

import sum1 from "../assets/beautyshop/sum_060125hair01.gif";
import sum2 from "../assets/beautyshop/sum_060125hair02.gif";
import sum3 from "../assets/beautyshop/sum_060125hair03.gif";
import btn1 from "../assets/beautyshop/btn_060125hair01.gif";
import btn2 from "../assets/beautyshop/btn_060125hair02.gif";
import btn3 from "../assets/beautyshop/btn_060125hair03.gif";

const BASE = "https://jsh6269.github.io/farm.jr.naver.com/beautyshop";

const STEPS = [
  { sum: sum1, btn: btn1, link: `${BASE}/apply.php.html`, alt: "동물 데려오기" },
  { sum: sum2, btn: btn2, link: `${BASE}/javascript:next_chk();`, alt: "물감 가져오기" },
  { sum: sum3, btn: btn3, link: `${BASE}/javascript:pet_change();`, alt: "변신하기" },
];

const BeautyShopPage = () => (
  <div className="bg-[#CCB4FD] rounded-2xl flex">
    <div className="mt-1 font-gulim">
      <span className="text-[12px] text-start ml-5">
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 마법 미용실
        <Sidebar />
      </span>
    </div>
    <div className="w-[555px] bg-white rounded-2xl mt-[33px] mr-5 mb-6 pt-3.5 flex flex-col items-center">
      <div className="w-[537px]">
        <img src={title} width={196} height={37} alt="동물농장 마법 미용실" />
      </div>
      <img
        src={mainBanner}
        width={537}
        height={200}
        alt="마법 미용실에 오신걸 환영해요"
        className="mt-1"
      />
      <div className="bg-[#F6F1FF] w-[537px] rounded-b-xl pt-3 pb-5 flex flex-col items-center font-gulim">
        <img
          src={txtPlay}
          width={232}
          height={19}
          alt="순서에 맞게 차례대로 실행해 주세요."
        />
        <div className="flex items-start justify-center mt-5">
          {STEPS.map((step, idx) => (
            <div key={step.alt} className="flex items-start">
              <div className="w-[135px] flex flex-col items-center">
                <div className="h-[135px] flex items-center justify-center">
                  <img src={step.sum} alt={step.alt} />
                </div>
                <a href={step.link} className="mt-2.5">
                  <img src={step.btn} width={113} height={34} alt={step.alt} />
                </a>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="w-[45px] flex justify-center mt-[54px]">
                  <img src={arrow} width={30} height={27} alt="다음 단계" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BeautyShopPage;
