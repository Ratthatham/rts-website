import React, {useState} from "react";
import './about-section.css'
import Education from "./education/education";
import ExStackTools from "./ex-stacks-tools/ex-stacks-tools";
import ProgramerLanguage from "./programer-language/programer-language";
import WorkExperience from "./work-experience/work-experience";
import aboutMePic from '/Users/ratthathamsiridol/Documents/Fullstack Dev/rts-portfolio/src/asset/AboutMePic-NoBG.png'

const AboutSection = () => {
    const [stateEduBT, setStateEduBT] = useState('active'); //สร้าง state ขึ้นมาใช้กับการทำงานของ <Button>
    const [stateWorkBT, setStateWorkBT] = useState('')

    const buttonStateEdu = () => {
        setStateEduBT('active')
        setStateWorkBT('')
    }

    const buttonStateWorkBT = () => {
        setStateWorkBT('active')
        setStateEduBT('')
    }
    
    
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
                <div className="tab-items">
                    <button type="button" className={`tab-item ${stateEduBT}`} onClick={buttonStateEdu}>education</button>
                    <button type="button" className={`tab-item ${stateWorkBT}`} onClick={buttonStateWorkBT}>work experience</button>
                </div>
                {
                    stateEduBT === 'active'? <Education/> : <WorkExperience/>
                }
                </div>
            </div>
        </div>
    )
}

export default AboutSection;