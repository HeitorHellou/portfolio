import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGraduationCap,
  faFolderOpen,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({onSelectMenu}) => {
  return (
    <div className="d-flex flex-wrap text-white align-items-stretch text-center">
      <div className="port-item p-4 bg-secondary flex-grow-1" onClick={() => onSelectMenu('about')}>
        <FontAwesomeIcon icon={faHome} className="fa-2x d-block" />
        <span className="d-none d-sm-block">About</span>
      </div>
      <div className="port-item p-4 bg-success flex-grow-1" onClick={() => onSelectMenu('work')}>
        <FontAwesomeIcon icon={faGraduationCap} className="fa-2x d-block" />
        <span className="d-none d-sm-block">Work</span>
      </div>
      <div className="port-item p-4 bg-secondary flex-grow-1" onClick={() => onSelectMenu('blog')}>
        <FontAwesomeIcon icon={faFolderOpen} className="fa-2x d-block" />
        <span className="d-none d-sm-block">Blog</span>
      </div>
      <div className="port-item p-4 bg-success flex-grow-1" onClick={() => onSelectMenu('resume')}>
        <FontAwesomeIcon icon={faFile} className="fa-2x d-block" />
        <span className="d-none d-sm-block">Resume</span>
      </div>
    </div>
  );
};

export default Menu;
