import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Spinner from "./Spinner";

const MyNav = (props) => {
  const [cityAndCountry, setCityAndCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCitySearch = () => {
    if (!cityAndCountry.trim()) {
      alert("Please enter a city name.");
      return;
    }

    const [cityName, countryCode] = cityAndCountry
      .split(",")
      .map((item) => item.trim());

    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )},${encodeURIComponent(
        countryCode
      )}&APPID=54f053484e0d18baee784ea47f823bff&units=metric`
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
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", err);
        alert("ERRORE NEL CONTATTARE IL SERVER");
      })
      .finally(() => {
        setLoading(false);
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
        </Navbar.Collapse>
      </Container>
      {loading && <Spinner className="ms-4 col" />}
    </Navbar>
  );
};

export default MyNav;
