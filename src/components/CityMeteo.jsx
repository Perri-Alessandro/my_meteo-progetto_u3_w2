import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const CityMeteo = ({ city }) => {
  const [meteo, setMeteo] = useState({});
  const [today, setToday] = useState("");

  useEffect(() => {
    if (city) {
      setMeteo(city);
      setToday(new Date(city.dt * 1000).toLocaleDateString());
    }
  }, [city]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Moltiplica per 1000 per convertire in millisecondi
    return date.toLocaleTimeString(); // Ottiene l'ora in formato locale
  };
  const convertWindSpeed = (speedInMetersPerSecond) => {
    return (speedInMetersPerSecond * 3.6).toFixed(2); // Conversion formula: m/s * 3.6 = km/h
  };

  return (
    <>
      <Row>
        {" "}
        <p className="mt-3 fs-5 col-12">
          Today <span className="fw-bold">{today}</span>
        </p>
      </Row>
      <Row className="mb-3 border border-info rounded-5 justify-content-center align-items-center mx-1">
        <div className="background-overlay"></div>
        <p className="fs-3 col-12 mt-2 fw-bold text-primary">
          {meteo.name} ({meteo.sys && meteo.sys.country}){" "}
          <img
            className="bg-info rounded-5 ms-2"
            src={
              meteo.weather &&
              meteo.weather[0] &&
              `https://openweathermap.org/img/wn/${meteo.weather[0].icon}.png`
            }
            alt="wheater img"
          />
        </p>
        <p className="fs-5 col-12">
          Latitude: {meteo.coord && meteo.coord.lat} - Longitude:{" "}
          {meteo.coord && meteo.coord.lon}
        </p>
        <p className=" col-12  mb-5 fs-5 text-success">
          {meteo.weather && meteo.weather.length > 0 && meteo.weather[0].main} -{" "}
          {meteo.weather &&
            meteo.weather.length > 0 &&
            meteo.weather[0].description}
        </p>
        <Col xs={6}>
          <p>&deg;C: {meteo.main && meteo.main.temp}</p>
          <p>&deg;C feels like: {meteo.main && meteo.main.feels_like}</p>
          <p>&deg;C max: {meteo.main && meteo.main.temp_max}</p>
          <p>&deg;C min: {meteo.main && meteo.main.temp_min}</p>
        </Col>
        <Col xs={6}>
          <p>Humidity: {meteo.main && meteo.main.humidity}</p>
          <p>Pressure: {meteo.main && meteo.main.pressure}</p>
          <p>Sunrise: {meteo.sys && formatTime(meteo.sys.sunrise)}</p>
          <p>Sunset: {meteo.sys && formatTime(meteo.sys.sunset)}</p>
        </Col>
        <p className=" col-12">
          Wind Speed:{" "}
          {meteo.wind?.speed
            ? `${convertWindSpeed(meteo.wind.speed)} km/h`
            : "N/A"}
        </p>
      </Row>
    </>
  );
};
export default CityMeteo;
