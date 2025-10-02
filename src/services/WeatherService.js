export async function fetchWeatherInfo(city, API_URL, API_KEY) {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();

    return {
        city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
    };
}