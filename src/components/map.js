import { MapContainer, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import './map.js'
import MapMarker from './mapMarker';
import locations from './locations';

function VandyMap( props ) {

  const { activeLocation, setActiveLocation, detailsClick, setDetailsClick} = props

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
    <TileLayer
    attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=RY9Mmlvez3uny0hKkGGHLz5cPGRPZ4EvLnObDC1CNwInyal3imyBvlCErDE8otLH'
    />
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