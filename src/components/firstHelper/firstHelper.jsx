import react, { useMemo } from "react";
import styles from "./firstHelper.module.css";
import Image from "next/image";
import logo from "../../../public/img/logo5e.png";
import logo1 from "../../../public/img/text.png";
import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({ src: "./../../../public/fonts/PingFang.ttf" });

const FirstHelper = ({ url }) => {
  const els = useMemo(() => {
    return (
      <div className={styles.newClient}>
        <div className={styles.client_bg1}></div>
        <div className={styles.client_wrap}>
          <div className={styles.client_bg2}></div>
          <div className={styles.introduce_client}>
            <div className={styles.img_cont}>
              <Image className={styles.logo5e} src={logo} alt="logo" />
              <Image className={styles.logo5e1} src={logo1} alt="logo" />
            </div>
            <p className={`${styles.subtitle} ${myFont.className}`}>
              与外国人一起玩的《反恐精英 2》游戏服务器
            </p>
            <a href={url.toString()} scroll={undefined}>
              <div className={styles.button}>开始游戏</div>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <>{els}</>;
};

export default FirstHelper;
