import React, { useState } from "react";
import { AppBar, Menu, MenuItem, Tab, Tabs, Toolbar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const pages = [
  "Editorials",
  "Videoclip",
  "Influencers",
  "Collections",
  "About",
];

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  const handleClick = event => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <React.Fragment>
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
            <Tab component={Link} to="/collections" label={pages[3]} />
            <Tab component={Link} to="/about" label={pages[4]} />
          </Tabs>
          <FacebookIcon />
          <InstagramIcon />
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
        <MenuItem component={Link} to="/editorials">
          {pages[0]}
        </MenuItem>
        <MenuItem component={Link} to="/videoclip">
          {pages[1]}
        </MenuItem>
        <MenuItem component={Link} to="/influencers">
          {pages[2]}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Header;
