import React from "react";
import styles from "./About.module.css";
import Aboutdata from "../../datafile/Aboutdata";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Container}>
        {/* First Row */}
        <div className={styles.Section1}>
          {Aboutdata.slice(0, 3).map((item) => (
            <div key={item.id} className={styles[`Box${item.id}`]}>
              <div className={styles[`image${item.id}`]}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles[`Line${item.id}`]}>{item.title}</div>
              <div className={styles[`Sentence${item.id}`]}>{item.description}</div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className={styles.Section2}>
          {Aboutdata.slice(3, 6).map((item) => (
            <div key={item.id} className={styles[`Box${item.id}`]}>
              <div className={styles[`image${item.id}`]}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles[`Line${item.id}`]}>{item.title}</div>
              <div className={styles[`Sentence${item.id}`]}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
