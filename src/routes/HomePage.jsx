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

const imagePairs = [
  { off: mu1_off, on: mu1_on },
  { off: mu2_off, on: mu2_on },
  { off: comicbook_up_off, on: comicbook_up_on },
  { off: mu4_off, on: mu4_on },
  { off: mu5_off, on: mu5_on },
  { off: mu6_off, on: mu6_on },
  { off: mu8_off, on: mu8_on },
  { off: mu10_off, on: mu10_on },
  { off: mu12_off, on: mu12_on },
  { off: mu14_off, on: mu14_on },
];

const HomePage = () => {
  return (
    <>
      <div className="w-[751px] flex flex-wrap items-start relative">
        {imagePairs.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img.off}
              alt={`mu${idx + 1}_off`}
              className="object-cover"
            />
            <img
              src={img.on}
              alt={`mu${idx + 1}_on`}
              className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
      <div className="relative w-[751px] h-[130px]">
        <div className="absolute group top-[-92px]">
          <img src={mu7_off} alt="mu7_off" className="object-cover" />
          <img
            src={mu7_on}
            alt="mu7_on"
            className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute group top-[0px] left-[132px]">
          <img src={mu9_off} alt="mu9_off" className="object-cover" />
          <img
            src={mu9_on}
            alt="mu9_on"
            className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute group top-[-11px] left-[284px]">
          <img
            src={department_default_off}
            alt="department_default_off"
            className="object-cover"
          />
          <img
            src={department_default_on}
            alt="department_default_on"
            className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute group top-[-11px] left-[452px]">
          <img src={mu13_off} alt="mu13_off" className="object-cover" />
          <img
            src={mu13_on}
            alt="mu13_on"
            className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute group top-[-95px] left-[598px]">
          <img src={mu15_off} alt="mu15_off" className="object-cover" />
          <img
            src={mu15_on}
            alt="mu15_on"
            className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute group top-[26px] left-[598px]">
          <img src={mu16_off} alt="mu16_off" className="object-cover" />
          <img
            src={mu16_on}
            alt="mu16_on"
            className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="w-[751px] h-[120px] bg-[#87E10E] mt-[10px] rounded-xl flex justify-center items-center gap-[16px]">
        <div className="w-[260px] h-[90px] bg-[#DAFF39] rounded-xl">
          <div className="mt-[-6px] flex">
            <img src={tab1} />
            <img src={tab1_2} />
          </div>
          <ol
            style={{ fontFamily: "굴림", fontSize: "11.3px" }}
            className="text-[#004674] font-light ml-2"
          >
            <li className="flex">
              • 새 동물이 추가되었어요!
              <img src={newtab} alt="new" className="self-center ml-1" />
            </li>
            <li className="flex">
              • 동물농장 경찰 수사대!★
              <img src={newtab} alt="new" className="self-center ml-1" />
            </li>
            <li className="flex">
              • 향기로운 커피 박물관 ♥
              <img src={newtab} alt="new" className="self-center ml-1.5" />
            </li>
          </ol>
        </div>
        <div className="w-[244px] h-[90px] bg-[#DAFF39] rounded-xl">
          <img src={tab2} className="mt-[-6px]" />
        </div>
        <div className="w-[185px] h-[90px] bg-[#DAFF39] rounded-xl">
          <img src={tab3} className="mt-[-6px]" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
