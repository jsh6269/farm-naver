import Sidebar from "../components/Sidebar";
import React from "react";
import te_051122sale01 from "../assets/sale/te_051122sale01.gif";
import te_051122sale02 from "../assets/sale/te_051122sale02.gif";
import tit_051122sale from "../assets/sale/tit_051122sale.gif";
import main_051122sale from "../assets/sale/main_051122sale.gif";
import btn_myitem061012 from "../assets/sale/btn_myitem061012.gif";
import btn_mymarket061012 from "../assets/sale/btn_mymarket061012.gif";
import tab_061012help from "../assets/sale/tab_061012help.gif";
import tab_061012sale from "../assets/sale/tab_061012sale.gif";
import btn_more061012 from "../assets/sale/btn_more061012.gif";
import blank_041008 from "../assets/sale/blank_041008.gif";
import icon_list_limited from "../assets/sale/icon_list_limited.gif";
import icon_list_hot from "../assets/sale/icon_list_hot.gif";
import img_041008_img01 from "../assets/sale/img_041008_img01.gif";
import btn_041008_ser from "../assets/sale/btn_041008_ser.gif";
import btn_next from "../assets/sale/btn_next.gif";
import te_item05 from "../assets/sale/te_item05.gif";
import te_item06 from "../assets/sale/te_item06.gif";

// 아이템 이미지 import
import heavenssword from "../assets/item/heavenssword.gif";
import festival_crown02 from "../assets/item/festival_crown02.gif";
import festival_crown03 from "../assets/item/festival_crown03.gif";
import star_medal from "../assets/item/star_medal.gif";
import wisdom_crown01 from "../assets/item/wisdom_crown01.gif";
import Cloud_Big from "../assets/item/Cloud_Big.gif";
import cavegame_king_medal from "../assets/item/cavegame_king_medal.gif";
import starfootprint from "../assets/item/starfootprint.gif";
import lotuslamp from "../assets/item/lotuslamp.gif";
import oldlamp from "../assets/item/oldlamp.gif";

// 아이템 데이터 배열
const items = [
  {
    id: "77062168",
    img: heavenssword,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">천상의 검</span>
        <img src={icon_list_limited} alt="" className="inline" />
      </>
    ),
    desc: "'",
    price: "1000000 P",
    user: "ksg0096",
    end: "01/09 00:33:43",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062168%2526page%253d1.html",
  },
  {
    id: "77062172",
    img: festival_crown02,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">2등 페스티벌 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: "'",
    price: "100000 P",
    user: "ksg0096",
    end: "01/09 00:34:40",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062172%2526page%253d1.html",
  },
  {
    id: "77062174",
    img: festival_crown02,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">2등 페스티벌 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: "'",
    price: "100000 P",
    user: "ksg0096",
    end: "01/09 00:35:04",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062174%2526page%253d1.html",
  },
  {
    id: "77062169",
    img: festival_crown03,
    name: (
      <>
        <span className="text-[#C00854] font-bold">1등 페스티벌 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: ".",
    price: "100000 P",
    user: "ksg0096",
    end: "01/09 00:33:56",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062169%2526page%253d1.html",
  },
  {
    id: "77062176",
    img: heavenssword,
    name: (
      <>
        <span className="text-[#0069C8] font-bold">천상의 검</span>
        <img src={icon_list_limited} alt="" className="inline" />
      </>
    ),
    desc: "''",
    price: "1000000 P",
    user: "ksg0096",
    end: "01/09 00:35:27",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77062176%2526page%253d1.html",
  },
  {
    id: "77075508",
    img: star_medal,
    name: "크라라의 훈장",
    desc: "부자님부탁합니다.",
    price: "100 P",
    user: "zhzh5032",
    end: "01/10 00:32:32",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075508%2526page%253d1.html",
  },
  {
    id: "77075507",
    img: wisdom_crown01,
    name: (
      <>
        <span className="text-[#6B6A64] font-bold">지식의 왕관</span>
        <img src={icon_list_hot} alt="" className="inline" />
      </>
    ),
    desc: "떠리떠리 10%할인",
    price: "2000 P",
    user: "12foemtmxhsw",
    end: "01/10 00:31:57",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075507%2526page%253d1.html",
  },
  {
    id: "77075506",
    img: Cloud_Big,
    name: "큰 뭉게뭉게 구름",
    desc: "울지않을래더멋진남잘...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:31:51",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075506%2526page%253d1.html",
  },
  {
    id: "77075505",
    img: cavegame_king_medal,
    name: "뭉게왕의 훈장",
    desc: "비매품",
    price: "100000 P",
    user: "gllmon",
    end: "01/10 00:31:47",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075505%2526page%253d1.html",
  },
  {
    id: "77075504",
    img: starfootprint,
    name: (
      <>
        별들의 발자국
        <img src={icon_list_limited} alt="" className="inline" />
      </>
    ),
    desc: ".",
    price: "0 P",
    user: "gllmon",
    end: "01/10 00:31:33",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075504%2526page%253d1.html",
  },
  {
    id: "77075503",
    img: lotuslamp,
    name: "연꽃 등",
    desc: "또각또각걸어가려해보...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:31:33",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075503%2526page%253d1.html",
  },
  {
    id: "77075502",
    img: Cloud_Big,
    name: "큰 뭉게뭉게 구름",
    desc: "하이힐에짧은치마모두...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:31:15",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075502%2526page%253d1.html",
  },
  {
    id: "77075501",
    img: oldlamp,
    name: "청사초롱",
    desc: "너없이도슬프지않아무...",
    price: "0 P",
    user: "yeli9907",
    end: "01/10 00:30:56",
    link: "https://jsh6269.github.io/farm.jr.naver.com/sale/view.php%253fnid%253d77075501%2526page%253d1.html",
  },
];

