import collapseArrow from "assets/newCollection/arrows/collapse.png";
import expandArrow from "assets/newCollection/arrows/expand.png";
import styles from "components/aboutCollection/aboutCollection.module.css";
import { useState } from "react";

const AboutCollection = () => {
  const [isDesxriptionOpened, setIsDescriptionOpened] = useState(false);

  return (
    <div className={styles.container}>
      <span className={styles.header}>ABOUT THE PROJECT</span>
      {isDesxriptionOpened && (
        <span className={styles.description}>Soon ...</span>
      )}
      <img
        src={isDesxriptionOpened ? collapseArrow : expandArrow}
        alt="arrow"
        onClick={() => setIsDescriptionOpened(!isDesxriptionOpened)}
      />
    </div>
  );
};

export default AboutCollection;
