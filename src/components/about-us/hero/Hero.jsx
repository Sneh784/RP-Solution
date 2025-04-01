import React from 'react'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Container}>
        <div className={styles.Name}>About-US</div>
        <div className={styles.Sent1}>Welcome to RP Business Solutions pvt. Ltd.</div>
        <div className={styles.Sent2}>Welcome, and thank you for visiting RP Business solutions pvt. Ltd.<br/>
         We're delighted to have you here as we share a glimpse into who we are,<br/>what we do, and why we're passionate about it.</div>
         <div className={styles.Sent3}>To know more about "Healthcare services" click below</div>
      </div>
    </div>
  )
}

export default Hero
