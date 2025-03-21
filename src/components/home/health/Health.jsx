import React from 'react'
import styles from "./Health.module.css"

function Health() {
  return (
    <div className={styles.Health}>
       <div className={styles.Container}>
        <div className={styles.Section1}>
            <div className={styles.Container1}>
            <div className={styles.image}>
                <img src="https://www.rpbsolution.com/images/health.jpg"/>
            </div>
        </div>

        <div className={styles.Section2}>
             <div className={styles.Name}>Transforming Healthcare, Empowering Lives</div>
             <div className={styles.Sent}>RPBS is dedicated to revolutionizing the healthcare landscape by providing innovative IT solutions tailored to meet the evolving needs of the industry. From electronic health record systems to telemedicine platforms, we empower healthcare providers to deliver exceptional care through seamless digital experiences. Our HIPAA-compliant solutions prioritize patient privacy and security while enhancing access to care and driving patient satisfaction. With RPBS, healthcare organizations can embrace the future of healthcare delivery with confidence.</div>
        </div>
        </div>

        <div className={styles.Section3}>
            <div className={styles.Box1}>
                <div className={styles.Name1}>Healthcare IT Infrastructure</div>
                <div className={styles.Line2}>Our EHR solutions streamline clinical workflows, enhance data accessibility, and improve patient care coordination. We offer customized EHR implementations, training, and support to help healthcare providers maximize the benefits of digital health records.</div>
            </div>

            <div className={styles.Box1}>
                <div className={styles.Name1}>Electronic Health Records Systems</div>
                <div className={styles.Line2}>Our EHR solutions streamline clinical workflows, enhance data accessibility, and improve patient care coordination. We offer customized EHR implementations, training, and support to help healthcare providers maximize the benefits of digital health records.</div>
            </div>

            <div className={styles.Box1}>
                <div className={styles.Name1}>Telemedicine Platforms</div>
                <div className={styles.Line2}>In response to the growing demand for telehealth services, RPBS develops and deploys telemedicine platforms that enable remote consultations, virtual visits, and remote patient monitoring. Our solutions facilitate seamless communication between healthcare providers and patients, improving access to care and patient outcomes</div>
            </div>

        </div>
       </div>
    </div>
  )
}

export default Health

