"use client";

import LoadingFlash from "../loadingFlash/loadingFlash";
import { useEffect, useState } from "react";

import React from "react";

const FifthErrorContent = ({ userId, errorCodeChanged, rendered }) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fith, setFith] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setFirst(true);
    }, 500);
    const timeout2 = setTimeout(() => {
      setSecond(true);
    }, 1000);
    const timeout3 = setTimeout(() => {
      setThird(true);
    }, 1500);
    const timeout4 = setTimeout(() => {
      setFourth(true);
    }, 2000);
    const timeout5 = setTimeout(() => {
      setFith(true);
    }, 2500);
    const timeoutErr = setTimeout(() => {
      setErr(true);
    }, 3200);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeoutErr);
    };
  });

  return (
    <div className=" max-w-[600px] mx-auto px-[40px] py-[60px] w-full">
      <div className=" mx-auto mb-[40px] text-center">
        <p className="m-auto top-[50%] mb-[10px]  text-sm">
          您的 ID：
          <span>{userId}</span>
        </p>
        {errorCodeChanged || rendered == "false" ? (
          <>
            {first ? (
              <div className="flex items-center mb-[15px] mt-[30px]">
                <p className="text-left">
                  有CS2：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[15px] mt-[30px]">
                <p className="text-left">
                  有CS2：
                  <span className="inline-block w-[80px] text-gray-200">
                    检查中
                  </span>
                </p>
                <LoadingFlash />
              </div>
            )}
            {second ? (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  无 VAC 禁令：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  无 VAC 禁令：
                  <span className="inline-block w-[80px] text-gray-200">
                    检查中
                  </span>
                </p>
                <LoadingFlash />
              </div>
            )}
            {third ? (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  无Steam限制：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  无Steam限制：
                  <span className="inline-block w-[80px] text-gray-200">
                    检查中
                  </span>
                </p>
                <LoadingFlash />
              </div>
            )}
            {fourth ? (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  最近玩过游戏：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  最近玩过游戏：
                  <span className="inline-block w-[80px] text-gray-200">
                    检查中
                  </span>
                </p>
                <LoadingFlash />
              </div>
            )}
            {fith ? (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  保护您的个人库存：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  保护您的个人库存：
                  <span className="inline-block w-[80px] text-gray-200">
                    检查中
                  </span>
                </p>
                <LoadingFlash />
              </div>
            )}
            {err ? (
              <div className="flex items-center mb-[60px]">
                <p className="text-left">
                  违反5E对战平台规则：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[60px]">
                <p className="text-left">
                  违反5E对战平台规则：
                  <span className="inline-block w-[80px] text-gray-200">
                    检查中
                  </span>
                </p>
                <LoadingFlash />
              </div>
            )}
            {err ? (
              <div className="p-[10px] m-[-20px] text-left text-[14px] border-2 border-white">
                <p className="text-left">您已成功通过验证。请等待其他玩家。</p>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center mb-[15px] mt-[30px]">
              <p className="text-left">
                有CS2：
                <span className="inline-block w-[80px] text-green-600">
                  完成
                </span>
              </p>
            </div>

            <div className="flex items-center mb-[15px]">
              <p className="text-left">
                无 VAC 禁令：
                <span className="inline-block w-[80px] text-green-600">
                  完成
                </span>
              </p>
            </div>
            <div className="flex items-center mb-[15px]">
              <p className="text-left">
                无Steam限制：
                <span className="inline-block w-[80px] text-green-600">
                  完成
                </span>
              </p>
            </div>

            <div className="flex items-center mb-[15px]">
              <p className="text-left">
                最近玩过游戏：
                <span className="inline-block w-[80px] text-green-600">
                  完成
                </span>
              </p>
            </div>

            <div className="flex items-center mb-[15px]">
              <p className="text-left">
                保护您的个人库存：
                <span className="inline-block w-[80px] text-green-600">
                  完成
                </span>
              </p>
            </div>

            <div className="flex items-center mb-[60px]">
              <p className="text-left">
                违反5E对战平台规则：
                <span className="inline-block w-[80px] text-green-600">
                  完成
                </span>
              </p>
            </div>
            <div className="p-[10px] m-[-20px] text-left text-[14px] border-2 border-white">
              <p className="text-left">您已成功通过验证。请等待其他玩家。</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FifthErrorContent;
