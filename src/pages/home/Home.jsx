import React, { Suspense, lazy, useEffect, useState } from "react";
import "./Home.css";
import { AppBar, Grid, Paper, Skeleton } from "@mui/material";
const Banner = lazy(() => import("../../components/banner/Banner"));
const Hero = lazy(() => import("../../components/hero section/Hero"));
import Box from "@mui/material/Box";
import rocketGif from "./images/rocket1.png";
import Features from "../../components/functions features/Features";
const Midbar = lazy(() => import("../../components/full width midbar/Midbar"));
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
const Clients = lazy(() => import("../../components/clients/Clients"));
const BothEndProjectsContainer = lazy(() =>
  import("../../components/both end projects panel/BothEndProjectsContainer")
);
import { config, useTransition, animated } from "@react-spring/web";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const DummyArrayFunctions = [
    { text: "Registration", icon: userIcon },
    { text: "Cart", icon: cartIcon },
    { text: "Pic Uploads", icon: pictureIcon },
    { text: "E-Mail", icon: mailIcon },
    { text: "Chat", icon: chatIcon },
    { text: "Membership", icon: membershipIcon },
    { text: "CRM", icon: userManageIcon },
    { text: "Admin Panel", icon: adminIcon },
    { text: "File Uploads", icon: fileIcon },
    { text: "Security", icon: securityIcon },
    { text: "Tracking", icon: trackIcon },
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
      <Suspense
        fallback={
          <Skeleton sx={{ width: "100%", height: "500px" }} animation="wave" />
        }
      >
        <Hero />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            sx={{ width: "1250px", height: "900px" }}
            animation="wave"
          />
        }
      >
        {transition((style, item) => (
          <animated.div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "-80px",
              ...style,
            }}
          >
            <Banner className="banner-functions-and-features-container">
              <Banner className="bn-one-with-aim-one">
                <div className="dv-contained-in-bnr">
                  <div className="section-dv-both">
                    <img src={rocketGif} alt="" className="graph" />
                  </div>
                  <div className="section-dv-both">
                    <h2>
                      Software to help you move forward, <span>faster</span>
                    </h2>
                    <p>
                      Let me make marketing, selling, fulfilling and servicing
                      your clients a breeze. Use my creative approach to create,
                      structure and most importantly, help you scale your
                      business achieving not just what you require but more.
                    </p>
                  </div>
                </div>
              </Banner>

              <div className="features-n-fun-cntn-r">
                <div className="cls-features-left-sec-all-features-container">
                  <h2 className="dual-banner-functions-container-h2">
                    Integrate any feature in your web app.
                  </h2>
                  <div className="features-all-container-dv-flx">
                    {DummyArrayFunctions.map((item) => {
                      return <Features item={item} />;
                    })}
                  </div>
                </div>
                <div className="div-for-func-right-of-features">
                  <h2 className="dual-banner-functions-container-h2">
                    Awesome internal properties
                  </h2>
                  <div className="features-all-container-dv-flx flx-2">
                    <Details />
                  </div>
                  <Box sx={{ backgroundColor: "blue", width: "100%" }}></Box>
                </div>
              </div>
            </Banner>
          </animated.div>
        ))}
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            sx={{ width: "1250px", height: "600px" }}
            animation="wave"
          />
        }
      >
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
      </Suspense>

      <Suspense
        fallback={
          <Skeleton sx={{ width: "100%", height: "200px" }} animation="wave" />
        }
      >
        <Midbar />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            sx={{ width: "1250px", height: "900px" }}
            animation="wave"
          />
        }
      >
        <div className="project-section-in-hme-home-cont">
          <BothEndProjectsContainer />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
