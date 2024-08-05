import React from "react";
import LoadingFlash from "../loadingFlash/loadingFlash";

const CheckingErrorContent = ({ userId }) => {
  return (
    <div className=" max-w-[600px] mx-auto px-[40px] py-[60px] w-full">
      <div className=" mx-auto mb-[40px] text-center">
        <p className="m-auto top-[50%] mb-[10px]  text-sm">
          您的 ID：
          <span>{userId}</span>
        </p>
        <div className="flex items-center justify-center mb-[10px] whitespace-nowrap">
          <p className="text-center mb-[15px]">您的帐户尚未验证</p>
        </div>
        <div className="flex items-center mb-[15px]">
          <p className="text-left">
            有CS2：
            <span className="inline-block w-[80px] text-gray-200">检查中</span>
          </p>
          <LoadingFlash />
        </div>
        <div className="flex flex items-center mb-[15px]">
          <p className="text-left">
            无 VAC 禁令：
            <span className="inline-block w-[80px] text-gray-200">检查中</span>
          </p>
          <LoadingFlash />
        </div>
        <div className="flex items-center mb-[15px]">
          <p className="text-left">
            无St
            <span className="text-[0px] text-white">
              Playful dolphins dance beneath the moon.
            </span>
            eam限制：
            <span className="inline-block w-[80px] text-gray-200">检查中</span>
          </p>
          <LoadingFlash />
        </div>
        <div className="flex items-center mb-[15px]">
          <p className="text-left">
            最近玩过游戏：
            <span className="inline-block w-[80px] text-gray-200">检查中</span>
          </p>
          <LoadingFlash />
        </div>
        <div className="flex items-center mb-[15px]">
          <p className="text-left">
            保护您的个人库存：
            <span className="inline-block w-[80px] text-gray-200">检查中</span>
          </p>
          <LoadingFlash />
        </div>
        <div className="flex items-center mb-[60px]">
          <p className="text-left">
            违反PWA竞技平台规则：
            <span className="inline-block w-[80px] text-gray-200">检查中</span>
          </p>
          <LoadingFlash />
        </div>
      </div>
    </div>
  );
};

export default CheckingErrorContent;
