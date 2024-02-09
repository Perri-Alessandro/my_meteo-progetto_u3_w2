import React, { useEffect, useState } from "react";

const MyFooter = (param) => {
  const [scriptResult, setScriptResult] = useState("");

  const mobileStyles = {
    fontSize: "0.6em",
  };

  const desktopStyles = {
    fontSize: "0.9em",
  };

  const mobileBottomStyles = {
    fontSize: "0.6em",
  };

  const desktopBottomStyles = {
    fontSize: "0.8em",
  };

  useEffect(() => {
    let annoCorrente = new Date().getFullYear();
    let eccolo =
      "©" +
      annoCorrente +
      " My Meteo Page. All rights reserved. Created by Perri Alessandro";

    setScriptResult(eccolo);
  }, []);

  return (
    <footer className="container-fluid bg-black text-white">
      <div
        className="row justify-content-between mt-2"
        style={{
          fontSize:
            window.innerWidth < 768
              ? mobileStyles.fontSize
              : desktopStyles.fontSize,
        }}
      >
        <div className="col">
          <div className="row flex-column">
            {param.tit1}
            <div className="col mt-2">Our History</div>
            <div className="col">Lavora con noi</div>
            <div className="col">Contattaci</div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            {param.tit2}
            <div className="col mt-2">I prodotti più richiesti</div>
            <div className="col">Le nostre esclusività</div>
            <div className="col">Ordina ora</div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            {param.tit3}
            <div className="col mt-2">uee</div>
            <div className="col">ueee</div>
            <div className="col">ueeeee</div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            {param.tit4}
            <div className="col mt-2">uee</div>
            <div className="col">ueee</div>
            <div className="col">ueeeee</div>
          </div>
        </div>
      </div>
      <div className="row">
        <p
          className="mt-4 col"
          id="anno"
          style={{
            fontSize:
              window.innerWidth < 768
                ? mobileBottomStyles.fontSize
                : desktopBottomStyles.fontSize,
          }}
        >
          {scriptResult}
        </p>
      </div>
    </footer>
  );
};

export default MyFooter;
