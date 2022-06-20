import React, { useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList.JSX";
import "./portfolio.scss";
import { portList } from "./portlist";

function Portfolio() {
  const [list, setList] = useState(portList);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
     
      </ul>
      <div className="container">
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
        <div className="items">
          <img src="./assets/net.jpeg" alt="" />
          <h3> Netflix App clone</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
