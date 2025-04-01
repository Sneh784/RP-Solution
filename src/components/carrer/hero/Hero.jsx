import React from 'react'
import styles from "./Hero.module.css"


function Hero() {
    return (
        <div className={styles.Hero}>
            <div className={styles.Container}>
                <div className={styles.Section}>
                    <div className={styles.Section1}>
                        <div className={styles.Name}>Work with us</div>
                        <div className={styles.Sent}>To embark on a fulfilling career journey with Devcons and contribute to our mission
                            of simplifying, enhancing, and making work life more productive, reach out to
                            us via email at hr@devconsoftware.com.</div>
                        <div className={styles.Button}>Looking for internship</div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Hero
