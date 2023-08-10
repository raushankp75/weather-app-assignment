import axios from "axios";

const API_KEY = '6f1c9ee91b22f5f1e5f8ccaecf1f8e81';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling api', error.message);
        return error.response
    }
}