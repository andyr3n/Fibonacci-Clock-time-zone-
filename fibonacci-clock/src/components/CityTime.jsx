import React, { useState, useEffect } from 'react';
import Clock from '../models/Clock';
import FibonacciAlarm from '../models/FibonacciAlarm';
import TimeDifferenceDisplay from './TimeDifferenceDisplay';
import AlarmDisplay from './AlarmDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const CityTime = ({ city }) => {
  const [currentTime, setCurrentTime] = useState(city.getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(city.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className="city-time">
      <h2>{city.name} <FontAwesomeIcon icon={faClock} /></h2>
      <p>{currentTime.toLocaleTimeString()}</p>
      <TimeDifferenceDisplay date={currentTime} />
      <AlarmDisplay />
    </div>
  );
};

export default CityTime;

