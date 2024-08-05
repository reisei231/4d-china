import React from "react";

const SecondErrorContent = ({ userId }) => {
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
        <div className="items-center mb-[15px]">
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
          <p className="text-left">尝试次数过多。请稍后再试。</p>
        </div>
      </div>
    </div>
  );
};

export default SecondErrorContent;
