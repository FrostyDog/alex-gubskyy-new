import React from "react";
import HideSvg from "./hidesvg";

interface ContactPropsValues {
  status: string;
}

export default function Contact(props: any) {
  return (
    <section id="contact-area" className={`area ${props.status}`}>
        <div className="section-wrapper">
      <div onClick={props.changeStatus}>
        <HideSvg />
      </div>
      </div>
    </section>
  );
}
