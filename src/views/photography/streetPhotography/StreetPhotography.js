import { useState } from "react";
import importAll from "components/ImportAll";
import styles from "views/photography/streetPhotography/streetPhotography.module.css";
import Modal from "components/modal/Modal";

const streetImg = importAll(
  require.context("assets/photo/street-photography", false, /\.(jpg)$/)
);

const StreetPhotography = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const onPhotoClick = ({ currentTarget }) => {
    setSelectedPhotoIndex(Number(currentTarget.dataset.index));
    setIsModalOpened(true);
  };

  return (
    <>
      <div className={styles.container}>
        {streetImg.map((photo, index) => (
          <img
            src={photo}
            key={index}
            alt={photo}
            data-index={index}
            onClick={onPhotoClick}
          />
        ))}
      </div>
      {isModalOpened && (
        <Modal
          selected={selectedPhotoIndex}
          setSelected={setSelectedPhotoIndex}
          photos={streetImg}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

export default StreetPhotography;
