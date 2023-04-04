import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import VandyMap from './components/map';


function App() {
  return (
    <VandyMap />
  )
}

export default App;
