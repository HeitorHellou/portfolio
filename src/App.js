import React, { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Menu from "./components/Menu";
import About from "./components/About";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Resume from "./components/Resume";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("about");

  const renderContent = () => {
    switch (selectedMenu) {
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "blog":
        return <Blog />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 bg-primary px-0">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Profile.jpg`}
            alt="Profile picture"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8 px-0 d-flex flex-column">
          <div className="flex-grow-1 d-flex bg-primary text-white">
            <PersonalInfo />
          </div>
          <div>
          <Menu onSelectMenu={setSelectedMenu} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col px-0">{renderContent()}</div>
      </div>
    </div>
  );
};

export default App;
