import { useMap } from "react-leaflet";
import { useV2Sidebar} from "react-leaflet-v2-sidebar";
// import './sidebar.css';

function Sidebar(props) {
    const map = useMap();

    const { markers } = props;

    console.log(markers)

    const panels = [
    {
      id: "Home",
      tab: '<i style="font-size: large" class="fa fa-home"></i>',
      pane: "Welcome to VandyTracker",
      title: "About VandyTracker",
      position: "top",
    },
    {
      id: "Rothschild",
      tab: 'Rothschild Dining',
      pane: "Rothschild Data",
      title: "Rothschild",
      position: "top",
    },
    {
      id: "Zeppos",
      tab: 'Zeppos Dining',
      pane: "Zeppos Data",
      title: "Zeppos",
      position: "top",
    },
    {
      id: "Rand-Dining-Center",
      tab: 'Rand Dining',
      pane: "Rand Data",
      title: "Rand",
      position: "top",
    },
    {
      id: "EBI",
      tab: 'EBI Dining',
      pane: "EBI Data",
      title: "EBI",
      position: "top",
    },
    {
      id: "Rec-Center",
      tab: 'Rec Center',
      pane: "Rec Center Data",
      title: "Rec Center",
      position: "top",
    },
    {
      id: "Alumni-Rec",
      tab: 'Alumni Gym',
      pane: "Alumni Gym Data",
      title: "Alumni Gym",
      position: "top",
    },
    {
      id: "Central-Library",
      tab: 'Central',
      pane: "Central Library Data",
      title: "Central Library",
      position: "top",
    },
  ];
  var sidebar = useV2Sidebar(map, panels);

  return sidebar;
}

export default Sidebar;