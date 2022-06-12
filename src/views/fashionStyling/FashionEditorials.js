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
  description: "GMARO Magazine - City Life",
};

const estelaImg = importAll(
  require.context("assets/fashionStyling/editorials/estela", false, /\.(jpg)$/)
);

const estela = {
  photos: estelaImg,
  description: "Editorial - No photography",
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
  description: "Feroce Magazine - DOMINATED",
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
  description: "Editorial - OK BOOMER",
};

const lodzImg = importAll(
  require.context("assets/fashionStyling/editorials/lodz", false, /\.(jpg)$/)
);

const lodz = {
  photos: lodzImg,
  description: "Editorial - Pure Light",
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
  description: "L'Officiel Baltic",
};

const groups = [cityLife, estela, feroce, lexy, lodz, lOfficiel];

const FashionEditorials = () => {
  return <SiteContent groups={groups} />;
};

export default FashionEditorials;
