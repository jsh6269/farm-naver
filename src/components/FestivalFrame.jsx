import imgSearchId from "../assets/festival/img_festival28_03.gif";
import btnSearch from "../assets/festival/btn_festival28_search.gif";

export function FestivalYellowBar({ children, className = "" }) {
  return (
    <div className={`w-[535px] bg-[#F8EB43] rounded-lg overflow-hidden ${className}`}>
      <div className="flex justify-center px-3">{children}</div>
    </div>
  );
}

export function FestivalWhiteGrid({ children }) {
  return (
    <div className="w-[535px] bg-[#FFE82B] rounded-b-xl rounded-r-xl overflow-hidden pt-0.5 pb-1 px-1">
      <div className="bg-white rounded-lg mx-auto w-[505px] flex justify-center pt-1 my-3">
        {children}
      </div>
    </div>
  );
}

export function FestivalSearchBox({ titleImg, onSearch, className = "" }) {
  const handleSearch = () => {
    const uid = document.getElementById("festival-search-uid")?.value?.trim();
    if (!uid) {
      alert("찾고자 하는 동물의 농장 주인 아이디를 넣으세요!");
      return;
    }
    onSearch?.(uid);
  };

  return (
    <div className={`w-[535px] bg-[#FFF799] rounded-lg flex flex-col items-center justify-center py-3 px-4 ${className}`}>
      {titleImg && <img src={titleImg} alt="" className="mb-3 shrink-0" />}
      <div className="flex items-center gap-1.5">
        <img src={imgSearchId} alt="" width={63} height={21} className="shrink-0" />
        <input
          id="festival-search-uid"
          type="text"
          className="text-[12px] w-[235px] h-[19px] border border-gray-400 px-1 font-gulim"
        />
        <button type="button" onClick={handleSearch} className="cursor-pointer shrink-0">
          <img src={btnSearch} alt="검색" width={55} height={22} />
        </button>
      </div>
    </div>
  );
}

export default function FestivalFrame({ children, footerBg = "bg-white" }) {
  return (
    <div
      className={`w-[555px] font-gulim text-[12px] rounded-lg overflow-hidden mb-5 ${footerBg}`}
    >
      <div className="flex flex-col items-center px-2.5 pt-2 pb-3">{children}</div>
    </div>
  );
}
