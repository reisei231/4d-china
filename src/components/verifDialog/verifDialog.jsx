"use client";

import ThirdErrorContent from "../thirdErrorContent/thirdErrorContent";
import LoadingErrorContent from "../LoadingErrorContent/LoadingErrorContent";
import FirstErrorContent from "../firstErrorContent/firstErrorContent";
import SecondErrorContent from "../secondErrorContent/secondErrorContent";
import FourthErrorContent from "../fourthErrorContent/fourthErrorContent";
import FifthErrorContent from "../fifthErrorContent/fifthErrorContent";
import { useState, useEffect } from "react";
import GetGuest from "@/actions/getGuest";
import Image from "next/image";
import logo from "../../../public/img/text.png";

const VerifDialog = ({user}) => {

  const {id: userId} = user;

  const [errorCode, setErrorCode] = useState(null);
  const [errorCodeChanged, setErrorCodeChanged] = useState(false);
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setErrorCode(localStorage.getItem("lastErr"));
    setRendered(
      localStorage.getItem("rendered") === null
        ? false
        : localStorage.getItem("rendered")
    );
    const timeoutId = setTimeout(() => {
      localStorage.setItem("rendered", true);
    }, 15000);
    const timer = setInterval(async () => {
      const newErrorCode = await GetGuest();
      if (newErrorCode != errorCode) {
        setErrorCode(newErrorCode);
        localStorage.setItem("lastErr", newErrorCode);
        localStorage.setItem("rendered", false);
        setErrorCodeChanged(true);
        if (localStorage.getItem("end_date") != null)
          localStorage.removeItem("end_date");
      }
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(timer);
    };
  });

  return (
    <div className="fixed z-10 top-0 left-0 bg-transparent border-none h-full w-full overflow-y-auto text-white">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative top-[200px] mx-auto mb-[200px] w-full max-w-[900px]  px-32 bg-background rounded-md shadow-md z-10">
        <div className="flex justify-between items-start">
          <Image
            className="absolute top-2.5 left-2.5 h-8 w-auto"
            src={logo}
            alt="cs:go专业赛事对战平台"
          />
        </div>
        {errorCode == "1" ? (
          <FirstErrorContent
            userId={userId}
            errorCodeChanged={errorCodeChanged}
            rendered={rendered}
          />
        ) : errorCode == "2" ? (
          <SecondErrorContent
            userId={userId}
            errorCodeChanged={errorCodeChanged}
          />
        ) : errorCode == "3" ? (
          <ThirdErrorContent
            userId={userId}
            errorCodeChanged={errorCodeChanged}
            rendered={rendered}
          />
        ) : errorCode == "4" ? (
          <FourthErrorContent
            userId={userId}
            errorCodeChanged={errorCodeChanged}
            rendered={rendered}
          />
        ) : errorCode == "5" ? (
          <FifthErrorContent
            userId={userId}
            errorCodeChanged={errorCodeChanged}
          />
        ) : (
          <LoadingErrorContent userId={userId} />
        )}
      </div>
      <div className="relative h-[200px]"></div>
    </div>
  );
};

export default VerifDialog;
