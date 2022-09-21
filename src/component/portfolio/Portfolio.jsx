import React, { useState, useEffect } from "react";
import PortList from "../portlist/PortList";
import "./portfolio.scss";

import { featuredPort, webPort, designPort } from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPort);
        break;
      case "web":
        setData(webPort);
        break;
      case "design":
        setData(designPort);
        break;

      default:
        setData(designPort);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortList
            id={item.id}
            key={item.id}
            title={item.title}
            active={selected == item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <>
         
          <div className="items">
            <img src={d.img}/>
            <h3>{d.title}</h3>
            <a href={d.link}  target="_blank">view site</a>
          </div>
         
          </>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
