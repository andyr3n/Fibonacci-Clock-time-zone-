import React from 'react';
import Clock from '../models/Clock';

const ClockDisplay = ({ date }) => {
  const angle = Clock.calculateAngle(date);

  return (
    <div className="clock-angle">
      <h3>Angle between clock hands:</h3>
      <p>{angle}°</p>
    </div>
  );
};

export default ClockDisplay;
