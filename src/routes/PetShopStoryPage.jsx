import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import storyTitle from "../assets/petshop/story/top_060726story.gif";
import storyBottom from "../assets/petshop/story/img_070404story_bot.gif";

const BASE = import.meta.env.BASE_URL;
const SWF_URL = `${BASE}${BASE.endsWith("/") ? "" : "/"}main_story.swf`;
const RUFFLE_SRC = "https://unpkg.com/@ruffle-rs/ruffle";
const SWF_W = 535;
const SWF_H = 476;

// 원본 플래시(main_story.swf)를 Ruffle(오픈소스 Flash 에뮬레이터)로 재생한다.
function FlashStory() {
  const holder = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let player = null;
    let timer = null;

    const mount = () => {
      if (cancelled || !window.RufflePlayer || !holder.current) return;
      const ruffle = window.RufflePlayer.newest();
      player = ruffle.createPlayer();
      player.style.width = `${SWF_W}px`;
      player.style.height = `${SWF_H}px`;
      holder.current.innerHTML = "";
      holder.current.appendChild(player);
      player.load(SWF_URL).catch(() => {});
    };

    if (window.RufflePlayer) {
      mount();
    } else {
      let script = document.querySelector("script[data-ruffle]");
      if (!script) {
        script = document.createElement("script");
        script.src = RUFFLE_SRC;
        script.setAttribute("data-ruffle", "true");
        document.body.appendChild(script);
      }
      timer = setInterval(() => {
        if (window.RufflePlayer) {
          clearInterval(timer);
          timer = null;
          mount();
        }
      }, 200);
      setTimeout(() => timer && clearInterval(timer), 10000);
    }

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
      if (player && player.remove) player.remove();
    };
  }, []);

  return (
    <div
      ref={holder}
      style={{ width: SWF_W, height: SWF_H }}
      className="mx-auto bg-black"
    />
  );
}

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
          <FlashStory />
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
