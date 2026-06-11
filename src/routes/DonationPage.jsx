import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

import header from "../assets/donation/sub11_img01.gif";
import emptyMsg from "../assets/donation/img_new22_02.gif";
import btnStore from "../assets/donation/btn_fisr_store_item.gif";

const DonationPage = () => (
  <PageShell
    bgClassName="bg-[#FE9ABA]"
    contentClassName="w-[555px] bg-white rounded-2xl mt-[33px] mr-5 mb-6 pt-3.5 flex flex-col items-center"
    breadcrumb={
      <>
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 기부하기
      </>
    }
  >
    <img
      src={header}
      alt="기부하기 안내"
      className="max-w-[535px] w-full px-2.5"
    />
    <div className="w-[535px] mt-2">
      <div className="border border-[#FBD7E3] bg-[#FFF6FA] h-[150px] flex items-center justify-center rounded">
        <img src={emptyMsg} alt="아직 기부된 아이템이 없어요" />
      </div>
    </div>
    <div className="mt-4 mb-5">
      <Link to="/itemshop">
        <img
          src={btnStore}
          width={212}
          height={68}
          alt="아이템가게 처음으로"
        />
      </Link>
    </div>
  </PageShell>
);

export default DonationPage;
