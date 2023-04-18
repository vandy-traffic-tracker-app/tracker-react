import { Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import './popup.css';
import BarChart from './barchart';

function MyPopup (props) {
    var totalOccupancy = 300;
    var capacity = 20;
    const map = useMap();

    const {location, setActiveLocation, position, setDetailsClick} = props;
    const [currOcc, setCurrOcc] = useState(0)

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
    console.log("locationID is: " + location.id)

    const fetchCurrOcc = () => {
        fetch(`./getCurrentOccupancy/${location.id}`) //gets the course numbers from the database
        .then(data => {
            setCurrOcc(data)
        })
    }

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

    useEffect(() => {
        fetchCurrOcc()
      }, [])

    console.log("currOcc" + currOcc)


    return (
        <Popup onMouseEnter={(event) => event.target.openPopup()}>
            <p className='Header'>{location.name}</p>
            <p>This id was obtained from the backend: {data.location}</p>
            <p className='Regular'>Est. Total Occupancy:</p>
            <p className='Regular'> {currOcc} people</p>
            <p className='Regular'>Current Percent Capacity:</p>
            <p className='Figure' style={{color: capacity < 24 ? "Green" : "Red"}}> {capacity}%</p>
            <p className='Regular'>We love {location.name}!!!!</p>
            <BarChart/>
            <button onClick={handleClick}> Details </button>
        </Popup>
    )
}

export default MyPopup;