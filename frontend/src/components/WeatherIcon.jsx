import {
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudFog,
  CloudSun,
} from "lucide-react";

function WeatherIcon({ condition, isDay }) {
  const text = condition.toLowerCase();

  if (text.includes("sunny"))
    return <Sun size={220} strokeWidth={1.5} />;

  if (text.includes("clear"))
    return isDay ? (
      <Sun size={220} strokeWidth={1.5} />
    ) : (
      <Moon size={220} strokeWidth={1.5} />
    );

  if (text.includes("partly"))
    return <CloudSun size={220} strokeWidth={1.5} />;

  if (text.includes("cloud"))
    return <Cloud size={220} strokeWidth={1.5} />;

  if (text.includes("rain"))
    return <CloudRain size={220} strokeWidth={1.5} />;

  if (text.includes("thunder"))
    return <CloudLightning size={220} strokeWidth={1.5} />;

  if (text.includes("snow"))
    return <CloudSnow size={220} strokeWidth={1.5} />;

  if (text.includes("mist") || text.includes("fog"))
    return <CloudFog size={220} strokeWidth={1.5} />;

  return <Cloud size={220} strokeWidth={1.5} />;
}

export default WeatherIcon;
