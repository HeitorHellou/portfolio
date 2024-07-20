import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="card card-body py-5 bg-success no-border-radius">
        <h2>Resume</h2>
      </div>
      <div className="card card-body py-5 no-border-radius">
        <h3>You can download my resume here</h3>
        <div className="resume-download">
          <h5>English</h5>
          <a href="/assets/Heitor Marcondes Resume.pdf" download className="btn btn-primary">
            Download
          </a>
        </div>
        <div className="resume-download mt-3">
          <h5>Português</h5>
          <a href="/assets/Heitor Marcondes Curriculo.pdf" download className="btn btn-primary">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
