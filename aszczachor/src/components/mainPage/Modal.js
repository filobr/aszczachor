import styles from "components/mainPage/modal.module.css";
import prevIcon from "assets/prev-icon.png";
import nextIcon from "assets/next-icon.png";
import closeIcon from "assets/close-icon.png";

const Modal = ({ selected, photos, nextPhoto, prevPhoto, closeModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.top}>
        <img src={closeIcon} alt="close" onClick={closeModal} />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={prevIcon} alt="prev" onClick={prevPhoto} />
        </div>
        <div className={styles.photo}>
          <img src={photos[selected]} alt="" onClick={nextPhoto} />
        </div>
        <div className={styles.right}>
          <img src={nextIcon} alt="next" onClick={nextPhoto} />
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Modal;
