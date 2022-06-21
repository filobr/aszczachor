import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ExpandComponent from "components/mobileMenu/ExpandComponent";
import styles from "components/mobileMenu/mobileMenu.module.css";

const MobileMenu = ({
  fashionStyling,
  collections,
  newCollection,
  photography,
  links,
  SetIsMenuOpened,
  menuBtn,
}) => {
  const [isFashionStylingOpened, setIsFashionStylingOpened] = useState(false);
  const [isCollectionsOpened, setIsCollectionsOpened] = useState(false);
  const [isNewCollectionOpened, setIsNewCollectionOpened] = useState(false);
  const [isPhotographyOpened, setIsPhotographyOpened] = useState(false);
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
        <ExpandComponent
          label="Home Office Collection"
          changeState={() => setIsNewCollectionOpened(!isNewCollectionOpened)}
          isOpened={isNewCollectionOpened}
          list={newCollection}
          SetIsMenuOpened={SetIsMenuOpened}
        />
        <ExpandComponent
          label="Photography"
          changeState={() => setIsPhotographyOpened(!isPhotographyOpened)}
          isOpened={isPhotographyOpened}
          list={photography}
          SetIsMenuOpened={SetIsMenuOpened}
        />
        {links.map(({ label, path }) => (
          <Link
            style={{ textDecoration: "none", fontWeight: "bold" }}
            to={path}
            onClick={SetIsMenuOpened}
            key={label}
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

MobileMenu.propTypes = {
  fashionStyling: PropTypes.arrayOf(PropTypes.object),
  collections: PropTypes.arrayOf(PropTypes.object),
  newCollection: PropTypes.arrayOf(PropTypes.object),
  photography: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.PropTypes.arrayOf(PropTypes.object),
  SetIsMenuOpened: PropTypes.func,
  menuBtn: PropTypes.object,
};

export default MobileMenu;
