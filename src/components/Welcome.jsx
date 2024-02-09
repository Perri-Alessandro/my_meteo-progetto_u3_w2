import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  const [showAlert, setShowAlert] = useState(true);

  const chiudiAlert = () => {
    setShowAlert(false);
  };

  const pageClick = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <Alert
          variant="success"
          onClose={chiudiAlert}
          dismissible
          className="mt-5"
        >
          <Alert.Heading>Hey, nice to see you !</Alert.Heading>
          <p>Welcome in my new Meteo page</p>
          <hr />

          <p className="mb-0">
            For a more accurate search, enter the country code after the country
            name, in in the navigation bar input (from mobile by clicking on the
            hamburger menu), followed by a comma (es: "roma,it", "bristol,uk")
          </p>
          <hr />
          <p>weather data courtesy of openweathermap</p>
        </Alert>
      )}
      <div onClick={pageClick}>
        <p className=" text-danger fs-5">Click here to hide the alert</p>
      </div>
      <img src="/public/img/perri-alessandro-wipdefffacq.jpg" alt="" />
    </>
  );
};

export default Welcome;
