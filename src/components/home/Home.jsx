import React from "react";
import styles from "./Home.module.css";
import Homedata from "../datafile/Homedata";

function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.Container}>
        {/* Left Side - Text Section */}
        <div className={styles.Section1}>
          <p className={styles.Line1}>{Homedata.title}</p>
          <p className={styles.Line2}><br />{Homedata.subTitle}</p>
          <p className={styles.Line3}><br />{Homedata.tagline}</p>
        </div>

        {/* Right Side - Image Section */}
        <div className={styles.Section2}>
          <div className={styles.Image}>
            <img src={Homedata.imageUrl} alt="Business Solutions" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
