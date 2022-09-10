import React from "react";
import './about-section.css'
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
                    <div className="programer-language">
                        <h3>Experience Programing Language</h3>
                        <div className="borders">
                            <div className="border">
                                <h3>Intermediate</h3>
                                <div className="border">HTML</div>
                                <div className="border">CSS</div>
                                <div className="border">Javascript</div>
                                <div className="border">Typescript</div>
                            </div>
                            <div className="border">
                                <h3>Beginner</h3>
                                <div className="border">Python</div>
                                <div className="border">R Programing</div>
                            </div>
                        </div>
                    </div>
                    <div className="ex-stacks-tools">
                        <h3>Experience Web Stack And Tools</h3>
                        <div className="borders">
                            <div className="border">React</div>
                            <div className="border">Node js.</div>
                            <div className="border">NPM</div>
                            <div className="border">Bootstrap</div>
                            <div className="border">DigitalOcean</div>
                            <div className="border">Docker</div>
                            <div className="border">Firebase</div>
                            <div className="border">Github</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;