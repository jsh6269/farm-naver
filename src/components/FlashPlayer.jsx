import { useEffect, useRef } from "react";
import { publicUrl } from "../utils/publicUrl";

const RUFFLE_SRC = "https://unpkg.com/@ruffle-rs/ruffle";

export default function FlashPlayer({ swf, path, width = 660, height = 552 }) {
  const holder = useRef(null);
  const url = publicUrl(path ?? `games/${swf}`);

  useEffect(() => {
    let cancelled = false;
    let player = null;
    let timer = null;

    const mount = () => {
      if (cancelled || !window.RufflePlayer || !holder.current) return;
      const ruffle = window.RufflePlayer.newest();
      player = ruffle.createPlayer();
      player.style.width = `${width}px`;
      player.style.height = `${height}px`;
      holder.current.innerHTML = "";
      holder.current.appendChild(player);
      player.load(url).catch(() => {});
    };

    if (window.RufflePlayer) mount();
    else {
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
      if (player?.remove) player.remove();
    };
  }, [url, width, height]);

  return (
    <div
      ref={holder}
      style={{ width, height }}
      className="mx-auto bg-black"
    />
  );
}
