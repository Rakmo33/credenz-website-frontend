import React, { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
  const [year, setYear] = useState(new Date().getFullYear());

  const calculateTimeLeft = () => {
    let difference = +new Date(`12/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setYear(new Date().getFullYear());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className='rounded bg-gradient-1 text-white shadow p-5 text-center mb-5'>
      <p
        className='mb-4 font-weight-bold text-uppercase'
        style={{ fontSize: 30, color: "black" }}>
        Credenz 20 starts in
      </p>
      <div
        id='clock-b'
        className='countdown-circles d-flex flex-wrap justify-content-center pt-4'>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
}

export default Timer;
