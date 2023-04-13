import 'leaflet-sidebar-v2/js/leaflet-sidebar.min.js';
import './sidebar.css'
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

function Sidebar(props) {

  const map = useMap();
  const sidebar = L.control.sidebar({ container: 'sidebar' }).addTo(map);
  console.log("This better not happen twice")

  const panels = [
    {
      id: "Home",
      tab: '<i style="font-size: large" class="fa fa-home"></i>',
      pane: "Welcome to VandyTracker",
      title: "About VandyTracker",
      position: "top",
    },
    {
      id: "rothschild",
      tab: 'Rothschild',
      pane: "Rothschild Data",
      title: "Rothschild",
      position: "top",
    },
    {
      id: "zeppos",
      tab: 'Zeppos',
      pane: "Zeppos Data",
      title: "Zeppos",
      position: "top",
    },
    {
      id: "rand",
      tab: 'Rand Dining',
      pane: "Rand Data",
      title: "Rand",
      position: "top",
    },
    {
      id: "ebi",
      tab: 'EBI',
      pane: "EBI Data",
      title: "EBI",
      position: "top",
    },
    {
        id: "commons",
        tab: 'Commons',
        pane: "Commons Data",
        title: "Commons",
        position: "top",
    },
    {
      id: "rec",
      tab: 'Rec Center',
      pane: "Rec Center Data",
      title: "Rec Center",
      position: "top",
    },
    {
      id: "alumni",
      tab: 'Alumni Gym',
      pane: "Alumni Gym Data",
      title: "Alumni Gym",
      position: "top",
    },
    {
      id: "central",
      tab: 'Central',
      pane: "Central Library Data",
      title: "Central Library",
      position: "top",
    },
  ];

  const { activeLocation, detailsClick } = props

  function setPanels() {
    sidebar.removePanel();
    panels.forEach((panel) => {
        sidebar.addPanel(panel);
    });
  }

  useEffect(() => {
    console.log("Going to add panels")
    setPanels()
    }, []);

  useEffect(() => {
      if (activeLocation != null) {
        sidebar.open(activeLocation);
      }
  }, [detailsClick]);

  return (<div></div>);
};

export default Sidebar;
