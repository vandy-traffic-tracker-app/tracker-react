import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faUniversity,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import BarChart from "../barcharts/barchart";
import locations from '../locations';

const Sidebar = (props) => {

  const {activeLocation, detailsClick} = props
  const [activeTab, setActiveTab] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleTabClick = (tab) => {
    console.log("tab click")
    setActiveTab(tab === activeTab ? null : tab);
    setIsPanelOpen(true);
  };

  useEffect(() => {
      console.log("every time page loads")
  })


  useEffect(() => {
    if (activeLocation != null) {
        console.log("details click")
        setActiveTab(activeLocation === activeTab ? null : activeLocation);
        setIsPanelOpen(true);
    }
  }, [detailsClick]);

  const FormPanel = ({activeTab}) => {
    console.log("form panel " + activeTab + " loaded")
    return <div className="sidebar__panel-content">
        This is the {activeTab} panel
        <BarChart location={activeTab} />
        </div>;
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
        {
            locations.map((location, index) => (
                <button key={index}
                className={`sidebar__tab ${
                    activeTab === location.name} ? "sidebar__tab--active" : ""
                }` } 
                onClick={() => handleTabClick(location.id)}
                >
                <FontAwesomeIcon icon={faBuilding} className="sidebar__tab-icon" />
                {location.name}
                </button>
            ))
        }
      </div>
      <div
        className="sidebar__panel"
        style={{ width: activeTab ? "60%" : "0%" }}
      >
        {isPanelOpen && activeTab !== null && activeTab === "Home"}
        {isPanelOpen && activeTab !== null && activeTab !== "Home" && <FormPanel activeTab={activeTab} />}
      </div>
    </div>
  );
};


export default Sidebar;
