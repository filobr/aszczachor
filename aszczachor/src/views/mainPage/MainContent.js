import styles from "views/mainPage/mainContent.module.css";
import Modal from "components/modal/Modal";
import { useState, useEffect } from "react";
import img1 from "assets/mainPage/mainContent1.jpg";
import img2 from "assets/mainPage/mainContent2.jpg";
import img3 from "assets/mainPage/mainContent3.jpg";
import img4 from "assets/mainPage/mainContent4.jpg";
import img5 from "assets/mainPage/mainContent5.jpg";
import img6 from "assets/mainPage/mainContent6.jpg";
import img7 from "assets/mainPage/mainContent7.jpg";
import img8 from "assets/mainPage/mainContent8.jpg";
import img9 from "assets/mainPage/mainContent9.jpg";
import img10 from "assets/mainPage/mainContent10.jpg";
import img11 from "assets/mainPage/mainContent11.jpg";
import img12 from "assets/mainPage/mainContent12.jpg";
import img13 from "assets/mainPage/mainContent13.jpg";
import img14 from "assets/mainPage/mainContent14.jpg";
import img15 from "assets/mainPage/mainContent15.jpg";
import img16 from "assets/mainPage/mainContent16.jpg";
import img17 from "assets/mainPage/mainContent17.jpg";
import img18 from "assets/mainPage/mainContent18.jpg";
import img19 from "assets/mainPage/mainContent19.jpg";
import img20 from "assets/mainPage/mainContent20.jpg";

const photos = [
  img1,
  img2,
  img3,
  img10,
  img5,
  img6,
  img7,
  img8,
  img9,
  img4,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

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
