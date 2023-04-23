import { Box } from "@mui/material";
import React from "react";
import "./Feature.css";

const Features = (props) => {
  return (
    <div className="Features-single-outer">
      <div className="single-feature-icon-heading-cntnr">
        {props.item.icon ? (
          <img src={props.item.icon} width="50px" />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.item.imgs.map((item) => {
              return (
                <div className="more-sec-in-features-last-btn">
                  <img src={item.icon} width="25px" />
                </div>
              );
            })}
          </Box>
        )}
      </div>
      <div>{props.item.text}</div>
    </div>
  );
};

export default Features;
