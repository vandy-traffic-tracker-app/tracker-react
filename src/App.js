import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";


function App() {
  const position = [36.14487659335152, -86.80265511885861]
  const roth = [36.14760961442212, -86.80677877652803]
  const zeppos = [36.146688025712265, -86.8078919312855]
  const rand = [36.146217154062526, -86.80308581779046]

  const customIcon = new Icon({
    iconUrl: require("./img/dining-icon.png"),
    iconSize: [38,38]
  })

  return (
    <div className="App">
      <header className="App-header">
      <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={roth} icon = {customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Marker position={zeppos} icon = {customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Marker position={rand} icon = {customIcon}>
      <Popup maxWidth="10000" maxHeight="10000" >
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      </header>
    </div>
  );
}

export default App;
