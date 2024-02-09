import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import horror from "./data/horror.json";
// import romance from "./data/romance.json";
// import history from "./data/history.json";
// import fantasy from "./data/fantasy.json";
// import scifi from "./data/scifi.json";
import { Container } from "react-bootstrap";
import CityMeteo from "./components/CityMeteo";

function App() {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  // };

  return (
    <div className="App d-flex flex-column justify-content-between vh-100">
      <header className="">
        {/* handleSearch={handleSearch} */}
        <MyNav title="Giuliacxi" />
      </header>
      <main className="flex-grow-1">
        <Welcome />
        <Container>
          {/* <CardBooks films={horror} searchTerm={searchTerm} />
          <CardBooks films={romance} searchTerm={searchTerm} />
          <CardBooks films={history} searchTerm={searchTerm} />
          <CardBooks films={fantasy} searchTerm={searchTerm} />
          <CardBooks films={scifi} searchTerm={searchTerm} /> */}
          <CityMeteo></CityMeteo>
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
