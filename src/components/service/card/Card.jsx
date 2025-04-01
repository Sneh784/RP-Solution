import React from 'react'
import styles from "./Card.module.css"
import { FaWindows } from "react-icons/fa6";
import { MdWebhook } from "react-icons/md";
import { FaAndroid } from "react-icons/fa";
import { PiFediverseLogoFill } from "react-icons/pi";
import { SiBrandfolder } from "react-icons/si";
import { CgDigitalocean } from "react-icons/cg";
import { PiCommandBold } from "react-icons/pi";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { SiAdobecreativecloud } from "react-icons/si";



export default function Card() {
  return (
    <div dic className={styles.Card}>
      <div className={styles.Container}>

       <div className={styles.Section1}>
          <div className={styles.Box1}>
            <div className={styles.Logo1}><FaWindows size={60} color='red'/>    </div>
            <div className={styles.Name1}>Software Designing</div>
            <div className={styles.Sent1}>We provide all commercial or organizational software development service at minimal cost.</div>
          </div>

          <div className={styles.Box2}>
            <div className={styles.Logo2}><MdWebhook size={60} color='red'/> </div>
            <div className={styles.Name1}>Web Designing</div>
            <div className={styles.Sent1}>We make web designing responsive so you can use your website on all modern devices like smartphone, tablet, or desktop.</div>
          </div>

          <div className={styles.Box3}>
            <div className={styles.Logo3}><FaAndroid size={60} color='red'/>    </div>
            <div className={styles.Name1}>App Development</div>
            <div className={styles.Sent1}>If you want to expand your business with android app, SMART SOFTWARE SERVICES is the right thing..</div>
          </div>

          </div>


          <div className={styles.Section2}>

          <div className={styles.Box4}>
            <div className={styles.Logo1}><PiFediverseLogoFill size={60} color='red' />  </div>
            <div className={styles.Name1}>Logo Designing</div>
            <div className={styles.Sent1}>We have certified designer who make logo to keep in mind with company motto.</div>
          </div>

          <div className={styles.Box5}>
            <div className={styles.Logo1}><SiBrandfolder size={60} color='red'/> </div>
            <div className={styles.Name1}>Branding</div>
            <div className={styles.Sent1}>Smart Software provide branding service to growth your bussiness.</div>
          </div>   

          <div className={styles.Box6}>
            <div className={styles.Logo1}><CgDigitalocean size={60} color='red'/>  </div>
            <div className={styles.Name1}>Digital Marketing</div>
            <div className={styles.Sent1}>We have certified designer who make logo to keep in mind with company motto.</div>
          </div>

          </div>
          <div className={styles.Section3}>
                       
              <div className={styles.Line}>Let's Connect<br/> With Us.!!</div>
          </div>

          <div className={styles.Section4}>

            <div className={styles.box}>

              <div className={styles.box1}>
                <div className={styles.logo1}><PiCommandBold size={50} color='red' />  </div>
                <div className={styles.line1}>Strategy</div>
                <div className={styles.sent1}>Agile model to make higher quality software. Manual and Automation testing on every aspect of software applications.</div>
                <div className={styles.Button}><FaExternalLinkSquareAlt color='red' size={20}/>Learn More</div>
              </div>

              <div className={styles.box2}>
                <div className={styles.logo1}><FaSnowflake size={50} color='red'/></div>
                <div className={styles.line1}>Technology</div>
                <div className={styles.sent1}>MVC Architecture technology which help to rapid Software Application Development. AngularJS and Jquery to make design effective.</div>
                <div className={styles.Button}><FaExternalLinkSquareAlt color='red' size={20}/>Learn More</div>
              </div>
              

              <div className={styles.box3}>
                <div className={styles.logo1}><SiAdobecreativecloud color='red' size={50} />      </div>
                <div className={styles.line1}>Creativity</div>
                <div className={styles.sent1}>Creative animation and graphics which leads business growth. Logo and graphics help your bussiness to achieve your goal.</div>
                <div className={styles.Button}><FaExternalLinkSquareAlt color='red' size={20}/>Learn More</div>
              </div>
              
            </div>


            <div className={styles.box4}>

              <div className={styles.box1}>
                <div className={styles.logo1}><PiCommandBold size={50} color='red' />  </div>
                <div className={styles.line1}>Strategy</div>
                <div className={styles.sent1}>Agile model to make higher quality software. Manual and Automation testing on every aspect of software applications.</div>
                <div className={styles.Button}><FaExternalLinkSquareAlt color='red' size={20}/>Learn More</div>
              </div>

              <div className={styles.box2}>
                <div className={styles.logo1}><FaSnowflake size={50} color='red'/></div>
                <div className={styles.line1}>Technology</div>
                <div className={styles.sent1}>MVC Architecture technology which help to rapid Software Application Development. AngularJS and Jquery to make design effective.</div>
                <div className={styles.Button}><FaExternalLinkSquareAlt color='red' size={20}/>Learn More</div>
              </div>
              

              <div className={styles.box3}>
                <div className={styles.logo1}><SiAdobecreativecloud color='red' size={50} />      </div>
                <div className={styles.line1}>Creativity</div>
                <div className={styles.sent1}>Creative animation and graphics which leads business growth. Logo and graphics help your bussiness to achieve your goal.</div>
                <div className={styles.Button}><FaExternalLinkSquareAlt color='red' size={20}/>Learn More</div>
              </div>
              
            </div>
          </div>

          </div>
    </div>
  )
}
