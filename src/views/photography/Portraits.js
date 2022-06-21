import { useState } from "react";
import importAll from "components/ImportAll";
import styles from "views/photography/portraits.module.css";
import Modal from "components/modal/Modal";

const portraitsImg = importAll(
  require.context("assets/photo/portraits", false, /\.(jpg)$/)
);

const Portraits = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const onPhotoClick = ({ currentTarget }) => {
    setSelectedPhotoIndex(Number(currentTarget.dataset.index));
    setIsModalOpened(true);
  };

  return (
    <>
      <div className={styles.container}>
        {portraitsImg.map((photo, index) => (
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
          photos={portraitsImg}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

export default Portraits;
