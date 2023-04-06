import { Marker, useMap } from "react-leaflet";
import {L} from "leaflet"
import Sidebar from "./sidebar";
import { useEffect, useRef} from "react";
import MyPopup from './popup';

function MapMarker({ position, name, icon }) {
//     var markerRef = useRef()
//     const map = useMap;

//   const openSidebar = (panelId) => {
//     Sidebar.open(panelId);
//   };

//   const handleClick = (e) => {
//     openSidebar(name);
//   };

//   useEffect(() => {
//     const marker = markerRef.current;
//     if (marker) {
//       marker.addEventListener("click", handleClick);
//     }
//     return () => {
//       if (marker) {
//         marker.removeEventListener("click", handleClick);
//       }
//     };
//   }, [markerRef]);

  console.log(name)

  return <Marker key = {name} position = {position} icon = {icon} eventHandlers={{
    mouseover: (event) => event.target.openPopup()
  }}> <MyPopup location={name}/> </Marker>;
}

export default MapMarker;