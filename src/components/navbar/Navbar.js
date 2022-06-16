import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "components/navbar/navbar.module.css";
import logo from "assets/logo/logo.jpg";
import NavButton from "components/navButton/NavButton";
import igIcon from "assets/socialButtons/instagram_icon.png";
import fbIcon from "assets/socialButtons/facebook_icon.png";
import mailIcon from "assets/socialButtons/mail_icon.png";
import hamburgerIcon from "assets/mobileMenu/hamburger-menu.png";
import closeIcon from "assets/mobileMenu/close-icon.png";
import Dropdown from "components/dropdown/Dropdown";

import MobileMenu from "components/mobileMenu/MobileMenu";
import NavButtonLink from "components/navButton/NavButtonLink";

const Navbar = ({ routes, socialPaths }) => {
  const fashionStylingDropdown = [
    routes.fashionEditorials,
    routes.videoclip,
    routes.influencers,
    routes.fashionCampaign,
  ];

  const collectionsDropdown = [
    routes.collections,
    routes.editorials,
    routes.campaign,
    routes.collectionVideoClip,
  ];

  const newCollectionDropdown = [routes.faceTime];

  const mobileMenuList = [routes.about];

  const [isFashionStylingOpened, setIsFashionStylingOpened] = useState(false);
  const [isCollectionsOpened, setIsCollectionsOpened] = useState(false);
  const [isNewCollectionOpened, setIsNewCollectionOpened] = useState(false);
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false);
  const menuBtn = useRef();

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mobile}>
          <div className={styles.logo}>
            <Link to={routes.mainPage.path}>
              <img
                src={logo}
                alt="logo"
                onClick={() => window.scrollTo(0, 0)}
              />
            </Link>
          </div>
          <div className={styles.hamburgerIcon}>
            <img
              src={isHamburgerMenuOpened ? closeIcon : hamburgerIcon}
              alt="hamburger"
              onClick={() => setIsHamburgerMenuOpened(!isHamburgerMenuOpened)}
              ref={menuBtn}
            />
          </div>
        </div>
        <div className={styles.navigationContainerDesktop}>
          <div className={styles.emptyDiv}></div>
          <div className={styles.buttonBar}>
            <div
              className={styles.dropdownMenu}
              onMouseLeave={() => setIsFashionStylingOpened(false)}
            >
              <NavButton
                label="Fashion Styling"
                onMouseEnter={() => setIsFashionStylingOpened(true)}
              />
              {isFashionStylingOpened && (
                <Dropdown
                  items={fashionStylingDropdown}
                  onClick={() => setIsFashionStylingOpened(false)}
                />
              )}
            </div>
            <div
              className={styles.dropdownMenu}
              onMouseLeave={() => setIsCollectionsOpened(false)}
            >
              <NavButton
                label="Collections"
                onMouseEnter={() => setIsCollectionsOpened(true)}
              />
              {isCollectionsOpened && (
                <Dropdown
                  items={collectionsDropdown}
                  onClick={() => setIsCollectionsOpened(false)}
                />
              )}
            </div>
            <div
              className={styles.dropdownMenu}
              onMouseLeave={() => setIsNewCollectionOpened(false)}
            >
              <NavButton
                label="Home Office Collection"
                onMouseEnter={() => setIsNewCollectionOpened(true)}
              />
              {isNewCollectionOpened && (
                <Dropdown
                  items={newCollectionDropdown}
                  onClick={() => setIsNewCollectionOpened(false)}
                />
              )}
            </div>
            <NavButtonLink label={routes.about.label} to={routes.about.path} />
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
          newCollection={newCollectionDropdown}
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
  socialPaths: PropTypes.object,
};

export default Navbar;
