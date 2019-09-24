import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

const Map = props => {
  const dummyData = [
    { name: "Marker", lat: 30.1571, lng: -97.7831 },
    { name: "Marker Two", lat: 30.1621, lng: -97.7771 }
  ];

  const [data, setData] = useState(dummyData);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%"
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {data.map(marker => {
          return (
            <MapMarker name={marker.name} lat={marker.lat} lng={marker.lng} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};
Map.defaultProps = {
  center: { lat: 30.2672, lng: -97.7431 },
  zoom: 11
};
export default Map;
