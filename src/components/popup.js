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
        updateChart();
    };

    const [data, setData] = useState({
        student: "",
        location: "hi",
        scanner: "",
        timeStamp: "",
    });

    const [time, setTime] = useState({});
    const [occupancy, setOccupancy] = useState({});
    var [datapoints, setDatapoints] = useState({});

    useEffect(() => {
        fetch("/test").then(
            (res) => res.json()
        ).then(
            data => {
                setData({
                    student: data.studentID,
                    location: data.locationID,
                    scanner: data.scannerID,
                    timeStamp: data.time_stamp
                });
            }
        );
    }, []);

    function updateChart() {
        async function fetchData() {
            const url = '/TestgetAverageOccupancyByWeekday/' + location + '/Mon';
            const response = await fetch(url);
            // wait until the request has complete
            const datapoints = await response.json();
            console.log(datapoints);
            return datapoints;
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

            setTime(time);
            setOccupancy(occupancy);
        });
    }

    return (
        <Popup onMouseEnter={(event) => event.target.openPopup()}>
            <p className='Header'>{location.name}</p>
            <p>This id was obtained from the backend: {data.location}</p>
            <p className='Regular'>Est. Total Occupancy:</p>
            <p className='Regular'> {totalCapacity} people</p>
            <p className='Regular'>Current Percent Capacity:</p>
            <p className='Figure' style={{color: capacity < 24 ? "Green" : "Red"}}> {capacity}%</p>
            <p className='Regular'>We love {location.name}!!!!</p>
            <BarChart barTime={time} barOcc={occupancy} barData={datapoints}/>
            <button onClick={handleClick}> Details </button>
        </Popup>
    )
}

export default MyPopup;