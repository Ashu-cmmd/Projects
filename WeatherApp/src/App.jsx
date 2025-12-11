import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

const API_KEY = "YOUR_API_KEY_HERE";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 p-4">
      <div className="bg-white shadow-xl p-6 rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>

        <SearchBar onSearch={fetchWeather} />

        {loading && <Loader />}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}
