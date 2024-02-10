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
          className="mt-3"
        >
          <Alert.Heading>Hey, nice to see you !</Alert.Heading>
          <p>Welcome in my new Meteo page</p>
          <hr />

          <p className="mb-0">
            Enter the country name, in the navigation bar input (from mobile by
            clicking on the hamburger menu).
          </p>
          <hr />
          <p>
            Weather data courtesy of Openweathermap api, CET sunrise and sunset.
          </p>
          <div onClick={pageClick}>
            <p className=" text-danger fs-5">Click here to hide the alert</p>
          </div>
        </Alert>
      )}
    </>
  );
};

export default Welcome;
