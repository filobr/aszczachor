import AboutCollection from "components/aboutCollection/AboutCollection";
import Banner from "components/banner/Banner";
import importAll from "components/ImportAll";

const images = importAll(
  require.context("assets/newCollection/Banner", false, /\.(png)$/)
);

const NewCollection = () => {
  return (
    <>
      <Banner images={images} />
      <AboutCollection />
    </>
  );
};

export default NewCollection;
