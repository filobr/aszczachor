import styles from "components/navButton/navButton.module.css";
import PropTypes from "prop-types";

const NavButton = ({ label, onMouseEnter }) => {
  return (
    <span onMouseEnter={onMouseEnter} className={styles.link}>
      {label}
    </span>
  );
};

NavButton.propTypes = {
  label: PropTypes.string,
  onMouseEnter: PropTypes.func,
};

export default NavButton;
