import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";

const todoImg = importAll(
  require.context(
    "assets/fashionStyling/campaign/TODO-socks",
    false,
    /\.(jpeg|png)$/
  )
);

const todo = {
  photos: todoImg,
  description: "TODO - socks",
};

const groups = [todo];

const FashionCampaign = () => {
  return <SiteContent groups={groups} />;
};

export default FashionCampaign;
