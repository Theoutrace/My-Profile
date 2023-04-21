import React, { Suspense, lazy, useEffect, useState } from "react";
import "./Home.css";
import { AppBar, Grid, Paper, Skeleton } from "@mui/material";
import Banner from "../../components/banner/Banner";
const Hero = lazy(() => import("../../components/hero section/Hero"));
import Box from "@mui/material/Box";
import rocketGif from "./images/rocket.png";
import Features from "../../components/functions features/Features";
import Midbar from "../../components/full width midbar/Midbar";
import userIcon from "./images/user.png";
import cartIcon from "./images/cart.png";
import pictureIcon from "./images/picture.png";
import mailIcon from "./images/mail.png";
import chatIcon from "./images/chat.png";
import membershipIcon from "./images/membership.png";
import userManageIcon from "./images/usermanage.png";
import adminIcon from "./images/admin.png";
import fileIcon from "./images/file.png";
import securityIcon from "./images/security.png";
import trackIcon from "./images/track.png";
import matchIcon from "./images/match.png";
import questIcon from "./images/quest.png";
import ideaIcon from "./images/idea.png";
import plusIcon from "./images/plus.png";
import Details from "../../components/feature details/Details";
import Clients from "../../components/clients/Clients";
import Projects from "../../components/projects/Projects";
import BothEndProjectsContainer from "../../components/both end projects panel/BothEndProjectsContainer";
import { config, useTransition, animated } from "@react-spring/web";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const DummyArrayFunctions = [
    { text: "User Registration", icon: userIcon },
    { text: "Cart System", icon: cartIcon },
    { text: "Picture Upload", icon: pictureIcon },
    { text: "E-Mail Service", icon: mailIcon },
    { text: "Chat", icon: chatIcon },
    { text: "Membership", icon: membershipIcon },
    { text: "User Management", icon: userManageIcon },
    { text: "Admin Panel", icon: adminIcon },
    { text: "File Uploads", icon: fileIcon },
    { text: "Security", icon: securityIcon },
    { text: "Activity Tracking", icon: trackIcon },
    {
      text: "More",
      imgs: [
        { icon: matchIcon },
        { icon: questIcon },
        { icon: ideaIcon },
        { icon: plusIcon },
      ],
    },
  ];

  const transition = useTransition(isVisible, {
    from: {
      opacity: 0,
      x: 0,
      y: 200,
      delay: 2000,
      config: { mass: 5, friction: 0, tension: 0 },
    },
    enter: (item) => async (next) => {
      await next({
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1000,
        config: { mass: 5, friction: 40, tension: 100 },
      });
    },
  });
  useEffect(() => {
    setIsVisible(() => true);
  }, []);

  return (
    <div className="Home-page-outer-component">
      <Suspense fallback={<Skeleton height={200} animation="wave" />}>
        <Hero />
      </Suspense>
      {transition((style, item) => (
        <animated.div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            ...style,
          }}
        >
          <Banner className="banner-functions-and-features-container">
            <Box
              sx={{
                width: "100%",
                display: { xs: "block", sm: "flex" },
              }}
            >
              <Banner className="bn-one-with-aim-one">
                <div className="img-cntnr">
                  <img src={rocketGif} alt="" width="120px" />
                </div>
                <div className="txt-cntnr-h2-p">
                  <h2>
                    Software to help you move forward, <span>faster</span>
                  </h2>
                  <p>
                    Let me make marketing, selling, fulfilling and servicing
                    your clients a breeze. Use my creative approach to create,
                    structure and most importantly, help you scale your business
                    achieving not just what you require but more.
                  </p>
                </div>
              </Banner>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "flex" },
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "30px",
                  maxWidth: "600px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  margin: "10px",
                  backgroundImage:
                    "linear-gradient( 180deg, #ff057c 0%, #8d0b93 50%, #321575 100%)",
                }}
              >
                <h2 className="dual-banner-functions-container-h2">
                  Integrate any feature in your web app.
                </h2>
                <div className="features-all-container-dv-flx">
                  {DummyArrayFunctions.map((item) => {
                    return <Features item={item} />;
                  })}
                </div>
              </Box>
              <Box
                sx={{
                  height: "620px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "30px",
                  maxWidth: "600px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  margin: "10px",
                  backgroundImage:
                    "linear-gradient( 180deg, #ff057c 0%, #8d0b93 50%, #321575 100%)",
                }}
              >
                <div className="features-all-container-dv-flx">
                  <Details />
                </div>
                <Box sx={{ backgroundColor: "blue", width: "100%" }}></Box>
              </Box>
            </Box>
          </Banner>
        </animated.div>
      ))}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "70px 0px 0px 0px",
          backgroundColor: "#f5f5f7",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <h2 className="clients-heading-home-hm-cntnr-h2">Clients</h2>
        <p className="clients-quote-ho-cntnr-p">
          Client satisfaction is not just a goal, it's an
          <span>obligation</span>
        </p>
        <Clients />
      </Box>
      <Midbar />
      <div className="project-section-in-hme-home-cont">
        <BothEndProjectsContainer />
      </div>
    </div>
  );
};

export default Home;
