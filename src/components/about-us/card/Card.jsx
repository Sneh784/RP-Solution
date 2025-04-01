import React from 'react'
import styles from "./Card.module.css"
import { MdVisibility } from "react-icons/md";
import { SiTransmission } from "react-icons/si";
import { FaEarthOceania } from "react-icons/fa6";



function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.Container}>
        <div className={styles.Section1}>
          <div className={styles.Name}>Vision - Mission</div>
          <div className={styles.Box}>

            <div className={styles.box1}>
              <div className={styles.image1}><img src="https://devconsoftware.com/assets/img/vission.png"/> </div>
              <div className={styles.name1}>Our Vision</div>
              <div className={styles.Sent1}>"Transforming the digital landscape through innovative software solutions that redefine the way individuals and organizations engage with technology, fostering efficiency, empowerment, and sustainable growth for the future is our vision."</div>
            </div>

            <div className={styles.box2}>
            <div className={styles.image2}><img src="https://devconsoftware.com/assets/img/mission%20img.webp"/> </div>
            <div className={styles.name1}>Our Mission</div>
              <div className={styles.Sent1}>"Empowering businesses and individuals worldwide by delivering cutting-edge software solutions that enhance productivity, streamline processes, and drive digital transformation, while prioritizing security, reliability, and customer satisfaction as the cornerstone of our mission."</div>
            </div>

            <div className={styles.box3}>
            <div className={styles.image3}><img src="https://devconsoftware.com/assets/img/blog/ks2-earth.png"/> </div>
            <div className={styles.name1}>Our Values</div>
              <div className={styles.Sent1}>"Devcons Software Solutions Pvt. Ltd. is driven by a commitment to innovation, integrity, customer satisfaction, collaboration, and excellence while embracing adaptability and social responsibility as core values."</div>
            </div>


          </div>
        </div>

        <div className={styles.Section2}></div>
      </div>

    </div>
  )
}

export default Card
