import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";

const newWenusImg = importAll(
  require.context("assets/photo/fashion-photography/wenus", false, /\.(jpg)$/)
);
const newWenus = {
  photos: newWenusImg,
  description: "New Wenus",
};

const overTheRainbowImg = importAll(
  require.context(
    "assets/photo/fashion-photography/overTheRainbow",
    false,
    /\.(jpg)$/
  )
);
const overTheRainbow = {
  photos: overTheRainbowImg,
  description: "Over The Rainbow",
};

const groups = [newWenus, overTheRainbow];

const FashionPhotography = () => {
  return <SiteContent groups={groups} />;
};

export default FashionPhotography;
