import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faBlogger } from '@fortawesome/free-brands-svg-icons';

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <div className="info-item">
        <h1>Heitor Hellou Marcondes</h1>
      </div>
      <div className="info-item">
        <h3>Software Engineer</h3>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
        <span>heitor.hellou@outlook.com</span>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faGithub} className="info-icon" />
        <span>
          <a href="https://github.com/HeitorHellou" target="_blank" rel="noopener noreferrer">
            https://github.com/HeitorHellou
          </a>
        </span>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faLinkedin} className="info-icon" />
        <span>
          <a href="https://www.linkedin.com/in/heitor-hellou/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/heitor-hellou/
          </a>
        </span>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faBlogger} className="info-icon" />
        <span>
          <a href="https://www.spacesheep.blog/" target="_blank" rel="noopener noreferrer">
            https://www.spacesheep.blog/
          </a>
        </span>
      </div>
    </div>
  );
};

export default PersonalInfo;
