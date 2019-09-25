import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

const Map = (props) => {
  // Dummy data variable
  const dummyData = [
    { name: "Danger", lat: 30.1571, lng: -97.7831 },
    { name: "Zone", lat: 30.1621, lng: -97.7771 }
  ];

  // State initializations
	const [data, setData] = useState({data: dummyData, zoom: 11});

	const mapOptions = {
		styles: [
			{
					"featureType": "all",
					"stylers": [
							{
									"saturation": 0
							},
							{
									"hue": "#e7ecf0"
							}
					]
			},
			{
					"featureType": "road",
					"stylers": [
							{
									"saturation": -70
							}
					]
			},
			{
					"featureType": "transit",
					"stylers": [
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "poi",
					"stylers": [
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "water",
					"stylers": [
							{
									"visibility": "simplified"
							},
							{
									"saturation": -60
							}
					]
			}
		]
	}
  return (
    <div
      style={{
				height: "82.4vh",
        width: "100%"
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE" }}
        center={props.centerMap}
				defaultZoom={data.zoom}
				options={mapOptions}
      >
				{/* Display marker data here */}
        {data.data.map((marker, index) => {
          return (
            <MapMarker
              key={index}
              name={marker.name}
              lat={marker.lat}
              lng={marker.lng}
              // color="blue"
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
