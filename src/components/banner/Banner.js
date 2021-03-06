import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "components/banner/banner.module.css";

const Banner = ({ images }) => {
  const [bannerImageIndex, setBannerImageIndex] = useState(0);
  const changePhoto = () => {
    if (bannerImageIndex === images.length - 1) {
      return setBannerImageIndex(0);
    } else {
      return setBannerImageIndex(bannerImageIndex + 1);
    }
  };

  useEffect(() => {
    const bannerTimeout = setTimeout(changePhoto, 3000);
    return () => clearTimeout(bannerTimeout);
  }, [bannerImageIndex]);

  return (
    <img className={styles.image} src={images[bannerImageIndex]} alt="banner" />
  );
};

Banner.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Banner;
