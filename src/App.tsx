import React from "react";
import "./css/base.css";
import Button from "./components/button";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Discover from "./components/discover";

function App() {
  const [contactState, changeContactState] = React.useState("closed");

  let sectionStatusHandle = () => {
    console.log('working')
    if (contactState === "closed") {
      changeContactState("open");
    } else {
      changeContactState('closed')
    }
  };

  return (
    <div className="App">
      <main className="main">
        <Button text="Contact" location="button-left" changeStatus={sectionStatusHandle} />
        <Button text="Portfolio" location="button-right" />
        <Button text="Discover" location="button-bottom" />

        <Portfolio changeStatus={sectionStatusHandle} status={contactState} />
        <Discover changeStatus={sectionStatusHandle} status={contactState}/>

        <Contact changeStatus={sectionStatusHandle} status={contactState} />
      </main>
    </div>
  );
}

export default App;
