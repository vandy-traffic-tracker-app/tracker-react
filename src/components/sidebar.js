import { useMap } from "react-leaflet";
import { Fragment } from "react";
import { Icon, L } from "leaflet";
import { useV2Sidebar} from "react-leaflet-v2-sidebar";
import './sidebar.css';

function Sidebar(props) {
    const map = useMap();
    // const homeIcon = new Icon({
    //     iconUrl: require("../img/home-icon.png"),
    //     iconSize: [38,38]
    //   })
    const { markers } = props;

    console.log(markers)


  const panels = [
    {
      id: "Home",
      tab: 'Home',
      pane: "Welcome to VandyTracker",
      title: "About VandyTracker",
      position: "top",
    },
    {
      id: "Rothschild",
      tab: '<i style="font-size: large" class="fa fa-user"></i> Rothschild Dining',
      pane: "Rothschild Data",
      title: "Rothschild",
      position: "top",
    },
    {
      id: "Zeppos",
      tab: '<i style="font-size: large" class="fa fa-gear"></i> Zeppos Dining',
      pane: "Zeppos Data",
      title: "Zeppos",
      position: "top",
    },
    {
      id: "Rand-Dining-Center",
      tab: '<i style="font-size: large" class="fa fa-github"></i> Rand Dining',
      pane: "Rand Data",
      title: "Rand",
      position: "top",
    },
    {
      id: "EBI",
      tab: '<i style="font-size: large" class="fa fa-github"></i> EBI Dining',
      pane: "EBI Data",
      title: "EBI",
      position: "top",
    },
    {
      id: "Rec-Center",
      tab: '<i style="font-size: large" class="fa fa-github"></i> Rec Center',
      pane: "Rec Center Data",
      title: "Rec Center",
      position: "top",
    },
    {
      id: "Alumni-Rec",
      tab: '<i style="font-size: large" class="fa fa-github"></i> Alumni Gym',
      pane: "Alumni Gym Data",
      title: "Alumni Gym",
      position: "top",
    },
    {
      id: "Central-Library",
      tab: '<i style="font-size: large" class="fa fa-github"></i> Central',
      pane: "Central Library Data",
      title: "Central Library",
      position: "top",
    },
  ];
  var sidebar = useV2Sidebar(map, panels);
  //var sidebar = L.control.sidebar('sidebar').addTo(map);

  return sidebar;
}

export default Sidebar;