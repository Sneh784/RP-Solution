import React from 'react'
import styles from "./Career.module.css"
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { RiFocus3Fill } from "react-icons/ri";
import { TbGraphFilled } from "react-icons/tb";


function Career() {
  return (
    <div className={styles.Career}>
      <div className={styles.Container11}>
        <div className={styles.Container}>

          <div className={styles.Section1}></div>
          <div className={styles.image}>
            <img src="https://www.rpbsolution.com/images/About.jpg" />
          </div>
          <div className={styles.Section2}>
            <div className={styles.box1}>
              <div className={styles.Box1}>
                <div className={styles.logo1}><BsFillFileBarGraphFill size={40} color='red' /></div>
                <div className={styles.Name1}>Who We Are:</div>
                <div className={styles.Line1}>At RPBS, our team of experts delivers complete software solutions for businesses. From development to support, we cover it all, customizing each solution to fit our clients' specific needs.</div>
              </div>

              <div className={styles.Box2}>
                <div className={styles.logo2}><GiComputerFan size={40} color='red' /></div>
                <div className={styles.Name2}>Our Mission:</div>
                <div className={styles.Line2}>At RPBS, we specialize in creating software that helps businesses grow and run more efficiently. With our expertise and dedication, we make sure our clients see tangible benefits from our solutions.</div>
              </div>
            </div>

            <div className={styles.box2}>
              <div className={styles.Box3}>
                <div className={styles.logo3}><RiFocus3Fill size={50} color='red' />  </div>
                <div className={styles.Name3}>Client Focus:</div>
                <div className={styles.Line3}>At RPBS, client satisfaction is our top priority. We believe in building long-term partnerships with our clients, based on trust, transparency, and mutual success.</div>
              </div>

              <div className={styles.Box4}>
                <div className={styles.logo4}><TbGraphFilled size={50} color='red' /> </div>
                <div className={styles.Name4}>Why Choose Us:</div>
                <div className={styles.Line4}>RPBS is your trusted partner for all your software needs. What sets us apart is our dedication to quality, innovation, and customer service. With RPBS, you can trust that your project is in good hands, from start to finish.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      

      <div className={styles.Section3}>
        <div className={styles.Section4}>
          <div className={styles.TextBox}>
            <div className={styles.Name}>RP BUSINESS SOLUTIONS LLP.</div>
            <div className={styles.Line}>Charting Your Path to Success. "Join RPBS,<br/>
             where talent meets opportunity. Explore growth, <br/>
             innovation, and a supportive culture."</div>
          </div>

          <div className={styles.Image}>
            <img src="https://www.rpbsolution.com/images/career.jpg" alt="Career at RPBS" />
          </div>
        </div>
      </div>

      <div className={styles.Section5}>
        <div className={styles.Section6}>
          <div className={styles.Part1}></div>
          <div className={styles.Part1}></div>
          <div className={styles.Part1}></div>
          <div className={styles.Part1}></div>    
          <div className={styles.Part1}></div>
          <div className={styles.Part1}></div>
        </div>
      </div>
    </div>
  )
}

export default Career
