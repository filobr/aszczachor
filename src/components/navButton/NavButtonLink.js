import { Link } from "react-router-dom";
import styles from "components/navButton/navButton.module.css";
import PropTypes from "prop-types";

const NavButtonLink = ({ label, to, onClick }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={to} onClick={onClick}>
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
