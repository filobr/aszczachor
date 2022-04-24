import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import NavButton from "./NavButton";
import igIcon from "../../assets/socialButtons/instagram_icon.png";
import fbIcon from "../../assets/socialButtons/facebook_icon.png";
import mailIcon from "../../assets/socialButtons/mail_icon.png";

const Navbar = ({ routes }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.mobileMenuIcon}></div>
        <div className={styles.buttonBar}>
          <NavButton label="Fashion Styling" />
          <NavButton
            to={routes.collections.path}
            label={routes.collections.label}
          />
          <NavButton to={routes.about.path} label={routes.about.label} />
        </div>
        <div className={styles.socialButtons}>
          <img src={fbIcon} alt="facebook-icon" />
          <img src={igIcon} alt="instagram-icon" />
          <img src={mailIcon} alt="email-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
