import Sidebar from "../components/Sidebar";
import te_left01 from "../assets/department/te_left01.gif";
import te_left02 from "../assets/department/te_left02.gif";
import te_left03 from "../assets/department/te_left03.gif";
import te_left04 from "../assets/department/te_left04.gif";

import title_store from "../assets/department/title_store.gif";
import bu_store02 from "../assets/department/bu_store02.gif";
import btn_050127_times from "../assets/department/btn_050127_times.gif";
import btn_store_salesman from "../assets/department/btn_store_salesman.gif";

import store_roof from "../assets/department/store_roof.gif";

import store_stair05 from "../assets/department/store_stair05.gif";
import store_stair04 from "../assets/department/store_stair04.gif";
import store_stair03 from "../assets/department/store_stair03.gif";
import store_stair02 from "../assets/department/store_stair02.gif";
import store_stair01 from "../assets/department/store_stair01.gif";
import store_stair00 from "../assets/department/store_stair00.gif";

import skin_store_room01 from "../assets/department/skin_store_room01.gif";
import skin_store_room02 from "../assets/department/skin_store_room02.gif";
import skin_store_room03 from "../assets/department/skin_store_room03.gif";
import skin_store_room04 from "../assets/department/skin_store_room04.gif";
import skin_store_room05 from "../assets/department/skin_store_room05.gif";

import goatmxjs from "../assets/department/goatmxjs.gif";
import weasels from "../assets/department/weasels.gif";
import lions from "../assets/department/lions.gif";
import otters_1_pink from "../assets/department/otters_1_pink.gif";
import c_dids from "../assets/department/c_dids.gif";
import sichus_blue from "../assets/department/sichus_blue.gif";
import sheeps_blue from "../assets/department/sheeps_blue.gif";
import foxs from "../assets/department/foxs.gif";
import chipmunks_1_yellow from "../assets/department/chipmunks_1_yellow.gif";

