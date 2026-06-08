import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PetShopStoryPage = () => (
  <div className="bg-[#ccb4fd] rounded-2xl flex">
    <div className="mt-1 font-gulim">
      <span className="text-[12px] text-start ml-5">
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp;
        <Link to="/petshop" className="text-blue-700">
          동물가게
        </Link>
        &nbsp; &gt; &nbsp; 스토리
        <Sidebar />
      </span>
    </div>
    <div className="w-[555px] bg-white rounded-2xl mt-[33px] mr-5 mb-6 font-gulim">
      <div className="px-5 pt-5 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[15px] font-bold text-[#8A4FBF]">
            크라라의 마법소동
          </h2>
          <Link
            to="/petshop"
            className="text-[12px] text-blue-600 hover:underline"
          >
            동물가게 처음으로
          </Link>
        </div>

        <div className="rounded-xl border-2 border-[#ebe1ff] bg-gradient-to-b from-[#ffeaf3] to-[#f6f1ff] p-6">
          <div className="bg-white rounded-lg p-6 text-[12px] leading-[20px] text-[#555]">
            <p className="mb-3">
              마법사 크라라가 동물 친구들에게 새로운 능력을 선물하면서 벌어지는
              이야기예요.
            </p>
            <p className="mb-3">
              원래 이 페이지에서는 &lsquo;크라라의 마법소동&rsquo; 애니메이션이
              플래시 영상으로 재생되었어요. 지금은 플래시를 지원하지 않아 영상은
              볼 수 없지만, 동물 친구들의 새로운 모습은 동물 분양에서 확인할 수
              있어요.
            </p>
            <div className="mt-5 text-center">
              <Link
                to="/petshop/shop"
                className="inline-block bg-[#A85FD6] text-white text-[12px] px-6 py-2 rounded-full cursor-pointer hover:bg-[#9748c9]"
              >
                새로운 동물 보러가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PetShopStoryPage;
