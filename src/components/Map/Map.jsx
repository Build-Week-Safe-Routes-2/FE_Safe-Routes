import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";
import { darkMode, lightMode } from "./mapStyles";

// Context
import { MapMarkers } from '../../context/MapMarkerContext';

const Map = props => {
  // Dummy data variable
  const dummyData = [
    { name: "Danger", lat: 30.1571, lng: -97.7831 },
    { name: "Zone", lat: 30.1621, lng: -97.7771 }
	];
	
	// Connecting to context
	const {mapMarkers} = React.useContext(MapMarkers)
	console.log("CONTEXT IN MAP COMPONENT", mapMarkers)

  // State initializations
  const [data, setData] = useState({ data: dummyData, zoom: 11 });
  const [mapStyles, setMapStyles] = useState(lightMode);

	const getDate = new Date();
  const myDate = getDate.getHours();
  useEffect(() => {
    if (myDate >= 18) {
      setMapStyles(darkMode);
    }
  }, [myDate, mapMarkers]);

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
					defaultZoom={data.zoom}
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
        defaultZoom={data.zoom}
        options={mapStyles}
      >
        {/* Display marker data here */}
        {mapMarkers.map((marker, index) => {
          return (
            <MapMarker
              key={index}
              marker={marker}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
  
};

export default Map;
