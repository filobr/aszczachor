import { useEffect } from "react";
import AboutCollection from "components/aboutCollection/AboutCollection";
import Banner from "components/banner/Banner";
import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";

const imagesBanner = importAll(
  require.context("assets/newCollection/Banner", false, /\.(png)$/)
);

const group1Img = importAll(
  require.context("assets/newCollection/homeOffice/group1", false, /\.(jpg)$/)
);
const group1 = {
  photos: group1Img,
  description: "Look 1",
};
const group2Img = importAll(
  require.context("assets/newCollection/homeOffice/group2", false, /\.(jpg)$/)
);
const group2 = {
  photos: group2Img,
  description: "Look 2",
};
const group3Img = importAll(
  require.context("assets/newCollection/homeOffice/group3", false, /\.(jpg)$/)
);
const group3 = {
  photos: group3Img,
  description: "Look 3",
};
const group4Img = importAll(
  require.context("assets/newCollection/homeOffice/group4", false, /\.(jpg)$/)
);
const group4 = {
  photos: group4Img,
  description: "Look 4",
};
const group5Img = importAll(
  require.context("assets/newCollection/homeOffice/group5", false, /\.(jpg)$/)
);
const group5 = {
  photos: group5Img,
  description: "Look 5",
};
const group6Img = importAll(
  require.context("assets/newCollection/homeOffice/group6", false, /\.(jpg)$/)
);
const group6 = {
  photos: group6Img,
  description: "Look 6",
};

const groups = [group1, group2, group3, group4, group5, group6];

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
    </>
  );
};

export default FaceTime;
