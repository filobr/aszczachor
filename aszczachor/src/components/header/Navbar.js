import styles from "components/header/navbar.module.css";
import logo from "assets/logo.png";
import NavButton from "components/header/NavButton";
import igIcon from "assets/socialButtons/instagram_icon.png";
import fbIcon from "assets/socialButtons/facebook_icon.png";
import mailIcon from "assets/socialButtons/mail_icon.png";
import Dropdown from "components/header/Dropdown";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ routes }) => {
  const socialPaths = {
    Facebook: "",
    Instagram: "https://www.instagram.com/aleksandra.szczachor/",
    Email: "",
  };

  const fashionStylingDropdown = [
    routes.editorials,
    routes.videoclip,
    routes.influencers,
  ];

  const [openFashionStylingDropdown, setOpenFashionStylingDropdown] =
    useState(false);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.logo}>
          <Link to={routes.mainPage.path}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.navigationContainer}>
          <div className={styles.mobileMenuIcon}></div>
          <div className={styles.buttonBar}>
            <NavButton
              label="Fashion Styling"
              onClick={() => setOpenFashionStylingDropdown(true)}
            />
            <NavButton
              to={routes.collections.path}
              label={routes.collections.label}
            />
            <NavButton to={routes.about.path} label={routes.about.label} />
          </div>
          <div className={styles.socialButtons}>
            <img src={fbIcon} alt="facebook-icon" />
            <img
              src={igIcon}
              alt="instagram-icon"
              onClick={() => window.open(socialPaths.Instagram)}
            />
            <img src={mailIcon} alt="email-icon" />
          </div>
        </div>
      </div>
      {openFashionStylingDropdown ? (
        <Dropdown
          items={fashionStylingDropdown}
          onClick={() => setOpenFashionStylingDropdown(false)}
        />
      ) : null}
    </>
  );
};

export default Navbar;
