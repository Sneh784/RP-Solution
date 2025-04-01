import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
    <div className={styles.Container}>

        <div className={styles.Section1}>
            <div className={styles.Name}>US HealthCare</div>
            <div className={styles.Line}>We provide Health care services</div>
        </div>
        
        <div className={styles.Section2}></div>
    </div>
    </div>
  )
}

export default Hero
