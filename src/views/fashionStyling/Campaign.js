import SiteContent from "components/siteContent/SiteContent";
import { useEffect } from "react";
import importAll from "components/ImportAll";

const leshkaImg = importAll(
  require.context("assets/fashionStyling/campaign/leshka", false, /\.(jpg)$/)
);

const papayaImg = importAll(
  require.context("assets/fashionStyling/campaign/papaya", false, /\.(jpg)$/)
);

const leshka = {
  photos: leshkaImg,
  description: "Leshka",
};

const papaya = {
  photos: papayaImg,
  description: "Papaya Young Creators",
};

const groups = [leshka, papaya];

const Campaign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SiteContent groups={groups} />;
};

export default Campaign;
