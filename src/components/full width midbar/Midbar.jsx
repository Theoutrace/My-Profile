import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import amzIcon from "./images/amazone.png";
import GmailIcon from "./images/gmail.png";
import whatsIcon from "./images/whatsapp.png";
import netflxIcon from "./images/netflix.png";
import zomatoIcon from "./images/zomato.png";
import tcsexamIcon from "./images/tcsion.png";
import firebaseIcon from "./images/firebase.png";
import "./Midbar.css";
import { useTransition, animated } from "@react-spring/web";

const Brands = [
  { image: netflxIcon, delay: 100, y: 0 },
  { image: GmailIcon, delay: 200, y: 0 },
  { image: whatsIcon, delay: 300, y: 0 },
  { image: amzIcon, delay: 400, y: 0 },
  { image: zomatoIcon, delay: 500, y: 0 },
  { image: tcsexamIcon, delay: 600, y: 0 },
  { image: firebaseIcon, delay: 700, y: 0 },
];

const Midbar = () => {
  const myRef = useRef();
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: {
      x: 0,
      y: 30,
      opacity: 0,
      height: "80px",
      width: "80px",
      margin: "0px",
    },
    enter: (item) => async (next) => {
      await next({
        y: 0,
        x: 0,
        delay: 0,
        opacity: 1,
        margin: "10px",
        height: "80px",
        width: "80px",
        display: "block",
      });
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setItems(() => [...Brands]);
      } else {
        // setItems(() => []);
      }
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div
      style={{
        width: "99.16vw",
        margin: "0px",
        padding: "10px 50px 10px 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#960E0E",
        overflowY: "hidden",
        marginBottom: "0px",
        position: "relative",
        minWidth: "1250px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
          minWidth: "1250px",
          padding: "0px 30px",
        }}
      >
        <div className="case-handle-heading-cmplx-text">
          <h4>Have handled feature complexity similar to</h4>
        </div>

        <div className="brand-cntnr-all-dv-cnt" ref={myRef}>
          {transition((style, item) => (
            <animated.div
              style={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                border: "1px solid grey",
                padding: "10px",
                ...style,
              }}
            >
              <img src={item.image} alt="" width="70" />
            </animated.div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default Midbar;
