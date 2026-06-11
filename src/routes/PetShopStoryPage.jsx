import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import FlashPlayer from "../components/FlashPlayer";
import storyTitle from "../assets/petshop/story/top_060726story.gif";
import storyBottom from "../assets/petshop/story/img_070404story_bot.gif";

const PetShopStoryPage = () => (
  <div className="bg-[#fff799] rounded-2xl flex">
    <div className="mt-1 font-gulim">
      <span className="text-[12px] text-start ml-5">
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 스토리
        <Sidebar />
      </span>
    </div>
    <div className="w-[555px] self-start bg-white rounded-2xl mt-[33px] mr-5 mb-6 font-gulim">
      <div className="pt-4 pb-6">
        <img src={storyTitle} alt="크라라의 마법소동" className="w-[555px]" />
        <div className="mt-1">
          <FlashPlayer path="main_story.swf" width={535} height={476} />
          <img
            src={storyBottom}
            alt=""
            width="535"
            height="14"
            className="mx-auto block"
          />
        </div>
      </div>
    </div>
  </div>
);

export default PetShopStoryPage;
