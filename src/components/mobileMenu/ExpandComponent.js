import expandArrow from "assets/mobileMenu/expand-arrow.png";
import collapseArrow from "assets/mobileMenu/collapse-arrow.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "components/mobileMenu/mobileMenu.module.css";

const ExpandComponent = ({
  label,
  changeState,
  isOpened,
  list,
  SetIsMenuOpened,
}) => {
  return (
    <>
      <li key={label}>
        <span className={styles.expandTab} onClick={changeState}>
          {label}
          <img
            src={isOpened ? collapseArrow : expandArrow}
            alt={isOpened ? collapseArrow : expandArrow}
          />
        </span>
      </li>
      {isOpened &&
        list.map(({ label, path }) => (
          <Link
            style={{ textDecoration: "none" }}
            to={path}
            onClick={SetIsMenuOpened}
            key={label}
          >
            <li>
              <span>{label}</span>
            </li>
          </Link>
        ))}
    </>
  );
};

ExpandComponent.propTypes = {
  label: PropTypes.string,
  changeState: PropTypes.func,
  isOpened: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.object),
  SetIsMenuOpened: PropTypes.func,
};

export default ExpandComponent;
