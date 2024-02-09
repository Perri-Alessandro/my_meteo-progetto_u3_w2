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

  return (
    <>
      <Row>
        {" "}
        <p className="mt-3 fs-5 col-12">Today {today}</p>
      </Row>
      <Row className="mb-3 border border-info rounded-5 justify-content-center align-items-center mx-1">
        <div className="background-overlay"></div>
        <p className="fs-3 col-12 mt-2">
          City: <span className="fw-bold text-primary">{meteo.name}</span>{" "}
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
        <p className=" col-12  mb-5">
          Weather description:{" "}
          <span className="fs-5 text-success">
            {meteo.weather && meteo.weather.length > 0 && meteo.weather[0].main}{" "}
            -{" "}
            {meteo.weather &&
              meteo.weather.length > 0 &&
              meteo.weather[0].description}
          </span>{" "}
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
        <p className=" col-12">Wind Speed: {meteo.wind?.speed ?? "N/A"} m/s</p>
      </Row>
    </>
  );
};
export default CityMeteo;
