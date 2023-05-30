import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";
import reelsImage from "assets/fashionStyling/campaign/Reels.jpeg";

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

const deezeeReels = {
  photos: [
    reelsImage,
    "https://www.instagram.com/reel/CoSmf9FIGo2/",
    "https://www.instagram.com/reel/CokqoBsIFCg/",
    "https://www.instagram.com/reel/CofLHmXoP2W/",
    "https://www.instagram.com/reel/CrI-ihko-Qv/",
    "https://www.instagram.com/reel/CqVe-DpoNBC/",
    "https://www.instagram.com/reel/Cqk9LLso6ZF/",
    "https://www.instagram.com/reel/CoQCtqtIVOh/",
    "https://www.instagram.com/reel/CoC0AcooFxb/",
    "https://www.instagram.com/reel/CmWS-o0IjxZ/",
    "https://www.instagram.com/reel/CkwKPObIGGB/",
    "https://www.instagram.com/reel/CkQpIwhIOng/",
    "https://www.instagram.com/reel/Ck3J4WkIZSN/",
    "https://www.instagram.com/reel/Cq0WboVoydP/",
    "https://www.instagram.com/reel/CqGF_6gIo5-/",
    "https://www.instagram.com/reel/Cp5Qq_xoQsr/",
  ],
  description: "DEEZEE - stylizacje reels",
};

const groups = [todo, bellfama, deezeeReels];

const FashionCampaign = () => {
  return <SiteContent groups={groups} />;
};

export default FashionCampaign;
