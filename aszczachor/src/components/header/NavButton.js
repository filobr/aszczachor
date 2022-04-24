import { Link } from "react-router-dom";
import styles from "./navButton.module.css";

const NavButton = ({ label, to }) => {
  return (
    <Link to={to}>
      <button className={styles.link}>{label}</button>
    </Link>
  );
};

export default NavButton;
