import React from "react";
import HideSvg from "./hidesvg";

export default function Contact(props) {

  let StatusClass = props.trackStatus(props.status);

  return (
    <section
      id="contact-area"
      className={`area ${StatusClass}`}
    >
      <div className="section-wrapper">
        <div onClick={() => props.changeStatus("contact")}>
          <HideSvg />
        </div>
      </div>
    </section>
  );
}
