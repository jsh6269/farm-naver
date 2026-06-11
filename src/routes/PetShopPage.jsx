import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import petshopTitle from "../assets/petshop/sub_tit26.gif";
import petshopHeader from "../assets/petshop/img_protect07.gif";
import subHeader from "../assets/petshop/petshop_060727_img.gif";
import btn from "../assets/petshop/btn_060724_view.gif";
import btn1 from "../assets/petshop/petshop_060727_btn01.gif";
import btn2 from "../assets/petshop/petshop_060727_btn02.gif";
import banner1 from "../assets/petshop/img_new01.gif";
import banner2 from "../assets/petshop/img_new02.gif";
import banner3 from "../assets/petshop/beautyshop0203_btn.gif";

// 팝업 이미지(새로운 동물 성장법 / 마법카드 설명)
const popImgs = import.meta.glob("../assets/petshop/pop/*.gif", {
  eager: true,
  import: "default",
});
const pp = (f) => popImgs[`../assets/petshop/pop/${f}`];

const MAGIC_CARDS_1 = ["c_rlflsps.gif", "c_frogs.gif", "c_dicerorhininaes.gif", "c_cats.gif"];
const MAGIC_CARDS_2 = ["c_firewalls.gif", "c_meteors.gif", "c_icehails.gif"];

function GrowthPopupBody() {
  return (
    <div className="w-[411px] mx-auto text-left">
      <img src={pp("txt_pop_magiccard14.gif")} alt="새로운 동물 성장법" />
      <div className="h-[13px]" />
      <img src={pp("txt_pop_magiccard15.gif")} alt="안내" />
      <div className="h-2" />
      <img src={pp("pop_magiccard_img04.gif")} alt="성장 안내" width="393" height="131" />
      <div className="h-5" />
      <img src={pp("txt_pop_magiccard16.gif")} alt="안내" />
      <div className="h-2" />
      <div className="flex justify-between">
        <img src={pp("pop13_1.gif")} alt="" width="195" height="130" />
        <img src={pp("pop13_2.gif")} alt="" width="195" height="130" />
      </div>
      <div className="h-5" />
      <div className="flex justify-between items-start">
        <img src={pp("txt_pop_magiccard17.gif")} alt="안내" width="215" height="119" />
        <img src={pp("pop13_3.gif")} alt="" width="175" height="120" />
      </div>
    </div>
  );
}

function MagicPopupBody() {
  return (
    <div className="w-[411px] mx-auto text-left">
      <img src={pp("txt_pop_magiccard18.gif")} alt="마법카드 설명" />
      <div className="h-[13px]" />
      <img src={pp("txt_pop_magiccard19.gif")} alt="안내" />
      <div className="h-3" />
      <div className="flex justify-center gap-4">
        {MAGIC_CARDS_1.map((c) => (
          <img key={c} src={pp(c)} alt="마법카드" width="90" height="133" />
        ))}
      </div>
      <div className="h-3" />
      <img src={pp("txt_pop_magiccard20_1.gif")} alt="안내" />
      <div className="h-3" />
      <div className="flex justify-center gap-4">
        {MAGIC_CARDS_2.map((c) => (
          <img key={c} src={pp(c)} alt="마법카드" width="90" height="133" />
        ))}
      </div>
    </div>
  );
}

function PetPopup({ kind, onClose }) {
  if (!kind) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 py-8"
      onClick={onClose}
    >
      <div
        className="w-[470px] font-gulim"
        style={{ backgroundImage: `url(${pp("bg_magiccard_pop.gif")})` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[50px] flex items-center">
          <img src={pp("pop_logo.gif")} alt="쥬니어네이버" className="ml-[26px]" width="125" height="31" />
        </div>
        <div className="bg-white w-[450px] mx-auto rounded-[10px] px-[19px] pt-4 pb-5">
          {kind === "growth" ? <GrowthPopupBody /> : <MagicPopupBody />}
          <div className="pt-5 flex justify-center">
            <button onClick={onClose} className="cursor-pointer">
              <img src={pp("bg_magiccard_close.gif")} alt="닫기" width="58" height="37" />
            </button>
          </div>
        </div>
        <div className="h-3" />
      </div>
    </div>
  );
}

const PetShopPage = () => {
  const [popup, setPopup] = useState(null);

  return (
    <div className="bg-[#ccb4fd] rounded-2xl flex">
      <div className="mt-1 font-gulim">
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 동물가게
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[842px] bg-white rounded-2xl mt-[33px] mr-5 mb-[30px]">
        <div className="relative">
          <img
            src={petshopTitle}
            alt="동물가게 타이틀"
            className="mt-5 ml-5 mb-2"
          />
          <img
            src={petshopHeader}
            alt="동물가게 헤더"
            className="mx-auto w-[530px]"
          />
          <Link to="/petshop/story">
            <img
              src={btn}
              alt="크라라의 마법소동 보기"
              className="absolute left-[348px] top-[207.5px]"
            />
          </Link>
        </div>
        <div className="bg-gradient-to-b from-[#ffc0d4] to-[#f6f1ff] mx-2.5 h-[555px] rounded-b-xl">
          <div className="relative bg-white mx-[13px] rounded-[5.5px] h-[540px] mt-[-8px] pt-4 z-10 font-gulim text-[12px]">
            <div className="mx-auto w-[488px] h-[175px] rounded-md border-2 border-[#ebe1ff] bg-[#f9f6ff]">
              <img
                src={subHeader}
                alt="동물 친구들에게 새로운 능력이 생겼어요!!"
                className="mx-auto mt-1.5"
              />
              <div className="flex justify-center gap-2">
                <button onClick={() => setPopup("growth")} className="cursor-pointer">
                  <img src={btn1} alt="새로운 동물 성장법" />
                </button>
                <button onClick={() => setPopup("magic")} className="cursor-pointer">
                  <img src={btn2} alt="마법카드 설명보기" />
                </button>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-x-[42px] pl-1.5 gap-y-4 pt-4">
              <Link to="/petshop/shop">
                <img
                  src={banner1}
                  alt="새로운 동물"
                  className="w-[195px] cursor-pointer"
                />
              </Link>
              <Link to="/petshop/adopt">
                <img
                  src={banner2}
                  alt="동물 입양"
                  className="w-[195px] cursor-pointer"
                />
              </Link>
              <Link to="/beautyshop">
                <img
                  src={banner3}
                  alt="동물 미용실"
                  className="w-[195px] cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PetPopup kind={popup} onClose={() => setPopup(null)} />
    </div>
  );
};
export default PetShopPage;
