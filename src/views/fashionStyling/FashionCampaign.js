import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";

const todoImg = importAll(
  require.context(
    "assets/fashionStyling/campaign/TODO-socks",
    false,
    /\.(jpeg|png)$/
  )
);

const bellfamaImg = importAll(
  require.context(
    "assets/fashionStyling/campaign/BELLFAMA",
    false,
    /\.(jpg|png)$/
  )
);

const todo = {
  photos: todoImg,
  description: "Todo Socks - Wero Wysoczyńska's assistant",
};

const bellfama = {
  photos: bellfamaImg,
  description: "BELLFAMA ATELIER KRAWIECKIE - LOOK BOOK ",
};

const groups = [todo, bellfama];

const FashionCampaign = () => {
  return <SiteContent groups={groups} />;
};

export default FashionCampaign;
