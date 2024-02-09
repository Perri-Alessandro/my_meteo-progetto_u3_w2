import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Spinnerr from "./Spinner";

const CityMeteo = () => {
  const [meteo, setMeteo] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    getMeteo();
  }, []);

  const getMeteo = () => {
    setSpinner(true);
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=54f053484e0d18baee784ea47f823bff"
    )
      .then((response) => {
        if (response.ok) {
          console.log("IN CONTATTO CON IL SERVER", response);
          return response.json();
        } else {
          throw new Error("RISPOSTA NON OK RICEVUTA DAL SERVER");
        }
      })
      .then((data) => {
        console.log("DATI RICEVUTI CORRETTAMENTE", data);
        setMeteo(data.weather);
        setSpinner(false);
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
        alert("ERRORE NEL CONTATTARE IL SERVER");
      });
  };

  return (
    <Row>
      {spinner && <Spinnerr />}
      <Col>Ciao {meteo.main}</Col>
    </Row>
  );
};
export default CityMeteo;
