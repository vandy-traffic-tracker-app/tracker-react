import 'leaflet-sidebar-v2/js/leaflet-sidebar.min.js';
import './sidebar.css'
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import BarChart from './barchart'

const { renderToString } = ReactDOMServer;


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
      pane: renderToString(<BarChart/>),
      title: "Rothschild",
      position: "top",
    },
    {
      id: "zeppos",
      tab: 'Zeppos',
      pane: renderToString(<BarChart/>),
      title: "Zeppos",
      position: "top",
    },
    {
      id: "rand",
      tab: 'Rand Dining',
      pane: renderToString(<BarChart/>),
      title: "Rand",
      position: "top",
    },
    {
      id: "ebi",
      tab: 'EBI',
      pane: renderToString(<BarChart/>),
      title: "EBI",
      position: "top",
    },
    {
        id: "commons",
        tab: 'Commons',
        pane: renderToString(<BarChart/>),
        title: "Commons",
        position: "top",
    },
    {
      id: "rec",
      tab: 'Rec Center',
      pane: renderToString(<BarChart/>),
      title: "Rec Center",
      position: "top",
    },
    {
      id: "alumni",
      tab: 'Alumni Gym',
      pane: renderToString(<BarChart/>),
      title: "Alumni Gym",
      position: "top",
    },
    {
      id: "central",
      tab: 'Central',
      pane: renderToString(<BarChart/>),
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
