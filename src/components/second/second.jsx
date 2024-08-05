"use client";

import React, { useState, useRef, useEffect } from "react";
import localFont from "next/font/local";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./second.css";

const myFont = localFont({ src: "./../../../public/fonts/PingFang.ttf" });

export default function App() {
  const [firstTabActive, setFirstTabActive] = useState(true);
  const [secondTabActive, setSecondTabActive] = useState(false);
  const [thirdTabActive, setThirdTabActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const swiperRef = useRef(null);
  const showModalRef = useRef(null);

  const toggleHoverFirst = () => {
    setFirstTabActive(true);
    setSecondTabActive(false);
    setThirdTabActive(false);
    swiperRef.current.slideTo(1, 1000);
  };

  const toggleHoverSecond = () => {
    setFirstTabActive(false);
    setSecondTabActive(true);
    setThirdTabActive(false);
    swiperRef.current.slideTo(2, 1000);
  };

  const toggleHoverThird = () => {
    setFirstTabActive(false);
    setSecondTabActive(false);
    setThirdTabActive(true);
    swiperRef.current.slideTo(3, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(showModalRef.current);
  }, []);

  return (
    <div className={`content-modal1 ${myFont.className}`}>
      <div ref={showModalRef}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          initialSlide={1}
          speed={1000}
          slidesPerView={1}
          allowTouchMove={false}
          wrapperClass={
            isVisible
              ? "swiper-wrapper content-wrapper show-mod"
              : "swiper-wrapper content-wrapper"
          }
          className="content-swiper1"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide
            className={
              firstTabActive
                ? "content-slide-0 content-slide-active"
                : "content-slide-0"
            }
          >
            <div className="text-wrap">
              <p>
                平时无论直播还是和朋友开黑，玩5E优先匹配是最佳选择，遇到作弊的概率肯定会低很多，毕竟阿里云的人脸识别不是每个作弊者都敢做的，一个人脸信息被封，用这个人脸信息绑定的所有账号都会被封。
              </p>
              <i className="quotes"></i>
              <i className="quotes1"></i>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={
              secondTabActive
                ? "content-slide-1 content-slide-active"
                : "content-slide-1"
            }
          >
            <div className="text-wrap">
              <p>
                对职业选手来说，游戏的稳定性是非常重要的，5E的128tick超高配竞赛级服务器真的给我带来了不输大赛时的游戏感受。
                <br />
                5E平台的天梯榜单与5EPL榜单都已经成为了最有公信力的玩家实力证明，是普通玩家走上职业道路的敲门砖。
              </p>
              <i className="quotes"></i>
              <i className="quotes2"></i>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={
              thirdTabActive
                ? "content-slide-2 content-slide-active"
                : "content-slide-2"
            }
          >
            <div className="text-wrap">
              <p>
                5E平台长时间为各大赛事主办方举办比赛并提供技术服务支持，并且拥有完整赛事生态，从5EPL-C&5EPL、到5E全民杯邀请赛以及月赛，再到世界顶尖战队参与的Funspark
                Ulti，热衷电竞的玩家们也赶紧来5E平台参赛吧！
              </p>
              <i className="quotes"></i>
              <i className="quotes3"></i>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="showModal">
        <ul style={{ listStyle: "none" }}>
          <li
            className={firstTabActive ? "item active" : "item"}
            onMouseEnter={toggleHoverFirst}
          >
            <div className="posr">
              <div className="item-right">
                <p>各大直播平台知名主播常驻</p>
                <p>Best CS:GO streamers pick 5E Arena!</p>
              </div>
            </div>
          </li>
          <li
            className={secondTabActive ? "item active" : "item"}
            onMouseEnter={toggleHoverSecond}
          >
            <div className="posr">
              <div className="item-right">
                <p>国内知名战队现已入驻</p>
                <p style={{ width: "247px" }}>
                  Best Chinese CS:GO teams compete&train on 5E Arena!
                </p>
              </div>
            </div>
          </li>
          <li
            className={thirdTabActive ? "item active" : "item"}
            onMouseEnter={toggleHoverThird}
          >
            <div className="posr">
              <div className="item-right">
                <p>CSGO赛事首选合作伙伴</p>
                <p style={{ width: "235px" }}>
                  The choice from Best Esports-Organizers.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
