import React, { useEffect, useState } from "react";

const Timer = () => {
  const worldCupDate = new Date(Date.UTC("2022", "10", "20", "16", "0", "0"));
  const [timeNow, setTimeNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTimeNow(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const startTimer = () => {
    let expirationTimer = worldCupDate - timeNow;
    if (expirationTimer <= 0) {
      return "Game Time";
    }
    const timerDays = parseInt(expirationTimer / (1000 * 60 * 60 * 24));
    const timerHours = parseInt(expirationTimer / (1000 * 60 * 60)%24);
    const timerMinutes = parseInt((expirationTimer / (1000 * 60)) % 60);
    const timerSeconds = parseInt((expirationTimer / 1000) % 60);

    return <span>
    {timerDays < 10 ? "0" + timerDays : timerDays}<span className="text-[#E5C685]">d</span> {timerHours < 10 ? "0" + timerHours : timerHours}<span className="text-[#E5C685]">h</span> {
        timerMinutes < 10 ? "0" + timerMinutes : timerMinutes
    }<span className="text-[#E5C685]">m</span> {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}<span className="text-[#E5C685]">s</span>
    </span>
  };
  startTimer();
  return (
    <div>
     <span className="text-4xl md:text-6xl font-bold">{startTimer()}</span>
    </div>
  );
};

export default Timer;
