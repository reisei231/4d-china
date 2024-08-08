"use client"

import { useContext, useState } from "react";
import { HideOverflow } from "@/utils/hideOverflow";
import CheckDialog from "../dialog/dialog";
import VerifDialog from "../verifDialog/verifDialog";
import { ModalContext } from "../../../context/modal.context";

export default function MainModal({children, forceOpen = false}) {
  const { isModalOpen, showModal, hideModal } = useContext(ModalContext)

  return (
    <>
    {(isModalOpen || forceOpen) && (
      <>
        <HideOverflow />
        {children}
        {/* <CheckDialog servers={servers}/> */}
        {/* <VerifDialog/> */}
      </>
    )}
    </>
  )
}