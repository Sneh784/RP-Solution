import React, { useState } from 'react';
import styles from "./Admin.module.css";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";

function Admin() {
    // State Management
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", { name, surname, email, message });
        alert("Form Submitted Successfully!");
    };

    return (
        <div className={styles.Admin}>
            <div className={styles.Container}>
                
                {/* Section1 - Contact Information */}
                <div className={styles.Section1}>
                    <div className={styles.Sent}>Feel Free To Contact – Let’s Create Progress Together</div>
                    
                    {/* Address */}
                    <div className={styles.Address}>
                        <div className={styles.Name1}>Address:</div>
                        <div className={styles.Line1}>
                            401/402, 4th Floor, Sai Villa Commercial Apartment, Sr No 166, Malwadi Road,
                            Opp. to Sahyadri Hospital, Hadapsar, Pune-411028
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={styles.Contact}>
                        <div className={styles.Name2}>Contact :</div>
                        <div className={styles.Logo1}><IoCall size={30} color='red' /></div>
                        <div className={styles.No1}>9284888739</div>
                    </div>

                    {/* Email */}
                    <div className={styles.Email}>
                        <div className={styles.Name3}>Email Us:</div>
                        <div className={styles.Logo3}><MdMail color='red' size={30} /></div>
                        <div className={styles.mail}>hr@rpbsolution.com</div>
                    </div>
                </div>

                {/* Section2 - Login Form */}
                <div className={styles.Section2}>
                    <form className={styles.Form} onSubmit={handleSubmit}>
                        {/* <h2 className={styles.Heading}></h2> */}

                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.Input}
                            required
                        />

                        {/* Surname Input */}
                        <input
                            type="text"
                            placeholder="Enter your Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className={styles.Input}
                            required
                        />

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.Input}
                            required
                        />

                        {/* Message Input */}
                        <textarea
                            placeholder="Enter your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={styles.TextArea}
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button type="submit" className={styles.Button}>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Admin;
