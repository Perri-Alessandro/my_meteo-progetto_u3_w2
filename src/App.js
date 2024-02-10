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
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCityMeteo, setShowCityMeteo] = useState(false);

  const handleCitySearch = (cityData) => {
    setSelectedCity(cityData);
  };

  const handleCitySelection = () => {
    setShowCityMeteo(true);
  };

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App d-flex flex-column justify-content-between vh-100">
      <header className="">
        <MyNav
          closeWelcome={closeWelcome}
          title="Giuliacxi"
          handleSearch={handleCitySearch}
          handleCitySelection={handleCitySelection}
        />
        {showWelcome && <Welcome />}
      </header>
      <main className="flex-grow-1">
        <Container>
          {showCityMeteo && <CityMeteo city={selectedCity} />}
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
