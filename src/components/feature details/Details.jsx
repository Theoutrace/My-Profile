import { Box } from "@mui/material";
import React from "react";
import "./Details.css";
import userImg from "./images/user.webp";

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
            return <div className="single-fun-add-feature-right">{item}</div>;
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
        <div className="image-holder-dv-in">
          <img
            src={userImg}
            alt=""
            width="625px"
            className="img-user-smile-container-in-home"
          />
        </div>
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
