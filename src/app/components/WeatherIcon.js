'use-client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCloud,
    faCloudSun,
    faUmbrella,
    faSnowflake,
    faSun
} from "@fortawesome/free-solid-svg-icons"

const WeatherIcon = ({weatherType}) => {
    switch(weatherType){
        case "Clouds":
            return <FontAwesomeIcon icon= {faCloud} />;
        case "Drizzle":
        case "Rain":
            return <FontAwesomeIcon icon = {faUmbrella} />;
        case "Clear":
            return <FontAwesomeIcon icon = {faCloudSUn} />;
            default:
                return <div>This Works</div>
    }
};

export default WeatherIcon;