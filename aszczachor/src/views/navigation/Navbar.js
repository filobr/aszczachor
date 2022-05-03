import styles from "views/navigation/navbar.module.css";
import logo from "assets/logo/logo.jpg";
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

  const [openFashionStylingDropdown, setOpenFashionStylingDropdown] =
    useState(false);
  const [openCollectionsDropdown, setOpenCollectionsDropdown] = useState(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const refFashion = useRef();
  const menuBtn = useRef();
  const refCollections = useRef();

  const onHamburgerClick = () => {
    openHamburgerMenu
      ? setOpenHamburgerMenu(false)
      : setOpenHamburgerMenu(true);
  };

  useEffect(() => {
    const onBodyClick = ({ target }) => {
      let ref;
      if (openFashionStylingDropdown) {
        ref = refFashion;
      } else if (openCollectionsDropdown) {
        ref = refCollections;
      }

      if (ref.current && !ref.current.contains(target)) {
        return;
      }
      setOpenFashionStylingDropdown(false);
      setOpenCollectionsDropdown(false);
    };

    document.addEventListener("click", onBodyClick, true);

    return () => document.removeEventListener("click", onBodyClick, true);
  });

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mobile}>
          <div className={styles.mobDiv}></div>
          <div className={styles.logo}>
            <Link to={routes.mainPage.path}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.hamburgerIcon}>
            <img
              src={openHamburgerMenu ? closeIcon : hamburgerIcon}
              alt=""
              onClick={onHamburgerClick}
              ref={menuBtn}
            />
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
                  ref={refFashion}
                />
              ) : null}
            </div>

            <div className={styles.dropdownMenu}>
              <NavButton
                label="Collections"
                onClick={() => setOpenCollectionsDropdown(true)}
              />
              {openCollectionsDropdown ? (
                <Dropdown
                  items={collectionsDropdown}
                  onClick={() => setOpenCollectionsDropdown(false)}
                  ref={refCollections}
                />
              ) : null}
            </div>
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
          collections={collectionsDropdown}
          links={mobileMenuList}
          openMenu={() => setOpenHamburgerMenu(false)}
          menuBtn={menuBtn}
        />
      ) : null}
    </>
  );
};

export default Navbar;
