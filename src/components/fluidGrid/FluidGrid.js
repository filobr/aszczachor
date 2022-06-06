import PropTypes from "prop-types";
import styles from "components/fluidGrid/fluidGrid.module.css";
import { useState } from "react";
import Modal from "components/modal/Modal";
import importAll from "components/ImportAll";

const group1 = importAll(
  require.context("assets/newCollection/homeOffice/group1", false, /\.(jpg)$/)
);
const group2 = importAll(
  require.context("assets/newCollection/homeOffice/group2", false, /\.(jpg)$/)
);
const group3 = importAll(
  require.context("assets/newCollection/homeOffice/group3", false, /\.(jpg)$/)
);
const group4 = importAll(
  require.context("assets/newCollection/homeOffice/group4", false, /\.(jpg)$/)
);
const group5 = importAll(
  require.context("assets/newCollection/homeOffice/group5", false, /\.(jpg)$/)
);
const group6 = importAll(
  require.context("assets/newCollection/homeOffice/group6", false, /\.(jpg)$/)
);
const group7 = importAll(
  require.context("assets/newCollection/homeOffice/group7", false, /\.(jpg)$/)
);
const group8 = importAll(
  require.context("assets/newCollection/homeOffice/group8", false, /\.(jpg)$/)
);
const group9 = importAll(
  require.context("assets/newCollection/homeOffice/group9", false, /\.(jpg)$/)
);
const group10 = importAll(
  require.context("assets/newCollection/homeOffice/group10", false, /\.(jpg)$/)
);
const group11 = importAll(
  require.context("assets/newCollection/homeOffice/group11", false, /\.(jpg)$/)
);
const group12 = importAll(
  require.context("assets/newCollection/homeOffice/group12", false, /\.(jpg)$/)
);
const group13 = importAll(
  require.context("assets/newCollection/homeOffice/group13", false, /\.(jpg)$/)
);
const group14 = importAll(
  require.context("assets/newCollection/homeOffice/group14", false, /\.(jpg)$/)
);
const group15 = importAll(
  require.context("assets/newCollection/homeOffice/group15", false, /\.(jpg)$/)
);

const allPhotos = group1.concat(
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
const FluidGrid = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const onPhotoClick = () => {
    setSelectedPhotoIndex(0);
    setIsModalOpened(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerGrid2}>
          {group1.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid3}>
          {group2.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid1}>
          {group3.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid2}>
          {group4.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid3}>
          {group5.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid1}>
          {group6.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid3}>
          {group7.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid2}>
          {group8.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid1}>
          {group9.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid3}>
          {group10.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid2}>
          {group11.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid1}>
          {group12.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid2}>
          {group13.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid3}>
          {group14.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
        <div className={styles.containerGrid1}>
          {group15.map((photo, index) => {
            return (
              <img key={index} src={photo} alt={photo} onClick={onPhotoClick} />
            );
          })}
        </div>
      </div>
      {isModalOpened && (
        <Modal
          selected={selectedPhotoIndex}
          photos={allPhotos}
          setSelected={setSelectedPhotoIndex}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};
FluidGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default FluidGrid;
