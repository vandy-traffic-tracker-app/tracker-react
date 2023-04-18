import './App.css';
import VandyMap from './components/map';
import Header from './components/header';
import locations from './components/locations';
import MiniDrawer from './components/sidebar/sidebarv1';
import SideBarV2 from './components/sidebar/sidebarv2';
import Sidebar from './components/sidebar/newSb'

function App() {
  return (
    <div>
      <Header />
    <div>
      {/* <SideBarV2/> */}
      {/* <MiniDrawer/> */}
      <VandyMap locations={locations}/>
      <Sidebar/>
      </div>
    </div>
  );
}

export default App;
