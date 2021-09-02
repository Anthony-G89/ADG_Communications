import React, {useState} from "react";
import "./style.css";



const Contact = () => {

    const [subject , setSubject] = useState("");
    const [description , setDescription] = useState("");


    return (
        <section>
            <div className="formWrapper">
                <form className="formContainer">
                    <label className="subjectLabel" htmlFor="subject" >Subject:</label><br />
                    <input className="subjectInput" type="text" onChange={event => setSubject(event.target.value + console.log(event.target.value))} />

                    <label className="DescriptionLabel" htmlFor="text">Description:</label><br />
                    <textarea style={{ resize: "none" }} rows="12" name="userDescription" onChange={event => setDescription(event.target.value + console.log(event.target.value))} ></textarea>
                </form>
                <button className="submitBtn">Submit</button>
            </div>
        </section>
    )
};

export default Contact;