import { Link } from "react-router-dom";
import styles from "components/navigation/navButton.module.css";

const NavButton = ({ label, to, onClick }) => {
  return (
    <Link to={to} onClick={onClick}>
      <button className={styles.link}>{label}</button>
    </Link>
  );
};

export default NavButton;
