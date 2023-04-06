import { Popup } from 'react-leaflet';
import './popup.css';

function MyPopup (prop) {
    return (
        <Popup>
            <h1 className='Header'>{prop.location}</h1>
            <p className='Regular'>Est. Current Occupancy: 300 people</p> <br/>
            <p className='Regular'>Capacity: 12%</p>
            <p className='Regular'>We love {prop.location}!!!!</p>
        </Popup>
    )
}

export default MyPopup;