const DepartmentStore = () => {
  return (
    <div className="w-[555px] bg-white font-sans text-[13px] text-[#333] mb-2">
      {/* 상단 박스 테두리 */}
      <div className="flex flex-row">
        <img src={te_left01} width={10} height={10} alt="" />
        <div className="flex-1 bg-white" />
        <img src={te_left02} width={10} height={10} alt="" />
      </div>
      {/* 본문 */}
      <div className="w-full flex flex-col items-center">
        {/* 오늘의 시세 */}
        <div className="w-full flex flex-row items-center justify-between px-2">
          <div className="flex flex-row items-center gap-2">
            <img
              src={bu_store02}
              width={21}
              height={6}
              alt=""
              className="align-middle"
            />
            <span className="text-black">
              오늘 우리 마을의 아이템 시세는{" "}
              <span className="text-[#660000] font-bold">0%</span> 입니다.
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <a href="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewExp();">
              <img src={btn_050127_times} width={73} height={25} alt="" />
            </a>
            <a href="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:GoApply();">
              <img
                src={btn_store_salesman}
                width={107}
                height={25}
                alt=""
                className="ml-[10px]"
              />
            </a>
          </div>
        </div>
        {/* 지붕 */}
        <div className="w-[545px] mx-auto">
          <img src={store_roof} width={545} height={96} alt="" />
        </div>
        {/* 5층 */}
        <div
          className="w-[535px] h-[117px] flex flex-row"
          style={{
            backgroundImage: `url(${store_stair05})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "calc(100% + 10px) 100%",
            backgroundPosition: "-5px 0",
            minHeight: 117,
          }}
        >
          <div className="w-[15px]" />
          <StoreRoom
            bg={skin_store_room03}
            img={goatmxjs}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('1');"
            name="재미있는옷가개"
          />
          <StoreRoom
            bg={skin_store_room02}
            img={weasels}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('2');"
            name="래드 제일 잘나가..."
          />
          <StoreRoom
            bg={skin_store_room01}
            img={lions}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('3');"
            name="^^와주이소"
          />
          <div className="w-[126px]" />
          <div className="w-[11px]" />
        </div>
        {/* 4층 */}
        <div
          className="w-[535px] h-[117px] flex flex-row"
          style={{
            backgroundImage: `url(${store_stair04})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "calc(100% + 10px) 100%",
            backgroundPosition: "-5px 0",
            minHeight: 117,
          }}
        >
          <div className="w-[15px]" />
          <StoreRoom
            bg={skin_store_room04}
            img={goatmxjs}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('4');"
            name="반짝반짝 보석 관..."
          />
          <StoreRoom
            bg={skin_store_room04}
            img={otters_1_pink}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('5');"
            name="핼로우?"
          />
          <div className="w-[131px]" />
          <div className="w-[126px]" />
          <div className="w-[11px]" />
        </div>
        {/* 3층 */}
        <div
          className="w-[535px] h-[117px] flex flex-row"
          style={{
            backgroundImage: `url(${store_stair03})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "calc(100% + 10px) 100%",
            backgroundPosition: "-5px 0",
            minHeight: 117,
          }}
        >
          <div className="w-[15px]" />
          <StoreRoom
            bg={skin_store_room05}
            img={c_dids}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('6');"
            name="몸 에좋은 음식점..."
          />
          <StoreRoom
            bg={skin_store_room04}
            img={sichus_blue}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('7');"
            name="★행복 샵★"
          />
          <div className="w-[131px]" />
          <div className="w-[126px]" />
          <div className="w-[11px]" />
        </div>
        {/* 2층 */}
        <div
          className="w-[535px] h-[117px] flex flex-row"
          style={{
            backgroundImage: `url(${store_stair02})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "calc(100% + 10px) 100%",
            backgroundPosition: "-5px 0",
            minHeight: 117,
          }}
        >
          <div className="w-[15px]" />
          <StoreRoom
            bg={skin_store_room02}
            img={sheeps_blue}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('8');"
            name="미주의 가게"
          />
          <StoreRoom
            bg={skin_store_room02}
            img={foxs}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('9');"
            name="귀요미"
          />
          <StoreRoom
            bg={skin_store_room04}
            img={chipmunks_1_yellow}
            link="https://jsh6269.github.io/farm.jr.naver.com/department/javascript:ViewShop('10');"
            name="골라골라"
          />
          <div className="w-[126px]" />
          <div className="w-[11px]" />
        </div>
        {/* 1층 */}
        <div
          className="w-[545px] h-[53px] flex flex-col justify-center"
          style={{
            background: `url(${store_stair01}) no-repeat`,
            minHeight: 53,
          }}
        >
          <div className="h-[18px]" />
          <div className="text-center text-[#FFFFCC] font-bold text-[13px]">
            레드마을 백화점
          </div>
        </div>
        {/* 지하 */}
        <div className="w-[545px]">
          <img src={store_stair00} width={545} height={140} alt="" />
        </div>
      </div>
      {/* 하단 박스 테두리 */}
      <div className="flex flex-row">
        <img src={te_left03} width={10} height={10} alt="" />
        <div className="flex-1 bg-white" />
        <img src={te_left04} width={10} height={10} alt="" />
      </div>
    </div>
  );
};

// 층별 가게 박스 컴포넌트
function StoreRoom({ bg, img, link, name }) {
  return (
    <div className="w-[131px] flex flex-col items-center">
      <div className="h-[8px]" />
      <div
        className="w-[110px] h-[92px] flex items-end mr-[8.5px] translate-y-[4.5px] bg-center"
        style={{
          background: `url(${bg}) no-repeat`,
          backgroundSize: "contain",
        }}
      >
        <a href={link}>
          <img src={img} className="ml-2 my-1" alt="" />
        </a>
      </div>
      <div className="h-[6px]" />
      <div className="text-center">
        <a href={link} className="text-[#333333] text-[12px] pr-1.5">
          {name}
        </a>
      </div>
    </div>
  );
}

const DepartmentPage = () => {
  return (
    <div className="bg-[#FFF799] rounded-2xl flex">
      <div className="mt-1 font-gulim">
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 페스티벌
          <Sidebar />
        </span>
      </div>
      <div className="w-[555px] bg-white rounded-2xl mt-[33px] mr-5 mb-6">
        <img
          src={title_store}
          alt="페스티벌 헤더"
          className="rounded-t-2xl mt-2.5"
        />
        <DepartmentStore />
      </div>
    </div>
  );
};
export default DepartmentPage;
