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
          title={`${el.name}`}
          background={`${randomPicUrl}?sig=${index}`}
          classPositon={`position-${index + 1}`}
        />
      ))}
    </section>
  );
}
