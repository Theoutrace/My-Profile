import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, skeletonClasses } from "@mui/material";
import mernIcon from "./images/mern.png";
import "./Hero.css";

const Hero = () => {
  return (
    <Box
      sx={{
        padding: "0px",
        paddingTop: "0px",
        width: "100%",
        left: "0px",
        height: "700px",
        backgroundColor: "white",
        position: "absolute",
        top: "0px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f5f5f7",
      }}
    >
      <Box
        sx={{
          width: "70%",
          minWidth: "1200px",
          margin: "0px",
          paddingTop: "200px",
          height: "600px",
          // backgroundColor: "grey",
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontWeight: "700",
            display: { sm: "block", xs: "none" },
            fontSize: "40px",
            textAlign: "left",
            display: "flex",
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
      </Box>
    </Box>
  );
};

export default Hero;
