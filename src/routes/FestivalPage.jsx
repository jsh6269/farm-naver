import Sidebar from "../components/Sidebar";

const FestivalPage = () => {
  return (
    // sdf
    <div className="bg-[#FFF799] rounded-2xl flex">
      <div className="text-center mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px]">
          <a href="/" className="text-blue-700">
            동물농장
          </a>{" "}
          &gt; 페스티벌
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[710px] bg-white rounded-2xl mt-[33px] mr-5"></div>
    </div>
  );
};
export default FestivalPage;
