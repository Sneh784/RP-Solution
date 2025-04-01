import React from 'react'
import styles from "./Card.module.css"
import { TbPhoneCall } from "react-icons/tb";
import { BiPlusMedical } from "react-icons/bi";
import { MdMedicalServices } from "react-icons/md";


function Card() {
    return (
        <div className={styles.Card}>
            <div className={styles.Container}>

                <div className={styles.Section}>
                    <div className={styles.box}>
                        <div className={styles.Name}>Medical Coding</div>
                        <div className={styles.Line1}>Unlock the language of healthcare with precise medical coding, ensuring accurate documentation, billing, and other eccential information</div>
                        <div className={styles.image}>
                            <img src="https://devconsoftware.com/assets/img/medical-coding-new.webp" /> </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.Word}>Medical-Billing</div>
                        <div className={styles.Line2}>Billing process. The medical billing process is a process that involves a thrid party payer, which can be an insurance company or the patient. Medical billing results in claims, whichare billing invoices for medical services rendered to patients.</div>
                        <div className={styles.link}>Links to know more about it : 
                        <div className={styles.word1}> Medical-coding<br />Medical-Billing<br />AR-Calling</div></div>
                    </div>
                </div>

                <div className={styles.Section2}>
                    
                    <div className={styles.Box1}>
                        <div className={styles.logo1}><TbPhoneCall size={40}/></div><br />
                        <div className={styles.Name1}>AR Caller</div><br />
                        <div className={styles.Sent1}>
                            <ul>
                                <li>Data Seurity</li><br />
                                <li>Unpaid Insurance Claim Tracking</li><br />
                                <li> Track Electronic and Paper Claim</li><br />
                                <li> Patient's Collectible Handling</li><br />
                                <li> Generate AR Reports</li><br />
                                <li>Affordable AR Calling</li><br />
                                <li> HIPAA Compliant AR Calling Services</li>
                            </ul>
                        </div>
                    </div>


                    <div className={styles.Box2}>
                        <div className={styles.logo1}><MdMedicalServices size={40}/></div><br />
                        <div className={styles.Name1}>Medical coding</div><br />
                        <div className={styles.Sent1}>
                            <ul>
                                <li> HCC Medical Coding Services</li><br />
                                <li> Risk Adjustment HCC Coding Services</li><br />
                                <li>  Medical Coding Audit Services</li><br />
                                <li>  Medical Coding Analysis</li><br />
                                <li>  Submission of coded charts</li><br />
                                <li>  Client Feedback</li><br />
                                <li>  Documetation</li>
                            </ul>
                        </div>
                    </div>

                   
                    <div className={styles.Box2}>
                        <div className={styles.logo1}><BiPlusMedical size={40}/></div><br />
                        <div className={styles.Name1}>Medical Billing</div><br />
                        <div className={styles.Sent1}>
                            <ul>
                                <li> Physician Billing Services </li><br />
                                <li>  Hospital Billing Services</li><br />
                                <li>  Mental Health Billing Services</li><br />
                                <li> Chiropractic Billing Services</li><br />
                                <li>  Ambulance Billing Services</li><br />
                                <li> Anesthesia Billing Services</li><br />
                                <li>  Anesthesia Billing Services</li><br />
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Card
