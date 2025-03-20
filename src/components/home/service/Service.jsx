import React from 'react';
import styles from "./Service.module.css";
import Servicedata from '../../datafile/Servicedata';


function Server() {
  return (
    <div className={styles.Service}>
        <div className={styles.Container}>
            <div className={styles.Section1}>
                <div className={styles.image}>
                    <img src={Servicedata.imageUrl} alt="Service" />
                </div>
            </div>

            <div className={styles.Section2}>
              <div className={styles.Line1}>{Servicedata.title}</div>
              <div className={styles.Line2}><br/><br/>{Servicedata.description}</div>
              <div className={styles.Line3}><br/><br/>{Servicedata.highlight}</div>
            </div>
        </div>
    </div>
  );
}

export default Server;
