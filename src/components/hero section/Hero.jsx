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
const Brands = [
  { delay: 100, y: 100, image: reactIcon },
  { delay: 200, y: 100, image: reduxIcon },
  { delay: 300, y: 100, image: nodeIcon },
  { delay: 400, y: 100, image: expressIcon },
  { delay: 500, y: 100, image: mysqlIcon },
  { delay: 600, y: 100, image: socketIcon },
  { delay: 700, y: 100, image: muiIcon },
  { delay: 800, y: 100, image: scssIcon },
  { delay: 900, y: 100, image: htmlIcon },
  { delay: 1000, y: 100, image: cssIcon },
];
const Hero = () => {
  const myRef = useRef(); // <-------------
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { opacity: 0, x: 20, y: 120 },
    enter: (item) => (next) =>
      next({
        opacity: 1,
        x: 0,
        y: item.y,
        delay: item.delay,
      }),
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setItems(() => [...Brands]);
      } else {
        setItems(() => []);
      }
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <Box
      sx={{
        padding: "0px",
        paddingTop: "0px",
        width: "100%",
        left: "0px",
        height: "700px",
        position: "absolute",
        top: "0px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f5f5f7",
      }}
    >
      <Box
        sx={{
          width: "65%",
          minWidth: "1200px",
          margin: "0px",
          paddingTop: "200px",
          height: "600px",
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontWeight: "700",
            display: { sm: "flex", xs: "none" },
            fontSize: "40px",
            textAlign: "left",
            justifyContent: "space-between",
            alignItems: "center",
            height: "200px",
            padding: "10px",
            color: "black",
          }}
        >
          <div className="hero-div-cls-home">
            <Typography
              variant="h2"
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              Revolutionize Your <span className="span-sec-visi">Vision</span>
            </Typography>
            <Typography
              variant="h4"
              sx={{ marginTop: "20px", fontSize: "30px" }}
            >
              Let Me Bring Your Ideas to Life with Creative Innovation
            </Typography>

            <Typography variant="h6" sx={{ width: "800px", marginTop: "20px" }}>
              Hi, my name is Prakash, and I am a Passionate Full Stack Developer
              with expertise in React js, Node.js, Express, Sequelize,
              JavaScript, HTML, CSS, SCSS, MaterialUI, Bootstrap and more. With
              30K+ lines of code written, I deliver cutting-edge solutions to
              bring your revolutionary ideas to life. Let's work together to
              create something amazing. Contact me today!
            </Typography>
          </div>
          <div>
            <img src={mernIcon} width="400" />
          </div>
        </Typography>

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
              <img src={item.image} width="40" />
            </animated.div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Hero;
