import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Fragment } from "react";
import { useV2Sidebar, V2SidebarPanelsType } from "react-leaflet-sidebar-v2";

function mySidebar(prop) {
    const map = useMap();
    
  const panels = [
    {
      id: "userInfo",
      tab: '<i style="font-size: large" class="fa fa-user"></i>',
      pane: "User Info Tab Content",
      title: "Your Profile",
      position: "top",
    },
    {
      id: "settings",
      tab: '<i style="font-size: large" class="fa fa-gear"></i>',
      pane: "Settings Tab Content",
      title: "Settings Tab",
      position: "top",
    },
    {
      id: "github",
      tab: '<i style="font-size: large" class="fa fa-github"></i>',
      pane: "Github Tab Content",
      title: "Github Info",
      position: "bottom",
    },
  ];
  useV2Sidebar(map, panels);

  return <Fragment></Fragment>;
}

export default mySidebar;