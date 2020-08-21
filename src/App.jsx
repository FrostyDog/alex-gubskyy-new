import React from "react";
import "./css/base.css";
import Button from "./components/button";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Discover from "./components/discover";

function App() {
  const [areasState, areasStateChange] = React.useState({
    portfolio: false,
    discover: false,
    contact: false,
  });

  const statusTracking = (status) => {
    if (status) {
      return "open";
    } else {
      return "closed";
    }
  };

  const sectionStatusHandle = (area) => {
    let newStatus = !areasState[area];
    areasStateChange({ ...areasState, [area]: newStatus });
  };

  return (
    <div className="App">
      <main className="main">
        <Button
          text="Contact"
          location="button-left"
          changeStatus={() => sectionStatusHandle("contact")}
        />
        <Button
          text="Portfolio"
          location="button-right"
          changeStatus={() => sectionStatusHandle("portfolio")}
        />
        <Button
          text="Discover"
          location="button-bottom"
          changeStatus={() => sectionStatusHandle("discover")}
        />

        <Portfolio
          trackStatus={statusTracking}
          changeStatus={sectionStatusHandle}
          status={areasState.portfolio}
        />
        <Discover
          trackStatus={statusTracking}
          changeStatus={sectionStatusHandle}
          status={areasState.discover}
        />

        <Contact
          trackStatus={statusTracking}
          changeStatus={sectionStatusHandle}
          status={areasState.contact}
        />
      </main>
    </div>
  );
}

export default App;
