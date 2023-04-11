import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Header.css";

const drawerWidth = 240;
const navItems = [
  <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active" : "inActive")}
  >
    Home
  </NavLink>,
  <NavLink
    to="/about"
    className={({ isActive }) => (isActive ? "active" : "inActive")}
  >
    About
  </NavLink>,
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#333333", height: "100%" }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{
          my: 2,
          fontFamily: "poppins",
          display: "flex",
          justifyContent: "center",
          fontSize: "35px",
          textAlign: "center",
          padding: "10px",
          margin: "0px",
          color: "white",
        }}
      >
        Prakash <span className="span-div-header-logo">.</span>
      </Typography>
      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        <ListItem sx={{}} disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              padding: "0px",
              margin: "0px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            <ListItemText
              primary={
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-m" : "inActive-m"
                  }
                >
                  Home <div className="cls-marker-bdr-in-selected-opt"></div>
                </NavLink>
              }
              sx={{
                padding: "0px",
                margin: "0px",
                width: "100%",
                marginBottom: "10px",
              }}
            />
            <ListItemText
              primary={
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-m" : "inActive-m"
                  }
                >
                  About <div className="cls-marker-bdr-in-selected-opt"></div>
                </NavLink>
              }
              sx={{
                padding: "0px",
                margin: "0px",
                width: "100%",
                marginBottom: "10px",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#333333" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              width: "60px",
              height: "60px",
              display: { sm: "none" },
              fontFamily: '"Pacifico", cursive',
              borderRadius: "10px",
              padding: "0px",
              margin: "5px 2px",
              fontSize: "35px",
              backgroundColor: "black",
            }}
          >
            P <span className="span-div-header-logo-m">.</span>
          </IconButton>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              fontFamily: "poppins",
              textAlign: "left",
              margin: "0px",
              marginLeft: "10px",
              padding: "0px",
              fontSize: "35px",
            }}
          >
            Prakash <span className="span-div-header-logo">.</span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor: "black",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
