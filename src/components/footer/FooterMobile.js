import igIcon from "assets/socialButtons/instagram_icon.png";
import fbIcon from "assets/socialButtons/facebook_icon.png";
import mailIcon from "assets/socialButtons/mail_icon.png";
import styles from "components/footer/footer.module.css";
import PropTypes from "prop-types";

const FooterMobile = ({ socialPaths }) => {
  return (
    <div className={styles.container}>
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
  );
};

FooterMobile.propTypes = {
  socialPaths: PropTypes.object,
};

export default FooterMobile;
