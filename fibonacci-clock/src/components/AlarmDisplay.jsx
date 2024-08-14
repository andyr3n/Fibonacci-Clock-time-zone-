import React, { useState, useEffect } from 'react';
import FibonacciAlarm from '../models/FibonacciAlarm';

const AlarmDisplay = () => {
  const [alarm, setAlarm] = useState(new FibonacciAlarm());
  const [timeUntilAlarm, setTimeUntilAlarm] = useState(alarm.timeUntilNextAlarm());
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = alarm.timeUntilNextAlarm();
      setTimeUntilAlarm(remainingTime);
      setPercentage((remainingTime / (alarm.sequence[alarm.currentIndex - 1] * 60 * 60 * 1000)) * 100);

      if (remainingTime <= 0) {
        alarm.triggerNextAlarm();
        alert("Time's up! Next alarm is scheduled.");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarm]);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="alarm-display">
      <h3>Time until next alarm:</h3>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="time-display">{formatTime(timeUntilAlarm)}</div>
      </div>
    </div>
  );
};

export default AlarmDisplay;

