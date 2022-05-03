import styles from "components/navigation/mobileMenu.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ExpandButton from "./ExpandButton";

const MobileMenu = ({
  fashionStyling,
  collections,
  links,
  openMenu,
  menuBtn,
}) => {
  const [openFashionStyling, setOpenFashionStyling] = useState(false);
  const [openCollections, setOpenCollections] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onOutsideClick = ({ target }) => {
      if (
        (ref.current && ref.current.contains(target)) ||
        (menuBtn.current && menuBtn.current.contains(target))
      ) {
        return;
      }
      openMenu(false);
    };
    document.addEventListener("click", onOutsideClick, true);
    return () => document.removeEventListener("click", onOutsideClick, true);
  });

  const onFashionStylingClick = () => {
    openFashionStyling
      ? setOpenFashionStyling(false)
      : setOpenFashionStyling(true);
  };

  const onCollectionsClick = () => {
    openCollections ? setOpenCollections(false) : setOpenCollections(true);
  };

  return (
    <div className={styles.container} ref={ref}>
      <ul>
        <ExpandButton
          label="Fashion Styling"
          changeState={onFashionStylingClick}
          isOpen={openFashionStyling}
          list={fashionStyling}
          openMenu={openMenu}
        />
        <ExpandButton
          label="Collections"
          changeState={onCollectionsClick}
          isOpen={openCollections}
          list={collections}
          openMenu={openMenu}
        />
        {links.map(item => {
          return (
            <Link to={item.path} onClick={openMenu}>
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
