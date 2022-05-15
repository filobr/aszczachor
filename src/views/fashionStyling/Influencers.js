import importAll from "components/ImportAll";
import SiteContent from "components/siteContent/SiteContent";
import { useEffect } from "react";

const fagata = importAll(
  require.context(
    "assets/fashionStyling/influencers/@fagataaa - Agata Fąk",
    false,
    /\.(jpg)$/
  )
);

const natsu = importAll(
  require.context(
    "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk",
    false,
    /\.(jpg)$/
  )
);

const zalewska = importAll(
  require.context(
    "assets/fashionStyling/influencers/@melamodelayt -  Amelia Zalewska",
    false,
    /\.(jpg)$/
  )
);

const Influencers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SiteContent group1={fagata} group2={natsu} group3={zalewska} />;
};

export default Influencers;
