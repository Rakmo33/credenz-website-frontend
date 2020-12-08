import React, { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
  const [year, setYear] = useState(new Date().getFullYear());

  const calculateTimeLeft = () => {
    let difference = +new Date(`12/31/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
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
    let isMounted = true;

    if (isMounted)
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

    return () => {
      isMounted = false;
    };
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    // if (!timeLeft[interval]) {
    //   return 0;
    // }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className='text-white shadow p-5 text-center mb-5'>
      <p
        className='mb-4 font-weight-bold text-uppercase'
        style={{ fontSize: 30, color: "white" }}>
        Credenz 21 starts in
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
