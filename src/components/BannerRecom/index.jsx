import { useEffect, useState } from "react";
import b1 from "../../assets/home/recommend/008.gif";
import b2 from "../../assets/home/recommend/073.gif";
import b3 from "../../assets/home/recommend/076.gif";

const banners = [
  {
    image: b1,
    text: "무시무시한 몬스터와 마도사가 숨어 있는 으스스한 동굴 탐험!",
  },
  {
    image: b2,
    text: "최고 농장, 최고 동물이 모이는 곳! 모두 페스티발로 모여주세요.",
  },
  {
    image: b3,
    text: "오늘은 어떤 마법을 배워볼까? 마법봉으로 정확히 그려주세요~",
  },
];

const BannerRecom = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[54px] flex items-center justify-center">
      <img
        src={banners[index].image}
        alt="banner"
        className="w-[93px] h-[52px] m-2"
      />
      <p className="text-[12px] mr-3 leading-4">{banners[index].text}</p>
    </div>
  );
};

export default BannerRecom;
