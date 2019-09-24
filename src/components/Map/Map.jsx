import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

const Map = () => {
  // Dummy data variable
  const dummyData = [
    { name: "Danger", lat: 30.1571, lng: -97.7831 },
    { name: "Zone", lat: 30.1621, lng: -97.7771 }
  ];

  // State initializations
  const [data, setData] = useState(dummyData);
  const [center, setCenter] = useState({ lat: 30.2672, lng: -97.7431 });
  const [zoom, setZoom] = useState(11);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%"
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Display marker data here */}
        {data.map((marker, index) => {
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
