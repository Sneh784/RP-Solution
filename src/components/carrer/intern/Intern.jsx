import React from "react";
import styles from "./Intern.module.css";
import internshipData from "../../datafile/carrer/internshipData";

function Intern() {
  return (
    <div className={styles.Intern}>
      <div className={styles.Container}>
        {/* Heading */}
        <div className={styles.Word}>Internship Opportunities</div>
        <div className={styles.Line}>
          Kickstart your career with our internship program. Explore exciting
          opportunities and gain valuable experience with our internship programs.
        </div>

        {/* Internship Cards */}
        <div className={styles.Section}>
          {internshipData.map((internship) => {
            const backgroundStyle = { backgroundImage: `url(${internship.imageUrl})` };

            return (
              <div key={internship.id} className={styles.Box} style={backgroundStyle} title={internship.title}>
                <div className={styles.Overlay}></div> {/* Dark Overlay on Hover */}
                <div className={styles.Content}>
                  <h2 className={styles.Header}>{internship.title}</h2>
                  <p className={styles.Sent}>{internship.description}</p>

                  {/* Qualifications */}
                  <div className={styles.Qualifications}>Qualifications:</div>
                  <ul className={styles.List}>
                    {internship.qualifications.map((qual, index) => (
                      <li key={index}>{qual}</li>
                    ))}
                  </ul>

                  {/* Benefits */}
                  <div className={styles.Benefits}>Benefits:</div>
                  <ul className={styles.List}>
                    {internship.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Intern;
