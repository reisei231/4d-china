"use client";

import React, { useState, useRef, useEffect } from "react";
import localFont from "next/font/local";
import "./third.css";

const myFont = localFont({ src: "./../../../public/fonts/PingFang.ttf" });

const Third = () => {
  const showModalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(showModalRef.current);
  }, []);

  return (
    <div
      className={myFont.className}
      style={{ width: "100%", position: "relative", fontSize: "12px" }}
    >
      <div
        ref={showModalRef}
        className={isVisible ? "title showModel" : "title"}
      ></div>
      <div
        className={
          isVisible ? "content-modal2-title showModel" : "content-modal2-title"
        }
      >
        <ul>
          <li className="content-modal2-item item0">
            <i className="i-first"></i>
            <p className="txt1">超千万活跃玩家</p>
            <p className="txt2">
              超过千万的注册活跃玩家，CSGO玩家首选平台，更有机会与知名主播职业选手同台竞技。
            </p>
          </li>
          <li className="content-modal2-item item1">
            <i className="i-second"></i>
            <p className="txt1">全新反作弊系统</p>
            <p className="txt2">
              自主研发的反作弊系统，采用最新反作弊技术，外加游戏内举报投票功能，全面保护您的游戏体验。
            </p>
          </li>
          <li className="content-modal2-item item2">
            <i className="i-third"></i>
            <p className="txt1">128tick竞赛级服务器</p>
            <p className="txt2">
              128tick 竞赛级服务器，给您带来不输大赛的丝滑游戏体验。
            </p>
          </li>
          <li className="content-modal2-item item3">
            <i className="i-fourth"></i>
            <p className="txt1">丰富的数据统计</p>
            <p className="txt2">
              专业全面的游戏数据分析，帮助你全面回顾整场对局，给出专业的分析结果。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Third;
