import { BrowserRouter, Route } from "react-router-dom";
import Footer from "views/footer/Footer";
import MainContent from "views/mainPage/MainContent";
import About from "views/about/About";
import Collections from "views/collections/Collections";
import Editorials from "views/fashionStyling/Editorials";
import Videoclip from "views/fashionStyling/Videoclip";
import Influencers from "views/fashionStyling/Influencers";
import Navbar from "views/navigation/Navbar";
import Campaign from "views/collections/Campaign";
import FashionEditorials from "views/collections/FashionEditorials";

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
    path: "/videoclip",
    label: "Videoclip",
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
      <Route path={routes.editorials.path} exact component={Editorials} />
      <Route path={routes.videoclip.path} exact component={Videoclip} />
      <Route path={routes.influencers.path} exact component={Influencers} />
      <Route path={routes.collections.path} exact component={Collections} />
      <Route path={routes.campaign.path} exact component={Campaign} />
      <Route
        path={routes.fashionEditorials.path}
        exact
        component={FashionEditorials}
      />
      <Route path={routes.about.path} exact component={About} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
