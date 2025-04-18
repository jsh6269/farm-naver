import Sidebar from "../components/Sidebar";
import foodshopHeader from "../assets/foodshop/img_food01.gif";
import btn1 from "../assets/foodshop/btn_food01.gif";

const FoodShopPage = () => {
  return (
    <div className="bg-[#ffee5b] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 쿠킹샵
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[708px] bg-white rounded-2xl mt-[33px] mr-5">
        <img src={foodshopHeader} />
        <div className="bg-gradient-to-b from-[#e68d01] to-[#FEFBD9] mx-[10px] h-[430px] rounded-b-xl">
          <div
            className="bg-white mx-[10px] rounded-b-[5.5px] h-[400px] pt-4 px-5"
            style={{ fontFamily: "굴림", fontSize: "12px" }}
          >
            <p>
              여러분~ 쿠킹샵의 요리 조합법은 정말 다양하고 신기하답니다!~ <br />
              빨리 새로운 요리를 해보세요! <br />
              요리에 성공시 30% 저렴한 가격으로 살 수 있답니다.
            </p>
            <img src={btn1} className="mx-auto mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodShopPage;
