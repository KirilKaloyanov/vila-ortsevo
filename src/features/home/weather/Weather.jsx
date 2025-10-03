import useFetchMeteo from "../../../services/useFetchMeteo.js";

import s from "./Weather.module.css";

export default function Weather() {
  const { data, isLoading } = useFetchMeteo();

  let currentWeather = null;

  if (data) currentWeather = data.current;

  function weatherIcon(data) {
    if (data.precipitation > 0) return "cloudy_snowing";
    if (data.cloud_cover > 50) return "wb_cloudy";
    if (data.is_day == 1) return "sunny";
    return "nights_stay";
  }

  if (!isLoading && currentWeather)
    return (
      <div>
        {currentWeather.temperature_2m}
        <sup className={s.superText}>&deg;C</sup>
        <span className={"material-icons " + s.icon}>
          {weatherIcon(currentWeather)}
        </span>
      </div>
    );

  return null;
}
