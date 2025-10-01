import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../InfoBox/InfoBox.css';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const HOT_URL = "./assist/HotWeather.png";
    const COLD_URL = "./assist/ColdWeather.png";
    const RAIN_URL = "./assist/Rainy.png";

    return (
        <div className="infobox">
            <div className='container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={
                                info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL
                            }
                            alt="Wheather Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="weather-info">
                                {info.city}
                                <span className="icon">
                                    {info.humidity > 80 ? (
                                        <ThunderstormIcon id="rain" />
                                    ) : info.temp > 25 ? (
                                        <SunnyIcon id="hot" />
                                    ) : (
                                        <AcUnitIcon id="cold" />
                                    )}
                                </span>
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <p>Temperature= <b>{info.temp}</b>&deg; C</p>
                                <p>Humidity : <b>{info.humidity}</b></p>
                                <p>Min Temp : <b>{info.tempMin}&deg; C</b></p>
                                <p>Max Temp : <b>{info.tempMax}&deg; C</b></p>
                                <p>The Weather Can be describe as <i><b>{info.weather}</b></i> and feels like <i><b>{info.feelsLike}&deg; C</b></i> </p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}