import { Link } from "react-router-dom";
import {
  mu1_off,
  mu2_off,
  comicbook_up_off,
  mu4_off,
  mu5_off,
  mu6_off,
  mu10_off,
  mu8_off,
  mu12_off,
  mu15_off,
  mu7_off,
  mu14_off,
  mu9_off,
  department_default_off,
  mu13_off,
  mu16_off,
  mu1_on,
  mu2_on,
  comicbook_up_on,
  mu4_on,
  mu5_on,
  mu6_on,
  mu8_on,
  mu10_on,
  mu12_on,
  mu15_on,
  mu7_on,
  mu14_on,
  mu9_on,
  department_default_on,
  mu13_on,
  mu16_on,
} from "../assets/home/town";

import tab1 from "../assets/home/tab/tab_farm_main050512_01.gif";
import tab1_2 from "../assets/home/tab/tab_farm_main050512_more.gif";
import tab2 from "../assets/home/tab/tab_farm_main050512_02.gif";
import tab3 from "../assets/home/tab/tab_farm_main050512_03.gif";
import newtab from "../assets/home/tab/bu_farm050512_new01.gif";
import BannerRecom from "../components/BannerRecom";
import BannerRank from "../components/BannerRank";

const imagePairs = [
  { off: mu1_off, on: mu1_on, href: "/myroom" },
  { off: mu2_off, on: mu2_on, href: "/crystal" },
  { off: comicbook_up_off, on: comicbook_up_on, href: "/comic" },
  { off: mu4_off, on: mu4_on, href: "/school" },
  { off: mu5_off, on: mu5_on, href: "/hospital" },
  { off: mu6_off, on: mu6_on, href: "/minifarm" },
  { off: mu8_off, on: mu8_on, href: "/petshop" },
  { off: mu10_off, on: mu10_on, href: "/pointshop" },
  { off: mu12_off, on: mu12_on, href: "/mix_dog" },
  { off: mu14_off, on: mu14_on, href: "/foodshop" },
];

const absIcons = [
  {
    off: mu7_off,
    on: mu7_on,
    href: "/itemshop",
    className: "absolute group top-[-92px] left-0",
  },
  {
    off: mu9_off,
    on: mu9_on,
    href: "/sale",
    className: "absolute group top-0 left-[132px]",
  },
  {
    off: department_default_off,
    on: department_default_on,
    href: "/department",
    className: "absolute group top-[-11px] left-[284px]",
  },
  {
    off: mu13_off,
    on: mu13_on,
    href: "/room",
    className: "absolute group top-[-11px] left-[452px]",
  },
  {
    off: mu15_off,
    on: mu15_on,
    href: "/festival",
    className: "absolute group top-[-95px] left-[598px]",
  },
  {
    off: mu16_off,
    on: mu16_on,
    href: "/explore",
    className: "absolute group top-[26px] left-[598px]",
  },
];

const HomePage = () => {
  return (
    <>
      {/* 상단 메뉴 아이콘 */}
      <div className="w-[751px] flex flex-wrap items-start relative">
        {imagePairs.map((img, idx) => (
          <div key={idx} className="relative group">
            <Link to={img.href}>
              <img
                src={img.off}
                alt={`menu${idx + 1}_off`}
                className="object-cover"
                draggable={false}
              />
              <img
                src={img.on}
                alt={`menu${idx + 1}_on`}
                className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
                draggable={false}
              />
            </Link>
          </div>
        ))}
      </div>
      {/* 절대 위치 아이콘 */}
      <div className="relative w-[751px] h-[130px]">
        {absIcons.map((icon, idx) => (
          <div key={idx} className={icon.className}>
            <Link to={icon.href}>
              <img
                src={icon.off}
                alt={`${icon.href}_off`}
                className="object-cover"
                draggable={false}
              />
              <img
                src={icon.on}
                alt={`${icon.href}_on`}
                className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
                draggable={false}
              />
            </Link>
          </div>
        ))}
      </div>
      {/* 하단 탭/배너 */}
      <div className="w-[751px] h-[120px] bg-[#87E10E] mt-[10px] rounded-xl flex justify-center items-center gap-4">
        {/* 첫 번째 탭 */}
        <div className="w-[260px] h-[90px] bg-[#DAFF39] rounded-xl flex flex-col">
          <div className="mt-[-6px] flex">
            <img src={tab1} alt="동물농장 새로운 소식" />
            <img src={tab1_2} alt="more" />
          </div>
          <ol className="font-gulim text-[#004674] font-light ml-2 text-[11.3px]">
            <li className="flex items-center">
              • 새 동물이 추가되었어요!
              <img src={newtab} alt="new" className="ml-1" />
            </li>
            <li className="flex items-center">
              • 동물농장 경찰 수사대!★
              <img src={newtab} alt="new" className="ml-1" />
            </li>
            <li className="flex items-center">
              • 향기로운 커피 박물관 ♥
              <img src={newtab} alt="new" className="ml-1.5" />
            </li>
          </ol>
        </div>
        {/* 두 번째 탭 */}
        <div className="w-[244px] h-[90px] bg-[#DAFF39] rounded-xl flex flex-col">
          <img src={tab2} alt="오늘의 추천" className="mt-[-6px]" />
          <BannerRecom />
        </div>
        {/* 세 번째 탭 */}
        <div className="relative w-[185px] h-[90px] bg-[#DAFF39] rounded-xl flex flex-col">
          <img src={tab3} alt="동물농장 랭킹" className="mt-[-6px]" />
          <BannerRank />
        </div>
      </div>
    </>
  );
};

export default HomePage;
