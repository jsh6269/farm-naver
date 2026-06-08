import Sidebar from "../components/Sidebar";

import bgTop from "../assets/bank/bg_main_bank01.gif";
import bgMid from "../assets/bank/bg_main_bank_animal_red.gif";
import bgBottom from "../assets/bank/bg_main_bank02.gif";
import btnCustody from "../assets/bank/btn_bank_custody.gif";
import btnMoney from "../assets/bank/btn_bank_money.gif";
import btnDeposit from "../assets/bank/btn_bank_deposit.gif";
import btnPayment from "../assets/bank/btn_bank_payment.gif";

const BASE = "https://jsh6269.github.io/farm.jr.naver.com/bank";

const BankScene = () => (
  <div className="w-[555px] font-gulim">
    {/* 상단 - 물품 보관소 / 마을정보 */}
    <div
      className="relative w-[555px] h-[197px] rounded-t-2xl overflow-hidden"
      style={{ backgroundImage: `url(${bgTop})` }}
    >
      <a
        href={`${BASE}/item_save.php.html`}
        className="absolute"
        style={{ left: 154, top: 163 }}
      >
        <img src={btnCustody} width={103} height={34} alt="물품 보관소" />
      </a>
      <a
        href={`${BASE}/room_info.php.html`}
        className="absolute"
        style={{ left: 416, top: 102 }}
      >
        <img src={btnMoney} width={85} height={35} alt="마을정보" />
      </a>
    </div>

    {/* 중단 - 안내 말풍선 */}
    <div
      className="relative w-[555px] h-[213px]"
      style={{ backgroundImage: `url(${bgMid})` }}
    >
      <div
        className="absolute text-center text-[12px] text-[#666666] leading-[18px]"
        style={{ left: 114, top: 118, width: 197 }}
      >
        우리마을이 부자가 된다면 정말
        <br />
        좋겠죠? 공공시설도 많이늘어나면
        <br />
        동물 키우기도 한결 편해지죠
      </div>
    </div>

    {/* 하단 - 예금 / 출금 */}
    <div
      className="relative w-[555px] h-[138px]"
      style={{ backgroundImage: `url(${bgBottom})` }}
    >
      <div
        className="absolute flex items-start"
        style={{ left: 211, top: 0 }}
      >
        <a href={`${BASE}/input_money.php.html`}>
          <img src={btnDeposit} width={88} height={34} alt="예금하기" />
        </a>
        <a href={`${BASE}/output_money.php.html`} className="mx-[15px]">
          <img src={btnPayment} width={88} height={34} alt="출금하기" />
        </a>
      </div>
    </div>
  </div>
);

const BankPage = () => (
  <div className="bg-[#ff9000] rounded-2xl flex">
    <div className="mt-1 font-gulim">
      <span className="text-[12px] text-start ml-5">
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 은행
        <Sidebar />
      </span>
    </div>
    <div className="bg-white rounded-2xl mt-[33px] mr-5 mb-6">
      <BankScene />
    </div>
  </div>
);

export default BankPage;
