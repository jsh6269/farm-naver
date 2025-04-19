import red from "../assets/common/red.gif";

import React from "react";
import roomBg from "../assets/room/se_b_snow01.gif";
import btnBeach from "../assets/room/btn_se_beach01.gif";

// 유저별 아바타 이미지 import
import newvil_06 from "../assets/room/newvil_06.gif";
import newvil_07 from "../assets/room/newvil_07.gif";
import newvil_47 from "../assets/room/newvil_47.gif";
import newvil_35 from "../assets/room/newvil_35.gif";
import newvil_27 from "../assets/room/newvil_27.gif";
import newvil_16 from "../assets/room/newvil_16.gif";
import newvil_17 from "../assets/room/newvil_17.gif";
import newvil_55 from "../assets/room/newvil_55.gif";
import newvil_67 from "../assets/room/newvil_67.gif";

const users = [
  {
    id: "zxas9097",
    url: "#",
    img: newvil_06,
    imgHeight: 90,
    cellWidth: 70,
  },
  {
    id: "jinny3286",
    url: "#",
    img: newvil_07,
    imgHeight: 68,
    cellWidth: 75,
  },
  {
    id: "sskengco",
    url: "#",
    img: newvil_47,
    imgHeight: 69,
    cellWidth: 70,
  },
  {
    id: "hoy0805",
    url: "#",
    img: newvil_47,
    imgHeight: 92,
    cellWidth: 74,
  },
  {
    id: "pinkclaire",
    url: "/room/view.php?id=pinkclaire&rid=3",
    img: newvil_35,
    imgHeight: 92,
    cellWidth: 73,
  },
  {
    id: "lja0527",
    url: "/room/view.php?id=lja0527&rid=2",
    img: newvil_27,
    imgHeight: 92,
    cellWidth: 72,
  },
  {
    id: "rldk1111",
    url: "/room/view.php?id=rldk1111&rid=1",
    img: newvil_16,
    imgHeight: 68,
    cellWidth: 79,
  },
  {
    id: "muse_2012",
    url: "/view.php?id=muse_2012&rid=1",
    img: newvil_17,
    imgHeight: 90,
    cellWidth: 60,
  },
  {
    id: "yubin2356",
    url: "#",
    img: newvil_55,
    imgHeight: 68,
    cellWidth: 80,
  },
  {
    id: "swjin210",
    url: "#",
    img: newvil_67,
    imgHeight: 68,
    cellWidth: 77,
  },
];

const RoomLayout = () => {
  return (
    <div
      className="relative"
      style={{
        width: 750,
        height: 128,
        backgroundImage: `url(${roomBg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-[637px] top-[93px] z-10">
        <a href="#" tabIndex={-1}>
          <img src={btnBeach} width={102} height={24} alt="beach button" />
        </a>
      </div>
      <table
        className="absolute left-0 top-0"
        style={{ width: 750, height: 128 }}
        cellPadding={0}
        cellSpacing={0}
      >
        <tbody>
          <tr>
            <td style={{ width: 20 }}></td>
            {users.map((user, idx) => (
              <td
                key={idx}
                style={{ width: user.cellWidth }}
                className="align-top text-center"
              >
                <table className="w-full" cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td
                        style={{ height: user.imgHeight }}
                        className="align-bottom"
                      >
                        <a href={user.url} tabIndex={-1}>
                          <img src={user.img} alt={user.id} />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a href={user.url}>
                          <span className="text-[11.5px] mr-2">{user.id}</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const RedVillagePage = () => {
  return (
    <div>
      <img src={red} className="rounded-xl w-[750px] h-[428px]" />
      <RoomLayout />
    </div>
  );
};

export default RedVillagePage;
