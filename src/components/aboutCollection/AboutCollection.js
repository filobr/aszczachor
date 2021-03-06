import { useState } from "react";
import collapseArrow from "assets/newCollection/arrows/collapse.png";
import expandArrow from "assets/newCollection/arrows/expand.png";
import styles from "components/aboutCollection/aboutCollection.module.css";

const AboutCollection = ({ description }) => {
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);

  return (
    <div className={styles.container}>
      <span className={styles.header}>ABOUT THE PROJECT</span>
      {isDescriptionOpened && (
        <div className={styles.text}>
          {description.map(item => {
            return (
              <div className={styles.textBox} key={item}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      )}
      <img
        src={isDescriptionOpened ? collapseArrow : expandArrow}
        alt="arrow"
        onClick={() => setIsDescriptionOpened(!isDescriptionOpened)}
      />
    </div>
  );
};

export default AboutCollection;
