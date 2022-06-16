import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "components/videoClip/videoClip.module.css";

const VideoClip = ({ videos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.videosContainer}>
      {videos.map(({ path, title }) => (
        <iframe
          key={title}
          src={path}
          title={title}
          frameBorder="0"
          allowFullScreen
        />
      ))}
    </div>
  );
};

VideoClip.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default VideoClip;
