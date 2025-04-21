import React from "react";
import Sidebar from "../components/Sidebar";
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
import img_041008_img01 from "../assets/sale/img_041008_img01.gif";
import btn_041008_ser from "../assets/sale/btn_041008_ser.gif";
import btn_next from "../assets/sale/btn_next.gif";
import te_item05 from "../assets/sale/te_item05.gif";
import te_item06 from "../assets/sale/te_item06.gif";
import items from "../data/sale";

function ListHeader({ between = false }) {
  return (
    <div
      className={`w-[535px] mx-auto bg-[#FFDDE9] flex items-center h-[25px] ${
        between ? "mt-2" : ""
      }`}
    >
      <div className="w-2" />
      <div className="flex items-center text-[#F1457B] font-bold text-[13px]">
        <img src={blank_041008} alt="" className="w-[54px] h-[1px]" />
        <p>아이템명</p>
        <img src={blank_041008} alt="" className="w-[95px] h-[1px]" />
        <p className="ml-1.5">설명</p>
        <img src={blank_041008} alt="" className="w-[90px] h-[1px]" />
        <p className="ml-[-0.5] mr-1">가격</p>
        <img src={blank_041008} alt="" className="w-9 h-[1px]" />
        <p className="ml-0.5">아이디</p>
        <img src={blank_041008} alt="" className="w-4 h-[1px]" />
        <p className="ml-4">종료시간</p>
      </div>
      <div className="w-2" />
    </div>
  );
}

function SaleComponent() {
  return (
    <div className="w-[555px] bg-white mx-auto text-[12px]">
      {/* 서브타이틀 */}
      <div className="flex w-[555px]">
        <img src={te_051122sale01} alt="" className="w-[15px] h-[15px]" />
        <div className="flex-1 bg-white" />
        <img src={te_051122sale02} alt="" className="w-[15px] h-[15px]" />
      </div>
      <div className="w-[555px]">
        <div className="flex items-center h-[37px]">
          <img src={tit_051122sale} alt="" className="ml-[15px]" />
          <div className="flex-1" />
        </div>
        <div className="flex justify-center">
          <img src={main_051122sale} alt="" className="w-[536px] h-[164px]" />
        </div>
        <div className="h-[10px]" />
      </div>
      {/* 버튼 */}
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
          <img
            src={tab_061012help}
            alt="도움말"
            className="w-[535px] h-[35px]"
          />
        </a>
        <div className="h-4" />
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
            {idx === 5 && <ListHeader between />}
            <div className="flex items-center h-[50px]">
              <div className="w-[50px] flex items-center justify-center">
                <div className="bg-[#D7D7D7] w-[42px] h-[42px] flex items-center justify-center">
                  <a href={item.link}>
                    <img src={item.img} alt="" className="w-[40px] h-[40px]" />
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
          </React.Fragment>
        ))}
      </div>
      {/* 검색 영역 */}
      <div className="w-[535px] mx-auto">
        <div className="h-5" />
        <div className="flex items-center justify-center">
          <img
            src={img_041008_img01}
            alt=""
            className="w-[71px] h-[21px] align-middle"
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
              className="w-[55px] h-[22px] align-middle ml-2"
            />
          </a>
        </div>
        <div className="h-5" />
      </div>
      {/* 페이지네이션 */}
      <div className="w-[462px] mx-auto">
        <div className="h-2.5" />
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
              className="align-middle ml-[5px] w-[45px] h-[18px]"
            />
          </a>
        </div>
        <div className="h-2.5" />
      </div>
      {/* 하단 장식 */}
      <div className="flex w-[555px]">
        <img src={te_item05} alt="" className="w-[14px] h-[14px]" />
        <div className="flex-1" />
        <img src={te_item06} alt="" className="w-[14px] h-[14px]" />
      </div>
    </div>
  );
}

const SalePage = () => {
  return (
    <div className="bg-[#fe9aba] rounded-2xl flex">
      <div className="mt-1 font-gulim">
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
