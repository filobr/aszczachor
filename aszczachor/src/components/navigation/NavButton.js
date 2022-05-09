import styles from "components/navigation/navButton.module.css";
import PropTypes from "prop-types";

const NavButton = ({ label, onClick }) => {
  return (
    <span onClick={onClick} className={styles.link}>
      {label}
    </span>
  );
};

NavButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavButton;
