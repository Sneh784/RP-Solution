import React from 'react'
import styles from "./Footer.module.css"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";


function Footer() {
  return (
    <div className={styles.Footer}> 
    <div className={styles.Container}>
     <div className={styles.Line}>
     © Copyright 2025 RP Business Solutions LLP. All Rights Reserved.
     </div>

     <div className={styles.Section}>
     <div className={styles.Logo1}> <FaSquareFacebook size={40}/> </div>
     <div className={styles.Logo2}> <FaInstagramSquare size={40}/></div> 
     <div className={styles.Logo3}> <FaSquareYoutube size={40}/></div>
     <div  className={styles.Logo4}><SiLinkedin size={40}/></div>

     </div>
     </div>
    </div>
  )
}

export default Footer
