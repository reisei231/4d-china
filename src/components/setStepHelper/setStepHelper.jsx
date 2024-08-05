"use client";

import { SetStep } from "@/actions/SetStep";
import { useEffect } from "react";

const SetStepHelper = () => {
  useEffect(() => {
    const logic = async () => {
      await SetStep("false");
    };
    logic();
  });
};

export default SetStepHelper;
