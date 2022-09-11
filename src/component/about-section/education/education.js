import React from "react";

const Education = () => {
    return(
        <div className="education-container">
            <div className="time-line">
                <div className="time-line-item">
                    <span className="year">2013 - 2017</span>
                    <h4>Electrical Engineering - <span>King Mongkut's University of Technology Thonburi (KMUTT) </span></h4>
                </div>
                <div className="time-line-item">
                    <span className="year">2021 - 2022</span>
                    <h4>Data Analyst - <span>Self Learning with DataScience Boot Camp</span></h4>
                    <li>Google Sheet, Query Data, Pivot table</li>
                    <li>SQL for Data Analysis</li>
                    <li>R Programing</li>
                    <li>Business Statics</li>
                    <li>Dashboard Google Data Studio</li>

                </div>
                <div className="time-line-item">
                    <span className="year">2022 - Now</span>
                    <h4>Web Developer - <span>Self Learning with Online Course</span></h4>
                    <li>Udemy - The Complete Web Developer in 2022: Zero to Mastery </li>
                    <li>Udemy - Complete React Developer in 2022 </li>
                    <li>GetsCodeCamp - CodeCamp Online Fullstack JavaScript </li>
                </div>
            </div>

        </div>
    )
}

export default Education;