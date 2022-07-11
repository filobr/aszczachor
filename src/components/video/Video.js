import styles from "components/video/video.module.css";
import poster from "assets/newCollection/homeOffice/LookBook/5. busy/1.jpg";

const Video = ({ videoSrc }) => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} poster={poster} autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
