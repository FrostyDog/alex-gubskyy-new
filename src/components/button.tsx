import React from "react";

export default function Button(props: any) {
  return (
    <div onClick={props.changeStatus} className={`button abs ${props.location} flex flex-align-center flex-column flex-justify-center`}>
      <div className="button-label">{props.text}</div>
      <div className="rmik"></div>
      <svg
        viewBox="0 0 20 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <path d="M2 181L10 190" />
        <path d="M18 181L10 190" />
      </svg>
    </div>
  );
}
