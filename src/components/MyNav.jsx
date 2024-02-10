import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Spinner from "./Spinner";
import { Col, Row } from "react-bootstrap";

const MyNav = (props) => {
  const [cityAndCountry, setCityAndCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [foundCities, setFoundCities] = useState([]);
  const [showOptions, setShowOptions] = useState(true);

  const handleCitySearch = () => {
    if (!cityAndCountry.trim()) {
      alert("Please enter a city name.");
      return;
    }

    // const [cityName, countryCode] = cityAndCountry
    //   .split(",")
    //   .map((item) => item.trim());

    setLoading(true);
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityAndCountry}&limit=5&appid=54f053484e0d18baee784ea47f823bff&units=metric`
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
        console.log("DATI RICEVUTI", data);
        props.handleSearch(data);
        props.closeWelcome();
        setFoundCities(data);

        // fetch(
        //   `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName},${countryCode}&appid=32c53ab5bcc217dac5852efd68dc0544&units=metric`
        // )
        //   .then((response) => {
        //     if (response.ok) {
        //       return response.json();
        //     } else {
        //       throw new Error("Error fetching forecast weather data");
        //     }
        //   })
        //   .then((forecastWeatherData) => {
        //     // Qui puoi gestire i dati del meteo attuale e dei giorni successivi
        //     console.log("Current Weather Data:", data);
        //     console.log("Forecast Weather Data:", forecastWeatherData);
        //     // props.handleSearch(data);
        //     // props.closeWelcome();
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching forecast weather data:", error);
        //     alert("Error fetching forecast weather data");
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //   });
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
        alert("ERRORE NEL CONTATTARE IL SERVER");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCitySelection = (selectedCity) => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name},${selectedCity.country}&APPID=54f053484e0d18baee784ea47f823bff&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching weather data");
        }
      })
      .then((weatherData) => {
        // Esegui qui la logica per gestire i dati meteo della città selezionata
        console.log("DATI RICEVUTI PER LA CITTà SELEZIONATA:", weatherData);
        props.handleSearch(weatherData);
        props.closeWelcome();
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data");
      })
      .finally(() => {
        setLoading(false);
        setShowOptions(true);
      });
  };

  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">
          {" "}
          {props.title} Meteo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="bg-white border-warning border-2"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Perri-Alessandro"
              target="blank"
              className="text-white"
            >
              My Github Page
            </Nav.Link>
            <NavDropdown title="Broswe" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className="text-center ">
                ueee
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-center ">
                Contact us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="text-center">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Insert city to search"
              className="me-2 rounded-4"
              aria-label="Search"
              onChange={(e) => setCityAndCountry(e.target.value)}
            />
            <Button
              variant="outline-success"
              className="rounded-4 border-2"
              onClick={handleCitySearch}
            >
              Search
            </Button>
          </Form>
          {showOptions && foundCities.length > 0 && (
            <Row className="justify-content-center align-items-center">
              {foundCities.map((city, index) => (
                <Col
                  xs={4}
                  key={city.sys ? city.sys.id : index}
                  className="m-1 mt-3"
                >
                  <button
                    onClick={() => handleCitySelection(city)}
                    className="rounded-3 bg-warning border-info"
                  >
                    {city.name}, {city.country}, {city.state}
                  </button>
                </Col>
              ))}
            </Row>
          )}
          {loading && <Spinner className="ms-4 row" />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
