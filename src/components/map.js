import { MapContainer, TileLayer } from 'react-leaflet';
import Sidebar from './sidebar/leafletsidebar.js';
import { Icon } from "leaflet";
import './map.js'
import { useState } from 'react';
import MapMarker from './mapMarker';

function VandyMap({ locations }) {
  const [activeLocation, setActiveLocation] = useState(null);
  const [detailsClick, setDetailsClick] = useState(null);

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
    {/* <MiniDrawer/> */}
    {/* <Sidebar id = "sidebar" activeLocation={activeLocation} detailsClick={detailsClick}/> */}
     {
        locations.map((location, index) => (
            <MapMarker key={index}
            location={location}
            name = {location.name} 
            position = {location.position} 
            icon = {icons[location.type]} 
            setActiveLocation={setActiveLocation}
            setDetailsClick={setDetailsClick}/> 
        ))
      }
  </MapContainer>
      </header>
    </div>
  );
}

export default VandyMap;