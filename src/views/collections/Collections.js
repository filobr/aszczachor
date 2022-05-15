import importAll from "components/ImportAll";
import SiteContent from "components/siteContent/SiteContent";
import { useEffect, useState } from "react";

const girlsJustWannaLBImg = importAll(
  require.context(
    "assets/collections/collections/Girls-just-wanna/look-book",
    false,
    /\.(jpg)$/
  )
);

const girlsJustWannaLB = {
  photos: girlsJustWannaLBImg,
  description: "Look book - Girls Just Wanna…",
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
  description: "Sesja wizerunkowa - Girls Just Wanna…",
};

const groups = [girlsJustWannaLB, girlsJustWannaWiz];

const Collections = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobile(!(document.documentElement.clientWidth > 640));
  }, []);

  const style = {
    gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
  };

  return <SiteContent groups={groups} style={style} />;
};

export default Collections;
