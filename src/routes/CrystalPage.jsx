import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import crystalTitle from "../assets/crystal/sub_tit35.gif";
import crystalHeader from "../assets/crystal/img_cry01.gif";
import txt_today from "../assets/crystal/txt_today.gif";
import img262 from "../assets/crystal/262.gif";
import img261 from "../assets/crystal/261.gif";
import img260 from "../assets/crystal/260.gif";
import btn_prev from "../assets/crystal/btn_prev_on.gif";
import btn_next from "../assets/crystal/btn_next_on.gif";
import h_comment from "../assets/crystal/h_comment.gif";

const dummy = [
  {
    text: "봄이 왔는데도 추위가 계속되자 아픈 동물들이 많다고 해요~ \
    이 소식을 들은 동물농장에서 마음도 예쁘고 얼굴도 예쁘기로 소문난 \
    간호사 릴리가 약국을 열었다고 해요. 건강한 동물농장을 만들기 위해 \
    노력하는 릴리의 착한 마음이 전해지지 않나요? 릴리의 약국에 어떤 \
    아이템이 있는지 어서 구경하러 가보자고요!",
    img: img262,
  },
  {
    text: "지루한 겨울방학을 마치고 동물학교가 개학했어요~ \
    새 학기가 되면 새로운 선생님, 새로운 친구들을 만나고 \
    새 마음으로 시작하게 되고 주변에 모두 새로운 것들로 \
    가득해지는 것 같아요! 새 학기를 시작한 동물들에게 필요한 \
    특별한 아이템을 센스있는 빌아저씨가 구해다 놓으셨다고 해요~ \
    무엇이 있는지 궁금하죠? 어서 가서 구경해 보아요!",
    img: img261,
  },
  {
    text: "귀엽고 사랑스러운 동물들이 가득한 동물농장에서도 \
    특별히 더 큰 사랑을 한몸에 받고 있는 동물들을 위해 준비했어요~! \
    그건 바로~아직은 작고 약한 아기 동물들이에요~ 아기 동물들에게 꼭 \
    필요한 유아용품을 빌아저씨께서 구해오셨다고 해요~ \
    농장에 아기 동물을 위해 필요한 용품이 뭐가 있는지 어서 와서 구경하세요!",
    img: img260,
  },
];

const CrystalPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < dummy.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("로그인이 필요합니다.");
  };

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
                {dummy[currentIndex].text}
                <img src={dummy[currentIndex].img} alt="" />
              </div>
              <div className="relative mt-5.5 h-8">
                {currentIndex > 0 && (
                  <img
                    src={btn_prev}
                    className="absolute left-3 cursor-pointer"
                    onClick={handlePrev}
                    alt="이전"
                  />
                )}
                {currentIndex < dummy.length - 1 && (
                  <img
                    src={btn_next}
                    className="absolute right-3 cursor-pointer"
                    onClick={handleNext}
                    alt="다음"
                  />
                )}
              </div>
              <img src={h_comment} className="mb-2 ml-0.5 mt-6" />
              <form onSubmit={handleSubmit}>
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
                  className="mt-2 mb-6 px-4.5 py-1.5 bg-gray-400 text-white font-medium hover:bg-gray-500"
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
