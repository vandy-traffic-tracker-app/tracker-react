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
import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() =>{
    fetch("http://localhost:5000/members").then(
      res => res.json()

    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
}


export default App;
