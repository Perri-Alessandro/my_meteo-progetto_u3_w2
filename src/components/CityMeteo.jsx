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
      <Row className="mb-3 border border-primary rounded-5 justify-content-center align-items-center mx-1 bg-info">
        {/* <div className="background-overlay"></div> */}
        <p className="fs-2 col-12 mt-2 fw-bold text-primary">
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
        <p className="col-12" style={{ fontSize: "92%" }}>
          Latitude:{" "}
          <span className="fw-bold">{meteo.coord && meteo.coord.lat}</span> -
          Longitude:{" "}
          <span className="fw-bold">{meteo.coord && meteo.coord.lon}</span>
        </p>
        <p className=" col-12  mb-5 fs-5 text-success fw-bold">
          {meteo.weather && meteo.weather.length > 0 && meteo.weather[0].main} -{" "}
          {meteo.weather &&
            meteo.weather.length > 0 &&
            meteo.weather[0].description}
        </p>
        <Col xs={6}>
          <p>
            &deg;C:{" "}
            <span className="fw-bold">{meteo.main && meteo.main.temp}</span>
          </p>
          <p>
            &deg;C feels like:{" "}
            <span className="fw-bold">
              {meteo.main && meteo.main.feels_like}
            </span>
          </p>
          <p>
            &deg;C max:{" "}
            <span className="fw-bold">{meteo.main && meteo.main.temp_max}</span>
          </p>
          <p>
            &deg;C min:{" "}
            <span className="fw-bold">{meteo.main && meteo.main.temp_min}</span>
          </p>
        </Col>
        <Col xs={6}>
          <p>
            Humidity:{" "}
            <span className="fw-bold">{meteo.main && meteo.main.humidity}</span>
          </p>
          <p>
            Pressure:{" "}
            <span className="fw-bold">{meteo.main && meteo.main.pressure}</span>
          </p>
          <p>
            Sunrise:{" "}
            <span className="fw-bold">
              {meteo.sys && formatTime(meteo.sys.sunrise)}
            </span>
          </p>
          <p>
            Sunset:{" "}
            <span className="fw-bold">
              {meteo.sys && formatTime(meteo.sys.sunset)}
            </span>
          </p>
        </Col>
        <p className=" col-12">
          Wind Speed:{" "}
          <span className="fw-bold">
            {meteo.wind?.speed
              ? `${convertWindSpeed(meteo.wind.speed)} km/h`
              : "N/A"}
          </span>
        </p>
      </Row>
    </>
  );
};
export default CityMeteo;
