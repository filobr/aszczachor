import { BrowserRouter, Route } from "react-router-dom";
import Footer from "components/footer/Footer";
import MainPage from "components/mainPage/MainPage";
import About from "components/about/About";
import Collections from "components/collections/Collections";
import Editorials from "components/fashionStyling/Editorials";
import Videoclip from "components/fashionStyling/Videoclip";
import Influencers from "components/fashionStyling/Influencers";
import Navbar from "components/header/Navbar";

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
      <Route path={routes.mainPage.path} exact component={MainPage} />
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
