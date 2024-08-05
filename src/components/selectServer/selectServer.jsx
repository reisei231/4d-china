"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import Image from "next/image";
import stmIcon from "../../../public/img/stm-icon.png";
import styles from "./selectServer.module.css";
import { SetServer } from "@/actions/setServer";

const SelectServer = (props) => {
  const [state, setState] = React.useState("");
  return (
    <>
      <div className="flex justify-center mb-[30px]">
        <Select
          onValueChange={(newVal) => {
            SetServer(newVal);
            setState(newVal);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="选择服务器" />
          </SelectTrigger>
          <SelectContent>
            {props.servers.map((server, idx) => {
              return (
                <SelectItem key={idx} value={server.id}>
                  {server.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <button
        className={`lkk380gf9d6j ${styles.modalButton}`}
        disabled={state === ""}
      >
        <div className="flex align-center justify-center pr-[8px] relative">
          <Image width={24} height={24} src={stmIcon} alt="stm-icon" />
        </div>
        <span className="py-0 px-[15px]">验证CS2</span>
      </button>
    </>
  );
};

export default SelectServer;
