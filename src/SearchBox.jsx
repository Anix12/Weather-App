import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
import { useState } from 'react';
import Alert from '@mui/material/Alert';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0954d6345f35bb5ee3c74fd0292a59a7";

    let getWeatherInfo = async () => {
        try {
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await responce.json();
            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description
            };
            setError(false);
            return result;
        } catch (err) {
            throw err;
        }
    }
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }


    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Enter City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="Submit">Search Wheather</Button>
            </form>
            {error && <Alert severity="error" className='error-msg'>Please enter a valid city name.</Alert>}
        </div>
    )
}