"use client"

import {createGuest} from "@/app/actions";
import First from "@/components/first/first";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function SuccessPage() {
  
  const router = useRouter()
  useEffect(() => {
    createGuest().then(() => router.push('/connect'))
  },[])

  return(<><First/></>)
};

