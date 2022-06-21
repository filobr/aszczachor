import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";

const calendarImg = importAll(
  require.context("assets/photo/products/calendar", false, /\.(jpg)$/)
);
const calendar = {
  photos: calendarImg,
  description: "Calendar",
};

const theSecretGardenImg = importAll(
  require.context("assets/photo/products/the-secret-garden", false, /\.(jpg)$/)
);
const theSecretGarden = {
  photos: theSecretGardenImg,
  description: "The Secret Garden",
};

const groups = [calendar, theSecretGarden];

const Products = () => {
  return <SiteContent groups={groups} />;
};

export default Products;
