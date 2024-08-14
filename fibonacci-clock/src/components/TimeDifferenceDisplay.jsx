import React from 'react';
import Clock from '../models/Clock';

const TimeDifferenceDisplay = ({ date }) => {
  const angle = Clock.calculateAngle(date);

  return (
    <div className="time-difference-display">
      <h3>Angle between clock hands:</h3>
      <p>{angle}°</p>
    </div>
  );
};

export default TimeDifferenceDisplay;
