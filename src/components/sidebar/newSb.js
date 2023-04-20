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
import BarChartAvg from "../barcharts/avgbarchart";

const fullNamesByID = {
  "Roth":"Rothschild Dining", 
  "Zeppos":"Zeppos Dining", 
  "Rand":"Rand Dining", 
  "EBI":"EBI Dining", 
  "Commons":"Commons Dining", 
  "Rec":"Recreation Center", 
  "Alumni":"Alumni Gym",
  "Central":"Central Library"
}

const Sidebar = (props) => {

  const {activeLocation, detailsClick} = props
  const [activeTab, setActiveTab] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [date, setDate] = useState("Mon");

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
    const fullName = fullNamesByID[activeTab]
    return <div className="sidebar__panel-content">
        <h1 className="panel-header">{fullName}</h1>
        <p1>Today's Real-Time Occupancy</p1>
        <BarChart location={activeTab} />
        <br />
        <p style = {{"width" : "100%", "left":"50%"}}>Average Occupancy by Weekday</p>
        <BarChartAvg location={activeTab} date={date} />
        <br/>
        <p1 className="sidebar__panel-content2">Select a weekday to display the average occupancy in this building throughout the day: </p1>
        <br/><br/>
        <div>
          <select className="selectButton" value={date} onChange={e =>setDate(e.target.value)}>
            <option value="Mon">Mon</option>
            <option value="Tues">Tues</option>
            <option value="Wed">Wed</option>
            <option value="Thurs">Thurs</option>
            <option value="Fri">Fri</option>
            <option value="Sat">Sat</option>
            <option value="Sun">Sun</option>
          </select>
        </div>

        <br/>
        </div>;

        
  };

  const HomePanel = () => {
    return <div className="sidebar__panel-content1">
      <h1 className="panel-header">About Us</h1>
      <p1>Everyone at Vanderbilt University has their favorite spots on campus. They might love studying in Central Library, or love grabbing a sandwich at Rand between classes, or look forward to lifting weights at the Rec Center. Unfortunately, with over 13,537 students and over 4,500 staff members, these campus residents might not always be able to access these buildings due to overcrowding and long lines. To solve this issue, they might try to avoid common “rush hours”, but these are often variable per weekday and different for each location. 
</p1>
    <br/> <br/>
    <p1>Welcome to VandyTracker, the cloud-based solution developed by Mi Nguyen, Blake Shin, and Daniel Martinez that aids crowd control in campus buildings. Currently deployed as a proof of concept, VandyTracker analyzes Vanderbilt swipe data to show you the estimated occupancy for each location.
</p1>
    <br/> <br/>
<p1> The goal? <br/> <br/>To give you a chance to plan your day so that you're not stuck waiting in lines and in crowded spaces! </p1>
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
        {isPanelOpen && activeTab !== null && activeTab === "home" && <HomePanel/>}
        {isPanelOpen && activeTab !== null && activeTab !== "home" && <FormPanel activeTab={activeTab}/>}
      </div>
    </div>
  );
};


export default Sidebar;