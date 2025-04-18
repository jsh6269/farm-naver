import Sidebar from "../components/Sidebar";
import comicHeader from "../assets/comic/sub_tit_comic.gif";
import comicSub from "../assets/comic/h_comic_lst.gif";
import comic1 from "../assets/comic/farm_comic_01.jpg";
import comic2 from "../assets/comic/farm_comic_02.jpg";
import comic3 from "../assets/comic/farm_comic_03.jpg";
import comic4 from "../assets/comic/farm_comic_04.jpg";
import comic5 from "../assets/comic/farm_comic_05.jpg";
import comicb1 from "../assets/comic/farm_comic_cardbattle01.jpg";
import comicb2 from "../assets/comic/farm_comic_cardbattle02.jpg";
import comicb3 from "../assets/comic/farm_comic_cardbattle03.jpg";
import comicb4 from "../assets/comic/farm_comic_cardbattle04.jpg";
import comicb5 from "../assets/comic/farm_comic_cardbattle05.jpg";

const comicPairs = [
  { img: comic1, caption: "동물농장 1권" },
  { img: comic2, caption: "동물농장 2권" },
  { img: comic3, caption: "동물농장 3권" },
  { img: comic4, caption: "동물농장 4권" },
  { img: comic5, caption: "동물농장 5권" },
  { img: comicb1, caption: "카드배틀 1권" },
  { img: comicb2, caption: "카드배틀 2권" },
  { img: comicb3, caption: "카드배틀 3권" },
  { img: comicb4, caption: "카드배틀 4권" },
  { img: comicb5, caption: "카드배틀 5권" },
];

const ComicPage = () => {
  return (
    <div className="bg-[#FFA825] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 코믹북
          <Sidebar />
        </span>
      </div>
      <div className="w-[550px] h-[828px] bg-white rounded-2xl mt-[33px] mr-5 mb-5">
        <img src={comicHeader} className="mt-4 ml-2" />
        <div
          className="h-[459px] pt-4 px-5"
          style={{ fontFamily: "굴림", fontSize: "12px" }}
        >
          <img src={comicSub} className="mx-auto mt-1 mb-2" />
          <div className="mx-[33px]">
            <div className="flex flex-wrap gap-x-12 pl-1.5 gap-y-1 pt-5">
              {comicPairs.map((item, idx) => (
                <div
                  key={idx}
                  className="text-center text-[14px] text-blue-700"
                >
                  <img src={item.img} />
                  <p className="mt-1 mb-3">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComicPage;
