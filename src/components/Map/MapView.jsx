import React from "react";
import Map from "./Map";
import LeftPanel from '../Panels/LeftPanel';
import RightPanel from '../Panels/RightPanel';

// Styles
import './MapView.scss'

// Context
import { MapMarkers } from '../../context/MapMarkerContext'

function MapView() {
	const [center, setCenterMap] = React.useState({lat: 30.2672, lng: -97.7431})
	// State to be passed by context
	const [ mapMarkers, setMapMarkers] = React.useState([])

	const changeCenter = newCoords => {
		setCenterMap(newCoords)
	}

  return (
			<div>
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
