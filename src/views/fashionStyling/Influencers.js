import importAll from "components/ImportAll";
import SiteContent from "components/siteContent/SiteContent";
import { useEffect } from "react";

const fagataImg = importAll(
  require.context(
    "assets/fashionStyling/influencers/@fagataaa - Agata Fąk",
    false,
    /\.(jpg)$/
  )
);

const natsuImg = importAll(
  require.context(
    "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk",
    false,
    /\.(jpg)$/
  )
);

const zalewskaImg = importAll(
  require.context(
    "assets/fashionStyling/influencers/@melamodelayt -  Amelia Zalewska",
    false,
    /\.(jpg)$/
  )
);

const fagata = {
  photos: fagataImg,
  description: "@fagataaa - Agata Fąk",
};

const natsu = {
  photos: natsuImg,
  description: "NATSU - Natalia Karczmarczyk",
};

const zalewska = {
  photos: zalewskaImg,
  description: "@melamodelayt - Amelia Zalewska",
};

const groups = [fagata, natsu, zalewska];

const Influencers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SiteContent groups={groups} />;
};

export default Influencers;
