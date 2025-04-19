import Sidebar from "../components/Sidebar";
import title1 from "../assets/mix_dog/title1.gif";
import carAlchemy01Bg from "../assets/mix_dog/car_alchemy01_bg.gif";
import gif01Sleep from "../assets/mix_dog/gif_01_sleep.gif";
import btn01 from "../assets/mix_dog/btn_01.gif";

const MixDogComponent = () => {
  return (
    <div className="bg-[#6118B3] w-[555px] flex flex-col items-center rounded-b-xl">
      {/* 서브타이틀 */}
      <img src={title1} alt="연금술 타이틀" className="w-[555px] h-[245px]" />

      <div className="flex w-[535px] bg-gradient-to-b from-[#b16500] to-[#ffc900] rounded-b-[12px] mb-12">
        {/* 메인 컨텐츠 */}
        <div className="w-[515px] mx-auto mb-5">
          {/* 배경 이미지 영역 */}
          <div
            className="flex justify-center items-end h-[279px]"
            style={{
              backgroundImage: `url(${carAlchemy01Bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img
              src={gif01Sleep}
              alt="잠자는 믹스독"
              className="w-[170px] h-[185px]"
            />
          </div>

          {/* 하얀 여백 */}
          <div className="bg-white h-8" />

          {/* 버튼 */}
          <div className="bg-white flex justify-center">
            <a href="#">
              <img
                src={btn01}
                alt="아이템 조합하러가기"
                className="w-[140px] h-[35px]"
              />
            </a>
          </div>

          {/* 하얀 여백 */}
          <div className="bg-white h-[60px] rounded-b-xl" />
        </div>
      </div>
    </div>
  );
};

const MixDogPage = () => {
  return (
    <div className="bg-[#9351dc] rounded-2xl flex">
      <div className="mt-1 font-gulim">
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 연금술
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] rounded-2xl mt-[33px] mr-5">
        <MixDogComponent />
      </div>
    </div>
  );
};

export default MixDogPage;
