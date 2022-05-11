import Modal from "components/modal/Modal";
import { useState } from "react";
import styles from "components/photo/siteContent.module.css";
import PropTypes from "prop-types";
const SiteContent = ({ group1, group2, group3 }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(null);

  const mainPhotos = [group1[0], group2[0], group3[0]];

  const onPhotoClick = ({ currentTarget }) => {
    switch (currentTarget.dataset.index) {
      case "0":
        setSelectedGroup(group1);
        break;
      case "1":
        setSelectedGroup(group2);
        break;
      case "2":
        setSelectedGroup(group3);
        break;
      default:
        break;
    }
    setSelectedPhotoIndex(0);
    setIsModalOpened(true);
  };

  const onPhotoHover = ({ currentTarget }) => {
    setIsPhotoHovered(currentTarget.dataset.index);
    setIsDescriptionOpened(true);
  };

  const onMouseEnter = ({ currentTarget }) => {
    setIsPhotoHovered(currentTarget.dataset.index);
  };

  const onMouseLeave = () => {
    setIsPhotoHovered(null);
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
              {isDescriptionOpened && index === Number(isPhotoHovered) && (
                <div className={styles.description}>{isPhotoHovered}</div>
              )}
            </div>
          );
        })}
      </div>
      {isModalOpened && (
        <Modal
          selected={selectedPhotoIndex}
          photos={selectedGroup}
          setSelected={setSelectedPhotoIndex}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

SiteContent.propTypes = {
  group1: PropTypes.arrayOf(PropTypes.string),
  group2: PropTypes.arrayOf(PropTypes.string),
  group3: PropTypes.arrayOf(PropTypes.string),
};

export default SiteContent;
