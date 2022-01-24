import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./intro.scss";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: [
        "FrontEnd Developer!",
        "Digital Marketer!",
        "Mobile Developer",
        "Digital Photographer!",
        "Teacher!",
        "Content Creator!",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <Fade left>
          <div className="imgContainer">
            <img src="assets/man.png" />
          </div>
        </Fade>
      </div>
      <Slide bottom>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There I'm </h2>
            <h1>Kelvin Moses</h1>
            <h3>
              Freelance <span ref={textRef}></span>{" "}
            </h3>
          </div>
          <a href="#portfolio">
            <img className="downArrow" src="assets/down.png" />
          </a>
        </div>
      </Slide>
    </div>
  );
}
