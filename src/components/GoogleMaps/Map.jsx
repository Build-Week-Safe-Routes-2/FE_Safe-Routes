import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 30.2672, lng: -97.7431 }}
    />
  );
};

const MapHOC = withScriptjs(withGoogleMap(Map));

export default MapHOC;
