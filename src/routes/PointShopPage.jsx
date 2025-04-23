import Sidebar from "../components/Sidebar";

import point050516_title from "../assets/pointshop/point050516_title.gif";
import FPBPANG from "../assets/pointshop/FPBPANG.gif";
import point050516_title02 from "../assets/pointshop/point050516_title02.gif";
import btn_level01 from "../assets/pointshop/btn_level01.gif";
import btn_level02 from "../assets/pointshop/btn_level02.gif";
import btn_level03 from "../assets/pointshop/btn_level03.gif";
import FPBSUDOKU from "../assets/pointshop/FPBSUDOKU.gif";
import FPBDIFF from "../assets/pointshop/FPBDIFF.gif";
import FSPMUSIC from "../assets/pointshop/FSPMUSIC.gif";
import FSPDGDATE from "../assets/pointshop/FSPDGDATE.gif";
import FACDOUGH from "../assets/pointshop/FACDOUGH.gif";
import FPBHAO from "../assets/pointshop/FPBHAO.gif";
import FSPTYPING from "../assets/pointshop/FSPTYPING.gif";
import FSPTOUCH from "../assets/pointshop/FSPTOUCH.gif";
import FACMILK from "../assets/pointshop/FACMILK.gif";
import FPBSUSHI from "../assets/pointshop/FPBSUSHI.gif";
import FPBJIGSAW from "../assets/pointshop/FPBJIGSAW.gif";
import point050516_room from "../assets/pointshop/point050516_room.gif";
import hfGame from "../assets/pointshop/h_fgame.gif";
import bgRank from "../assets/pointshop/bg_rank.gif";
import spTab from "../assets/pointshop/sp_tab.gif";

function PointShop() {
  return (
    <div className="w-[557px] h-full flex flex-col">
      <div className="flex flex-col items-center w-full bg-white rounded-2xl mb-6">
        {/* 타이틀 */}
        <div className="w-[539px] mt-4 mb-2">
          <img src={point050516_title} alt="" width={120} height={33} />
        </div>
        {/* 오늘의 랭킹 */}
        <div className="w-[539px] mb-3">
          <div
            className="bg-no-repeat h-[223px]"
            style={{ backgroundImage: `url(${bgRank})` }}
          >
            <div className="flex relative">
              <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/http://farm.jr.naver.com/pointshop/?id=111">
                <span className="absolute left-[48px] top-[68px]">
                  <img src={FPBPANG} alt="" width={131} height={101} />
                </span>
              </a>
            </div>
            <ol className="mt-2 text-center text-[12px] relative">
              <li>
                <div className="w-[181px] absolute left-[226px] top-[61px] flex justify-between text-white">
                  <p className="mx-2">lbgcherry</p>
                  <p className="mx-2">38375점</p>
                </div>
              </li>
              <li>
                <div className="w-[181px] absolute left-[226px] top-[98px] flex justify-between text-white">
                  <p className="mx-2">go5081</p>
                  <p className="mx-2">15710점</p>
                </div>
              </li>
              <li>
                <div className="w-[181px] absolute left-[226px] top-[134px] flex justify-between text-white">
                  <p className="mx-2">wkdwlgml0689</p>
                  <p className="mx-2">6815점</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* 게임목록 타이틀 */}
        <div className="w-[539px] mb-2">
          <img
            src={point050516_title02}
            alt="게임목록보기"
            width={144}
            height={38}
          />
        </div>
        {/* 게임목록 버튼 */}
        <div className="w-[535px] flex flex-row justify-center items-center mb-4">
          <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/list.php%253flevel%253d1.html">
            <img src={btn_level01} alt="" width={170} height={102} />
          </a>
          <a
            href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/list.php%253flevel%253d2.html"
            className="mx-[10px]"
          >
            <img src={btn_level02} alt="" width={170} height={102} />
          </a>
          <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/list.php%253flevel%253d3.html">
            <img src={btn_level03} alt="" width={170} height={102} />
          </a>
        </div>
        {/* 플래시 게임 */}
        <div className="w-[540px]">
          <img src={hfGame} className="mb-1" />
          <div className="bg-white p-2">
            <div className="flex justify-between">
              <button
                className="w-[174px] h-[30px] bg-[left_top] hover:bg-[left_0px_top_34px] outline-none"
                style={{
                  backgroundImage: `url(${spTab})`,
                  backgroundSize: "525px 88.42px",
                }}
                aria-label="캐주얼"
              />
              <button
                className="w-[174px] h-[30px] bg-[-175px_top] hover:bg-[-175px_34px] outline-none"
                style={{
                  backgroundImage: `url(${spTab})`,
                  backgroundSize: "525px 88.42px",
                }}
                aria-label="슈팅"
              />
              <button
                className="w-[175px] h-[30px] bg-[-350px_top] hover:bg-[-350px_34px] outline-none"
                style={{
                  backgroundImage: `url(${spTab})`,
                  backgroundSize: "525px 88.42px",
                }}
                aria-label="액션"
              />
            </div>
            <div className="bg-[#fef3ff] text-[14px] border border-[#f4c0ff] rounded-b-2xl">
              <ul className="grid grid-cols-4 gap-4 px-4 py-5">
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=111">
                    <img
                      src={FPBPANG}
                      alt="트리플 팡"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">트리플 팡</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=112">
                    <img
                      src={FPBSUDOKU}
                      alt="스도쿠 퍼즐왕"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">스도쿠 퍼즐왕</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=113">
                    <img
                      src={FPBDIFF}
                      alt="틀린그림찾기"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">틀린그림찾기</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=114">
                    <img
                      src={FSPMUSIC}
                      alt="뮤직 톡톡"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">뮤직 톡톡</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=116">
                    <img
                      src={FSPDGDATE}
                      alt="두근두근 데이트"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">두근두근 데이트</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=118">
                    <img
                      src={FACDOUGH}
                      alt="HOT DOUGH"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">HOT DOUGH</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=119">
                    <img src={FPBHAO} alt="하오하오" width={131} height={101} />
                    <p className="pblock text-center mt-1">하오하오</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=120">
                    <img
                      src={FSPTYPING}
                      alt="가로세로타이핑"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">가로세로타이핑</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=125">
                    <img
                      src={FSPTOUCH}
                      alt="터치터치"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">터치터치</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=134">
                    <img
                      src={FACMILK}
                      alt="밀크쮸쮸"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">밀크쮸쮸</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=142">
                    <img src={FPBSUSHI} alt="스시짱" width={131} height={101} />
                    <p className="pblock text-center mt-1">스시짱</p>
                  </a>
                </li>
                <li>
                  <a href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/?id=143">
                    <img
                      src={FPBJIGSAW}
                      alt="직소퍼즐"
                      width={131}
                      height={101}
                    />
                    <p className="pblock text-center mt-1">직소퍼즐</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 방 바로가기 */}
        <div className="w-[535px] flex justify-center mb-4">
          <a
            href="https://jsh6269.github.io/farm.jr.naver.com/pointshop/http://farm.jr.naver.com/room/"
            tabIndex={-1}
          >
            <img src={point050516_room} alt="" width={453} height={96} />
          </a>
        </div>
      </div>
    </div>
  );
}

const PointShopPage = () => {
  return (
    <div className="bg-[#95D2FC] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 포인트 게임
          <Sidebar />
        </span>
      </div>
      <div className="mt-[33px] mr-5">
        <PointShop />
      </div>
    </div>
  );
};
export default PointShopPage;
