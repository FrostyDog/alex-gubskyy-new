import React from "react";
import "../css/components/portfolio-item.css";


export default function PortfolioItem(props) {
    const classPosition = "portfolio-item " + props.classPositon
return (
    <div className={classPosition}>
        <a target="_blank" rel="noopener noreferrer" href={props.source}>
        <div className="background" style={{backgroundImage: `url(${props.background})`}}></div>
        <div className="background-overlay"></div>
        </a>

    </div>
)
}