import { useState } from "react";
import PageShell from "../components/PageShell";

import header from "../assets/travel/main_top041229_travel.gif";
import bar from "../assets/travel/bar_041229travel05.gif";
import btnMore from "../assets/travel/btn_travel_more.gif";
import paperBg from "../assets/travel/bg_041229travel_sub01.gif";
import btnTal from "../assets/travel/btn_travel_tal.gif";
import deskBg from "../assets/travel/bg_041229travel_sub011.gif";
import btnMyAnimal from "../assets/travel/btn_travel_myanimal.gif";

import sum09Title from "../assets/travel/travel_sum09_title.gif";
import sum09Off from "../assets/travel/travel_sum09off.gif";
import sum09On from "../assets/travel/travel_sum09on.gif";
import sum08Title from "../assets/travel/travel_sum08_title.gif";
import sum08Off from "../assets/travel/travel_sum08off.gif";
import sum08On from "../assets/travel/travel_sum08on.gif";
import sum07Title from "../assets/travel/travel_sum07_title.gif";
import sum07Off from "../assets/travel/travel_sum07off.gif";
import sum07On from "../assets/travel/travel_sum07on.gif";

const BASE = "https://jsh6269.github.io/farm.jr.naver.com/travel";

const DESTINATIONS = [
  {
    title: sum09Title,
    off: sum09Off,
    on: sum09On,
    point: "800point",
    link: `${BASE}/view.php%253fnid%253d10.html`,
    alt: "해적 크루즈",
  },
  {
    title: sum08Title,
    off: sum08Off,
    on: sum08On,
    point: "800point",
    link: `${BASE}/view.php%253fnid%253d9.html`,
    alt: "여행 상품 8",
  },
  {
    title: sum07Title,
    off: sum07Off,
    on: sum07On,
    point: "700point",
    link: `${BASE}/view.php%253fnid%253d8.html`,
    alt: "여행 상품 7",
  },
];

function Destination({ title, off, on, point, link, alt }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-[154px] h-[195px] flex flex-col items-center justify-start pt-[6px]"
      style={{ backgroundImage: `url(${paperBg})`, backgroundRepeat: "no-repeat" }}
    >
      <div className="h-[31px] flex items-end">
        <img src={title} alt={alt} />
      </div>
      <a
        href={link}
        className="h-[100px] flex items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={hover ? on : off} width={99} height={100} alt={alt} />
      </a>
      <div className="h-[21px] flex items-center">
        <b className="text-[11px] text-[#694A00]">{point}</b>
      </div>
      <a href={link} className="mt-1">
        <img src={btnTal} width={127} height={27} alt="여행 설명 보기" />
      </a>
    </div>
  );
}

const TravelPage = () => (
  <PageShell
    bgClassName="bg-[#FFE84F]"
    contentClassName="w-[555px] bg-white rounded-2xl mt-[33px] mr-5 mb-6"
    breadcrumb={
      <>
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 여행사
      </>
    }
  >
      <img src={header} width={555} alt="여행사 헤더" className="rounded-t-2xl" />
      <div className="bg-[#FFFBB4] mx-2.5 rounded-b-xl pb-3">
        <div className="bg-white mx-auto rounded-b-[5.5px] w-[498px] pt-3 pb-5 font-gulim">
          {/* 안내 바 / 더보기 */}
          <div
            className="relative h-[61px] w-[472px] mx-auto flex items-end justify-end"
            style={{ backgroundImage: `url(${bar})`, backgroundRepeat: "no-repeat" }}
          >
            <a href={`${BASE}/travel_list.php.html`} className="mr-[26px] mb-1.5">
              <img src={btnMore} width={73} height={28} alt="더 보기" />
            </a>
          </div>

          {/* 여행지 목록 */}
          <div className="flex justify-center gap-[10px] mt-4">
            {DESTINATIONS.map((d) => (
              <Destination key={d.alt} {...d} />
            ))}
          </div>

          {/* 대기실 - 내 동물 찾기 */}
          <div
            className="relative w-[493px] h-[281px] mx-auto mt-6 flex items-end justify-center"
            style={{ backgroundImage: `url(${deskBg})`, backgroundRepeat: "no-repeat" }}
          >
            <a href={`${BASE}/take_out.php.html`} className="mb-[7px]">
              <img src={btnMyAnimal} width={111} height={28} alt="내 동물 찾기" />
            </a>
          </div>
        </div>
      </div>
  </PageShell>
);

export default TravelPage;
