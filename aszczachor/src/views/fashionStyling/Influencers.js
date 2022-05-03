import img1 from "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk/p12popaa.jpg";
import img2 from "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk/p17aa.jpg";
import img3 from "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk/p34poprawionea.jpg";
import img4 from "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk/p39aa.jpg";
import img5 from "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk/p40a.jpg";
import img6 from "assets/fashionStyling/influencers/NATSU - Natalia Karczmarczyk/p46popa.jpg";
import img7 from "assets/fashionStyling/influencers/@melamodelayt -  Amelia Zalewska/z1.jpg";
import img8 from "assets/fashionStyling/influencers/@melamodelayt -  Amelia Zalewska/z2.jpg";
import img9 from "assets/fashionStyling/influencers/@melamodelayt -  Amelia Zalewska/z3.jpg";
import img10 from "assets/fashionStyling/influencers/@melamodelayt -  Amelia Zalewska/z4.jpg";
import img11 from "assets/fashionStyling/influencers/@melamodelayt -  Amelia Zalewska/z5.jpg";
import img12 from "assets/fashionStyling/influencers/@fagataaa - Agata Fąk/f1.jpg";
import img13 from "assets/fashionStyling/influencers/@fagataaa - Agata Fąk/f2.jpg";
import img14 from "assets/fashionStyling/influencers/@fagataaa - Agata Fąk/f3.jpg";
import img15 from "assets/fashionStyling/influencers/@fagataaa - Agata Fąk/f4.jpg";
import img16 from "assets/fashionStyling/influencers/@fagataaa - Agata Fąk/f5.jpg";
import img17 from "assets/fashionStyling/influencers/@fagataaa - Agata Fąk/f6.jpg";
import SiteContent from "components/photo/SiteContent";

const natsu = [img6, img1, img2, img3, img4, img5];
const zalewska = [img7, img8, img9, img10, img11];
const fagata = [img12, img13, img14, img15, img16, img17];

const Influencers = () => {
  return <SiteContent group1={natsu} group2={zalewska} group3={fagata} />;
};

export default Influencers;
