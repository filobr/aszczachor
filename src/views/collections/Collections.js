import importAll from "components/ImportAll";
import SiteContent from "components/siteContent/SiteContent";

const girlsJustWannaLBImg = importAll(
  require.context(
    "assets/collections/collections/Girls-just-wanna/look-book",
    false,
    /\.(jpg)$/
  )
);

const girlsJustWannaLB = {
  photos: girlsJustWannaLBImg,
  description: "Look Book - Girls just wanna...",
};

const girlsJustWannaWizImg = importAll(
  require.context(
    "assets/collections/collections/Girls-just-wanna/wizerunkowa",
    false,
    /\.(jpg)$/
  )
);

const girlsJustWannaWiz = {
  photos: girlsJustWannaWizImg,
  description: "Image session - Girls just wanna...",
};

const groups = [girlsJustWannaLB, girlsJustWannaWiz];

const Collections = () => {
  return <SiteContent groups={groups} />;
};

export default Collections;
