import React from "react";
import "./style.css";



const Contact = () => {
    return (
        <section>
            <div className="formWrapper">
                <form className="formContainer">
                    <label className="subjectLabel" htmlFor="subject">Subject:</label><br />
                    <input className="subjectInput" type="text" />

                    <label className="DescriptionLabel" htmlFor="text">Description:</label><br />
                    <textarea style={{ resize: "none" }} rows="12" name="userDescription" ></textarea>
                </form>
                <button className="submitBtn">Submit</button>
            </div>
        </section>
    )
};

export default Contact;