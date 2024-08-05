import React from "react";
import styles from "./fourthErrorContent.module.css";
import { deleteCookies } from "@/actions/deleteCookies";
import { useRouter } from "next/navigation";

const FourthErrorContent = ({ userId }) => {
  const router = useRouter();

  return (
    <div className=" max-w-[600px] mx-auto px-[40px] py-[60px] w-full">
      <div className=" mx-auto mb-[40px]">
        <p className="m-auto top-[50%] mb-[10px]  text-sm text-center">
          您的 ID：
          <span>{userId}</span>
        </p>
        <div className="flex items-center justify-center mb-[10px] whitespace-nowrap"></div>
        <div className="items-center mb-[15px] mt-[30px]">
          <p className="text-left">
            有CS2：
            <span className="inline-block w-[80px] text-red-500">错误</span>
          </p>
        </div>
        <div className="items-center mb-[15px]">
          <p className="text-left">
            无 VAC 禁令：
            <span className="inline-block w-[80px] text-red-500">错误</span>
          </p>
        </div>
        <div className="items-center mb-[15px]">
          <p className="text-left">
            无Steam限制：
            <span className="inline-block w-[80px] text-red-500">错误</span>
          </p>
        </div>
        <div className="items-center mb-[15px]">
          <p className="text-left">
            最近玩过游戏：
            <span className="inline-block w-[80px] text-red-500">错误</span>
          </p>
        </div>
        <div className="items-center mb-[15px]">
          <p className="text-left">
            保护您的个人库存：
            <span className="inline-block w-[80px] text-red-500">错误</span>
          </p>
        </div>
        <div className="items-center mb-[60px]">
          <p className="text-left">
            违反5E对战平台规则：
            <span className="inline-block w-[80px] text-red-500">错误</span>
          </p>
        </div>
        <div className="p-[10px] m-[-20px] text-left text-[14px] border-2 border-white">
          <p className="text-left">
            您的 IP 地址已经注册，请使用您的第一个账户登录。
          </p>
          <button
            onClick={async () => {
              await deleteCookies();
              localStorage.setItem("lastErr", "null");
              localStorage.setItem("rendered", "false");
              router.push("/");
            }}
            className={styles.modalButton}
          >
            回來
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthErrorContent;
