import importAll from "components/ImportAll";
import SiteContent from "components/siteContent/SiteContent";

const cHeadsImg = importAll(
  require.context(
    "assets/collections/editorials/C-Heads Magazine",
    false,
    /\.(jpg)$/
  )
);

const cHeads = {
  photos: cHeadsImg,
  description: "C-Heads Magazine",
};

const elleImg = importAll(
  require.context("assets/collections/editorials/elle", false, /\.(jpg)$/)
);

const elle = {
  photos: elleImg,
  description: "Elle",
};

const fishAndChipsImg = importAll(
  require.context(
    "assets/collections/editorials/fish and chips",
    false,
    /\.(jpg)$/
  )
);

const fishAndChips = {
  photos: fishAndChipsImg,
  description: "Fish and Chips",
};

const gmaroImg = importAll(
  require.context(
    "assets/collections/editorials/GMARO magazine",
    false,
    /\.(jpg)$/
  )
);

const gmaro = {
  photos: gmaroImg,
  description: "GMARO Magazine",
};

const kmagImg = importAll(
  require.context("assets/collections/editorials/kmag", false, /\.(jpg)$/)
);

const kmag = {
  photos: kmagImg,
  description: "K MAG Magazine",
};

const dumaImg = importAll(
  require.context(
    "assets/collections/editorials/Magazyn DUMA",
    false,
    /\.(jpg)$/
  )
);

const duma = {
  photos: dumaImg,
  description: "Magazyn DUMA",
};

const malvieImg = importAll(
  require.context("assets/collections/editorials/malvie", false, /\.(jpg)$/)
);

const malvie = {
  photos: malvieImg,
  description: "MALVIE Magazine",
};

const oczyMagImg = importAll(
  require.context("assets/collections/editorials/oczymag", false, /\.(jpg)$/)
);

const oczyMag = {
  photos: oczyMagImg,
  description: "OCZY.MAG",
};

const sandraDorszImg = importAll(
  require.context(
    "assets/collections/editorials/sandra dorsz",
    false,
    /\.(jpg)$/
  )
);

const sandraDorsz = {
  photos: sandraDorszImg,
  description: "Sandra Dorsz",
};

const solsticeImg = importAll(
  require.context("assets/collections/editorials/solstice", false, /\.(jpg)$/)
);

const solstice = {
  photos: solsticeImg,
  description: "Solstice Magazine",
};

const tearSheetsImg = importAll(
  require.context("assets/collections/editorials/tearsheets", false, /\.(jpg)$/)
);

const tearSheets = {
  photos: tearSheetsImg,
  description: "Tear Sheets",
};

const topModelImg = importAll(
  require.context("assets/collections/editorials/top model", false, /\.(jpg)$/)
);

const topModel = {
  photos: topModelImg,
  description: "Top Model",
};

const groups = [
  cHeads,
  elle,
  fishAndChips,
  gmaro,
  kmag,
  duma,
  malvie,
  oczyMag,
  sandraDorsz,
  solstice,
  tearSheets,
  topModel,
];

const Editorials = () => {
  return <SiteContent groups={groups} />;
};

export default Editorials;
