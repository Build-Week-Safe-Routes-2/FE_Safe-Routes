import React from "react";
import MapNav from "../MapNav/MapNav";
import Map from "./Map";
import LeftPanel from '../Panels/LeftPanel';
import RightPanel from '../Panels/RightPanel';

// Styles
import './MapView.scss'

function MapView() {
	const [center, setCenterMap] = React.useState({lat: 30.2672, lng: -97.7431})

	const changeCenter = newCoords => {
		setCenterMap(newCoords)
	}

  return (
    <div>
			<div className="dash-container">
				<LeftPanel changeCenter={changeCenter}/>
				<Map centerMap={center}/>
				<RightPanel/>
			</div>
    </div>
  );
}

export default MapView;
