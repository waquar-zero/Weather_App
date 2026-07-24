import RecentSearches from "./components/RecentSearches";
import Sidebar from "./components/Sidebar";
import WeatherStats from "./components/WeatherStats";
import Navbar from "./components/Navbar";
import WeatherHero from "./components/WeatherHero";
import { useState } from "react";
import getBackground from "./utils/getBackground";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  async function searchWeather(city) {
    try {
        setError("");

        const response = await fetch(
            `http://localhost:3000/weather/${city}`
        );

        if (!response.ok)
            throw new Error("City not found");

        const data = await response.json();

        setWeather(data);

        setSearchCount(prev => prev + 1);

    } catch {
        setWeather(null);
        setError("City not found");
    }
}
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
      <Navbar
        setWeather={setWeather}
       />
      <WeatherStats weather={weather} />
      <WeatherHero 
      weather={weather}
      error={error}
       />
      <RecentSearches
      searchCount={searchCount}
      searchWeather={searchWeather}
       />
      </div>

    </div>
  );
}

export default App;
