import importAll from "components/ImportAll";
import SiteContent from "components/siteContent/SiteContent";

const cityLifeImg = importAll(
  require.context(
    "assets/fashionStyling/editorials/city-life",
    false,
    /\.(jpg)$/
  )
);

const cityLife = {
  photos: cityLifeImg,
  description: "City-life",
};

const estelaImg = importAll(
  require.context("assets/fashionStyling/editorials/estela", false, /\.(jpg)$/)
);

const estela = {
  photos: estelaImg,
  description: "Estela magazine",
};

const feroceImg = importAll(
  require.context(
    "assets/fashionStyling/editorials/feroce-magazine",
    false,
    /\.(jpg)$/
  )
);

const feroce = {
  photos: feroceImg,
  description: "Feroce magazine",
};

const lexyImg = importAll(
  require.context(
    "assets/fashionStyling/editorials/lexy-marta-panczyk",
    false,
    /\.(jpg)$/
  )
);

const lexy = {
  photos: lexyImg,
  description: "lexy-marta-panczyk",
};

const lodzImg = importAll(
  require.context("assets/fashionStyling/editorials/lodz", false, /\.(jpg)$/)
);

const lodz = {
  photos: lodzImg,
  description: "Łódź",
};

const lOfficielImg = importAll(
  require.context(
    "assets/fashionStyling/editorials/loficiel",
    false,
    /\.(jpg)$/
  )
);

const lOfficiel = {
  photos: lOfficielImg,
  description: "lOfficiel magazine",
};

const groups = [cityLife, estela, feroce, lexy, lodz, lOfficiel];

const FashionEditorials = () => {
  return <SiteContent groups={groups} />;
};

export default FashionEditorials;
