import React from "react";
import { PopupWidget } from "react-calendly";

const CalendlyMobile = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/keemove"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Free Consultation"
        textColor="#ffffff"
        color="rgba(36, 30, 120, .6)"
      />
    </div>
  );
};

export default CalendlyMobile;