import { useState } from "react";
import styles from "components/video/video.module.css";
import poster from "assets/newCollection/homeOffice/LookBook/5. busy/1.jpg";
import { useEffect } from "react";

const Video = ({ videoSrc }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(!(document.documentElement.clientWidth > 640));
  }, []);

  return (
    <div className={styles.videoContainer}>
      {isMobile ? (
        <video className={styles.video} poster={poster} controls>
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <video className={styles.video} poster={poster} autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Video;
