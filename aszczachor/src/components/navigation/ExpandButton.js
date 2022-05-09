import expandArrow from "assets/mobileMenu/expand-arrow.png";
import collapseArrow from "assets/mobileMenu/collapse-arrow.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ExpandButton = ({
  label,
  changeState,
  isOpened,
  list,
  SetIsMenuOpened,
}) => {
  return (
    <>
      <li key={label} style={{ marginLeft: "17px" }}>
        <span onClick={changeState}>
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

ExpandButton.propTypes = {
  label: PropTypes.string,
  changeState: PropTypes.func,
  isOpened: PropTypes.bool,
  list: PropTypes.array,
  SetIsMenuOpened: PropTypes.func,
};

export default ExpandButton;
