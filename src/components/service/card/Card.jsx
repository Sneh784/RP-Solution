import React from 'react'
import styles from "./Card.module.css"
import { FaWindows } from "react-icons/fa6";
import { MdWebhook } from "react-icons/md";
import { FaAndroid } from "react-icons/fa";
import { PiFediverseLogoFill } from "react-icons/pi";
import { SiBrandfolder } from "react-icons/si";
import { CgDigitalocean } from "react-icons/cg";



export default function Card() {
  return (
    <div dic className={styles.Card}>
      <div className={styles.Container}>

       <div className={styles.Section1}>
          <div className={styles.Box1}>
            <div className={styles.Logo1}><FaWindows size={40} color='red'/>    </div>
            <div className={styles.Name1}>Software Designing</div>
            <div className={styles.Sent1}>We provide all commercial or organizational software development service at minimal cost.</div>
          </div>

          <div className={styles.Box2}>
            <div className={styles.Logo2}><MdWebhook size={40} color='red'/> </div>
            <div className={styles.Name2}>Web Designing</div>
            <div className={styles.Sent2}>We make web designing responsive so you can use your website on all modern devices like smartphone, tablet, or desktop.</div>
          </div>

          <div className={styles.Box3}>
            <div className={styles.Logo3}><FaAndroid size={40} color='red'/>    </div>
            <div className={styles.Name3}>App Development</div>
            <div className={styles.Sent3}>If you want to expand your business with android app, SMART SOFTWARE SERVICES is the right thing..</div>
          </div>

          </div>


          <div className={styles.Section2}>

          <div className={styles.Box4}>
            <div className={styles.Logo1}><PiFediverseLogoFill size={40} color='red' />  </div>
            <div className={styles.Name1}>Logo Designing</div>
            <div className={styles.Sent1}>We have certified designer who make logo to keep in mind with company motto.</div>
          </div>

          <div className={styles.Box5}>
            <div className={styles.Logo1}><SiBrandfolder size={40} color='red'/> </div>
            <div className={styles.Name1}>Branding</div>
            <div className={styles.Sent1}>Smart Software provide branding service to growth your bussiness.</div>
          </div>   

          <div className={styles.Box6}>
            <div className={styles.Logo1}><CgDigitalocean size={40} color='red'/>  </div>
            <div className={styles.Name1}>Digital Marketing</div>
            <div className={styles.Sent1}>We have certified designer who make logo to keep in mind with company motto.</div>
          </div>

          </div>

          </div>
    </div>
  )
}
