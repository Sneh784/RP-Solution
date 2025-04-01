import React from 'react'
import styles from "./Card.module.css"
import { BsGearWideConnected } from "react-icons/bs";
import { MdAllInclusive } from "react-icons/md";
import { GiFlexibleLamp } from "react-icons/gi";

function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.Container}>
        <div className={styles.Section}>
          <div className={styles.Section1}>
            <div className={styles.Name1}>Career Growth Opportunities</div>
            <div className={styles.Sent2}>Join our team and unlock endless possibilities for professional development and career advancement. We believe in fostering talent and providing opportunities for growth within our dynamic organization.</div>
          </div>

          <div className={styles.Section2}>

            <div className={styles.box1}>
              <div className={styles.Logo}><BsGearWideConnected size={50}/></div>
              <div className={styles.Word}>Connected    </div>
              <div className={styles.Line}>We come together wherever we are across
              time zones, regions, offices and screens.</div>
            </div>

            <div className={styles.box1}>
              <div className={styles.Logo}><MdAllInclusive size={60}/></div>
              <div className={styles.Word}>Inclusive</div>
              <div className={styles.Line}>Our teams reflect the rich diversity of our world,
              with equitable access to opportunity for everyone.</div>
            </div>

            <div className={styles.box1}>
              <div className={styles.Logo}><GiFlexibleLamp size={50}/></div>
              <div className={styles.Word}>Flexible</div>
              <div className={styles.Line}>We believe in your freedom to work when
              and how you work best, to help us all thrive.</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
