
import { Marker, useMap} from 'react-leaflet';
import MyPopup from './popup';
function MapMarker(props) {
    const map = useMap();
    const {location, name, position, icon, setActiveLocation, setDetailsClick} = props

    return (
    <Marker name = {name} 
            position = {position} 
            icon = {icon} 
            eventHandlers={{
                mouseover: (event) => event.target.openPopup(),
                click: (event) => map.flyTo(position)}}> 
                <MyPopup location={location} position={position} setActiveLocation={setActiveLocation} setDetailsClick={setDetailsClick}/>
            </Marker>
    )

}

export default MapMarker;