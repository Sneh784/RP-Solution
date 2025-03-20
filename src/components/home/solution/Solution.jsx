import React from "react";
import styles from "./Solution.module.css";
import Solutiondata from "../../datafile/Solutiondata";


function Solution() {
    return (
        <div className={styles.Solution}>
            <div className={styles.Container}>
                {/* Left Section: Image */}
                <div className={styles.Section1}>
                    <div className={styles.image}>
                        <img
                            src="https://www.rpbsolution.com/images/Solutions.jpg"
                            alt="Solution"
                        />
                    </div>
                </div>

                {/* Right Section: Dynamic Boxes */}
                <div className={styles.Section2}>
                    {Solutiondata.map((item, index) => (
                        <div
                            key={item.id}
                            className={
                                index % 2 === 0 ? styles.Box1 : styles.Box2
                            }
                        >
                            <div className={styles[`box${item.id}`]}>
                                <div className={styles[`Line${item.id}`]}>
                                    {item.title}
                                </div>
                                <div className={styles[`Sentence${item.id}`]}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Solution;
