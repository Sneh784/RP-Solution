import React from 'react'
import styles from "./Service.module.css"
import { FaLongArrowAltRight } from "react-icons/fa";

function Service() {
  return (
    <div className={styles.Service}>
      <div className={styles.Container}>


        <div className={styles.box}>
          <div className={styles.Name}>WORK WITH US</div>
          <div className={styles.Sent}>Explore diverse roles matching your expertise and ambitions. Elevate your career with us, where innovation meets opportunity.</div>
        </div>

        <div className={styles.Section}>
          <div className={styles.box2}>
            <div className={styles.Box1}>
              <div className={styles.Word}>Explore Opportunities:</div>
              <div className={styles.Line}>Browse through our current job listings spanning diverse fields and positions, offering opportunities for growth and impact. Find the perfect match for your skills and aspirations to begin your journey with us.</div>
              <div className={styles.Butoon}>Learn More <FaLongArrowAltRight /></div>
            </div>

            <div className={styles.Box1}>
              <div className={styles.Word}>Apply with Ease:</div>
              <div className={styles.Line}>Submit your application effortlessly through our user-friendly platform, where you can showcase your qualifications and enthusiasm for joining our team. We value your unique talents and are excited to learn more about how you can contribute to our mission.</div>
              <div className={styles.Butoon}>Learn More <FaLongArrowAltRight /></div>
            </div>


            <div className={styles.Box1}>
              <div className={styles.Word}>Join Our Team:</div>
              <div className={styles.Line}>Take the next step in your career by becoming a part of our vibrant community, where collaboration, innovation, and personal development thrive. Join us in shaping the future as we work together towards our shared goals and success.</div>
              <div className={styles.Butoon}>Learn More <FaLongArrowAltRight /></div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
