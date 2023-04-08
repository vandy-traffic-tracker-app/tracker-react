import './App.css';
import VandyMap from './components/map';
import Header from './components/header';
import locations from './components/locations';

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <VandyMap locations={locations}/>
      </div>
  );
}

export default App;
