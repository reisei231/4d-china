"use client";

import Countdown from "react-countdown";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [data, setData] = useState(
    { date: Date.now(), delay: 1800000 } //60 seconds
  );
  const wantedDelay = 1800000; //60 s

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <span className="text-red-500">00:00</span>;
    } else {
      // Render a countdown
      return (
        <span className="text-red-500">
          {minutes / 10 < 1 ? `0${minutes}` : minutes}:
          {seconds / 10 < 1 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  useEffect(() => {
    const savedDate = localStorage.getItem("end_date");
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      //Do you reach the end?
      if (delta > wantedDelay) {
        //Yes we clear uour saved end date
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        //No update the end date
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  return (
    <div className="border-2 border-red-600 p-1 ml-[-32px]">
      <Countdown
        date={data.date + data.delay}
        renderer={renderer}
        onStart={(delta) => {
          //Save the end date
          if (localStorage.getItem("end_date") == null)
            localStorage.setItem(
              "end_date",
              JSON.stringify(data.date + data.delay)
            );
        }}
        onComplete={() => {
          if (localStorage.getItem("end_date") != null)
            localStorage.removeItem("end_date");
        }}
      />
    </div>
  );
};

export default CountdownTimer;
