import React from "react";
import HideSvg from "./Hidesvg";
import ContactField from "./ContactField"

export default function Contact(props) {
  let StatusClass = props.trackStatus(props.status);

  return (
    <section id="contact-area" className={`area ${StatusClass}`}>
      <div className="section-wrapper flex flex-column flex-justify-space-evenly">
        <div onClick={() => props.changeStatus("contact")}>
          <HideSvg />
        </div>
      <ContactField name="Email" icon="far fa-envelope" link="aleks.gubskyy@gmail.com" linkName="mailmenow@gmail.com"/>
      <ContactField name="GitHub" icon="fab fa-github" link="https://github.com/FrostyDog" linkName="github.com/FrostyDog"/>
      <ContactField name="Telegram" icon="fas fa-paper-plane" link="https://t.me/aleks_frost" linkName="t.me/aleks_frost"/>
      <ContactField name="LinkedIn" icon="fab fa-linkedin" link="https://www.linkedin.com/in/aleksandr-gubskyy/" linkName="linkedin.com/"/>

      </div>
    </section>
  );
}
