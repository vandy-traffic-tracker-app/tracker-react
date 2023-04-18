import { Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import './popup.css';
import BarChart from './barchart';
import BarChart2 from './barchartv2';

function MyPopup (props) {
    var totalCapacity = 300;
    var capacity = 20;
    const map = useMap();

    const {location, testTime, testOcc, setActiveLocation, position, setDetailsClick} = props;

    const handleClick = () => {
        // setActiveLocation(location.id);
        // setDetailsClick(Date.now());
        // map.flyTo(position);
        console.log()
        updateChart();
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
    const [time, setTime] = useState([]);
    const [occupancy, setOccupancy] = useState([]);

    // useEffect(() => {
    //     fetch("/TestgetAverageOccupancyByWeekday/Roth/Mon").then(
    //         (res) => res.json()
    //     ).then(
    //         data => {
    //             const time = data.map(
    //                 function(index) {
    //                     return index.time;
    //                 }
    //             )
    //             const occupancy = data.map(
    //                 function(index) {
    //                     return index.occupancy;
    //                 }
    //             )

    //             setTime(time);
    //             setOccupancy(occupancy);
    //         }
    //     );
    // }, []);

    function updateChart() {
        async function fetchData() {
            const url = '/TestgetAverageOccupancyByWeekday/Roth/Mon';
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
            console.log(time);
            setOccupancy(occupancy);
            console.log(occupancy);
        });
    }

    const onMouse = (event) => {
        event.target.openPopup();
        updateChart();
        console.log(testTime);
    }



    return (
        // <Popup onMouseEnter={(event) => event.target.openPopup()}>
        <Popup onMouseEnter={onMouse}>
            <p className='Header'>{location.name}</p>
            <p>This id was obtained from the backend: {data.location}</p>
            <p>This id was obtained from the backend: {testOcc}</p>
            <p className='Regular'>Est. Total Occupancy:</p>
            <p className='Regular'> {totalCapacity} people</p>
            <p className='Regular'>Current Percent Capacity:</p>
            <p className='Figure' style={{color: capacity < 24 ? "Green" : "Red"}}> {capacity}%</p>
            <p className='Regular'>We love {location.name}!!!!</p>
            <BarChart barTime={time} barOcc={occupancy} />
            <button onClick={handleClick}> Details </button>
        </Popup>
    )
}

export default MyPopup;



