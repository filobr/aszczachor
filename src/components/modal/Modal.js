import styles from "components/modal/modal.module.css";
import prevIcon from "assets/modal/prev-icon.png";
import nextIcon from "assets/modal/next-icon.png";
import closeIcon from "assets/modal/close-icon.png";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ selected, setSelected, photos, setIsModalOpened }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleKeyClick = ({ key }) => {
    if (key === "ArrowLeft") prevPhoto();
    else if (key === "ArrowRight") nextPhoto();
    else if (key === "Escape") {
      setIsModalOpened(false);
      setSelected(null);
    }
  };

  const handleTouchStart = ({ targetTouches }) => {
    setTouchStart(targetTouches[0].clientX);
  };

  const handleTouchMove = ({ targetTouches }) => {
    setTouchEnd(targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 80) {
      nextPhoto();
    }

    if (touchStart - touchEnd < -80) {
      prevPhoto();
    }
  };

  const nextPhoto = () => {
    setSelected(selected === photos.length - 1 ? 0 : Number(selected) + 1);
  };

  const prevPhoto = () => {
    setSelected(selected === 0 ? photos.length - 1 : Number(selected) - 1);
  };

  const left = useRef();
  const right = useRef();
  const image = useRef();
  const ref = useRef();

  useEffect(() => {
    const onModalClick = ({ target }) => {
      if (
        (image.current && image.current.contains(target)) ||
        (left.current && left.current.contains(target)) ||
        (right.current && right.current.contains(target))
      ) {
        return;
      }
      setIsModalOpened(false);
      setSelected(null);
    };
    document.addEventListener("click", onModalClick, true);
    return () => document.removeEventListener("click", onModalClick, true);
  }, [setIsModalOpened, setSelected]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div
      className={styles.modalContainer}
      onKeyDown={handleKeyClick}
      tabIndex="0"
      ref={ref}
    >
      <div className={styles.top}>
        <img src={closeIcon} alt="close" />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={prevIcon} alt="prev" onClick={prevPhoto} ref={left} />
        </div>
        <div className={styles.photo}>
          <img
            src={photos[selected]}
            alt=""
            onClick={nextPhoto}
            ref={image}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
        <div className={styles.right}>
          <img src={nextIcon} alt="next" onClick={nextPhoto} ref={right} />
        </div>
      </div>
      <div className={styles.bottom}>
        {Number(selected) + 1} of {photos.length}
      </div>
    </div>
  );
};

Modal.propTypes = {
  selected: PropTypes.number,
  setSelected: PropTypes.func,
  photos: PropTypes.arrayOf(PropTypes.string),
  setIsModalOpened: PropTypes.func,
};

export default Modal;
