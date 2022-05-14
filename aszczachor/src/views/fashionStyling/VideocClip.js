import styles from "views/fashionStyling/videoClip.module.css";
import { useEffect } from "react";

const videos = [
  {
    title: "MONAMI - Euforia feat. Ruda (Red Lips)",
    path: "https://www.youtube.com/embed/FDAGVkaSPYU",
  },
  {
    title: "ZUZA BAUM | Get Home",
    path: "https://www.youtube.com/embed/taStL0fcsXM",
  },
  {
    title: "ZUZA BAUM - Deszcze (Live Session)",
    path: "https://www.youtube.com/embed/xnvL0oCnRLU",
  },
  {
    title: "Noela - MISS DREAM prod. Pacific (Official Video)",
    path: "https://www.youtube.com/embed/k5iclA1jdQI",
  },
  {
    title: "Zuza Baum - Call Back [Official Live Session]",
    path: "https://www.youtube.com/embed/XRhIwEpL-Gg",
  },
  {
    title: "Asia Janc - Oszukać Czas (Official Music Video)",
    path: "https://www.youtube.com/embed/xznpMpJgUw0",
  },
  {
    title: "Atlantyda La5er x ZUZA BAUM / Luneta Nocą / Kultura w Sieci",
    path: "https://www.youtube.com/embed/RM7PavmnSI0",
  },
];

const VideoClip = () => {
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

export default VideoClip;
