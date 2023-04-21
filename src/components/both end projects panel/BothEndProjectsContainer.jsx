import React, { useState } from "react";
import "./BothEndProjectsContainer.css";
import Projects from "../projects/Projects";
import { Box } from "@mui/material";

const BothEndProjectsContainer = () => {
  const [showFullStack, setShowFullStack] = useState(true);
  return (
    <>
      <Box sx={{ width: "750px" }}>
        <h2 className="h2-project-main-heading">Projects</h2>
        <p className="conf-statement-opening-both-type-projects-cls">
          Confidentiality agreements make it challenging to prove my skills
          based on past private projects, but presenting similar personal
          projects can provide a better understanding.
        </p>
      </Box>
      <div className="pro-in-sec-con-in-switch-both">
        <div className="switch-selec-both-on-off">
          <h2
            className={`developer-core-end-backend-or-frontend-cls ${
              showFullStack ? "full-stack-selected-btn-clr" : "not-selected"
            }`}
            onClick={() => setShowFullStack(true)}
          >
            <span>Full Stack Projects</span>
          </h2>
          <h2
            className={`developer-core-end-backend-or-frontend-cls ${
              showFullStack ? "not-selected" : "full-stack-selected-btn-clr"
            }`}
            onClick={() => setShowFullStack(false)}
          >
            <span>Front End Projects</span>
          </h2>
        </div>
        {showFullStack ? (
          <Projects heading="Full-Stack" />
        ) : (
          <Projects heading="Front-End" />
        )}
      </div>
    </>
  );
};

export default BothEndProjectsContainer;
