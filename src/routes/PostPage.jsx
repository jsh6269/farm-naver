import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import titlePost from "../assets/post/title_post041214.gif";
import postmu01 from "../assets/post/postmu041214_01.gif";
import postmu02 from "../assets/post/postmu041214_02.gif";
import postmu03 from "../assets/post/postmu041214_03.gif";
import post041214_01 from "../assets/post/post_041214_01.gif";
import post041214_02 from "../assets/post/post_041214_02.gif";
import post041214_03 from "../assets/post/post_041214_03.gif";
import mainPost01 from "../assets/post/main_post041214_01.gif";
import mainPost02 from "../assets/post/main_post041214_02.gif";
import mainPost03 from "../assets/post/main_post041214_03.gif";
import btn01 from "../assets/post/btn_041214_01.gif";
import btn02 from "../assets/post/btn_041214_02.gif";
import text01 from "../assets/post/text_041214_01.gif";
import text02 from "../assets/post/text_041214_02.gif";
import tab01 from "../assets/post/tab_post01.gif";
import tab02 from "../assets/post/tab_post02.gif";
import tab03 from "../assets/post/tab_post03.gif";
import tab04 from "../assets/post/tab_post04.gif";
import tabBg1 from "../assets/post/tab_post01_b.gif";
import tabBg2 from "../assets/post/tab_post02_b.gif";
import tabBg3 from "../assets/post/tab_post03_b.gif";
import tabBg4 from "../assets/post/tab_post04_b.gif";
import postImg01 from "../assets/post/post_img01.gif";
import postImg01Text from "../assets/post/post_img01_text.gif";
import postImg02 from "../assets/post/post_img02.gif";
import postImg02Text from "../assets/post/post_img02_text.gif";
import postImg03 from "../assets/post/post_img03.gif";
import postImg03Text from "../assets/post/post_img03_text.gif";
import postImg04 from "../assets/post/post_img04.gif";
import postImg04Text from "../assets/post/post_img04_text.gif";
import postImg05 from "../assets/post/post_img05.gif";
import postImg05Text from "../assets/post/post_img05_text.gif";

const tabs = [
  { img: tab01, value: 0 },
  { img: tab02, value: 1 },
  { img: tab03, value: 2 },
  { img: tab04, value: 3 },
];

const stamps = [
  { img: postImg01, text: postImg01Text, value: 0 },
  { img: postImg02, text: postImg02Text, value: 1 },
  { img: postImg03, text: postImg03Text, value: 2 },
  { img: postImg04, text: postImg04Text, value: 3 },
  { img: postImg05, text: postImg05Text, value: 4 },
];

const letter = [tabBg1, tabBg2, tabBg3, tabBg4];

const hoverLayers = [
  { left: "right-[-66px] top-[-0px]", img: post041214_01 },
  { left: "right-[-61px] top-[-0px]", img: post041214_02 },
  { left: "left-[-57px] top-[30px]", img: post041214_03 },
];

const PostForm = () => {
  const [hovered, setHovered] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedStamp, setSelectedStamp] = useState(0);
  const [userId, setUserId] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div className="w-[557px] mx-auto mt-3 mb-7.5">
      <div className="flex">
        <div className="flex-1">
          {/* 타이틀 */}
          <div className="ml-3">
            <img src={titlePost} alt="title" />
          </div>
          {/* 이미지 3개 + Hover Layer */}
          <div className="relative flex justify-between w-[537px] mx-auto">
            {[postmu01, postmu02, postmu03].map((img, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <a href="#">
                  <img src={img} alt="" className="w-auto h-[221px]" />
                </a>
                {hovered === idx && (
                  <div
                    className={`absolute z-10 ${hoverLayers[idx].left} bg-white`}
                    style={{ visibility: "visible" }}
                  >
                    <img src={hoverLayers[idx].img} alt="" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* 폼 영역 */}
          <div className="flex w-[537px] mx-auto bg-gradient-to-b from-[#ffd91f] to-[#fffeb2] rounded-b-[15px]">
            <div className="mx-auto mb-7">
              {/* 상단 띠 */}
              <img src={mainPost01} alt="" className="" />
              {/* 본문 */}
              <div
                className="px-6 pb-4"
                style={{
                  background: `url(${mainPost03}) repeat-y left top`,
                }}
              >
                {/* 유저 입력 */}
                <div className="flex items-center gap-2 pb-3 pt-1.5">
                  <input
                    type="text"
                    className="text-xs border rounded w-[215px] h-[29px] px-2 mt-[-4.5px] ml-[26px]"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="친구 아이디"
                  />
                  <button type="button">
                    <img src={btn01} alt="친구찾기" className="h-[42px]" />
                  </button>
                  <span id="farmname" className="ml-2 text-xs text-[#666]" />
                </div>
                {/* 안내문구 */}
                <div className="flex justify-center py-1">
                  <img src={text01} alt="" />
                </div>
                {/* 탭 */}
                <div className="flex justify-start pt-2 ml-[28px]">
                  {tabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setSelectedTab(tab.value)}
                      className={
                        selectedTab === tab.value ? "opacity-100" : "opacity-60"
                      }
                    >
                      <img src={tab.img} alt={`tab${tab.value}`} />
                    </button>
                  ))}
                  <input type="hidden" name="paper" value={selectedTab} />
                </div>
                {/* 텍스트 입력 */}
                <div
                  className="mx-auto mb-2 w-[415px] h-[184px] flex items-center justify-center"
                  style={{
                    background: `url(${letter[selectedTab]}) no-repeat center/cover`,
                  }}
                >
                  <textarea
                    className="w-[392px] h-[160px] text-xs border-none bg-transparent resize-none focus:outline-none py-1 px-1.5"
                    value={contents}
                    onChange={(e) => setContents(e.target.value)}
                    maxLength={500}
                  />
                </div>
                {/* 안내문구2 */}
                <div className="flex justify-center pb-1 pt-3">
                  <img src={text02} alt="" />
                </div>
                {/* 스탬프 */}
                <div className="flex justify-center gap-4 py-2">
                  {stamps.map((stamp, idx) => (
                    <label
                      key={stamp.value}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <img
                        src={stamp.img}
                        alt={`stamp${stamp.value}`}
                        className="w-[80px] h-[78px] mb-1"
                      />
                      <input
                        type="radio"
                        name="stamp"
                        value={stamp.value}
                        checked={selectedStamp === stamp.value}
                        onChange={() => setSelectedStamp(stamp.value)}
                        className="mb-1"
                      />
                      <img
                        src={stamp.text}
                        alt=""
                        className="w-[55px] h-[33px]"
                      />
                    </label>
                  ))}
                </div>
                {/* 보내기 버튼 */}
                <div className="flex justify-center py-1 mt-3">
                  <button type="button">
                    <img
                      src={btn02}
                      alt="보내기"
                      className="w-[131px] h-[39px]"
                    />
                  </button>
                </div>
              </div>
              {/* 하단 띠 */}
              <img src={mainPost02} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostPage = () => {
  return (
    <div className="bg-[#ff8ac1] rounded-2xl flex">
      <div className="mt-1" style={{ fontFamily: "굴림" }}>
        <span className="text-[12px] text-start ml-5">
          <a href="/" className="text-blue-700">
            동물농장
          </a>
          &nbsp; &gt; &nbsp; 우체국
          <Sidebar />
        </span>
      </div>
      <div className="w-[557px] bg-white rounded-2xl mt-[33px] mr-5 mb-8">
        <PostForm />
      </div>
    </div>
  );
};
export default PostPage;
