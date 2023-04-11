import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import amzIcon from "./images/amazone.png";
import GmailIcon from "./images/gmail.png";
import whatsIcon from "./images/whatsapp.png";
import netflxIcon from "./images/netflix.png";
import zomatoIcon from "./images/zomato.png";
import tcsexamIcon from "./images/tcsion.png";
import firebaseIcon from "./images/firebase.png";
import "./Midbar.css";

const Midbar = () => {
  const Brands = [
    { image: netflxIcon },
    { image: GmailIcon },
    { image: whatsIcon },
    { image: amzIcon },
    { image: zomatoIcon },
    { image: tcsexamIcon },
    { image: firebaseIcon },
  ];
  return (
    <div
      style={{
        width: "99.16vw",
        margin: "0px",
        padding: "10px 50px 0px 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#960E0E",
        // backgroundColor: "rgba(225, 231, 236, 0.076)",
        overflowY: "hidden",
        marginBottom: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
          padding: "0px 30px",
        }}
      >
        <div className="case-handle-heading-cmplx-text">
          <h4>Have handled feature complexity similar to</h4>
        </div>
        <div className="brand-cntnr-all-dv-cnt">
          {Brands.map((item) => {
            return (
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  margin: "10px 10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  boxShadow:
                    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                }}
              >
                <img src={item.image} alt="" width="70" />
              </Box>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default Midbar;
