import React, { useState } from "react";
import { AppBar, Menu, MenuItem, Tab, Tabs, Toolbar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Header = ({ route }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  const handleClick = event => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <AppBar
        sx={{
          background: "#FFFFFF",
          color: "#000000",
          position: "sticky",
        }}
      >
        <Toolbar>
          <Tabs sx={{ marginLeft: "auto", marginRight: "auto" }}>
            <Tab onClick={handleClick} label="Fashion Styling" />
            <Tab
              component={Link}
              to={route.collections.path}
              label={route.collections.label}
            />
            <Tab
              component={Link}
              to={route.about.path}
              label={route.about.label}
            />
          </Tabs>
          <FacebookIcon />
          <InstagramIcon
            sx={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.instagram.com/aleksandra.szczachor/")
            }
          />
          <EmailIcon />
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorElement}
        id="fashion-stylings-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <MenuItem component={Link} to={route.editorials.path}>
          {route.editorials.label}
        </MenuItem>
        <MenuItem component={Link} to={route.videoclip.path}>
          {route.videoclip.label}
        </MenuItem>
        <MenuItem component={Link} to={route.influencers.path}>
          {route.influencers.label}
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
