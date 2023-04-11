import { Box } from "@mui/material";
import React from "react";
import "./Feature.css";

const Features = (props) => {
  return (
    <div className="Features-single-outer">
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          margin: "10px",
          width: "100px",
          height: "100px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.09) 0px 6px 6px",
          cursor: "pointer",
        }}
      >
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
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: "8px",
                    margin: "2px",
                    borderRadius: "10px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.10) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <img src={item.icon} width="25px" />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
      <div>{props.item.text}</div>
    </div>
  );
};

export default Features;
