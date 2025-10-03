import { useQuery } from "@tanstack/react-query";

//hourly=temperature_2m&forecast_days=3
const basicUrl = "https://api.open-meteo.com/v1/";
const infoType = "forecast?";
const location = "latitude=41.96&longitude=23.73&";
const forecastData = "daily=temperature_2m_max,temperature_2m_min,cloud_cover_max,precipitation_probability_max&";
const timezone = "timezone=Africa%2FCairo&";
const forecastDays = "forecast_days=3";

const endpoint = basicUrl + infoType + location + forecastData + timezone + forecastDays;

const useFetchForecast = () => {
  return useQuery({
    queryKey: ["forecast"],
    queryFn: () => {
      return fetch(endpoint)
        .then(
          (res) => {
            if (!res.ok) throw new Error("Request failed.");
            return res.json();
          }
        )
        .catch((err) =>
          console.log(
            "Error in request, e.g. too many requests for today.",
            err
          )
        );
    },
  });
};

export default useFetchForecast;
