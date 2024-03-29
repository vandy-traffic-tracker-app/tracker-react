import { Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import "./popup.css";
import BarChart from "./barcharts/barchart";
import BarChartPopUp from "./barcharts/popupbar";

function MyPopup(props) {
  const map = useMap();

  const { location, setActiveLocation, position, setDetailsClick } = props;
  const [currOcc, setCurrOcc] = useState(0);

  const capacity = location.capacity;

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
    fetch(`/api/getCurrentOccupancy/${location.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrOcc(data);
      });
  };

  useEffect(() => {
    fetchCurrOcc();
  }, []);

  var percentOcc = Math.floor((currOcc / capacity) * 100);

  return (
    <Popup onMouseEnter={(event) => event.target.openPopup()}>
      <p className="Header">{location.name}</p>
      <p className="Regular">Estimated Current Occupancy:</p>
      <p className="Regular"> {JSON.stringify(currOcc)} people</p>
      <p className="Regular">Current Percent Capacity:</p>
      <p
        className="Figure"
        style={{ color: percentOcc < 25 ? "Green" : "Red" }}
      >
        {" "}
        {percentOcc}%
      </p>
      <p
        className="Regular"
        style={{
          "font-size": "20px",
          "text-align": "center",
          marginBottom: "0px",
        }}
      >
        Location Occupancy
      </p>
      <BarChartPopUp location={location.id} curOcc={currOcc} />
      <p className="Regular" style={{ "font-size": "12px", marginTop: "2px" }}>
        The above graph shows current data, plus predicted occupancy for the
        next 5 hours or until close.
      </p>
      <button onClick={handleClick}>Details </button>
    </Popup>
  );
}

export default MyPopup;
