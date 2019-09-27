import React from "react";
import Map from "./Map";
import MapNav from '../Panels/MapNav';
import LeftPanel from '../Panels/LeftPanel';
import RightPanel from '../Panels/RightPanel';

// Styles
import "../Panels/GlobalPanelStyles.scss"

// Context
import { MapMarkers } from '../../context/MapMarkerContext'

function MapView() {
	const [center, setCenterMap] = React.useState({lat: 30.2672, lng: -97.7431})
	// State to be passed by context
	const [ mapMarkers, setMapMarkers] = React.useState({markers: [], isLoading: false, zoom: 14})

	const changeCenter = newCoords => {
		setCenterMap(newCoords)
	}

  return (
			<div>
				<MapNav />
				<div className="dash-container">
				<MapMarkers.Provider value={{mapMarkers, setMapMarkers}}>
					<LeftPanel changeCenter={changeCenter}/>
					<Map centerMap={center}/>
					<RightPanel/>
				</MapMarkers.Provider>
				</div>
			</div>
  );
}

export default MapView;
