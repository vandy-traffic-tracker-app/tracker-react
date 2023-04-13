import { Popup, useMap } from 'react-leaflet';
import './popup.css';

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
    return (
        <Popup onMouseEnter={(event) => event.target.openPopup()}>
            <p className='Header'>{location.name}</p>
            <p className='Regular'>Est. Total Occupancy:</p>
            <p className='Regular'> {totalCapacity} people</p>
            <p className='Regular'>Current Percent Capacity:</p>
            <p className='Figure' style={{color: capacity < 24 ? "Green" : "Red"}}> {capacity}%</p>
            <p className='Regular'>We love {location.name}!!!!</p>
            <button onClick={handleClick}> Details </button>
        </Popup>
    )
}

export default MyPopup;