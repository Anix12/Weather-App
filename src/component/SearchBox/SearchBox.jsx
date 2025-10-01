import './SearchBox/SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


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
            return result;
        } catch (err) {
            throw err;
        }
    }


    let handleChange = (evt) => {
        setCity(evt.target.value);
    }


    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setLoading(true);
        setError(false);
        try {
            let info = await getWeatherInfo();
            updateInfo(info);
            setCity("");
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className='search-box'>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="Enter City Name" variant="outlined" required value={city} onChange={handleChange} />
                    <br /><br />
                    <Button variant="contained" type="Submit">Search Wheather</Button>
                </form>
                {error && <Alert severity="error" className='error-msg'>Please enter a valid city name.</Alert>}
                {loading && <CircularProgress className='loader' />}
            </div>
        </>
    )
}