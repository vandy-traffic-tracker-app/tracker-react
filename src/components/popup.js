import { Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import './popup.css';
import BarChart from './barchart';

function MyPopup (props) {
    const map = useMap();

    const {location, setActiveLocation, position, setDetailsClick} = props;
    const [currOcc, setCurrOcc] = useState(0)

    const capacity = location.capacity

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

    const fetchCurrOcc = () => {
        fetch(`./getCurrentOccupancy/${location.id}`) //gets the course numbers from the database
        .then(response => {
            return response.json()
          })
        .then(data => {
            setCurrOcc(data)
        })
    }

    useEffect(() => {
        fetchCurrOcc()
      }, [])
      
    var percentOcc = currOcc / capacity

    return (
        <Popup onMouseEnter={(event) => event.target.openPopup()}>
            <p className='Header'>{location.name}</p>
            <p className='Regular'>Estimated Current Occupancy:</p>
            <p className='Regular'> {JSON.stringify(currOcc)} people</p>
            <p className='Regular'>Current Percent Capacity:</p>
            <p className='Figure' style={{color: percentOcc < 0.25 ? "Green" : "Red"}}> {percentOcc}%</p>
            <BarChart/>
            <button onClick={handleClick}> Details </button>
        </Popup>
    )
}

export default MyPopup;