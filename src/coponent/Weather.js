import React from "react";
import MinMax from "./MinMax";

const Weather = ({ name, weather, temperature }) => {
  const roundOff = (value) => {
    return parseFloat(value.toFixed(2));
  };
  return (
    <div className="container text-center">
      {name && weather && temperature && (
        <div className="cards">
          <h1>{name}</h1>
          <h5 className="py-4">
            <i className="wi wi-day-sunny display-1"></i>
          </h5>
          <h1 className="py-2">{roundOff(temperature.temp)}&deg;</h1>
          <MinMax
            min={roundOff(temperature.temp_min)}
            max={roundOff(temperature.temp_max)}
          />
          {weather.map((weather) => (
            <h4 key={weather.id} className="py-3 text-capitalize">
              {weather.description}
            </h4>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
