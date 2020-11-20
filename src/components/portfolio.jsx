import React from "react";
import HideSvg from "./hidesvg";
import PortfolioItem from "./portfolio-item";

export default function Portfolio(props) {
  let StatusClass = props.trackStatus(props.status);

  return (
    <section id="portfolio-area" className={` area ${StatusClass}`}>
      <div onClick={() => props.changeStatus("portfolio")}>
        <HideSvg />
      </div>
      <PortfolioItem source="http://alexgubskyy.com" background="https://images.unsplash.com/photo-1601277237358-93d22efff93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" classPositon="position-1"/>
      <PortfolioItem classPositon="position-2"/>
      <PortfolioItem classPositon="position-3"/>
      <PortfolioItem classPositon="position-4"/>

    </section>
  );
}
