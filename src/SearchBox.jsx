import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0954d6345f35bb5ee3c74fd0292a59a7";

    let getWeatherInfo = async () => {
        let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await responce.json();
        // console.log(data);
        let result = {
            city: city,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description
        };
        console.log(result);
        return result;
    }
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }


    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeatherInfo();
        updateInfo(info);
    }

    return (
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label=" City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="Submit">Search</Button>
            </form>
        </div>
    )
}