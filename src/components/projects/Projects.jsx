import React, { useState } from "react";
import cricketDynamicsImg from "./images/cricketDynamics.png";
import wtfGymsImg from "./images/wtfgyms.png";
import mailboxImg from "./images/mailbox.png";
import Banner from "../banner/Banner";
import { Box, Tooltip, Typography } from "@mui/material";
import ProjectDetails from "../project details/ProjectDetails";
import reactLogo from "./images/react.png";
import reduxLogo from "./images/redux.png";
import sassLogo from "./images/scss.png";
import cssLogo from "./images/css.png";
import materialLogo from "./images/material.png";
import firebaseLogo from "../full width midbar/images/firebase.png";
import "./Projects.css";

const Projects = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <h2 className="clients-heading-home-hm-cntnr-h2 h2-in-personal-project-heading-clr">
        <span>Front-End</span> Projects
      </h2>
      <div className="used-skills-all-frontend-projects">
        <p>Skills Used</p>
        <Tooltip title="React">
          <img src={reactLogo} />
        </Tooltip>
        <Tooltip title="Redux">
          <img src={reduxLogo} />
        </Tooltip>
        <Tooltip title="Material UI">
          <img src={materialLogo} />
        </Tooltip>
        <Tooltip title="Scss/Sass">
          <img src={sassLogo} />
        </Tooltip>
        <Tooltip title="CSS">
          <img src={cssLogo} />
        </Tooltip>
      </div>
      <p className="clients-quote-ho-cntnr-p in-lower-pannel-for-clr">
        Confidentiality agreements make it challenging to prove my skills based
        on past private projects, but presenting similar personal projects can
        provide a better understanding.
      </p>
      <Banner className="banner-functions-and-features-container">
        <Box
          sx={{
            width: "100%",
            display: { xs: "block", sm: "flex" },
          }}
        >
          <Banner className="bn-one-with-aim-one lower-bnr-cls-projects">
            <div
              className="img-cntnr-in-personal-projects-top"
              onMouseEnter={() => setShowOverlay(true)}
              onMouseLeave={() => setShowOverlay(false)}
            >
              <img
                src={cricketDynamicsImg}
                alt=""
                className="cd-cls-img-wide-ban-img"
              />

              {showOverlay && (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    borderRadius: "5px",
                  }}
                >
                  <ProjectDetails
                    heading="Cricket Dynamics"
                    about="Optimization techniques used to make the application load faster"
                    skills={[
                      { name: "React", logo: reactLogo },
                      { name: "Redux", logo: reduxLogo },
                      { name: "MUI", logo: materialLogo },
                    ]}
                    Story={[
                      { step: "Need 4 pages: Home, players, teams, matches" },
                      { step: "Players should create players" },
                      { step: "Teams  should create teams" },
                      { step: "Matches should organise matches" },
                      {
                        step: "Home needs to display all of these and remaining players if any",
                      },
                    ]}
                    className="in-landscape-project-pannel"
                    classNameH2="h2-cls-details-in-prjct-dtls"
                  />
                </Box>
              )}
            </div>
          </Banner>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "flex" }, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "10px",
              backgroundColor: "#1e2020",
              position: "relative",
            }}
          >
            <div>
              <img src={wtfGymsImg} className="left-btm-project-sec-cls" />
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#1e2020",
              margin: "10px",
            }}
          >
            <img src={mailboxImg} className="left-btm-project-sec-cls" />
          </Box>
        </Box>
      </Banner>
    </>
  );
};

export default Projects;
