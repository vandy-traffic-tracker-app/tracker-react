import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faUniversity,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import BarChart from "../barchart";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  return (
    <div className="sidebar" style={{ width: activeTab ? "40%" : "200px" }}>
      <div className="sidebar__tabs">
        <button
          className={`sidebar__tab ${
            activeTab === "home" ? "sidebar__tab--active" : ""
          }`}
          onClick={() => handleTabClick("home")}
        >
          <FontAwesomeIcon icon={faHome} className="sidebar__tab-icon" />
          Home
        </button>
        <button
          className={`sidebar__tab ${
            activeTab === "roth" ? "sidebar__tab--active" : ""
          }`}
          onClick={() => handleTabClick("roth")}
        >
          <FontAwesomeIcon icon={faBuilding} className="sidebar__tab-icon" />
          Roth
        </button>
        <button
          className={`sidebar__tab ${
            activeTab === "commons" ? "sidebar__tab--active" : ""
          }`}
          onClick={() => handleTabClick("commons")}
        >
          <FontAwesomeIcon
            icon={faUniversity}
            className="sidebar__tab-icon"
          />
          Commons
        </button>
        <button
          className={`sidebar__tab ${
            activeTab === "other" ? "sidebar__tab--active" : ""
          }`}
          onClick={() => handleTabClick("other")}
        >
          <FontAwesomeIcon icon={faLandmark} className="sidebar__tab-icon" />
          Other
        </button>
      </div>
      <div
        className="sidebar__panel"
        style={{ width: activeTab ? "60%" : "0%" }}
      >
        {activeTab === null}
        {activeTab === "home" && <HomePanel />}
        {activeTab === "roth" && <RothPanel />}
        {activeTab === "commons" && <CommonsPanel />}
        {activeTab === "other" && <OtherPanel />}
      </div>
    </div>
  );
};

const HomePanel = () => {
  return <div className="sidebar__panel-content">
      
      This is the Home panel</div>;
};

const RothPanel = () => {
  return <div className="sidebar__panel-content">This is the Roth panel
  <BarChart/>
  </div>;
};

const CommonsPanel = () => {
  return (
    <div className="sidebar__panel-content">This is the Commons panel</div>
  );
};

const OtherPanel = () => {
  return <div className="sidebar__panel-content">This is the Other panel</div>;
};

export default Sidebar;
