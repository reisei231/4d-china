"use client";

import { useEffect } from "react";

export const ShowOverflow = () => {
  useEffect(() => {
    document.body.classList.remove("overflow-y-hidden");

    const topbar = document.getElementById("topbar");
    topbar.style.removeProperty("background");
    topbar.style.zIndex = "99";
  }, []);

  return null;
};
