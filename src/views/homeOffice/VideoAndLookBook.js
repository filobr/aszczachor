import importAll from "components/ImportAll";
import SiteContent from "components/siteContent/SiteContent";
import Video from "components/video/Video";
import poster from "assets/newCollection/homeOffice/Video/poster.jpg";

const group1Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/LookBook/1.be right back",
    false,
    /\.(jpg)$/
  )
);
const group1 = {
  photos: group1Img,
  description: "Be right back",
};

const group2Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/LookBook/2. do not disturb",
    false,
    /\.(jpg)$/
  )
);
const group2 = {
  photos: group2Img,
  description: "Do not disturb",
};

const group3Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/LookBook/3. mute",
    false,
    /\.(jpg)$/
  )
);
const group3 = {
  photos: group3Img,
  description: "Mute",
};

const group4Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/LookBook/4. offline",
    false,
    /\.(jpg)$/
  )
);
const group4 = {
  photos: group4Img,
  description: "Offline",
};

const group5Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/LookBook/5. busy",
    false,
    /\.(jpg)$/
  )
);
const group5 = {
  photos: group5Img,
  description: "Busy",
};

const group6Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/LookBook/6. available",
    false,
    /\.(jpg)$/
  )
);
const group6 = {
  photos: group6Img,
  description: "Available",
};

const groups = [group1, group2, group3, group4, group5, group6];

const videoSrc =
  "https://drive.google.com/uc?export=view&id=1HVQ8hohfJU2rNLgwWX3Rg5HkPfJ8cu5Y";

const VideoAndLookBook = () => {
  return (
    <>
      <Video videoSrc={videoSrc} poster={poster} />
      <SiteContent groups={groups} />
    </>
  );
};

export default VideoAndLookBook;
