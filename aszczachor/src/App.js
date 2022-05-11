import { BrowserRouter, Route } from "react-router-dom";
import MainContent from "views/mainPage/MainContent";
import VideoClip from "views/fashionStyling/VideoClip";
import Navbar from "components/navigation/Navbar";

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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar routes={routes} />
      <Route path={routes.mainPage.path} exact component={MainContent} />
      <Route path={routes.videoclip.path} exact component={VideoClip} />
    </BrowserRouter>
  );
};

export default App;
