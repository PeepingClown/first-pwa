import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8651784e191f158cd6abfa311458911a';


export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params : {
            q : query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;
}

