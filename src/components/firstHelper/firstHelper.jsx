"use client"

import { useContext, useState } from "react";
import styles from "./firstHelper.module.css";
import Image from "next/image";
import logo from "../../../public/img/logo5e.png";
import logo1 from "../../../public/img/text.png";

import { ModalContext } from "../../../context/modal.context";
const FirstHelper = () => {
  const { isModalOpen, showModal, hideModal } = useContext(ModalContext)

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
            <p className={`${styles.subtitle}`}>
              与外国人一起玩的《反恐精英 2》游戏服务器
            </p>
              <div className={styles.button} onClick={showModal}>开始游戏</div>
          </div>
        </div>
      </div>
      
    );
};

export default FirstHelper;
