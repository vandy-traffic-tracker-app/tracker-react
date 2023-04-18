import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faUniversity,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import BarChart from "../barchart";
import locations from '../locations';
import { Bar } from "react-chartjs-2";

const Sidebar = (props) => {

  const FormPanel = ({activeTab}) => {
    console.log("form panel " + activeTab + " loaded")
    return <div className="sidebar__panel-content">
        {/* This is the {activeTab} panel */}
        <p>Today's Occupancy: </p>
        <BarChart barTime={todaytime} barOcc ={todayocc} />
        <br></br>
        <p>Week's Occupancy: </p>
        <BarChart barTime={todaytime} barOcc={todayocc} />
        </div>;
  };

  const {activeLocation, detailsClick} = props
  const [activeTab, setActiveTab] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleTabClick = (tab) => {
    console.log("tab click")
    setActiveTab(tab === activeTab ? null : tab);
    setIsPanelOpen(true);
    updateChart();
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


  //This is to generate barchart
  const [todaytime, setTodaytime] = useState({});
  const [todayocc, setTodayocc] = useState({});

  function updateChart() {
    async function fetchData() {
      const url = '/TestgetAverageOccupancyByWeekday/Roth/Mon';
      const response = await fetch(url);
      // wait until the request has complete
      const datapoints = await response.json();
      console.log(datapoints);
      return datapoints;
    };

    fetchData().then(datapoints => {
      const time = datapoints.map(
        function(index) {
          return index.time;
        }
      )
      const occupancy = datapoints.map(
        function(index) {
          return index.occupancy;
        }
      )

      setTodaytime(time);
      setTodayocc(occupancy);
    })
  }

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
                onClick={() => handleTabClick(location.name)}
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
        {isPanelOpen && activeTab != null && <FormPanel activeTab={activeTab} />}
      </div>
    </div>
  );
};

// const FormPanel = ({activeTab}) => {
//     console.log("form panel " + activeTab + " loaded")
//     return <div className="sidebar__panel-content">
//         This is the {activeTab} panel
//         <BarChart barTime={todaytime} barOcc ={todayocc} />
//         </div>;
//   };


export default Sidebar;
