import React from "react";
import './about-section.css'
import ExStackTools from "./ex-stacks-tools/ex-stacks-tools";
import ProgramerLanguage from "./programer-language/programer-language";
import aboutMePic from '/Users/ratthathamsiridol/Documents/Fullstack Dev/rts-portfolio/src/asset/AboutMePic-NoBG.png'

const AboutSection = () => {
    return(
        <div className="about-section-container">
            <h1>About Me</h1>
            <div className="sub-about-section">
                <div className="about-me-image">
                    <div className="img-box">
                        <img src={aboutMePic} alt='ratthatham'/>
                    </div>
                </div>
                <div className="about-me-text">
                    <div className="detail">
                        <p>I'm an Engineering who really likes to coding and design. I'm 27 years old. I'm a cheerful good-natured, friendly person. Discipline and also kind of flexibility in work. Furthermore, I am interested in new experience or challenge because it makes continuous self-improve. 
                        Three words that describe me are lifelong learning,  professional, motivation. </p>
                    </div>
                    <ProgramerLanguage/>
                    <ExStackTools/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;