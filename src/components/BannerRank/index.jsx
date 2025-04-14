import { useEffect, useState, useCallback, useMemo } from "react";
import rank1 from "../../assets/home/rank/1.gif";
import rank2 from "../../assets/home/rank/2.gif";
import rank3 from "../../assets/home/rank/3.gif";
import rank4 from "../../assets/home/rank/4.gif";
import rank5 from "../../assets/home/rank/5.gif";
import rank6 from "../../assets/home/rank/6.gif";
import rank7 from "../../assets/home/rank/7.gif";

const RANK_DATA = [
  { img: rank1, name: "그린 마을", sales: 469460 },
  { img: rank2, name: "오렌지 마을", sales: 341058 },
  { img: rank3, name: "바이올렛 마을", sales: 232092 },
  { img: rank4, name: "옐로우 마을", sales: 223850 },
  { img: rank5, name: "블루 마을", sales: 160533 },
  { img: rank6, name: "딥블루 마을", sales: 64041 },
  { img: rank7, name: "레드 마을", sales: 41524 },
];

const BannerRank = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselTransition, setCarouselTransition] = useState("");

  const fullData = useMemo(() => [...RANK_DATA, RANK_DATA[0]], []);

  const getCarouselStyles = useCallback(() => {
    return {
      transform: `translateY(-${carouselIndex * 60}px)`,
      transition: carouselTransition,
    };
  }, [carouselIndex, carouselTransition]);

  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      setCarouselIndex(0);
      setCarouselTransition("none");
    }, 10);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => {
        if (carouselIndex === fullData.length - 1) {
          resetIndexAndTransition();
        } else {
          setCarouselIndex((prev) => prev + 1);
          setCarouselTransition("transform 1s ease-in-out");
        }
      },
      carouselTransition === "none" ? 10 : 2800
    );

    return () => clearInterval(timer);
  }, [
    carouselIndex,
    fullData.length,
    carouselTransition,
    resetIndexAndTransition,
  ]);

  return (
    <div className="absolute overflow-hidden h-[60px] w-full top-[28px]">
      <div className="absolute w-full" style={getCarouselStyles()}>
        {fullData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 h-[60px] px-[10px] text-[12px]"
          >
            <img src={item.img} className="w-[52px] h-[52px]" alt={item.name} />
            <div className="mb-[2px]">
              {(index % RANK_DATA.length) + 1}. {item.name}
              <div className="text-xs text-gray-500">
                판매액: {item.sales.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerRank;
