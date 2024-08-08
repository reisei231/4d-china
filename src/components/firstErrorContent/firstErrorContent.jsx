"use client";

import LoadingFlash from "../loadingFlash/loadingFlash";
import { useEffect, useState } from "react";
import styles from "../fourthErrorContent/fourthErrorContent.module.css";
import React from "react";
import { deleteCookies } from "@/actions/deleteCookies";
const FirstErrorContent = ({ userId, errorCodeChanged, rendered }) => {
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
        <div className="flex items-center justify-center mb-[10px] whitespace-nowrap">
          <p className="text-center mb-[15px]">您的帐户尚未验证</p>
        </div>
        {errorCodeChanged || rendered == "false" ? (
          <>
            {first ? (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  有CS2：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[15px]">
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
                  <span className="inline-block w-[80px] text-red-500">
                    错误
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
                <p className="text-left">
                  为了在我们的平台上玩游戏，您的帐户必须满足以下要求：
                </p>
                <p className="text-left mb-[5px]">
                  1. 在Steam上的等级必须达到10级或以上。
                </p>
                <p className="text-left mb-[5px]">
                  2. 必须激活 Counter-Strike 2 Prime状态升级。
                </p>
                <p className="text-left mb-[5px]">
                  3. 必须启用Steam手机身份验证器。
                </p>
                <p className="text-left mb-[5px]">
                  4. 必须能够进行交易，没有Steam市场的限制。
                </p>
                <p className="text-left mb-[5px]">
                  5. 在过去两周内至少要有10小时的游戏时间。
                </p>
                <div className="p-[10px] m-[-20px] text-left text-[14px]">
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
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center mb-[15px]">
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
                <span className="inline-block w-[80px] text-red-500">错误</span>
              </p>
            </div>
            <div className="p-[10px] m-[-20px] text-left text-[14px] border-2 border-white">
              <p className="text-left">
                为了在我们的平台上玩游戏，您的帐户必须满足以下要求：
              </p>
              <p className="text-left mb-[5px]">
                1. 在Steam上的等级必须达到10级或以上。
              </p>
              <p className="text-left mb-[5px]">
                2. 必须激活 Counter-Strike 2 Prime状态升级。
              </p>
              <p className="text-left mb-[5px]">
                3. 必须启用Steam手机身份验证器。
              </p>
              <p className="text-left mb-[5px]">
                4. 必须能够进行交易，没有Steam市场的限制。
              </p>
              <p className="text-left mb-[5px]">
                5. 在过去两周内至少要有10小时的游戏时间。
              </p>
              <div className="p-[10px] m-[-20px] text-left text-[14px]">
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
            
          </>
        )}
        
      </div>
    </div>
  );
};

export default FirstErrorContent;
