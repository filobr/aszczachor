import styles from "components/fluidGrid/fluidGrid.module.css";
import { useState } from "react";
import Modal from "components/modal/Modal";
import importAll from "components/ImportAll";

const group1 = importAll(
  require.context("assets/newCollection/homeOffice/group1", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group1p${index}` });
});
const group2 = importAll(
  require.context("assets/newCollection/homeOffice/group2", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group2p${index}` });
});
const group3 = importAll(
  require.context("assets/newCollection/homeOffice/group3", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group3p${index}` });
});
const group4 = importAll(
  require.context("assets/newCollection/homeOffice/group4", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group4p${index}` });
});
const group5 = importAll(
  require.context("assets/newCollection/homeOffice/group5", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group5p${index}` });
});
const group6 = importAll(
  require.context("assets/newCollection/homeOffice/group6", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group6p${index}` });
});
const group7 = importAll(
  require.context("assets/newCollection/homeOffice/group7", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group7p${index}` });
});
const group8 = importAll(
  require.context("assets/newCollection/homeOffice/group8", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group8p${index}` });
});
const group9 = importAll(
  require.context("assets/newCollection/homeOffice/group9", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group9p${index}` });
});
const group10 = importAll(
  require.context("assets/newCollection/homeOffice/group10", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group10p${index}` });
});
const group11 = importAll(
  require.context("assets/newCollection/homeOffice/group11", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group11p${index}` });
});
const group12 = importAll(
  require.context("assets/newCollection/homeOffice/group12", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group12p${index}` });
});
const group13 = importAll(
  require.context("assets/newCollection/homeOffice/group13", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group13p${index}` });
});
const group14 = importAll(
  require.context("assets/newCollection/homeOffice/group14", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group14p${index}` });
});
const group15 = importAll(
  require.context("assets/newCollection/homeOffice/group15", false, /\.(jpg)$/)
).map((item, index) => {
  return (item = { url: item, id: `group15p${index}` });
});

const allPhotos = [
  group1,
  group2,
  group3,
  group4,
  group5,
  group6,
  group7,
  group8,
  group9,
  group10,
  group11,
  group12,
  group13,
  group14,
  group15,
];

const modalPhotos = group1.concat(
  group2,
  group3,
  group4,
  group5,
  group6,
  group7,
  group8,
  group9,
  group10,
  group11,
  group12,
  group13,
  group14,
  group15
);

const photosUrls = modalPhotos.map(item => {
  return item.url;
});

const FluidGrid = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const onPhotoClick = ({ currentTarget }) => {
    const checkIndex = item => {
      return item.id === currentTarget.dataset.id;
    };
    setSelectedPhotoIndex(modalPhotos.findIndex(checkIndex));
    setIsModalOpened(true);
  };

  return (
    <>
      <div className={styles.container}>
        {allPhotos.map(photos => {
          let gridSize;
          if (photos.length === 1) gridSize = styles.containerGrid1;
          else if (photos.length === 2 || photos.length === 4)
            gridSize = styles.containerGrid2;
          else if (photos.length === 3) gridSize = styles.containerGrid3;
          return (
            <div className={gridSize}>
              {photos.map(({ url, id }) => {
                return (
                  <img
                    key={id}
                    src={url}
                    alt={id}
                    data-id={id}
                    onClick={onPhotoClick}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {isModalOpened && (
        <Modal
          selected={selectedPhotoIndex}
          photos={photosUrls}
          setSelected={setSelectedPhotoIndex}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

export default FluidGrid;
