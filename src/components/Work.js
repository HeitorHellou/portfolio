import React from "react";
import "./Work.css";
import workExperience from "../data/data.json";

const Work = () => {
  return (
    <div>
      <div className="card card-body py-5 bg-success no-border-radius">
        <h2>Work Experience</h2>
      </div>
      <div className="card card-body no-border-radius">
        <div className="timeline">
          {workExperience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item-content">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <span>{`${job.startDate} - ${job.endDate}`}</span>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
