import React from "react";
import './about-section.css'
import aboutMePic from '/Users/ratthathamsiridol/Documents/Fullstack Dev/rts-portfolio/src/asset/AboutMePic-NoBG.png'

const AboutSection = () => {
    return(
        <div className="about-section-container">
            <h1>About me</h1>
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
                    <div className="programer-language">
                        <h3>Programing Language</h3>
                        <h3>Intermediate</h3>
                        <span>HTML</span>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <h3>Beginer</h3>
                        <p>Python</p>
                        <p>R Programing</p>
                    </div>
                    <div className="ex-stacks-tools">
                        <h3>Experience web stack and tools</h3>
                        <div className="tools">
                            <div className="tool">React</div>
                            <div className="tool">Node js.</div>
                            <div className="tool">NPM</div>
                            <div className="tool">Bootstrap</div>
                            <div className="tool">DigitalOcean</div>
                            <div className="tool">Docker</div>
                            <div className="tool">Firebase</div>
                            <div className="tool">Github</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;