import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h2>

      <p className="text-4xl font-bold mt-2">{weather.main.temp}°C</p>

      <p className="capitalize mt-2">{weather.weather[0].description}</p>

      <img
        className="mx-auto mt-2"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
}

export default WeatherCard;
