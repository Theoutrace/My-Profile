import React from "react";
import "./ProjectDetails.css";
import { Box, Typography } from "@mui/material";
import tickIcon from "../projects/images/tick.png";
import openIcon from "../projects/images/open.png";

const ProjectDetails = (props) => {
  return (
    <div className={props.className}>
      <h2 className={props.classNameH2}>{props.heading}</h2>
      <p>{props.about}</p>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          right: "10px",
          top: "10px",
        }}
      >
        {props.skills.map((item) => {
          return (
            <Box
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.logo}
                className="skills-img-in-projects-per-project"
              />
            </Box>
          );
        })}
      </Box>
      <Box sx={{ marginTop: "10px", padding: "10px" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
            paddingLeft: "30px",
            fontSize: "15px",
            marginBottom: "10px",
            color: "grey",
          }}
        >
          Objective
        </Typography>
        {props.Story.map((item) => {
          return (
            <Box
              sx={{
                textAlign: "left",
                margin: "5px 10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <img src={tickIcon} className="img-each-step" />
                {item.step}
              </Box>
            </Box>
          );
        })}
      </Box>
      <button
        onClick={() =>
          window.open(
            "https://6425ccf5a6c23826ccd97098--fascinating-capybara-906eef.netlify.app/",
            "_blank"
          )
        }
      >
        Open
        <img src={openIcon} width="25" className="open-cls-btn-icn" />
      </button>
    </div>
  );
};

export default ProjectDetails;
