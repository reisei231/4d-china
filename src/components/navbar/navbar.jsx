"use client";

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import event_data from "../../../public/img/event_data.png";
import event_new from "../../../public/img/event_new.png";
import localFont from "next/font/local";
import { PubgIcon } from "../svgs";
import { CsIcon } from "../svgs";
import { ChessIcon } from "../svgs";
import { Logo5eIcon } from "../svgs";
import { Logo5eIcon1 } from "../svgs";
//top_bar .nav .nav_item
//{`${styles.projects-pd-text} ${styles.projects-pd-subdetail}`}

const myFont = localFont({ src: "./../../../public/fonts/PingFang.ttf" });

const Nav = () => {
  const [scrolled, setscrolled] = useState(false);

  const onScroll = (event) => {
    const { scrollY } = window;
    if (scrollY > 20) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <div
      id="topbar"
      className={
        scrolled
          ? `${styles.topbar} ${styles.scroll} ${myFont.className}`
          : `${styles.topbar} ${myFont.className}`
      }
    >
      <h1 className={styles.nomargin}>
        <a href="https://arena.5eplay.com/" className={styles.logo}></a>
      </h1>
      <a
        href="https://www.5earena.com/"
        className={styles.logo_change}
        target="_blank"
        title="打开国际版"
      ></a>
      <div className={styles.nav}>
        <div className={styles.nav_item}>
          <i>
            <Logo5eIcon1 className={styles.product_icon1} />
          </i>
          <span className={styles.til_text}>Products</span>
          <i className={styles.show_btn}></i>
          <div className={styles.dropdown_tips}>
            <a
              href="http://csgo.5eplay.com/"
              className={styles.dropdown_tips_item}
            >
              <CsIcon className={styles.product_icon} />
              <span style={{ marginLeft: "-25px" }}>CSGO</span>
            </a>
            <a
              href="https://arena.5eplay.com/"
              className={styles.dropdown_tips_item}
            >
              <Logo5eIcon className={styles.product_icon} />
              <span style={{ marginLeft: "-25px" }}>对战平台</span>
            </a>
            <a
              href="https://www.pubg8x.com/"
              className={styles.dropdown_tips_item}
            >
              <PubgIcon className={styles.product_icon} />
              <span style={{ marginLeft: "-25px" }}>PUBG</span>
            </a>
            <a
              href="https://arena.5eplay.com/act/5eautochess"
              className={styles.dropdown_tips_item}
            >
              <ChessIcon className={styles.product_icon} />
              <span style={{ marginLeft: "-25px" }}>多多自走棋</span>
            </a>
          </div>
        </div>
        <div className={styles.nav_item}>
          <span>Guide</span>
          <i className={styles.show_btn}></i>
          <div className={styles.dropdown_tips_navigation}>
            <a
              className={styles.dropdown_tips_nav}
              href="https://event.5eplay.com/stats"
            >
              <span>Stats</span>
            </a>
            <a
              className={styles.dropdown_tips_nav}
              href="https://event.5eplay.com/matches"
            >
              <span>Event</span>
            </a>
            <a
              className={styles.dropdown_tips_nav}
              href="https://arena.5eplay.com/banned"
            >
              <span>Ban List</span>
            </a>
            <a
              className={styles.dropdown_tips_nav}
              href="http://csgo.5eplay.com/forum/group/1"
            >
              <span>Community</span>
            </a>
            <a
              className={styles.dropdown_tips_nav}
              href="https://arena.5eplay.com/tournament"
            >
              <span>Tournament</span>
            </a>
            <a
              className={styles.dropdown_tips_nav}
              href="https://arena.5eplay.com/data/5epl"
            >
              <span>5EPL</span>
            </a>
            <a
              className={styles.dropdown_tips_nav}
              href="http://vs.5eplay.com/"
            >
              <span>CS1.6 Arena</span>
            </a>
            <a className={styles.dropdown_tips_nav}>
              <span>Mall(改造中)</span>
            </a>
            <a
              className={styles.dropdown_tips_nav}
              href="http://csgo.5eplay.com/5erepeak"
            >
              <span>5E REPEAK</span>
            </a>
          </div>
        </div>
        <a href="https://arena.5eplay.com/help" className={styles.nav_item}>
          <span>Support</span>
        </a>
        <a href="/" className={styles.nav_item_active}>
          <span>与外国人一起游戏</span>
        </a>
        <a
          target="_blank"
          href="https://event.5eplay.com/events"
          className={styles.nav_item}
        >
          <Image src={event_data} alt="event data" />
          <Image className={styles.new} src={event_new} alt="event new" />
        </a>
      </div>
      <div className={styles.top_menu_right}>
        <div>
          <a
            className={styles.down_app}
            rel="external nofollow"
            href="http://csgo.5eplay.com/app"
            target="_blank"
          >
            <i style={{ marginRight: "10px" }}></i>
            APP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
