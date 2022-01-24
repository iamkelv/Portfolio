import { MouseSharp } from "@material-ui/icons";
import React from "react";
import "./testimonial.scss";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Kelvin Moses",
      title: "CEO of Space-Alpha",
      img: "assets/man.png",
      icon: "assets/twitter.png",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
      id: 2,
      name: "John W Simon",
      title: "CEO of CyberNet",
      img: "assets/man.png",
      icon: "assets/youtube.png",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
      featured: true,
    },
    {
      id: 3,
      name: "Nuru Umar",
      title: "CEO Arewa Crypto",
      img: "assets/man.png",
      icon: "assets/linkedin.png",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => {
          return (
            <Fade left>
              <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                  <img src="assets/right.png" alt={d.title} className="left" />
                  <img src={d.img} className="user" alt={d.img} />
                  <img src={d.icon} className="right" alt="youtube image" />
                </div>
                <div className="center">{d.desc}</div>
                <div className="bottom">
                  <h3>{d.name} </h3>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
