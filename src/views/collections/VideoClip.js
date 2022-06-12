import VideoClip from "components/videoClip/VideoClip";

const videos = [
  {
    title: "Roksana Węgiel - Korona",
    path: "https://www.youtube.com/embed/Q5As_wiR4DE",
  },
  {
    title: "Klaudia Szafrańska - Niedoskonały [Official Music Video]",
    path: "https://www.youtube.com/embed/TGHbTrINoZ0",
  },
  {
    title:
      "Martyna Zygadło - When You Believe - Odcinek finałowy - The Voice of Poland 11",
    path: "https://www.youtube.com/embed/fQ3CiN7NpVk",
  },
  {
    title: "ELECTRIC GRLZ - NONSENS",
    path: "https://www.youtube.com/embed/QoaQurvmGvw",
  },
  {
    title: "MARTYNA ZABAWA - 400 K",
    path: "https://www.youtube.com/embed/AWaKjtZvlvk",
  },
  {
    title: "Zuza Baum - Project Away [Official Video] (prod. Bartek Leśniak)",
    path: "https://www.youtube.com/embed/VzwbHdJ3WZQ",
  },
  {
    title: "ATLANTYDA LA5ER X ZUZA BAUM - Take What You Want [Official Video]",
    path: "https://www.youtube.com/embed/bJrMusyKEhU",
  },
];

const CollectionVideoClip = () => {
  return <VideoClip videos={videos} />;
};

export default CollectionVideoClip;
