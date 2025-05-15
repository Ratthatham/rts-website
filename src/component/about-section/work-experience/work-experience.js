import React from "react";

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <div className="time-line">
        <div className="time-line-item">
          <span className="year">2017 - 2019</span>
          <h4>
            Electrical Engineering Designer - <span>Italthai Engineering</span>
          </h4>
          <li>Estimate the price of the material used for construction.</li>
          <li>Design electrical system in a substation. </li>
          <li>Collaborated with other designers.</li>
        </div>
        <div className="time-line-item">
          <span className="year">2019 - 2022</span>
          <h4>
            Quality Assurance Engineer -{" "}
            <span>Mitsubishi Elevator (Thailand)</span>
          </h4>
          <li>
            Cleansing, Import data and visualize data to supervisor at the
            monthly meeting.
          </li>
          <li>
            Monthly Check the work of the technician and collect data of
            Elevator defects.{" "}
          </li>
          <li>Annually Evaluate technicians.</li>
        </div>
        <div className="time-line-item">
          <span className="year">2023 - Now</span>
          <h4>
            Frontend Web Developer - <span>7 Solutions</span>
          </h4>
          <li>Create website for customer.</li>
          <li>Update website for customer.</li>
          <li>Support website for customer.</li>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
