import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './infoBox.css';

export default function InfoBox({ info }) {
    let sampleImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";


    return (
        <div className="infobox">
            <div className='container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={sampleImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
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