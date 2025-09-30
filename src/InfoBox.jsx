import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './infoBox.css';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    let sampleImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
    let HOT_URL = "https://images.unsplash.com/photo-1641027131407-a559a5f73be0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
                                        <ThunderstormIcon  id="rain"/>
                                    ) : info.temp > 25 ? (
                                        <SunnyIcon id="hot"/>
                                    ) : (
                                        <AcUnitIcon id="cold"/>
                                    )}
                                </span>
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <p>Temperature= <b>{info.temp}</b>&deg; C</p>
                                <p>Humdity : <b>{info.humidity}</b></p>
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