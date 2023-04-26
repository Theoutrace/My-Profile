import { Box } from "@mui/material";
import React from "react";
import "./SingleClients.css";

const SingleClients = (props) => {
  return (
    <div>
      <div className="single-client-box-outer">
        <Box sx={{ display: "flex" }}>
          <div className="div-img-container-sngl-cli-ent">
            <img src={props.item.logo} width="80px" />
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className="client-website-text">{props.item.name}</h2>
            <h3 className="client-website-website">{props.item.website}</h3>
          </Box>
        </Box>
        <h3 className="about-text--client-single">About</h3>
        <p className="p-intro-client-single">{props.item.intro}</p>
      </div>
    </div>
  );
};

export default SingleClients;
