import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Collections from "./components/collections/Collections";
import Editorials from "./components/fashionStyling/Editorials";
import Videoclip from "./components/fashionStyling/Videoclip";
import Influencers from "./components/fashionStyling/Influencers";

const route = {
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
      <Header route={route} />
      <Route path={route.mainPage.path} exact component={MainPage} />
      <Route path={route.editorials.path} exact component={Editorials} />
      <Route path={route.videoclip.path} exact component={Videoclip} />
      <Route path={route.influencers.path} exact component={Influencers} />
      <Route path={route.collections.path} exact component={Collections} />
      <Route path={route.about.path} exact component={About} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