function ListHeader({ between = false }) {
  return (
    <div
      className={`w-[535px] mx-auto bg-[#FFDDE9] flex items-center h-[25px] ${
        between ? "mt-2" : ""
      }`}
    >
      <div className="w-[8px]" />
      <div className="flex items-center text-[#F1457B] font-bold text-[13px]">
        <img src={blank_041008} alt="" width={54} height={1} />
        <p>아이템명</p>
        <img src={blank_041008} alt="" width={95} height={1} />
        <p className="ml-[5px]">설명</p>
        <img src={blank_041008} alt="" width={90} height={1} />
        <p className="ml-[-2px] mr-[4px]">가격</p>
        <img src={blank_041008} alt="" width={36} height={1} />
        <p className="ml-[1px]">아이디</p>
        <img src={blank_041008} alt="" width={15} height={1} />
        <p className="ml-[16px]">종료시간</p>
      </div>
      <div className="w-[9px]" />
    </div>
  );
}

function SaleComponent() {
  return (
    <div className="w-[555px] bg-white mx-auto text-[12px]">
      {/* 서브타이틀 */}
      <div className="flex w-[555px]">
        <img src={te_051122sale01} alt="" width={15} height={15} />
        <div className="flex-1 bg-white" />
        <img src={te_051122sale02} alt="" width={15} height={15} />
      </div>
      <div className="w-[555px]">
        <div className="flex items-center h-[37px]">
          <img src={tit_051122sale} alt="" className="ml-[15px]" />
          <div className="flex-1" />
        </div>
        <div className="flex justify-center">
          <img src={main_051122sale} alt="" width={536} height={164} />
        </div>
        <div className="h-[10px]" />
      </div>
      {/* 버튼 영역 */}
      <div className="flex justify-center items-center mt-2">
        <a href="https://jsh6269.github.io/farm.jr.naver.com/item_info.php.html">
          <img src={btn_myitem061012} alt="내 아이템" />
        </a>
        <div className="w-[15px]" />
        <a href="https://jsh6269.github.io/farm.jr.naver.com/sale/my_sale.php.html">
          <img src={btn_mymarket061012} alt="내 마켓" />
        </a>
      </div>
      <div className="h-[10px]" />
      <div className="w-[535px] mx-auto">
        <a href="https://jsh6269.github.io/farm.jr.naver.com/sale/help.php.html">
          <img src={tab_061012help} alt="도움말" width={535} height={35} />
        </a>
        <div className="h-[16px]" />
        <div
          className="flex justify-end items-center h-[42px]"
          style={{ backgroundImage: `url(${tab_061012sale})` }}
        >
          <a href="https://jsh6269.github.io/farm.jr.naver.com/sale/late.php.html">
            <img
              src={btn_more061012}
              alt="더보기"
              className="mr-[15px] mt-[5px]"
            />
          </a>
        </div>
      </div>
      {/* 리스트 헤더 */}
      <ListHeader />
      {/* 아이템 리스트 */}
      <div className="w-[535px] mx-auto">
        {items.map((item, idx) => (
          <React.Fragment key={item.id}>
            {idx === 5 && <ListHeader between={true} />}
            <div className="flex items-center h-[50px]">
              <div className="w-[50px] flex items-center justify-center">
                <div className="bg-[#D7D7D7] w-[42px] h-[42px] flex items-center justify-center">
                  <a href={item.link}>
                    <img src={item.img} alt="" width={40} height={40} />
                  </a>
                </div>
              </div>
              <div className="w-[124px] flex items-center">
                <a href={item.link}>
                  <span className="text-[#373535]">{item.name}</span>
                </a>
              </div>
              <div className="w-[136px]">
                <a href={item.link}>
                  <span className="text-[#666666]">{item.desc}</span>
                </a>
              </div>
              <div className="w-[63px] text-center text-[#666666]">
                {item.price}
              </div>
              <div className="w-[83px] text-center text-[#666666]">
                {item.user}
              </div>
              <div
                className={`w-[70px] text-center ${
                  idx < 5 ? "text-[#F1457B]" : "text-[#666666]"
                }`}
              >
                {item.end}
              </div>
            </div>
            {/* <img src={doteline_041008} alt="" className="w-full" /> */}
          </React.Fragment>
        ))}
      </div>
      {/* 검색 영역 */}
      <div className="w-[535px] mx-auto">
        <div className="h-[20px]" />
        <div className="flex items-center justify-center">
          <img
            src={img_041008_img01}
            alt=""
            width={71}
            height={21}
            className="align-middle"
          />
          <select className="text-[12px] text-[#3E3E3E] w-[90px] h-[20px] pl-[5px] ml-2">
            <option value="item_name">아이템 이름</option>
            <option value="user_id">아이디</option>
          </select>
          <input
            type="text"
            className="text-[12px] text-[#3E3E3E] w-[205px] h-[20px] pl-[5px] ml-2"
          />
          <a href="#">
            <img
              src={btn_041008_ser}
              alt="검색"
              width={55}
              height={22}
              className="align-middle ml-2"
            />
          </a>
        </div>
        <div className="h-[20px]" />
      </div>
      {/* 페이지네이션 */}
      <div className="w-[462px] mx-auto">
        <div className="h-[10px]" />
        <div className="flex items-center justify-center">
          <b className="text-black">1</b>&nbsp;&nbsp;
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <React.Fragment key={n}>
              <a href="#">
                <span className="text-black">{n}</span>
              </a>
              &nbsp;&nbsp;
            </React.Fragment>
          ))}
          <a href="#">
            <img
              src={btn_next}
              alt="다음"
              className="align-middle ml-[5px]"
              width={45}
              height={18}
            />
          </a>
        </div>
        <div className="h-[10px]" />
      </div>
      {/* 하단 장식 */}
      <div className="flex w-[555px]">
        <img src={te_item05} alt="" width={14} height={14} />
        <div className="flex-1" />
        <img src={te_item06} alt="" width={14} height={14} />
      </div>
    </div>
  );
}

const SalePage = () => {
  return (
    <div className="bg-[#fe9aba] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 와글와글 장터
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] bg-white rounded-2xl mt-[33px] mr-5 mb-5">
        <SaleComponent />
      </div>
    </div>
  );
};
export default SalePage;
