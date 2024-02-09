import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import CityMeteo from "./components/CityMeteo";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySearch = (cityData) => {
    setSelectedCity(cityData);
  };

  return (
    <div className="App d-flex flex-column justify-content-between vh-100">
      <header className="">
        <MyNav title="Giuliacxi" handleSearch={handleCitySearch} />
      </header>
      <main className="flex-grow-1">
        <Welcome />
        <Container>
          {selectedCity && <CityMeteo city={selectedCity} />}
        </Container>
      </main>
      <MyFooter
        tit1="NOI"
        tit2="I NOSTRI PRODOTTI"
        tit3="HOME"
        tit4="PROVA"
      ></MyFooter>
    </div>
  );
}

export default App;