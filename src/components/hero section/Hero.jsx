import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import mernIcon from "./images/mern.png";
import "./Hero.css";
import { useTransition, animated } from "@react-spring/web";
import htmlIcon from "../projects/images/html.png";
import cssIcon from "../projects/images/css.png";
import socketIcon from "../projects/images/logosocket.png";
import muiIcon from "../projects/images/material.png";
import mysqlIcon from "../projects/images/mysql.png";
import nodeIcon from "../projects/images/node.png";
import reactIcon from "../projects/images/react.png";
import reduxIcon from "../projects/images/redux.png";
import scssIcon from "../projects/images/scss.png";
import expressIcon from "../projects/images/express.png";
import sequelizeIcon from "../projects/images/sequelize.png";
import heroVid from "./video/hero-vid9.mp4";

const Brands = [
  { delay: 100, y: 100, image: reactIcon },
  { delay: 200, y: 100, image: reduxIcon },
  { delay: 300, y: 100, image: nodeIcon },
  { delay: 400, y: 100, image: expressIcon },
  { delay: 500, y: 100, image: mysqlIcon },
  { delay: 600, y: 100, image: sequelizeIcon },
  { delay: 700, y: 100, image: socketIcon },
  { delay: 800, y: 100, image: muiIcon },
  { delay: 900, y: 100, image: scssIcon },
  { delay: 1000, y: 100, image: htmlIcon },
  { delay: 1100, y: 100, image: cssIcon },
];
const Hero = () => {
  const myRef = useRef(); // <-------------
  const [items, setItems] = useState([]);

  const transition = useTransition(items, {
    from: { opacity: 0, x: 0, y: -100 },
    enter: (item) => (next) => {
      next({
        opacity: 1,
        x: 0,
        y: 0,
        delay: item.delay,
      });
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setItems(() => [...Brands]);
      }
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="hero-outer-dv-container">
      <video src={heroVid} playsInline autoPlay muted loop type="video/mp4" />
      <div className="hero-content-heading-sub-pic-text-container">
        <div className="hero-div-cls-home">
          <h2>
            Revolutionize Your <span className="span-sec-visi">Vision</span>
          </h2>
          <h3>Let Me Bring Your Ideas to Life with Creative Innovation</h3>

          <h5>
            Hi, my name is Prakash, and I am a Passionate Full Stack Developer
            with expertise in React js, Node.js, Express, Sequelize, JavaScript,
            HTML, CSS, SCSS, MaterialUI, Bootstrap and more. With 30K+ lines of
            code written, I deliver cutting-edge solutions to bring your
            revolutionary ideas to life. Let's work together to create something
            amazing. Contact me today!
          </h5>
        </div>
        <div className="container" ref={myRef}>
          {transition((style, item) => (
            <animated.div
              style={{
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
                margin: "5px",
                ...style,
              }}
            >
              <img src={item.image} width="40" height="40" />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
