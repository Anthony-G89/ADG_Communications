import React, { useState, useRef } from "react";
import "./style.css";



const Contact = () => {

    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const textSubject = useRef();
    const descriptionInput = useRef();

    // These Functions are clearing my inputs in my form
    const clearSubject = () => (textSubject.current.value = "");
    const clearDescription = () => (descriptionInput.current.value = "");



    // This function is submitting
    function submitNote() {

        if (!subject || !description) {
            alert("Subject & Description are empty. Please provide details.");
        } else {
            alert("Your message is submitted");
            clearSubject();
            clearDescription();
        }
    };


    return (
        <section>
            <div className="formWrapper">
                <form className="formContainer">
                    <label className="subjectLabel" htmlFor="subject" >Subject:</label><br />
                    <input className="subjectInput" ref={textSubject} type="text" onChange={event => setSubject(event.target.value)} />

                    <label className="DescriptionLabel" htmlFor="text">Description:</label><br />
                    <textarea style={{ resize: "none" }} rows="12" name="userDescription" ref={descriptionInput} onChange={event => setDescription(event.target.value)} ></textarea>
                </form>
                <button onClick={submitNote} className="submitBtn">Submit</button>
            </div>
        </section>
    )
};

export default Contact;