import React from "react";
import MapNav from "../MapNav/MapNav";
import Map from "./Map";

function MapView() {
	const [center, setCenterMap] = React.useState({lat: 30.2672, lng: -97.7431})

	const changeCenter = newCoords => {
		setCenterMap(newCoords)
	}

  return (
    <div>
      <div>
        <MapNav changeCenter={changeCenter}/>
      </div>

      <Map centerMap={center}/>
    </div>
  );
}

export default MapView;
