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
    from: { opacity: 0, x: 0, y: 0 },
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
        setOverlay(() => true);
      }
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="hero-outer-dv-rp-box-fr-image">
      <Box
        sx={{
          width: "100%",
          minWidth: "1250px",
          margin: "0px",
          padding: "10px 50px",
          paddingTop: "150px",
          height: "680px",
          borderRadius: "0px 0px 100px 100px",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          paddingBottom: "120px",
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
            height: "180px",
            padding: "10px",
            color: "black",
            position: "relative",
            minWidth: "1200px",
            width: "65%",
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

            <Typography
              variant="h6"
              sx={{ width: "800px", marginTop: "20px", fontSize: "18px" }}
            >
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
              <img src={item.image} width="40" height="40" />
            </animated.div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default Hero;
