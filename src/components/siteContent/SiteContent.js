import Modal from "components/modal/Modal";
import { useState, useEffect } from "react";
import styles from "components/siteContent/siteContent.module.css";
import PropTypes from "prop-types";
const SiteContent = ({ groups }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);
  const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobile(!(document.documentElement.clientWidth > 640));
  }, []);

  const setMargin = groupSize => {
    if (groupSize === 1) {
      return isMobile ? "0" : "35%";
    } else if (groupSize === 2) {
      return isMobile ? "0" : "22%";
    } else if (groupSize === 3 || 6) {
      return isMobile ? "0" : "5%";
    } else {
      return "0";
    }
  };

  const setGridTemplate = groupSize => {
    if (groupSize === 1) {
      return isMobile ? "repeat(1, 1fr)" : "repeat(1, 1fr)";
    } else if (groupSize === 2) {
      return isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)";
    } else if (groupSize === 3 || 6) {
      return isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)";
    } else {
      return "repeat(auto-fit, minmax(300px, 1fr))";
    }
  };

  const style = {
    marginLeft: setMargin(groups.length),
    marginRight: setMargin(groups.length),
    gridTemplateColumns: setGridTemplate(groups.length),
  };

  const mainPhotos = groups.map(group => group.photos[0]);

  const onPhotoClick = ({ currentTarget }) => {
    setSelectedGroup(groups[currentTarget.dataset.index]);
    setSelectedPhotoIndex(0);
    setIsModalOpened(true);
  };

  const onPhotoHover = ({ currentTarget }) => {
    setHoveredPhotoIndex(currentTarget.dataset.index);
    setIsDescriptionOpened(true);
  };

  const onMouseEnter = ({ currentTarget }) => {
    setHoveredPhotoIndex(currentTarget.dataset.index);
  };

  const onMouseLeave = () => {
    setHoveredPhotoIndex(null);
    setIsDescriptionOpened(false);
  };

  return (
    <>
      <div className={styles.container} style={style}>
        {mainPhotos.map((photo, index) => {
          return (
            <div key={index} className={styles.photo}>
              <img
                src={photo}
                data-index={index}
                alt={`Img number ${index + 1}`}
                onClick={onPhotoClick}
                onMouseEnter={onMouseEnter}
                onMouseOver={onPhotoHover}
                onMouseLeave={onMouseLeave}
                onTouchStart={onPhotoHover}
              />
              {isDescriptionOpened && index === Number(hoveredPhotoIndex) && (
                <div className={styles.description}>
                  <p>{groups[hoveredPhotoIndex].description}</p>
                  <p>Click me to see more content from this session</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {isModalOpened && (
        <Modal
          selected={selectedPhotoIndex}
          photos={selectedGroup.photos}
          setSelected={setSelectedPhotoIndex}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

SiteContent.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      photos: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
    })
  ),
  style: PropTypes.object,
};

export default SiteContent;
