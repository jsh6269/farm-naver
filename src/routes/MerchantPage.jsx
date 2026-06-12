import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import mainBg from "../assets/merchant/merchant_050106_main.gif";
import blankGif from "../assets/merchant/blank.gif";
import subImg from "../assets/merchant/merchant_050106_sub00.gif";
import txtBg from "../assets/merchant/merchant_050106_sub00_txtbg.gif";
import btnKnock from "../assets/merchant/btn_merchant_050106_knock.gif";

const MerchantComponent = () => {
  return (
    <div className="flex flex-col items-center w-[555px]">
      {/* 메인 섹션 */}
      <div
        className="w-[555px] h-[390px] flex"
        style={{
          backgroundImage: `url(${mainBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[157px]" />
        <div className="flex flex-col">
          <img src={blankGif} alt="blank" className="w-px h-[74px]" />
          <img src={subImg} alt="상인 이미지" className="w-[214px] h-[287px]" />
        </div>
        <div className="w-[186px]" />
      </div>

      {/* 버튼 섹션 */}
      <div className="w-full">
        <div
          className="h-[185px] flex justify-center items-end"
          style={{
            backgroundImage: `url(${txtBg})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link to="/merchant/select">
            <img
              src={btnKnock}
              alt="노크 버튼"
              className="w-[156px] h-[32px] mr-[18px]"
            />
          </Link>
        </div>
        {/* 하단 디자인 */}
        <div className="h-[70px] bg-[#FEF67A] rounded-b-xl" />
      </div>
    </div>
  );
};

const MerchantPage = () => {
  return (
    <PageShell
      bgClassName="bg-[#ffec4f]"
      contentClassName="w-[550px] mt-[33px] mr-5"
      breadcrumb={
        <>
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 중고상인
        </>
      }
    >
      <MerchantComponent />
    </PageShell>
  );
};

export default MerchantPage;
