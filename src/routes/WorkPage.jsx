import PageShell from "../components/PageShell";
import banner from "../assets/work/pop_alba_top.gif";

const BASE = "https://jsh6269.github.io/farm.jr.naver.com/work";

// 아르바이트 직업 아이콘/이름 이미지를 한 번에 불러온다.
const assets = import.meta.glob("../assets/work/market_*.gif", {
  eager: true,
  import: "default",
});

const JOBS = Array.from({ length: 29 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    aid: i + 1,
    icon: assets[`../assets/work/market_${num}.gif`],
    label: assets[`../assets/work/market_${num}_txt.gif`],
  };
}).filter((job) => job.icon && job.label);

const WorkPage = () => (
  <PageShell
    bgClassName="bg-[#FFF78C]"
    contentClassName="w-[555px] bg-white rounded-2xl mt-[33px] mr-5 mb-6 pt-2.5 flex flex-col items-center font-gulim"
    breadcrumb={
      <>
        <a href="/" className="text-blue-700">
          동물농장
        </a>
        &nbsp; &gt; &nbsp; 아르바이트
      </>
    }
  >
    <img
      src={banner}
      width={537}
      alt="아르바이트"
      className="rounded-t-md"
    />
    <p className="text-[12px] text-[#444] text-center leading-[18px] mt-3">
      우리 마을 가게에서 아르바이트를 하면 포인트와 아이템을 얻을 수 있어요.
      <br />
      함께 일할 가게를 골라보세요!
    </p>
    <div className="grid grid-cols-5 gap-x-2 gap-y-4 mt-4 mb-5 px-3">
      {JOBS.map((job) => (
        <a
          key={job.aid}
          href={`${BASE}/pop_items.php%253faid%253d${job.aid}.html`}
          className="flex flex-col items-center group"
        >
          <div className="w-[86px] h-[86px] flex items-center justify-center bg-[#FFFBE0] rounded-lg border border-[#F0E4A0] group-hover:bg-[#FFF3B0]">
            <img src={job.icon} width={72} height={72} alt={`아르바이트 ${job.aid}`} />
          </div>
          <img src={job.label} alt={`아르바이트 ${job.aid} 이름`} className="mt-1.5" />
        </a>
      ))}
    </div>
  </PageShell>
);

export default WorkPage;
