import styles from "views/fashionStyling/videoclip.module.css";

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

const Videoclip = () => {
  return (
    <div className={styles.videosContainer}>
      {videos.map(video => {
        return (
          <iframe
            src={video.path}
            title={video.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      })}
    </div>
  );
};

export default Videoclip;
