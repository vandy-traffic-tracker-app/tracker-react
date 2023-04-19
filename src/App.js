import './App.css';
import React, { useState } from "react";
import VandyMap from './components/map';
import Header from './components/header';
import locations from './components/locations';
import MiniDrawer from './components/sidebar/sidebarv1';
import SideBarV2 from './components/sidebar/sidebarv2';
import Sidebar from './components/sidebar/newSb'

function App() {
  const [activeLocation, setActiveLocation] = useState(null);
  const [detailsClick, setDetailsClick] = useState(null);
  return (
    <div>
      <Header />
    <div>
      <VandyMap activeLocation={activeLocation} setActiveLocation={setActiveLocation} detailsClick={detailsClick} setDetailsClick={setDetailsClick}/>
      <Sidebar activeLocation={activeLocation} setActiveLocation={setActiveLocation} detailsClick={detailsClick} setDetailsClick={setDetailsClick}/>
      </div>
    </div>
  );
}

export default App;
