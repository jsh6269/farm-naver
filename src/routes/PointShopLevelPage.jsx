import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import games from "../data/pointshopGames.json";

const LEVEL_META = {
  1: { label: "초급", title: "level1.gif", ani: "level1_ani.gif", desc: "level1_desc.gif" },
  2: { label: "중급", title: "level2.gif", ani: "level2_ani.gif", desc: "level2_desc.gif" },
  3: { label: "고급", title: "level3.gif", ani: "level3_ani.gif", desc: "level3_desc.gif" },
};

const imgs = import.meta.glob("../assets/pointshop/**/*.{gif,png}", {
  eager: true,
  import: "default",
});
const img = (f) => imgs[`../assets/pointshop/${f}`];

function GameCard({ game }) {
  const thumb = img(`game/${game.thumb}`);
  const inner = (
    <>
      <img src={thumb} alt={game.name} width={131} height={101} className="mx-auto" />
      <p className="mt-1 text-center text-[12px] text-[#176AA4] font-bold leading-[15px] min-h-[31px] flex items-center justify-center">
        {game.name}
      </p>
    </>
  );

  if (!game.playable) {
    return (
      <div className="w-[131px] opacity-60 cursor-not-allowed" title="플래시 파일 없음">
        {inner}
      </div>
    );
  }

  return (
    <Link
      to={`/pointshop/play/${game.id}/${game.level}`}
      className="w-[131px] cursor-pointer hover:opacity-90"
    >
      {inner}
    </Link>
  );
}

const PointShopLevelPage = () => {
  const { level: levelParam } = useParams();
  const level = Number(levelParam);
  const meta = LEVEL_META[level];

  if (!meta) {
    return (
      <div className="p-8 text-center font-gulim">
        잘못된 난이도입니다.{" "}
        <Link to="/pointshop" className="text-blue-600">
          포인트 게임으로
        </Link>
      </div>
    );
  }

  const list = games.filter((g) => g.level === level);

  return (
    <div className="bg-[#95D2FC] rounded-2xl flex">
      <div className="mt-1 font-gulim">
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp;
          <Link to="/pointshop" className="text-blue-700">
            포인트 게임
          </Link>
          &nbsp; &gt; &nbsp; {meta.label}
          <Sidebar />
        </span>
      </div>
      <div className="w-[557px] self-start bg-white rounded-2xl mt-[33px] mr-5 mb-6 font-gulim">
        <div className="pt-3 pb-6 px-2.5">
          <img src={img(meta.title)} alt={meta.label} className="ml-2.5" />
          <div className="flex items-start justify-end mt-1 pr-2">
            <img src={img(meta.ani)} alt="" />
            <img src={img(meta.desc)} alt="" className="ml-1" />
          </div>
          <div className="grid grid-cols-3 gap-x-[39px] gap-y-4 justify-items-center mt-4 px-4">
            {list.map((g) => (
              <GameCard key={`${g.id}-${g.level}`} game={g} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/pointshop" className="text-[12px] text-blue-600 hover:underline cursor-pointer">
              포인트 게임 처음으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointShopLevelPage;
