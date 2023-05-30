import { useEffect } from "react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import PropTypes from "prop-types";
import styles from "views/socialMedia/reels.module.css";
import deezeeLogo from "assets/socialMediaContent/logo/DeezeeLogo.jpeg";
import someLogo from "assets/socialMediaContent/logo/SomeLogo.jpeg";
import houseLogo from "assets/socialMediaContent/logo/HouseLogo.jpeg";

const Card = ({ links, logo, title }) => {
  return (
    <div className={styles.cardContainer}>
      {logo && <img src={logo} className={styles.cardLogo} alt="Logo" />}
      {title && <div className={styles.cardTitle}>{title}</div>}
      <div className={styles.cardContent}>
        {links.map(link => {
          if (link.includes("https://www.instagram.com")) {
            return (
              <div className={styles.cardItem} key={link}>
                <InstagramEmbed url={link} retryDisabled />
              </div>
            );
          } else if (link.includes("https://www.tiktok.com")) {
            return (
              <div className={styles.cardItem} key={link}>
                <TikTokEmbed url={link} retryDisabled />;
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

Card.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string,
  title: PropTypes.string,
};

const NIKA_BOCIAN = {
  links: [
    "https://www.instagram.com/p/Ck83TzaIzTQ/",
    "https://www.instagram.com/p/Ck-Xvx-IsCX/",
    "https://www.instagram.com/p/CmzCf18I_NH/",
  ],
  logo: deezeeLogo,
  title: "DEEZEE X NIKA BOCIAN",
};

const SPRING_SUMMER_23 = {
  links: [
    "https://www.instagram.com/p/CqQTTgxoSqD/",
    "https://www.instagram.com/reel/CrGYApLIRDW/",
    "https://www.instagram.com/reel/Csoiyuio999/",
    "https://www.instagram.com/reel/CssxRK5o9L_/",
    "https://www.instagram.com/reel/CsjZKXLIav7/",
    "https://www.instagram.com/reel/Csgf2HbokpE/",
    "https://www.instagram.com/reel/CseRCv8Imhh/",
    "https://www.instagram.com/reel/CsbNb8fqhMv/",
    "https://www.instagram.com/reel/CsYN2bXICl7/",
  ],
  title: "SPRING/SUMMER' 23",
};

const TREND_ALERT = {
  links: [
    "https://www.instagram.com/p/Cl3ZRE-IPu1/",
    "https://www.instagram.com/p/Cm_kHy7olh7/",
    "https://www.instagram.com/p/CnRoiRVqth7/",
  ],
  title: "SERIA TREND ALERT",
};

const TRIKI = {
  links: [
    "https://www.instagram.com/p/CoHrW5poI4i/",
    "https://www.instagram.com/reel/Cm9TCl7oBYI/",
    "https://www.instagram.com/reel/Cl0wpVnKhYv/",
  ],
  title: "TRIKI",
};

const SOME = {
  links: [
    "https://www.instagram.com/p/CsoZEp-gvkU/",
    "https://www.instagram.com/p/CsO0FO4I-bh/",
    "https://www.instagram.com/reel/Csy2-w5IFrs/",
  ],
  logo: someLogo,
};

const HOUSE = {
  links: [
    "https://www.instagram.com/reel/CiIMLp9D_6q/",
    "https://www.instagram.com/reel/ChkJX9GP5hK/",
    "https://www.instagram.com/reel/ChfdvR2MW_4/",
    "https://www.instagram.com/reel/CiNFq7kPNZi/",
    "https://www.tiktok.com/@house_brand/video/7139898330506693894",
    "https://www.tiktok.com/@house_brand/video/7137557773767691526",
    "https://www.tiktok.com/@house_brand/video/7136160593907682566",
    "https://www.tiktok.com/@house_brand/video/7133110894577454342",
    "https://www.tiktok.com/@house_brand/video/7148004919809821958",
  ],
  logo: houseLogo,
};

const cards = [NIKA_BOCIAN, SPRING_SUMMER_23, TREND_ALERT, TRIKI, SOME, HOUSE];

const Reels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.reelsContainer}>
      {cards.map(({ links, logo, title }) => {
        return <Card links={links} logo={logo} title={title} key={links[0]} />;
      })}
      ;
    </div>
  );
};

export default Reels;
