import styles from "components/modal/modal.module.css";
import prevIcon from "assets/modal/prev-icon.png";
import nextIcon from "assets/modal/next-icon.png";
import closeIcon from "assets/modal/close-icon.png";
import { useEffect, useRef } from "react";

const Modal = ({ selected, setSelected, photos, setOpenModal }) => {
  const nextPhoto = () => {
    setSelected(selected === photos.length - 1 ? 0 : Number(selected) + 1);
  };

  const prevPhoto = () => {
    setSelected(selected === 0 ? photos.length - 1 : Number(selected) - 1);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelected(null);
  };

  const left = useRef();
  const right = useRef();
  const image = useRef();

  useEffect(() => {
    const onModalClick = ({ target }) => {
      if (
        (image.current && image.current.contains(target)) ||
        (left.current && left.current.contains(target)) ||
        (right.current && right.current.contains(target))
      ) {
        return;
      }
      closeModal();
    };
    document.addEventListener("click", onModalClick, true);
    return () => document.removeEventListener("click", onModalClick, true);
  });

  return (
    <div className={styles.modalContainer}>
      <div className={styles.top}>
        <img src={closeIcon} alt="close" />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={prevIcon} alt="prev" onClick={prevPhoto} ref={left} />
        </div>
        <div className={styles.photo}>
          <img src={photos[selected]} alt="" onClick={nextPhoto} ref={image} />
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

export default Modal;
