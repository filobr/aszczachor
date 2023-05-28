import { BrowserRouter, Route } from "react-router-dom";
import MainContent from "views/mainPage/MainContent";
import FashionVideoClip from "views/fashionStyling/FashionVideocClip";
import Navbar from "components/navbar/Navbar";
import Influencers from "views/fashionStyling/Influencers";
import FooterMobile from "components/footer/FooterMobile";
import Campaign from "views/collections/Campaign";
import FashionCampaign from "views/fashionStyling/FashionCampaign";
import FashionEditorials from "views/fashionStyling/FashionEditorials";
import Editorials from "views/collections/Editorials";
import Collections from "views/collections/Collections";
import FaceTime from "views/homeOffice/FaceTime";
import CollectionVideoClip from "views/collections/VideoClip";
import About from "views/about/About";
import FashionPhotography from "views/photography/FashionPhotography";
import Products from "views/photography/Products";
import Portraits from "views/photography/portraits/Portraits";
import StreetPhotography from "views/photography/streetPhotography/StreetPhotography";
import Reportage from "views/photography/Reportage";
import VideoAndLookBook from "views/homeOffice/VideoAndLookBook";
import Reels from "views/socialMedia/Reels";

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
  fashionCampaign: {
    path: "/fashion-commercial",
    label: "Commercial",
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
    label: "Editorials",
  },
  about: {
    path: "/about",
    label: "About",
  },
  faceTime: {
    path: "/face-time",
    label: "Face Time Session",
  },
  videoAndLookBook: {
    path: "/video-and-look-book",
    label: "Video & Look Book",
  },
  collectionVideoClip: {
    path: "/videoClip-collections",
    label: "VideoClip",
  },
  fashionPhotography: {
    path: "/fashion-photography",
    label: "Fashion Photography",
  },
  products: {
    path: "/products",
    label: "Products",
  },
  portraits: {
    path: "/portraits",
    label: "Portraits",
  },
  streetPhotography: {
    path: "/street-photography",
    label: "Street Photography",
  },
  reportage: {
    path: "/reportage",
    label: "Reportage",
  },
  reels: {
    path: "/social-media-reels",
    label: "Reels",
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
      <Route path={routes.videoclip.path} exact component={FashionVideoClip} />
      <Route path={routes.influencers.path} exact component={Influencers} />
      <Route path={routes.campaign.path} exact component={Campaign} />
      <Route
        path={routes.fashionCampaign.path}
        exact
        component={FashionCampaign}
      />
      <Route
        path={routes.fashionEditorials.path}
        exact
        component={FashionEditorials}
      />
      <Route path={routes.editorials.path} exact component={Editorials} />
      <Route path={routes.collections.path} exact component={Collections} />
      <Route
        path={routes.collectionVideoClip.path}
        exact
        component={CollectionVideoClip}
      />
      <Route path={routes.faceTime.path} exact component={FaceTime} />
      <Route
        path={routes.videoAndLookBook.path}
        exact
        component={VideoAndLookBook}
      />
      <Route
        path={routes.fashionPhotography.path}
        exact
        component={FashionPhotography}
      />
      <Route path={routes.products.path} exact component={Products} />
      <Route path={routes.portraits.path} exact component={Portraits} />
      <Route
        path={routes.streetPhotography.path}
        exact
        component={StreetPhotography}
      />
      <Route path={routes.reportage.path} exact component={Reportage} />
      <Route path={routes.reels.path} exact component={Reels} />
      <Route path={routes.about.path} exact component={About} />
      <FooterMobile socialPaths={socialPaths} />
    </BrowserRouter>
  );
};

export default App;
