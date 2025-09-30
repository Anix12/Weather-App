import SearchBox from "../SearchBox/SearchBox"
import InfoBox from "../InfoBox/InfoBox"
import './WeatherInfo.css'
import { useState } from "react"

export default function WeatherInfo() {
    const [weatherData, setWeatherData] = useState({
        city: "Pune",
        feelsLike: 26.03,
        humidity: 71,
        temp: 25.56,
        tempMax: 25.56,
        tempMin: 25.56,
        weather: "broken clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherData(newInfo);
    }
    return (
        <div className="WeatherInfo">
            <h1 className="Header">Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherData} />
        </div>
    )
}