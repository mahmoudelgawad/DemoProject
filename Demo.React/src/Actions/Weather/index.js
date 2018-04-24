import axios from 'axios'

//open weather API key
const WEATHER_API_KEY = "1d335a0d46dfa151e03b4e0d484b6155";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;
export const FETCH_WEATHER="FETCH_WEATHER"; 

export default function fetchWeather(city){
    const url=`${API_URL}&q=${city},us`;
    const request=axios.get(url);

    // console.log('Action run promise',request);

    return{
        type:FETCH_WEATHER,
        payload:request
    };
}