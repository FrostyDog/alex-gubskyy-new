import React, { useEffect } from "react";
import HideSvg from "./Hidesvg";
import PortfolioItem from "./Portfolio-item";
import { getJSON, fetchProjects } from "../utilities/fetch";

export default function Portfolio(props) {
  const StatusClass = props.trackStatus(props.status);
  let [dataForProjects, setDataForProjects] = React.useState([]);
  const randomPicUrl = "https://source.unsplash.com/random/900x700";

  useEffect(() => {
    getJSON(`https://api.github.com/users/frostydog`)
      .then((res) => {
        fetchProjects(res.repos_url).then((data) => {
          data.pop();
          setDataForProjects(data);
          console.log(data);
        });
      })
      .catch(() => {
        alert("no projects");
      });
  }, []);

  return (
    <section id="portfolio-area" className={` area ${StatusClass}`}>
      <div onClick={() => props.changeStatus("portfolio")}>
        <HideSvg />
      </div>

      {dataForProjects.map((el, index) => (
        <PortfolioItem
          source={`${el.html_url}`}
          background={`${randomPicUrl}?sig=${index}`}
          classPositon={`position-${index + 1}`}
        />
      ))}

      {/* <PortfolioItem
        source="http://alexgubskyy.com"
        background="https://images.unsplash.com/photo-1601277237358-93d22efff93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        classPositon="position-1"
      />
      <PortfolioItem classPositon="position-2" />
      <PortfolioItem classPositon="position-3" />
      <PortfolioItem classPositon="position-4" /> */}
    </section>
  );
}
