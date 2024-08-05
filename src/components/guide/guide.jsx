"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import localFont from "next/font/local";
import guide_icon1 from "../../../public/img/guide-icon1.png";
import guide_icon2 from "../../../public/img/guide-icon2.png";
import guide_icon3 from "../../../public/img/guide-icon3.png";
import guide_app from "../../../public/img/guide-app.png";
import "./guide.css";

const myFont = localFont({ src: "./../../../public/fonts/PingFang.ttf" });

const Guide = () => {
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
    <div className="guide-modal">
      <div
        ref={showModalRef}
        className={
          isVisible ? "guide-modal-content showModel" : "guide-modal-content"
        }
      >
        <div className="guide-item" style={{ width: "398px" }}>
          <p>
            <Image className="img1" src={guide_icon1} alt="guide icon" />
            <span className="guide-txt1">网站导航</span>
          </p>
          <div className={myFont.className} style={{ marginTop: "30px" }}>
            <div className="guide-href">
              <a href="https://arena.5eplay.com/data" target="_blank">
                天梯排行榜
              </a>
            </div>
            <div className="guide-href">
              <a href="https://arena.5eplay.com/data/5epl" target="_blank">
                5EPL
              </a>
            </div>
            <div className="guide-href">
              <a href="https://arena.5eplay.com/mall" target="_blank">
                5E商城
              </a>
            </div>
            <div className="guide-href">
              <a href="https://arena.5eplay.com/banned" target="_blank">
                封禁榜
              </a>
            </div>
            <div className="guide-href">
              <a href="https://arena.5eplay.com/help" target="_blank">
                在线帮助
              </a>
            </div>
            <div className="guide-href">
              <a href="https://arena.5eplay.com/tournament" target="_blank">
                5E锦标赛
              </a>
            </div>
            <div className="guide-href">
              <a href="https://csgo.5eplay.com/forum/group/1" target="_blank">
                5E社区
              </a>
            </div>
          </div>
        </div>
        <div className="guide-item">
          <p>
            <Image className="img1" src={guide_icon2} alt="guide icon 2" />
            <span className="guide-txt1">合作伙伴</span>
          </p>
          <div>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              allowTouchMove={true}
              wrapperClass="swiper-wrapper guide-content-wrapper"
              className="content-swiper2"
            >
              <SwiperSlide className="guide-first-slide"></SwiperSlide>
              <SwiperSlide className="guide-second-slide"></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="guide-item">
          <p>
            <Image
              className="img1"
              src={guide_icon3}
              alt="guide icon 3"
            ></Image>
            <span className="guide-txt1">5EPlay App</span>
          </p>
          <Image className="img2" src={guide_app}></Image>
        </div>
      </div>
    </div>
  );
};

export default Guide;
