import { useEffect } from "react";
import AboutCollection from "components/aboutCollection/AboutCollection";
import Banner from "components/banner/Banner";
import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";
import bannerBottom from "assets/newCollection/banner-bottom/banner.jpg";
import styles from "components/banner/banner.module.css";

const imagesBanner = importAll(
  require.context("assets/newCollection/Banner", false, /\.(png)$/)
);

const group1Img = importAll(
  require.context("assets/newCollection/homeOffice/group1", false, /\.(jpg)$/)
);
const group1 = {
  photos: group1Img,
  description: "Be right back",
};
const group2Img = importAll(
  require.context("assets/newCollection/homeOffice/group2", false, /\.(jpg)$/)
);
const group2 = {
  photos: group2Img,
  description: "Mute",
};
const group3Img = importAll(
  require.context("assets/newCollection/homeOffice/group3", false, /\.(jpg)$/)
);
const group3 = {
  photos: group3Img,
  description: "Do not disturb",
};
const group4Img = importAll(
  require.context("assets/newCollection/homeOffice/group4", false, /\.(jpg)$/)
);
const group4 = {
  photos: group4Img,
  description: "Offline",
};
const group5Img = importAll(
  require.context("assets/newCollection/homeOffice/group5", false, /\.(jpg)$/)
);
const group5 = {
  photos: group5Img,
  description: "Busy",
};
const group6Img = importAll(
  require.context("assets/newCollection/homeOffice/group6", false, /\.(jpg)$/)
);
const group6 = {
  photos: group6Img,
  description: "Available",
};

const groups = [group1, group3, group2, group4, group5, group6];

const description = "Soon ...";

const FaceTime = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner images={imagesBanner} />
      <AboutCollection description={description} />
      <SiteContent groups={groups} />
      <img
        src={bannerBottom}
        alt="banner-bottom"
        className={styles.imageBottom}
      />
    </>
  );
};

export default FaceTime;
