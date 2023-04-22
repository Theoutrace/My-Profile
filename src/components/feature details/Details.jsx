import { Box } from "@mui/material";
import React from "react";
import checkIcon from "./images/check.png";
import "./Details.css";
import Banner from "../banner/Banner";
import userImg from "./images/user.webp";
import lineImg from "./images/line.png";

const Details = () => {
  const initialTextArray = [
    "Real-time changes",
    "Less API calls",
    "Pleasing UI/UX",
    "Downloadable Reports",
    "Smooth API integration",
    "Microservices creation",
  ];
  const details = {
    point1: { heading: "", intro: "" },
    point2: { heading: "", intro: "" },
    point3: { heading: "", intro: "" },
  };
  return (
    <div className="Features-details-single-outer">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {initialTextArray.map((item) => {
            return (
              <Box
                sx={{
                  minWidth: "40%",
                  margin: "10px",
                  backgroundColor: "white",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  color: "black",
                  fontWeight: "500",
                  boxShadow:
                    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                }}
              >
                {item}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "0px",
          left: "0px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "0px 0px 10px 10px",
            height: "300px",
            color: "black",
            overflow: "hidden",
          }}
        >
          <img
            src={userImg}
            alt=""
            width="625px"
            className="img-user-smile-container-in-home"
          />
        </Box>
      </Box>
      <div className="overlay-gls-user">
        <h2>
          Make each user <br />
          feel <span>Special</span>
        </h2>
        <div>
          <h3>Get fast & secure builds</h3>
        </div>
      </div>
    </div>
  );
};

export default Details;
