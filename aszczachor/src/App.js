import { BrowserRouter, Route } from "react-router-dom";
import Footer from "components/footer/Footer";
import MainContent from "views/mainPage/MainContent";
import About from "components/about/About";
import Collections from "components/collections/Collections";
import Editorials from "views/fashionStyling/Editorials";
import Videoclip from "views/fashionStyling/Videoclip";
import Influencers from "views/fashionStyling/Influencers";
import Navbar from "views/navigation/Navbar";

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
  collections: {
    path: "/collections",
    label: "Collections",
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
      <Route path={routes.about.path} exact component={About} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
