import { useQuery } from "@tanstack/react-query";

const basicUrl = "https://api.open-meteo.com/v1/";
const infoType = "forecast?";
const location = "latitude=41.96&longitude=23.73&";
const current = "current=precipitation,temperature_2m,cloud_cover,is_day";

const endpoint = basicUrl + infoType + location + current;

const useFetchMeteo = () => {
    return useQuery({
        queryKey: ["meteo"],
        queryFn: () => {
            return fetch(endpoint)
                .then(
                    (res) => {
                        if (!res.ok) throw new Error("Request to OpenMeteo failed.");
                        return res.json();
                    }
                )
                .catch(err => console.log("Server Error"));
        }
    })
}

export default useFetchMeteo;