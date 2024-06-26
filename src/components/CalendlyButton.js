import React from "react";
import { PopupButton } from "react-calendly";

const CalendlyButton = () => {
  return (
    <div className="div button-div">
      <PopupButton
        url="https://calendly.com/keemove"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Book a Consultation"
      />
    </div>
  );
};

export default CalendlyButton;