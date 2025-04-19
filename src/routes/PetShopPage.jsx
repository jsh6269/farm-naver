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
import { Link } from "react-router-dom";

const PetShopPage = () => {
  return (
    <div className="bg-[#ccb4fd] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 동물가게
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[842px] bg-white rounded-2xl mt-[33px] mr-5 mb-7.5">
        <div className="relative">
          <img src={petshopTitle} className="mt-6 ml-5 mb-2" />
          <img src={petshopHeader} className="mx-auto w-[530px]" />
          <Link to="/petshop/story">
            <img src={btn} className="absolute left-[348px] top-[211.5px]" />
          </Link>
        </div>
        <div className="bg-gradient-to-b from-[#ffc0d4] to-[#f6f1ff] mx-[10px] h-[555px] rounded-b-xl">
          <div
            className="relative bg-white mx-[13px] rounded-[5.5px] h-[540px] mt-[-8px] pt-4 z-10"
            style={{ fontFamily: "굴림", fontSize: "12px" }}
          >
            <div className="mx-auto w-[488px] h-[175px] rounded-md border-2 border-[#ebe1ff] bg-[#f9f6ff]">
              <img src={subHeader} className="mx-auto mt-1.5" />
              <div className="flex justify-center gap-2">
                <img src={btn1} />
                <img src={btn2} />
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-x-10.5 pl-1.5 gap-y-4 pt-4">
              <img src={banner1} className="w-[195px]" />
              <img src={banner2} className="w-[195px]" />
              <img src={banner3} className="w-[195px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PetShopPage;
