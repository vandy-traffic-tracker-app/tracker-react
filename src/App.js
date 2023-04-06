import './App.css';
import VandyMap from './components/map';
import Header from './components/header';

function App() {
  const locations = [
    {
      name: "Rothschild",
      position: [36.14760961442212, -86.80677877652803],
      type: "dining"
    },
    {
      name: "Zeppos",
      position: [36.146688025712265, -86.8078919312855],
      type: "dining"
    },
    {
      name: "Rand",
      position: [36.146217154062526, -86.80308581779046],
      type: "dining"
    },
    {
      name: "EBI",
      position: [36.148774454377865, -86.80360279494184],
      type: "dining"
    },
    {
      name: "Rec",
      position: [36.14126162203478, -86.80896793107104],
      type: "gym"
    },
    {
      name: "Alumni Gym",
      position: [36.14808480396374, -86.80337703137474],
      type: "gym"
    },
    {
      name: "Central",
      position: [36.14593570087756, -86.80027493107089],
      type: "library"
    },
  ]
  return (
    <div className="App">
      <Header className="header"/>
    <VandyMap locations={locations} />
      </div>
  );
}

export default App;
