import styles from "views/mainPage/mainContent.module.css";
import Modal from "components/modal/Modal";
import { useState } from "react";
import img1 from "assets/mainPage/cdc.jpg";
import img2 from "assets/mainPage/DSC_2525.jpg";
import img3 from "assets/mainPage/DSC8427.jpg";
import img4 from "assets/mainPage/DSC8465b.jpg";
import img5 from "assets/mainPage/DUMAFULLSIZE5.jpg";
import img6 from "assets/mainPage/IMG_7268.jpg";
import img7 from "assets/mainPage/p273394106_659193758458397_5525131181167737708_n.jpg";
import img8 from "assets/mainPage/oczymag-edytorial-flowery-garden-fot-aleksandra-mrowczynska-wrzesien-2021-8-scaled.jpg";
import img9 from "assets/mainPage/p5a.jpg";
import img10 from "assets/mainPage/p11a.jpg";
import img11 from "assets/mainPage/p14.jpg";
import img12 from "assets/mainPage/p26a.jpg";
import img13 from "assets/mainPage/p28a.jpg";
import img14 from "assets/mainPage/p34poprawionea.jpg";
import img15 from "assets/mainPage/p39aa.jpg";
import img16 from "assets/mainPage/p2020_10_16_oginska_done_0004.jpg";
import img17 from "assets/mainPage/p20200710_OUTSIDER_2540_v1.jpg";
import img18 from "assets/mainPage/p20201025__095a.jpg";
import img19 from "assets/mainPage/p146858637_440191887423155_7554899254432460725_n.jpg";
import img20 from "assets/mainPage/p183205049_223070066246115_4749856819184857082_n.jpg";

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
