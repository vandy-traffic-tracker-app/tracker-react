import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MapContainer center={[36.14487659335152, -86.80265511885861]} zoom={16}scrollWheelZoom={true}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
      </header>
    </div>
  );
}

export default App;
