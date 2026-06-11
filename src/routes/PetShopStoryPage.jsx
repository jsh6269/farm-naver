import PageShell from "../components/PageShell";
import FlashPlayer from "../components/FlashPlayer";
import storyTitle from "../assets/petshop/story/top_060726story.gif";
import storyBottom from "../assets/petshop/story/img_070404story_bot.gif";

const PetShopStoryPage = () => (
  <PageShell
    bgClassName="bg-[#fff799]"
    contentClassName="w-[555px] self-start bg-white rounded-2xl mt-[33px] mr-5 mb-6 font-gulim"
    breadcrumb={
      <>
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 스토리
      </>
    }
  >
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
  </PageShell>
);

export default PetShopStoryPage;
