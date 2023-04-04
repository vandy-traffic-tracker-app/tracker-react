import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import VandyMap from './components/map';
import mySidebar from './components/sidebar';



function App() {
  return (
    <div>
    <header> 
      VandyTracker
    </header>
    <VandyMap/>
      </div>
  )
}

export default App;
