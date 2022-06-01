import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";

const leshkaImg = importAll(
  require.context("assets/collections/campaign/leshka", false, /\.(jpg)$/)
);

const papayaImg = importAll(
  require.context("assets/collections/campaign/papaya", false, /\.(jpg)$/)
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
  return <SiteContent groups={groups} />;
};

export default Campaign;
