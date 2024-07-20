import React from "react";

const About = () => {
  return (
    <div>
      <div className="card card-body py-5 bg-secondary no-border-radius">
        <h2>Hi,</h2>
        <h3>Welcome to my portfolio.</h3>
      </div>
      <div className="card card-body py-5 no-border-radius">
        <h3>About Me</h3>
        <p>
          I hold a Bachelor's degree in Computer Science from Universidade
          Positivo, with proficiency in C#, C++, JavaScript, Dart, and Haxe, as
          well as experience with the .NET, React, and Django frameworks and the
          Flutter SDK. During my early years at university, I had the
          opportunity to participate in an exchange program at Universidade da
          Beira Interior in Portugal, where I was able to deepen and enhance my
          studies. Upon my return, I completed a two-year internship at Renault,
          where I collaborated with the team to develop software and systems for
          all South America. Following this, I worked as a Junior Multimedia
          Programmer for one of the leading educational publishing companies in
          Brazil, Inca Tecnologia. There, I developed various educational 2D
          games as well as multiple mobile and web applications aimed at
          elementary and high school education
        </p>
        <p>
          In addition to my professional experiences, I also developed and maintain personal
          blog SpaceSheep – in HTML, CSS, JS, and
          Bootstrap, using the React framework - to showcase my programming
          projects and other activities.
        </p>
        <p>
          In my free time I enjoy playing tennis and practicing guitar and also keeping with with my studies and code practice.
        </p>
        <h3>Skills</h3>
        <h4>Languages</h4>
        <h5>Haxe</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"95%"}}></div>
        </div>
        <h5>C#</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"81%"}}></div>
        </div>
        <h5>C++</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"76%"}}></div>
        </div>
        <h5>JS</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"72%"}}></div>
        </div>
        <h5>Dart</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"67%"}}></div>
        </div>
        <h5>HTML / CSS</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"83%"}}></div>
        </div>
        <h4>Frameworks and Libraries</h4>
        <h5>.NET</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"60%"}}></div>
        </div>
        <h5>React</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"50%"}}></div>
        </div>
        <h5>Flutter</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"43%"}}></div>
        </div>
        <h5>Bootstrap</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"67%"}}></div>
        </div>
        <h5>Django</h5>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"35%"}}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
