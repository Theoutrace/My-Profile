import { Box } from "@mui/material";
import React from "react";
import checkIcon from "./images/check.png";
import "./Details.css";
import Banner from "../banner/Banner";
import userImg from "./images/user.webp";
import lineImg from "./images/line.png";

const Details = () => {
  const details = {
    point1: { heading: "", intro: "" },
    point2: { heading: "", intro: "" },
    point3: { heading: "", intro: "" },
  };
  return (
    <div className="Features-details-single-outer">
      {/* <Box
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <img src={checkIcon} alt="" width="30px" height="30px" />
        <h2 className="dual-details-functions-container-h2">
          {details.point1.heading}
        </h2>
        <p>{details.point1.intro}</p>
      </Box>
      <Box
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <img src={checkIcon} alt="" width="30px" height="30px" />
        <h2 className="dual-details-functions-container-h2">
          {details.point2.heading}
        </h2>
        <p>{details.point2.intro}</p>
      </Box>
      <Box
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <img src={checkIcon} alt="" width="30px" height="30px" />
        <h2 className="dual-details-functions-container-h2">
          {details.point3.heading}
        </h2>
        <p>{details.point3.intro}</p>
      </Box> */}
      <Box
        sx={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "center",
          height: "550px",
        }}
      >
        <h2 className="dual-details-functions-container-h2">
          Awesome internal properties
        </h2>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              margin: "10px 10px",
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              color: "black",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            Real-time changes
          </Box>
          <Box
            sx={{
              width: "50%",
              margin: "10px 10px",
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              color: "black",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            Less API calls
          </Box>
        </Box>

        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              margin: "10px 10px",
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              color: "black",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            Pleasing UI/UX
          </Box>
          <Box
            sx={{
              width: "50%",

              margin: "10px 10px",
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              color: "black",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            Downloadable Reports
          </Box>
        </Box>

        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              margin: "10px 10px",
              marginBottom: "40px",
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              color: "black",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            Smooth API integration
          </Box>
          <Box
            sx={{
              width: "50%",

              margin: "10px 10px",
              marginBottom: "40px",
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              color: "black",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            Microservices creation
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "600px",
          position: "absolute",
          bottom: "-35px",
          left: "-50px",
          boxShadow: "none",
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
            width="600px"
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
