import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const ContactSection = () => {
    return(
        <div className="contact-section-container">
            <h1>Contact Me</h1>
            <div className="container contact_container">
                <div className="contact-options">
                    <article className="contact-option">
                        <AiOutlineMail/>
                        <h4>Email</h4>
                        <h5>ratthatham.siridol@gmail.com</h5>
                        <a href="mailto:ratthatham.siridol@gmail.com">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <AiOutlineMail/>
                        <h4>Linkedin</h4>
                        <h5>@Ratthatham-siridol</h5>
                        <a href="https://www.linkedin.com/in/ratthatham-siridol/">Send a message</a>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;