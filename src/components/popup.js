import { Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import './popup.css';
import BarChart from './barchart';

function MyPopup (props) {
    var totalCapacity = 300;
    var capacity = 20;
    const map = useMap();

    const {location, setActiveLocation, position, setDetailsClick} = props;

    const handleClick = () => {
        setActiveLocation(location.id);
        setDetailsClick(Date.now());
        map.flyTo(position);
    };

    const [data, setData] = useState({
        student: "",
        location: "hi",
        scanner: "",
        timeStamp: "",
    });

    // useEffect(() => {
    //     fetch("/test").then(
    //         res => res.json()
    //     ).then(
    //         data => {
    //             setData({
    //                 student: data.studentID,
    //                 location: data.locationID,
    //                 scanner: data.scannerID,
    //                 timeStamp: data.time_stamp
    //             });
    //         }
    //     );
    // }, []);

    return (
        <Popup onMouseEnter={(event) => event.target.openPopup()}>
            <p className='Header'>{location.name}</p>
            <p>This id was obtained from the backend: {data.location}</p>
            <p className='Regular'>Est. Total Occupancy:</p>
            <p className='Regular'> {totalCapacity} people</p>
            <p className='Regular'>Current Percent Capacity:</p>
            <p className='Figure' style={{color: capacity < 24 ? "Green" : "Red"}}> {capacity}%</p>
            <p className='Regular'>We love {location.name}!!!!</p>
            <BarChart/>
            <button onClick={handleClick}> Details </button>
        </Popup>
    )
}

export default MyPopup;