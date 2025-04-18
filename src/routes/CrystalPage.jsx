import Sidebar from "../components/Sidebar";
import crystalTitle from "../assets/crystal/sub_tit35.gif";
import crystalHeader from "../assets/crystal/img_cry01.gif";
import txt_today from "../assets/crystal/txt_today.gif";
import img260 from "../assets/crystal/260.gif";
import img261 from "../assets/crystal/261.gif";
import img262 from "../assets/crystal/262.gif";
import btn_prev from "../assets/crystal/btn_prev_on.gif";
import btn_next from "../assets/crystal/btn_next_on.gif";
import h_comment from "../assets/crystal/h_comment.gif";

const CrystalPage = () => {
  return (
    <div className="bg-[#ead4fe] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 라즈벨의 수정구슬
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] bg-white rounded-2xl mt-[33px] mr-5 mb-5">
        <img src={crystalTitle} className="mt-[22px] ml-[20px] w-[146px]" />
        <img src={crystalHeader} className="ml-[10px] w-[530px] mt-2" />
        <div className="relative bg-gradient-to-b from-[#97a4ec] to-[#fbf6ff] mx-[10px] rounded-b-xl mb-5">
          <div className="pb-[0.1px]">
            <div className="absolute bg-[#fefe98] rounded-xl w-[495px] h-[71px] ml-[17.3px] mt-0.5 flex items-center justify-center gap-13.5">
              <div className="flex-none">
                <img src={txt_today} />
              </div>
              <div className="flex-none">
                <p className="text-[12px] mr-8">
                  겨울 나라에서 찬 바람이 쌩쌩 불어와요~
                  <br /> 감기 조심하세요~!
                </p>
              </div>
            </div>
            <div
              className="bg-white mx-[10px] rounded-b-[5.5px] pt-3 px-5 mb-5"
              style={{ fontFamily: "굴림", fontSize: "12px" }}
            >
              <div className="mt-[80px] text-[12px] items-center">
                봄이 왔는데도 추위가 계속되자 아픈 동물들이 많다고 해요~ 이
                소식을 들은 동물농장에서 마음도 예쁘고 얼굴도 예쁘기로 소문난
                간호사 릴리가 약국을 열었다고 해요. 건강한 동물농장을 만들기
                위해 노력하는 릴리의 착한 마음이 전해지지 않나요? 릴리의 약국에
                어떤 아이템이 있는지 어서 구경하러 가보자고요!
                <img src={img262} />
              </div>
              <div className="relative mt-6 mb-21">
                <img src={btn_prev} className="absolute left-3" />
                <img src={btn_next} className="absolute right-3" />
              </div>
              <img src={h_comment} className="mb-2 ml-0.5" />
              <form>
                <textarea
                  id="comment"
                  name="comment"
                  rows="6"
                  cols="50"
                  placeholder="네티켓을 지켜주세요! 비방, 욕설, 도배글 등은 서비스 이용 제한사유가 될 수 있습니다."
                  className="w-full p-1 leading-snug border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-600"
                ></textarea>
                <button
                  type="submit"
                  class="mt-2 mb-6 px-4.5 py-1.5 bg-gray-400 text-white font-medium hover:bg-gray-500"
                >
                  글 남기기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CrystalPage;
