import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Box, Typography } from "@mui/material";
import heart from "./assets/heart.png";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Typography sx={{ marginRight: "10px", fontWeight: "500" }}>
          Thanks for visiting! If you know any recruiters or hiring managers who
          might be interested in my work, please feel free to share this
          portfolio with them. I'd greatly appreciate it!
        </Typography>
        {/* <img src={heart} alt="" width="20px" /> */}
      </Box>
    </div>
  );
}

export default App;
