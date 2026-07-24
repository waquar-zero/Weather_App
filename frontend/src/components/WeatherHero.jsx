import WeatherIcon from "./WeatherIcon";
import { motion } from "framer-motion";

function WeatherHero({ weather, error }) {
  if (error) {
    return (
      <motion.div
        className="weather-hero"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>{error}</h2>
      </motion.div>
    );
  }

  if (!weather) {
    return (
      <motion.div
        className="weather-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Search for a city</h1>
        <p>Your weather information will appear here.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="weather-hero"
      key={weather.location.name}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="hero-left">

        <motion.h2
          className="temperature"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {weather.current.temp_c}°
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {weather.location.name.toUpperCase()}
        </motion.h1>

        <motion.p
          className="condition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {weather.current.condition.text}
        </motion.p>

        <motion.p
          className="location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {weather.location.region}, {weather.location.country}
        </motion.p>

        <motion.div
          className="extra-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>Feels Like {weather.current.feelslike_c}°</span>
          <span>Humidity {weather.current.humidity}%</span>
          <span>Wind {weather.current.wind_kph} km/h</span>
        </motion.div>

        <motion.p
          className="time"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Local Time: {weather.location.localtime}
        </motion.p>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }}
      >
        <WeatherIcon
          condition={weather.current.condition.text}
          isDay={weather.current.is_day}
        />
      </motion.div>
    </motion.div>
  );
}

export default WeatherHero;