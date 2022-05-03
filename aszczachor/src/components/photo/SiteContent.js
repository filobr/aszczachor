import Modal from "components/modal/Modal";
import { useState } from "react";
import styles from "components/photo/siteContent.module.css";

const SiteContent = ({ group1, group2, group3 }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

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
        console.log("Not speciefied group");
        break;
    }
    setSelectedPhoto(0);
    setOpenModal(true);
  };

  const onPhotoHover = ({ currentTarget }) => {
    setHoveredPhoto(currentTarget.dataset.index);
    setOpenDescription(true);
  };

  const onMouseEnter = ({ currentTarget }) => {
    setHoveredPhoto(currentTarget.dataset.index);
  };

  const onMouseLeave = () => {
    setHoveredPhoto(null);
    setOpenDescription(false);
  };

  return (
    <>
      <div className={styles.container}>
        {mainPhotos.map((photo, index) => {
          return (
            <div className={styles.photo}>
              <img
                src={photo}
                key={index}
                data-index={index}
                alt=""
                onClick={onPhotoClick}
                onMouseEnter={onMouseEnter}
                onMouseOver={onPhotoHover}
                onMouseLeave={onMouseLeave}
              />
              {openDescription && index === Number(hoveredPhoto) ? (
                <div className={styles.description}>{hoveredPhoto}</div>
              ) : null}
            </div>
          );
        })}
      </div>
      {openModal ? (
        <Modal
          selected={selectedPhoto}
          photos={selectedGroup}
          setSelected={setSelectedPhoto}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </>
  );
};

export default SiteContent;
