import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "components/navButton/navButton.module.css";

const NavButtonLink = ({ label, to }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <span className={styles.link}>{label}</span>
    </Link>
  );
};

NavButtonLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavButtonLink;
