import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";
import { darkMode, lightMode } from "./mapStyles";

// Context
import { MapMarkers } from '../../context/MapMarkerContext';

const Map = props => {
	// Connecting to context
	const {mapMarkers} = React.useContext(MapMarkers)
	console.log("CONTEXT IN MAP COMPONENT", mapMarkers)

  // State initializations
  const [mapStyles, setMapStyles] = useState(lightMode);

	const getDate = new Date();
  const myDate = getDate.getHours();
  useEffect(() => {
    if (myDate >= 18) {
      setMapStyles(darkMode);
    }
	}, [myDate]);

	if(mapMarkers.length < 1){
		return (
			<div
				style={{
					height: "82.4vh",
					width: "100%"
				}}
			>
				<GoogleMapReact
					bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
					center={props.centerMap}
					defaultZoom={11}
					options={mapStyles}
				>
					{/* Display marker data here
					{data.data.map((marker, index) => {
						return (
							<MapMarker
								key={index}
								name={marker.name}
								lat={marker.lat}
								lng={marker.lng}
							/>
						);
					})} */}
				</GoogleMapReact>
			</div>
		);
	}

	return (
    <div
      style={{
        height: "82.4vh",
        width: "100%"
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
        center={props.centerMap}
        defaultZoom={11}
        options={mapStyles}
      >
        {/* Display marker data here */}
        {mapMarkers.map((marker, index) => {
          return (
            <MapMarker
              key={index}
							marker={marker}
							lat={marker.latitude}
							lng={marker.longitude}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
  
};

export default Map;
