import styles from "components/header/navbar.module.css";
import logo from "assets/logo/logo.jpg";
import NavButton from "components/header/NavButton";
import igIcon from "assets/socialButtons/instagram_icon.png";
import fbIcon from "assets/socialButtons/facebook_icon.png";
import mailIcon from "assets/socialButtons/mail_icon.png";
import hamburgerIcon from "assets/mobileMenu/hamburger-menu.png";
import closeIcon from "assets/mobileMenu/close-icon.png";
import Dropdown from "components/header/Dropdown";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "components/header/MobileMenu";

const Navbar = ({ routes }) => {
  const socialPaths = {
    Facebook:
      "https://www.facebook.com/Aleksandra-Szcz%C4%85chor-570481960100580",
    Instagram: "https://www.instagram.com/aleksandra.szczachor/",
    Email: "mailto:aszczachor@gmail.com",
  };

  const fashionStylingDropdown = [
    routes.editorials,
    routes.videoclip,
    routes.influencers,
  ];

  const mobileMenuList = [routes.collections, routes.about];

  const [openFashionStylingDropdown, setOpenFashionStylingDropdown] =
    useState(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const ref = useRef();

  const onHamburgerClick = () => {
    openHamburgerMenu
      ? setOpenHamburgerMenu(false)
      : setOpenHamburgerMenu(true);
  };

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        return;
      }
      setOpenFashionStylingDropdown(false);
    };

    document.addEventListener("click", onBodyClick, true);

    return () => document.removeEventListener("click", onBodyClick, true);
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mobile}>
          <div className={styles.hamburgerIcon}>
            <img
              src={openHamburgerMenu ? closeIcon : hamburgerIcon}
              alt=""
              onClick={onHamburgerClick}
            />
          </div>
          <div className={styles.logo}>
            <Link to={routes.mainPage.path}>
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className={styles.navigationContainerDesktop}>
          <div className={styles.emptyDiv}></div>
          <div className={styles.buttonBar}>
            <div className={styles.dropdownMenu}>
              <NavButton
                label="Fashion Styling"
                onClick={() => setOpenFashionStylingDropdown(true)}
              />
              {openFashionStylingDropdown ? (
                <Dropdown
                  items={fashionStylingDropdown}
                  onClick={() => setOpenFashionStylingDropdown(false)}
                  ref={ref}
                />
              ) : null}
            </div>
            <NavButton
              to={routes.collections.path}
              label={routes.collections.label}
            />
            <NavButton to={routes.about.path} label={routes.about.label} />
          </div>
          <div className={styles.socialButtons}>
            <img
              src={fbIcon}
              alt="facebook-icon"
              onClick={() => window.open(socialPaths.Facebook)}
            />
            <img
              src={igIcon}
              alt="instagram-icon"
              onClick={() => window.open(socialPaths.Instagram)}
            />
            <a href={socialPaths.Email}>
              <img src={mailIcon} alt="email-icon" />
            </a>
          </div>
        </div>
      </div>
      {openHamburgerMenu ? (
        <MobileMenu
          fashionStyling={fashionStylingDropdown}
          links={mobileMenuList}
          onClick={() => setOpenHamburgerMenu(false)}
        />
      ) : null}
    </>
  );
};

export default Navbar;
