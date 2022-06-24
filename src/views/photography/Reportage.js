import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";

const seniorImg = importAll(
  require.context("assets/photo/reportage/10-12", false, /\.(jpg)$/)
);
const senior = {
  photos: seniorImg,
  description: "10-12",
};

const bocciaImg = importAll(
  require.context("assets/photo/reportage/boccia", false, /\.(jpg)$/)
);
const boccia = {
  photos: bocciaImg,
  description: "Boccia",
};

const paintersImg = importAll(
  require.context("assets/photo/reportage/painters", false, /\.(jpg)$/)
);
const painters = {
  photos: paintersImg,
  description: "Painters",
};

const polishVillageImg = importAll(
  require.context("assets/photo/reportage/polish-village", false, /\.(jpg)$/)
);
const polishVillage = {
  photos: polishVillageImg,
  description: "Polish Village",
};

const zuzaBaumImg = importAll(
  require.context("assets/photo/reportage/zuza-baum", false, /\.(jpg)$/)
);
const zuzaBaum = {
  photos: zuzaBaumImg,
  description: "Zuza Baum",
};

const groomerImg = importAll(
  require.context("assets/photo/reportage/groomer", false, /\.(jpg)$/)
);
const groomer = {
  photos: groomerImg,
  description: "Groomer",
};

const groups = [senior, boccia, painters, polishVillage, zuzaBaum, groomer];

const Reportage = () => {
  return (
    <>
      <div style={{ height: "50px" }}></div>
      <SiteContent groups={groups} twoColumns={true} />
    </>
  );
};

export default Reportage;
