"use client";

import { useEffect } from "react";

export const HideOverflow = () => {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");

    const topbar = document.getElementById("topbar");
    topbar.style.background = "#1E1E20";
    topbar.style.zIndex = "1";
  }, []);

  return null;
};
