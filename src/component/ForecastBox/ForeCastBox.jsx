export default function ForecastBox({ forecast }) {
  return (
    <div className="forecast-box">
      <h2>5-Day Forecast</h2>
      <div className="forecast-list">
        {forecast.map(day => (
          <div key={day.date} className="forecast-day">
            <p>{day.date}</p>
            <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt={day.weather} />
            <p>{day.temp}°C</p>
            <p>{day.weather}</p>
          </div>
        ))}
      </div>
    </div>
  );
}