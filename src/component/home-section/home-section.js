import React from "react";
import '../home-section/home-section.css'
import profilePicture from '/Users/ratthathamsiridol/Documents/Fullstack Dev/rts-portfolio/src/asset/IMG_0263.png'


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
                    <img src={profilePicture} alt="profile "/>
                </div>
            </div>
            <a className="btn-download-resume" href="#"> Download Resume</a>
            <a className="btn" href="#"> Let's Talk</a>
        </div>
    )
}

export default HomeSection;