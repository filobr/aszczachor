import styles from "components/navigation/dropdown.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Dropdown = ({ items, onClick }) => {
  return (
    <div className={styles.dropdownContainer}>
      <ul>
        {items.map(({ path, label }) => (
          <Link
            style={{ textDecoration: "none" }}
            to={path}
            key={label}
            onClick={onClick}
          >
            <li>
              <span>{label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default Dropdown;
