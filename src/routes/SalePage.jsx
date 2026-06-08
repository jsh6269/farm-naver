import React, { useState } from "react";
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
import btn_pre from "../assets/sale/btn_pre.gif";
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

const ITEMS_PER_PAGE = 8;

function ItemDetailModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 font-gulim"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-[320px] p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center font-bold text-[#F1457B] text-[14px] mb-3">
          {item.name}
        </div>
        <div className="flex justify-center mb-3">
          <div className="bg-[#FFEAF1] w-[90px] h-[90px] flex items-center justify-center rounded-lg">
            <img src={item.img} alt="" className="w-[64px] h-[64px]" />
          </div>
        </div>
        <table className="w-full text-[12px] text-[#555]">
          <tbody>
            <tr>
              <td className="py-1 pr-2 text-[#F1457B] font-bold w-[64px] align-top">
                설명
              </td>
              <td className="py-1">{item.descFull || item.desc}</td>
            </tr>
            <tr>
              <td className="py-1 pr-2 text-[#F1457B] font-bold">가격</td>
              <td className="py-1">{item.price}</td>
            </tr>
            <tr>
              <td className="py-1 pr-2 text-[#F1457B] font-bold">아이디</td>
              <td className="py-1">{item.user}</td>
            </tr>
            <tr>
              <td className="py-1 pr-2 text-[#F1457B] font-bold">종료시간</td>
              <td className="py-1">{item.end}</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-[#F1457B] text-white text-[12px] px-5 py-1.5 rounded-full cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

function SaleComponent() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  // 검색 입력(편집 중) 상태와 실제 적용된 검색 조건을 분리한다.
  const [field, setField] = useState("item_name");
  const [text, setText] = useState("");
  const [query, setQuery] = useState({ field: "item_name", keyword: "" });

  const filtered = React.useMemo(() => {
    const kw = query.keyword.trim().toLowerCase();
    if (!kw) return items;
    return items.filter((it) => {
      const target =
        query.field === "user_id" ? it.user : it.name;
      return String(target).toLowerCase().includes(kw);
    });
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  const goTo = (p) => {
    setPage(Math.min(Math.max(1, p), totalPages));
  };

  const runSearch = () => {
    setQuery({ field, keyword: text });
    setPage(1);
  };

  const PAGE_BLOCK = 10;
  const blockStart = Math.floor((page - 1) / PAGE_BLOCK) * PAGE_BLOCK + 1;
  const blockEnd = Math.min(blockStart + PAGE_BLOCK - 1, totalPages);

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
        {pageItems.length === 0 && (
          <div className="h-[100px] flex items-center justify-center text-[#999]">
            검색 결과가 없습니다.
          </div>
        )}
        {pageItems.map((item) => (
          <div key={item.id} className="flex items-center h-[50px]">
            <div className="w-[50px] flex items-center justify-center">
              <div className="bg-white border border-[#E5E5E5] w-[42px] h-[42px] flex items-center justify-center">
                <button onClick={() => setSelected(item)} className="cursor-pointer">
                  <img src={item.img} alt="" className="w-[40px] h-[40px]" />
                </button>
              </div>
            </div>
            <div className="w-[124px] flex items-center">
              <button
                onClick={() => setSelected(item)}
                className="text-left hover:underline cursor-pointer"
              >
                <span className="text-[#373535]">{item.name}</span>
              </button>
            </div>
            <div className="w-[136px]">
              <button
                onClick={() => setSelected(item)}
                className="text-left hover:underline cursor-pointer"
              >
                <span className="text-[#666666]">{item.desc}</span>
              </button>
            </div>
            <div className="w-[63px] text-center text-[#666666]">
              {item.price}
            </div>
            <div className="w-[83px] text-center text-[#666666]">
              {item.user}
            </div>
            <div className="w-[70px] text-center text-[#666666]">
              {item.end}
            </div>
          </div>
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
          <select
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="text-[12px] text-[#3E3E3E] w-[90px] h-[20px] pl-[5px] ml-2 border border-[#C4C4C4]"
          >
            <option value="item_name">아이템 이름</option>
            <option value="user_id">아이디</option>
          </select>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") runSearch();
            }}
            className="text-[12px] text-[#3E3E3E] w-[205px] h-[20px] pl-[5px] ml-2 border border-[#C4C4C4]"
          />
          <button onClick={runSearch} className="cursor-pointer">
            <img
              src={btn_041008_ser}
              alt="검색"
              className="w-[55px] h-[22px] align-middle ml-2"
            />
          </button>
        </div>
        <div className="h-5" />
      </div>
      {/* 페이지네이션 (10개 단위 묶음) */}
      <div className="w-[462px] mx-auto">
        <div className="h-2.5" />
        <div className="flex items-center justify-center">
          {blockStart > 1 && (
            <button
              onClick={() => goTo(blockStart - 1)}
              className="cursor-pointer mr-[5px]"
            >
              <img
                src={btn_pre}
                alt="이전"
                className="align-middle w-[45px] h-[18px]"
              />
            </button>
          )}
          {Array.from(
            { length: blockEnd - blockStart + 1 },
            (_, i) => blockStart + i
          ).map((n) => (
            <React.Fragment key={n}>
              {n === page ? (
                <b className="text-black">{n}</b>
              ) : (
                <button onClick={() => goTo(n)} className="cursor-pointer">
                  <span className="text-black hover:underline">{n}</span>
                </button>
              )}
              &nbsp;&nbsp;
            </React.Fragment>
          ))}
          {blockEnd < totalPages && (
            <button
              onClick={() => goTo(blockEnd + 1)}
              className="cursor-pointer"
            >
              <img
                src={btn_next}
                alt="다음"
                className="align-middle ml-[5px] w-[45px] h-[18px]"
              />
            </button>
          )}
        </div>
        <div className="h-2.5" />
      </div>
      {/* 하단 장식 */}
      <div className="flex w-[555px]">
        <img src={te_item05} alt="" className="w-[14px] h-[14px]" />
        <div className="flex-1" />
        <img src={te_item06} alt="" className="w-[14px] h-[14px]" />
      </div>

      {/* 아이템 상세 모달 */}
      <ItemDetailModal item={selected} onClose={() => setSelected(null)} />
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
