import { Popup } from 'react-leaflet';
import './popup.css';

function MyPopup (prop) {
    return (
        <Popup>
            <h1 className='Header'>{prop.location}</h1>
            <p1 className='Regular'>Est. Current Occupancy: 300 people</p1> <br/>
            <p2 className='Regular'>Capacity: 12%</p2>
        </Popup>
    )
}

export default MyPopup;