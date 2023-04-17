import './App.css';
import VandyMap from './components/map';
import Header from './components/header';
import locations from './components/locations';
import MiniDrawer from './components/sidebar/sidebarv1';
import SideBarV2 from './components/sidebar/sidebarv2';

function App() {
  return (
    <div >
      {/* <Header className="header"/> */}
      {/* <SideBarV2/> */}
      <MiniDrawer/>
      {/* <VandyMap locations={locations}/> */}
      </div>
  );
}

export default App;
