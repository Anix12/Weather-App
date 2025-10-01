import '../WeatherInfo/WeatherInfo.css';
import SearchBox from "../SearchBox/SearchBox.jsx"
import InfoBox from "../InfoBox/InfoBox.jsx"
import { useState } from "react"

export default function WeatherInfo() {
    const [weatherData, setWeatherData] = useState(null);

    let updateInfo = (newInfo) => {
        setWeatherData(newInfo);
    }
    return (
        <div className="WeatherInfo">
            <h1 className="Header">Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
           {weatherData && <InfoBox info={weatherData} />}
        </div>
    )
}