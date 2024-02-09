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
            For a more accurate search, enter the country code after the country
            name, in the navigation bar input (from mobile by clicking on the
            hamburger menu), followed by a comma (ex: "roma,it", "bristol,uk")
          </p>
          <hr />
          <p>weather data courtesy of openweathermap</p>
          <div onClick={pageClick}>
            <p className=" text-danger fs-5">Click here to hide the alert</p>
          </div>
        </Alert>
      )}
    </>
  );
};

export default Welcome;
