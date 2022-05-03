import expandArrow from "assets/mobileMenu/expand-arrow.png";
import collapseArrow from "assets/mobileMenu/collapse-arrow.png";
import { Link } from "react-router-dom";

const ExpandButton = ({ label, changeState, isOpen, list, openMenu }) => {
  return (
    <>
      <li key={label} style={{ marginLeft: "17px" }}>
        <button onClick={changeState}>
          {label}
          <img src={isOpen ? collapseArrow : expandArrow} alt="" />
        </button>
      </li>
      {isOpen
        ? list.map(item => {
            return (
              <Link to={item.path} onClick={openMenu}>
                <li key={item.label}>
                  <button>{item.label}</button>
                </li>
              </Link>
            );
          })
        : null}
    </>
  );
};

export default ExpandButton;
