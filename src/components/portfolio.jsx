import React from "react";
import HideSvg from "./hidesvg";


export default function Portfolio(props) {

  let StatusClass = props.trackStatus(props.status);

  return (
    <section id="portfolio-area" className={` area ${StatusClass}`}>
      <div onClick={() => props.changeStatus("portfolio")}>
        <HideSvg />
      </div>
    </section>
  );
}
