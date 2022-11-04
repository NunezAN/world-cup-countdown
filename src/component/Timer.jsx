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

    return `${timerDays < 10 ? "0" + timerDays : timerDays}d ${timerHours < 10 ? "0" + timerHours : timerHours}h ${
      timerMinutes < 10 ? "0" + timerMinutes : timerMinutes
    }m ${timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}s`;
  };
  startTimer();
  return (
    <div>
     <span className="text-7xl">{startTimer()}</span>
    </div>
  );
};

export default Timer;
