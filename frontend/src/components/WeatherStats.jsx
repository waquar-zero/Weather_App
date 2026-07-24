function WeatherStats({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-stats">

      <div className="stat">
        <span>WIND SPEED</span>
        <h3>{weather.current.wind_kph} KM/H</h3>
      </div>

      <div className="stat">
        <span>HUMIDITY</span>
        <h3>{weather.current.humidity}%</h3>
      </div>

      <div className="stat">
        <span>PRESSURE</span>
        <h3>{weather.current.pressure_mb} MB</h3>
      </div>

      <div className="stat">
        <span>VISIBILITY</span>
        <h3>{weather.current.vis_km} KM</h3>
      </div>

    </div>
  );
}

export default WeatherStats;