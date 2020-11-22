import React from "react";

export default function Field(props) {
  return (
    <div className="rel">
      {/* <h3 className=""> {props.name} </h3>
       */}
       
      <div className="rmik"></div>
      <a className="" target="_blank" rel="noopener noreferrer" href={props.link}>
        <i className={props.icon}></i>
        {props.linkName}
      </a>
      <div className="line"></div>
    </div>
  );
}
