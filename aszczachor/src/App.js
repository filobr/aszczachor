import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Collections from "./components/collections/Collections";
import Editorials from "./components/fashionStyling/Editorials";
import Videoclip from "./components/fashionStyling/Videoclip";
import Influencers from "./components/fashionStyling/Influencers";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={MainPage} />
      <Route path="/editorials" exact component={Editorials} />
      <Route path="/videoclip" exact component={Videoclip} />
      <Route path="/influencers" exact component={Influencers} />
      <Route path="/collections" component={Collections} />
      <Route path="/about" component={About} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
