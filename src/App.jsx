import React from "react";
import "./css/base.css";
import Button from "./components/Button";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Discover from "./components/Discover";
import ThreeCanvas from "./components/Three/ThreeCanvas";

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

  const areas = [
    ["Contact", "button-left"],
    ["Portfolio", "button-right"],
    ["Discover", "button-bottom"],
  ];

  const sectionStatusHandle = (area) => {
    const newStatus = !areasState[area];
    areasStateChange({ ...areasState, [area]: newStatus });
  };

  return (
    <div className="App">
      <main className="main">
        {areas.map((el) => (
          <Button
            text={`${el[0]}`}
            location={`${el[1]}`}
            changeStatus={() => sectionStatusHandle(el[0].toLowerCase())}
          />
        ))}

        <ThreeCanvas />

        <Portfolio trackStatus={statusTracking} changeStatus={sectionStatusHandle} status={areasState.portfolio} />
        <Discover trackStatus={statusTracking} changeStatus={sectionStatusHandle} status={areasState.discover} />
        <Contact trackStatus={statusTracking} changeStatus={sectionStatusHandle} status={areasState.contact} />
      </main>
    </div>
  );
}

export default App;
