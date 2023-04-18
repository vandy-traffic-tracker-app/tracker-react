
import { Marker, useMap} from 'react-leaflet';
import MyPopup from './popup';
import { useState } from 'react';
function MapMarker(props) {
    const map = useMap();
    const {location, name, position, icon, setActiveLocation, setDetailsClick} = props

    const [time, setTime] = useState([]);
    const [occupancy, setOccupancy] = useState([]);

    function updateChart() {
        async function fetchData() {
            const url = '/TestgetAverageOccupancyByWeekday/Roth/Mon';
            const response = await fetch(url);
            // wait until the request has complete
            const datapoints = await response.json();
            console.log(datapoints);
        };
        fetchData().then(datapoints => {
            
            const time = datapoints.map(
                function(index) {
                    return index.time;
                }
            )
            const occupancy = datapoints.map(
                function(index) {
                    return index.occupancy;
                }
            )

            console.log('here')
            setTime(time);
            console.log(time);
            setOccupancy(occupancy);
            console.log(occupancy);
        })
    }

    const onMouse = (event) => {
        event.target.openPopup();
        updateChart();
    }
    
    return (
    <Marker name = {name} 
            position = {position} 
            icon = {icon} 
            eventHandlers={{
                mouseover: onMouse,
                click: (event) => map.flyTo(position)}}> 
                <MyPopup location={location} position={position} setActiveLocation={setActiveLocation} setDetailsClick={setDetailsClick} 
                testTime={time} testOcc={occupancy} />
            </Marker>
    )

}

export default MapMarker;

