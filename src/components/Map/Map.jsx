import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Loader from 'react-loader-spinner'
import MapMarker from "./MapMarker";

// Custom Map styles
import { darkMode, lightMode } from "./mapStyles";

// Context
import { MapMarkers } from '../../context/MapMarkerContext';

const Map = props => {
	// Connecting to context
	const {mapMarkers} = React.useContext(MapMarkers)

  // State initializations
  const [mapStyles, setMapStyles] = useState(lightMode);

	const getDate = new Date();
  const myDate = getDate.getHours();
  useEffect(() => {
    if (myDate >= 18) {
      setMapStyles(darkMode);
    }
	}, [myDate]);

	useEffect(() => {
		console.log("cleaned up")
	},[])

	if(mapMarkers.isLoading){
		return(
			<div style={{height: "82.4vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "F4F4F4"}}>
				<Loader
					type="Oval"
					color="#1582E1"
					height={100}
					width={100}
					timeout={30000} //30 secs
				/>
			</div>
     );
	} else if (mapMarkers.markers.length < 1) {
		return (
			<div style={{height: "100vh", width: "100%"}}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
					center={props.centerMap}
					defaultZoom={11}
					options={mapStyles}
				>
				
				</GoogleMapReact>
			</div>
		);
	}

	return (
    <div
      style={{
        height: "100vh",
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
        {mapMarkers.markers.map((marker, index) => {
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
