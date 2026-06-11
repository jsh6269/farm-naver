import { Link, useParams } from "react-router-dom";
import FlashPlayer from "../components/FlashPlayer";
import games from "../data/pointshopGames.json";

const LEVEL_LABEL = { 1: "초급", 2: "중급", 3: "고급" };

const imgs = import.meta.glob("../assets/pointshop/**/*.gif", {
  eager: true,
  import: "default",
});
const img = (f) => imgs[`../assets/pointshop/${f}`];

const PointShopGamePage = () => {
  const { id, level: levelParam } = useParams();
  const level = Number(levelParam);
  const game = games.find((g) => g.id === id && g.level === level);

  if (!game) {
    return (
      <div className="p-8 text-center font-gulim">
        게임을 찾을 수 없습니다.{" "}
        <Link to="/pointshop" className="text-blue-600">
          포인트 게임으로
        </Link>
      </div>
    );
  }

  if (!game.playable) {
    return (
      <div className="p-8 text-center font-gulim">
        이 게임의 플래시 파일이 없습니다.{" "}
        <Link to={`/pointshop/level/${level}`} className="text-blue-600">
          목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[750px] mx-auto mt-[33px] mb-6 font-gulim">
      <table className="w-[750px] border-collapse bg-[#D580EA]">
        <tbody>
          <tr>
            <td
              colSpan={3}
              className="bg-no-repeat bg-top text-center"
              style={{ backgroundImage: `url(${img("bg_point_game02.gif")})` }}
            >
              {/* breadcrumb */}
              <table className="w-[710px] mx-auto border-collapse">
                <tbody>
                  <tr>
                    <td className="h-[30px] w-5" />
                    <td className="text-[12px] text-left">
                      <Link to="/" className="text-blue-700">
                        동물농장
                      </Link>
                      <span className="text-black"> &gt; </span>
                      <Link to="/pointshop" className="text-blue-700">
                        포인트 얻기
                      </Link>
                      <span className="text-black"> &gt; </span>
                      <Link to={`/pointshop/level/${level}`} className="text-blue-700">
                        게임
                      </Link>
                      <span className="text-black"> &gt; </span>
                      <span className="text-black">{game.name}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* title bar */}
              <table className="w-[710px] mx-auto border-collapse">
                <tbody>
                  <tr>
                    <td>
                      <img src={img("te_poing_game07.gif")} alt="" width={4} height={55} />
                    </td>
                    <td className="bg-[#C560DE] w-[702px]">
                      <div className="flex items-center h-[55px]">
                        <img
                          src={img("icon_point_game01.gif")}
                          alt=""
                          width={43}
                          height={26}
                          className="mx-3"
                        />
                        <span className="text-white text-[14px] font-bold">{game.name}</span>
                      </div>
                    </td>
                    <td>
                      <img src={img("te_poing_game08.gif")} alt="" width={4} height={55} />
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* flash */}
              <div className="h-[15px]" />
              <div className="flex justify-center pb-5">
                <FlashPlayer swf={game.swf} width={game.width} height={game.height} />
              </div>

              {/* 포인트 게임 처음으로 */}
              <div className="py-10 flex justify-center">
                <Link to="/pointshop" className="cursor-pointer">
                  <img src={img("btn_first_point02.gif")} alt="포인트 게임 처음으로" />
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src={img("te_poing_game05.gif")} alt="" width={20} height={20} />
            </td>
            <td className="w-[710px]" />
            <td>
              <img src={img("te_poing_game06.gif")} alt="" width={20} height={20} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PointShopGamePage;
