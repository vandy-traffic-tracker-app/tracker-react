import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import MyPopup from './popup';

function VandyMap(props) {
  const position = [36.14487659335152, -86.80265511885861]
  const roth = [36.14760961442212, -86.80677877652803]
  const zeppos = [36.146688025712265, -86.8078919312855]
  const rand = [36.146217154062526, -86.80308581779046]
  const ebi = [36.148774454377865, -86.80360279494184]
  const rec = [36.14126162203478, -86.80896793107104]
  const alumniGym = [36.14808480396374, -86.80337703137474]
  const central = [36.14593570087756, -86.80027493107089]
  
  const diningIcon = new Icon({
    iconUrl: require("../img/dining-icon.png"),
    iconSize: [38,38]
  })

  const gymIcon = new Icon({
    iconUrl: require("../img/gym-icon.png"),
    iconSize: [38,38]
  })

  const libraryIcon = new Icon({
    iconUrl: require("../img/library-icon.png"),
    iconSize: [38,38]
  })

  return (

    <div className="App">
      <header className="App-header">
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
    {/* 
    Original map object:
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> */}
    <TileLayer
    attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=RY9Mmlvez3uny0hKkGGHLz5cPGRPZ4EvLnObDC1CNwInyal3imyBvlCErDE8otLH'
    />
    <MarkerClusterGroup>
      <Marker position={roth} icon = {diningIcon}>
        <MyPopup location="Roth"/>
      </Marker>
      <Marker position={zeppos} icon = {diningIcon}>
        <MyPopup location="Zeppos"/>
      </Marker>
      <Marker position={rand} icon = {diningIcon}>
        <MyPopup location="Rand"/>
      </Marker>
      <Marker position={ebi} icon={diningIcon}>
        <MyPopup location="EBI" />
      </Marker>
      <Marker position={rec} icon={gymIcon}>
        <MyPopup location="The Rec"/>
      </Marker>
      <Marker position={alumniGym} icon={gymIcon}>
        <MyPopup location="Alumni Gym"/>
      </Marker>
      <Marker position={central} icon={libraryIcon}>
        <MyPopup location="Central Library" />
      </Marker>
      </MarkerClusterGroup>
  </MapContainer>
      </header>
    </div>
  );
}

export default VandyMap;