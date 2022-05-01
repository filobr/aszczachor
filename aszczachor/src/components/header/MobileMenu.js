import styles from "components/header/mobileMenu.module.css";
import expandArrow from "assets/mobileMenu/expand-arrow.png";
import collapseArrow from "assets/mobileMenu/collapse-arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileMenu = ({ fashionStyling, links, onClick }) => {
  const [openFashionStyling, setOpenFashionStyling] = useState(false);

  const onFashionStylingClick = () => {
    openFashionStyling
      ? setOpenFashionStyling(false)
      : setOpenFashionStyling(true);
  };

  return (
    <div className={styles.container}>
      <ul>
        <li key="Fashion Styling">
          <button onClick={onFashionStylingClick}>
            Fashion Styling
            <img
              src={openFashionStyling ? collapseArrow : expandArrow}
              alt=""
            />
          </button>
        </li>
        {openFashionStyling
          ? fashionStyling.map(item => {
              return (
                <Link to={item.path} onClick={onClick}>
                  <li key={item.label}>
                    <button style={{ paddingLeft: "25px" }}>
                      {item.label}
                    </button>
                  </li>
                </Link>
              );
            })
          : null}
        {links.map(item => {
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

export default MobileMenu;
