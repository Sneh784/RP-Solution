import React from 'react';
import styles from "./Sol.module.css";
import Soldata from '../../datafile/Soldata';


function Server() {
  return (
    <div className={styles.Sol}>
        <div className={styles.Container}>
            <div className={styles.Section1}>
                <div className={styles.image}>
                    <img src={Soldata.imageUrl} alt="Service" />
                </div>
            </div>

            <div className={styles.Section2}>
              <div className={styles.Line1}>{Soldata.title}</div>
              <div className={styles.Line2}><br/><br/>{Soldata.description}</div>
              <div className={styles.Line3}><br/><br/>{Soldata.highlight}</div>
            </div>
        </div>
    </div>
  );
}

export default Server;
