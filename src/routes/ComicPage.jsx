import PageShell from "../components/PageShell";
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
import comici1 from "../assets/comic/img_book2_1.jpg";
import comici2 from "../assets/comic/img_book2_2.jpg";

const comicPairs = [
  { img: comic1, caption: "동물농장 1권", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=687408" },
  { img: comic2, caption: "동물농장 2권", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=830382" },
  { img: comic3, caption: "동물농장 3권", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=873013" },
  { img: comic4, caption: "동물농장 4권", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=890153" },
  { img: comic5, caption: "동물농장 5권", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=914718" },
  { img: comicb1, caption: "카드배틀 1권", url: "https://search.shopping.naver.com/book/catalog/53915753949" },
  { img: comicb2, caption: "카드배틀 2권", url: "https://search.shopping.naver.com/book/catalog/53911312742" },
  { img: comicb3, caption: "카드배틀 3권", url: "https://search.shopping.naver.com/book/catalog/53915618344" },
  { img: comicb4, caption: "카드배틀 4권", url: "https://search.shopping.naver.com/book/catalog/53911300958" },
  { img: comicb5, caption: "카드배틀 5권", url: "https://search.shopping.naver.com/book/catalog/53915512935" },
  { img: comici1, caption: "종이모형 1권", url: "https://www.coupang.com/vp/products/8179356689" },
  { img: comici2, caption: "종이모형 2권", url: "https://www.coupang.com/vp/products/8179356609" },
];

const ComicPage = () => {
  return (
    <PageShell
      bgClassName="bg-[#FFA825]"
      contentClassName="w-[550px] h-[828px] bg-white rounded-2xl mt-[33px] mr-5 mb-5"
      breadcrumb={
        <>
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 코믹북
        </>
      }
    >
        <img src={comicHeader} className="mt-4 ml-2" alt="코믹북 헤더" />
        <div className="h-[459px] pt-4 px-5 font-gulim text-[12px]">
          <a
            href="https://farm.jr.naver.com/comic/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto mt-1 mb-2 w-fit"
          >
            <img
              src={comicSub}
              alt="동물농장 관련 책 모두보기"
            />
          </a>
          <div className="mx-[33px]">
            <div className="flex flex-wrap gap-x-12 pl-1.5 gap-y-1 pt-5">
              {comicPairs.map(({ img, caption, url }) => (
                <a
                  key={caption}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[14px] text-blue-700 cursor-pointer hover:underline"
                >
                  <img src={img} alt={caption} />
                  <p className="mt-1 mb-3">{caption}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
    </PageShell>
  );
};

export default ComicPage;
