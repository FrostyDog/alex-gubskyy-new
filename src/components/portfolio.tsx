import React from "react";
import HideSvg from "./hidesvg";

interface PortfolioPropsValues {

}

export default function Portfolio(props: any) {
  return <section id="portfolio-area" className="area">
    <div onClick={props.changeStatus}>
        <HideSvg />
      </div>

  </section>;
}
