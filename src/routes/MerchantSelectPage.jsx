import PageShell from "../components/PageShell";
import { FarmCrumb, CrumbSep, CrumbLink } from "../components/FarmCrumb";

import mainBg from "../assets/merchant/merchant_050106_main.gif";
import blankGif from "../assets/merchant/blank.gif";
import subImg from "../assets/merchant/merchant_050106_sub01.gif";
import btnItem from "../assets/merchant/merchant/btn_merchant_050106_item.gif";
import teBL from "../assets/merchant/merchant/te_050106m_merchant01.gif";
import teBR from "../assets/merchant/merchant/te_050106m_merchant02.gif";
import teFooterL from "../assets/merchant/te_050106big_merchant03.gif";
import teFooterR from "../assets/merchant/te_050106big_merchant04.gif";

const MerchantSelectPage = () => (
  <PageShell
    bgClassName="bg-[#ffec4f]"
    contentClassName="w-[550px] mt-[33px] mr-5"
    breadcrumb={
      <>
        <FarmCrumb />
        <CrumbSep />
        <CrumbLink to="/merchant">중고상인</CrumbLink>
        <CrumbSep />
        아이템 선택
      </>
    }
  >
    <div className="w-[555px] font-gulim">
      <div
        className="w-[555px] h-[390px] flex"
        style={{ backgroundImage: `url(${mainBg})`, backgroundRepeat: "no-repeat" }}
      >
        <div className="w-[157px]" />
        <div className="flex flex-col">
          <img src={blankGif} alt="" className="w-px h-[74px]" />
          <img src={subImg} alt="상인" className="w-[214px] h-[287px]" />
        </div>
        <div className="w-[186px]" />
      </div>

      <div className="bg-[#FEF67A] text-center py-4 px-4">
        <p className="text-[#2E2B00] text-[13px] font-bold leading-[22px] mb-5">
          &quot;마침 심심한데 잘됐군.. 뭐 새로운 것 좀 있나?
          <br />
          요즘 애들은 남들 하면 다 똑같은 것만 따라 해서
          <br />
          다양한 아이템이 없다니까 자 아이템 좀 볼까?&quot;
        </p>
        <button type="button" onClick={() => alert("로그인 후 아이템을 선택할 수 있습니다.")} className="cursor-pointer">
          <img src={btnItem} alt="아이템 선택" width={136} height={32} />
        </button>
      </div>

      <div className="flex">
        <img src={teBL} alt="" width={15} height={15} />
        <div className="flex-1 bg-[#FEF67A]" />
        <img src={teBR} alt="" width={15} height={15} />
      </div>

      <div className="flex">
        <img src={teFooterL} alt="" width={20} height={20} />
        <div className="flex-1 bg-[#FFEC4F]" />
        <img src={teFooterR} alt="" width={20} height={20} />
      </div>
    </div>
  </PageShell>
);

export default MerchantSelectPage;
