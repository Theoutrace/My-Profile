import { Box } from "@mui/material";
import React from "react";
import "./SingleClients.css";

const SingleClients = (props) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#f5f5f7",
          margin: "10px",
          padding: "30px",
          borderRadius: "20px",
          color: "black",
          textAlign: "left",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          "&:hover": {
            boxShadow:
              "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
          },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
              margin: "20px",
              backgroundImage:
                "linear-gradient(to top, #dfe9f3 0%, white 100%)",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <img src={props.item.logo} width="80px" />
          </Box>
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
      </Box>
    </div>
  );
};

export default SingleClients;
