import React from "react";
import HideSvg from "./hidesvg";
import Field from "./contact-field"

export default function Contact(props) {
  let StatusClass = props.trackStatus(props.status);

  return (
    <section id="contact-area" className={`area ${StatusClass}`}>
      <div className="section-wrapper flex flex-column flex-justify-space-evenly">
        <div onClick={() => props.changeStatus("contact")}>
          <HideSvg />
        </div>
      <Field name="Email" icon="far fa-envelope" link="aleks.gubskyy@gmail.com" linkName="mailmenow@gmail.com"/>
      <Field name="GitHub" icon="fab fa-github" link="https://github.com/FrostyDog" linkName="github.com/FrostyDog"/>
      <Field name="Telegram" icon="fas fa-paper-plane" link="https://t.me/aleks_frost" linkName="t.me/aleks_frost"/>
      <Field name="LinkedIn" icon="fab fa-linkedin" link="https://www.linkedin.com/in/aleksandr-gubskyy/" linkName="linkedin.com/"/>

      </div>
    </section>
  );
}
