"use-client"
import styles from "./WeatherCard.module.css"
import WeatherIcon from "./WeatherIcon";


const WeatherCard = ({
    cityName,
    cloudiness,
    currentTemperature,
    highTemperature,
    humidity,
    lowTemperature,
    weatherType,
    windSpeed
}) => (
    <div 
    className={styles.WeatherCardWrapper}
    style={{backgroundColor: `rgba(0.0.0.0.${cloudiness}`}}
    >
        <div className = {styles.WeatherCardImage}>
        <WeatherIcon weatherType={weatherType}/>
    </div>
    <div className = {styles.WeatherCardDetails}>
        <h2>{cityName}</h2>
        <p>Current Temperature: {currentTemperature}</p>
        <div className={styles.WeatherCardRow}>
            <p>WeatherType: {weatherType}</p>
            <p>High Temperature: {highTemperature}</p>
            <p>Low Temperature: {lowTemperature}</p>
        </div>
    <div className={styles.WeatherCardColumn}> 
    <p>Cloudiness: {cloudiness}</p>
    <p>Humidity: {humidity}</p>
    <p>Wind Speed: {windSpeed}</p>
    </div>
    </div>
    </div>
)

export default WeatherCard;