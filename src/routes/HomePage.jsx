import mu1_off from "../assets/home/mu1004_01_off.gif";
import mu2_off from "../assets/home/mu1004_02_off.gif";
import comicbook_up_off from "../assets/home/comicbook_up_off.gif";
import mu4_off from "../assets/home/mu1004_04_off.gif";
import mu5_off from "../assets/home/mu1004_05_off.gif";
import mu6_off from "../assets/home/mu1004_06_off.gif";
import mu8_off from "../assets/home/mu1004_08_off.gif";
import mu10_off from "../assets/home/mu1004_10_off.gif";
import mu12_off from "../assets/home/mu1004_12_off.gif";
import mu15_off from "../assets/home/mu1004_15_off.gif";
import mu7_off from "../assets/home/mu1004_07_off.gif";
import mu14_off from "../assets/home/mu1004_14_off.gif";
import mu9_off from "../assets/home/mu1004_09_off.gif";
import department_default_off from "../assets/home/department_default_off.gif";
import mu13_off from "../assets/home/mu1004_13_off.gif";
import mu16_off from "../assets/home/mu1004_16_off.gif";

import mu1_on from "../assets/home/mu1004_01_on.gif";
import mu2_on from "../assets/home/mu1004_02_on.gif";
import comicbook_up_on from "../assets/home/comicbook_up_on.gif";
import mu4_on from "../assets/home/mu1004_04_on.gif";
import mu5_on from "../assets/home/mu1004_05_on.gif";
import mu6_on from "../assets/home/mu1004_06_on.gif";
import mu8_on from "../assets/home/mu1004_08_on.gif";
import mu10_on from "../assets/home/mu1004_10_on.gif";
import mu12_on from "../assets/home/mu1004_12_on.gif";
import mu15_on from "../assets/home/mu1004_15_on.gif";
import mu7_on from "../assets/home/mu1004_07_on.gif";
import mu14_on from "../assets/home/mu1004_14_on.gif";
import mu9_on from "../assets/home/mu1004_09_on.gif";
import department_default_on from "../assets/home/department_default_on.gif";
import mu13_on from "../assets/home/mu1004_13_on.gif";
import mu16_on from "../assets/home/mu1004_16_on.gif";

const imageModules1 = [
  mu1_off,
  mu2_off,
  comicbook_up_off,
  mu4_off,
  mu5_off,
  mu6_off,
  mu8_off,
  mu10_off,
  mu12_off,
  mu14_off,
];

const imageModules2 = [
  mu1_on,
  mu2_on,
  comicbook_up_on,
  mu4_on,
  mu5_on,
  mu6_on,
  mu8_on,
  mu10_on,
  mu12_on,
  mu14_on,
];

const HomePage = () => {
  return (
    <>
      <div className="w-[751px] rounded-[23px] flex flex-wrap items-start relative">
        {imageModules1.map((src, idx) => (
          <div key={idx} className="relative group">
            <img src={src} alt={`mu${idx + 1}_off`} className="object-cover" />
            <img
              src={imageModules2[idx]}
              alt={`mu${idx + 1}_on`}
              className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <div className="relative group bottom-[92px] right-[309px]">
        <img src={mu7_off} alt="mu7_off" className="object-cover" />
        <img
          src={mu7_on}
          alt="mu7_on"
          className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="relative group bottom-[222px] right-[167px]">
        <img src={mu9_off} alt="mu9_off" className="object-cover" />
        <img
          src={mu9_on}
          alt="mu9_on"
          className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="relative group bottom-[363px] right-[7.5px]">
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
      <div className="relative group bottom-[504px] right-[-149.5px]">
        <img src={mu13_off} alt="mu13_off" className="object-cover" />
        <img
          src={mu13_on}
          alt="mu13_on"
          className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="relative group bottom-[729px] right-[-298.5px]">
        <img src={mu15_off} alt="mu15_off" className="object-cover" />
        <img
          src={mu15_on}
          alt="mu15_on"
          className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="relative group bottom-[729px] right-[-298.5px]">
        <img src={mu16_off} alt="mu16_off" className="object-cover" />
        <img
          src={mu16_on}
          alt="mu16_on"
          className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
    </>
  );
};

export default HomePage;
