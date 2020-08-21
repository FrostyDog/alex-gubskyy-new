import React from "react";
import HideSvg from "./hidesvg";

export default function Discover(props: any) {


  return <section id="discover-area" className="area">
      <div onClick={props.changeStatus}>
        <HideSvg />
      </div>

  </section>;
}
