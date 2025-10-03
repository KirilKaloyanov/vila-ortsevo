import useFetchForecast from "../../services/useFetchForecast";
import formatDate from "../../utils/formatDate";

import s from "./Forecast.module.css";

export default function Forecast() {
  const { data, isLoading } = useFetchForecast();

  console.log(isLoading);
  console.log(data);

  const inputs = [0, 1, 2];

  function roundNumber(temp) {
    return Math.floor(Math.round(temp));
  }

  if (!data || isLoading) return null;

  const days = data.daily.time;
  const max_temps = data.daily.temperature_2m_max;
  const min_temps = data.daily.temperature_2m_min;

  return (
    <div className="backgroundWhite">
      <div className="main">
        <h3>Прогноза за времето</h3>
        <div className={s.forecast}>
          {inputs.map((index) => {
            return (
              <div key={days[index]} className={s.forecastDay}>
                <div className={s.date}>{formatDate(days[index])}</div>
                {util(data, index)}
                <div className={s.temp}>
                  {roundNumber(min_temps[index])}&deg;C /{" "}
                  {roundNumber(max_temps[index])}&deg;C
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function util(data, index) {
  function weatherIcon(data, index) {
    if (data.daily.precipitation_probability_max[index] > 50)
      return "cloudy_snowing";
    if (data.daily.cloud_cover_max > 50) return "wb_cloudy";
    return "sunny";
  }

  return (
    <div>
      <span className={"material-icons " + s.icon}>
        {weatherIcon(data, index)}
      </span>
    </div>
  );

  return null;
}
