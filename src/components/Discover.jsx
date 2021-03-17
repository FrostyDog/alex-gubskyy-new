import React from "react";
import HideSvg from "./Hidesvg";

export default function Discover(props) {
  let StatusClass = props.trackStatus(props.status);

  return (
    <section id="discover-area" className={`area ${StatusClass}`}>
      <div onClick={() => props.changeStatus("discover")}>
        <HideSvg />
      </div>
      <div class="main-text"> Nothing to discover :( <br />..yet</div>

    </section>
  );
}
