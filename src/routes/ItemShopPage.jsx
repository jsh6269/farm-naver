import Sidebar from "../components/Sidebar";

import mainBg from "../assets/itemshop/main_bg.gif";
import btnItem01 from "../assets/itemshop/btn_item01.gif";
import btnItem02 from "../assets/itemshop/btn_item02.gif";
import btnItem03 from "../assets/itemshop/btn_item03.gif";
import txtItem05112201 from "../assets/itemshop/txt_item051122_01.gif";
import btnSearchNew from "../assets/itemshop/btn_search_new.gif";
import btnItemslideshow from "../assets/itemshop/btn_itemslideshow.gif";
import mainTit03New from "../assets/itemshop/main_tit03_new.gif";
import itemSkin from "../assets/itemshop/item_skin.gif";
import itemSkinTxt from "../assets/itemshop/item_skin_txt.gif";
import btnItemRe from "../assets/itemshop/btn_item_re.gif";
import mainTit04New from "../assets/itemshop/main_tit04_new.gif";
import { themeItems, newItems, popItems, saleItems } from "../data/itemshop";

function ItemShop() {
  return (
    <div className="w-[576px]">
      {/* 상단 메뉴 */}
      <div
        className="h-[219px] w-[576px] flex items-end"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="w-[55px]" />
        <a href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/list.php%253fkind%253dfood%2526kind_sub%253dfruit.html">
          <img src={btnItem01} alt="btn_item01" />
        </a>
        <a href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/list.php%253fkind%253ditem%2526kind_sub%253dfootwear.html">
          <img src={btnItem02} alt="btn_item02" />
        </a>
        <a href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/list.php%253fkind%253ddeco%2526kind_sub%253dfuniture.html">
          <img src={btnItem03} alt="btn_item03" />
        </a>
      </div>
      {/* 테마 아이템 */}
      <div className="bg-[#AEEC1C] w-[576px] rounded-b-xl">
        <div className="h-[20px]" />
        <div className="flex flex-row">
          <div className="w-[9px]" />
          <div className="w-[557px]">
            <input id="themeLi" name="themeLi" type="hidden" value="0" />
            <div className="bg-white mb-[15px] w-[557px] rounded-xl">
              <div className="px-3 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-lg">테마 아이템</h2>
                  <a
                    className="text-sm text-blue-600"
                    href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/theme_list.php.html"
                  >
                    더보기
                  </a>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                  {themeItems.map((item, idx) =>
                    item.show ? (
                      <a
                        key={idx}
                        href={item.link}
                        className="relative block w-[154px] h-[85px]"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          width={154}
                          height={85}
                        />
                        <span className="absolute inset-0 bg-black/10 pointer-events-none" />
                        <span className="absolute left-0 bottom-0 w-full text-center bg-white/80 text-black text-xs py-1">
                          {item.name}
                        </span>
                      </a>
                    ) : null
                  )}
                </div>
                <div className="flex justify-between mt-2">
                  <div className="btn tm_prev" id="btnThemePre">
                    <span className="sr-only">이전</span>
                  </div>
                  <div className="btn tm_next" id="btnThemeNext">
                    <a
                      className="on"
                      href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/javascript:naviTheme(1);"
                    >
                      <span className="sr-only">다음</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 검색/슬라이드 */}
            <div className="flex flex-row w-full">
              <div className="flex-1">
                <div className="bg-white rounded-lg">
                  <div className="p-2">
                    <form
                      action="search.php"
                      method="post"
                      name="searchFrm"
                      className="flex items-center"
                    >
                      <img src={txtItem05112201} alt="" className="w-[73px]" />
                      <input
                        id="size5"
                        name="kword"
                        type="text"
                        defaultValue="아이템명을 입력해주세요"
                        className="ml-2 w-[207px] pl-1 pt-1 border border-gray-300 rounded text-sm"
                      />
                      <a href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/javascript:search_chk();">
                        <img
                          src={btnSearchNew}
                          alt="검색하기"
                          className="ml-2 w-[57px]"
                        />
                      </a>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex-none ml-2">
                <a href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/slide_main.php.html">
                  <img
                    src={btnItemslideshow}
                    alt="아이템 슬라이드 쇼"
                    width={184}
                    height={42}
                  />
                </a>
              </div>
            </div>
            {/* 신규/인기 아이템 */}
            <div className="bg-white mt-[15px] rounded-2xl">
              <div className="p-2">
                <div className="flex items-center mb-2">
                  <ul className="flex gap-2">
                    <li className="new_item">
                      <a
                        className=""
                        href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/javascript:showItemLayer('new');"
                        id="liNewItem"
                      >
                        <span className="sr-only">신규 아이템</span>
                      </a>
                    </li>
                    <li className="fov_item">
                      <a
                        className="on"
                        href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/javascript:showItemLayer('pop');"
                        id="liPopItem"
                      >
                        <span className="sr-only">인기 아이템</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* 신규 아이템 */}
                <div
                  className="lst"
                  id="divNewItem"
                  style={{ display: "none" }}
                >
                  <h2 className="sr-only">신규 아이템</h2>
                  <a
                    className="btn lst_more"
                    href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/search.php%253fkword%253d%2526sort%253dregdate%2526ad%253dDESC.html"
                  >
                    신규 아이템 더보기
                  </a>
                  <ul className="flex flex-wrap gap-2">
                    {newItems.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.link} className="block">
                          <span className="img relative inline-block">
                            <img src={item.img} alt={item.name} />
                          </span>
                          <span className="txt_v flex items-center">
                            <span className="txt_m" />
                            <span className="txt flex items-center">
                              {item.name}
                              <img src={item.icon} className="ml-1" alt="" />
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* 인기 아이템 */}
                <div
                  className="lst"
                  id="divPopItem"
                  style={{ display: "block" }}
                >
                  <h2 className="sr-only">인기 아이템</h2>
                  <a
                    className="btn lst_more"
                    href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/search.php%253fkword%253d%2526sort%253drecent_cnt%2526ad%253dDESC.html"
                  >
                    인기 아이템 더보기
                  </a>
                  <ul className="flex flex-wrap gap-2">
                    {popItems.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.link} className="block">
                          <span className="img relative inline-block">
                            <img src={item.img} alt={item.name} />
                          </span>
                          <span className="txt_v flex items-center">
                            <span className="txt_m" />
                            <span className="txt flex items-center">
                              {item.name}
                              <img src={item.icon} className="ml-1" alt="" />
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* 하단 2단 블록 */}
            <div className="flex flex-row w-full mt-4">
              {/* 기부 */}
              <div className="w-[272px]">
                <div className="bg-white h-[173px] rounded-xl mb-3">
                  <div className="flex flex-col items-center">
                    <img
                      src={mainTit03New}
                      className="mt-2.5"
                      alt=""
                      width={255}
                      height={23}
                    />
                    <div className="h-[4px]" />
                    <div className="flex flex-row items-center">
                      <img src={itemSkin} width={86} height={89} alt="" />
                      <div className="ml-2">
                        <img src={itemSkinTxt} alt="" />
                        <div className="my-2 text-[#737373] text-sm">
                          오늘 기부된 아이템 :{" "}
                          <span className="text-[#D12C4C] font-bold">1946</span>
                          개
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center mt-2">
                      <a href="https://jsh6269.github.io/farm.jr.naver.com/itemshop/http://farm.jr.naver.com/donation/">
                        <img src={btnItemRe} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[13px]" />
              {/* 세일 */}
              <div className="w-[272px]">
                <div className="bg-white h-[173px] rounded-xl">
                  <div className="flex flex-col items-center">
                    <img
                      src={mainTit04New}
                      className="mt-2.5"
                      alt=""
                      width={252}
                      height={23}
                    />
                    <div className="h-[4px]" />
                    {saleItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-row items-center mb-2"
                      >
                        <a href={item.link}>
                          <img src={item.img} width={60} height={60} alt="" />
                        </a>
                        <div className="ml-2 text-sm">
                          {item.name}
                          <br />
                          <span className="text-[#737373]">{item.price}</span>
                          <br />
                          <span className="text-[#943F00]">
                            종료시간 : {item.end}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemShopPage = () => {
  return (
    <div className="bg-[#fff466] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 아이템 샵
          <Sidebar />
        </span>
      </div>
      <div className="w-[570px] bg-white rounded-2xl mt-[33px] mr-6.5 mb-5">
        <ItemShop />
      </div>
    </div>
  );
};
export default ItemShopPage;
