import styles from "components/navigation/navbar.module.css";
import logo from "assets/logo/logo.jpg";
import NavButtonLink from "components/navigation/NavButtonLink";
import NavButton from "components/navigation/NavButton";
import igIcon from "assets/socialButtons/instagram_icon.png";
import fbIcon from "assets/socialButtons/facebook_icon.png";
import mailIcon from "assets/socialButtons/mail_icon.png";
import hamburgerIcon from "assets/mobileMenu/hamburger-menu.png";
import closeIcon from "assets/mobileMenu/close-icon.png";
import Dropdown from "components/navigation/Dropdown";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "components/navigation/MobileMenu";
import PropTypes from "prop-types";

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

  const collectionsDropdown = [
    routes.campaign,
    routes.collections,
    routes.fashionEditorials,
  ];

  const mobileMenuList = [routes.about];

  const [isFashionStylingOpened, setIsFashionStylingOpened] = useState(false);
  const [isCollectionsOpened, setIsCollectionsOpened] = useState(false);
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false);
  const refFashion = useRef();
  const menuBtn = useRef();
  const refCollections = useRef();

  useEffect(() => {
    const onBodyClick = ({ target }) => {
      if (
        (!refFashion.current && refFashion.current.contains(target)) ||
        (!refCollections.current && refCollections.current.contains(target))
      ) {
        return;
      }
      setIsFashionStylingOpened(false);
      setIsCollectionsOpened(false);
    };

    document.addEventListener("click", onBodyClick, true);

    return () => document.removeEventListener("click", onBodyClick, true);
  }, [setIsFashionStylingOpened, setIsCollectionsOpened]);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mobile}>
          <div className={styles.logo}>
            <Link to={routes.mainPage.path}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.hamburgerIcon}>
            <img
              src={isHamburgerMenuOpened ? closeIcon : hamburgerIcon}
              alt=""
              onClick={() => setIsHamburgerMenuOpened(!isHamburgerMenuOpened)}
              ref={menuBtn}
            />
          </div>
        </div>
        <div className={styles.navigationContainerDesktop}>
          <div className={styles.emptyDiv}></div>
          <div className={styles.buttonBar}>
            <div className={styles.dropdownMenu} ref={refFashion}>
              <NavButton
                label="Fashion Styling"
                onClick={() =>
                  setIsFashionStylingOpened(!isFashionStylingOpened)
                }
              />
              {isFashionStylingOpened && (
                <Dropdown
                  items={fashionStylingDropdown}
                  onClick={() => setIsFashionStylingOpened(false)}
                />
              )}
            </div>

            <div className={styles.dropdownMenu} ref={refCollections}>
              <NavButton
                label="Collections"
                onClick={() => setIsCollectionsOpened(!isCollectionsOpened)}
              />
              {isCollectionsOpened && (
                <Dropdown
                  items={collectionsDropdown}
                  onClick={() => setIsCollectionsOpened(false)}
                />
              )}
            </div>
            <NavButtonLink to={routes.about.path} label={routes.about.label} />
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
      {isHamburgerMenuOpened && (
        <MobileMenu
          fashionStyling={fashionStylingDropdown}
          collections={collectionsDropdown}
          links={mobileMenuList}
          SetIsMenuOpened={() => setIsHamburgerMenuOpened(false)}
          menuBtn={menuBtn}
        />
      )}
    </>
  );
};

Navbar.propTypes = {
  routes: PropTypes.object,
};

export default Navbar;
