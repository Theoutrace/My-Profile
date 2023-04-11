import React from "react";
import { Box } from "@mui/material";
import "./Clients.css";
import seekhoLgo from "./images/seekho.png";
import sharpLgo from "./images/sharpener.png";
import wtfLgo from "./images/wtf.png";
import dynaLgo from "./images/dynamic.png";
import toLgo from "./images/theoutrace.png";
import SingleClients from "./SingleClients";
import { Carousel } from "@trendyol-js/react-carousel";
import leftIcon from "./images/left.png";

const Clients = () => {
  const clientArr = [
    {
      logo: sharpLgo,
      name: "Sharpener",
      website: "Sharpener.tech",
      intro:
        "Empowering the youth of India by providing learning access and job guidance from professionals in the best product companies.",
    },
    {
      logo: seekhoLgo,
      name: "Seekho",
      website: "Seekho.ai",
      intro:
        "Seekho is an AI-driven upskilling platform that takes you from dreaming about a job, to your dream job. Seekho About Seekho. Founded in 2021.",
    },
    {
      logo: wtfLgo,
      name: "WTF Fitness",
      website: "Wtfup.me",
      intro:
        "WTF is India's leading affordable premium fitness brand that is driven by AI technology. With over 40+ gyms spread across the country.",
    },
    {
      logo: dynaLgo,
      name: "Dynamic dreamz",
      website: "Dynamicdreamz.com",
      intro:
        "From web designs to custom web development, We’ve been working with popular web technologies framework from last 15 years.",
    },
    {
      logo: toLgo,
      name: "Theoutrace",
      website: "Theoutrace.com",
      intro:
        "Theoutrace is a recruitment platform that provides hiring-related services to corporate agencies and to job seekers in India and overseas.",
    },
  ];
  return (
    <Box
      sx={{
        width: "65%",
        borderRadius: "10px",
        marginBottom: "75px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel
        show={1.5}
        swiping={true}
        responsive={true}
        useArrowKeys={true}
        className="carousel-cls"
        rightArrow={
          <img
            src={leftIcon}
            alt=">"
            width="50px"
            className="img-dir-left-for-right pointer-aro"
          />
        }
        leftArrow={
          <img src={leftIcon} alt="<" width="50px" className="pointer-aro" />
        }
      >
        {clientArr.map((item) => {
          return <SingleClients item={item} />;
        })}
      </Carousel>
    </Box>
  );
};

export default Clients;
