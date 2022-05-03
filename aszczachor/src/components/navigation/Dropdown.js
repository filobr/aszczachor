import styles from "components/navigation/dropdown.module.css";
import { Link } from "react-router-dom";

const Dropdown = ({ items, onClick }) => {
  return (
    <div className={styles.dropdownContainer}>
      <ul>
        {items.map(item => {
          return (
            <Link to={item.path} onClick={onClick}>
              <li key={item.label}>
                <button>{item.label}</button>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
