import styles from "components/mobileMenu/mobileMenu.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ExpandComponent from "components/mobileMenu/ExpandComponent";
import PropTypes from "prop-types";

const MobileMenu = ({
  fashionStyling,
  collections,
  links,
  SetIsMenuOpened,
  menuBtn,
}) => {
  const [isFashionStylingOpened, setIsFashionStylingOpened] = useState(false);
  const [isCollectionsOpened, setIsCollectionsOpened] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onOutsideClick = ({ target }) => {
      if (
        (ref.current && ref.current.contains(target)) ||
        (menuBtn.current && menuBtn.current.contains(target))
      ) {
        return;
      }
      SetIsMenuOpened(false);
    };
    document.addEventListener("click", onOutsideClick, true);
    return () => document.removeEventListener("click", onOutsideClick, true);
  }, [SetIsMenuOpened, menuBtn]);

  return (
    <div className={styles.container} ref={ref}>
      <ul>
        <ExpandComponent
          label="Fashion Styling"
          changeState={() => setIsFashionStylingOpened(!isFashionStylingOpened)}
          isOpened={isFashionStylingOpened}
          list={fashionStyling}
          SetIsMenuOpened={SetIsMenuOpened}
        />
        <ExpandComponent
          label="Collections"
          changeState={() => setIsCollectionsOpened(!isCollectionsOpened)}
          isOpened={isCollectionsOpened}
          list={collections}
          SetIsMenuOpened={SetIsMenuOpened}
        />
        {/* {links.map(({ path, label }) => (
          <Link
            style={{ textDecoration: "none" }}
            to={path}
            onClick={SetIsMenuOpened}
            key={label}
          >
            <li>
              <span className={styles.expand}>{label}</span>
            </li>
          </Link>
        ))} */}
        {/* TO FIX when about component done */}
      </ul>
    </div>
  );
};

MobileMenu.propTypes = {
  fashionStyling: PropTypes.array,
  collections: PropTypes.array,
  links: PropTypes.array,
  SetIsMenuOpened: PropTypes.func,
  menuBtn: PropTypes.object,
};

export default MobileMenu;
