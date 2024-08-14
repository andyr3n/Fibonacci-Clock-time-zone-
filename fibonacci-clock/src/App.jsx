import React from 'react';
import CityTime from './components/CityTime';
import City from './models/City';

const App = () => {
  const cities = [
    new City('Vancouver', -7),
    new City('New York', -4),
    new City('Tokyo', 9)
  ];

  return (
    <div className="app">
      <h1>World Clock</h1>
      <div className="city-times">
        {cities.map((city, index) => (
          <CityTime key={index} city={city} />
        ))}
      </div>
    </div>
  );
};

export default App;

