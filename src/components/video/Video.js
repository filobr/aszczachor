import { useState } from "react";
import { useEffect } from "react";
import styles from "components/video/video.module.css";

const Video = ({ videoSrc, poster }) => {
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
        <video className={styles.video} poster={poster} autoPlay loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Video;
