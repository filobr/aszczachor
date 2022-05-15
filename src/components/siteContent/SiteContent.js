import Modal from "components/modal/Modal";
import { useState } from "react";
import styles from "components/siteContent/siteContent.module.css";
import PropTypes from "prop-types";
const SiteContent = ({ groups }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  const mainPhotos = groups.map(group => group.photos[0]);

  const onPhotoClick = ({ currentTarget }) => {
    setSelectedGroup(groups[currentTarget.dataset.index]);
    setSelectedPhotoIndex(0);
    setIsModalOpened(true);
    return;
  };

  const onPhotoHover = ({ currentTarget }) => {
    setHoveredPhoto(currentTarget.dataset.index);
    setIsDescriptionOpened(true);
  };

  const onMouseEnter = ({ currentTarget }) => {
    setHoveredPhoto(currentTarget.dataset.index);
  };

  const onMouseLeave = () => {
    setHoveredPhoto(null);
    setIsDescriptionOpened(false);
  };

  return (
    <>
      <div className={styles.container}>
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
              />
              {isDescriptionOpened && index === Number(hoveredPhoto) && (
                <div className={styles.description}>
                  <p style={{ fontWeight: "bold" }}>
                    {groups[hoveredPhoto].description}
                  </p>
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
    PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string), PropTypes.string)
  ),
};

export default SiteContent;
