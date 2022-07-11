import { useEffect } from "react";
import AboutCollection from "components/aboutCollection/AboutCollection";
import Banner from "components/banner/Banner";
import SiteContent from "components/siteContent/SiteContent";
import importAll from "components/ImportAll";
import bannerBottom from "assets/newCollection/banner-bottom/banner.jpg";
import bannerBottomMobile from "assets/newCollection/banner-bottom/bannerMobile.jpg";
import styles from "components/banner/banner.module.css";
import { useState } from "react";

const imagesBanner = importAll(
  require.context("assets/newCollection/Banner", false, /\.(png)$/)
);

const group1Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/FaceTime/group1",
    false,
    /\.(jpg)$/
  )
);
const group1 = {
  photos: group1Img,
  description: "Be right back",
};
const group2Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/FaceTime/group2",
    false,
    /\.(jpg)$/
  )
);
const group2 = {
  photos: group2Img,
  description: "Mute",
};
const group3Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/FaceTime/group3",
    false,
    /\.(jpg)$/
  )
);
const group3 = {
  photos: group3Img,
  description: "Do not disturb",
};
const group4Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/FaceTime/group4",
    false,
    /\.(jpg)$/
  )
);
const group4 = {
  photos: group4Img,
  description: "Offline",
};
const group5Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/FaceTime/group5",
    false,
    /\.(jpg)$/
  )
);
const group5 = {
  photos: group5Img,
  description: "Busy",
};
const group6Img = importAll(
  require.context(
    "assets/newCollection/homeOffice/FaceTime/group6",
    false,
    /\.(jpg)$/
  )
);
const group6 = {
  photos: group6Img,
  description: "Available",
};

const groups = [group1, group3, group2, group4, group5, group6];

const description = [
  `Remote work has gained immense popularity in 2020. Clearly, the key role was played by the coronavirus pandemic, which even forced us into this way of working. 
At that time, apartments ceased to be just a space we share with our loved ones. Through the cameras of our laptops, we sold some of our privacy during numerous video conferences. Home has become an office, a school, a university, a place for entertainment, physical activity....`,

  `Home office is a clothing collection as well as a photo project that was inspired by remote work and time of isolation. Slightly exaggerated tulle forms were juxtaposed with tracksuit bottoms, as after all, what you can't see during a multi-device conference is irrelevant. 
The campaign was executed in a completely remote manner using apps such as FaceTime and Clos.  The clothes were sent to 6 models living in different parts of Poland: in Cracow, Opole, Toruń, Bielsko-Biała, Rybnik  and Rudzica. `,

  `This collection and photo project is not only a dreamlike vision of a home office, but also a story of our fears, desires and childhood dreams that we are only able to admit to within our personal zone. 
`,
];

const FaceTime = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobile(!(document.documentElement.clientWidth > 640));
  }, []);

  return (
    <>
      <Banner images={imagesBanner} />
      <AboutCollection description={description} />
      <SiteContent groups={groups} />
      <img
        src={isMobile ? bannerBottomMobile : bannerBottom}
        alt="banner-bottom"
        className={styles.imageBottom}
      />
    </>
  );
};

export default FaceTime;
