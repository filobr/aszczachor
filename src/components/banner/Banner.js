import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "components/banner/banner.module.css";

const Banner = ({ images }) => {
  const [bannerImageIndex, setBannerImageIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (bannerImageIndex === images.length - 1) {
        return setBannerImageIndex(0);
      } else {
        return setBannerImageIndex(bannerImageIndex + 1);
      }
    }, 3000);
  }, [bannerImageIndex]);

  return <img className={styles} src={images[bannerImageIndex]} alt="banner" />;
};

Banner.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Banner;
