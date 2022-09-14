import React from "react";
import ContactNav from "../contact-nav/contact-nav";
import '../home-section/home-section.css'


const HomeSection = () => {
    return(
        <div className="home-section-container">
            <div className="home-text">
                <p>Hello I'm</p>
                <h1>Ratthatham Siridol</h1>
                <h2>frontend web developer</h2>
            </div>
            <div className="home-image">
                <div className="img-box">
                    <img src="https://sv1.picz.in.th/images/2022/09/14/aL90fZ.png" alt="profile "/>
                </div>
            </div>
            <a className="btn-download-resume" href="test"> Resume</a>
            <a className="btn" href="#about-me">About Me</a>
            <div className="margin-tab"></div>
            <div className="contact-nav">
                <ContactNav/>
            </div>
        </div>
    )
}

export default HomeSection;