import { useState, useEffect } from "react";
import styles from "views/mainPage/mainContent.module.css";
import Modal from "components/modal/Modal";
import importAll from "components/ImportAll";

const photos = importAll(require.context("assets/mainPage", false, /\.(jpg)$/));

const MainContent = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndexIndex] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onPhotoClick = ({ currentTarget }) => {
    setSelectedPhotoIndexIndex(Number(currentTarget.dataset.index));
    setIsModalOpened(true);
  };

  return (
    <>
      <div className={styles.container}>
        {photos.map((photo, index) => (
          <img
            src={photo}
            key={index}
            data-index={index}
            alt={`Img number ${index + 1}`}
            onClick={onPhotoClick}
          />
        ))}
      </div>
      {isModalOpened && (
        <Modal
          selected={selectedPhotoIndex}
          photos={photos}
          setSelected={setSelectedPhotoIndexIndex}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

export default MainContent;
