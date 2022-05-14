import { BrowserRouter, Route } from "react-router-dom";
import MainContent from "views/mainPage/MainContent";
import VideoClip from "views/fashionStyling/VideocClip";
import Navbar from "components/navbar/Navbar";
import Influencers from "views/fashionStyling/Influencers";
import FooterMobile from "components/footer/FooterMobile";

const routes = {
  mainPage: {
    path: "/",
    label: "Main",
  },
  editorials: {
    path: "/editorials",
    label: "Editorials",
  },
  videoclip: {
    path: "/videoClip",
    label: "VideoClip",
  },
  influencers: {
    path: "/influencers",
    label: "Influencers",
  },
  campaign: {
    path: "/campaign",
    label: "Campaign",
  },
  collections: {
    path: "/collections",
    label: "Collections",
  },
  fashionEditorials: {
    path: "/fashion-editorials",
    label: "Fashion editorials",
  },
  about: {
    path: "/about",
    label: "About",
  },
};

const socialPaths = {
  Facebook:
    "https://www.facebook.com/Aleksandra-Szcz%C4%85chor-570481960100580",
  Instagram: "https://www.instagram.com/aleksandra.szczachor/",
  Email: "mailto:aszczachor@gmail.com",
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar routes={routes} socialPaths={socialPaths} />
      <Route path={routes.mainPage.path} exact component={MainContent} />
      <Route path={routes.videoclip.path} exact component={VideoClip} />
      <Route path={routes.influencers.path} exact component={Influencers} />
      <FooterMobile socialPaths={socialPaths} />
    </BrowserRouter>
  );
};

export default App;
