import React, { useEffect } from "react";

interface ContactPropsValues {
  status: string;
}

export default function Contact(props: any) {
  return (
    <section
      onClick={props.changeStatus}
      id="contact-area"
      className={`abs ${props.status}`}
    ></section>
  );
}
