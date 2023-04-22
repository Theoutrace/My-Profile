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
import expressLogo from "./images/express.png";
import mysqllLogo from "./images/mysql.png";
import nodeLogo from "./images/node.png";
import socketIoLogo from "./images/logosocket.png";
import htmlLogo from "./images/html.png";
import sequelizeLogo from "./images/sequelize.png";
import firebaseLogo from "../full width midbar/images/firebase.png";
import "./Projects.css";

const Projects = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="project-outer-ls-cls-cvr">
      <div className="used-skills-all-frontend-projects">
        <p>Skills Used</p>
        <Tooltip title="React">
          <img src={reactLogo} />
        </Tooltip>
        <Tooltip title="Redux">
          <img src={reduxLogo} />
        </Tooltip>
        {props.heading === "Full-Stack" && (
          <>
            <Tooltip title="Node js">
              <img src={nodeLogo} />
            </Tooltip>
            <Tooltip title="Express">
              <img src={expressLogo} />
            </Tooltip>
            <Tooltip title="MySql">
              <img src={mysqllLogo} />
            </Tooltip>
            <Tooltip title="Sequelize">
              <img src={sequelizeLogo} />
            </Tooltip>
            <Tooltip title="SocketIO">
              <img src={socketIoLogo} />
            </Tooltip>
          </>
        )}
        <Tooltip title="Material UI">
          <img src={materialLogo} />
        </Tooltip>
        <Tooltip title="Scss/Sass">
          <img src={sassLogo} />
        </Tooltip>
        <Tooltip title="HTML">
          <img src={htmlLogo} />
        </Tooltip>
        <Tooltip title="CSS">
          <img src={cssLogo} />
        </Tooltip>
      </div>
      <div className="full-stack-or-frontend-desc-para-con-text">
        {props.heading === "Full-Stack" ? (
          <p className="clients-quote-ho-cntnr-p">
            Full-stack web app development is essential for creating dynamic,
            interactive, and user-friendly web applications. By developing both
            the client-side and server-side of an application, I create cohesive
            and scalable web applications that can handle a variety of complex
            tasks.
          </p>
        ) : (
          <p className="clients-quote-ho-cntnr-p">
            Frontend web development is essential for building user-friendly and
            intuitive interfaces. By specializing in frontend development, I
            focus on creating aesthetically pleasing and dynamic web
            applications that cater to the specific needs of modern businesses
            and consumers.
          </p>
        )}
      </div>

      <Banner className="banner-functions-and-features-container">
        {props.heading !== "Full-Stack" && (
          <Box
            sx={{
              width: "100%",
              display: { xs: "block", sm: "flex" },
            }}
          >
            <Banner className="project-disp-wide-top-one">
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
        )}
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
    </div>
  );
};

export default Projects;
