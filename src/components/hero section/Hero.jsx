import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, skeletonClasses } from "@mui/material";
import illuIcon from "./images/illu.png";
import "./Hero.css";

const Hero = () => {
  return (
    <Container
      sx={{
        padding: "0px",
        paddingTop: "50px",
        margin: "0px",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          width: "100%",
          margin: "0px",
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontWeight: "700",
            display: { sm: "block", xs: "none" },
            fontSize: "50px",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "200px",
            padding: "50px",
          }}
        >
          <div className="hero-div-cls-home">
            Hi,
            <br />I am a Web Developer
          </div>
          <img className="illu-minati-img-cls" src={illuIcon} alt="iconIllu" />
        </Typography>
      </Box>
    </Container>
  );
};

export default Hero;
