import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";
import { darkMode, lightMode } from "./mapStyles";

const Map = props => {
  // Dummy data variable
  const dummyData = [
    { name: "Danger", lat: 30.1571, lng: -97.7831 },
    { name: "Zone", lat: 30.1621, lng: -97.7771 }
  ];

  const getDate = new Date();
  const myDate = getDate.getHours();

  // State initializations
  const [data, setData] = useState({ data: dummyData, zoom: 11 });
  const [mapStyles, setMapStyles] = useState(lightMode);

  useEffect(() => {
    if (myDate >= 18) {
      setMapStyles(darkMode);
    }
  }, [myDate]);

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
        options={mapStyles}
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
