import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "components/modal/Modal";
import styles from "components/siteContent/siteContent.module.css";

const SiteContent = ({ groups, twoColumns = false }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobile(!(document.documentElement.clientWidth > 640));
  }, []);

  const setMargin = groupSize => {
    if (isMobile) {
      return "0";
    } else if (twoColumns) {
      return "0";
    } else if (groupSize === 1) {
      return "35%";
    } else if (groupSize === 2) {
      return "22%";
    } else if (groupSize === 3 || groupSize === 6) {
      return "8%";
    } else {
      return "0";
    }
  };

  const setGridTemplate = groupSize => {
    if (isMobile) {
      return "repeat(1, 1fr)";
    } else if (twoColumns) {
      return "repeat(2, 1fr)";
    } else if (groupSize === 1) {
      return "repeat(1, 1fr)";
    } else if (groupSize === 2) {
      return "repeat(2, 1fr)";
    } else if (groupSize === 3 || groupSize === 6) {
      return "repeat(3, 1fr)";
    } else if (groupSize === 12) {
      return "repeat(4, 1fr)";
    } else {
      return "repeat(auto-fit, minmax(300px, 1fr))";
    }
  };

  const style = {
    marginLeft: setMargin(groups.length),
    marginRight: setMargin(groups.length),
    gridTemplateColumns: setGridTemplate(groups.length),
  };

  const onPhotoClick = ({ currentTarget }) => {
    setSelectedGroup(groups[currentTarget.dataset.index]);
    setSelectedPhotoIndex(0);
    setIsModalOpened(true);
  };

  return (
    <>
      <div className={styles.container} style={style}>
        {groups.map(({ photos, description }, index) => {
          return (
            <div
              key={index}
              className={styles.photo}
              data-index={index}
              onClick={onPhotoClick}
            >
              <img
                src={photos[0]}
                data-index={index}
                alt={`Img number ${index + 1}`}
              />
              {!isMobile && (
                <div className={styles.description}>
                  <p>{description}</p>
                  <p>Click me to see more content from this session</p>
                </div>
              )}
              {isMobile && (
                <div className={styles.description} onClick={onPhotoClick}>
                  <p>{description}</p>
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
  twoColumns: PropTypes.bool,
};

export default SiteContent;
