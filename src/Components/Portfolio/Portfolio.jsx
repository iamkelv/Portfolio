import React, { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import "./Portfolio.scss";
import { useEffect } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "web",
      title: "web",
    },
    {
      id: "mobile",
      title: "mobile",
    },
    {
      id: "design",
      title: "design",
    },
    {
      id: "content",
      title: "content",
    },
  ];
  useEffect(() => {
    // passing Switch cases
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(contentPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <Fade>
        <h1>Portfolio</h1>
      </Fade>
      <Fade bottom>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((getData) => {
            return (
              <div className="item">
                <img src={getData.img} alt={getData.title} />
                <h3>{getData.title}</h3>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
}
