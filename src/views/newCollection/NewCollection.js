import AboutCollection from "components/aboutCollection/AboutCollection";
import Banner from "components/banner/Banner";
import FluidGrid from "components/fluidGrid/FluidGrid";
import importAll from "components/ImportAll";
import { useEffect } from "react";

const imagesBanner = importAll(
  require.context("assets/newCollection/Banner", false, /\.(png)$/)
);

const description = "Soon ...";

const NewCollection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner images={imagesBanner} />
      <AboutCollection description={description} />
      <FluidGrid />
    </>
  );
};

export default NewCollection;
