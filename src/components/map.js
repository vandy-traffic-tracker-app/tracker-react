import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Sidebar from './sidebar';
import { Icon } from "leaflet";
import MapMarker from './mapMarker';
import { useV2Sidebar, Sidebar as V2Sidebar } from "react-leaflet-v2-sidebar";
import { useNavigate } from 'react-router-dom';
import './map.js'

function VandyMap(props) {
  const position = [36.14487659335152, -86.80265511885861]
    const diningIcon = new Icon({
    iconUrl: require("../img/dining-icon.png"),
    iconSize: [38,38]
    })

    const gymIcon = new Icon({
    iconUrl: require("../img/gym-icon.png"),
    iconSize: [38,38]
    })

    const libraryIcon = new Icon({
    iconUrl: require("../img/library-icon.png"),
    iconSize: [38,38]
    })

    const icons = {
      dining: diningIcon,
      gym: gymIcon,
      library: libraryIcon
    };

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

  const { locations } = props;

  // Marker.on('click', function() {
  //   window.location.href = 'localhost:3000';
  // });

  return (
    <div className="App">
      <header className="App-header">
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
    {/* 
    Original map object:
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> */}
    <TileLayer
    attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=RY9Mmlvez3uny0hKkGGHLz5cPGRPZ4EvLnObDC1CNwInyal3imyBvlCErDE8otLH'
    />
    <Sidebar id = "sidebar" locations = {locations}/>
    <MarkerClusterGroup>
      {
        locations.map(location => (
          <div>
            <MapMarker name = {location.name} position = {location.position} icon = {icons[location.type]} eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
          }}/>
          </div>
        ))
      }
      </MarkerClusterGroup>
      
  </MapContainer>
      </header>
    </div>
  );
}

export default VandyMap;